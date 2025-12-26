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
  // PART 1: FOUNDATIONS OF ANALYSIS
  // ==========================================================================
  {
    id: 1,
    title: 'Foundations of Analysis',
    slug: 'foundations',
    sections: [
      {
        id: 1,
        title: 'The Real Number System',
        slug: 'real-numbers',
        description: 'Axioms of the real numbers, completeness, and the least upper bound property.',
      },
      {
        id: 2,
        title: 'Mathematical Induction',
        slug: 'induction',
        description: 'The principle of mathematical induction and its applications to proofs.',
      },
      {
        id: 3,
        title: 'Finite and Infinite Sets',
        slug: 'sets',
        description: 'Basic set theory, countable and uncountable sets, and cardinality.',
      },
      {
        id: 4,
        title: 'Functions and Relations',
        slug: 'functions',
        description: 'Function properties, composition, and inverse functions.',
      },
    ],
  },
  // ==========================================================================
  // PART 2: SEQUENCES AND SERIES
  // ==========================================================================
  {
    id: 2,
    title: 'Sequences and Series',
    slug: 'sequences-series',
    sections: [
      {
        id: 5,
        title: 'Sequences and Their Limits',
        slug: 'sequences-limits',
        description: 'Definition of sequence convergence, limit theorems, and monotonic sequences.',
      },
      {
        id: 6,
        title: 'Infinite Series',
        slug: 'infinite-series',
        description: 'Convergence of infinite series, positive series, and the integral test.',
      },
      {
        id: 7,
        title: 'Convergence Tests',
        slug: 'convergence-tests',
        description: 'Ratio test, root test, comparison tests, and alternating series.',
      },
      {
        id: 8,
        title: 'Power Series',
        slug: 'power-series',
        description: 'Radius and interval of convergence, analytic functions.',
      },
    ],
  },
  // ==========================================================================
  // PART 3: CONTINUITY AND DIFFERENTIATION
  // ==========================================================================
  {
    id: 3,
    title: 'Continuity and Differentiation',
    slug: 'continuity-differentiation',
    sections: [
      {
        id: 9,
        title: 'Limits and Continuity',
        slug: 'limits-continuity',
        description: 'ε-δ definition of limits, continuity, and uniform continuity.',
      },
      {
        id: 10,
        title: 'Continuous Functions',
        slug: 'continuous-functions',
        description: 'Properties of continuous functions on intervals and compactness.',
      },
      {
        id: 11,
        title: 'Differentiation',
        slug: 'differentiation',
        description: 'Derivative as a limit, rules of differentiation, and mean value theorems.',
      },
      {
        id: 12,
        title: 'Applications of Derivatives',
        slug: 'derivative-applications',
        description: 'Taylor\'s theorem, L\'Hospital\'s rule, and inverse function theorem.',
      },
    ],
  },
  // ==========================================================================
  // PART 4: INTEGRATION AND ADVANCED TOPICS
  // ==========================================================================
  {
    id: 4,
    title: 'Integration and Advanced Topics',
    slug: 'integration-advanced',
    sections: [
      {
        id: 13,
        title: 'The Riemann Integral',
        slug: 'riemann-integral',
        description: 'Definition of the Riemann integral, integrability, and properties.',
      },
      {
        id: 14,
        title: 'Fundamental Theorem of Calculus',
        slug: 'fundamental-theorem',
        description: 'Relationship between differentiation and integration.',
      },
      {
        id: 15,
        title: 'Sequences of Functions',
        slug: 'function-sequences',
        description: 'Pointwise and uniform convergence, interchange of limits.',
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
