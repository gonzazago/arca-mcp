export interface EvaluationDatasetItem {
  id: string;
  question: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  relevant_sources: string[];
  expected_answer_keywords?: string[];
}

export interface EvaluationResult {
  totalCases: number;
  [metricName: string]: number;
}
