import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import express from "express";
import cors from "cors";
import { ragSearchTool } from "./tools/ragSearch.js";
import { createInvoiceTool } from "./tools/createInvoice.js";
import { authGuideResource } from "./resources/guides/authGuide.js";
import { invoiceGuideResource } from "./resources/guides/invoiceGuide.js";
import { getUltimoCbteTool } from "./tools/getUltimoComprobante.js";
import { getTaTool } from "./tools/getTa.js";
import type { ToolDefinition, ResourceDefinition } from "./types.js";

// Función para crear y configurar una nueva instancia del servidor
function createMcpServer() {
  const server = new McpServer({
    name: "Arca MCP",
    version: "1.0.0",
  });

  const tools: ToolDefinition[] = [
    ragSearchTool,
    createInvoiceTool,
    getUltimoCbteTool,
    getTaTool
  ];

  tools.forEach(t => server.registerTool(t.name, t.config, t.handler as any));

  const resources: ResourceDefinition[] = [
    authGuideResource,
    invoiceGuideResource
  ];

  resources.forEach(r => server.registerResource(r.name, r.uriTemplate, r.config, r.handler as any));

  return server;
}

async function main() {
  console.error("Iniciando servidor MCP Arca...");

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : null;
  const app = express();

  if (port) {
    app.use(cors());
    // Logueador de requests
    app.use((req, res, next) => {
      console.log(`\n\n[DEBUG] --- NUEVO REQUEST a ${req.path} ---`);
      console.log(`[DEBUG] Method:`, req.method);
      console.log(`[DEBUG] Headers:`, JSON.stringify(req.headers, null, 2));
      next();
    });

    // Modo HTTP Streamable (Estándar recomendado MCP)
    const server = createMcpServer();
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
    } as any);
    await server.connect(transport as any);

    app.use((req, res, next) => {
      const originalStatus = res.status;
      const originalWriteHead = res.writeHead;
      const originalEnd = res.end;
      res.status = function (code: number) {
        if (code === 500) console.error("[RES] status 500 called!", new Error().stack);
        return originalStatus.apply(this, arguments as any);
      };
      res.writeHead = function (statusCode: number) {
        if (statusCode === 500) console.error("[RES] writeHead 500 called!", new Error().stack);
        return originalWriteHead.apply(this, arguments as any);
      };
      res.end = function () {
        console.log(`[RES] end called with status ${res.statusCode}`);
        return originalEnd.apply(this, arguments as any);
      };
      next();
    });

    app.all(["/mcp", "/messages", "/sse"], async (req, res, next) => {
      console.log(`[POST] Request received at ${req.path}`);
      try {
        await transport.handleRequest(req, res);
        console.log(`[POST] Request handled successfully`);
      } catch (error) {
        console.error("[POST] Error handling request:", error);
        next(error);
      }
    });

    app.use((err: any, req: any, res: any, next: any) => {
      console.error("[Express] Global error handler caught:", err);
      if (!res.headersSent) {
        res.status(500).send("Global Error: " + err.message);
      }
    });

    app.listen(port, () => {
      console.log(`Servidor MCP escuchando en http://localhost:${port}/mcp`);
    });
  } else {
    // Modo Stdio (Gemini IDE / CLI standard)
    const server = createMcpServer();
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Servidor MCP conectado y escuchando mediante stdio.");
  }
}

main().catch((error) => {
  console.error("Error fatal en el servidor:", error);
  process.exit(1);
});
