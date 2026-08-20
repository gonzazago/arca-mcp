import type { ToolDefinition } from "../types.js";
import { z } from "zod";
import { createInvoice } from "../../application/use-cases/invoiceUseCase.js";

export const createInvoiceTool: ToolDefinition = {
  name: "create_invoice",
  config: {
    description: "Emite una factura electrónica en AFIP (WSFEV1) utilizando los datos de autenticación provistos. Calcula automáticamente los importes netos e IVA según el tipo de comprobante.",
    inputSchema: {
      // Autenticación
      cuit: z.number().describe("CUIT del emisor de la factura."),
      token: z.string().describe("Token de autorización (TA) obtenido mediante WSAA."),
      sign: z.string().describe("Sign de autorización obtenido mediante WSAA."),
      environment: z.enum(["homologacion", "produccion"]).default("homologacion").describe("Entorno al cual enviar la petición."),
      
      // Datos de la factura
      ptoVta: z.number().describe("Punto de venta registrado en AFIP (ej. 1)."),
      cbteTipo: z.number().describe("Tipo de comprobante: 1 (Factura A), 6 (Factura B), 11 (Factura C)."),
      concepto: z.number().describe("Concepto: 1 (Productos), 2 (Servicios), 3 (Productos y Servicios)."),
      docTipo: z.number().describe("Tipo de documento del receptor: 80 (CUIT), 96 (DNI), 99 (Consumidor Final < límite)."),
      docNro: z.number().describe("Número de documento del receptor. Usar 0 si docTipo es 99."),
      importeTotal: z.number().describe("Monto total a facturar (con impuestos incluidos)."),
      
      // Fechas
      fechaEmision: z.string().optional().describe("Fecha del comprobante en formato YYYYMMDD. Si se omite, se usa hoy."),
      fchServDesde: z.string().optional().describe("Requerido si concepto es 2 o 3. Formato YYYYMMDD."),
      fchServHasta: z.string().optional().describe("Requerido si concepto es 2 o 3. Formato YYYYMMDD."),
      fchVtoPago: z.string().optional().describe("Requerido si concepto es 2 o 3. Formato YYYYMMDD."),
    }
  },
  handler: async (args) => {
      try {
        const result = await createInvoice(args);
        return {
          content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
      } catch (error: any) {
        return {
          content: [{ type: "text", text: `Error al emitir factura: ${error.message}` }],
          isError: true,
        };
      }
  }
};
