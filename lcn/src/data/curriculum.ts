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
  // LITTLE CRYPTO NOTEBOOK - Advanced Cryptography Course
  // ==========================================================================
  {
    id: 1,
    title: 'Notation & Foundations',
    slug: 'foundations',
    sections: [
      {
        id: 0,
        title: 'Notation',
        slug: 'notation',
        description: 'Security parameters, polynomial-bounded functions, negligible functions, PPT machines, cyclic groups.',
      },
    ],
  },
  {
    id: 2,
    title: 'Commitments',
    slug: 'commitments',
    sections: [
      {
        id: 1,
        title: 'Binding Commitments',
        slug: 'binding-commitments',
        description: 'Definition of the binding property for commitment schemes.',
      },
      {
        id: 2,
        title: 'Pay-to-Contract',
        slug: 'pay-to-contract',
        description: 'P2C commitment scheme, Taproot integration, and binding proof.',
      },
    ],
  },
  {
    id: 3,
    title: 'Proving Zero-Knowledge',
    slug: 'zero-knowledge',
    sections: [
      {
        id: 3,
        title: 'Zero Knowledge Arguments of Knowledge',
        slug: 'zkarg',
        description: 'Completeness, soundness, and zero-knowledge properties.',
      },
      {
        id: 4,
        title: 'Perfect Special Honest Verifier ZK',
        slug: 'pshvzk',
        description: 'PSHVZK definition and simulator construction.',
      },
      {
        id: 5,
        title: 'Prove Multiplication in ZK',
        slug: 'zk-multiplication',
        description: 'Bulletproofs-inspired protocol for proving committed products.',
      },
      {
        id: 6,
        title: 'PSHVZK Proof for Multiplication',
        slug: 'pshvzk-proof',
        description: 'Rigorous proof of PSHVZK, variants that break ZK.',
      },
    ],
  },
  {
    id: 4,
    title: 'Blind Sequential MuSig',
    slug: 'musig',
    sections: [
      {
        id: 7,
        title: 'Blind Signature Unforgeability',
        slug: 'blind-sig',
        description: 'SUNF and MSUNF security games.',
      },
      {
        id: 8,
        title: 'SeqMuSig Security Proof',
        slug: 'seqmusig',
        description: 'Security in the Algebraic Group Model, reduction to SUNF.',
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
