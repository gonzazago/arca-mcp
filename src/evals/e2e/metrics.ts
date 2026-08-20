export function calculateAccuracy(matchedKeywords: number, totalKeywords: number): number {
  if (totalKeywords === 0) return 0;
  return matchedKeywords / totalKeywords;
}
