import type { ToolDefinition } from "../../types.js";
import { z } from "zod";
import { createInvoice } from "../../../application/use-cases/invoiceUseCase.js";
import { getAuthToken } from "../../../application/use-cases/authUseCase.js";

export const createInvoiceTool: ToolDefinition = {
  name: "create_invoice",
  config: {
    description: "emite una factura",
    inputSchema: {
      // Autenticación
      cuit: z.number().describe("CUIT del emisor de la factura."),
      certPath: z.string().describe("Ruta absoluta o relativa al archivo del certificado digital (.crt)"),
      keyPath: z.string().describe("Ruta absoluta o relativa al archivo de la clave privada (.key)"),
      environment: z.enum(["homologacion", "produccion"]).default("homologacion").describe("Entorno al cual enviar la petición."),
      
      // Datos de la factura
      ptoVta: z.number().describe("Punto de venta registrado en AFIP (ej. 1)."),
      cbteTipo: z.number().describe("Tipo de comprobante: 1 (Factura A), 6 (Factura B), 11 (Factura C)."),
      concepto: z.number().describe("Concepto: 1 (Productos), 2 (Servicios), 3 (Productos y Servicios)."),
      docTipo: z.number().describe("Tipo de documento del receptor: 80 (CUIT), 96 (DNI), 99 (Consumidor Final < límite)."),
      docNro: z.number().describe("Número de documento del receptor. Usar 0 si docTipo es 99."),
      importeTotal: z.number().describe("Monto a facturar. Para Factura A (1), ingresá el Subtotal Neto (el sistema le sumará IVA 21%). Para Facturas B y C, ingresá el Importe Total Final (impuestos incluidos)."),
      
      // Fechas y condición fiscal
      condicionIvaReceptorId: z.number().optional().describe("Condición frente al IVA del receptor: 1 (Resp. Inscripto), 4 (Exento), 5 (Consumidor Final), 6 (Monotributo), etc. Opcional, por defecto se infiere."),
      fechaEmision: z.string().optional().describe("Fecha del comprobante en formato YYYYMMDD. Si se omite, se usa hoy."),
      fchServDesde: z.string().optional().describe("Requerido si concepto es 2 o 3. Formato YYYYMMDD."),
      fchServHasta: z.string().optional().describe("Requerido si concepto es 2 o 3. Formato YYYYMMDD."),
      fchVtoPago: z.string().optional().describe("Requerido si concepto es 2 o 3. Formato YYYYMMDD."),
    }
  },
  handler: async (args) => {
      try {
        // 1. Obtener TA automáticamente
        const ta = await getAuthToken(args.certPath, args.keyPath, "wsfe", args.environment);
        
        // 2. Adjuntar el token y sign obtenidos al objeto de argumentos original
        const invoiceArgs = {
          ...args,
          token: ta.token,
          sign: ta.sign
        };

        // 3. Emitir Factura
        const result = await createInvoice(invoiceArgs);
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
