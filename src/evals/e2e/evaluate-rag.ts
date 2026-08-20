// import { callLLM } from "../../application/services/llm.js"; // Ejemplo de dependencia hipotética
import { runEvaluation } from "../shared/evaluator.js";
import type { EvaluationDatasetItem, EvaluationResult } from "../shared/types.js";
import { calculateAccuracy } from "./metrics.js";

/**
 * Script de evaluación End-to-End (RAG).
 * Evalúa si las respuestas finales generadas por el LLM 
 * son precisas y cubren las palabras clave esperadas.
 */
async function ragRunner(dataset: EvaluationDatasetItem[]): Promise<EvaluationResult> {
  let totalScore = 0;
  let evaluatedCases = 0;

  for (const item of dataset) {
    const query = item.question;
    const keywords = item.expected_answer_keywords;

    // Si no hay keywords para este caso, lo saltamos
    if (!keywords || keywords.length === 0) {
      continue;
    }
    
    // Aquí iría el flujo completo: Recuperar -> Rerank -> Pasar al LLM
    // Para simplificar, simulamos que el LLM nos responde.
    // const llmResponse = await callLLM(query, context);
    const llmResponse = "Para obtener el TA con WSAA debes firmar un CMS usando tu clave privada y el certificado..."; // Mock
    
    let matchedKeywords = 0;
    for (const keyword of keywords) {
      if (llmResponse.toLowerCase().includes(keyword.toLowerCase())) {
        matchedKeywords++;
      }
    }

    const accuracy = calculateAccuracy(matchedKeywords, keywords.length);
    totalScore += accuracy;
    evaluatedCases++;
  }

  const averageAccuracy = evaluatedCases > 0 ? (totalScore / evaluatedCases) : 0;

  return {
    totalCases: dataset.length,
    casesWithKeywords: evaluatedCases,
    "Average Accuracy (%)": averageAccuracy * 100
  };
}

if (process.argv[1] && process.argv[1].endsWith("evaluate-rag.ts")) {
  runEvaluation(
    "End-to-End (RAG)", 
    "src/evals/datasets/arca-qa.jsonl", 
    ragRunner
  ).catch(console.error);
}
