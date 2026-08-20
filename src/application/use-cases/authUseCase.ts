import * as fs from "fs/promises";
import * as path from "path";
import forge from "node-forge";
import { sendSoapRequest } from "../../infrastructure/arca/soap.js";

const WSAA_URL_HOMO = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms";
const WSAA_URL_PROD = "https://wsaa.afip.gov.ar/ws/services/LoginCms";

const taCache = new Map<string, { token: string; sign: string; expiration: Date }>();

export async function getAuthToken(certPath: string, keyPath: string, service: string, environment: "homologacion" | "produccion") {
  const cacheFile = path.resolve(process.cwd(), ".cache", "ta_cache.json");
  const cacheKey = `${environment}_${service}_${certPath}`;

  let cached = taCache.get(cacheKey);

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
    } catch {}
  }

  if (cached && cached.expiration > new Date()) {
    return {
      status: "OK (Desde Caché)",
      token: cached.token,
      sign: cached.sign,
      expiration: cached.expiration.toISOString()
    };
  }

  const certPem = await fs.readFile(path.resolve(certPath), "utf-8");
  const keyPem = await fs.readFile(path.resolve(keyPath), "utf-8");

  const now = new Date();
  const genTime = new Date(now.getTime() - 10 * 60000);
  const expTime = new Date(now.getTime() + 12 * 3600000);

  const traXml = `<?xml version="1.0" encoding="UTF-8"?>
<loginTicketRequest version="1.0">
  <header>
    <uniqueId>${Math.floor(Date.now() / 1000)}</uniqueId>
    <generationTime>${genTime.toISOString()}</generationTime>
    <expirationTime>${expTime.toISOString()}</expirationTime>
  </header>
  <service>${service}</service>
</loginTicketRequest>`;

  const cert = forge.pki.certificateFromPem(certPem);
  const privateKey = forge.pki.privateKeyFromPem(keyPem);

  const p7 = forge.pkcs7.createSignedData();
  p7.content = forge.util.createBuffer(traXml, "utf8");
  p7.addCertificate(cert);
  p7.addSigner({
    key: privateKey,
    certificate: cert,
    digestAlgorithm: forge.pki.oids.sha256 || "",
    authenticatedAttributes: [
      { type: forge.pki.oids.contentType || "", value: forge.pki.oids.data || "" },
      { type: forge.pki.oids.messageDigest || "" },
      { type: forge.pki.oids.signingTime || "" },
    ],
  });
  
  p7.sign();
  const cmsPem = forge.pkcs7.messageToPem(p7);
  
  const cmsBase64 = cmsPem.replace(/-----BEGIN PKCS7-----/g, "")
                          .replace(/-----END PKCS7-----/g, "")
                          .replace(/\n/g, "")
                          .replace(/\r/g, "");

  const url = environment === "produccion" ? WSAA_URL_PROD : WSAA_URL_HOMO;
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

  return result;
}
