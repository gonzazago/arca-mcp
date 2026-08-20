import { retrieveDocuments } from "../../rag/retrieval/retriever.js";
import { rerankDocuments } from "../../rag/reranking/reranker.js";

export async function searchArcaDocs(query: string, limit: number = 20) {
  // 1. Fase de Recuperación (Retrieval)
  // Obtenemos un pool grande de 50 documentos utilizando búsqueda vectorial
  const retrievalLimit = 50; 
  const retrievedDocs = await retrieveDocuments(query, retrievalLimit);
  
  if (retrievedDocs.length === 0) {
    return "No se encontró información relevante para tu búsqueda en los documentos de AFIP.";
  }

  // 2. Fase de Re-ordenamiento (Reranking)
  // Re-ordenamos los 50 documentos usando BM25 local y coincidencia de conjuntos (Jaccard)
  const rerankedDocs = await rerankDocuments(query, retrievedDocs);

  // 3. Selección final
  // Nos quedamos con los mejores 20 (o el límite especificado)
  const finalDocs = rerankedDocs.slice(0, limit);

  // 4. Formateo de la respuesta
  let responseText = `Se han encontrado los siguientes fragmentos relevantes para tu consulta:\n\n`;
  
  finalDocs.forEach((row: any, index: number) => {
    responseText += `### Fragmento ${index + 1} (Score Final: ${(row.finalScore * 100).toFixed(2)}% | Vector: ${(row.vectorScore * 100).toFixed(2)}%)\n`;
    responseText += `**Origen:** ${row.metadata.source} / ${row.metadata.filename}\n\n`;
    responseText += `\`\`\`markdown\n${row.content}\n\`\`\`\n\n`;
    responseText += `---\n\n`;
  });

  return responseText;
}
