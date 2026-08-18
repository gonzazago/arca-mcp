import type { ToolDefinition } from "../types.js";
import { z } from "zod";
import { sendSoapRequest } from "../utils/soap.js";
import { getUltimoComprobante } from "./getUltimoComprobante.js";

const WSFE_URL_HOMO = "https://wswhomo.afip.gov.ar/wsfev1/service.asmx";
const WSFE_URL_PROD = "https://servicios1.afip.gov.ar/wsfev1/service.asmx";

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
        const url = args.environment === "produccion" ? WSFE_URL_PROD : WSFE_URL_HOMO;

        // 1. Obtener último comprobante autorizado
        const ultimoCbte = await getUltimoComprobante(url, args.cuit, args.token, args.sign, args.ptoVta, args.cbteTipo);
        const nextCbte = ultimoCbte + 1;

        // 2. Calcular importes e IVA
        const math = calculateTaxes(args.cbteTipo, args.importeTotal);

        // 3. Formatear fechas
        const today = new Date();
        const defaultDate = today.toISOString().slice(0,10).replace(/-/g, ""); // YYYYMMDD
        const cbteFch = args.fechaEmision || defaultDate;

        // 4. Armar XML para FECAESolicitar
        const xmlRequest = buildFECAESolicitarXml(args, math, nextCbte, cbteFch);

        // 5. Enviar petición SOAP
        const responseText = await sendSoapRequest(url, "http://ar.gov.afip.dif.FEV1/FECAESolicitar", xmlRequest);

        // 6. Parsear respuesta
        const result = parseFECAESolicitarResponse(responseText, nextCbte);

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



function calculateTaxes(cbteTipo: number, importeTotal: number) {
  // Factura C (11) no discrimina IVA
  if (cbteTipo === 11) {
    return {
      impTotal: importeTotal.toFixed(2),
      impTotConc: "0.00",
      impNeto: "0.00",
      impOpEx: "0.00",
      impTrib: "0.00",
      impIva: "0.00",
      ivaArray: []
    };
  }

  // Factura A (1) o B (6)
  // Asumimos IVA 21% por defecto para simplificar
  const netAmount = importeTotal / 1.21;
  const ivaAmount = importeTotal - netAmount;

  return {
    impTotal: importeTotal.toFixed(2),
    impTotConc: "0.00",
    impNeto: netAmount.toFixed(2),
    impOpEx: "0.00",
    impTrib: "0.00",
    impIva: ivaAmount.toFixed(2),
    ivaArray: [
      {
        Id: 5, // Código AFIP para 21%
        BaseImp: netAmount.toFixed(2),
        Importe: ivaAmount.toFixed(2)
      }
    ]
  };
}

function buildFECAESolicitarXml(args: any, math: any, cbteNro: number, cbteFch: string) {
  const isServices = args.concepto === 2 || args.concepto === 3;
  
  const fchServDesdeXml = isServices && args.fchServDesde ? `<ar:FchServDesde>${args.fchServDesde}</ar:FchServDesde>` : "";
  const fchServHastaXml = isServices && args.fchServHasta ? `<ar:FchServHasta>${args.fchServHasta}</ar:FchServHasta>` : "";
  const fchVtoPagoXml = isServices && args.fchVtoPago ? `<ar:FchVtoPago>${args.fchVtoPago}</ar:FchVtoPago>` : "";

  let ivaBlock = "";
  if (math.ivaArray.length > 0) {
    const ivaItems = math.ivaArray.map((i: any) => `
                     <ar:AlicIva>
                        <ar:Id>${i.Id}</ar:Id>
                        <ar:BaseImp>${i.BaseImp}</ar:BaseImp>
                        <ar:Importe>${i.Importe}</ar:Importe>
                     </ar:AlicIva>`).join("");
    ivaBlock = `
                  <ar:Iva>${ivaItems}
                  </ar:Iva>`;
  }

  return `<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
   <soapenv:Header/>
   <soapenv:Body>
      <ar:FECAESolicitar>
         <ar:Auth>
            <ar:Token>${args.token}</ar:Token>
            <ar:Sign>${args.sign}</ar:Sign>
            <ar:Cuit>${args.cuit}</ar:Cuit>
         </ar:Auth>
         <ar:FeCAEReq>
            <ar:FeCabReq>
               <ar:CantReg>1</ar:CantReg>
               <ar:PtoVta>${args.ptoVta}</ar:PtoVta>
               <ar:CbteTipo>${args.cbteTipo}</ar:CbteTipo>
            </ar:FeCabReq>
            <ar:FeDetReq>
               <ar:FECAEDetRequest>
                  <ar:Concepto>${args.concepto}</ar:Concepto>
                  <ar:DocTipo>${args.docTipo}</ar:DocTipo>
                  <ar:DocNro>${args.docNro}</ar:DocNro>
                  <ar:CbteDesde>${cbteNro}</ar:CbteDesde>
                  <ar:CbteHasta>${cbteNro}</ar:CbteHasta>
                  <ar:CbteFch>${cbteFch}</ar:CbteFch>
                  <ar:ImpTotal>${math.impTotal}</ar:ImpTotal>
                  <ar:ImpTotConc>${math.impTotConc}</ar:ImpTotConc>
                  <ar:ImpNeto>${math.impNeto}</ar:ImpNeto>
                  <ar:ImpOpEx>${math.impOpEx}</ar:ImpOpEx>
                  <ar:ImpTrib>${math.impTrib}</ar:ImpTrib>
                  <ar:ImpIVA>${math.impIva}</ar:ImpIVA>
                  ${fchServDesdeXml}
                  ${fchServHastaXml}
                  ${fchVtoPagoXml}
                  <ar:MonId>PES</ar:MonId>
                  <ar:MonCotiz>1</ar:MonCotiz>${ivaBlock}
               </ar:FECAEDetRequest>
            </ar:FeDetReq>
         </ar:FeCAEReq>
      </ar:FECAESolicitar>
   </soapenv:Body>
</soapenv:Envelope>`;
}



function parseFECAESolicitarResponse(xml: string, expectedCbteNro: number) {
  // Manejo de errores a nivel del comprobante
  const obsMatch = xml.match(/<Obs>[\s\S]*?<Msg>(.*?)<\/Msg>[\s\S]*?<\/Obs>/);
  if (obsMatch) {
    throw new Error(`AFIP Observación: ${obsMatch[1]}`);
  }

  const errMatch = xml.match(/<Err>\s*<Code>(.*?)<\/Code>\s*<Msg>(.*?)<\/Msg>\s*<\/Err>/);
  if (errMatch) {
    throw new Error(`AFIP Error [${errMatch[1]}]: ${errMatch[2]}`);
  }

  const resultadoMatch = xml.match(/<Resultado>(.*?)<\/Resultado>/);
  const caeMatch = xml.match(/<CAE>(.*?)<\/CAE>/);
  const vtoMatch = xml.match(/<CAEFchVto>(.*?)<\/CAEFchVto>/);

  if (!resultadoMatch || (resultadoMatch[1] !== "A" && resultadoMatch[1] !== "R")) {
    throw new Error("No se pudo parsear el resultado de la solicitud CAE.");
  }

  if (resultadoMatch[1] === "R") {
    throw new Error("El comprobante fue Rechazado por AFIP sin proveer más detalles observables.");
  }

  return {
    status: "Aprobado",
    comprobanteNumero: expectedCbteNro,
    CAE: caeMatch ? caeMatch[1] : null,
    VencimientoCAE: vtoMatch ? vtoMatch[1] : null,
  };
}
