// =============================================================================
// CURRICULUM STRUCTURE - The Road to Serfdom by F.A. Hayek
// =============================================================================
// A classic work on freedom, central planning, and the dangers of collectivism
// 5 Parts, 17 Sections (Introduction + 15 Chapters + Conclusion)
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
  // PART ONE: FOUNDATIONS
  // Setting the stage, defining key terms and the historical context
  // ==========================================================================
  {
    id: 1,
    title: 'Part One: Foundations',
    slug: 'foundations',
    sections: [
      {
        id: 1,
        title: 'Introduction',
        slug: 'introduction',
        description: 'Why understanding the forces that created totalitarianism matters, and how Germany serves as a warning for other nations.',
      },
      {
        id: 2,
        title: 'Chapter 1: The Abandoned Road',
        slug: 'abandoned-road',
        description: 'How Western civilization abandoned its path toward freedom, and the intellectual roots of our current crisis.',
      },
      {
        id: 3,
        title: 'Chapter 2: The Great Utopia',
        slug: 'great-utopia',
        description: 'The promise of socialism as freedom\'s fulfillment, and why this promise leads to its opposite.',
      },
      {
        id: 4,
        title: 'Chapter 3: Individualism and Collectivism',
        slug: 'individualism-collectivism',
        description: 'The fundamental distinction between liberal individualism and socialist collectivism, and what "planning" really means.',
      },
    ],
  },

  // ==========================================================================
  // PART TWO: THE PLANNING PROBLEM
  // Why central planning fails and undermines democracy
  // ==========================================================================
  {
    id: 2,
    title: 'Part Two: The Planning Problem',
    slug: 'planning-problem',
    sections: [
      {
        id: 5,
        title: 'Chapter 4: The "Inevitability" of Planning',
        slug: 'inevitability-planning',
        description: 'Examining the claim that technological progress makes central planning inevitable, and why this is false.',
      },
      {
        id: 6,
        title: 'Chapter 5: Planning and Democracy',
        slug: 'planning-democracy',
        description: 'Why democratic institutions cannot direct economic activity, and why planning requires dictatorship.',
      },
      {
        id: 7,
        title: 'Chapter 6: Planning and the Rule of Law',
        slug: 'planning-rule-of-law',
        description: 'The conflict between economic planning and the rule of law, and why planning leads to arbitrary government.',
      },
    ],
  },

  // ==========================================================================
  // PART THREE: FREEDOM UNDER THREAT
  // How economic control leads to the loss of personal freedom
  // ==========================================================================
  {
    id: 3,
    title: 'Part Three: Freedom Under Threat',
    slug: 'freedom-under-threat',
    sections: [
      {
        id: 8,
        title: 'Chapter 7: Economic Control and Totalitarianism',
        slug: 'economic-control-totalitarianism',
        description: 'Why control of economic life means control of all life, and how economic planning leads to totalitarianism.',
      },
      {
        id: 9,
        title: 'Chapter 8: Who, Whom?',
        slug: 'who-whom',
        description: 'How planning forces decisions about who gets what, leading to discrimination and the destruction of equality before the law.',
      },
      {
        id: 10,
        title: 'Chapter 9: Security and Freedom',
        slug: 'security-freedom',
        description: 'The trade-off between security and freedom, and why the pursuit of absolute security destroys both.',
      },
    ],
  },

  // ==========================================================================
  // PART FOUR: THE DARK SIDE
  // How totalitarianism emerges and why the worst rise to power
  // ==========================================================================
  {
    id: 4,
    title: 'Part Four: The Dark Side',
    slug: 'dark-side',
    sections: [
      {
        id: 11,
        title: 'Chapter 10: Why the Worst Get on Top',
        slug: 'worst-get-on-top',
        description: 'Why totalitarian systems select for and promote the most ruthless and unscrupulous individuals.',
      },
      {
        id: 12,
        title: 'Chapter 11: The End of Truth',
        slug: 'end-of-truth',
        description: 'How totalitarian regimes must control thought and destroy truth to maintain power.',
      },
      {
        id: 13,
        title: 'Chapter 12: The Socialist Roots of Nazism',
        slug: 'socialist-roots-nazism',
        description: 'Tracing the intellectual development from socialism to National Socialism in Germany.',
      },
    ],
  },

  // ==========================================================================
  // PART FIVE: LOOKING FORWARD
  // Contemporary dangers and the prospects for freedom
  // ==========================================================================
  {
    id: 5,
    title: 'Part Five: Looking Forward',
    slug: 'looking-forward',
    sections: [
      {
        id: 14,
        title: 'Chapter 13: The Totalitarians in Our Midst',
        slug: 'totalitarians-in-our-midst',
        description: 'Identifying totalitarian tendencies in democratic societies and the danger of "limited" planning.',
      },
      {
        id: 15,
        title: 'Chapter 14: Material Conditions and Ideal Ends',
        slug: 'material-conditions-ideal-ends',
        description: 'The relationship between material progress and moral values, and why freedom is essential to both.',
      },
      {
        id: 16,
        title: 'Chapter 15: The Prospects of International Order',
        slug: 'international-order',
        description: 'The dangers of international planning and the conditions for a peaceful international order.',
      },
      {
        id: 17,
        title: 'Conclusion',
        slug: 'conclusion',
        description: 'Final reflections on the choice between freedom and serfdom, and the path forward.',
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
