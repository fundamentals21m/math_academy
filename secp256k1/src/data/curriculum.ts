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
  // SECP256K1 - The Curve That Powers Bitcoin
  // ==========================================================================
  {
    id: 1,
    title: 'Foundation',
    slug: 'foundation',
    sections: [
      {
        id: 0,
        title: 'The Big Picture',
        slug: 'big-picture',
        description: 'Why elliptic curves? Public-key cryptography, one-way functions, and what makes secp256k1 special.',
      },
      {
        id: 1,
        title: 'Curves Over Real Numbers',
        slug: 'curves-reals',
        description: 'Elliptic curve equations, geometric point addition, doubling, and scalar multiplication.',
      },
      {
        id: 2,
        title: 'Finite Fields',
        slug: 'finite-fields',
        description: 'Modular arithmetic, division by inverse, and curves over prime fields.',
      },
    ],
  },
  {
    id: 2,
    title: 'The Curve',
    slug: 'the-curve',
    sections: [
      {
        id: 3,
        title: 'secp256k1 Parameters',
        slug: 'parameters',
        description: 'The six parameters (p, a, b, G, n, h) that define Bitcoin\'s curve.',
      },
      {
        id: 4,
        title: 'Key Generation',
        slug: 'key-generation',
        description: 'Private keys, double-and-add algorithm, public key formats, and security analysis.',
      },
    ],
  },
  {
    id: 3,
    title: 'Signatures',
    slug: 'signatures',
    sections: [
      {
        id: 5,
        title: 'ECDSA Signatures',
        slug: 'ecdsa',
        description: 'Signing, verification, the nonce catastrophe, and signature malleability.',
      },
      {
        id: 6,
        title: 'Schnorr Signatures',
        slug: 'schnorr',
        description: 'Schnorr vs ECDSA, MuSig aggregation, batch verification, and Taproot.',
      },
    ],
  },
  {
    id: 4,
    title: 'Practice',
    slug: 'practice',
    sections: [
      {
        id: 7,
        title: 'Implementation Pitfalls',
        slug: 'implementation',
        description: 'Big integers, constant-time operations, common mistakes, and libsecp256k1.',
      },
      {
        id: 8,
        title: 'Applications',
        slug: 'applications',
        description: 'Ethereum, Lightning Network, adaptor signatures, and beyond.',
      },
      {
        id: 9,
        title: 'Recap and Future',
        slug: 'future',
        description: 'Security assumptions, quantum threats, post-quantum alternatives, and other curves.',
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
