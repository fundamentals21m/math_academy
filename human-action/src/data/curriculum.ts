// =============================================================================
// CURRICULUM STRUCTURE - Human Action by Ludwig von Mises
// =============================================================================
// A Treatise on Economics - The foundational text of Austrian Economics
// 7 Parts, 39 Chapters + Introduction = 40 Sections
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
  // INTRODUCTION
  // ==========================================================================
  {
    id: 0,
    title: 'Introduction',
    slug: 'introduction',
    sections: [
      {
        id: 0,
        title: 'Introduction',
        slug: 'introduction',
        description: 'Economics and Praxeology, the epistemological problem of a general theory of human action, and the practice of human action.',
      },
    ],
  },

  // ==========================================================================
  // PART ONE: HUMAN ACTION
  // ==========================================================================
  {
    id: 1,
    title: 'Part One: Human Action',
    slug: 'human-action',
    sections: [
      {
        id: 1,
        title: 'Chapter I: Acting Man',
        slug: 'acting-man',
        description: 'Purposeful action and animal reaction, the prerequisites of human action, and human action as an ultimate given.',
      },
      {
        id: 2,
        title: 'Chapter II: The Epistemological Problems of the Sciences of Human Action',
        slug: 'epistemological-problems',
        description: 'Praxeology and history, the formal and aprioristic character of praxeology, and methodological individualism.',
      },
      {
        id: 3,
        title: 'Chapter III: Economics and the Revolt Against Reason',
        slug: 'revolt-against-reason',
        description: 'The revolt against reason, the logical aspect of polylogism, and the case for reason.',
      },
      {
        id: 4,
        title: 'Chapter IV: A First Analysis of the Category of Action',
        slug: 'category-of-action',
        description: 'Ends and means, the scale of value, the scale of needs, and action as an exchange.',
      },
      {
        id: 5,
        title: 'Chapter V: Time',
        slug: 'time',
        description: 'Time as a praxeological factor, past, present, and future, and the economization of time.',
      },
      {
        id: 6,
        title: 'Chapter VI: Uncertainty',
        slug: 'uncertainty',
        description: 'Uncertainty and acting, the meaning of probability, class probability, and case probability.',
      },
      {
        id: 7,
        title: 'Chapter VII: Action Within the World',
        slug: 'action-within-world',
        description: 'The law of marginal utility, the law of returns, human labor as a means, and production.',
      },
    ],
  },

  // ==========================================================================
  // PART TWO: ACTION WITHIN THE FRAMEWORK OF SOCIETY
  // ==========================================================================
  {
    id: 2,
    title: 'Part Two: Action Within the Framework of Society',
    slug: 'action-framework-society',
    sections: [
      {
        id: 8,
        title: 'Chapter VIII: Human Society',
        slug: 'human-society',
        description: 'Human cooperation, the division of labor, the Ricardian Law of Association, and the great society.',
      },
      {
        id: 9,
        title: 'Chapter IX: The Role of Ideas',
        slug: 'role-of-ideas',
        description: 'Human reason, world view and ideology, might, and meliorism and the idea of progress.',
      },
      {
        id: 10,
        title: 'Chapter X: Exchange Within Society',
        slug: 'exchange-within-society',
        description: 'Autistic exchange and interpersonal exchange, contractual bonds and hegemonic bonds, and calculative action.',
      },
    ],
  },

  // ==========================================================================
  // PART THREE: ECONOMIC CALCULATION
  // ==========================================================================
  {
    id: 3,
    title: 'Part Three: Economic Calculation',
    slug: 'economic-calculation',
    sections: [
      {
        id: 11,
        title: 'Chapter XI: Valuation Without Calculation',
        slug: 'valuation-without-calculation',
        description: 'The gradation of the means, the barter-fiction of the elementary theory of value and prices, and the problem of economic calculation.',
      },
      {
        id: 12,
        title: 'Chapter XII: The Sphere of Economic Calculation',
        slug: 'sphere-economic-calculation',
        description: 'The character of monetary entries, the limits of economic calculation, and the root of the stabilization idea.',
      },
      {
        id: 13,
        title: 'Chapter XIII: Monetary Calculation as a Tool of Action',
        slug: 'monetary-calculation-tool',
        description: 'Monetary calculation as a method of thinking and economic calculation and the science of human action.',
      },
    ],
  },

  // ==========================================================================
  // PART FOUR: CATALLACTICS OR ECONOMICS OF THE MARKET SOCIETY
  // ==========================================================================
  {
    id: 4,
    title: 'Part Four: Catallactics or Economics of the Market Society',
    slug: 'catallactics',
    sections: [
      {
        id: 14,
        title: 'Chapter XIV: The Scope and Method of Catallactics',
        slug: 'scope-method-catallactics',
        description: 'The delimitation of catallactic problems, the method of imaginary constructions, and the pure market economy.',
      },
      {
        id: 15,
        title: 'Chapter XV: The Market',
        slug: 'the-market',
        description: 'Characteristics of the market economy, capital goods and capital, capitalism, and the sovereignty of consumers.',
      },
      {
        id: 16,
        title: 'Chapter XVI: Prices',
        slug: 'prices',
        description: 'The pricing process, valuation and appraisement, cost accounting, and monopoly prices.',
      },
      {
        id: 17,
        title: 'Chapter XVII: Indirect Exchange',
        slug: 'indirect-exchange',
        description: 'Media of exchange and money, demand for money and supply of money, and the gold standard.',
      },
      {
        id: 18,
        title: 'Chapter XVIII: Action in the Passing of Time',
        slug: 'action-passing-time',
        description: 'Time preference as an essential requisite of action, capital goods, and accumulation of capital.',
      },
      {
        id: 19,
        title: 'Chapter XIX: Interest',
        slug: 'interest',
        description: 'The phenomenon of interest, originary interest, the height of interest rates, and the computation of interest.',
      },
      {
        id: 20,
        title: 'Chapter XX: Interest, Credit Expansion, and the Trade Cycle',
        slug: 'trade-cycle',
        description: 'The entrepreneurial component in interest rates, credit expansion, and the monetary theory of the trade cycle.',
      },
      {
        id: 21,
        title: 'Chapter XXI: Work and Wages',
        slug: 'work-and-wages',
        description: 'Introversive and extroversive labor, wages, catallactic unemployment, and the labor market.',
      },
      {
        id: 22,
        title: 'Chapter XXII: The Nonhuman Original Factors of Production',
        slug: 'nonhuman-factors',
        description: 'The theory of rent, the time factor in land utilization, and the prices of land.',
      },
      {
        id: 23,
        title: 'Chapter XXIII: The Data of the Market',
        slug: 'data-of-market',
        description: 'The theory and the data, the role of power, and the limits of property rights.',
      },
      {
        id: 24,
        title: 'Chapter XXIV: Harmony and Conflict of Interests',
        slug: 'harmony-conflict-interests',
        description: 'The ultimate source of profit and loss, the harmony of rightly understood interests, and private property.',
      },
    ],
  },

  // ==========================================================================
  // PART FIVE: SOCIAL COOPERATION WITHOUT A MARKET
  // ==========================================================================
  {
    id: 5,
    title: 'Part Five: Social Cooperation Without a Market',
    slug: 'cooperation-without-market',
    sections: [
      {
        id: 25,
        title: 'Chapter XXV: The Imaginary Construction of a Socialist Society',
        slug: 'socialist-society',
        description: 'The historical origin of the socialist idea, the socialist doctrine, and the praxeological character of socialism.',
      },
      {
        id: 26,
        title: 'Chapter XXVI: The Impossibility of Economic Calculation Under Socialism',
        slug: 'impossibility-socialist-calculation',
        description: 'The problem, past failures to conceive the problem, and the quasi-market.',
      },
    ],
  },

  // ==========================================================================
  // PART SIX: THE HAMPERED MARKET ECONOMY
  // ==========================================================================
  {
    id: 6,
    title: 'Part Six: The Hampered Market Economy',
    slug: 'hampered-market',
    sections: [
      {
        id: 27,
        title: 'Chapter XXVII: The Government and the Market',
        slug: 'government-and-market',
        description: 'The idea of a third system, the intervention, and the meaning of laissez faire.',
      },
      {
        id: 28,
        title: 'Chapter XXVIII: Interference by Taxation',
        slug: 'interference-taxation',
        description: 'The neutral tax, the total tax, fiscal and nonfiscal objectives of taxation.',
      },
      {
        id: 29,
        title: 'Chapter XXIX: Restriction of Production',
        slug: 'restriction-production',
        description: 'The nature of restriction, the price of restriction, and restriction as an economic system.',
      },
      {
        id: 30,
        title: 'Chapter XXX: Interference with the Structure of Prices',
        slug: 'interference-prices',
        description: 'The government and the autonomy of the market, market reaction to government interference, and minimum wage rates.',
      },
      {
        id: 31,
        title: 'Chapter XXXI: Currency and Credit Manipulation',
        slug: 'currency-credit-manipulation',
        description: 'The government and the currency, legal tender legislation, and foreign exchange control.',
      },
      {
        id: 32,
        title: 'Chapter XXXII: Confiscation and Redistribution',
        slug: 'confiscation-redistribution',
        description: 'The philosophy of confiscation, land reform, and confiscatory taxation.',
      },
      {
        id: 33,
        title: 'Chapter XXXIII: Syndicalism and Corporativism',
        slug: 'syndicalism-corporativism',
        description: 'The syndicalist idea, the fallacies of syndicalism, and guild socialism.',
      },
      {
        id: 34,
        title: 'Chapter XXXIV: The Economics of War',
        slug: 'economics-of-war',
        description: 'Total war, war and the market economy, war and autarky, and the futility of war.',
      },
      {
        id: 35,
        title: 'Chapter XXXV: The Welfare Principle Versus the Market Principle',
        slug: 'welfare-vs-market',
        description: 'The case against the market economy, poverty, inequality, insecurity, and social justice.',
      },
      {
        id: 36,
        title: 'Chapter XXXVI: The Crisis of Interventionism',
        slug: 'crisis-interventionism',
        description: 'The harvest of interventionism, the exhaustion of the reserve fund, and the end of interventionism.',
      },
    ],
  },

  // ==========================================================================
  // PART SEVEN: THE PLACE OF ECONOMICS IN SOCIETY
  // ==========================================================================
  {
    id: 7,
    title: 'Part Seven: The Place of Economics in Society',
    slug: 'place-economics-society',
    sections: [
      {
        id: 37,
        title: 'Chapter XXXVII: The Nondescript Character of Economics',
        slug: 'nondescript-character',
        description: 'The singularity of economics, economics and public opinion, and the illusion of the old liberals.',
      },
      {
        id: 38,
        title: 'Chapter XXXVIII: The Place of Economics in Learning',
        slug: 'economics-in-learning',
        description: 'The study of economics, economics as a profession, and economics and freedom.',
      },
      {
        id: 39,
        title: 'Chapter XXXIX: Economics and the Essential Problems of Human Existence',
        slug: 'essential-problems',
        description: 'Science and life, economics and judgments of value, and economic cognition and human action.',
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
