import { retrieveDocuments } from "../../rag/retrieval/retriever.js";
import { rerankDocuments } from "../../rag/reranking/reranker.js";
import { runEvaluation } from "../shared/evaluator.js";
import type { EvaluationDatasetItem, EvaluationResult } from "../shared/types.js";
import { calculateHitRate, calculateMRR, checkHit } from "../retrieval/metrics.js";
import { calculateMRRImprovement } from "./metrics.js";

/**
 * Script de evaluación para la etapa de Reranking.
 * Compara los resultados de Retrieve vs Retrieve + Rerank.
 */
async function rerankRunner(dataset: EvaluationDatasetItem[]): Promise<EvaluationResult> {
  let baseHits = 0;
  let baseRankSum = 0;
  let rerankHits = 0;
  let rerankRankSum = 0;

  for (const item of dataset) {
    const query = item.question;
    const expected = item.relevant_sources;

    // Recuperamos un conjunto más grande inicial
    const retrievedDocs = await retrieveDocuments(query, 50);
    
    // Evaluamos el baseline (Top 20 de la búsqueda original)
    const baselineTop20 = retrievedDocs.slice(0, 20);
    const baseFoundIndex = checkHit(baselineTop20, expected);
    if (baseFoundIndex !== -1) {
      baseHits += 1;
      baseRankSum += (1 / (baseFoundIndex + 1));
    }

    // Aplicamos Reranking a los 50 documentos
    const rerankedDocs = await rerankDocuments(query, retrievedDocs);
    const rerankTop20 = rerankedDocs.slice(0, 20);
    
    const rerankFoundIndex = checkHit(rerankTop20, expected);
    if (rerankFoundIndex !== -1) {
      rerankHits += 1;
      rerankRankSum += (1 / (rerankFoundIndex + 1));
    }
  }

  const baseHitRate = calculateHitRate(baseHits, dataset.length);
  const baseMRR = calculateMRR(baseRankSum, dataset.length);
  
  const rerankHitRate = calculateHitRate(rerankHits, dataset.length);
  const rerankMRR = calculateMRR(rerankRankSum, dataset.length);

  return {
    totalCases: dataset.length,
    "Base Hit Rate (@20)": baseHitRate,
    "Base MRR": baseMRR,
    "Rerank Hit Rate (@20)": rerankHitRate,
    "Rerank MRR": rerankMRR,
    "MRR Improvement (%)": calculateMRRImprovement(baseMRR, rerankMRR)
  };
}

if (process.argv[1] && process.argv[1].endsWith("evaluate-reranking.ts")) {
  runEvaluation(
    "Retrieval + Reranking", 
    "src/evals/datasets/arca-qa.jsonl", 
    rerankRunner
  ).catch(console.error);
}
