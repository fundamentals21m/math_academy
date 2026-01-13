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
  // ==========================================================================
  // PART 1: THE PROBLEM SPACE
  // ==========================================================================
  {
    id: 'def-threshold-scheme',
    title: '(t, n)-Threshold Scheme',
    statement: 'A system where secret $s$ is divided into $n$ shares such that any $t$ shares can reconstruct $s$, but any $t-1$ shares reveal nothing about $s$.',
    sectionId: 1,
    category: 'Problem Space',
    type: 'definition',
  },

  // ==========================================================================
  // PART 2: SCHNORR SIGNATURES
  // ==========================================================================
  {
    id: 'def-abelian-group',
    title: 'Abelian Group',
    statement: 'A set $G$ with operation $+$ satisfying identity, inverses, associativity, and commutativity.',
    sectionId: 4,
    category: 'Schnorr Signatures',
    type: 'definition',
  },
  {
    id: 'thm-discrete-log',
    title: 'Discrete Log Hardness',
    statement: 'Given $Y = [s]G$, computing $s$ is computationally infeasible (approximately $2^{128}$ operations for secp256k1).',
    sectionId: 4,
    category: 'Schnorr Signatures',
    type: 'theorem',
  },
  {
    id: 'def-schnorr-signing',
    title: 'Schnorr Signing Algorithm',
    statement: 'Sign message $m$: (1) Sample $k \\gets \\mathbb{Z}_q$, (2) $R = [k]G$, (3) $c = H(R \\| Y \\| m)$, (4) $z = k + s \\cdot c$, (5) Output $\\sigma = (R, z)$.',
    sectionId: 5,
    category: 'Schnorr Signatures',
    type: 'definition',
  },
  {
    id: 'thm-schnorr-verification',
    title: 'Schnorr Verification Correctness',
    statement: 'For a valid signature $(R, z)$ on message $m$ with public key $Y$: $[z]G = R + [c]Y$ where $c = H(R \\| Y \\| m)$.',
    sectionId: 6,
    category: 'Schnorr Signatures',
    type: 'theorem',
    hasProof: true,
    proof: `
      Starting from $z = k + s \\cdot c$:
      $[z]G = [k + s \\cdot c]G = [k]G + [s \\cdot c]G = R + [c]([s]G) = R + [c]Y \\checkmark$
    `,
  },
  {
    id: 'thm-nonce-reuse-attack',
    title: 'Nonce Reuse Attack',
    statement: 'Given two signatures with the same nonce but different messages, the private key can be extracted: $s = (z_1 - z_2)/(c_1 - c_2)$.',
    sectionId: 8,
    category: 'Schnorr Signatures',
    type: 'theorem',
    hasProof: true,
    proof: `
      From $z_1 = k + s \\cdot c_1$ and $z_2 = k + s \\cdot c_2$:
      $z_1 - z_2 = s \\cdot (c_1 - c_2)$
      Therefore: $s = (z_1 - z_2)/(c_1 - c_2)$
    `,
  },

  // ==========================================================================
  // PART 3: SHAMIR SECRET SHARING
  // ==========================================================================
  {
    id: 'thm-polynomial-uniqueness',
    title: 'Polynomial Uniqueness',
    statement: 'A polynomial of degree $t-1$ is uniquely determined by $t$ points. Conversely, $t-1$ points leave infinitely many degree $t-1$ polynomials consistent.',
    sectionId: 9,
    category: 'Shamir Secret Sharing',
    type: 'theorem',
  },
  {
    id: 'def-shamir-sharing',
    title: 'Shamir Secret Sharing',
    statement: 'To share secret $s$ among $n$ parties with threshold $t$: choose random $a_1, ..., a_{t-1}$, define $f(x) = s + a_1 x + ... + a_{t-1} x^{t-1}$, distribute shares $(i, f(i))$.',
    sectionId: 9,
    category: 'Shamir Secret Sharing',
    type: 'definition',
  },
  {
    id: 'def-lagrange-basis',
    title: 'Lagrange Basis Polynomial',
    statement: 'For point $(x_i, y_i)$: $L_i(x) = \\prod_{j \\neq i} \\frac{x - x_j}{x_i - x_j}$ with $L_i(x_i) = 1$ and $L_i(x_j) = 0$ for $j \\neq i$.',
    sectionId: 10,
    category: 'Shamir Secret Sharing',
    type: 'definition',
  },
  {
    id: 'thm-lagrange-interpolation',
    title: 'Lagrange Interpolation',
    statement: 'The unique polynomial through points $(x_1, y_1), ..., (x_t, y_t)$ is $f(x) = \\sum_{i=1}^{t} y_i \\cdot L_i(x)$.',
    sectionId: 10,
    category: 'Shamir Secret Sharing',
    type: 'theorem',
  },
  {
    id: 'def-feldman-vss',
    title: 'Feldman VSS',
    statement: 'Verifiable Secret Sharing where dealer publishes commitments $A_j = [a_j]G$ for all coefficients. Participants verify: $[s_i]G = \\sum_{j=0}^{t-1} [i^j]A_j$.',
    sectionId: 13,
    category: 'Shamir Secret Sharing',
    type: 'definition',
  },

  // ==========================================================================
  // PART 4: SHARE CONVERSION
  // ==========================================================================
  {
    id: 'thm-transformation',
    title: 'Transformation Theorem',
    statement: 'Given additive shares $a_i$ where $\\sum_i a_i = s$, computing $\\hat{s}_i = a_i \\cdot \\lambda_i$ gives values that satisfy $\\sum_i \\hat{s}_i = s$ with Lagrange reconstruction.',
    sectionId: 16,
    category: 'Share Conversion',
    type: 'theorem',
    hasProof: true,
    proof: `
      Since $\\sum_i \\lambda_i = 1$ (Lagrange coefficients sum to 1):
      $\\sum_i \\hat{s}_i = \\sum_i a_i \\cdot \\lambda_i$
      For the special case where all $a_i = s$ are equal:
      $\\sum_i s \\cdot \\lambda_i = s \\cdot \\sum_i \\lambda_i = s \\cdot 1 = s$
    `,
  },

  // ==========================================================================
  // PART 5: BINDING MECHANISM
  // ==========================================================================
  {
    id: 'def-frost-binding',
    title: 'FROST Binding Factor',
    statement: '$\\rho_i = H(i, m, B)$ where $B = \\{(D_j, E_j)\\}_{j \\in S}$ is the set of all commitment pairs from participating signers.',
    sectionId: 22,
    category: 'Binding Mechanism',
    type: 'definition',
  },
  {
    id: 'def-frost-signing',
    title: 'Complete FROST Signing Formula',
    statement: 'Each participant computes: $z_i = d_i + e_i \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c$ where $\\rho_i = H(i, m, B)$ and $c = H(R, Y, m)$.',
    sectionId: 24,
    category: 'Binding Mechanism',
    type: 'definition',
  },

  // ==========================================================================
  // PART 6: COMPLETE PROTOCOL
  // ==========================================================================
  {
    id: 'thm-frost-correctness',
    title: 'FROST Correctness',
    statement: 'The aggregated signature $(R, z)$ where $z = \\sum_i z_i$ and $R = \\sum_i R_i$ is a valid Schnorr signature: $[z]G = R + [c]Y$.',
    sectionId: 32,
    category: 'Complete Protocol',
    type: 'theorem',
    hasProof: true,
    proof: `
      $z = \\sum_i z_i = \\sum_i (k_i + \\lambda_i \\cdot s_i \\cdot c) = k + s \\cdot c$
      where $k = \\sum_i k_i$ and $s = \\sum_i \\lambda_i \\cdot s_i$.
      Therefore: $[z]G = [k + s \\cdot c]G = [k]G + [c][s]G = R + [c]Y$
    `,
  },

  // ==========================================================================
  // PART 7: SECURITY ANALYSIS
  // ==========================================================================
  {
    id: 'thm-frost-security',
    title: 'FROST Security',
    statement: 'Under the Discrete Logarithm assumption in the random oracle model, FROST is unforgeable against an adversary controlling up to $t-1$ signers.',
    sectionId: 38,
    category: 'Security Analysis',
    type: 'theorem',
  },
  {
    id: 'thm-security-bound',
    title: 'Concrete Security Bound',
    statement: '$\\varepsilon_{FROST} \\leq \\varepsilon_{DL} + \\text{negligible terms}$ where $\\varepsilon_{DL}$ is the probability of solving discrete log.',
    sectionId: 38,
    category: 'Security Analysis',
    type: 'theorem',
  },

  // ==========================================================================
  // PART 8: BITCOIN APPLICATIONS
  // ==========================================================================
  {
    id: 'def-adaptor-signature',
    title: 'Adaptor Signature',
    statement: 'A pre-signature $\\tilde{\\sigma}$ that becomes valid only when combined with a secret $t$: $\\sigma = \\tilde{\\sigma} + t$, allowing atomic revelation.',
    sectionId: 48,
    category: 'Bitcoin Applications',
    type: 'definition',
  },

  // ==========================================================================
  // PART 9: IMPLEMENTATION
  // ==========================================================================
  {
    id: 'def-share-verification',
    title: 'Signature Share Verification',
    statement: 'Verify participant $i$\'s share: $[z_i]G = R_i + [\\lambda_i \\cdot c]Y_i$ where $R_i = D_i + [\\rho_i]E_i$.',
    sectionId: 55,
    category: 'Implementation',
    type: 'definition',
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
