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
 * Based on "Calculus Made Easy" by Silvanus P. Thompson (1998 Edition with Martin Gardner's updates)
 */
export const curriculum: Part[] = [
  // ==========================================================================
  // PRELIMINARY CHAPTERS (by Martin Gardner)
  // ==========================================================================
  {
    id: 1,
    title: 'Preliminary Chapters',
    slug: 'preliminary',
    sections: [
      {
        id: 0,
        title: 'What Is a Function?',
        slug: 'functions',
        description: 'Understanding functions as the foundation of calculus.',
      },
      {
        id: 1,
        title: 'What Is a Limit?',
        slug: 'limits',
        description: 'The concept of limits and approaching values.',
      },
      {
        id: 2,
        title: 'What Is a Derivative?',
        slug: 'derivatives-intro',
        description: 'Introduction to the derivative and rates of change.',
      },
    ],
  },
  // ==========================================================================
  // PART I: THE FOUNDATION (Thompson Chapters I-V)
  // ==========================================================================
  {
    id: 2,
    title: 'The Foundation',
    slug: 'foundation',
    sections: [
      {
        id: 3,
        title: 'Preliminary Terrors',
        slug: 'preliminary-terrors',
        description: 'To deliver you from the preliminary terrors of calculus.',
      },
      {
        id: 4,
        title: 'Degrees of Smallness',
        slug: 'degrees-of-smallness',
        description: 'On different degrees of smallness and infinitesimals.',
      },
      {
        id: 5,
        title: 'Relative Growings',
        slug: 'relative-growings',
        description: 'On relative growings and comparing rates of change.',
      },
      {
        id: 6,
        title: 'Simplest Cases',
        slug: 'simplest-cases',
        description: 'The simplest cases of differentiation.',
      },
      {
        id: 7,
        title: 'What to Do with Constants',
        slug: 'constants',
        description: 'Next stage: what to do with constants in differentiation.',
      },
    ],
  },
  // ==========================================================================
  // PART II: DIFFERENTIATION RULES (Thompson Chapters VI-IX)
  // ==========================================================================
  {
    id: 3,
    title: 'Differentiation Rules',
    slug: 'differentiation-rules',
    sections: [
      {
        id: 8,
        title: 'Sums, Products, and Quotients',
        slug: 'sums-products-quotients',
        description: 'Differentiating sums, differences, products, and quotients.',
      },
      {
        id: 9,
        title: 'Successive Differentiation',
        slug: 'successive-differentiation',
        description: 'Taking derivatives of derivatives.',
      },
      {
        id: 10,
        title: 'When Time Varies',
        slug: 'time-varies',
        description: 'Derivatives with respect to time and rates.',
      },
      {
        id: 11,
        title: 'A Useful Dodge',
        slug: 'useful-dodge',
        description: 'Introducing a useful dodge: the chain rule.',
      },
    ],
  },
  // ==========================================================================
  // PART III: APPLICATIONS OF DERIVATIVES (Thompson Chapters X-XIII)
  // ==========================================================================
  {
    id: 4,
    title: 'Applications of Derivatives',
    slug: 'applications',
    sections: [
      {
        id: 12,
        title: 'Geometrical Meaning',
        slug: 'geometrical-meaning',
        description: 'The geometrical meaning of differentiation.',
      },
      {
        id: 13,
        title: 'Maxima and Minima',
        slug: 'maxima-minima',
        description: 'Finding maximum and minimum values.',
      },
      {
        id: 14,
        title: 'Curvature of Curves',
        slug: 'curvature',
        description: 'Understanding curvature of curves.',
      },
      {
        id: 15,
        title: 'Partial Fractions',
        slug: 'partial-fractions',
        description: 'Partial fractions and inverse functions.',
      },
    ],
  },
  // ==========================================================================
  // PART IV: SPECIAL FUNCTIONS (Thompson Chapters XIV-XVI)
  // ==========================================================================
  {
    id: 5,
    title: 'Special Functions',
    slug: 'special-functions',
    sections: [
      {
        id: 16,
        title: 'Compound Interest and Growth',
        slug: 'compound-interest',
        description: 'On true compound interest and the law of organic growth.',
      },
      {
        id: 17,
        title: 'Sines and Cosines',
        slug: 'sines-cosines',
        description: 'How to deal with sines and cosines.',
      },
      {
        id: 18,
        title: 'Partial Differentiation',
        slug: 'partial-differentiation',
        description: 'Differentiating functions of multiple variables.',
      },
    ],
  },
  // ==========================================================================
  // PART V: INTEGRATION (Thompson Chapters XVII-XXI)
  // ==========================================================================
  {
    id: 6,
    title: 'Integration',
    slug: 'integration',
    sections: [
      {
        id: 19,
        title: 'Integration',
        slug: 'integration-intro',
        description: 'Introduction to integration.',
      },
      {
        id: 20,
        title: 'Integrating as Reverse',
        slug: 'integrating-reverse',
        description: 'Integrating as the reverse of differentiating.',
      },
      {
        id: 21,
        title: 'Finding Areas',
        slug: 'finding-areas',
        description: 'On finding areas by integrating.',
      },
      {
        id: 22,
        title: 'Dodges and Triumphs',
        slug: 'dodges-triumphs',
        description: 'Dodges, pitfalls, and triumphs in integration.',
      },
      {
        id: 23,
        title: 'Finding Solutions',
        slug: 'finding-solutions',
        description: 'Finding solutions to differential equations.',
      },
    ],
  },
  // ==========================================================================
  // PART VI: ADVANCED TOPICS (Thompson Chapters XXII-XXIII)
  // ==========================================================================
  {
    id: 7,
    title: 'Advanced Topics',
    slug: 'advanced',
    sections: [
      {
        id: 24,
        title: 'More about Curvature',
        slug: 'more-curvature',
        description: 'A little more about curvature of curves.',
      },
      {
        id: 25,
        title: 'Arc Length',
        slug: 'arc-length',
        description: 'How to find the length of an arc on a curve.',
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
