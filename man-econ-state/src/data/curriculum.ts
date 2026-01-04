// =============================================================================
// CURRICULUM STRUCTURE - Man, Economy, and State with Power and Market
// =============================================================================
// Murray N. Rothbard's comprehensive treatise on economics
// 12 Chapters (Man, Economy, and State) + 7 Chapters (Power and Market) = 19 Sections
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
  // PART ONE: FUNDAMENTALS OF HUMAN ACTION
  // ==========================================================================
  {
    id: 1,
    title: 'Part One: Fundamentals of Human Action',
    slug: 'fundamentals-human-action',
    sections: [
      {
        id: 0,
        title: 'Chapter 1: Fundamentals of Human Action',
        slug: 'fundamentals-of-human-action',
        description: 'The concept of action, first implications of the concept, further implications: means, time preference, the law of marginal utility, and factors of production.',
      },
      {
        id: 1,
        title: 'Chapter 2: Direct Exchange',
        slug: 'direct-exchange',
        description: 'Types of interpersonal action: violence and voluntary exchange, exchange and the division of labor, the terms of exchange, determination of price: equilibrium price.',
      },
    ],
  },

  // ==========================================================================
  // PART TWO: THE PATTERN OF INDIRECT EXCHANGE
  // ==========================================================================
  {
    id: 2,
    title: 'Part Two: Indirect Exchange and Prices',
    slug: 'indirect-exchange-prices',
    sections: [
      {
        id: 2,
        title: 'Chapter 3: The Pattern of Indirect Exchange',
        slug: 'pattern-indirect-exchange',
        description: 'The limitations of direct exchange, the emergence of indirect exchange, the development of money, money and prices.',
      },
      {
        id: 3,
        title: 'Chapter 4: Prices and Consumption',
        slug: 'prices-and-consumption',
        description: 'Money prices, the determination of money prices, the gains of exchange, pricing and the theory of the consumer.',
      },
    ],
  },

  // ==========================================================================
  // PART THREE: PRODUCTION THEORY
  // ==========================================================================
  {
    id: 3,
    title: 'Part Three: Production Theory',
    slug: 'production-theory',
    sections: [
      {
        id: 4,
        title: 'Chapter 5: Production: The Structure',
        slug: 'production-structure',
        description: 'The production structure, time and production, saved capital, capital values and aggregate profits, the structure of production: present goods and future goods.',
      },
      {
        id: 5,
        title: 'Chapter 6: Production: The Rate of Interest',
        slug: 'production-interest-rate',
        description: 'The rate of interest and its determination, time preference, determination of the pure rate of interest, the time market and the production structure.',
      },
      {
        id: 6,
        title: 'Chapter 7: Production: General Pricing of the Factors',
        slug: 'production-factor-pricing',
        description: 'Imputation of the discounted marginal value product, the pricing of the factors, the source of factor incomes, discounting and the structure of production.',
      },
      {
        id: 7,
        title: 'Chapter 8: Production: Entrepreneurship and Change',
        slug: 'production-entrepreneurship',
        description: 'Entrepreneurial profit and loss, the effects of investment on interest and production, entrepreneurs and the economy, the function of the entrepreneur.',
      },
      {
        id: 8,
        title: 'Chapter 9: Production: Particular Factor Prices',
        slug: 'production-particular-factors',
        description: 'Land, labor, and capital goods, wages and marginal productivity, the determination of wages, capitalization and rent, the pricing of productive factors.',
      },
    ],
  },

  // ==========================================================================
  // PART FOUR: MARKET STRUCTURE AND MONEY
  // ==========================================================================
  {
    id: 4,
    title: 'Part Four: Market Structure and Money',
    slug: 'market-structure-money',
    sections: [
      {
        id: 9,
        title: 'Chapter 10: Monopoly and Competition',
        slug: 'monopoly-and-competition',
        description: 'The concept of consumer sovereignty, monopoly and competition on the free market, cartels, the illusion of monopoly price on the free market.',
      },
      {
        id: 10,
        title: 'Chapter 11: Money and Its Purchasing Power',
        slug: 'money-purchasing-power',
        description: 'The supply of money, demand for money, the determination of money prices, changes in the money relation, cash balance and the individual.',
      },
    ],
  },

  // ==========================================================================
  // PART FIVE: VIOLENT INTERVENTION IN THE MARKET
  // ==========================================================================
  {
    id: 5,
    title: 'Part Five: Violent Intervention in the Market',
    slug: 'violent-intervention',
    sections: [
      {
        id: 11,
        title: 'Chapter 12: The Economics of Violent Intervention',
        slug: 'economics-violent-intervention',
        description: 'Types of intervention, effects of government intervention, direct effects on utility, effects of price control, effects of product control, effects on the pattern of production.',
      },
    ],
  },

  // ==========================================================================
  // POWER AND MARKET: GOVERNMENT AND THE ECONOMY
  // ==========================================================================
  {
    id: 6,
    title: 'Power and Market: Government and the Economy',
    slug: 'power-and-market',
    sections: [
      {
        id: 12,
        title: 'Chapter 1: Defense Services on the Free Market',
        slug: 'defense-services-free-market',
        description: 'The private production of defense, the nature of the State, property rights and the theory of contracts.',
      },
      {
        id: 13,
        title: 'Chapter 2: Fundamentals of Intervention',
        slug: 'fundamentals-of-intervention',
        description: 'Types of intervention: autistic, binary, and triangular, direct effects of intervention on utility.',
      },
      {
        id: 14,
        title: 'Chapter 3: Triangular Intervention',
        slug: 'triangular-intervention',
        description: 'Price control, product control, grants of monopolistic privilege, effects on production and allocation.',
      },
      {
        id: 15,
        title: 'Chapter 4: Binary Intervention: Taxation',
        slug: 'binary-intervention-taxation',
        description: 'The nature and types of taxation, incidence and effects of taxation, the canons of justice in taxation.',
      },
      {
        id: 16,
        title: 'Chapter 5: Binary Intervention: Government Expenditures',
        slug: 'binary-intervention-expenditures',
        description: 'Government subsidies, resource-using activities, the fallacy of government ownership, bureaucracy.',
      },
      {
        id: 17,
        title: 'Chapter 6: Antimarket Ethics: A Praxeological Critique',
        slug: 'antimarket-ethics',
        description: 'The nature of economics and ethics, implicit ethics in critiques of the market, alleged defects of the market, alleged merits of intervention.',
      },
      {
        id: 18,
        title: 'Chapter 7: Conclusion: Economics and Public Policy',
        slug: 'economics-public-policy',
        description: 'The role of the economist, economics and social philosophy, toward a libertarian society.',
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
