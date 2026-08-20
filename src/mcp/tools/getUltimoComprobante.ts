import type { ToolDefinition } from "../types.js";
import { z } from "zod";
import { getUltimoComprobante } from "../../application/use-cases/invoiceUseCase.js";

const WSFE_URL_HOMO = "https://wswhomo.afip.gov.ar/wsfev1/service.asmx";
const WSFE_URL_PROD = "https://servicios1.afip.gov.ar/wsfev1/service.asmx";

export const getUltimoCbteTool: ToolDefinition = {
  name: "get_ultimo_comprobante",
  config: {
    description: "Consulta en AFIP (WSFEV1) cuál fue el último número de comprobante emitido para un determinado Punto de Venta y Tipo de Comprobante.",
    inputSchema: {
      cuit: z.number().describe("CUIT del emisor."),
      token: z.string().describe("Token de autorización (TA) obtenido mediante WSAA."),
      sign: z.string().describe("Sign de autorización obtenido mediante WSAA."),
      environment: z.enum(["homologacion", "produccion"]).default("homologacion").describe("Entorno al cual enviar la petición."),
      ptoVta: z.number().describe("Punto de venta registrado en AFIP (ej. 1)."),
      cbteTipo: z.number().describe("Tipo de comprobante: 1 (Factura A), 6 (Factura B), 11 (Factura C)."),
    }
  },
  handler: async (args) => {
      try {
        const url = args.environment === "produccion" ? WSFE_URL_PROD : WSFE_URL_HOMO;
        const ultimoCbte = await getUltimoComprobante(url, args.cuit, args.token, args.sign, args.ptoVta, args.cbteTipo);

        return {
          content: [{ type: "text", text: `El último comprobante emitido es el número: ${ultimoCbte}` }],
        };
      } catch (error: any) {
        return {
          content: [{ type: "text", text: `Error al consultar último comprobante: ${error.message}` }],
          isError: true,
        };
      }
  }
};
