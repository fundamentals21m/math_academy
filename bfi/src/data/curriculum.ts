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
  // BITCOIN FOR INSTITUTIONS - Volume 2
  // ==========================================================================
  {
    id: 1,
    title: 'Bitcoin is for Individuals',
    slug: 'bitcoin-for-individuals',
    sections: [
      {
        id: 0,
        title: 'Introduction',
        slug: 'introduction',
        description: 'What is Bitcoin for Institutions and why write a book about it?',
      },
      {
        id: 1,
        title: "HODL'ing Bitcoin is Irrational",
        slug: 'hodling-irrational',
        description: 'Why the rational approach to Bitcoin may not be what you think.',
      },
      {
        id: 2,
        title: 'Bitcoin Requires a Deflationary Mindset',
        slug: 'deflationary-mindset',
        description: 'Understanding the paradigm shift required for Bitcoin adoption.',
      },
      {
        id: 3,
        title: 'Bitcoin Custody Requires a Higher Understanding of Tradeoffs',
        slug: 'custody-tradeoffs',
        description: 'The complex decisions around securing Bitcoin.',
      },
      {
        id: 4,
        title: 'Bitcoin Requires More Patience and Time than Institutions Have',
        slug: 'patience-and-time',
        description: 'The mismatch between institutional timelines and Bitcoin.',
      },
      {
        id: 5,
        title: 'Bitcoin is a Bearer Asset',
        slug: 'bearer-asset',
        description: 'The unique properties of Bitcoin as a bearer instrument.',
      },
      {
        id: 6,
        title: 'Bitcoin Users Value Privacy',
        slug: 'privacy',
        description: 'Why privacy matters in the Bitcoin ecosystem.',
      },
    ],
  },
  {
    id: 2,
    title: 'Individuals Run Institutions',
    slug: 'individuals-run-institutions',
    sections: [
      {
        id: 7,
        title: 'Strategy (Balance Sheet Strength)',
        slug: 'strategy',
        description: 'How Strategy (formerly MicroStrategy) approaches Bitcoin.',
      },
      {
        id: 8,
        title: 'BlackRock (Redefining Portfolio Construction)',
        slug: 'blackrock',
        description: 'BlackRock\'s role in institutional Bitcoin adoption.',
      },
    ],
  },
  {
    id: 3,
    title: 'Institutional Bitcoin',
    slug: 'institutional-bitcoin',
    sections: [
      {
        id: 9,
        title: 'Deferred Compensation – Riding the Wave',
        slug: 'deferred-compensation',
        description: 'Bitcoin in non-qualified deferred compensation plans.',
      },
      {
        id: 10,
        title: 'Mutual Funds / ETFs – Wielding the Blade',
        slug: 'mutual-funds-etfs',
        description: 'Bitcoin exposure through traditional investment vehicles.',
      },
      {
        id: 11,
        title: 'Treasury / Balance Sheet – Having Optionality',
        slug: 'treasury-balance-sheet',
        description: 'Bitcoin as a corporate treasury asset.',
      },
      {
        id: 12,
        title: 'Structured Credit',
        slug: 'structured-credit',
        description: 'Bitcoin as collateral in lending and structured finance.',
      },
      {
        id: 13,
        title: 'Pensions',
        slug: 'pensions',
        description: 'Bitcoin in pension fund portfolios.',
      },
      {
        id: 14,
        title: 'Epilogue',
        slug: 'epilogue',
        description: 'Final thoughts on Bitcoin for institutions.',
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
