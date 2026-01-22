// =============================================================================
// CURRICULUM STRUCTURE
// =============================================================================
// Tontines: The Mathematics of Lifetime Income
// From 17th century finance to modern retirement security
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
  // PART 1: Origins and Fundamentals
  // Theme: From history to mathematical foundation
  // ==========================================================================
  {
    id: 1,
    title: 'Origins and Fundamentals',
    slug: 'origins-and-fundamentals',
    sections: [
      {
        id: 0,
        title: 'The Tontine Story',
        slug: 'tontine-story',
        description: "Lorenzo Tonti's 1653 innovation, the original structure, and the first tontines in Europe.",
      },
      {
        id: 1,
        title: 'The Golden Age',
        slug: 'golden-age',
        description: '18th-19th century tontines, the Freemasons\' Hall example, and American tontines.',
      },
      {
        id: 2,
        title: 'Scandal and Downfall',
        slug: 'scandal-and-downfall',
        description: 'Equitable Life corruption, perverse incentives, the Armstrong Investigation, and the 1905 ban.',
      },
      {
        id: 3,
        title: 'The Modern Revival',
        slug: 'modern-revival',
        description: 'The longevity crisis, annuity problem, academic research, and Milevsky & Salisbury 2015.',
      },
      {
        id: 4,
        title: 'Survival Probability Basics',
        slug: 'survival-probability-basics',
        description: 'Survival function S(t), death probability F(t), and the notation T and t.',
      },
      {
        id: 5,
        title: 'Conditional Survival',
        slug: 'conditional-survival',
        description: 'The notation tpx and calculating survival probability given current age.',
      },
      {
        id: 6,
        title: 'Life Tables',
        slug: 'life-tables',
        description: 'Structure of life tables: lx, dx, qx, ex. Reading and interpreting mortality data.',
      },
      {
        id: 7,
        title: 'Force of Mortality',
        slug: 'force-of-mortality',
        description: 'Instantaneous death rate mu(t), hazard rate, and the Gompertz-Makeham Law.',
      },
      {
        id: 8,
        title: 'The Basic Tontine Setup',
        slug: 'basic-tontine-setup',
        description: 'Pool parameters N, C, r and the lifetime income promise.',
      },
      {
        id: 9,
        title: 'Year-by-Year Calculation',
        slug: 'year-by-year-calculation',
        description: 'Investment returns, mortality events, payout calculation, and pool value tracking.',
      },
      {
        id: 10,
        title: 'The Mortality Credit',
        slug: 'mortality-credit',
        description: 'Decomposition of payout into investment income and mortality credit. The formula for survivor benefits.',
      },
      {
        id: 11,
        title: 'Last Survivor Problem',
        slug: 'last-survivor-problem',
        description: 'Explosive late-game payouts, the jackpot effect, and why the classic tontine is problematic.',
      },
    ],
  },
  // ==========================================================================
  // PART 2: Mathematical Construction
  // Theme: Building optimal tontine designs
  // ==========================================================================
  {
    id: 2,
    title: 'Mathematical Construction',
    slug: 'mathematical-construction',
    sections: [
      {
        id: 12,
        title: 'The Fairness Problem',
        slug: 'fairness-problem',
        description: 'Two perspectives on fairness and how to measure actuarial equity.',
      },
      {
        id: 13,
        title: 'Present Value with Interest',
        slug: 'present-value-interest',
        description: 'Discount factor v = 1/(1+i) and the time value of money.',
      },
      {
        id: 14,
        title: 'Expected Value with Mortality',
        slug: 'expected-value-mortality',
        description: 'Probability-weighted present value: tpx times v^t.',
      },
      {
        id: 15,
        title: 'Actuarially Fair Annuity',
        slug: 'actuarially-fair-annuity',
        description: 'EPV = Premium, life annuity pricing, and calculating a-double-dot-65.',
      },
      {
        id: 16,
        title: 'Is Classic Tontine Fair?',
        slug: 'classic-tontine-fair',
        description: 'EPV calculation for the tontine and the actuarial fairness result.',
      },
      {
        id: 17,
        title: 'The Heterogeneity Problem',
        slug: 'heterogeneity-problem',
        description: 'Age, sex, and health differences create unfairness in mixed groups.',
      },
      {
        id: 18,
        title: 'Utility Theory Primer',
        slug: 'utility-theory-primer',
        description: 'u(c) = happiness from consumption, diminishing marginal utility.',
      },
      {
        id: 19,
        title: 'Power Utility and Risk Aversion',
        slug: 'power-utility-risk-aversion',
        description: 'CRRA utility, the gamma parameter, and the lifetime utility formula.',
      },
      {
        id: 20,
        title: 'The Optimization Problem',
        slug: 'optimization-problem',
        description: 'Setup, budget constraint, and the calculus of variations.',
      },
      {
        id: 21,
        title: 'The Euler-Lagrange Equation',
        slug: 'euler-lagrange-equation',
        description: 'Deriving the optimal payout condition and marginal utility growth.',
      },
      {
        id: 22,
        title: 'Deriving Optimal Payouts',
        slug: 'deriving-optimal-payouts',
        description: 'Power utility case and the growth rate formula g = (beta/v)^(1/gamma).',
      },
      {
        id: 23,
        title: 'The Natural Tontine',
        slug: 'natural-tontine',
        description: 'D(t) = A/tpx: payout inversely proportional to survival probability.',
      },
      {
        id: 24,
        title: 'Why Natural is Near-Optimal',
        slug: 'natural-near-optimal',
        description: 'Milevsky & Salisbury result: less than 1% utility loss for all risk aversions.',
      },
      {
        id: 25,
        title: 'Risk Aversion Effects',
        slug: 'risk-aversion-effects',
        description: 'Low, moderate, and high gamma effects. Lorenzo Tonti\'s design for extreme risk aversion.',
      },
      {
        id: 26,
        title: 'Constructing a Natural Tontine',
        slug: 'constructing-natural-tontine',
        description: 'Step-by-step: capital collection, investment, share units, and distribution.',
      },
    ],
  },
  // ==========================================================================
  // PART 3: Comparison and Application
  // Theme: Tontines vs. alternatives and modern implementations
  // ==========================================================================
  {
    id: 3,
    title: 'Comparison and Application',
    slug: 'comparison-and-application',
    sections: [
      {
        id: 27,
        title: 'How Life Annuities Work',
        slug: 'how-annuities-work',
        description: 'Premium P, payment A, pricing formula, and loading factors.',
      },
      {
        id: 28,
        title: "The Insurance Company's Problem",
        slug: 'insurance-company-problem',
        description: 'Longevity risk, aggregate vs idiosyncratic risk, and capital requirements.',
      },
      {
        id: 29,
        title: 'Tontine Advantages',
        slug: 'tontine-advantages',
        description: 'No longevity risk to provider, transparency, efficiency, and investment choice.',
      },
      {
        id: 30,
        title: 'Annuity Advantages',
        slug: 'annuity-advantages',
        description: 'Guaranteed income, adverse selection management, and established markets.',
      },
      {
        id: 31,
        title: 'Mathematical Comparison',
        slug: 'mathematical-comparison',
        description: 'Utility comparison and breakeven loading analysis (~2-3%).',
      },
      {
        id: 32,
        title: 'Optimal Portfolio Mix',
        slug: 'optimal-portfolio-mix',
        description: 'Three-way allocation and diversification of longevity risk.',
      },
      {
        id: 33,
        title: 'Group Self-Annuitization (GSA)',
        slug: 'group-self-annuitization',
        description: 'Cohort-based design, explicit mortality credits, and the payout formula.',
      },
      {
        id: 34,
        title: 'Pooled Annuity Funds (PAFs)',
        slug: 'pooled-annuity-funds',
        description: 'Canadian VPLA, smoothing mechanism, and risk management.',
      },
      {
        id: 35,
        title: 'Modern Tontine Products',
        slug: 'modern-tontine-products',
        description: 'Tontine Trust UK, UCLA Longevity Fund, and Brookings proposal.',
      },
      {
        id: 36,
        title: 'Technology Enablers',
        slug: 'technology-enablers',
        description: 'Smart contracts, blockchain, and transparency infrastructure.',
      },
      {
        id: 37,
        title: 'Regulatory Landscape',
        slug: 'regulatory-landscape',
        description: 'US, UK, Canada, and EU frameworks and proposals.',
      },
      {
        id: 38,
        title: 'Adverse Selection Problem',
        slug: 'adverse-selection-problem',
        description: 'The adverse selection spiral, mathematical impact, and solutions.',
      },
      {
        id: 39,
        title: 'Minimum Pool Size',
        slug: 'minimum-pool-size',
        description: 'Volatility vs members, the sqrt(n*q) rule, and solutions for small pools.',
      },
    ],
  },
  // ==========================================================================
  // PART 4: Future and Integration
  // Theme: The role of tontines in retirement security
  // ==========================================================================
  {
    id: 4,
    title: 'Future and Integration',
    slug: 'future-and-integration',
    sections: [
      {
        id: 40,
        title: 'Regulatory Obstacles',
        slug: 'regulatory-obstacles',
        description: 'Security, insurance, and investment classification. Historical bans and solutions.',
      },
      {
        id: 41,
        title: 'The Last Mile Problem',
        slug: 'last-mile-problem',
        description: 'Pool shrinkage, merge/annuitize/distribute options, and hybrid approaches.',
      },
      {
        id: 42,
        title: 'The Retirement Income Crisis',
        slug: 'retirement-income-crisis',
        description: 'Longevity plus savings shortfall. The tontine solution.',
      },
      {
        id: 43,
        title: 'Integrated Retirement Portfolio',
        slug: 'integrated-retirement-portfolio',
        description: 'Three-bucket approach: guaranteed floor, longevity pooling, flexibility.',
      },
      {
        id: 44,
        title: 'The Future of Tontines',
        slug: 'future-of-tontines',
        description: '2030/2040 scenarios, policy recommendations, and academic frontiers.',
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
