// =============================================================================
// CURRICULUM STRUCTURE
// =============================================================================
// Based on "Elements of Algebraic Coding Theory" by L. R. Vermani
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
  // Chapter 1: Group Codes
  // ==========================================================================
  {
    id: 1,
    title: 'Group Codes',
    slug: 'group-codes',
    sections: [
      {
        id: 0,
        title: 'Elementary Properties',
        slug: 'elementary-properties',
        description: 'Groups, rings, fields, and the binary field. Distance and weight functions for codes.',
      },
      {
        id: 1,
        title: 'Matrix Encoding Techniques',
        slug: 'matrix-encoding',
        description: 'Using matrix multiplication to encode messages into code words.',
      },
      {
        id: 2,
        title: 'Generator and Parity Check Matrices',
        slug: 'generator-parity-matrices',
        description: 'Standard form generator matrices and systematic encoding.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 2: Polynomial Codes
  // ==========================================================================
  {
    id: 2,
    title: 'Polynomial Codes',
    slug: 'polynomial-codes',
    sections: [
      {
        id: 3,
        title: 'Vector Spaces and Polynomial Rings',
        slug: 'vector-spaces-polynomials',
        description: 'Definitions of vector spaces and polynomial rings over finite fields.',
      },
      {
        id: 4,
        title: 'Polynomial Codes',
        slug: 'polynomial-codes-intro',
        description: 'Encoding using polynomial multiplication and division.',
      },
      {
        id: 5,
        title: 'Generator and Parity Check Matrices - General Case',
        slug: 'generator-parity-general',
        description: 'Constructing generator and parity check matrices for polynomial codes.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 3: Hamming Codes
  // ==========================================================================
  {
    id: 3,
    title: 'Hamming Codes',
    slug: 'hamming-codes',
    sections: [
      {
        id: 6,
        title: 'Binary Representation of Numbers',
        slug: 'binary-representation',
        description: 'Converting integers to binary form for use in coding theory.',
      },
      {
        id: 7,
        title: 'Hamming Codes',
        slug: 'hamming-codes-intro',
        description: 'Single error-correcting Hamming codes and their construction.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 4: Finite Fields and BCH Codes
  // ==========================================================================
  {
    id: 4,
    title: 'Finite Fields and BCH Codes',
    slug: 'finite-fields-bch',
    sections: [
      {
        id: 8,
        title: 'Finite Fields',
        slug: 'finite-fields',
        description: 'Construction and properties of Galois fields GF(p^n).',
      },
      {
        id: 9,
        title: 'Primitive Polynomials',
        slug: 'primitive-polynomials',
        description: 'Examples and construction of primitive polynomials.',
      },
      {
        id: 10,
        title: 'BCH Codes',
        slug: 'bch-codes',
        description: 'Bose-Chaudhuri-Hocquenghem codes for multiple error correction.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 5: Linear Codes
  // ==========================================================================
  {
    id: 5,
    title: 'Linear Codes',
    slug: 'linear-codes',
    sections: [
      {
        id: 11,
        title: 'Generator and Parity Check Matrices',
        slug: 'linear-generator-parity',
        description: 'Linear codes as vector subspaces with generator and parity check matrices.',
      },
      {
        id: 12,
        title: 'Dual Code of a Linear Code',
        slug: 'dual-codes',
        description: 'The orthogonal complement and dual code construction.',
      },
      {
        id: 13,
        title: 'Weight Distribution of Dual Codes',
        slug: 'weight-distribution',
        description: 'MacWilliams identity relating weight enumerators of dual codes.',
      },
      {
        id: 14,
        title: 'New Codes from Given Codes',
        slug: 'new-codes',
        description: 'Puncturing, shortening, and extending codes.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 6: Cyclic Codes
  // ==========================================================================
  {
    id: 6,
    title: 'Cyclic Codes',
    slug: 'cyclic-codes',
    sections: [
      {
        id: 15,
        title: 'Cyclic Codes',
        slug: 'cyclic-codes-intro',
        description: 'Codes closed under cyclic shifts as ideals in polynomial rings.',
      },
      {
        id: 16,
        title: 'Check Polynomial',
        slug: 'check-polynomial',
        description: 'The check polynomial and its role in error detection.',
      },
      {
        id: 17,
        title: 'BCH and Hamming Codes as Cyclic Codes',
        slug: 'bch-hamming-cyclic',
        description: 'BCH and Hamming codes viewed through the lens of cyclic codes.',
      },
      {
        id: 18,
        title: 'Non-binary Hamming Codes',
        slug: 'nonbinary-hamming',
        description: 'Extending Hamming codes to non-binary alphabets.',
      },
      {
        id: 19,
        title: 'Idempotents',
        slug: 'idempotents',
        description: 'Idempotent generators for cyclic codes.',
      },
      {
        id: 20,
        title: 'Solved Examples and Invariance Property',
        slug: 'cyclic-examples',
        description: 'Worked examples and the invariance property of cyclic codes.',
      },
      {
        id: 21,
        title: 'Cyclic Codes and Group Algebras',
        slug: 'group-algebras',
        description: 'Connection between cyclic codes and group algebra theory.',
      },
      {
        id: 22,
        title: 'Self-Dual Binary Cyclic Codes',
        slug: 'self-dual-cyclic',
        description: 'Binary cyclic codes that are equal to their duals.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 7: Factorization of Polynomials
  // ==========================================================================
  {
    id: 7,
    title: 'Factorization of Polynomials',
    slug: 'factorization',
    sections: [
      {
        id: 23,
        title: 'Factors of X^n - 1',
        slug: 'factors-xn-1',
        description: 'Factoring x^n - 1 over finite fields.',
      },
      {
        id: 24,
        title: 'Factorization via Cyclotomic Cosets',
        slug: 'cyclotomic-cosets',
        description: 'Using cyclotomic cosets to factor polynomials.',
      },
      {
        id: 25,
        title: "Berlekamp's Algorithm",
        slug: 'berlekamp-algorithm',
        description: "Berlekamp's algorithm for factoring polynomials over finite fields.",
      },
      {
        id: 26,
        title: "Berlekamp's Algorithm - Special Case",
        slug: 'berlekamp-special',
        description: 'A special case of Berlekamp\'s algorithm with detailed examples.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 8: Quadratic Residue Codes
  // ==========================================================================
  {
    id: 8,
    title: 'Quadratic Residue Codes',
    slug: 'qr-codes',
    sections: [
      {
        id: 27,
        title: 'Introduction to QR Codes',
        slug: 'qr-intro',
        description: 'Definition and basic properties of quadratic residue codes.',
      },
      {
        id: 28,
        title: 'Examples of QR Codes',
        slug: 'qr-examples',
        description: 'Binary Golay code and other quadratic residue code examples.',
      },
      {
        id: 29,
        title: 'Extended QR Codes and Distance Properties',
        slug: 'extended-qr',
        description: 'Extended quadratic residue codes and their minimum distance.',
      },
      {
        id: 30,
        title: 'Idempotents of QR Codes',
        slug: 'qr-idempotents',
        description: 'Idempotent generators for quadratic residue codes.',
      },
      {
        id: 31,
        title: 'QR Code Examples',
        slug: 'qr-worked-examples',
        description: 'Detailed worked examples of quadratic residue codes.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 9: Maximum Distance Separable Codes
  // ==========================================================================
  {
    id: 9,
    title: 'Maximum Distance Separable Codes',
    slug: 'mds-codes',
    sections: [
      {
        id: 32,
        title: 'Conditions for MDS Codes',
        slug: 'mds-conditions',
        description: 'Necessary and sufficient conditions for MDS codes.',
      },
      {
        id: 33,
        title: 'Weight Distribution of MDS Codes',
        slug: 'mds-weight',
        description: 'The unique weight distribution of MDS codes.',
      },
      {
        id: 34,
        title: 'MDS Code Existence Problem',
        slug: 'mds-existence',
        description: 'The problem of finding the largest n for [n,k,d] MDS codes.',
      },
      {
        id: 35,
        title: 'Reed-Solomon Codes',
        slug: 'reed-solomon',
        description: 'Reed-Solomon codes as important examples of MDS codes.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 10: Automorphism Group of a Code
  // ==========================================================================
  {
    id: 10,
    title: 'Automorphism Group of a Code',
    slug: 'automorphism-group',
    sections: [
      {
        id: 36,
        title: 'Automorphism Group of Binary Codes',
        slug: 'auto-binary',
        description: 'Permutation groups that preserve binary codes.',
      },
      {
        id: 37,
        title: 'Automorphism Group of Non-binary Codes',
        slug: 'auto-nonbinary',
        description: 'Automorphisms of codes over larger alphabets.',
      },
      {
        id: 38,
        title: 'Automorphisms and Minimum Distance',
        slug: 'auto-distance',
        description: 'How the automorphism group relates to minimum distance.',
      },
    ],
  },
  // ==========================================================================
  // Chapter 11: Hadamard Matrices and Hadamard Codes
  // ==========================================================================
  {
    id: 11,
    title: 'Hadamard Matrices and Codes',
    slug: 'hadamard',
    sections: [
      {
        id: 39,
        title: 'Hadamard Matrices',
        slug: 'hadamard-matrices',
        description: 'Construction and properties of Hadamard matrices.',
      },
      {
        id: 40,
        title: 'Hadamard Codes',
        slug: 'hadamard-codes',
        description: 'Non-linear Hadamard codes derived from Hadamard matrices.',
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
