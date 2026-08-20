import type { ToolDefinition } from "../types.js";
import { z } from "zod";
import { searchArcaDocs } from "../../application/use-cases/ragUseCase.js";

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
        const responseText = await searchArcaDocs(query, limit);

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
