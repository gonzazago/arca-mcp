/**
 * Tokeniza un texto en palabras minúsculas.
 */
function tokenize(text: string): string[] {
  return text.toLowerCase().match(/\b\w+\b/g) || [];
}

/**
 * Calcula la similitud de Jaccard (intersección sobre unión) para dos conjuntos.
 */
function jaccardSimilarity(setA: Set<string>, setB: Set<string>): number {
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  if (union.size === 0) return 0;
  return intersection.size / union.size;
}

/**
 * Encapsula la lógica de re-ordenamiento (Reranking).
 * Toma los resultados iniciales del Retrieval (ej. 50 documentos) y les aplica
 * un scoring combinado basado en Similitud Vectorial, BM25 Local y Coincidencia de Conjuntos (Jaccard).
 */
export async function rerankDocuments(query: string, documents: any[]) {
  if (documents.length === 0) return documents;

  const queryTokens = tokenize(query);
  const querySet = new Set(queryTokens);

  // Pre-calcular BM25 a nivel del sub-corpus recuperado (BM25 Local)
  const docTokens = documents.map(d => tokenize(d.content || ""));
  const N = documents.length;
  const avgdl = docTokens.reduce((acc, tokens) => acc + tokens.length, 0) / (N || 1);

  // Calcular Document Frequency (DF)
  const df: Record<string, number> = {};
  docTokens.forEach(tokens => {
    const uniqueTokens = new Set(tokens);
    uniqueTokens.forEach(t => {
      df[t] = (df[t] || 0) + 1;
    });
  });

  // Calcular IDF (Inverse Document Frequency)
  const idf: Record<string, number> = {};
  for (const [term, freq] of Object.entries(df)) {
    // Fórmula estándar de IDF para BM25
    idf[term] = Math.log(1 + (N - freq + 0.5) / (freq + 0.5));
  }

  // Parámetros de BM25
  const k1 = 1.2;
  const b = 0.75;

  // Calcular scores crudos para cada documento
  const scoredDocs = documents.map((doc, index) => {
    const tokens = docTokens[index] || [];
    const docSet = new Set(tokens);

    // 1. Similitud Vectorial Original (ya calculada por pgvector, asumiendo rango ~ 0 a 1)
    const vectorScore = doc.similarity || 0;

    // 2. Coincidencia por conjuntos (Jaccard)
    const jaccardScore = jaccardSimilarity(querySet, docSet);

    // 3. BM25 Local
    let bm25Score = 0;
    const tf: Record<string, number> = {};
    tokens.forEach(t => {
      tf[t] = (tf[t] || 0) + 1;
    });
    const docLen = tokens.length;

    queryTokens.forEach(q => {
      if (tf[q]) {
        const termFreq = tf[q];
        const termIdf = idf[q] || 0;
        const num = termFreq * (k1 + 1);
        const den = termFreq + k1 * (1 - b + b * (docLen / avgdl));
        bm25Score += termIdf * (num / den);
      }
    });

    return {
      ...doc,
      vectorScore,
      jaccardScore,
      rawBm25Score: bm25Score
    };
  });

  // Normalizar BM25 al rango [0, 1] para combinarlo de forma equitativa
  const maxBm25 = Math.max(...scoredDocs.map(d => d.rawBm25Score), 0.0001); // evitar div por 0
  
  // Calcular el puntaje final combinando los 3 métodos
  // Ponderación: 50% Vectorial, 30% BM25, 20% Jaccard (Ajustable según necesidad)
  const finalDocs = scoredDocs.map(doc => {
    const normalizedBm25 = doc.rawBm25Score / maxBm25;
    const finalScore = (0.5 * doc.vectorScore) + (0.3 * normalizedBm25) + (0.2 * doc.jaccardScore);

    return {
      ...doc,
      bm25Score: normalizedBm25, // Guardado para debug/log
      finalScore
    };
  });

  // Ordenar de mayor a menor según el nuevo puntaje final
  return finalDocs.sort((a, b) => b.finalScore - a.finalScore);
}
