import * as fs from "fs/promises";
import * as path from "path";
import type { EvaluationDatasetItem } from "./types.js";

export async function loadDataset(datasetPath: string): Promise<EvaluationDatasetItem[]> {
  const resolvedPath = path.resolve(process.cwd(), datasetPath);
  try {
    const data = await fs.readFile(resolvedPath, "utf-8");
    return data
      .split('\n')
      .filter(line => line.trim().length > 0)
      .map(line => JSON.parse(line));
  } catch (err) {
    console.error(`Error loading dataset from ${resolvedPath}:`, err);
    throw err;
  }
}
