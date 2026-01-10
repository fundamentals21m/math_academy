// =============================================================================
// CURRICULUM STRUCTURE - Principles of Mathematical Analysis (Rudin)
// =============================================================================
// Based on "Baby Rudin" Third Edition (1976) by Walter Rudin
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
    title: 'The Real and Complex Number Systems',
    slug: 'real-complex-numbers',
    sections: [
      { id: 0, title: 'Introduction', slug: 'introduction', description: 'Motivation for a rigorous foundation of analysis and the inadequacy of rational numbers' },
      { id: 1, title: 'Ordered Sets', slug: 'ordered-sets', description: 'Partial and total orders, upper/lower bounds, supremum, infimum, and the least upper bound property' },
      { id: 2, title: 'Fields', slug: 'fields', description: 'Field axioms, properties of addition and multiplication, and basic algebraic identities' },
      { id: 3, title: 'The Real Field', slug: 'real-field', description: 'Construction of the reals as an ordered field with the least upper bound property' },
      { id: 4, title: 'The Extended Real Number System', slug: 'extended-reals', description: 'Adjoining +infinity and -infinity, conventions for arithmetic operations' },
      { id: 5, title: 'The Complex Field', slug: 'complex-field', description: 'Complex numbers as ordered pairs, algebraic operations, conjugates, and absolute value' },
      { id: 6, title: 'Euclidean Spaces', slug: 'euclidean-spaces', description: 'R^k as a vector space, inner products, norms, and the Schwarz inequality' },
      { id: 7, title: 'Appendix: Dedekind Cuts', slug: 'dedekind-cuts', description: 'Construction of real numbers via Dedekind cuts from the rationals' },
    ],
  },
  {
    id: 2,
    title: 'Basic Topology',
    slug: 'basic-topology',
    sections: [
      { id: 8, title: 'Finite, Countable, and Uncountable Sets', slug: 'countability', description: 'Cardinality, countable unions, Cantor diagonalization, and uncountability of the reals' },
      { id: 9, title: 'Metric Spaces', slug: 'metric-spaces', description: 'Distance functions, open balls, open and closed sets, neighborhoods, and limit points' },
      { id: 10, title: 'Compact Sets', slug: 'compact-sets', description: 'Open covers, compactness, the Heine-Borel theorem, and properties of compact sets' },
      { id: 11, title: 'Perfect Sets', slug: 'perfect-sets', description: 'Perfect sets, the Cantor set, and uncountability of perfect sets in R^k' },
      { id: 12, title: 'Connected Sets', slug: 'connected-sets', description: 'Separated sets, connected sets, and connected subsets of the real line' },
    ],
  },
  {
    id: 3,
    title: 'Numerical Sequences and Series',
    slug: 'sequences-series',
    sections: [
      { id: 13, title: 'Convergent Sequences', slug: 'convergent-sequences', description: 'Definition of limits, uniqueness, boundedness, and algebraic limit theorems' },
      { id: 14, title: 'Subsequences', slug: 'subsequences', description: 'Subsequential limits, Bolzano-Weierstrass theorem, and sequential compactness' },
      { id: 15, title: 'Cauchy Sequences', slug: 'cauchy-sequences', description: 'Cauchy criterion, completeness of R^k, and characterization of compact metric spaces' },
      { id: 16, title: 'Upper and Lower Limits', slug: 'limsup-liminf', description: 'Definitions of lim sup and lim inf, properties, and relation to convergence' },
      { id: 17, title: 'Some Special Sequences', slug: 'special-sequences', description: 'Limits involving n-th roots, exponentials, and other important sequences' },
      { id: 18, title: 'Series', slug: 'series', description: 'Partial sums, convergence of series, the Cauchy criterion, and basic examples' },
      { id: 19, title: 'Series of Nonnegative Terms', slug: 'nonnegative-series', description: 'Comparison tests, the condensation test, and the p-series' },
      { id: 20, title: 'The Number e', slug: 'number-e', description: 'Definition of e as a limit and series, irrationality of e' },
      { id: 21, title: 'The Root and Ratio Tests', slug: 'root-ratio-tests', description: 'Root test, ratio test, and their applications to power series' },
      { id: 22, title: 'Power Series', slug: 'power-series', description: 'Radius of convergence, convergence on boundary, and Hadamard formula' },
      { id: 23, title: 'Summation by Parts', slug: 'summation-by-parts', description: 'Abel summation formula and Dirichlet test for convergence' },
      { id: 24, title: 'Absolute Convergence', slug: 'absolute-convergence', description: 'Absolute vs conditional convergence, rearrangement stability' },
      { id: 25, title: 'Addition and Multiplication of Series', slug: 'series-operations', description: 'Cauchy product, Mertens theorem on series multiplication' },
      { id: 26, title: 'Rearrangements', slug: 'rearrangements', description: 'Riemann rearrangement theorem and conditionally convergent series' },
    ],
  },
  {
    id: 4,
    title: 'Continuity',
    slug: 'continuity',
    sections: [
      { id: 27, title: 'Limits of Functions', slug: 'function-limits', description: 'Epsilon-delta definition, sequential characterization, and uniqueness of limits' },
      { id: 28, title: 'Continuous Functions', slug: 'continuous-functions', description: 'Definition of continuity, algebraic operations, and compositions' },
      { id: 29, title: 'Continuity and Compactness', slug: 'continuity-compactness', description: 'Extreme value theorem, uniform continuity, and continuous images of compact sets' },
      { id: 30, title: 'Continuity and Connectedness', slug: 'continuity-connectedness', description: 'Intermediate value theorem and continuous images of connected sets' },
      { id: 31, title: 'Discontinuities', slug: 'discontinuities', description: 'Types of discontinuities: removable, jump, and essential' },
      { id: 32, title: 'Monotonic Functions', slug: 'monotonic-functions', description: 'Monotone functions have at most countably many discontinuities' },
      { id: 33, title: 'Infinite Limits and Limits at Infinity', slug: 'infinite-limits', description: 'Extended definitions for limits involving infinity' },
    ],
  },
  {
    id: 5,
    title: 'Differentiation',
    slug: 'differentiation',
    sections: [
      { id: 34, title: 'The Derivative of a Real Function', slug: 'derivative-definition', description: 'Definition of derivative, differentiability implies continuity, and algebraic rules' },
      { id: 35, title: 'Mean Value Theorems', slug: 'mean-value-theorems', description: 'Rolle theorem, mean value theorem, and generalized mean value theorem' },
      { id: 36, title: 'The Continuity of Derivatives', slug: 'derivative-continuity', description: 'Darboux theorem: derivatives have the intermediate value property' },
      { id: 37, title: "L'Hospital's Rule", slug: 'lhospitals-rule', description: "L'Hospital's rule for indeterminate forms 0/0 and infinity/infinity" },
      { id: 38, title: 'Derivatives of Higher Order', slug: 'higher-derivatives', description: 'Higher-order derivatives, smoothness classes, and notation' },
      { id: 39, title: "Taylor's Theorem", slug: 'taylors-theorem', description: "Taylor polynomials, remainder forms, and Taylor's theorem with Lagrange remainder" },
      { id: 40, title: 'Differentiation of Vector-valued Functions', slug: 'vector-differentiation', description: 'Componentwise differentiation, chain rule for vector functions' },
    ],
  },
  {
    id: 6,
    title: 'The Riemann-Stieltjes Integral',
    slug: 'riemann-stieltjes',
    sections: [
      { id: 41, title: 'Definition and Existence of the Integral', slug: 'integral-definition', description: 'Partitions, Riemann-Stieltjes sums, upper and lower integrals, integrability criteria' },
      { id: 42, title: 'Properties of the Integral', slug: 'integral-properties', description: 'Linearity, monotonicity, change of variable, and integration by parts' },
      { id: 43, title: 'Integration and Differentiation', slug: 'integration-differentiation', description: 'Fundamental theorem of calculus, differentiation under the integral' },
      { id: 44, title: 'Integration of Vector-valued Functions', slug: 'vector-integration', description: 'Componentwise integration and properties' },
      { id: 45, title: 'Rectifiable Curves', slug: 'rectifiable-curves', description: 'Arc length, rectifiable curves, and relation to bounded variation' },
    ],
  },
  {
    id: 7,
    title: 'Sequences and Series of Functions',
    slug: 'function-sequences',
    sections: [
      { id: 46, title: 'Discussion of Main Problem', slug: 'main-problem', description: 'When do limits commute with differentiation and integration?' },
      { id: 47, title: 'Uniform Convergence', slug: 'uniform-convergence', description: 'Pointwise vs uniform convergence, sup norm, and Weierstrass M-test' },
      { id: 48, title: 'Uniform Convergence and Continuity', slug: 'uniform-continuity', description: 'Uniform limits of continuous functions are continuous' },
      { id: 49, title: 'Uniform Convergence and Integration', slug: 'uniform-integration', description: 'Integration of uniformly convergent series term by term' },
      { id: 50, title: 'Uniform Convergence and Differentiation', slug: 'uniform-differentiation', description: 'Conditions for term-by-term differentiation of series' },
      { id: 51, title: 'Equicontinuous Families of Functions', slug: 'equicontinuity', description: 'Equicontinuity, Arzela-Ascoli theorem, and applications' },
      { id: 52, title: 'The Stone-Weierstrass Theorem', slug: 'stone-weierstrass', description: 'Weierstrass approximation theorem and Stone-Weierstrass generalization' },
    ],
  },
  {
    id: 8,
    title: 'Some Special Functions',
    slug: 'special-functions',
    sections: [
      { id: 53, title: 'Power Series', slug: 'power-series-functions', description: 'Differentiation and integration of power series, analytic functions' },
      { id: 54, title: 'The Exponential and Logarithmic Functions', slug: 'exp-log', description: 'Rigorous definition of exp, log, and their properties' },
      { id: 55, title: 'The Trigonometric Functions', slug: 'trig-functions', description: 'Rigorous definition of sine, cosine via power series, and periodicity' },
      { id: 56, title: 'The Algebraic Completeness of the Complex Field', slug: 'algebraic-completeness', description: 'Fundamental theorem of algebra via analytic methods' },
      { id: 57, title: 'Fourier Series', slug: 'fourier-series', description: 'Fourier coefficients, Parseval theorem, and convergence of Fourier series' },
      { id: 58, title: 'The Gamma Function', slug: 'gamma-function', description: 'Definition of Gamma function, functional equation, and properties' },
    ],
  },
  {
    id: 9,
    title: 'Functions of Several Variables',
    slug: 'several-variables',
    sections: [
      { id: 59, title: 'Linear Transformations', slug: 'linear-transformations', description: 'Linear maps between Euclidean spaces, norms, and operator norm' },
      { id: 60, title: 'Differentiation', slug: 'multivariable-differentiation', description: 'Total derivative, partial derivatives, Jacobian matrix, and chain rule' },
      { id: 61, title: 'The Contraction Principle', slug: 'contraction-principle', description: 'Banach fixed point theorem and applications' },
      { id: 62, title: 'The Inverse Function Theorem', slug: 'inverse-function-theorem', description: 'Local invertibility of continuously differentiable maps' },
      { id: 63, title: 'The Implicit Function Theorem', slug: 'implicit-function-theorem', description: 'Existence and smoothness of implicitly defined functions' },
      { id: 64, title: 'The Rank Theorem', slug: 'rank-theorem', description: 'Local canonical form for smooth maps of constant rank' },
      { id: 65, title: 'Determinants', slug: 'determinants', description: 'Multilinear, alternating functions and determinant properties' },
      { id: 66, title: 'Derivatives of Higher Order', slug: 'higher-order-derivatives', description: 'Higher-order partial derivatives and symmetry of mixed partials' },
      { id: 67, title: 'Differentiation of Integrals', slug: 'differentiation-integrals', description: 'Leibniz integral rule and differentiation under the integral sign' },
    ],
  },
  {
    id: 10,
    title: 'Integration of Differential Forms',
    slug: 'differential-forms',
    sections: [
      { id: 68, title: 'Integration', slug: 'integration-intro', description: 'Integration over rectangles and basic properties' },
      { id: 69, title: 'Primitive Mappings', slug: 'primitive-mappings', description: 'Primitive mappings and their role in change of variables' },
      { id: 70, title: 'Partitions of Unity', slug: 'partitions-unity', description: 'Smooth partitions of unity and their construction' },
      { id: 71, title: 'Change of Variables', slug: 'change-variables', description: 'Change of variables formula for multiple integrals' },
      { id: 72, title: 'Differential Forms', slug: 'differential-forms-intro', description: 'k-forms, wedge product, and exterior derivative' },
      { id: 73, title: 'Simplexes and Chains', slug: 'simplexes-chains', description: 'Simplices, chains, and boundaries in R^n' },
      { id: 74, title: "Stokes' Theorem", slug: 'stokes-theorem', description: "General Stokes' theorem for differential forms on chains" },
      { id: 75, title: 'Closed Forms and Exact Forms', slug: 'closed-exact-forms', description: 'Poincare lemma and cohomology' },
      { id: 76, title: 'Vector Analysis', slug: 'vector-analysis', description: 'Gradient, divergence, curl, and classical integral theorems' },
    ],
  },
  {
    id: 11,
    title: 'The Lebesgue Theory',
    slug: 'lebesgue-theory',
    sections: [
      { id: 77, title: 'Set Functions', slug: 'set-functions', description: 'Additive and countably additive set functions, outer measure' },
      { id: 78, title: 'Construction of the Lebesgue Measure', slug: 'lebesgue-measure', description: 'Construction of Lebesgue measure on R^k via outer measure' },
      { id: 79, title: 'Measure Spaces', slug: 'measure-spaces', description: 'Abstract measure spaces and sigma-algebras' },
      { id: 80, title: 'Measurable Functions', slug: 'measurable-functions', description: 'Definition and properties of measurable functions' },
      { id: 81, title: 'Simple Functions', slug: 'simple-functions', description: 'Simple functions and approximation of measurable functions' },
      { id: 82, title: 'Integration', slug: 'lebesgue-integration', description: 'Lebesgue integral, monotone convergence, and Fatou lemma' },
      { id: 83, title: 'Comparison with the Riemann Integral', slug: 'riemann-vs-lebesgue', description: 'When Riemann and Lebesgue integrals agree' },
      { id: 84, title: 'Integration of Complex Functions', slug: 'complex-integration', description: 'Lebesgue integration of complex-valued functions' },
      { id: 85, title: 'Functions of Class L^2', slug: 'l2-functions', description: 'L^2 spaces, inner product, completeness, and Riesz-Fischer theorem' },
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
