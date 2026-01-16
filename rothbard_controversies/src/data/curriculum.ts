// =============================================================================
// CURRICULUM STRUCTURE
// =============================================================================
// Economic Controversies by Murray N. Rothbard
// A collection of essays on economic methodology, Austrian economics,
// property rights, taxation, trade, money, and critical reviews.
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
    id: 1,
    title: 'Introduction',
    slug: 'introduction',
    sections: [
      {
        id: 0,
        title: 'Introduction by Gene Epstein',
        slug: 'introduction',
        description: 'An introduction to Rothbard\'s economic essays and their significance.',
      },
    ],
  },
  // ==========================================================================
  // SECTION ONE: METHOD
  // ==========================================================================
  {
    id: 2,
    title: 'Method',
    slug: 'method',
    sections: [
      {
        id: 1,
        title: 'The Mantle of Science',
        slug: 'mantle-of-science',
        description: 'Scientism vs. true science in the study of man.',
      },
      {
        id: 2,
        title: 'What is the Proper Way to Study Man?',
        slug: 'proper-way-to-study-man',
        description: 'The correct methodology for studying human action.',
      },
      {
        id: 3,
        title: 'Praxeology as the Method of the Social Sciences',
        slug: 'praxeology-method-social-sciences',
        description: 'The praxeological approach to social science methodology.',
      },
      {
        id: 4,
        title: 'Praxeology: The Methodology of Austrian Economics',
        slug: 'praxeology-methodology-austrian',
        description: 'How Austrian economics employs praxeological methodology.',
      },
      {
        id: 5,
        title: 'Praxeology, Value Judgments, and Public Policy',
        slug: 'praxeology-value-judgments',
        description: 'The relationship between economic science and policy recommendations.',
      },
      {
        id: 6,
        title: 'In Defense of "Extreme Apriorism"',
        slug: 'defense-extreme-apriorism',
        description: 'A defense of the a priori foundations of economic theory.',
      },
      {
        id: 7,
        title: 'Praxeology: Reply to Mr. Schuller',
        slug: 'praxeology-reply-schuller',
        description: 'Response to critiques of praxeological methodology.',
      },
      {
        id: 8,
        title: 'The Hermeneutical Invasion of Philosophy and Economics',
        slug: 'hermeneutical-invasion',
        description: 'Critique of hermeneutical approaches in economics.',
      },
    ],
  },
  // ==========================================================================
  // SECTION TWO: THE AUSTRIAN SCHOOL
  // ==========================================================================
  {
    id: 3,
    title: 'The Austrian School',
    slug: 'austrian-school',
    sections: [
      {
        id: 9,
        title: 'New Light on the Prehistory of the Austrian School',
        slug: 'prehistory-austrian-school',
        description: 'Historical origins and intellectual precursors of Austrian economics.',
      },
      {
        id: 10,
        title: 'The Present State of Austrian Economics',
        slug: 'present-state-austrian',
        description: 'An assessment of Austrian economics in the modern era.',
      },
      {
        id: 11,
        title: 'Ludwig von Mises and the Paradigm for Our Age',
        slug: 'mises-paradigm',
        description: 'Mises\'s contributions and their relevance today.',
      },
      {
        id: 12,
        title: 'Value Implications of Economic Theory',
        slug: 'value-implications',
        description: 'The value implications inherent in economic theorizing.',
      },
      {
        id: 13,
        title: 'The Myth of Efficiency',
        slug: 'myth-of-efficiency',
        description: 'A critique of efficiency as an economic criterion.',
      },
      {
        id: 14,
        title: 'Breaking Out of the Walrasian Box: Schumpeter and Hansen',
        slug: 'walrasian-box',
        description: 'Moving beyond Walrasian general equilibrium theory.',
      },
      {
        id: 15,
        title: 'Professor Rolph on the Discounted Marginal Productivity Theory',
        slug: 'rolph-marginal-productivity',
        description: 'Analysis of marginal productivity theory.',
      },
      {
        id: 16,
        title: 'Professor Kirzner on Entrepreneurship',
        slug: 'kirzner-entrepreneurship',
        description: 'Discussion of Kirzner\'s theory of entrepreneurship.',
      },
      {
        id: 17,
        title: 'Toward a Reconstruction of Utility and Welfare Economics',
        slug: 'reconstruction-utility-welfare',
        description: 'Rebuilding welfare economics on solid foundations.',
      },
    ],
  },
  // ==========================================================================
  // SECTION THREE: PROPERTY AND THE PUBLIC SECTOR
  // ==========================================================================
  {
    id: 4,
    title: 'Property and the Public Sector',
    slug: 'property-public-sector',
    sections: [
      {
        id: 18,
        title: 'The Politics of Political Economists',
        slug: 'politics-political-economists',
        description: 'The political biases of professional economists.',
      },
      {
        id: 19,
        title: 'Justice and Property Rights',
        slug: 'justice-property-rights',
        description: 'The philosophical foundations of property rights.',
      },
      {
        id: 20,
        title: 'Law, Property Rights, and Air Pollution',
        slug: 'law-property-air-pollution',
        description: 'Property rights approaches to environmental issues.',
      },
      {
        id: 21,
        title: 'The Fallacy of the "Public Sector"',
        slug: 'fallacy-public-sector',
        description: 'Critique of public sector economic analysis.',
      },
      {
        id: 22,
        title: 'Statistics: Achilles\'s Heel of Government',
        slug: 'statistics-achilles-heel',
        description: 'Problems with government economic statistics.',
      },
      {
        id: 23,
        title: 'How and How Not to Desocialize',
        slug: 'how-to-desocialize',
        description: 'Strategies for privatization and desocialization.',
      },
    ],
  },
  // ==========================================================================
  // SECTION FOUR: TAXATION
  // ==========================================================================
  {
    id: 5,
    title: 'Taxation',
    slug: 'taxation',
    sections: [
      {
        id: 24,
        title: 'The Myth of Neutral Taxation',
        slug: 'myth-neutral-taxation',
        description: 'Why no tax system can be economically neutral.',
      },
      {
        id: 25,
        title: 'The Myth of Tax "Reform"',
        slug: 'myth-tax-reform',
        description: 'Critique of tax reform proposals.',
      },
      {
        id: 26,
        title: 'The Consumption Tax: A Critique',
        slug: 'consumption-tax-critique',
        description: 'Problems with consumption-based taxation.',
      },
      {
        id: 27,
        title: 'The Case Against the Flat Tax',
        slug: 'case-against-flat-tax',
        description: 'Arguments against flat tax proposals.',
      },
      {
        id: 28,
        title: 'The Uneasy Case for Degressive Taxation',
        slug: 'uneasy-case-degressive',
        description: 'Analysis of degressive taxation arguments.',
      },
      {
        id: 29,
        title: 'The Single Tax: Economic and Moral Implications',
        slug: 'single-tax',
        description: 'Critique of Henry George\'s single tax proposal.',
      },
      {
        id: 30,
        title: 'The Value-Added Tax is Not the Answer',
        slug: 'vat-not-answer',
        description: 'Arguments against the value-added tax.',
      },
      {
        id: 31,
        title: 'A Reply to Georgist Criticisms',
        slug: 'reply-georgist-criticisms',
        description: 'Response to supporters of the single tax.',
      },
    ],
  },
  // ==========================================================================
  // SECTION FIVE: TRADE AND FREEDOM
  // ==========================================================================
  {
    id: 6,
    title: 'Trade and Freedom',
    slug: 'trade-freedom',
    sections: [
      {
        id: 32,
        title: 'Freedom, Inequality, Primitivism, and the Division of Labor',
        slug: 'freedom-inequality-division-labor',
        description: 'The relationship between freedom and economic inequality.',
      },
      {
        id: 33,
        title: 'Restrictionist Pricing of Labor',
        slug: 'restrictionist-pricing-labor',
        description: 'Effects of labor market restrictions on prices.',
      },
      {
        id: 34,
        title: 'Mercantilism: A Lesson for Our Times?',
        slug: 'mercantilism-lesson',
        description: 'Historical mercantilism and its modern parallels.',
      },
      {
        id: 35,
        title: 'Capitalism versus Statism',
        slug: 'capitalism-vs-statism',
        description: 'The fundamental conflict between capitalism and state intervention.',
      },
      {
        id: 36,
        title: 'A Future of Peace and Capitalism',
        slug: 'future-peace-capitalism',
        description: 'The relationship between free markets and peace.',
      },
    ],
  },
  // ==========================================================================
  // SECTION SIX: MONEY, BANKING, AND CALCULATION
  // ==========================================================================
  {
    id: 7,
    title: 'Money, Banking, and Calculation',
    slug: 'money-banking-calculation',
    sections: [
      {
        id: 37,
        title: 'The Austrian Theory of Money',
        slug: 'austrian-theory-money',
        description: 'The Austrian approach to monetary theory.',
      },
      {
        id: 38,
        title: 'Money, the State, and Modern Mercantilism',
        slug: 'money-state-mercantilism',
        description: 'Government control of money and mercantilist policy.',
      },
      {
        id: 39,
        title: 'Austrian Definitions of the Supply of Money',
        slug: 'austrian-definitions-money-supply',
        description: 'How Austrians define the money supply.',
      },
      {
        id: 40,
        title: 'Gold vs. Fluctuating Fiat Exchange Rates',
        slug: 'gold-vs-fiat',
        description: 'The gold standard versus fiat currency systems.',
      },
      {
        id: 41,
        title: 'The Case For a Genuine Gold Dollar',
        slug: 'case-gold-dollar',
        description: 'Arguments for returning to gold-backed money.',
      },
      {
        id: 42,
        title: 'Inflation and the Business Cycle',
        slug: 'inflation-business-cycle',
        description: 'The collapse of the Keynesian paradigm.',
      },
      {
        id: 43,
        title: 'Lange, Mises and Praxeology',
        slug: 'lange-mises-praxeology',
        description: 'The retreat from Marxism and the calculation debate.',
      },
      {
        id: 44,
        title: 'Ludwig von Mises and Economic Calculation Under Socialism',
        slug: 'mises-calculation-socialism',
        description: 'Mises\'s critique of socialist economic calculation.',
      },
      {
        id: 45,
        title: 'The End of Socialism and the Calculation Debate Revisited',
        slug: 'end-socialism-calculation',
        description: 'The calculation debate in light of socialism\'s collapse.',
      },
      {
        id: 46,
        title: 'The Myth of Free Banking in Scotland',
        slug: 'myth-free-banking-scotland',
        description: 'Historical analysis of Scottish banking.',
      },
      {
        id: 47,
        title: 'Aurophobia: Or, Free Banking on What Standard?',
        slug: 'aurophobia-free-banking',
        description: 'The importance of the gold standard for free banking.',
      },
    ],
  },
  // ==========================================================================
  // SECTION SEVEN: CRITICISM
  // ==========================================================================
  {
    id: 8,
    title: 'Criticism',
    slug: 'criticism',
    sections: [
      {
        id: 48,
        title: 'Milton Friedman Unraveled',
        slug: 'friedman-unraveled',
        description: 'A critical assessment of Milton Friedman\'s economics.',
      },
      {
        id: 49,
        title: 'Paul Samuelson\'s Economics, Ninth Edition',
        slug: 'samuelson-economics',
        description: 'Review of Samuelson\'s influential textbook.',
      },
      {
        id: 50,
        title: 'Heilbroner\'s Economic Means and Social Ends',
        slug: 'heilbroner-economic-means',
        description: 'Critique of Robert Heilbroner\'s economic philosophy.',
      },
      {
        id: 51,
        title: 'Buchanan and Tullock\'s The Calculus of Consent',
        slug: 'buchanan-tullock-calculus',
        description: 'Review of the foundational public choice theory text.',
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
