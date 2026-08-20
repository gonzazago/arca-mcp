export function calculateMRRImprovement(baseMRR: number, rerankedMRR: number): number {
  if (baseMRR === 0) return 0;
  return ((rerankedMRR - baseMRR) / baseMRR) * 100;
}
