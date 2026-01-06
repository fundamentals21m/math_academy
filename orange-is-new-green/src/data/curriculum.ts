// =============================================================================
// CURRICULUM STRUCTURE
// =============================================================================
// Orange is the New Green: The Emergence of Bitcoin Money Market Funds
// By Theo Mogenet
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
  {
    id: 1,
    title: 'Introduction',
    slug: 'introduction',
    sections: [
      {
        id: 0,
        title: 'Bitcoin as a Savings Technology',
        slug: 'bitcoin-savings',
        description: 'The transformative power of Bitcoin for long-term savings and the HODL mentality.',
      },
      {
        id: 1,
        title: 'The Short-Term Cash Problem',
        slug: 'short-term-cash',
        description: 'Why Bitcoin\'s volatility makes it inadequate for short-term cash balances.',
      },
    ],
  },
  {
    id: 2,
    title: 'Finding Stability Amidst Uncertainty',
    slug: 'stability-uncertainty',
    sections: [
      {
        id: 2,
        title: 'The Challenge of Holding Cash',
        slug: 'holding-cash',
        description: 'Economic rationale for holding cash and the erosion of fiat currency value.',
      },
      {
        id: 3,
        title: 'Liquidity and Minsky Moments',
        slug: 'liquidity-minsky',
        description: 'The contextual nature of liquidity and how leverage leads to destabilizing downturns.',
      },
      {
        id: 4,
        title: 'The UK Gilt Crisis',
        slug: 'uk-gilt-crisis',
        description: 'A case study in liquidation cascades and central bank intervention.',
      },
      {
        id: 5,
        title: 'Implications for Money Managers',
        slug: 'implications-managers',
        description: 'Elusive yields, money market fund resurgence, and looming government intrusion.',
      },
    ],
  },
  {
    id: 3,
    title: 'Building a Bitcoin-Centric Money Market Fund',
    slug: 'bitcoin-mmf',
    sections: [
      {
        id: 6,
        title: 'Where Does the Yield Come From?',
        slug: 'yield-source',
        description: 'How Bitcoin\'s monetary policy creates opportunities for positive real yields.',
      },
      {
        id: 7,
        title: 'Perpetual Swaps and Funding Rates',
        slug: 'perpetual-swaps',
        description: 'Bitcoin\'s financial innovation for continuous hedging without contract rolling.',
      },
      {
        id: 8,
        title: 'Covered Shorts Performance Analysis',
        slug: 'covered-shorts',
        description: 'Historical data on Bitcoin covered short positions and return distributions.',
      },
      {
        id: 9,
        title: 'Advantages: 24/7 Trading & Seizure Resistance',
        slug: 'advantages',
        description: 'How Bitcoin-based MMFs outshine incumbents through continuous operation and censorship resistance.',
      },
    ],
  },
  {
    id: 4,
    title: 'Towards a Non-Custodial Future',
    slug: 'non-custodial',
    sections: [
      {
        id: 10,
        title: 'Introduction to Discreet Log Contracts',
        slug: 'dlc-intro',
        description: 'Off-chain agreements with on-chain enforcement using oracle attestations.',
      },
      {
        id: 11,
        title: 'DLC Mechanics for BTCUSD Futures',
        slug: 'dlc-mechanics',
        description: 'Handling non-binary outcome spaces and Contract Execution Transactions.',
      },
      {
        id: 12,
        title: 'Trade-offs: Privacy, Scalability, and Efficiency',
        slug: 'dlc-tradeoffs',
        description: 'Advantages and disadvantages of DLCs compared to centralized alternatives.',
      },
      {
        id: 13,
        title: 'Practical Implementations',
        slug: 'practical-implementations',
        description: 'BlinkBTC, LN Markets, and the future of Bitcoin-based deposit facilities.',
      },
    ],
  },
  {
    id: 5,
    title: 'Conclusion',
    slug: 'conclusion',
    sections: [
      {
        id: 14,
        title: 'A Sly Roundabout Towards Hyperbitcoinization',
        slug: 'hyperbitcoinization',
        description: 'How Bitcoin money market funds could transform detractors into pawns of monetary revolution.',
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
