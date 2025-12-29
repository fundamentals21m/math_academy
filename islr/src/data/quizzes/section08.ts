import type { QuizQuestion } from './types';

export const section08Quiz: QuizQuestion[] = [
  // Easy questions
  {
    id: 's08-e01',
    type: 'multiple-choice',
    question: 'A dummy variable is used to represent:',
    options: [
      'Missing values',
      'Qualitative (categorical) predictors',
      'The error term',
      'The intercept'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Dummy variables (indicator variables) encode categorical predictors as 0/1 values for use in regression.',
  },
  {
    id: 's08-e02',
    type: 'multiple-choice',
    question: 'For a categorical variable with 4 levels, how many dummy variables are needed?',
    options: ['2', '3', '4', '5'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'With $k$ levels, we need $k-1$ dummy variables. One level serves as the baseline (intercept).',
  },
  {
    id: 's08-e03',
    type: 'multiple-choice',
    question: 'An interaction term in regression allows:',
    options: [
      'The intercept to vary',
      'The effect of one predictor to depend on another',
      'Non-linear transformations of Y',
      'Missing data imputation'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Interaction terms like $X_1 \\times X_2$ allow the effect of $X_1$ on $Y$ to change depending on the value of $X_2$.',
  },
  {
    id: 's08-e04',
    type: 'text',
    question: 'What do we call the situation when error variance is not constant? (one word)',
    correctAnswer: 'heteroscedasticity',
    difficulty: 'easy',
    explanation: 'Heteroscedasticity occurs when $\\text{Var}(\\epsilon_i)$ is not constant across observations.',
  },
  {
    id: 's08-e05',
    type: 'multiple-choice',
    question: 'A residual plot is used to detect:',
    options: [
      'The value of $R^2$',
      'Problems like non-linearity or heteroscedasticity',
      'The number of predictors',
      'The sample size'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Residual plots (residuals vs. fitted values) reveal patterns that indicate model violations.',
  },
  // Medium questions
  {
    id: 's08-m01',
    type: 'multiple-choice',
    question: 'In the model $Y = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + \\beta_3 X_1 X_2 + \\epsilon$, the effect of $X_1$ on $Y$ is:',
    options: [
      '$\\beta_1$',
      '$\\beta_3$',
      '$\\beta_1 + \\beta_3 X_2$',
      '$\\beta_1 + \\beta_2$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'With the interaction, the effect of $X_1$ depends on $X_2$: $\\frac{\\partial Y}{\\partial X_1} = \\beta_1 + \\beta_3 X_2$.',
  },
  {
    id: 's08-m02',
    type: 'multiple-choice',
    question: 'Polynomial regression $Y = \\beta_0 + \\beta_1 X + \\beta_2 X^2 + \\epsilon$ is:',
    options: [
      'A non-linear model',
      'A linear model (in the parameters)',
      'Only valid for binary outcomes',
      'Always overfits'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Despite modeling a curved relationship, the model is linear in the coefficients $\\beta_0, \\beta_1, \\beta_2$.',
  },
  {
    id: 's08-m03',
    type: 'multiple-choice',
    question: 'VIF (Variance Inflation Factor) measures:',
    options: [
      'Non-linearity in the data',
      'Collinearity among predictors',
      'The size of residuals',
      'Model accuracy'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'VIF quantifies how much the variance of a coefficient is inflated due to correlation with other predictors.',
  },
  {
    id: 's08-m04',
    type: 'multiple-choice',
    question: 'A funnel-shaped residual plot (residuals spread out as fitted values increase) indicates:',
    options: [
      'Non-linearity',
      'Heteroscedasticity',
      'Outliers',
      'Perfect fit'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A funnel shape means variance increases with the response level - classic heteroscedasticity.',
  },
  {
    id: 's08-m05',
    type: 'multiple-choice',
    question: 'The hierarchical principle says that if we include an interaction $X_1 X_2$, we should:',
    options: [
      'Remove the main effects $X_1$ and $X_2$',
      'Include the main effects $X_1$ and $X_2$',
      'Add higher-order terms like $X_1^2$',
      'Use a different response variable'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Main effects should be included even if not significant, because the interaction only makes sense in their context.',
  },
  // Hard questions
  {
    id: 's08-h01',
    type: 'multiple-choice',
    question: 'An observation with high leverage but small residual:',
    options: [
      'Has little effect on the fit',
      'Pulls the regression line toward itself',
      'Should always be removed',
      'Indicates model misspecification'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'High leverage points with small residuals fit well BECAUSE they pull the line toward themselves - they strongly influence the fit.',
  },
  {
    id: 's08-h02',
    type: 'multiple-choice',
    question: 'If VIF for $X_1$ is 10, approximately what proportion of $X_1$\'s variance is explained by other predictors?',
    options: [
      '10%',
      '50%',
      '90%',
      '99%'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'VIF = $\\frac{1}{1-R^2_{X_1|X_{-1}}}$. If VIF = 10, then $R^2_{X_1|X_{-1}} = 1 - 0.1 = 0.9$ (90%).',
  },
  {
    id: 's08-h03',
    type: 'multiple-choice',
    question: 'Studentized residuals greater than 3 in absolute value suggest:',
    options: [
      'Perfect predictions',
      'Potential outliers',
      'High leverage',
      'Collinearity'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Studentized residuals standardize residuals by their estimated standard deviation. Values beyond $\\pm 3$ are unusual.',
  },
  {
    id: 's08-h04',
    type: 'multiple-choice',
    question: 'To address heteroscedasticity, a common transformation of the response is:',
    options: [
      'Squaring Y',
      'Taking log(Y) or sqrt(Y)',
      'Standardizing Y',
      'Removing Y'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Log or square root transformations often stabilize variance, particularly when variance increases with the mean.',
  },
];
