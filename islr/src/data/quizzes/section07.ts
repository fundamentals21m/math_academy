import type { QuizQuestion } from './types';

export const section07Quiz: QuizQuestion[] = [
  // Easy questions
  {
    id: 's07-e01',
    type: 'multiple-choice',
    question: 'Multiple linear regression extends simple linear regression by:',
    options: [
      'Using non-linear functions',
      'Including multiple predictor variables',
      'Fitting multiple separate models',
      'Removing the intercept'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Multiple regression uses multiple predictors: $Y = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + \\cdots + \\beta_p X_p + \\epsilon$',
  },
  {
    id: 's07-e02',
    type: 'multiple-choice',
    question: 'In multiple regression, $\\beta_j$ represents the effect of $X_j$ on $Y$:',
    options: [
      'Ignoring all other predictors',
      'Holding all other predictors constant',
      'When all other predictors are zero',
      'Only when $X_j$ is large'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Each coefficient represents the average change in $Y$ for a one-unit change in $X_j$, holding all other predictors fixed.',
  },
  {
    id: 's07-e03',
    type: 'multiple-choice',
    question: 'The F-statistic tests whether:',
    options: [
      'All coefficients equal each other',
      'At least one predictor is useful',
      'The intercept is zero',
      'R-squared equals 1'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The F-test tests $H_0: \\beta_1 = \\beta_2 = \\cdots = \\beta_p = 0$ - whether at least one predictor has a non-zero effect.',
  },
  {
    id: 's07-e04',
    type: 'text',
    question: 'What happens to $R^2$ when we add more predictors to a model? (one word: increases/decreases/stays)',
    correctAnswer: 'increases',
    difficulty: 'easy',
    explanation: '$R^2$ always increases (or stays the same) when predictors are added, even if those predictors are not useful.',
  },
  {
    id: 's07-e05',
    type: 'multiple-choice',
    question: 'Variable selection refers to:',
    options: [
      'Choosing the best response variable',
      'Determining which predictors to include',
      'Selecting the training data',
      'Choosing between regression and classification'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Variable selection helps identify which of the $p$ predictors are truly associated with the response.',
  },
  // Medium questions
  {
    id: 's07-m01',
    type: 'multiple-choice',
    question: 'With $p = 10$ predictors, how many possible models can be formed using subsets?',
    options: [
      '10',
      '100',
      '1024',
      '1000'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Each predictor can be included or excluded: $2^{10} = 1024$ possible models.',
  },
  {
    id: 's07-m02',
    type: 'multiple-choice',
    question: 'Why can a predictor be significant in simple regression but not in multiple regression?',
    options: [
      'Simple regression is always wrong',
      'The predictor is correlated with other predictors',
      'Multiple regression has fewer degrees of freedom',
      'The response variable changed'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Correlation among predictors means one predictor can "borrow" the effect of another in simple regression.',
  },
  {
    id: 's07-m03',
    type: 'multiple-choice',
    question: 'Adjusted $R^2$ differs from $R^2$ because it:',
    options: [
      'Is always larger',
      'Penalizes for adding predictors',
      'Uses a different formula entirely',
      'Only applies to simple regression'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Adjusted $R^2$ penalizes model complexity, so it can decrease when uninformative predictors are added.',
  },
  {
    id: 's07-m04',
    type: 'multiple-choice',
    question: 'Forward selection starts by:',
    options: [
      'Including all predictors and removing one at a time',
      'Including no predictors and adding one at a time',
      'Randomly selecting predictors',
      'Testing all possible subsets'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Forward selection starts with no predictors (just intercept) and adds the most significant one at each step.',
  },
  {
    id: 's07-m05',
    type: 'numeric',
    question: 'In the F-statistic formula $F = \\frac{(\\text{TSS} - \\text{RSS})/p}{\\text{RSS}/(n-p-1)}$, if TSS = 1000, RSS = 400, $p = 3$, and $n = 100$, what is F? (Round to nearest integer)',
    correctAnswer: 48,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$F = \\frac{(1000-400)/3}{400/(100-3-1)} = \\frac{600/3}{400/96} = \\frac{200}{4.17} \\approx 48$',
  },
  // Hard questions
  {
    id: 's07-h01',
    type: 'multiple-choice',
    question: 'When predictors are highly correlated (collinear), which is true?',
    options: [
      'R-squared will be low',
      'Individual coefficient p-values may be high even if F-test is significant',
      'The model cannot be fit',
      'All coefficients will be positive'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Collinearity inflates standard errors of individual coefficients, making them appear non-significant even when the predictors together are useful.',
  },
  {
    id: 's07-h02',
    type: 'multiple-choice',
    question: 'Why shouldn\'t we rely solely on individual t-tests when $p$ is large?',
    options: [
      'T-tests are only valid for small $p$',
      'Some predictors will appear significant by chance alone',
      'T-tests require normally distributed data',
      'The degrees of freedom are wrong'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'With many predictors, about 5% will have p-values below 0.05 by chance. The F-test avoids this multiple testing problem.',
  },
  {
    id: 's07-h03',
    type: 'multiple-choice',
    question: 'Backward selection is problematic when:',
    options: [
      '$n$ is large',
      '$p > n$',
      '$R^2$ is high',
      'The F-statistic is significant'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Backward selection starts with all predictors included. If $p > n$, we cannot fit the full model to start with.',
  },
];
