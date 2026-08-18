import type { ResourceDefinition } from "../../types.js";

export const authGuideResource: ResourceDefinition = {
  name: "auth_guide",
  uriTemplate: "resource://arca/guides/wsaa",
  config: {
    description: "Devuelve la guía completa sobre cómo autenticarse con AFIP WSAA, incluyendo cómo obtener el certificado, leerlo en Node.js y a qué servicio apuntar.",
    mimeType: "text/markdown",
  },
  handler: async (uri) => {
      const guide = `
# Guía de Autenticación AFIP (WSAA)

Para consumir cualquier Web Service de negocio de AFIP (como Facturación Electrónica), primero debes obtener un Ticket de Acceso (Token y Sign) a través del Web Service de Autenticación y Autorización (WSAA).

## 1. Cómo conseguir el Certificado
1. Ingresá a la página de AFIP con tu CUIT y Clave Fiscal.
2. Dirigite al servicio **"Administración de Certificados Digitales"**.
3. Generá un CSR (Certificate Signing Request) localmente usando OpenSSL:
   \`\`\`bash
   openssl req -new -newkey rsa:2048 -nodes -keyout privada.key -out pedido.csr
   \`\`\`
4. Subí el archivo \`pedido.csr\` en la web de AFIP para generar el certificado digital.
5. Descargá el certificado generado (\`certificado.crt\`).
6. Dirigite al servicio **"Administrador de Relaciones de Clave Fiscal"** y delegá el servicio Web Service deseado (por ejemplo, "Facturación Electrónica") al CUIT asociado a tu certificado.

## 2. Cómo leer y cargar el certificado en Node.js
Para firmar el Ticket Request (TRA) que enviarás al WSAA, necesitas cargar tu clave privada (\`.key\`) y tu certificado (\`.crt\`). En Node.js puedes hacerlo usando el módulo \`fs\` nativo:

\`\`\`typescript
import fs from 'fs';
import path from 'path';

// Rutas a tus archivos
const certPath = path.resolve(__dirname, './certs/certificado.crt');
const keyPath = path.resolve(__dirname, './certs/privada.key');

// Leer los archivos como strings UTF-8
const cert = fs.readFileSync(certPath, 'utf8');
const key = fs.readFileSync(keyPath, 'utf8');

// (Opcional) Si usas un archivo .p12, deberás leerlo como buffer:
// const p12Buffer = fs.readFileSync(path.resolve(__dirname, './certs/certificado.p12'));
\`\`\`

Una vez leídos, puedes usar librerías como \`node-forge\` o \`crypto\` para generar la firma CMS/PKCS#7 requerida por el WSAA.

## 3. A qué servicio pegarle
- Al momento de solicitar el Ticket de Acceso al **WSAA**, el campo \`service\` dentro del XML debe contener el nombre interno del Web Service de negocio al que quieres acceder.
- Para Facturación Electrónica (Comprobantes A, B, C, etc.), el valor del servicio es: \`wsfe\`
- Para Facturación de comprobantes con detalle (MTXCA), el valor es: \`wsmtxca\`

*Nota: La duración del Ticket de Acceso (Token y Sign) es de 12 horas. Se recomienda cachearlo localmente o en una base de datos para no pedir uno nuevo en cada petición.*
`;

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
