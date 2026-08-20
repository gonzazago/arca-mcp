import { loadDataset } from "./dataset-loader.js";
import type { EvaluationDatasetItem, EvaluationResult } from "./types.js";

export type EvaluationRunner = (
  dataset: EvaluationDatasetItem[]
) => Promise<EvaluationResult>;

export async function runEvaluation(
  evaluationName: string,
  datasetPath: string,
  runner: EvaluationRunner
) {
  console.log(`\n--- Starting Evaluation: ${evaluationName} ---`);
  
  let dataset: EvaluationDatasetItem[];
  try {
    dataset = await loadDataset(datasetPath);
    console.log(`Loaded ${dataset.length} items from dataset.`);
  } catch (err) {
    console.error("Failed to load dataset, aborting evaluation.");
    return;
  }

  const startTime = Date.now();
  const results = await runner(dataset);
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log(`\n--- Results for ${evaluationName} ---`);
  console.log(`Duration: ${duration}s`);
  for (const [key, value] of Object.entries(results)) {
    if (key === "totalCases") {
      console.log(`Total Cases: ${value}`);
    } else {
      console.log(`${key}: ${typeof value === "number" && !Number.isInteger(value) ? value.toFixed(4) : value}`);
    }
  }
}
