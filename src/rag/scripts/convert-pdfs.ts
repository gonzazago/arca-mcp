// @ts-nocheck
import fs from 'fs/promises';
import path from 'path';
import pdf2md from 'pdf2md-ts';

async function convertAndChunk(pdfPath: string, outDir: string) {
    console.log(`Processing: ${pdfPath}`);
    const buffer = await fs.readFile(pdfPath);
    
    // Parse PDF to MD
    const mdContent = await pdf2md(buffer);
    
    // Ensure output directory exists
    await fs.mkdir(outDir, { recursive: true });
    
    // Temporarily dump the full md to see the result and structure
    const baseName = path.basename(pdfPath, '.pdf');
    const fullMdPath = path.join(outDir, `${baseName}-full.md`);
    await fs.writeFile(fullMdPath, mdContent);
    console.log(`Saved full markdown to: ${fullMdPath}`);
    
    // Let's implement a basic chunker
    // We will split by '#' and '##' assuming these are top-level topics
    const mdString = Buffer.isBuffer(mdContent) ? mdContent.toString('utf-8') : String(mdContent);
    const lines = mdString.split('\n');
    let currentChunk: string[] = [];
    let currentHeading = '00-intro';
    let chunkIndex = 0;
    
    for (const line of lines) {
        // Match H1 to H5
        const match = line.match(/^(#{1,5})\s+(.+)$/);
        if (match) {
            // Save the previous chunk if it has content
            if (currentChunk.length > 0) {
                const chunkPath = path.join(outDir, `${chunkIndex.toString().padStart(2, '0')}-${currentHeading}.md`);
                await fs.writeFile(chunkPath, currentChunk.join('\n'));
                currentChunk = [];
                chunkIndex++;
            }
            // Start a new chunk
            currentHeading = match[2].trim().replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
            // Don't let heading be empty or too long
            if (!currentHeading) currentHeading = `section`;
            currentHeading = currentHeading.substring(0, 50);
            currentChunk.push(line);
        } else {
            currentChunk.push(line);
        }
    }
    
    // Save the last chunk
    if (currentChunk.length > 0) {
        const chunkPath = path.join(outDir, `${chunkIndex.toString().padStart(2, '0')}-${currentHeading}.md`);
        await fs.writeFile(chunkPath, currentChunk.join('\n'));
    }
    console.log(`Finished chunking ${baseName}. Total chunks: ${chunkIndex + 1}`);
}

async function main() {
    const docsDir = path.resolve(__dirname, '../../docs/pdfs/facturacion');
    const outDir = path.resolve(__dirname, '../../docs/md/facturacion');
    
    try {
        const files = await fs.readdir(docsDir);
        for (const file of files) {
            if (file.toLowerCase().endsWith('.pdf')) {
                const pdfPath = path.join(docsDir, file);
                const docOutDir = path.join(outDir, path.basename(file, '.pdf'));
                await convertAndChunk(pdfPath, docOutDir);
            }
        }
    } catch (err) {
        console.error('Error during conversion:', err);
    }
}

main();
