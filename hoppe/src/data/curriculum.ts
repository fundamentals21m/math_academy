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
  // Part 1: Foundations
  // ==========================================================================
  {
    id: 1,
    title: 'Foundations',
    slug: 'foundations',
    sections: [
      {
        id: 0,
        title: 'Property, Contract, Aggression, Capitalism, Socialism',
        slug: 'property-contract-aggression',
        description: 'The fundamental concepts of property rights, voluntary exchange, and aggression as the basis for distinguishing capitalism from socialism.',
      },
    ],
  },
  // ==========================================================================
  // Part 2: Types of Socialism
  // ==========================================================================
  {
    id: 2,
    title: 'Types of Socialism',
    slug: 'types-of-socialism',
    sections: [
      {
        id: 1,
        title: 'Socialism Russian Style',
        slug: 'russian-socialism',
        description: 'Analysis of Soviet-style socialism with complete state ownership of the means of production.',
      },
      {
        id: 2,
        title: 'Socialism Social-Democratic Style',
        slug: 'social-democratic-socialism',
        description: 'The mixed economy approach of social democracy and its inherent contradictions.',
      },
      {
        id: 3,
        title: 'The Socialism of Conservatism',
        slug: 'conservative-socialism',
        description: 'How conservative policies often embody socialist principles through different means.',
      },
      {
        id: 4,
        title: 'The Socialism of Social Engineering',
        slug: 'social-engineering',
        description: 'Technocratic socialism and the pretense of scientific social planning.',
      },
    ],
  },
  // ==========================================================================
  // Part 3: Ethics and Psychology
  // ==========================================================================
  {
    id: 3,
    title: 'Ethics and Psychology',
    slug: 'ethics-psychology',
    sections: [
      {
        id: 5,
        title: 'The Ethical Justification of Capitalism',
        slug: 'ethical-justification',
        description: 'Why capitalism is the only morally defensible economic system based on self-ownership and homesteading.',
      },
      {
        id: 6,
        title: 'The Socio-Psychological Foundations of Socialism',
        slug: 'psychology-of-socialism',
        description: 'The theory of the state and why socialism persists despite its failures.',
      },
    ],
  },
  // ==========================================================================
  // Part 4: Capitalism and Markets
  // ==========================================================================
  {
    id: 4,
    title: 'Capitalism and Markets',
    slug: 'capitalism-markets',
    sections: [
      {
        id: 7,
        title: 'Capitalist Production and the Problem of Monopoly',
        slug: 'monopoly',
        description: 'Why free market monopolies are beneficial and government-granted monopolies are harmful.',
      },
      {
        id: 8,
        title: 'Capitalist Production and the Problem of Public Goods',
        slug: 'public-goods',
        description: 'A critique of public goods theory and the case for private provision of all goods.',
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
