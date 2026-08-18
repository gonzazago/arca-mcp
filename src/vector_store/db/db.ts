import { Pool } from 'pg';
import dotenv from 'dotenv';

// Silenciar temporalmente console.log para que dotenvx no ensucie el stdout
// y rompa el protocolo JSON-RPC de MCP.
const originalLog = console.log;
console.log = () => {};
dotenv.config();
console.log = originalLog;

export const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'secret',
  database: process.env.DB_NAME || 'arca',
});

// The dimension of xenova/all-MiniLM-L6-v2 is 384
const VECTOR_DIMENSION = 384; 

export async function initDB() {
  const client = await pool.connect();
  try {
    console.error('Initializing database schema...');
    
    // Create the vector extension
    await client.query('CREATE EXTENSION IF NOT EXISTS vector;');
    
    // Create documents table
    await client.query(`
      CREATE TABLE IF NOT EXISTS documents (
        id SERIAL PRIMARY KEY,
        metadata JSONB,
        content TEXT NOT NULL,
        embedding vector(${VECTOR_DIMENSION})
      );
    `);
    
    // Create HNSW index for fast similarity search
    await client.query(`
      CREATE INDEX IF NOT EXISTS documents_embedding_idx 
      ON documents USING hnsw (embedding vector_cosine_ops);
    `);
    
    console.error('Database initialized successfully.');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  } finally {
    client.release();
  }
}

export async function insertDocument(metadata: any, content: string, embedding: number[]) {
  const query = `
    INSERT INTO documents (metadata, content, embedding)
    VALUES ($1, $2, $3)
    RETURNING id;
  `;
  const values = [metadata, content, `[${embedding.join(',')}]`];
  
  const result = await pool.query(query, values);
  return result.rows[0].id;
}

export async function searchSimilarDocuments(embedding: number[], limit: number = 3, threshold: number = 0.40) {
  const query = `
    SELECT id, metadata, content, 1 - (embedding <=> $1) AS similarity
    FROM documents
    WHERE 1 - (embedding <=> $1) > $3
    ORDER BY embedding <=> $1
    LIMIT $2;
  `;
  const values = [`[${embedding.join(',')}]`, limit, threshold];
  
  const result = await pool.query(query, values);
  return result.rows;
}
