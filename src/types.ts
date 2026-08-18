import { z } from "zod";

export interface ToolDefinition {
  name: string;
  config: {
    description?: string;
    inputSchema?: any; // Zod schema shape
  };
  handler: (args: any) => Promise<any>;
}

export interface ResourceDefinition {
  name: string;
  uriTemplate: any; // String or ResourceTemplate
  config: {
    description?: string;
    mimeType?: string;
  };
  handler: (uri: URL, variables?: Record<string, string>) => Promise<any> | any;
}
