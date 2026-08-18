# Arca MCP Server

Servidor [Model Context Protocol (MCP)](https://modelcontextprotocol.io) implementado en TypeScript para el proyecto Arca.

## Estructura

- `src/tools/`: Herramientas (tools) que expone el servidor.
- `src/commands/`: Lógica de negocio y comandos.
- `src/prompts/`: Plantillas de prompts y contexto.
- `src/vector_store/`: Lógica de embedding, chunking y persistencia con PostgreSQL y pgvector.

## Capacidades (Capabilities)

### Tools Disponibles
- **`query_arca_docs`**: Búsqueda semántica (RAG) en la documentación técnica de AFIP.
- **`get_ta`**: Obtiene y cachea el Ticket de Acceso (Token y Sign) de AFIP WSAA usando tu certificado `.crt` y `.key`.
- **`get_ultimo_comprobante`**: Consulta el último número de comprobante autorizado en AFIP para un punto de venta.
- **`create_invoice`**: Genera y autoriza una factura electrónica (A, B o C) directamente en AFIP, autocalculando los importes de IVA.

### Resources Disponibles
- **`resource://arca/guides/wsaa`**: Guía paso a paso para la autenticación AFIP.
- **`resource://arca/guides/invoice/{type}`**: Guía de emisión de comprobantes específicos (A, B, C, MTXCA).

## Requisitos

- Node.js (v18+)
- Yarn
- PostgreSQL con la extensión `pgvector` habilitada.

## Instalación

```bash
yarn install
```

## Uso

Para desarrollo en IDEs/CLI (vía Stdio):
```bash
yarn dev
```

### Desarrollo Local (HTTP y MCP Inspector)

Si deseas probar el servidor localmente a través de la red y utilizar el Inspector web para depurar las tools, sigue estos pasos:

1. **Inicia el servidor en modo HTTP (Streamable):**
   ```bash
   yarn run dev:http
   ```
   *El servidor quedará escuchando en `http://localhost:3001/mcp`.*

2. **Inicia el MCP Inspector:**
   Abre una nueva terminal en el proyecto y ejecuta:
   ```bash
   yarn run inspect
   ```
   *Esto abrirá una ventana en tu navegador.*

3. **Conecta el Inspector al servidor local:**
   En la interfaz web del Inspector, si te permite configurar el transporte HTTP Streamable, apúntalo a `http://localhost:3001/mcp`. De lo contrario, puedes seguir usándolo en modo estándar (Stdio) ejecutando el Inspector apuntando al index local directamente (`npx @modelcontextprotocol/inspector node dist/index.js`).
   Haz clic en "Connect" y verás listadas todas las herramientas (tools) expuestas por el servidor listas para ser probadas.

Para compilar y ejecutar en producción:
```bash
yarn build
yarn start
```
