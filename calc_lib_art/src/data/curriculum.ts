// =============================================================================
// CURRICULUM STRUCTURE - Calculus as a Liberal Art
// =============================================================================
// A conceptual journey through calculus emphasizing ideas, history, and
// connections to philosophy, art, and the broader human experience.
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
  // PART 1: THE QUEST TO UNDERSTAND CHANGE
  // ==========================================================================
  {
    id: 1,
    title: 'The Quest to Understand Change',
    slug: 'understanding-change',
    sections: [
      {
        id: 0,
        title: 'What is Calculus?',
        slug: 'what-is-calculus',
        description: 'The big picture: why calculus matters and what questions it answers.',
      },
      {
        id: 1,
        title: "Zeno's Paradoxes",
        slug: 'zenos-paradoxes',
        description: 'Ancient puzzles about motion, infinity, and the nature of space and time.',
      },
      {
        id: 2,
        title: 'Infinity and the Infinitesimal',
        slug: 'infinity-infinitesimal',
        description: 'The controversial idea of infinitely small quantities that revolutionized mathematics.',
      },
    ],
  },
  // ==========================================================================
  // PART 2: THE BIRTH OF CALCULUS
  // ==========================================================================
  {
    id: 2,
    title: 'The Birth of Calculus',
    slug: 'birth-of-calculus',
    sections: [
      {
        id: 3,
        title: 'Newton and the Falling Apple',
        slug: 'newton',
        description: 'How Isaac Newton invented calculus to understand gravity and motion.',
      },
      {
        id: 4,
        title: 'Leibniz and the Art of Notation',
        slug: 'leibniz',
        description: 'The philosopher who gave calculus its language and symbols.',
      },
      {
        id: 5,
        title: 'The Great Controversy',
        slug: 'controversy',
        description: 'The bitter priority dispute that divided mathematics for a century.',
      },
    ],
  },
  // ==========================================================================
  // PART 3: THE DERIVATIVE - CAPTURING CHANGE
  // ==========================================================================
  {
    id: 3,
    title: 'The Derivative',
    slug: 'derivative',
    sections: [
      {
        id: 6,
        title: 'The Tangent Problem',
        slug: 'tangent-problem',
        description: 'How do we measure the direction of a curve at a single point?',
      },
      {
        id: 7,
        title: 'Instantaneous Velocity',
        slug: 'instantaneous-velocity',
        description: 'The philosophical puzzle of motion at an instant.',
      },
      {
        id: 8,
        title: 'The Meaning of the Derivative',
        slug: 'meaning-of-derivative',
        description: 'Understanding rates of change as a fundamental concept.',
      },
    ],
  },
  // ==========================================================================
  // PART 4: THE INTEGRAL - ACCUMULATION
  // ==========================================================================
  {
    id: 4,
    title: 'The Integral',
    slug: 'integral',
    sections: [
      {
        id: 9,
        title: 'The Area Problem',
        slug: 'area-problem',
        description: 'Measuring curved regions through infinite subdivision.',
      },
      {
        id: 10,
        title: 'Accumulation and Totals',
        slug: 'accumulation',
        description: 'How integration captures the sum of infinitely many infinitesimal parts.',
      },
      {
        id: 11,
        title: 'The Fundamental Theorem',
        slug: 'fundamental-theorem',
        description: 'The profound connection between derivatives and integrals.',
      },
    ],
  },
  // ==========================================================================
  // PART 5: CALCULUS IN THE WORLD
  // ==========================================================================
  {
    id: 5,
    title: 'Calculus in the World',
    slug: 'calculus-in-world',
    sections: [
      {
        id: 12,
        title: 'Calculus and Physics',
        slug: 'calculus-physics',
        description: 'How calculus became the language of the physical universe.',
      },
      {
        id: 13,
        title: 'Calculus in Art and Music',
        slug: 'calculus-art-music',
        description: 'Hidden mathematical patterns in creative expression.',
      },
      {
        id: 14,
        title: 'The Unreasonable Effectiveness',
        slug: 'unreasonable-effectiveness',
        description: 'Why does mathematics describe reality so perfectly?',
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
