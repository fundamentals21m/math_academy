/** Base fields shared by all theorem entries */
interface TheoremEntryBase {
  /** Unique identifier for theorem */
  id: string;
  /** Display title (e.g., "Pythagorean Theorem") */
  title: string;
  /** Mathematical statement of theorem - can contain LaTeX */
  statement: string;
  /** Section ID where this theorem is introduced */
  sectionId: number;
  /** Section title for display */
  sectionTitle?: string;
  /** Category for grouping (e.g., "Fundamentals", "Advanced") */
  category?: string;
  /** Optional: Type of entry */
  type?: 'theorem' | 'definition' | 'lemma' | 'corollary' | 'proposition';
}

/** Theorem entry without a proof */
interface TheoremEntryWithoutProof extends TheoremEntryBase {
  hasProof?: false;
  proof?: never;
}

/** Theorem entry with a proof - proof content is REQUIRED when hasProof is true */
interface TheoremEntryWithProof extends TheoremEntryBase {
  hasProof: true;
  /** LaTeX-formatted proof content - REQUIRED when hasProof is true */
  proof: string;
}

/**
 * Discriminated union type for theorem entries.
 * Enforces that when hasProof: true, proof content must be provided.
 */
export type TheoremEntry = TheoremEntryWithoutProof | TheoremEntryWithProof;

export const theorems: TheoremEntry[] = [
  // Foundations
  {
    id: 'def-negl',
    title: 'Negligible Functions',
    statement: '$\\text{negl}(\\lambda) = \\{f : f(\\lambda)^{-1} \\notin \\text{poly}(\\lambda)\\}$ - functions that decrease faster than any inverse polynomial.',
    sectionId: 0,
    sectionTitle: 'Notation',
    category: 'Foundations',
    type: 'definition',
  },
  {
    id: 'def-ppt',
    title: 'Probabilistic Polynomial-Time (PPT)',
    statement: 'A probabilistic interactive Turing machine is PPT if its runtime is in $\\text{poly}(\\lambda)$.',
    sectionId: 0,
    sectionTitle: 'Notation',
    category: 'Foundations',
    type: 'definition',
  },

  // Commitments
  {
    id: 'def-binding',
    title: 'Binding Commitment',
    statement: 'A commitment scheme is binding if $\\Pr[\\text{Com}(x_0; r_0) = \\text{Com}(x_1; r_1) \\land x_0 \\neq x_1] \\leq \\mu(\\lambda)$ for negligible $\\mu$.',
    sectionId: 1,
    sectionTitle: 'Binding Commitments',
    category: 'Commitments',
    type: 'definition',
  },
  {
    id: 'lemma-p2c',
    title: 'Pay-to-Contract is Binding',
    statement: 'Pay-to-Contract is a binding commitment scheme in the random oracle model.',
    sectionId: 2,
    sectionTitle: 'Pay-to-Contract',
    category: 'Commitments',
    type: 'lemma',
    hasProof: true,
    proof: `
      With $q$ queries to the random oracle $H_{\\text{P2C}}$, there are at most $q^2$ distinct pairs.
      For each pair $(P, m)$ and $(P', m')$, the collision probability is $1/p$.
      By union bound, the total collision probability is $\\leq q^2/p$, which is negligible.
    `,
  },

  // Zero-Knowledge
  {
    id: 'def-zkarg',
    title: 'Zero-Knowledge Argument of Knowledge',
    statement: 'A protocol satisfying completeness, soundness, and zero-knowledge, where a simulator can produce transcripts without the witness.',
    sectionId: 3,
    sectionTitle: 'ZK Arguments',
    category: 'Zero-Knowledge',
    type: 'definition',
  },
  {
    id: 'def-pshvzk',
    title: 'Perfect Special Honest Verifier Zero-Knowledge',
    statement: 'PSHVZK: A PPT simulator $\\mathcal{S}$ exists such that real and simulated transcript distributions are identical, given the verifier\'s randomness.',
    sectionId: 4,
    sectionTitle: 'PSHVZK',
    category: 'Zero-Knowledge',
    type: 'definition',
  },
  {
    id: 'thm-mult-pshvzk',
    title: 'Multiplication Protocol has PSHVZK',
    statement: 'The multiplication protocol for $\\mathcal{R}_{\\text{mult}}$ has perfect special honest verifier zero knowledge.',
    sectionId: 6,
    sectionTitle: 'PSHVZK Proof',
    category: 'Zero-Knowledge',
    type: 'theorem',
    hasProof: true,
    proof: `
      Simulator draws $x, l, r, \\mu, \\tau_x, T_2$ uniformly at random and sets:
      $S := \\frac{1}{x}(lG_0 + rG_1 + \\mu H - C)$
      $T_1 := \\frac{1}{x}(lrG_0 + \\tau_x H - V - x^2 T_2)$

      Both real and simulated distributions factor identically because all blinding factors
      ensure uniform distribution of transcript values.
    `,
  },

  // MuSig
  {
    id: 'def-sunf',
    title: 'Sequential Unforgeability (SUNF)',
    statement: 'Adversary wins by producing $n$ valid distinct signatures with fewer than $n$ signing sessions.',
    sectionId: 7,
    sectionTitle: 'Blind Signature Unforgeability',
    category: 'Multi-Signatures',
    type: 'definition',
  },
  {
    id: 'lemma-msunf',
    title: 'MSUNF Reduction',
    statement: 'If BlSch is SUNF-secure, then SeqMuSig is MSUNF-secure in the Algebraic Group Model.',
    sectionId: 8,
    sectionTitle: 'SeqMuSig Security',
    category: 'Multi-Signatures',
    type: 'lemma',
  },
];

export function getTheoremsByCategory(category: string): TheoremEntry[] {
  return theorems.filter((t) => t.category === category);
}

export function getTheoremsBySection(sectionId: number): TheoremEntry[] {
  return theorems.filter((t) => t.sectionId === sectionId);
}

export function getCategories(): string[] {
  return [...new Set(theorems.map((t) => t.category).filter((c): c is string => Boolean(c)))];
}

export function searchTheorems(query: string): TheoremEntry[] {
  const lowerQuery = query.toLowerCase();
  return theorems.filter(
    (t) =>
      t.title.toLowerCase().includes(lowerQuery) ||
      t.statement.toLowerCase().includes(lowerQuery)
  );
}
