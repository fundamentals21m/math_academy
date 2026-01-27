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
  // PART ONE: Winston's World
  // ==========================================================================
  {
    id: 1,
    title: 'Part One',
    slug: 'part-one',
    sections: [
      {
        id: 0,
        title: 'Chapter 1: The World of Big Brother',
        slug: 'chapter-1',
        description: 'Winston Smith, Victory Mansions, the telescreen, and the Two Minutes Hate.',
      },
      {
        id: 1,
        title: 'Chapter 2: The Parsons Family',
        slug: 'chapter-2',
        description: 'Mrs. Parsons, the children as spies, and the fear of the Thought Police.',
      },
      {
        id: 2,
        title: 'Chapter 3: Dreams and Memory',
        slug: 'chapter-3',
        description: 'Winston\'s dreams of the Golden Country and memories of his mother.',
      },
      {
        id: 3,
        title: 'Chapter 4: The Ministry of Truth',
        slug: 'chapter-4',
        description: 'Winston\'s work altering historical records at the Ministry of Truth.',
      },
      {
        id: 4,
        title: 'Chapter 5: Newspeak',
        slug: 'chapter-5',
        description: 'Syme and the principles of Newspeak, language as control.',
      },
      {
        id: 5,
        title: 'Chapter 6: Marriage and the Party',
        slug: 'chapter-6',
        description: 'Winston\'s marriage to Katharine and the Party\'s control of intimacy.',
      },
      {
        id: 6,
        title: 'Chapter 7: The Proles',
        slug: 'chapter-7',
        description: '"If there is hope, it lies in the proles." Winston\'s reflections on the masses.',
      },
      {
        id: 7,
        title: 'Chapter 8: The Antique Shop',
        slug: 'chapter-8',
        description: 'Winston meets Mr. Charrington, buys the paperweight, and sees the dark-haired girl.',
      },
    ],
  },
  // ==========================================================================
  // PART TWO: The Rebellion
  // ==========================================================================
  {
    id: 2,
    title: 'Part Two',
    slug: 'part-two',
    sections: [
      {
        id: 8,
        title: 'Chapter 1: "I Love You"',
        slug: 'chapter-2-1',
        description: 'Julia\'s secret note and the beginning of their forbidden connection.',
      },
      {
        id: 9,
        title: 'Chapter 2: The Golden Country',
        slug: 'chapter-2-2',
        description: 'Winston and Julia\'s first meeting in the countryside.',
      },
      {
        id: 10,
        title: 'Chapter 3: The Affair Begins',
        slug: 'chapter-2-3',
        description: 'Julia\'s philosophy of survival through small acts of rebellion.',
      },
      {
        id: 11,
        title: 'Chapter 4: The Room Above the Shop',
        slug: 'chapter-2-4',
        description: 'Winston rents the room from Mr. Charrington, a sanctuary without telescreens.',
      },
      {
        id: 12,
        title: 'Chapter 5: Syme Vanishes',
        slug: 'chapter-2-5',
        description: 'Syme becomes an unperson. Preparations for Hate Week intensify.',
      },
      {
        id: 13,
        title: 'Chapter 6: O\'Brien\'s Invitation',
        slug: 'chapter-2-6',
        description: 'O\'Brien approaches Winston, hinting at the Brotherhood.',
      },
      {
        id: 14,
        title: 'Chapter 7: The Proles Will Rise',
        slug: 'chapter-2-7',
        description: 'Winston writes in his diary about the future and the proles.',
      },
      {
        id: 15,
        title: 'Chapter 8: The Brotherhood',
        slug: 'chapter-2-8',
        description: 'Winston and Julia visit O\'Brien and join the Brotherhood.',
      },
      {
        id: 16,
        title: 'Chapter 9: The Book',
        slug: 'chapter-2-9',
        description: 'Goldstein\'s "The Theory and Practice of Oligarchical Collectivism" - the mechanics of totalitarianism.',
      },
      {
        id: 17,
        title: 'Chapter 10: The Arrest',
        slug: 'chapter-2-10',
        description: '"You are the dead." The Thought Police capture Winston and Julia.',
      },
    ],
  },
  // ==========================================================================
  // PART THREE: The Ministry of Love
  // ==========================================================================
  {
    id: 3,
    title: 'Part Three',
    slug: 'part-three',
    sections: [
      {
        id: 18,
        title: 'Chapter 1: The Cells',
        slug: 'chapter-3-1',
        description: 'Winston\'s imprisonment in the Ministry of Love.',
      },
      {
        id: 19,
        title: 'Chapter 2: O\'Brien\'s Interrogation',
        slug: 'chapter-3-2',
        description: 'O\'Brien reveals himself as Winston\'s torturer and teacher.',
      },
      {
        id: 20,
        title: 'Chapter 3: The Nature of Power',
        slug: 'chapter-3-3',
        description: '"Power is not a means; it is an end." 2+2=5.',
      },
      {
        id: 21,
        title: 'Chapter 4: Rehabilitation',
        slug: 'chapter-3-4',
        description: 'Winston\'s physical and mental reconstruction.',
      },
      {
        id: 22,
        title: 'Chapter 5: Room 101',
        slug: 'chapter-3-5',
        description: 'The thing that is in Room 101 is the worst thing in the world.',
      },
      {
        id: 23,
        title: 'Chapter 6: The Chestnut Tree',
        slug: 'chapter-3-6',
        description: '"He loved Big Brother." Winston\'s final defeat.',
      },
    ],
  },
  // ==========================================================================
  // APPENDIX: The Principles of Newspeak
  // ==========================================================================
  {
    id: 4,
    title: 'Appendix',
    slug: 'appendix',
    sections: [
      {
        id: 24,
        title: 'The Principles of Newspeak',
        slug: 'newspeak-appendix',
        description: 'A detailed analysis of Newspeak: its vocabulary, grammar, and purpose.',
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
