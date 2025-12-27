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
  // EXAMPLE CURRICULUM - Replace with your course content
  // ==========================================================================
  {
    id: 1,
    title: 'Introduction',
    slug: 'introduction',
    sections: [
      {
        id: 0,
        title: 'Welcome',
        slug: 'welcome',
        description: 'Introduction to the course and learning objectives.',
      },
      {
        id: 1,
        title: 'Prerequisites',
        slug: 'prerequisites',
        description: 'What you need to know before starting this course.',
      },
    ],
  },
  {
    id: 2,
    title: 'Core Concepts',
    slug: 'core-concepts',
    sections: [
      {
        id: 2,
        title: 'Fundamentals',
        slug: 'fundamentals',
        description: 'The building blocks of the subject.',
      },
      {
        id: 3,
        title: 'Key Definitions',
        slug: 'key-definitions',
        description: 'Important terms and their meanings.',
      },
      {
        id: 4,
        title: 'Basic Theorems',
        slug: 'basic-theorems',
        description: 'Foundational theorems and proofs.',
      },
    ],
  },
  {
    id: 3,
    title: 'Advanced Topics',
    slug: 'advanced-topics',
    sections: [
      {
        id: 5,
        title: 'Applications',
        slug: 'applications',
        description: 'Real-world applications of the concepts.',
      },
      {
        id: 6,
        title: 'Problem Solving',
        slug: 'problem-solving',
        description: 'Techniques for solving complex problems.',
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
