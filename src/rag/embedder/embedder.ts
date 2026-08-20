import { pipeline, env } from '@xenova/transformers';

// Set cache directory to a local path so we don't redownload models constantly
env.cacheDir = './.cache/transformers';

let embedderPipeline: any = null;
let initPromise: Promise<void> | null = null;

/**
 * Initializes the embedding model.
 * We use a fast, lightweight local model: Xenova/all-MiniLM-L6-v2 (dim: 384)
 */
export async function initEmbedder() {
  if (embedderPipeline) return;
  
  if (!initPromise) {
    initPromise = (async () => {
      console.error('Loading local embedding model (Xenova/all-MiniLM-L6-v2)...');
      embedderPipeline = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
        quantized: true, // Use quantized version for faster inference/less RAM
      });
      console.error('Embedding model loaded successfully.');
    })();
  }
  
  await initPromise;
}

/**
 * Generates an embedding array for the given text.
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  await initEmbedder();
  
  // Create embedding
  const output = await embedderPipeline(text, { pooling: 'mean', normalize: true });
  
  // Convert Float32Array to standard JS Array
  return Array.from(output.data);
}
