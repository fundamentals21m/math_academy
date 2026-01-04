// =============================================================================
// CURRICULUM STRUCTURE - Atlas Shrugged by Ayn Rand
// =============================================================================
// The novel is organized into three parts, each containing ten chapters.
// Each chapter explores themes of individualism, reason, and productive achievement.
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
  // PART ONE: NON-CONTRADICTION
  // ==========================================================================
  {
    id: 1,
    title: 'Part One: Non-Contradiction',
    slug: 'non-contradiction',
    sections: [
      {
        id: 0,
        title: 'The Theme',
        slug: 'the-theme',
        description: 'Introduction to Dagny Taggart and the declining state of Taggart Transcontinental railroad.',
      },
      {
        id: 1,
        title: 'The Chain',
        slug: 'the-chain',
        description: 'The interconnected web of business relationships and the mysterious disappearance of capable men.',
      },
      {
        id: 2,
        title: 'The Top and the Bottom',
        slug: 'the-top-and-the-bottom',
        description: 'Contrasting the productive achievers with those who seek unearned rewards.',
      },
      {
        id: 3,
        title: 'The Immovable Movers',
        slug: 'the-immovable-movers',
        description: 'The prime movers of industry and their struggle against growing opposition.',
      },
      {
        id: 4,
        title: 'The Climax of the d\'Anconias',
        slug: 'the-climax-of-the-danconias',
        description: 'Francisco d\'Anconia\'s speech on the meaning of money and the nature of wealth.',
      },
      {
        id: 5,
        title: 'The Non-Commercial',
        slug: 'the-non-commercial',
        description: 'The conflict between productive enterprise and those who despise commerce.',
      },
      {
        id: 6,
        title: 'The Exploiters and the Exploited',
        slug: 'the-exploiters-and-the-exploited',
        description: 'Examining who truly exploits whom in the relationship between producers and looters.',
      },
      {
        id: 7,
        title: 'The John Galt Line',
        slug: 'the-john-galt-line',
        description: 'Dagny and Hank Rearden build their railroad line using Rearden Metal.',
      },
      {
        id: 8,
        title: 'The Sacred and the Profane',
        slug: 'the-sacred-and-the-profane',
        description: 'The relationship between Dagny and Hank deepens as they celebrate their achievement.',
      },
      {
        id: 9,
        title: 'Wyatt\'s Torch',
        slug: 'wyatts-torch',
        description: 'Ellis Wyatt destroys his oil fields rather than surrender them to looters.',
      },
    ],
  },
  // ==========================================================================
  // PART TWO: EITHER-OR
  // ==========================================================================
  {
    id: 2,
    title: 'Part Two: Either-Or',
    slug: 'either-or',
    sections: [
      {
        id: 10,
        title: 'The Man Who Belonged on Earth',
        slug: 'the-man-who-belonged-on-earth',
        description: 'Introduction to the scientist who creates revolutionary technology.',
      },
      {
        id: 11,
        title: 'The Aristocracy of Pull',
        slug: 'the-aristocracy-of-pull',
        description: 'Political connections replace merit as the path to success.',
      },
      {
        id: 12,
        title: 'White Blackmail',
        slug: 'white-blackmail',
        description: 'The use of guilt and moral manipulation as weapons against the productive.',
      },
      {
        id: 13,
        title: 'The Sanction of the Victim',
        slug: 'the-sanction-of-the-victim',
        description: 'How the productive enable their own destruction by accepting unearned guilt.',
      },
      {
        id: 14,
        title: 'Account Overdrawn',
        slug: 'account-overdrawn',
        description: 'The consequences of consuming more than is produced begin to manifest.',
      },
      {
        id: 15,
        title: 'Miracle Metal',
        slug: 'miracle-metal',
        description: 'Rearden Metal faces political persecution despite its revolutionary benefits.',
      },
      {
        id: 16,
        title: 'The Moratorium on Brains',
        slug: 'the-moratorium-on-brains',
        description: 'Government policies drive the remaining thinkers and producers away.',
      },
      {
        id: 17,
        title: 'By Our Love',
        slug: 'by-our-love',
        description: 'Personal relationships tested by conflicting values and loyalties.',
      },
      {
        id: 18,
        title: 'The Face Without Pain or Fear or Guilt',
        slug: 'the-face-without-pain-or-fear-or-guilt',
        description: 'Dagny glimpses the man who has found a way to live without contradiction.',
      },
      {
        id: 19,
        title: 'The Sign of the Dollar',
        slug: 'the-sign-of-the-dollar',
        description: 'The symbol of free trade and its deeper meaning is revealed.',
      },
    ],
  },
  // ==========================================================================
  // PART THREE: A IS A
  // ==========================================================================
  {
    id: 3,
    title: 'Part Three: A Is A',
    slug: 'a-is-a',
    sections: [
      {
        id: 20,
        title: 'Atlantis',
        slug: 'atlantis',
        description: 'Dagny discovers the hidden valley where the strikers have built their sanctuary.',
      },
      {
        id: 21,
        title: 'The Utopia of Greed',
        slug: 'the-utopia-of-greed',
        description: 'Life in the valley demonstrates the harmony of rational self-interest.',
      },
      {
        id: 22,
        title: 'Anti-Greed',
        slug: 'anti-greed',
        description: 'The outside world continues its descent as it rejects the profit motive.',
      },
      {
        id: 23,
        title: 'Anti-Life',
        slug: 'anti-life',
        description: 'The philosophy of self-sacrifice leads to destruction and death.',
      },
      {
        id: 24,
        title: 'Their Brothers\' Keepers',
        slug: 'their-brothers-keepers',
        description: 'The doctrine of collective obligation reaches its logical conclusion.',
      },
      {
        id: 25,
        title: 'The Concerto of Deliverance',
        slug: 'the-concerto-of-deliverance',
        description: 'Richard Halley\'s music represents the spirit of human achievement.',
      },
      {
        id: 26,
        title: '"This Is John Galt Speaking"',
        slug: 'this-is-john-galt-speaking',
        description: 'John Galt addresses the nation with his philosophy of rational self-interest.',
      },
      {
        id: 27,
        title: 'The Egoist',
        slug: 'the-egoist',
        description: 'The meaning and virtue of rational selfishness is explored.',
      },
      {
        id: 28,
        title: 'The Generator',
        slug: 'the-generator',
        description: 'The motor that could change the world and the mind that created it.',
      },
      {
        id: 29,
        title: 'In the Name of the Best Within Us',
        slug: 'in-the-name-of-the-best-within-us',
        description: 'The conclusion: the strikers prepare to rebuild the world on proper principles.',
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
