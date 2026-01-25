// =============================================================================
// CURRICULUM STRUCTURE - Tao's Analysis I
// =============================================================================
// Based on Terence Tao's "Analysis I" (2006, Hindustan Book Agency)
// 11 Chapters + 2 Appendices = 13 Parts, 72 Sections
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
  // Part 1: Introduction
  // ==========================================================================
  {
    id: 1,
    title: 'Introduction',
    slug: 'introduction',
    sections: [
      {
        id: 0,
        title: 'What is analysis?',
        slug: 'what-is-analysis',
        description: 'An overview of real analysis and its place in mathematics.',
      },
      {
        id: 1,
        title: 'Why do analysis?',
        slug: 'why-do-analysis',
        description: 'Motivation for rigorous analysis through paradoxes and counterexamples.',
      },
    ],
  },
  // ==========================================================================
  // Part 2: The Natural Numbers
  // ==========================================================================
  {
    id: 2,
    title: 'The Natural Numbers',
    slug: 'natural-numbers',
    sections: [
      {
        id: 2,
        title: 'The Peano axioms',
        slug: 'peano-axioms',
        description: 'Axiomatic foundation of natural numbers and mathematical induction.',
      },
      {
        id: 3,
        title: 'Addition',
        slug: 'addition',
        description: 'Defining and proving properties of addition on natural numbers.',
      },
      {
        id: 4,
        title: 'Multiplication',
        slug: 'multiplication',
        description: 'Defining multiplication and proving its basic properties.',
      },
    ],
  },
  // ==========================================================================
  // Part 3: Set Theory
  // ==========================================================================
  {
    id: 3,
    title: 'Set Theory',
    slug: 'set-theory',
    sections: [
      {
        id: 5,
        title: 'Fundamentals',
        slug: 'set-fundamentals',
        description: 'Basic set operations, axioms, and properties.',
      },
      {
        id: 6,
        title: "Russell's paradox",
        slug: 'russells-paradox',
        description: 'The set of all sets paradox and why naive set theory fails.',
      },
      {
        id: 7,
        title: 'Functions',
        slug: 'functions',
        description: 'Functions as sets, domain, codomain, and function composition.',
      },
      {
        id: 8,
        title: 'Images and inverse images',
        slug: 'images-inverse-images',
        description: 'Forward and inverse images of sets under functions.',
      },
      {
        id: 9,
        title: 'Cartesian products',
        slug: 'cartesian-products',
        description: 'Ordered pairs, tuples, and Cartesian products of sets.',
      },
      {
        id: 10,
        title: 'Cardinality of sets',
        slug: 'cardinality',
        description: 'Comparing sizes of sets, finite and infinite cardinalities.',
      },
    ],
  },
  // ==========================================================================
  // Part 4: Integers and Rationals
  // ==========================================================================
  {
    id: 4,
    title: 'Integers and Rationals',
    slug: 'integers-rationals',
    sections: [
      {
        id: 11,
        title: 'The integers',
        slug: 'integers',
        description: 'Constructing integers from natural numbers as formal differences.',
      },
      {
        id: 12,
        title: 'The rationals',
        slug: 'rationals',
        description: 'Constructing rational numbers as formal quotients of integers.',
      },
      {
        id: 13,
        title: 'Absolute value and exponentiation',
        slug: 'absolute-value-exponentiation',
        description: 'Defining absolute value and integer exponentiation.',
      },
      {
        id: 14,
        title: 'Gaps in the rational numbers',
        slug: 'gaps-rationals',
        description: 'Why the rationals are incomplete and motivation for real numbers.',
      },
    ],
  },
  // ==========================================================================
  // Part 5: The Real Numbers
  // ==========================================================================
  {
    id: 5,
    title: 'The Real Numbers',
    slug: 'real-numbers',
    sections: [
      {
        id: 15,
        title: 'Cauchy sequences',
        slug: 'cauchy-sequences',
        description: 'Definition and properties of Cauchy sequences of rationals.',
      },
      {
        id: 16,
        title: 'Equivalent Cauchy sequences',
        slug: 'equivalent-cauchy-sequences',
        description: 'Equivalence relation on Cauchy sequences.',
      },
      {
        id: 17,
        title: 'The construction of the real numbers',
        slug: 'construction-reals',
        description: 'Defining real numbers as equivalence classes of Cauchy sequences.',
      },
      {
        id: 18,
        title: 'Ordering the reals',
        slug: 'ordering-reals',
        description: 'Defining and proving properties of the order relation on reals.',
      },
      {
        id: 19,
        title: 'The least upper bound property',
        slug: 'least-upper-bound',
        description: 'Completeness of the real numbers.',
      },
      {
        id: 20,
        title: 'Real exponentiation, part I',
        slug: 'real-exponentiation-1',
        description: 'Extending exponentiation to real exponents.',
      },
    ],
  },
  // ==========================================================================
  // Part 6: Limits of Sequences
  // ==========================================================================
  {
    id: 6,
    title: 'Limits of Sequences',
    slug: 'limits-sequences',
    sections: [
      {
        id: 21,
        title: 'Convergence and limit laws',
        slug: 'convergence-limit-laws',
        description: 'Definition of convergence and algebraic properties of limits.',
      },
      {
        id: 22,
        title: 'The extended real number system',
        slug: 'extended-reals',
        description: 'Including positive and negative infinity.',
      },
      {
        id: 23,
        title: 'Suprema and infima of sequences',
        slug: 'suprema-infima-sequences',
        description: 'Bounds and their properties for sequences.',
      },
      {
        id: 24,
        title: 'Limsup, liminf, and limit points',
        slug: 'limsup-liminf',
        description: 'Limit superior, limit inferior, and accumulation points.',
      },
      {
        id: 25,
        title: 'Some standard limits',
        slug: 'standard-limits',
        description: 'Important limit examples and techniques.',
      },
      {
        id: 26,
        title: 'Subsequences',
        slug: 'subsequences',
        description: 'Subsequences and the Bolzano-Weierstrass theorem.',
      },
      {
        id: 27,
        title: 'Real exponentiation, part II',
        slug: 'real-exponentiation-2',
        description: 'Completing the theory of real exponentiation using limits.',
      },
    ],
  },
  // ==========================================================================
  // Part 7: Series
  // ==========================================================================
  {
    id: 7,
    title: 'Series',
    slug: 'series',
    sections: [
      {
        id: 28,
        title: 'Finite series',
        slug: 'finite-series',
        description: 'Summation notation and properties of finite sums.',
      },
      {
        id: 29,
        title: 'Infinite series',
        slug: 'infinite-series',
        description: 'Definition of infinite series and convergence.',
      },
      {
        id: 30,
        title: 'Sums of non-negative numbers',
        slug: 'sums-non-negative',
        description: 'Special properties of series with non-negative terms.',
      },
      {
        id: 31,
        title: 'Rearrangement of series',
        slug: 'rearrangement-series',
        description: 'Absolute vs conditional convergence and rearrangements.',
      },
      {
        id: 32,
        title: 'The root and ratio tests',
        slug: 'root-ratio-tests',
        description: 'Convergence tests for series.',
      },
    ],
  },
  // ==========================================================================
  // Part 8: Infinite Sets
  // ==========================================================================
  {
    id: 8,
    title: 'Infinite Sets',
    slug: 'infinite-sets',
    sections: [
      {
        id: 33,
        title: 'Countability',
        slug: 'countability',
        description: 'Countable sets and their properties.',
      },
      {
        id: 34,
        title: 'Summation on infinite sets',
        slug: 'summation-infinite-sets',
        description: 'Extending summation to arbitrary countable index sets.',
      },
      {
        id: 35,
        title: 'Uncountable sets',
        slug: 'uncountable-sets',
        description: "Cantor's diagonal argument and uncountability of the reals.",
      },
      {
        id: 36,
        title: 'The axiom of choice',
        slug: 'axiom-of-choice',
        description: 'Statement and consequences of the axiom of choice.',
      },
      {
        id: 37,
        title: 'Ordered sets',
        slug: 'ordered-sets',
        description: 'Partial and total orderings, well-ordering.',
      },
    ],
  },
  // ==========================================================================
  // Part 9: Continuous Functions on R
  // ==========================================================================
  {
    id: 9,
    title: 'Continuous Functions on R',
    slug: 'continuous-functions',
    sections: [
      {
        id: 38,
        title: 'Subsets of the real line',
        slug: 'subsets-real-line',
        description: 'Intervals, open sets, closed sets, and their properties.',
      },
      {
        id: 39,
        title: 'The algebra of real-valued functions',
        slug: 'algebra-functions',
        description: 'Operations on functions: addition, multiplication, composition.',
      },
      {
        id: 40,
        title: 'Limiting values of functions',
        slug: 'limiting-values-functions',
        description: 'Limits of functions at a point.',
      },
      {
        id: 41,
        title: 'Continuous functions',
        slug: 'continuous-functions-def',
        description: 'Definition and basic properties of continuous functions.',
      },
      {
        id: 42,
        title: 'Left and right limits',
        slug: 'left-right-limits',
        description: 'One-sided limits and their relationship to continuity.',
      },
      {
        id: 43,
        title: 'The maximum principle',
        slug: 'maximum-principle',
        description: 'Extreme value theorem for continuous functions.',
      },
      {
        id: 44,
        title: 'The intermediate value theorem',
        slug: 'intermediate-value-theorem',
        description: 'Continuous functions preserve connectedness.',
      },
      {
        id: 45,
        title: 'Monotonic functions',
        slug: 'monotonic-functions',
        description: 'Properties of increasing and decreasing functions.',
      },
      {
        id: 46,
        title: 'Uniform continuity',
        slug: 'uniform-continuity',
        description: 'Uniform vs pointwise continuity.',
      },
      {
        id: 47,
        title: 'Limits at infinity',
        slug: 'limits-at-infinity',
        description: 'Behavior of functions as x approaches infinity.',
      },
    ],
  },
  // ==========================================================================
  // Part 10: Differentiation of Functions
  // ==========================================================================
  {
    id: 10,
    title: 'Differentiation of Functions',
    slug: 'differentiation',
    sections: [
      {
        id: 48,
        title: 'Basic definitions',
        slug: 'differentiation-basics',
        description: 'Definition of the derivative and differentiability.',
      },
      {
        id: 49,
        title: 'Local maxima, local minima, and derivatives',
        slug: 'local-extrema',
        description: 'Critical points and the first derivative test.',
      },
      {
        id: 50,
        title: 'Monotone functions and derivatives',
        slug: 'monotone-derivatives',
        description: 'Relationship between monotonicity and sign of derivative.',
      },
      {
        id: 51,
        title: 'Inverse functions and derivatives',
        slug: 'inverse-function-derivatives',
        description: 'Derivatives of inverse functions.',
      },
      {
        id: 52,
        title: "L'Hopital's rule",
        slug: 'lhopitals-rule',
        description: 'Evaluating indeterminate forms using derivatives.',
      },
    ],
  },
  // ==========================================================================
  // Part 11: The Riemann Integral
  // ==========================================================================
  {
    id: 11,
    title: 'The Riemann Integral',
    slug: 'riemann-integral',
    sections: [
      {
        id: 53,
        title: 'Partitions',
        slug: 'partitions',
        description: 'Partitions of intervals and refinements.',
      },
      {
        id: 54,
        title: 'Piecewise constant functions',
        slug: 'piecewise-constant',
        description: 'Step functions and their integrals.',
      },
      {
        id: 55,
        title: 'Upper and lower Riemann integrals',
        slug: 'upper-lower-integrals',
        description: 'Darboux sums and the Darboux integral.',
      },
      {
        id: 56,
        title: 'Basic properties of the Riemann integral',
        slug: 'riemann-properties',
        description: 'Linearity, monotonicity, and other integral properties.',
      },
      {
        id: 57,
        title: 'Riemann integrability of continuous functions',
        slug: 'integrability-continuous',
        description: 'Proof that continuous functions are Riemann integrable.',
      },
      {
        id: 58,
        title: 'Riemann integrability of monotone functions',
        slug: 'integrability-monotone',
        description: 'Proof that monotone functions are Riemann integrable.',
      },
      {
        id: 59,
        title: 'A non-Riemann integrable function',
        slug: 'non-integrable',
        description: 'Example of a bounded function that is not Riemann integrable.',
      },
      {
        id: 60,
        title: 'The Riemann-Stieltjes integral',
        slug: 'riemann-stieltjes',
        description: 'Generalization of the Riemann integral.',
      },
      {
        id: 61,
        title: 'The two fundamental theorems of calculus',
        slug: 'fundamental-theorems',
        description: 'Connecting differentiation and integration.',
      },
      {
        id: 62,
        title: 'Consequences of the fundamental theorems',
        slug: 'ftc-consequences',
        description: 'Integration by parts, substitution, and applications.',
      },
    ],
  },
  // ==========================================================================
  // Part 12: Appendix A - Mathematical Logic
  // ==========================================================================
  {
    id: 12,
    title: 'Appendix: Mathematical Logic',
    slug: 'mathematical-logic',
    sections: [
      {
        id: 63,
        title: 'Mathematical statements',
        slug: 'mathematical-statements',
        description: 'Propositions, truth values, and logical connectives.',
      },
      {
        id: 64,
        title: 'Implication',
        slug: 'implication',
        description: 'Conditional statements and their truth tables.',
      },
      {
        id: 65,
        title: 'The structure of proofs',
        slug: 'proof-structure',
        description: 'Direct proofs, contrapositive, and proof by contradiction.',
      },
      {
        id: 66,
        title: 'Variables and quantifiers',
        slug: 'variables-quantifiers',
        description: 'Universal and existential quantification.',
      },
      {
        id: 67,
        title: 'Nested quantifiers',
        slug: 'nested-quantifiers',
        description: 'Statements with multiple quantifiers.',
      },
      {
        id: 68,
        title: 'Some examples of proofs and quantifiers',
        slug: 'proof-examples',
        description: 'Worked examples of proofs with quantifiers.',
      },
      {
        id: 69,
        title: 'Equality',
        slug: 'equality',
        description: 'Properties and uses of the equality relation.',
      },
    ],
  },
  // ==========================================================================
  // Part 13: Appendix B - The Decimal System
  // ==========================================================================
  {
    id: 13,
    title: 'Appendix: The Decimal System',
    slug: 'decimal-system',
    sections: [
      {
        id: 70,
        title: 'The decimal representation of natural numbers',
        slug: 'decimal-naturals',
        description: 'Positional notation and base-10 representation.',
      },
      {
        id: 71,
        title: 'The decimal representation of real numbers',
        slug: 'decimal-reals',
        description: 'Decimal expansions and their relationship to real numbers.',
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
