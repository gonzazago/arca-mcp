import type { ToolDefinition } from "../types.js";
import { z } from "zod";
import { generateEmbedding } from "../vector_store/embedder/embedder.js";
import { searchSimilarDocuments } from "../vector_store/db/db.js";

export const ragSearchTool: ToolDefinition = {
  name: "query_arca_docs",
  config: {
    description: "Busca información en la documentación de AFIP (ARCA) usando búsqueda semántica (RAG). Utilízalo para consultar cómo autenticarse, métodos de la API, tratamiento de errores, estructura de XMLs, etc.",
    inputSchema: {
      query: z.string().describe("La pregunta o término de búsqueda (ej. 'como realizar la autenticacion y conseguir el certificado')"),
      limit: z.number().optional().describe("Cantidad máxima de fragmentos a recuperar (por defecto 3)")
    }
  },
  handler: async ({ query, limit = 3 }) => {
      try {
        // Generar embedding de la consulta del usuario
        const embedding = await generateEmbedding(query);
        
        // Buscar los fragmentos más relevantes en la base de datos vectorial
        const results = await searchSimilarDocuments(embedding, limit);
        
        if (results.length === 0) {
          return {
            content: [{ type: "text", text: "No se encontró información relevante para tu búsqueda en los documentos de AFIP." }]
          };
        }

        // Formatear la respuesta con los fragmentos recuperados
        let responseText = `Se han encontrado los siguientes fragmentos relevantes para tu consulta:\n\n`;
        
        results.forEach((row: any, index: number) => {
          responseText += `### Fragmento ${index + 1} (Relevancia: ${(row.similarity * 100).toFixed(2)}%)\n`;
          responseText += `**Origen:** ${row.metadata.source} / ${row.metadata.filename}\n\n`;
          responseText += `\`\`\`markdown\n${row.content}\n\`\`\`\n\n`;
          responseText += `---\n\n`;
        });

        return {
          content: [{ type: "text", text: responseText }]
        };
      } catch (error) {
        console.error("Error executing vector search:", error);
        return {
          content: [{ type: "text", text: `Error interno al realizar la búsqueda vectorial: ${String(error)}` }],
          isError: true,
        };
      }
  }
};
