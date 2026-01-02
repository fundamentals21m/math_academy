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
  // DISQUISITIONES ARITHMETICAE by Carl Friedrich Gauss (1801)
  // The original work has 7 Sections (Sectiones), each covering a major topic
  // ==========================================================================
  {
    id: 1,
    title: 'Section I: Congruent Numbers in General',
    slug: 'congruent-numbers',
    sections: [
      {
        id: 0,
        title: 'Congruent Numbers and Moduli',
        slug: 'congruent-numbers-moduli',
        description: 'Introduction to congruence notation, residues, and fundamental properties of modular arithmetic.',
      },
    ],
  },
  {
    id: 2,
    title: 'Section II: Congruences of the First Degree',
    slug: 'first-degree-congruences',
    sections: [
      {
        id: 1,
        title: 'Linear Congruences',
        slug: 'linear-congruences',
        description: 'Solving linear congruences, the Chinese Remainder Theorem, and applications.',
      },
    ],
  },
  {
    id: 3,
    title: 'Section III: Residues of Powers',
    slug: 'residues-of-powers',
    sections: [
      {
        id: 2,
        title: "Primitive Roots and Fermat's Theorem",
        slug: 'primitive-roots',
        description: "Fermat's Little Theorem, primitive roots, and the structure of multiplicative groups modulo primes.",
      },
    ],
  },
  {
    id: 4,
    title: 'Section IV: Congruences of the Second Degree',
    slug: 'second-degree-congruences',
    sections: [
      {
        id: 3,
        title: 'Quadratic Residues and Reciprocity',
        slug: 'quadratic-residues',
        description: 'Quadratic residues, the Legendre symbol, and the celebrated Law of Quadratic Reciprocity.',
      },
    ],
  },
  {
    id: 5,
    title: 'Section V: Forms and Indeterminate Equations',
    slug: 'quadratic-forms',
    sections: [
      {
        id: 4,
        title: 'Binary Quadratic Forms',
        slug: 'binary-quadratic-forms',
        description: 'Theory of binary quadratic forms, equivalence, reduction, and representation of integers.',
      },
    ],
  },
  {
    id: 6,
    title: 'Section VI: Various Applications',
    slug: 'applications',
    sections: [
      {
        id: 5,
        title: 'Applications to Diophantine Equations',
        slug: 'diophantine-applications',
        description: 'Applications of the theory to solving Diophantine equations and other number-theoretic problems.',
      },
    ],
  },
  {
    id: 7,
    title: 'Section VII: Equations Defining Circle Sections',
    slug: 'circle-sections',
    sections: [
      {
        id: 6,
        title: 'Cyclotomy and the Regular 17-gon',
        slug: 'cyclotomy',
        description: 'The division of the circle, roots of unity, and the famous construction of the regular 17-gon.',
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
