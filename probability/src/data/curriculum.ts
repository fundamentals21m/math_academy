// =============================================================================
// CURRICULUM STRUCTURE - A First Course in Probability (Sheldon Ross, 9th Ed)
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
 * Complete curriculum structure - 10 chapters, 66 sections
 */
export const curriculum: Part[] = [
  // Chapter 1: Combinatorial Analysis
  {
    id: 1,
    title: 'Chapter 1: Combinatorial Analysis',
    slug: 'combinatorial-analysis',
    sections: [
      { id: 1, title: '1.1 Introduction', slug: 'introduction', description: 'Introduction to combinatorial analysis and counting.' },
      { id: 2, title: '1.2 The Basic Principle of Counting', slug: 'basic-counting', description: 'The fundamental counting principle for sequential events.' },
      { id: 3, title: '1.3 Permutations', slug: 'permutations', description: 'Ordered arrangements of objects.' },
      { id: 4, title: '1.4 Combinations', slug: 'combinations', description: 'Unordered selections of objects and binomial coefficients.' },
      { id: 5, title: '1.5 Multinomial Coefficients', slug: 'multinomial-coefficients', description: 'Generalizing combinations to multiple groups.' },
      { id: 6, title: '1.6 The Number of Integer Solutions of Equations', slug: 'integer-solutions', description: 'Counting solutions using stars and bars.' },
    ],
  },
  // Chapter 2: Axioms of Probability
  {
    id: 2,
    title: 'Chapter 2: Axioms of Probability',
    slug: 'axioms-of-probability',
    sections: [
      { id: 7, title: '2.1 Introduction', slug: 'probability-intro', description: 'Introduction to probability theory.' },
      { id: 8, title: '2.2 Sample Space and Events', slug: 'sample-space-events', description: 'Defining experiments, outcomes, and events.' },
      { id: 9, title: '2.3 Axioms of Probability', slug: 'probability-axioms', description: 'The three fundamental axioms of probability.' },
      { id: 10, title: '2.4 Some Simple Propositions', slug: 'simple-propositions', description: 'Basic properties derived from the axioms.' },
      { id: 11, title: '2.5 Sample Spaces Having Equally Likely Outcomes', slug: 'equally-likely', description: 'Classical probability with uniform sample spaces.' },
      { id: 12, title: '2.6 Probability as a Continuous Set Function', slug: 'continuous-set-function', description: 'Continuity properties of probability measures.' },
      { id: 13, title: '2.7 Probability as a Measure of Belief', slug: 'measure-of-belief', description: 'Subjective interpretation of probability.' },
    ],
  },
  // Chapter 3: Conditional Probability and Independence
  {
    id: 3,
    title: 'Chapter 3: Conditional Probability and Independence',
    slug: 'conditional-probability',
    sections: [
      { id: 14, title: '3.1 Introduction', slug: 'conditional-intro', description: 'Introduction to conditional probability.' },
      { id: 15, title: '3.2 Conditional Probabilities', slug: 'conditional-probabilities', description: 'Definition and computation of conditional probability.' },
      { id: 16, title: '3.3 Bayes\'s Formula', slug: 'bayes-formula', description: 'Bayes\' theorem and its applications.' },
      { id: 17, title: '3.4 Independent Events', slug: 'independent-events', description: 'Definition and properties of independent events.' },
      { id: 18, title: '3.5 P(·|F) Is a Probability', slug: 'conditional-is-probability', description: 'Conditional probability as a probability measure.' },
    ],
  },
  // Chapter 4: Random Variables
  {
    id: 4,
    title: 'Chapter 4: Random Variables',
    slug: 'random-variables',
    sections: [
      { id: 19, title: '4.1 Random Variables', slug: 'random-variables-def', description: 'Definition and types of random variables.' },
      { id: 20, title: '4.2 Discrete Random Variables', slug: 'discrete-random-variables', description: 'Probability mass functions and discrete distributions.' },
      { id: 21, title: '4.3 Expected Value', slug: 'expected-value', description: 'Definition and properties of expectation.' },
      { id: 22, title: '4.4 Expectation of a Function of a Random Variable', slug: 'expectation-function', description: 'Computing expectations of transformed variables.' },
      { id: 23, title: '4.5 Variance', slug: 'variance', description: 'Measuring spread with variance and standard deviation.' },
      { id: 24, title: '4.6 The Bernoulli and Binomial Random Variables', slug: 'bernoulli-binomial', description: 'Bernoulli trials and binomial distribution.' },
      { id: 25, title: '4.7 The Poisson Random Variable', slug: 'poisson', description: 'Poisson distribution and its applications.' },
      { id: 26, title: '4.8 Other Discrete Probability Distributions', slug: 'other-discrete', description: 'Geometric, negative binomial, and hypergeometric distributions.' },
      { id: 27, title: '4.9 Expected Value of Sums of Random Variables', slug: 'expected-value-sums', description: 'Linearity of expectation.' },
      { id: 28, title: '4.10 Properties of the Cumulative Distribution Function', slug: 'cdf-properties', description: 'Properties and uses of the CDF.' },
    ],
  },
  // Chapter 5: Continuous Random Variables
  {
    id: 5,
    title: 'Chapter 5: Continuous Random Variables',
    slug: 'continuous-random-variables',
    sections: [
      { id: 29, title: '5.1 Introduction', slug: 'continuous-intro', description: 'Introduction to continuous random variables.' },
      { id: 30, title: '5.2 Expectation and Variance of Continuous Random Variables', slug: 'continuous-expectation', description: 'Computing expectations with integrals.' },
      { id: 31, title: '5.3 The Uniform Random Variable', slug: 'uniform', description: 'The uniform distribution on an interval.' },
      { id: 32, title: '5.4 Normal Random Variables', slug: 'normal', description: 'The Gaussian distribution and its properties.' },
      { id: 33, title: '5.5 Exponential Random Variables', slug: 'exponential', description: 'Exponential distribution and memoryless property.' },
      { id: 34, title: '5.6 Other Continuous Distributions', slug: 'other-continuous', description: 'Gamma, Weibull, Cauchy, Beta, and other distributions.' },
      { id: 35, title: '5.7 The Distribution of a Function of a Random Variable', slug: 'function-of-rv', description: 'Transformations of random variables.' },
    ],
  },
  // Chapter 6: Jointly Distributed Random Variables
  {
    id: 6,
    title: 'Chapter 6: Jointly Distributed Random Variables',
    slug: 'jointly-distributed',
    sections: [
      { id: 36, title: '6.1 Joint Distribution Functions', slug: 'joint-distribution', description: 'Joint CDFs and PDFs for multiple variables.' },
      { id: 37, title: '6.2 Independent Random Variables', slug: 'independent-rvs', description: 'Independence of random variables.' },
      { id: 38, title: '6.3 Sums of Independent Random Variables', slug: 'sums-independent', description: 'Convolutions and distributions of sums.' },
      { id: 39, title: '6.4 Conditional Distributions: Discrete Case', slug: 'conditional-discrete', description: 'Conditional PMFs.' },
      { id: 40, title: '6.5 Conditional Distributions: Continuous Case', slug: 'conditional-continuous', description: 'Conditional PDFs.' },
      { id: 41, title: '6.6 Order Statistics', slug: 'order-statistics', description: 'Distributions of order statistics.' },
      { id: 42, title: '6.7 Joint Probability Distribution of Functions of Random Variables', slug: 'joint-functions', description: 'Jacobian transformations.' },
      { id: 43, title: '6.8 Exchangeable Random Variables', slug: 'exchangeable', description: 'Exchangeability and de Finetti\'s theorem.' },
    ],
  },
  // Chapter 7: Properties of Expectation
  {
    id: 7,
    title: 'Chapter 7: Properties of Expectation',
    slug: 'properties-of-expectation',
    sections: [
      { id: 44, title: '7.1 Introduction', slug: 'expectation-intro', description: 'Overview of expectation properties.' },
      { id: 45, title: '7.2 Expectation of Sums of Random Variables', slug: 'expectation-sums', description: 'Expectations of sums for dependent variables.' },
      { id: 46, title: '7.3 Moments of the Number of Events that Occur', slug: 'moments-events', description: 'Indicator random variables.' },
      { id: 47, title: '7.4 Covariance, Variance of Sums, and Correlations', slug: 'covariance-correlation', description: 'Covariance and correlation coefficients.' },
      { id: 48, title: '7.5 Conditional Expectation', slug: 'conditional-expectation', description: 'Conditional expectations and their properties.' },
      { id: 49, title: '7.6 Conditional Expectation and Prediction', slug: 'prediction', description: 'Best predictors and regression.' },
      { id: 50, title: '7.7 Moment Generating Functions', slug: 'mgf', description: 'MGFs and their applications.' },
      { id: 51, title: '7.8 Additional Properties of Normal Random Variables', slug: 'normal-properties', description: 'Multivariate normal distribution.' },
      { id: 52, title: '7.9 General Definition of Expectation', slug: 'general-expectation', description: 'Expectation via Lebesgue integration.' },
    ],
  },
  // Chapter 8: Limit Theorems
  {
    id: 8,
    title: 'Chapter 8: Limit Theorems',
    slug: 'limit-theorems',
    sections: [
      { id: 53, title: '8.1 Introduction', slug: 'limits-intro', description: 'Overview of limit theorems in probability.' },
      { id: 54, title: '8.2 Chebyshev\'s Inequality and the Weak Law of Large Numbers', slug: 'weak-law', description: 'Chebyshev\'s inequality and WLLN.' },
      { id: 55, title: '8.3 The Central Limit Theorem', slug: 'clt', description: 'The central limit theorem and applications.' },
      { id: 56, title: '8.4 The Strong Law of Large Numbers', slug: 'strong-law', description: 'Almost sure convergence and SLLN.' },
      { id: 57, title: '8.5 Other Inequalities', slug: 'other-inequalities', description: 'Chernoff bounds and related inequalities.' },
      { id: 58, title: '8.6 Bounding the Error Probability', slug: 'error-bounds', description: 'Poisson approximation error bounds.' },
    ],
  },
  // Chapter 9: Additional Topics in Probability
  {
    id: 9,
    title: 'Chapter 9: Additional Topics in Probability',
    slug: 'additional-topics',
    sections: [
      { id: 59, title: '9.1 The Poisson Process', slug: 'poisson-process', description: 'Definition and properties of Poisson processes.' },
      { id: 60, title: '9.2 Markov Chains', slug: 'markov-chains', description: 'Discrete-time Markov chains.' },
      { id: 61, title: '9.3 Surprise, Uncertainty, and Entropy', slug: 'entropy', description: 'Information theory and entropy.' },
      { id: 62, title: '9.4 Coding Theory and Entropy', slug: 'coding-theory', description: 'Shannon\'s coding theorems.' },
    ],
  },
  // Chapter 10: Simulation
  {
    id: 10,
    title: 'Chapter 10: Simulation',
    slug: 'simulation',
    sections: [
      { id: 63, title: '10.1 Introduction', slug: 'simulation-intro', description: 'Introduction to Monte Carlo simulation.' },
      { id: 64, title: '10.2 General Techniques for Simulating Continuous Random Variables', slug: 'simulating-continuous', description: 'Inverse transform and rejection methods.' },
      { id: 65, title: '10.3 Simulating from Discrete Distributions', slug: 'simulating-discrete', description: 'Simulating discrete random variables.' },
      { id: 66, title: '10.4 Variance Reduction Techniques', slug: 'variance-reduction', description: 'Antithetic variables and control variates.' },
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
