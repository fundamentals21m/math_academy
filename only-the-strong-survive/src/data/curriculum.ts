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
 * "Only The Strong Survive" by Allen Farrington & Anders Larson
 * A Philosophical, Technical, and Economic Critique of Prospects in "Crypto" Beyond Bitcoin
 */
export const curriculum: Part[] = [
  // ==========================================================================
  // INTRODUCTION
  // ==========================================================================
  {
    id: 1,
    title: 'Introduction',
    slug: 'introduction',
    sections: [
      {
        id: 0,
        title: 'Abstract',
        slug: 'abstract',
        description: 'Overview of the philosophical, technical, and economic arguments against crypto beyond Bitcoin.',
      },
      {
        id: 1,
        title: 'Overview and Section Summaries',
        slug: 'overview',
        description: 'A roadmap of the paper\'s structure and key arguments.',
      },
    ],
  },
  // ==========================================================================
  // SECTION 1: THE INNOVATION FROM FIRST PRINCIPLES
  // ==========================================================================
  {
    id: 2,
    title: 'The Innovation From First Principles',
    slug: 'innovation',
    sections: [
      {
        id: 2,
        title: 'Technical Innovation',
        slug: 'technical-innovation',
        description: 'Proof-of-work, difficulty adjustment, and the native monetary unit.',
      },
      {
        id: 3,
        title: 'Social Innovation',
        slug: 'social-innovation',
        description: 'Bitcoin as an immutable and uncheatable distributed ledger.',
      },
    ],
  },
  // ==========================================================================
  // SECTION 2: CRYPTO IS NOT DECENTRALIZED
  // ==========================================================================
  {
    id: 3,
    title: 'Crypto Is Not Decentralized',
    slug: 'not-decentralized',
    sections: [
      {
        id: 4,
        title: 'The Steelman Case',
        slug: 'steelman',
        description: 'What crypto proponents claim to have achieved with decentralized finance.',
      },
      {
        id: 5,
        title: 'Design Flaws',
        slug: 'design-flaws',
        description: 'How crypto projects sacrifice Bitcoin\'s core properties for added functionality.',
      },
      {
        id: 6,
        title: 'Centralization Pressures',
        slug: 'centralization-pressures',
        description: 'Why crypto will inevitably centralize and the social attack vectors this creates.',
      },
    ],
  },
  // ==========================================================================
  // SECTION 3: CRYPTO IS NOT FINANCE
  // ==========================================================================
  {
    id: 4,
    title: 'Crypto Is Not Finance',
    slug: 'not-finance',
    sections: [
      {
        id: 7,
        title: 'The Yield Farming Illusion',
        slug: 'yield-farming',
        description: 'Why "yields" in crypto are not real yields from economically productive assets.',
      },
      {
        id: 8,
        title: 'Rehypothecation and Leverage',
        slug: 'rehypothecation',
        description: 'How assets are recycled through multiple protocols, creating hidden systemic risk.',
      },
      {
        id: 9,
        title: 'Systemic Fragility',
        slug: 'systemic-fragility',
        description: 'Why capital must keep flowing in to keep the system seeming healthy.',
      },
      {
        id: 10,
        title: 'Misleading Metrics',
        slug: 'misleading-metrics',
        description: 'How TVL and other popular metrics conceal fragility and encourage capital inflows.',
      },
    ],
  },
  // ==========================================================================
  // SECTION 4: THE INVESTMENT RATIONALE
  // ==========================================================================
  {
    id: 5,
    title: 'The Investment Rationale',
    slug: 'investment-rationale',
    sections: [
      {
        id: 11,
        title: 'The Category Error',
        slug: 'category-error',
        description: 'Misapplying software venture capital principles to crypto assets.',
      },
      {
        id: 12,
        title: 'The Jenga Tower',
        slug: 'jenga-tower',
        description: 'How crypto funding resembles a game of Jenga built on fresh capital inflows.',
      },
    ],
  },
  // ==========================================================================
  // SECTION 5: LAYERED ARCHITECTURE AND GALL'S LAW
  // ==========================================================================
  {
    id: 6,
    title: 'Layered Architecture and Gall\'s Law',
    slug: 'layered-architecture',
    sections: [
      {
        id: 13,
        title: 'Bitcoin\'s Higher Layers',
        slug: 'higher-layers',
        description: 'Lightning, Liquid, DLCs, RGB, and Stacks - building on Bitcoin\'s foundation.',
      },
      {
        id: 14,
        title: 'Gall\'s Law and Sound Engineering',
        slug: 'galls-law',
        description: 'Why complex systems must evolve from simple working systems.',
      },
      {
        id: 15,
        title: 'The Florentine Lesson',
        slug: 'florentine-lesson',
        description: 'Historical parallels between Renaissance hard money and Bitcoin.',
      },
    ],
  },
  // ==========================================================================
  // SECTION 6: CONCLUSION
  // ==========================================================================
  {
    id: 7,
    title: 'Conclusion',
    slug: 'conclusion',
    sections: [
      {
        id: 16,
        title: 'Why We Might Be Wrong',
        slug: 'why-wrong',
        description: 'Acknowledging the ways the analysis might turn out to be mistaken.',
      },
      {
        id: 17,
        title: 'Where We Go From Here',
        slug: 'where-we-go',
        description: 'Final thoughts: excited by Bitcoin, not so much by crypto.',
      },
    ],
  },
  // ==========================================================================
  // APPENDICES
  // ==========================================================================
  {
    id: 8,
    title: 'Appendices',
    slug: 'appendices',
    sections: [
      {
        id: 18,
        title: 'Appendix A: Common Pool Resources',
        slug: 'common-pool-resources',
        description: 'Analyzing Bitcoin and crypto through Elinor Ostrom\'s governance framework.',
      },
      {
        id: 19,
        title: 'Appendix B: Rehypothecation Algebra',
        slug: 'rehypothecation-algebra',
        description: 'The mathematics of calculating systemic exposure from collateralization ratios.',
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
