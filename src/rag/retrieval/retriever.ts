import { generateEmbedding } from "../embedder/embedder.js";
import { searchSimilarDocuments } from "../vector_store/db.js";

/**
 * Encapsula la lógica de recuperación (Retrieval) pura.
 * Su responsabilidad es transformar la query en un formato buscable (embedding)
 * y consultar el almacén vectorial para traer los candidatos.
 */
export async function retrieveDocuments(query: string, limit: number = 5) {
  // 1. Generar el embedding de la consulta
  const embedding = await generateEmbedding(query);
  
  // 2. Realizar la búsqueda de similitud en la base de datos
  const results = await searchSimilarDocuments(embedding, limit);
  
  return results;
}
