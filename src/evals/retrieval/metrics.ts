export function calculateHitRate(hits: number, totalCases: number): number {
  if (totalCases === 0) return 0;
  return hits / totalCases;
}

export function calculateMRR(reciprocalRankSum: number, totalCases: number): number {
  if (totalCases === 0) return 0;
  return reciprocalRankSum / totalCases;
}

export function checkHit(retrievedDocs: any[], expectedDocuments: string[]): number {
  for (let i = 0; i < retrievedDocs.length; i++) {
    const doc = retrievedDocs[i];
    const isExpected = expectedDocuments.some((expectedFilename: string) =>
      doc.metadata?.filename?.includes(expectedFilename) ||
      doc.metadata?.source?.includes(expectedFilename)
    );

    if (isExpected) {
      return i;
    }
  }
  return -1;
}
