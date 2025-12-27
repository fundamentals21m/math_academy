// =============================================================================
// ISLR CURRICULUM STRUCTURE
// =============================================================================
// Introduction to Statistical Learning (2nd Edition)
// James, Witten, Hastie, Tibshirani
// =============================================================================

/**
 * Individual section within a chapter
 */
export interface Section {
  id: number;
  title: string;
  slug: string;
  description: string;
}

/**
 * Chapter containing multiple sections
 */
export interface Part {
  id: number;
  title: string;
  slug: string;
  sections: Section[];
}

/**
 * Complete ISLR curriculum structure - 13 chapters, 62 sections
 */
export const curriculum: Part[] = [
  // ==========================================================================
  // Chapter 1: Introduction
  // ==========================================================================
  {
    id: 1,
    title: 'Introduction',
    slug: 'introduction',
    sections: [
      {
        id: 1,
        title: 'Overview of Statistical Learning',
        slug: 'overview',
        description: 'What is statistical learning? Applications in science, business, and medicine.',
      },
    ],
  },

  // ==========================================================================
  // Chapter 2: Statistical Learning
  // ==========================================================================
  {
    id: 2,
    title: 'Statistical Learning',
    slug: 'statistical-learning',
    sections: [
      {
        id: 2,
        title: 'What Is Statistical Learning?',
        slug: 'what-is-statistical-learning',
        description: 'The fundamental framework: inputs, outputs, and the function we seek to estimate.',
      },
      {
        id: 3,
        title: 'Assessing Model Accuracy',
        slug: 'assessing-model-accuracy',
        description: 'Measuring quality of fit, bias-variance tradeoff, and classification accuracy.',
      },
      {
        id: 4,
        title: 'Lab: Introduction to R',
        slug: 'lab-intro-to-r',
        description: 'Basic commands, graphics, indexing, loading data, and additional graphical tools.',
      },
      {
        id: 5,
        title: 'Exercises',
        slug: 'ch2-exercises',
        description: 'Conceptual and applied exercises for Chapter 2.',
      },
    ],
  },

  // ==========================================================================
  // Chapter 3: Linear Regression
  // ==========================================================================
  {
    id: 3,
    title: 'Linear Regression',
    slug: 'linear-regression',
    sections: [
      {
        id: 6,
        title: 'Simple Linear Regression',
        slug: 'simple-linear-regression',
        description: 'Estimating coefficients, assessing accuracy, and interpreting results.',
      },
      {
        id: 7,
        title: 'Multiple Linear Regression',
        slug: 'multiple-linear-regression',
        description: 'Extending to multiple predictors: estimation, interpretation, and inference.',
      },
      {
        id: 8,
        title: 'Other Considerations in Regression',
        slug: 'regression-considerations',
        description: 'Qualitative predictors, interactions, non-linear transformations, and potential problems.',
      },
      {
        id: 9,
        title: 'The Marketing Plan',
        slug: 'marketing-plan',
        description: 'A complete regression analysis case study using advertising data.',
      },
      {
        id: 10,
        title: 'Comparison with K-Nearest Neighbors',
        slug: 'knn-comparison',
        description: 'Contrasting parametric (linear regression) and non-parametric (KNN) approaches.',
      },
      {
        id: 11,
        title: 'Lab: Linear Regression',
        slug: 'lab-linear-regression',
        description: 'Hands-on regression analysis in R using Boston and Carseats datasets.',
      },
      {
        id: 12,
        title: 'Exercises',
        slug: 'ch3-exercises',
        description: 'Conceptual and applied exercises for Chapter 3.',
      },
    ],
  },

  // ==========================================================================
  // Chapter 4: Classification
  // ==========================================================================
  {
    id: 4,
    title: 'Classification',
    slug: 'classification',
    sections: [
      {
        id: 13,
        title: 'Overview of Classification',
        slug: 'classification-overview',
        description: 'The classification problem and why linear regression is not suitable.',
      },
      {
        id: 14,
        title: 'Logistic Regression',
        slug: 'logistic-regression',
        description: 'The logistic model, estimating coefficients, and making predictions.',
      },
      {
        id: 15,
        title: 'Generative Models for Classification',
        slug: 'generative-models',
        description: 'Linear Discriminant Analysis (LDA), Quadratic Discriminant Analysis (QDA), and Naive Bayes.',
      },
      {
        id: 16,
        title: 'Comparison of Classification Methods',
        slug: 'classification-comparison',
        description: 'When to use logistic regression, LDA, QDA, KNN, or Naive Bayes.',
      },
      {
        id: 17,
        title: 'Generalized Linear Models',
        slug: 'glm',
        description: 'Poisson regression and other GLM extensions for different response types.',
      },
      {
        id: 18,
        title: 'Lab: Classification Methods',
        slug: 'lab-classification',
        description: 'Stock market prediction using logistic regression, LDA, QDA, and KNN.',
      },
      {
        id: 19,
        title: 'Exercises',
        slug: 'ch4-exercises',
        description: 'Conceptual and applied exercises for Chapter 4.',
      },
    ],
  },

  // ==========================================================================
  // Chapter 5: Resampling Methods
  // ==========================================================================
  {
    id: 5,
    title: 'Resampling Methods',
    slug: 'resampling',
    sections: [
      {
        id: 20,
        title: 'Cross-Validation',
        slug: 'cross-validation',
        description: 'Validation set, LOOCV, and k-fold cross-validation for model assessment.',
      },
      {
        id: 21,
        title: 'The Bootstrap',
        slug: 'bootstrap',
        description: 'Estimating accuracy of parameter estimates and predictions.',
      },
      {
        id: 22,
        title: 'Lab: Resampling',
        slug: 'lab-resampling',
        description: 'Implementing cross-validation and bootstrap in R.',
      },
      {
        id: 23,
        title: 'Exercises',
        slug: 'ch5-exercises',
        description: 'Conceptual and applied exercises for Chapter 5.',
      },
    ],
  },

  // ==========================================================================
  // Chapter 6: Linear Model Selection and Regularization
  // ==========================================================================
  {
    id: 6,
    title: 'Linear Model Selection and Regularization',
    slug: 'model-selection',
    sections: [
      {
        id: 24,
        title: 'Subset Selection',
        slug: 'subset-selection',
        description: 'Best subset, forward stepwise, and backward stepwise selection.',
      },
      {
        id: 25,
        title: 'Shrinkage Methods',
        slug: 'shrinkage-methods',
        description: 'Ridge regression and the Lasso: regularization for better prediction.',
      },
      {
        id: 26,
        title: 'Dimension Reduction Methods',
        slug: 'dimension-reduction',
        description: 'Principal Components Regression (PCR) and Partial Least Squares (PLS).',
      },
      {
        id: 27,
        title: 'Considerations in High Dimensions',
        slug: 'high-dimensions',
        description: 'Challenges when p > n and interpreting results in high-dimensional settings.',
      },
      {
        id: 28,
        title: 'Lab: Model Selection',
        slug: 'lab-model-selection',
        description: 'Subset selection, ridge, lasso, and PCR in R.',
      },
      {
        id: 29,
        title: 'Exercises',
        slug: 'ch6-exercises',
        description: 'Conceptual and applied exercises for Chapter 6.',
      },
    ],
  },

  // ==========================================================================
  // Chapter 7: Moving Beyond Linearity
  // ==========================================================================
  {
    id: 7,
    title: 'Moving Beyond Linearity',
    slug: 'nonlinear',
    sections: [
      {
        id: 30,
        title: 'Polynomial and Step Functions',
        slug: 'polynomial-step',
        description: 'Extending linear models with polynomial terms and step functions.',
      },
      {
        id: 31,
        title: 'Splines',
        slug: 'splines',
        description: 'Piecewise polynomials, basis functions, and choosing knot locations.',
      },
      {
        id: 32,
        title: 'Smoothing Splines and Local Regression',
        slug: 'smoothing-local',
        description: 'Smoothing splines with tuning and local regression (loess).',
      },
      {
        id: 33,
        title: 'Generalized Additive Models',
        slug: 'gams',
        description: 'Combining flexible non-linear functions for multiple predictors.',
      },
      {
        id: 34,
        title: 'Lab: Non-linear Modeling',
        slug: 'lab-nonlinear',
        description: 'Polynomial regression, splines, and GAMs in R.',
      },
      {
        id: 35,
        title: 'Exercises',
        slug: 'ch7-exercises',
        description: 'Conceptual and applied exercises for Chapter 7.',
      },
    ],
  },

  // ==========================================================================
  // Chapter 8: Tree-Based Methods
  // ==========================================================================
  {
    id: 8,
    title: 'Tree-Based Methods',
    slug: 'trees',
    sections: [
      {
        id: 36,
        title: 'The Basics of Decision Trees',
        slug: 'decision-trees',
        description: 'Regression and classification trees: fitting, pruning, and interpretation.',
      },
      {
        id: 37,
        title: 'Bagging, Random Forests, Boosting, and BART',
        slug: 'ensemble-methods',
        description: 'Ensemble methods that combine multiple trees for improved prediction.',
      },
      {
        id: 38,
        title: 'Lab: Decision Trees',
        slug: 'lab-trees',
        description: 'Fitting trees, random forests, and boosting in R.',
      },
      {
        id: 39,
        title: 'Exercises',
        slug: 'ch8-exercises',
        description: 'Conceptual and applied exercises for Chapter 8.',
      },
    ],
  },

  // ==========================================================================
  // Chapter 9: Support Vector Machines
  // ==========================================================================
  {
    id: 9,
    title: 'Support Vector Machines',
    slug: 'svm',
    sections: [
      {
        id: 40,
        title: 'Maximal Margin and Support Vector Classifiers',
        slug: 'svm-classifiers',
        description: 'Hyperplanes, maximal margin classifiers, and the soft margin extension.',
      },
      {
        id: 41,
        title: 'Support Vector Machines',
        slug: 'svm',
        description: 'Using kernels to handle non-linear decision boundaries.',
      },
      {
        id: 42,
        title: 'SVMs with Multiple Classes',
        slug: 'svm-multiclass',
        description: 'One-versus-one and one-versus-all classification strategies.',
      },
      {
        id: 43,
        title: 'Lab: Support Vector Machines',
        slug: 'lab-svm',
        description: 'Fitting SVMs with linear, polynomial, and radial kernels in R.',
      },
      {
        id: 44,
        title: 'Exercises',
        slug: 'ch9-exercises',
        description: 'Conceptual and applied exercises for Chapter 9.',
      },
    ],
  },

  // ==========================================================================
  // Chapter 10: Deep Learning
  // ==========================================================================
  {
    id: 10,
    title: 'Deep Learning',
    slug: 'deep-learning',
    sections: [
      {
        id: 45,
        title: 'Single and Multilayer Neural Networks',
        slug: 'neural-networks',
        description: 'Perceptrons, hidden layers, activation functions, and network architecture.',
      },
      {
        id: 46,
        title: 'Convolutional Neural Networks',
        slug: 'cnn',
        description: 'Convolution, pooling, and architectures for image classification.',
      },
      {
        id: 47,
        title: 'Recurrent Neural Networks',
        slug: 'rnn',
        description: 'Sequence modeling, LSTMs, and applications to time series and text.',
      },
      {
        id: 48,
        title: 'Fitting Neural Networks',
        slug: 'fitting-nn',
        description: 'Backpropagation, regularization, dropout, and training considerations.',
      },
      {
        id: 49,
        title: 'Lab: Deep Learning',
        slug: 'lab-deep-learning',
        description: 'Building neural networks using Keras in R.',
      },
      {
        id: 50,
        title: 'Exercises',
        slug: 'ch10-exercises',
        description: 'Conceptual and applied exercises for Chapter 10.',
      },
    ],
  },

  // ==========================================================================
  // Chapter 11: Survival Analysis
  // ==========================================================================
  {
    id: 11,
    title: 'Survival Analysis',
    slug: 'survival',
    sections: [
      {
        id: 51,
        title: 'Survival and Censoring',
        slug: 'survival-censoring',
        description: 'Survival times, censoring, Kaplan-Meier curves, and the log-rank test.',
      },
      {
        id: 52,
        title: 'Regression Models with Survival Response',
        slug: 'survival-regression',
        description: 'The Cox proportional hazards model and extensions.',
      },
      {
        id: 53,
        title: 'Lab: Survival Analysis',
        slug: 'lab-survival',
        description: 'Kaplan-Meier estimation and Cox regression in R.',
      },
      {
        id: 54,
        title: 'Exercises',
        slug: 'ch11-exercises',
        description: 'Conceptual and applied exercises for Chapter 11.',
      },
    ],
  },

  // ==========================================================================
  // Chapter 12: Unsupervised Learning
  // ==========================================================================
  {
    id: 12,
    title: 'Unsupervised Learning',
    slug: 'unsupervised',
    sections: [
      {
        id: 55,
        title: 'Principal Components Analysis',
        slug: 'pca',
        description: 'Dimensionality reduction, loadings, scores, and variance explained.',
      },
      {
        id: 56,
        title: 'Clustering Methods',
        slug: 'clustering',
        description: 'K-means clustering and hierarchical clustering with dendrograms.',
      },
      {
        id: 57,
        title: 'Lab: Unsupervised Learning',
        slug: 'lab-unsupervised',
        description: 'PCA and clustering analysis in R.',
      },
      {
        id: 58,
        title: 'Exercises',
        slug: 'ch12-exercises',
        description: 'Conceptual and applied exercises for Chapter 12.',
      },
    ],
  },

  // ==========================================================================
  // Chapter 13: Multiple Testing
  // ==========================================================================
  {
    id: 13,
    title: 'Multiple Testing',
    slug: 'multiple-testing',
    sections: [
      {
        id: 59,
        title: 'Hypothesis Testing Review',
        slug: 'hypothesis-testing',
        description: 'Type I and Type II errors, p-values, and the challenge of multiple comparisons.',
      },
      {
        id: 60,
        title: 'Family-Wise Error Rate and False Discovery Rate',
        slug: 'fwer-fdr',
        description: 'Bonferroni correction, Holm procedure, and Benjamini-Hochberg for FDR control.',
      },
      {
        id: 61,
        title: 'Lab: Multiple Testing',
        slug: 'lab-multiple-testing',
        description: 'Controlling error rates in multiple hypothesis tests.',
      },
      {
        id: 62,
        title: 'Exercises',
        slug: 'ch13-exercises',
        description: 'Conceptual and applied exercises for Chapter 13.',
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
 * Get part (chapter) containing a section
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

/**
 * Get chapter number for a section
 */
export function getChapterNumber(sectionId: number): number | undefined {
  const part = getPartBySectionId(sectionId);
  return part?.id;
}
