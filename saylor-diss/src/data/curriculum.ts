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
 * Based on Michael Saylor's 1987 MIT Thesis:
 * "A Machiavellian Interpretation of Political Dynamics"
 */
export const curriculum: Part[] = [
  {
    id: 1,
    title: 'Political Theory and System Theory',
    slug: 'political-system-theory',
    sections: [
      {
        id: 0,
        title: 'Introduction',
        slug: 'introduction',
        description: 'Overview of the thesis: applying system dynamics to model Machiavelli\'s political philosophy.',
      },
      {
        id: 1,
        title: 'Early Political Philosophers',
        slug: 'early-philosophers',
        description: 'From Plato to Aristotle: the evolution of political thought before Machiavelli.',
      },
      {
        id: 2,
        title: 'The First System Theorists',
        slug: 'first-system-theorists',
        description: 'Machiavelli as a proto-systems thinker and his systematic approach to politics.',
      },
      {
        id: 3,
        title: 'System Dynamics',
        slug: 'system-dynamics',
        description: 'Introduction to system dynamics methodology and its application to social systems.',
      },
      {
        id: 4,
        title: 'System Dynamics and Machiavelli',
        slug: 'sd-machiavelli',
        description: 'How Machiavelli\'s insights align with modern system dynamics concepts.',
      },
    ],
  },
  {
    id: 2,
    title: 'Machiavelli\'s Conception of the State',
    slug: 'conception-of-state',
    sections: [
      {
        id: 5,
        title: 'Machiavelli\'s Assumptions',
        slug: 'assumptions',
        description: 'The philosophical foundations: no absolutes, bounded rationality, and satisficing.',
      },
      {
        id: 6,
        title: 'Overview of the Model',
        slug: 'model-overview',
        description: 'The three political factions and their interactions in the political system.',
      },
      {
        id: 7,
        title: 'Modes of Behavior',
        slug: 'modes-of-behavior',
        description: 'From stable accommodation to catastrophic failure: the system\'s behavioral modes.',
      },
    ],
  },
  {
    id: 3,
    title: 'Model Description',
    slug: 'model-description',
    sections: [
      {
        id: 8,
        title: 'Model Scope',
        slug: 'model-scope',
        description: 'Endogenous, exogenous, and excluded variables in the political system model.',
      },
      {
        id: 9,
        title: 'Class Conflict and Social Norms',
        slug: 'class-conflict',
        description: 'The populace, aristocracy, and their competing desires for freedom and welfare.',
      },
      {
        id: 10,
        title: 'The Legislative Sector',
        slug: 'legislative-sector',
        description: 'How rationally established norms are determined through factional influence.',
      },
      {
        id: 11,
        title: 'The Role of the Executive',
        slug: 'role-of-executive',
        description: 'Executive power, policy implementation, and the gap between law and action.',
      },
      {
        id: 12,
        title: 'Economic Considerations',
        slug: 'economic-considerations',
        description: 'Production, distribution, welfare, and the feedback loops affecting the economy.',
      },
      {
        id: 13,
        title: 'Resistance and Rebellion',
        slug: 'resistance-rebellion',
        description: 'From protest to revolution: the dynamics of opposition to government.',
      },
    ],
  },
  {
    id: 4,
    title: 'Findings',
    slug: 'findings',
    sections: [
      {
        id: 14,
        title: 'The Equilibrium Case',
        slug: 'equilibrium-case',
        description: 'Baseline calibration and the conditions for political stability.',
      },
      {
        id: 15,
        title: 'Executive Action Effects',
        slug: 'executive-action',
        description: 'How executive attempts to change economic distribution lead to rebellion.',
      },
      {
        id: 16,
        title: 'Production Shocks',
        slug: 'production-shocks',
        description: 'System response to external disturbances like famine, war, and pestilence.',
      },
      {
        id: 17,
        title: 'The Competent Executive',
        slug: 'competent-executive',
        description: 'Policy effects when executive competence exceeds normal constraints.',
      },
      {
        id: 18,
        title: 'Corruption and Reform',
        slug: 'corruption-reform',
        description: 'The J-curve of revolution and why reform can trigger instability.',
      },
    ],
  },
  {
    id: 5,
    title: 'Conclusion',
    slug: 'conclusion',
    sections: [
      {
        id: 19,
        title: 'General System Tendencies',
        slug: 'system-tendencies',
        description: 'Key insights: social inertia, pluralism, and the difficulty of change.',
      },
      {
        id: 20,
        title: 'Areas for Further Study',
        slug: 'further-study',
        description: 'Limitations of the model and directions for future research.',
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
