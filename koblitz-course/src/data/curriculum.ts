// =============================================================================
// CURRICULUM STRUCTURE
// =============================================================================
// Define your course structure here. The curriculum is organized by Parts,
// where each Part contains multiple Sections.
// =============================================================================

/**
 * Individual section within a part
 */
export interface Section {
  id: number;
  title: string;
  slug: string;
  description: string;
}

/**
 * Part containing multiple sections
 */
export interface Part {
  id: number;
  title: string;
  slug: string;
  sections: Section[];
}

/**
 * Complete curriculum structure
 */
export const curriculum: Part[] = [
  // ==========================================================================
  // CHAPTER I: Some Topics in Elementary Number Theory
  // ==========================================================================
  {
    id: 1,
    title: 'Elementary Number Theory',
    slug: 'elementary-number-theory',
    sections: [
      {
        id: 0,
        title: 'Time Estimates for Doing Arithmetic',
        slug: 'time-estimates',
        description: 'Computational complexity of basic arithmetic operations.',
      },
      {
        id: 1,
        title: 'Divisibility and the Euclidean Algorithm',
        slug: 'divisibility-euclidean',
        description: 'GCD, Euclidean algorithm, and fundamental divisibility properties.',
      },
      {
        id: 2,
        title: 'Congruences',
        slug: 'congruences',
        description: 'Modular arithmetic, Chinese Remainder Theorem, and applications.',
      },
      {
        id: 3,
        title: 'Some Applications to Factoring',
        slug: 'factoring-applications',
        description: 'Using number theory for integer factorization.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER II: Finite Fields and Quadratic Residues
  // ==========================================================================
  {
    id: 2,
    title: 'Finite Fields and Quadratic Residues',
    slug: 'finite-fields',
    sections: [
      {
        id: 4,
        title: 'Finite Fields',
        slug: 'finite-fields-intro',
        description: 'Structure and properties of finite fields.',
      },
      {
        id: 5,
        title: 'Quadratic Residues and Reciprocity',
        slug: 'quadratic-residues',
        description: 'Legendre symbol, quadratic reciprocity law.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER III: Cryptography
  // ==========================================================================
  {
    id: 3,
    title: 'Classical Cryptography',
    slug: 'classical-cryptography',
    sections: [
      {
        id: 6,
        title: 'Some Simple Cryptosystems',
        slug: 'simple-cryptosystems',
        description: 'Shift ciphers, substitution ciphers, and Vigenère cipher.',
      },
      {
        id: 7,
        title: 'Enciphering Matrices',
        slug: 'enciphering-matrices',
        description: 'Hill cipher and matrix-based encryption.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER IV: Public Key Cryptography
  // ==========================================================================
  {
    id: 4,
    title: 'Public Key Cryptography',
    slug: 'public-key',
    sections: [
      {
        id: 8,
        title: 'The Idea of Public Key Cryptography',
        slug: 'public-key-idea',
        description: 'One-way functions and the revolutionary concept of asymmetric encryption.',
      },
      {
        id: 9,
        title: 'RSA',
        slug: 'rsa',
        description: 'The RSA cryptosystem: encryption, decryption, and security.',
      },
      {
        id: 10,
        title: 'Discrete Logarithm',
        slug: 'discrete-log',
        description: 'Discrete log problem, Diffie-Hellman, and ElGamal.',
      },
      {
        id: 11,
        title: 'Knapsack',
        slug: 'knapsack',
        description: 'Knapsack-based cryptosystems and their security.',
      },
      {
        id: 12,
        title: 'Zero-Knowledge Proofs',
        slug: 'zero-knowledge',
        description: 'Zero-knowledge protocols and oblivious transfer.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER V: Primality and Factoring
  // ==========================================================================
  {
    id: 5,
    title: 'Primality and Factoring',
    slug: 'primality-factoring',
    sections: [
      {
        id: 13,
        title: 'Pseudoprimes',
        slug: 'pseudoprimes',
        description: 'Fermat pseudoprimes, Carmichael numbers, and Miller-Rabin test.',
      },
      {
        id: 14,
        title: 'The Rho Method',
        slug: 'rho-method',
        description: "Pollard's rho algorithm for factorization.",
      },
      {
        id: 15,
        title: 'Fermat Factorization and Factor Bases',
        slug: 'fermat-factorization',
        description: 'Fermat factorization method and smooth numbers.',
      },
      {
        id: 16,
        title: 'The Continued Fraction Method',
        slug: 'continued-fraction',
        description: 'Using continued fractions for factorization.',
      },
      {
        id: 17,
        title: 'The Quadratic Sieve Method',
        slug: 'quadratic-sieve',
        description: 'The quadratic sieve factoring algorithm.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER VI: Elliptic Curves
  // ==========================================================================
  {
    id: 6,
    title: 'Elliptic Curves',
    slug: 'elliptic-curves',
    sections: [
      {
        id: 18,
        title: 'Basic Facts',
        slug: 'elliptic-basics',
        description: 'Definition, group law, and properties of elliptic curves.',
      },
      {
        id: 19,
        title: 'Elliptic Curve Cryptosystems',
        slug: 'ecc',
        description: 'ECDH, ECDSA, and elliptic curve encryption.',
      },
      {
        id: 20,
        title: 'Elliptic Curve Primality Test',
        slug: 'ec-primality',
        description: 'Using elliptic curves for primality testing.',
      },
      {
        id: 21,
        title: 'Elliptic Curve Factorization',
        slug: 'ec-factorization',
        description: "Lenstra's elliptic curve factorization method.",
      },
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get section by ID
 */
export function getSectionById(id: number): Section | undefined {
  for (const part of curriculum) {
    const section = part.sections.find((s) => s.id === id);
    if (section) return section;
  }
  return undefined;
}

/**
 * Get part containing a section
 */
export function getPartBySectionId(sectionId: number): Part | undefined {
  return curriculum.find((part) =>
    part.sections.some((section) => section.id === sectionId)
  );
}

/**
 * Get adjacent sections (previous and next)
 */
export function getAdjacentSections(sectionId: number): {
  prev: Section | null;
  next: Section | null;
} {
  const allSections = curriculum.flatMap((part) => part.sections);
  const index = allSections.findIndex((s) => s.id === sectionId);

  return {
    prev: index > 0 ? allSections[index - 1] : null,
    next: index < allSections.length - 1 ? allSections[index + 1] : null,
  };
}

/**
 * Get total number of sections
 */
export function getTotalSections(): number {
  return curriculum.reduce((total, part) => total + part.sections.length, 0);
}

/**
 * Get all sections as a flat array
 */
export function getAllSections(): Section[] {
  return curriculum.flatMap((part) => part.sections);
}

/**
 * Get section index (position in course)
 */
export function getSectionIndex(sectionId: number): number {
  const allSections = getAllSections();
  return allSections.findIndex((s) => s.id === sectionId);
}
