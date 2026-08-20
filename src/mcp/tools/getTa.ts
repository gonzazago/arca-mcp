import type { ToolDefinition } from "../types.js";
import { z } from "zod";
import { getAuthToken } from "../../application/use-cases/authUseCase.js";

export const getTaTool: ToolDefinition = {
  name: "get_ta",
  config: {
    description: "Obtiene el Ticket de Acceso (Token y Sign) mediante WSAA de AFIP usando el certificado (.crt) y la clave privada (.key). Retorna desde el caché si el ticket aún es válido.",
    inputSchema: {
      certPath: z.string().describe("Ruta absoluta o relativa al archivo del certificado digital (.crt)"),
      keyPath: z.string().describe("Ruta absoluta o relativa al archivo de la clave privada (.key)"),
      service: z.string().default("wsfe").describe("Servicio de AFIP al que se quiere acceder (ej: wsfe, wsmtxca)"),
      environment: z.enum(["homologacion", "produccion"]).default("homologacion").describe("Entorno al cual enviar la petición."),
    }
  },
  handler: async (args) => {
    try {
      const result = await getAuthToken(args.certPath, args.keyPath, args.service, args.environment);
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
      };
    } catch (error: any) {
      if (error.message && error.message.includes("coe.alreadyAuthenticated")) {
        return {
          content: [{ type: "text", text: `Error en autenticación WSAA: AFIP indica que el certificado ya posee un TA válido activo (coe.alreadyAuthenticated). Como AFIP otorga un solo TA activo por certificado/servicio durante 12hs, debés reutilizar el Token y Sign generados previamente o esperar a su expiración.` }],
          isError: true
        };
      }
      return {
        content: [{ type: "text", text: `Error al obtener TA: ${error.message}` }],
        isError: true
      };
    }
  }
};
