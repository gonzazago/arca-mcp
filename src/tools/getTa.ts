import type { ToolDefinition } from "../types.js";
import { z } from "zod";
import * as fs from "fs/promises";
import * as path from "path";
import forge from "node-forge";
import { sendSoapRequest } from "../utils/soap.js";

const WSAA_URL_HOMO = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms";
const WSAA_URL_PROD = "https://wsaa.afip.gov.ar/ws/services/LoginCms";

// Caché en memoria: clave -> { token, sign, expiration }
const taCache = new Map<string, { token: string; sign: string; expiration: Date }>();

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
        const cacheFile = path.resolve(process.cwd(), ".cache", "ta_cache.json");
        const cacheKey = `${args.environment}_${args.service}_${args.certPath}`;

        // 1. Verificar caché en memoria
        let cached = taCache.get(cacheKey);

        // 2. Si no está en memoria, intentar leer del archivo en disco
        if (!cached) {
          try {
            const diskContent = await fs.readFile(cacheFile, "utf-8");
            const diskCache = JSON.parse(diskContent);
            if (diskCache[cacheKey]) {
              const exp = new Date(diskCache[cacheKey].expiration);
              if (exp > new Date()) {
                cached = {
                  token: diskCache[cacheKey].token,
                  sign: diskCache[cacheKey].sign,
                  expiration: exp,
                };
                taCache.set(cacheKey, cached);
              }
            }
          } catch {
            // Ignorar error si el archivo no existe o falla el parseo
          }
        }

        if (cached && cached.expiration > new Date()) {
          return {
            content: [{ type: "text", text: JSON.stringify({
              status: "OK (Desde Caché)",
              token: cached.token,
              sign: cached.sign,
              expiration: cached.expiration.toISOString()
            }, null, 2) }]
          };
        }

        // Leer archivos
        const certPem = await fs.readFile(path.resolve(args.certPath), "utf-8");
        const keyPem = await fs.readFile(path.resolve(args.keyPath), "utf-8");

        // Fechas para el TRA
        const now = new Date();
        const genTime = new Date(now.getTime() - 10 * 60000); // 10 mins atrás por las dudas
        const expTime = new Date(now.getTime() + 12 * 3600000); // 12 horas

        const traXml = `<?xml version="1.0" encoding="UTF-8"?>
<loginTicketRequest version="1.0">
  <header>
    <uniqueId>${Math.floor(Date.now() / 1000)}</uniqueId>
    <generationTime>${genTime.toISOString()}</generationTime>
    <expirationTime>${expTime.toISOString()}</expirationTime>
  </header>
  <service>${args.service}</service>
</loginTicketRequest>`;

        // Parsear con forge
        const cert = forge.pki.certificateFromPem(certPem);
        const privateKey = forge.pki.privateKeyFromPem(keyPem);

        // Crear contenedor PKCS#7 / CMS
        const p7 = forge.pkcs7.createSignedData();
        p7.content = forge.util.createBuffer(traXml, "utf8");
        p7.addCertificate(cert);
        p7.addSigner({
          key: privateKey,
          certificate: cert,
          digestAlgorithm: forge.pki.oids.sha256 || "",
          authenticatedAttributes: [
            {
              type: forge.pki.oids.contentType || "",
              value: forge.pki.oids.data || "",
            },
            {
              type: forge.pki.oids.messageDigest || "",
            },
            {
              type: forge.pki.oids.signingTime || "",
            },
          ],
        });
        
        p7.sign();
        const cmsPem = forge.pkcs7.messageToPem(p7);
        
        // Limpiar cabeceras -----BEGIN PKCS7----- y saltos de línea para que quede base64 puro
        const cmsBase64 = cmsPem.replace(/-----BEGIN PKCS7-----/g, "")
                                .replace(/-----END PKCS7-----/g, "")
                                .replace(/\\n/g, "")
                                .replace(/\\r/g, "");

        // Enviar a WSAA
        const url = args.environment === "produccion" ? WSAA_URL_PROD : WSAA_URL_HOMO;
        const soapXml = `<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:wsaa="http://wsaa.view.sua.dvadac.desas.afip.gov">
   <soapenv:Header/>
   <soapenv:Body>
      <wsaa:loginCms>
         <wsaa:in0>${cmsBase64}</wsaa:in0>
      </wsaa:loginCms>
   </soapenv:Body>
</soapenv:Envelope>`;

        const resText = await sendSoapRequest(url, "", soapXml);

        // Parsear Token y Sign de la respuesta
        const tokenMatch = resText.match(/<token>([^<]+)<\/token>/);
        const signMatch = resText.match(/<sign>([^<]+)<\/sign>/);

        if (!tokenMatch || !tokenMatch[1] || !signMatch || !signMatch[1]) {
          throw new Error(`Respuesta fallida del WSAA: ${resText}`);
        }

        const result = {
          status: "OK (Nuevo)",
          token: tokenMatch[1],
          sign: signMatch[1],
          expiration: expTime
        };

        // Guardar en caché en memoria y en disco
        taCache.set(cacheKey, result);
        try {
          let diskData: Record<string, any> = {};
          try {
            const existing = await fs.readFile(cacheFile, "utf-8");
            diskData = JSON.parse(existing);
          } catch {}
          diskData[cacheKey] = {
            token: result.token,
            sign: result.sign,
            expiration: result.expiration.toISOString()
          };
          await fs.mkdir(path.dirname(cacheFile), { recursive: true });
          await fs.writeFile(cacheFile, JSON.stringify(diskData, null, 2), "utf-8");
        } catch {}

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
