import fs from 'fs/promises';
import path from 'path';
import { pool, initDB, insertDocument } from '../vector_store/db/db.js';
import { generateEmbedding } from '../vector_store/embedder/embedder.js';

async function processDirectory(dir: string, sourcePdf: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await processDirectory(fullPath, entry.name);
        } else if (entry.isFile() && entry.name.endsWith('.md') && !entry.name.endsWith('-full.md')) {
            await embedAndStoreDocument(fullPath, sourcePdf, entry.name);
        }
    }
}

async function embedAndStoreDocument(filePath: string, source: string, filename: string) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        
        // Skip if content is extremely short (e.g. less than 10 characters)
        if (content.trim().length < 10) return;
        
        console.log(`Embedding ${filename}...`);
        
        const embedding = await generateEmbedding(content);
        
        const metadata = {
            source,
            filename,
            path: filePath
        };
        
        await insertDocument(metadata, content, embedding);
        console.log(`✅ Stored ${filename} in Vector DB.`);
    } catch (err) {
        console.error(`❌ Failed to process ${filename}:`, err);
    }
}

async function main() {
    try {
        await initDB();
        
        const docsDir = path.resolve(__dirname, '../../docs/md/facturacion');
        console.log(`Scanning documents in ${docsDir}`);
        
        await processDirectory(docsDir, 'unknown');
        
        console.log('🎉 Seeding complete!');
    } catch (err) {
        console.error('Fatal error during seeding:', err);
    } finally {
        await pool.end();
    }
}

main();
