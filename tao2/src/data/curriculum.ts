// =============================================================================
// CURRICULUM STRUCTURE - Analysis II by Terence Tao
// =============================================================================
// Chapters 12-19 of Analysis II covering metric spaces, uniform convergence,
// power series, Fourier series, multivariable calculus, and Lebesgue integration.
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
  // PART 1: Chapter 12 - Metric Spaces
  // ==========================================================================
  {
    id: 1,
    title: 'Metric Spaces',
    slug: 'metric-spaces',
    sections: [
      {
        id: 0,
        title: 'Definitions and Examples',
        slug: 'definitions-and-examples',
        description: 'Introduction to metric spaces, distance functions, and key examples including Euclidean, taxicab, and discrete metrics.',
      },
      {
        id: 1,
        title: 'Point-Set Topology of Metric Spaces',
        slug: 'point-set-topology',
        description: 'Balls, interior, exterior, boundary points, open and closed sets in metric spaces.',
      },
      {
        id: 2,
        title: 'Relative Topology',
        slug: 'relative-topology',
        description: 'Subspaces and relative open/closed sets in metric spaces.',
      },
      {
        id: 3,
        title: 'Cauchy Sequences and Complete Metric Spaces',
        slug: 'cauchy-sequences-completeness',
        description: 'Cauchy sequences, completeness, and the completion of metric spaces.',
      },
      {
        id: 4,
        title: 'Compact Metric Spaces',
        slug: 'compact-metric-spaces',
        description: 'Compactness, sequential compactness, and the Heine-Borel theorem.',
      },
    ],
  },
  // ==========================================================================
  // PART 2: Chapter 13 - Continuous Functions on Metric Spaces
  // ==========================================================================
  {
    id: 2,
    title: 'Continuous Functions on Metric Spaces',
    slug: 'continuous-functions-metric-spaces',
    sections: [
      {
        id: 5,
        title: 'Continuous Functions',
        slug: 'continuous-functions',
        description: 'Definition and characterization of continuous functions between metric spaces.',
      },
      {
        id: 6,
        title: 'Continuity and Product Spaces',
        slug: 'continuity-product-spaces',
        description: 'Product metrics and continuity of functions on product spaces.',
      },
      {
        id: 7,
        title: 'Continuity and Compactness',
        slug: 'continuity-compactness',
        description: 'Continuous images of compact sets, extreme value theorem, uniform continuity.',
      },
      {
        id: 8,
        title: 'Continuity and Connectedness',
        slug: 'continuity-connectedness',
        description: 'Connected sets, path-connectedness, and the intermediate value theorem.',
      },
      {
        id: 9,
        title: 'Topological Spaces',
        slug: 'topological-spaces',
        description: 'Introduction to general topological spaces and their properties.',
      },
    ],
  },
  // ==========================================================================
  // PART 3: Chapter 14 - Uniform Convergence
  // ==========================================================================
  {
    id: 3,
    title: 'Uniform Convergence',
    slug: 'uniform-convergence',
    sections: [
      {
        id: 10,
        title: 'Limiting Values of Functions',
        slug: 'limiting-values-functions',
        description: 'Limits of functions at a point in metric spaces.',
      },
      {
        id: 11,
        title: 'Pointwise and Uniform Convergence',
        slug: 'pointwise-uniform-convergence',
        description: 'Comparing pointwise and uniform convergence of function sequences.',
      },
      {
        id: 12,
        title: 'Uniform Convergence and Continuity',
        slug: 'uniform-convergence-continuity',
        description: 'Preservation of continuity under uniform limits.',
      },
      {
        id: 13,
        title: 'The Metric of Uniform Convergence',
        slug: 'metric-uniform-convergence',
        description: 'The sup norm metric on spaces of bounded functions.',
      },
      {
        id: 14,
        title: 'Series of Functions; the Weierstrass M-test',
        slug: 'weierstrass-m-test',
        description: 'Uniform convergence of series and the Weierstrass M-test.',
      },
      {
        id: 15,
        title: 'Uniform Convergence and Integration',
        slug: 'uniform-convergence-integration',
        description: 'Interchanging limits and integrals under uniform convergence.',
      },
      {
        id: 16,
        title: 'Uniform Convergence and Derivatives',
        slug: 'uniform-convergence-derivatives',
        description: 'Conditions for interchanging limits and derivatives.',
      },
      {
        id: 17,
        title: 'Uniform Approximation by Polynomials',
        slug: 'uniform-approximation-polynomials',
        description: 'The Stone-Weierstrass theorem and polynomial approximation.',
      },
    ],
  },
  // ==========================================================================
  // PART 4: Chapter 15 - Power Series
  // ==========================================================================
  {
    id: 4,
    title: 'Power Series',
    slug: 'power-series',
    sections: [
      {
        id: 18,
        title: 'Formal Power Series',
        slug: 'formal-power-series',
        description: 'Algebraic operations on formal power series.',
      },
      {
        id: 19,
        title: 'Real Analytic Functions',
        slug: 'real-analytic-functions',
        description: 'Convergence of power series and real analytic functions.',
      },
      {
        id: 20,
        title: "Abel's Theorem",
        slug: 'abels-theorem',
        description: "Abel's theorem on power series at the boundary of convergence.",
      },
      {
        id: 21,
        title: 'Multiplication of Power Series',
        slug: 'multiplication-power-series',
        description: 'The Cauchy product and multiplication of convergent power series.',
      },
      {
        id: 22,
        title: 'The Exponential and Logarithm Functions',
        slug: 'exponential-logarithm',
        description: 'Power series definitions of exp and log, their properties.',
      },
      {
        id: 23,
        title: 'A Digression on Complex Numbers',
        slug: 'complex-numbers',
        description: 'Introduction to complex numbers and complex exponentials.',
      },
      {
        id: 24,
        title: 'Trigonometric Functions',
        slug: 'trigonometric-functions',
        description: 'Power series for sine and cosine, Euler formula.',
      },
    ],
  },
  // ==========================================================================
  // PART 5: Chapter 16 - Fourier Series
  // ==========================================================================
  {
    id: 5,
    title: 'Fourier Series',
    slug: 'fourier-series',
    sections: [
      {
        id: 25,
        title: 'Periodic Functions',
        slug: 'periodic-functions',
        description: 'Periodic functions and their basic properties.',
      },
      {
        id: 26,
        title: 'Inner Products on Periodic Functions',
        slug: 'inner-products-periodic',
        description: 'The L2 inner product and orthogonality of trigonometric functions.',
      },
      {
        id: 27,
        title: 'Trigonometric Polynomials',
        slug: 'trigonometric-polynomials',
        description: 'Trigonometric polynomials and Fourier coefficients.',
      },
      {
        id: 28,
        title: 'Periodic Convolutions',
        slug: 'periodic-convolutions',
        description: 'Convolution of periodic functions and its properties.',
      },
      {
        id: 29,
        title: 'The Fourier and Plancherel Theorems',
        slug: 'fourier-plancherel-theorems',
        description: 'Convergence of Fourier series and Parseval identity.',
      },
    ],
  },
  // ==========================================================================
  // PART 6: Chapter 17 - Several Variable Differential Calculus
  // ==========================================================================
  {
    id: 6,
    title: 'Several Variable Differential Calculus',
    slug: 'several-variable-calculus',
    sections: [
      {
        id: 30,
        title: 'Linear Transformations',
        slug: 'linear-transformations',
        description: 'Linear maps, matrices, and operator norms.',
      },
      {
        id: 31,
        title: 'Derivatives in Several Variable Calculus',
        slug: 'derivatives-several-variables',
        description: 'The total derivative and differentiability in Rn.',
      },
      {
        id: 32,
        title: 'Partial and Directional Derivatives',
        slug: 'partial-directional-derivatives',
        description: 'Partial derivatives, gradients, and directional derivatives.',
      },
      {
        id: 33,
        title: 'The Several Variable Calculus Chain Rule',
        slug: 'chain-rule-several-variables',
        description: 'The chain rule for functions of several variables.',
      },
      {
        id: 34,
        title: "Double Derivatives and Clairaut's Theorem",
        slug: 'double-derivatives-clairaut',
        description: 'Higher-order derivatives and symmetry of mixed partials.',
      },
      {
        id: 35,
        title: 'The Contraction Mapping Theorem',
        slug: 'contraction-mapping',
        description: 'Fixed point theorem for contraction mappings.',
      },
      {
        id: 36,
        title: 'The Inverse Function Theorem',
        slug: 'inverse-function-theorem',
        description: 'Local invertibility of differentiable functions.',
      },
      {
        id: 37,
        title: 'The Implicit Function Theorem',
        slug: 'implicit-function-theorem',
        description: 'Solving equations implicitly via the implicit function theorem.',
      },
    ],
  },
  // ==========================================================================
  // PART 7: Chapter 18 - Lebesgue Measure
  // ==========================================================================
  {
    id: 7,
    title: 'Lebesgue Measure',
    slug: 'lebesgue-measure',
    sections: [
      {
        id: 38,
        title: 'The Goal: Lebesgue Measure',
        slug: 'goal-lebesgue-measure',
        description: 'Motivation and desired properties of Lebesgue measure.',
      },
      {
        id: 39,
        title: 'First Attempt: Outer Measure',
        slug: 'outer-measure',
        description: 'Definition and properties of outer measure.',
      },
      {
        id: 40,
        title: 'Outer Measure is Not Additive',
        slug: 'outer-measure-not-additive',
        description: 'Non-measurable sets and failure of countable additivity.',
      },
      {
        id: 41,
        title: 'Measurable Sets',
        slug: 'measurable-sets',
        description: 'The Carathéodory criterion and Lebesgue measurable sets.',
      },
      {
        id: 42,
        title: 'Measurable Functions',
        slug: 'measurable-functions',
        description: 'Definition and properties of measurable functions.',
      },
    ],
  },
  // ==========================================================================
  // PART 8: Chapter 19 - Lebesgue Integration
  // ==========================================================================
  {
    id: 8,
    title: 'Lebesgue Integration',
    slug: 'lebesgue-integration',
    sections: [
      {
        id: 43,
        title: 'Simple Functions',
        slug: 'simple-functions',
        description: 'Simple functions and their integrals.',
      },
      {
        id: 44,
        title: 'Integration of Non-negative Measurable Functions',
        slug: 'integration-nonnegative',
        description: 'The Lebesgue integral for non-negative functions, monotone convergence.',
      },
      {
        id: 45,
        title: 'Integration of Absolutely Integrable Functions',
        slug: 'integration-absolutely-integrable',
        description: 'The space L1 and dominated convergence theorem.',
      },
      {
        id: 46,
        title: 'Comparison with the Riemann Integral',
        slug: 'comparison-riemann',
        description: 'When Riemann and Lebesgue integrals agree.',
      },
      {
        id: 47,
        title: "Fubini's Theorem",
        slug: 'fubinis-theorem',
        description: 'Iterated integrals and Fubini-Tonelli theorems.',
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
