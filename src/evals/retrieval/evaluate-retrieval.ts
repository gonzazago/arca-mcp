import { retrieveDocuments } from "../../rag/retrieval/retriever.js";
import { runEvaluation } from "../shared/evaluator.js";
import type { EvaluationDatasetItem, EvaluationResult } from "../shared/types.js";
import { calculateHitRate, calculateMRR, checkHit } from "./metrics.js";

/**
 * Script de evaluación para la etapa de Retrieval.
 * Mide métricas estándar como Hit Rate (HR) y Mean Reciprocal Rank (MRR)
 * sobre un dataset de pruebas predefinido, sin aplicar Reranking.
 */
async function retrieveRunner(dataset: EvaluationDatasetItem[]): Promise<EvaluationResult> {
  let hits = 0;
  let reciprocalRankSum = 0;

  for (const item of dataset) {
    const query = item.question;
    const expected_documents = item.relevant_sources;

    // Solo recuperación inicial (Top 20)
    const retrievedDocs = await retrieveDocuments(query, 20);

    const foundIndex = checkHit(retrievedDocs, expected_documents);
    if (foundIndex !== -1) {
      hits += 1;
      reciprocalRankSum += (1 / (foundIndex + 1));
    }
  }

  return {
    totalCases: dataset.length,
    "Hit Rate (@20)": calculateHitRate(hits, dataset.length),
    "Mean Reciprocal Rank (MRR)": calculateMRR(reciprocalRankSum, dataset.length)
  };
}

// Permitir ejecutarlo directamente
if (process.argv[1] && process.argv[1].endsWith("evaluate-retrieval.ts")) {
  runEvaluation(
    "Retrieval (Base)", 
    "src/evals/datasets/arca-qa.jsonl", 
    retrieveRunner
  ).catch(console.error);
}
