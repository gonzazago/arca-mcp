import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateEmbedding, initEmbedder } from '../embedder/embedder.js';
import { insertDocument, initDB, pool } from '../vector_store/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Recursive Text Splitter Helper
function recursiveSplit(text: string, maxChunkSize: number, overlap: number): string[] {
  if (text.length <= maxChunkSize) return [text];

  const separators = ['\n\n', '\n', '. ', ' ', ''];
  for (const sep of separators) {
    const splits = text.split(sep);
    if (splits.length > 1) {
      const chunks: string[] = [];
      let currentChunk = '';

      for (const split of splits) {
        const potentialChunk = currentChunk ? currentChunk + sep + split : split;
        if (potentialChunk.length <= maxChunkSize) {
          currentChunk = potentialChunk;
        } else {
          if (currentChunk) chunks.push(currentChunk.trim());
          // Start next chunk with overlap
          const overlapChars = currentChunk.slice(Math.max(0, currentChunk.length - overlap));
          currentChunk = overlapChars ? overlapChars + sep + split : split;
        }
      }
      if (currentChunk) chunks.push(currentChunk.trim());

      // If this separator successfully split it into smaller pieces, return them
      if (chunks.some(c => c.length > maxChunkSize)) {
        continue; // Try a finer separator
      }
      return chunks;
    }
  }
  return [text.slice(0, maxChunkSize)]; // Fallback if everything fails
}

function formatXml(xmlStr: string): string {
  let formatted = '';
  let indent = 0;
  const tokens = xmlStr.split(/(<[^>]+>)/g).filter(t => t.trim().length > 0);
  
  for (const token of tokens) {
    if (token.match(/^<\/[^>]+>$/)) {
      indent = Math.max(0, indent - 1);
      formatted += '\n' + '  '.repeat(indent) + token;
    } else if (token.match(/^<[^>]+\/>$/)) {
      formatted += '\n' + '  '.repeat(indent) + token;
    } else if (token.match(/^<[^?!][^>]*>$/)) {
      formatted += '\n' + '  '.repeat(indent) + token;
      indent++;
    } else {
      formatted += '\n' + '  '.repeat(indent) + token.trim();
    }
  }
  return formatted.trim();
}

function cleanMarkdown(content: string): string {
  const codeBlocks: string[] = [];
  content = content.replace(/```[\s\S]*?```/g, match => {
    codeBlocks.push(match);
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });

  const xmlRoots = [
    'soap:Envelope', 'Errors', 'Events', 'ar:FECAESolicitar', 'soapenv:Envelope', 
    'ar:FECAEARegInformativo', 'ar:FECAEASinMovimientoInformar', 'ar:FECAEASinMovimientoConsultar', 
    'ar:FECAEAConsultar', 'ar:Opcionales', 'ar:Tributos', 'ar:Iva', 'ar:Compradores', 
    'ar:PeriodoAsoc', 'ar:Actividades', 'ar:CbtesAsoc', 'Opcionales', 'Tributos', 'Iva', 
    'Compradores', 'PeriodoAsoc', 'Actividades', 'CbtesAsoc', 'ar:FeCAEReq', 'ar:FeCabReq', 'ar:FeDetReq', 'ar:FECAEDetRequest'
  ];
  
  for (const root of xmlRoots) {
    const regex = new RegExp(`(<${root}[\\s>].*?<\\/${root}>)`, 'gs');
    content = content.replace(regex, (match) => {
      return '\n```xml\n' + formatXml(match) + '\n```\n';
    });
  }

  content = content.replace(/__CODE_BLOCK_(\d+)__/g, (match, index) => {
    return codeBlocks[parseInt(index, 10)] || "";
  });

  return content;
}

async function processDirectory(dir: string, stats: any) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath, stats);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      await processFile(fullPath, stats);
    }
  }
}

async function processFile(filePath: string, stats: any) {
  let content = await fs.readFile(filePath, 'utf-8');
  const lines = content.split('\n').filter(l => l.trim().length > 0);
  
  if (lines.length <= 1) {
    console.log(`Borrando archivo vacío o solo título: ${filePath}`);
    await fs.unlink(filePath);
    return;
  }
  
  content = cleanMarkdown(content);
  
  // Guardar archivo limpio (opcional, para debug)
  await fs.writeFile(filePath, content);
  stats.filesProcessed++;

  // Chunking (Limit to ~1000 chars roughly 250 tokens for the embedder context window)
  const chunks = recursiveSplit(content, 1000, 200);
  
  // Embedding & Ingestion
  const filename = path.basename(filePath);
  
  for (let i = 0; i < chunks.length; i++) {
    const chunkText = chunks[i];
    if (!chunkText || chunkText.trim().length < 50) continue; // Skip very small chunks
    
    try {
      const embedding = await generateEmbedding(chunkText);
      const metadata = {
        source: filename,
        chunk_index: i,
        total_chunks: chunks.length,
        timestamp: new Date().toISOString()
      };
      
      await insertDocument(metadata, chunkText, embedding);
      stats.chunksIngested++;
    } catch (e: any) {
      console.error(`Error generando embedding para ${filename} (chunk ${i}):`, e.message);
    }
  }
}

async function main() {
  console.log("Iniciando Pipeline de Ingestión End-to-End...");
  
  await initDB();
  await initEmbedder();
  
  // Clear old vectors if needed (optional). Let's keep it additive for now or delete all to avoid duplicates.
  // console.log("Limpiando tabla de documentos...");
  // await pool.query("TRUNCATE TABLE documents RESTART IDENTITY;");

  const stats = { filesProcessed: 0, chunksIngested: 0 };
  const docsDir = path.resolve(__dirname, '../../docs/md/facturacion');
  
  await processDirectory(docsDir, stats);
  
  console.log(`\n=== Métricas de Ingestión ===`);
  console.log(`Archivos Procesados: ${stats.filesProcessed}`);
  console.log(`Chunks Ingestados en Postgres: ${stats.chunksIngested}`);
  console.log(`=============================\n`);
  
  pool.end();
}

main().catch(console.error);
