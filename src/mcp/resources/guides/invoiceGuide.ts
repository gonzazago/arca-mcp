import { ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ResourceDefinition } from "../../types.js";

export const invoiceGuideResource: ResourceDefinition = {
  name: "invoice_guide",
  uriTemplate: new ResourceTemplate("resource://arca/guides/invoice/{type}", { list: undefined }),
  config: {
    description: "Devuelve una guía paso a paso sobre cómo emitir una factura electrónica en AFIP según el tipo de comprobante solicitado (A, B, C, MTXCA, etc.).",
    mimeType: "text/markdown",
  },
  handler: async (uri, { type } = {}) => {
      const invoiceType = (type as string).toUpperCase();
      let guide = `# Guía para emitir Factura Tipo ${invoiceType}\n\n`;

      guide += `Para emitir este comprobante, se asume que ya cuentas con el Ticket de Acceso (Token y Sign) obtenido mediante el WSAA.\n\n`;

      if (invoiceType === "MTXCA") {
        guide += `## 1. Web Service a Utilizar
Se debe utilizar el servicio **WSMTXCA** (Facturación con detalle de artículos).

## 2. Método a invocar
Debes invocar el método \`autorizarComprobante\`.

## 3. Parámetros Principales
Además de la cabecera estándar (\`authRequest\`), debes enviar un XML/JSON estructurado con:
- **cuitRepresentada**: El CUIT del emisor.
- **comprobante**: El bloque con los datos del comprobante, que incluye:
  - \`codigoTipoComprobante\`: (1 para Factura A, 6 para Factura B).
  - \`numeroPuntoVenta\`: Tu punto de venta registrado.
  - \`fechaEmision\`: En formato YYYY-MM-DD.
  - \`codigoTipoDocumento\` y \`numeroDocumento\`: Del receptor (CUIT, DNI, etc.).
  - \`arrayItems\`: **OBLIGATORIO en MTXCA**. Debes detallar línea por línea cada artículo vendido con su \`codigo\`, \`descripcion\`, \`cantidad\`, \`precioUnitario\` y \`codigoAlicuotaIva\`.
  - \`arraySubtotalesIVA\`: Sumatoria agrupada por alícuota.
  - \`importeTotal\`: La suma exacta de los ítems y los impuestos.

## 4. Particularidades
A diferencia del WSFE, en MTXCA es obligatorio enviar el detalle línea por línea de los ítems facturados. AFIP validará que la suma matemática de los ítems coincida con el total facturado.`;

      } else {
        guide += `## 1. Web Service a Utilizar
Se debe utilizar el servicio **WSFEv1** (Web Service de Facturación Electrónica).

## 2. Método a invocar
Debes invocar el método \`FECAESolicitar\`.

## 3. Parámetros Generales (FeCAEReq)
La petición debe estructurarse con una cabecera (\`FeCabReq\`) y el detalle (\`FeDetReq\`):
- **CantReg**: Cantidad de registros (generalmente 1).
- **PtoVta**: Tu punto de venta habilitado.
- **CbteTipo**: Código del comprobante de AFIP. `;

        if (invoiceType === "A" || invoiceType === "MIPYME_A") {
          const cbte = invoiceType === "A" ? "1 (Factura A)" : "201 (Factura de Crédito Electrónica MiPyMEs A)";
          guide += `Para este caso, el valor es **${cbte}**.\n\n`;
          guide += `### Requisitos Específicos para Factura ${invoiceType}:
- **Receptor**: Debes indicar un CUIT válido (DocTipo = 80). No se puede facturar A a un DNI o a un consumidor final.
- **Impuestos (IVA)**: Debes enviar el array \`Iva\` detallando la base imponible y el importe para cada alícuota (ej. 21%, 10.5%).
- **Importes**: 
  - \`ImpTotal\`: Suma total.
  - \`ImpNeto\`: Suma de los importes netos gravados.
  - \`ImpIVA\`: Suma de los montos de IVA.
  - La ecuación debe cerrar exacto: \`ImpTotal = ImpNeto + ImpIVA + ImpTrib\` (si hay otros tributos).`;

        } else if (invoiceType === "B" || invoiceType === "MIPYME_B") {
          const cbte = invoiceType === "B" ? "6 (Factura B)" : "206 (Factura de Crédito Electrónica MiPyMEs B)";
          guide += `Para este caso, el valor es **${cbte}**.\n\n`;
          guide += `### Requisitos Específicos para Factura ${invoiceType}:
- **Receptor**: Generalmente dirigido a Consumidor Final, Monotributista o Exento.
  - Si el monto supera el límite fijado por AFIP, debes identificar al cliente con su DNI (DocTipo = 96) o CUIT.
  - Si no supera el límite, podés poner DocTipo = 99 y DocNro = 0.
- **Impuestos (IVA)**: Debes enviar el array \`Iva\` detallando el importe de IVA contenido en el precio, aunque la factura final no lo discrimine visualmente al cliente.
- **Importes**: \`ImpTotal\` debe ser igual a \`ImpNeto\` + \`ImpIVA\`.`;

        } else if (invoiceType === "C" || invoiceType === "MIPYME_C") {
          const cbte = invoiceType === "C" ? "11 (Factura C)" : "211 (Factura de Crédito Electrónica MiPyMEs C)";
          guide += `Para este caso, el valor es **${cbte}**.\n\n`;
          guide += `### Requisitos Específicos para Factura ${invoiceType}:
- **Receptor**: Aplican las mismas reglas de identificación que la Factura B respecto a los montos máximos a Consumidor Final.
- **Impuestos (IVA)**: **IMPORTANTE:** Al ser un comprobante C (Monotributo o Exento), **NO** se debe enviar el array \`Iva\`.
- **Importes**: 
  - \`ImpIVA\` debe ser **0**.
  - \`ImpNeto\` debe ser **0**.
  - \`ImpTotal\` debe ser igual a tu \`ImpTotConc\` (conceptos no gravados) si corresponde, o simplemente poner el total en \`ImpTotal\`.`;
        }

        if (invoiceType.includes("MIPYME")) {
          guide += `\n\n### Particularidades de Facturas de Crédito Electrónicas MiPyMEs (FCE)
- **CBU**: Es obligatorio incluir el CBU del emisor en los datos adicionales (Opcionales). El código de Opcional para CBU es \`2101\` y su valor debe ser tu CBU de 22 dígitos.
- **Fecha de Vencimiento de Pago**: Debes enviar el dato opcional de la fecha de vencimiento (Opcional \`27\`).`;
        }
      }

      guide += `\n\n## 5. Respuesta de AFIP
Si la validación es correcta, AFIP responderá el XML con un atributo **CAE** (Código de Autorización Electrónico) y **CAEFchVto** (Fecha de Vencimiento del CAE). Estos dos datos deben imprimirse obligatoriamente en el comprobante final (PDF) junto con su código de barras o QR asociado.`;

      return {
        contents: [
          {
            uri: uri.href,
            mimeType: "text/markdown",
            text: guide,
          },
        ],
      };
  }
};
