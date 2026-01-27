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
 * Based on "Dynamic Hedging: Managing Vanilla and Exotic Options" by Nassim Taleb (1997)
 */
export const curriculum: Part[] = [
  // ==========================================================================
  // PART 1: FOUNDATIONS
  // ==========================================================================
  {
    id: 1,
    title: 'Foundations',
    slug: 'foundations',
    sections: [
      {
        id: 0,
        title: 'Introduction to Dynamic Hedging',
        slug: 'introduction',
        description: 'Overview of dynamic hedging principles and the philosophy behind active risk management.',
      },
      {
        id: 1,
        title: 'Derivatives and Synthetic Securities',
        slug: 'derivatives-synthetics',
        description: 'Understanding derivatives as building blocks and creating synthetic positions.',
      },
      {
        id: 2,
        title: 'Options and Contingent Claims',
        slug: 'options-contingent-claims',
        description: 'The mechanics of options, payoffs, and contingent claim valuation.',
      },
      {
        id: 3,
        title: 'The Generalized Option',
        slug: 'generalized-option',
        description: 'A unified framework for understanding all types of options.',
      },
      {
        id: 4,
        title: 'Market Making and Market Using',
        slug: 'market-making',
        description: 'The economics and mechanics of market making versus market using.',
      },
      {
        id: 5,
        title: 'Liquidity and Liquidity Holes',
        slug: 'liquidity',
        description: 'Understanding market liquidity, its fragility, and the dangers of liquidity holes.',
      },
    ],
  },
  // ==========================================================================
  // PART 2: MARKET MICROSTRUCTURE
  // ==========================================================================
  {
    id: 2,
    title: 'Market Microstructure',
    slug: 'market-microstructure',
    sections: [
      {
        id: 6,
        title: 'Arbitrage and the Arbitrageurs',
        slug: 'arbitrage',
        description: 'The role of arbitrage in maintaining market efficiency and its limits.',
      },
      {
        id: 7,
        title: 'Volatility Fundamentals',
        slug: 'volatility-fundamentals',
        description: 'Measuring and understanding volatility: historical, implied, and realized.',
      },
      {
        id: 8,
        title: 'Correlation and the Parkinson Number',
        slug: 'correlation-parkinson',
        description: 'Correlation risk and the Parkinson volatility estimator.',
      },
      {
        id: 9,
        title: 'The Black-Scholes-Merton Framework',
        slug: 'bsm-framework',
        description: 'The foundation of option pricing and its practical limitations.',
      },
    ],
  },
  // ==========================================================================
  // PART 3: THE GREEKS - FIRST ORDER
  // ==========================================================================
  {
    id: 3,
    title: 'The Greeks: First Order',
    slug: 'greeks-first-order',
    sections: [
      {
        id: 10,
        title: 'Delta: Characteristics and Applications',
        slug: 'delta-basics',
        description: 'Understanding delta as the primary hedging ratio and its behavior.',
      },
      {
        id: 11,
        title: 'Delta Bucketing and Value at Risk',
        slug: 'delta-bucketing',
        description: 'Aggregating delta exposures and managing portfolio-level risk.',
      },
      {
        id: 12,
        title: 'Gamma and Shadow Gamma',
        slug: 'gamma',
        description: 'The convexity of options and the hidden gamma in structured positions.',
      },
      {
        id: 13,
        title: 'Vega and the Volatility Surface',
        slug: 'vega',
        description: 'Sensitivity to volatility changes and the structure of volatility surfaces.',
      },
      {
        id: 14,
        title: 'Theta and Minor Greeks',
        slug: 'theta-minor-greeks',
        description: 'Time decay and the lesser-known sensitivities: rho, charm, vanna, volga.',
      },
    ],
  },
  // ==========================================================================
  // PART 4: THE GREEKS - ADVANCED BEHAVIOR
  // ==========================================================================
  {
    id: 4,
    title: 'The Greeks: Advanced Behavior',
    slug: 'greeks-advanced',
    sections: [
      {
        id: 15,
        title: 'The Bleed: Gamma and Delta Bleed',
        slug: 'bleed',
        description: 'How Greeks evolve over time and the mechanics of position decay.',
      },
      {
        id: 16,
        title: 'Fungibility, Convergence, and Stacking',
        slug: 'fungibility-convergence',
        description: 'Option substitution, expiration dynamics, and position stacking.',
      },
      {
        id: 17,
        title: 'Wrinkles of Option Markets',
        slug: 'market-wrinkles',
        description: 'Real-world complications: early exercise, dividends, and discrete hedging.',
      },
      {
        id: 18,
        title: 'Bucketing and Topography',
        slug: 'bucketing-topography',
        description: 'Organizing risk by strike and maturity: the topology of options books.',
      },
      {
        id: 19,
        title: 'Distribution Risks and Skew',
        slug: 'distribution-skew',
        description: 'Non-normal distributions, volatility skew, and tail risk.',
      },
    ],
  },
  // ==========================================================================
  // PART 5: VANILLA OPTION TRADING
  // ==========================================================================
  {
    id: 5,
    title: 'Vanilla Option Trading',
    slug: 'vanilla-trading',
    sections: [
      {
        id: 20,
        title: 'Volatility Trading Concepts',
        slug: 'volatility-trading',
        description: 'Trading volatility as an asset: straddles, strangles, and variance swaps.',
      },
      {
        id: 21,
        title: 'Path Dependence Case Studies',
        slug: 'path-dependence',
        description: 'How the path of the underlying affects hedging P&L.',
      },
    ],
  },
  // ==========================================================================
  // PART 6: BINARY OPTIONS
  // ==========================================================================
  {
    id: 6,
    title: 'Binary Options',
    slug: 'binary-options',
    sections: [
      {
        id: 22,
        title: 'European Binary Options',
        slug: 'european-binaries',
        description: 'Digital options: cash-or-nothing and asset-or-nothing payoffs.',
      },
      {
        id: 23,
        title: 'American Binary Options',
        slug: 'american-binaries',
        description: 'Touch and no-touch options with American-style exercise.',
      },
      {
        id: 24,
        title: 'Binary Options Case Studies',
        slug: 'binary-case-studies',
        description: 'Real trading scenarios and hedging challenges with binaries.',
      },
    ],
  },
  // ==========================================================================
  // PART 7: BARRIER OPTIONS
  // ==========================================================================
  {
    id: 7,
    title: 'Barrier Options',
    slug: 'barrier-options',
    sections: [
      {
        id: 25,
        title: 'Barrier Options: Knock-Out and Knock-In',
        slug: 'barriers-basic',
        description: 'Options that activate or deactivate at specified barrier levels.',
      },
      {
        id: 26,
        title: 'Reverse and Double Barrier Options',
        slug: 'barriers-advanced',
        description: 'Complex barriers: reverse knockouts and double-barrier structures.',
      },
      {
        id: 27,
        title: 'The Reflection Principle and Girsanov',
        slug: 'reflection-girsanov',
        description: 'Mathematical tools for pricing barrier options.',
      },
      {
        id: 28,
        title: 'Barrier Options Risk Management',
        slug: 'barrier-risk',
        description: 'Managing the unique risks of barrier option portfolios.',
      },
    ],
  },
  // ==========================================================================
  // PART 8: COMPLEX EXOTICS
  // ==========================================================================
  {
    id: 8,
    title: 'Complex Exotics',
    slug: 'complex-exotics',
    sections: [
      {
        id: 29,
        title: 'Compound and Chooser Options',
        slug: 'compound-chooser',
        description: 'Options on options and options that let you choose the payoff type.',
      },
      {
        id: 30,
        title: 'Multiasset and Rainbow Options',
        slug: 'multiasset-rainbow',
        description: 'Options on multiple underlyings: best-of, worst-of, and spread options.',
      },
      {
        id: 31,
        title: 'Lookback and Asian Options',
        slug: 'lookback-asian',
        description: 'Path-dependent exotics: averaging and extreme value options.',
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
