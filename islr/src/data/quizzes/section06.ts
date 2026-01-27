import type { QuizQuestion } from './types';

export const section06Quiz: QuizQuestion[] = [
  // Easy questions
  {
    id: 's06-e01',
    type: 'multiple-choice',
    question: 'In simple linear regression $Y = \\beta_0 + \\beta_1 X + \\epsilon$, what does $\\beta_0$ represent?',
    options: ['The slope', 'The error', 'The prediction', 'The intercept'],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\beta_0$ is the intercept - the expected value of $Y$ when $X = 0$.',
  },
  {
    id: 's06-e02',
    type: 'multiple-choice',
    question: 'The least squares method minimizes:',
    options: [
      'The sum of squared residuals (RSS)',
      'The sum of residuals',
      'The variance of predictions',
      'The sum of absolute residuals'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Least squares finds coefficients that minimize RSS = $\\sum(y_i - \\hat{y}_i)^2$.',
  },
  {
    id: 's06-e03',
    type: 'multiple-choice',
    question: 'What does $R^2$ measure?',
    options: [
      'The number of predictors',
      'The proportion of variance explained by the model',
      'The slope of the regression line',
      'The intercept of the regression line'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$R^2 = 1 - \\frac{\\text{RSS}}{\\text{TSS}}$ measures how much of the total variance in $Y$ is explained by the model.',
  },
  {
    id: 's06-e04',
    type: 'text',
    question: 'What do we call the difference between the observed value and the predicted value? (one word)',
    correctAnswer: 'residual',
    difficulty: 'easy',
    explanation: 'The residual is $e_i = y_i - \\hat{y}_i$, the difference between observed and predicted values.',
  },
  {
    id: 's06-e05',
    type: 'multiple-choice',
    question: 'A slope coefficient $\\beta_1 = 0.05$ means:',
    options: [
      'Y is 5% of X',
      'The correlation is 0.05',
      'A one-unit increase in X is associated with a 0.05 increase in Y',
      'The model explains 5% of variance'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The slope tells us: for each one-unit increase in $X$, we expect $Y$ to increase by $\\beta_1 = 0.05$ units.',
  },
  // Medium questions
  {
    id: 's06-m01',
    type: 'multiple-choice',
    question: 'The null hypothesis $H_0: \\beta_1 = 0$ tests whether:',
    options: [
      'The intercept is zero',
      'The R-squared is zero',
      'The residuals are zero',
      'There is no relationship between X and Y'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If $\\beta_1 = 0$, then $X$ has no linear effect on $Y$ - there is no relationship.',
  },
  {
    id: 's06-m02',
    type: 'multiple-choice',
    question: 'A 95% confidence interval for $\\beta_1$ is approximately:',
    options: [
      '$\\hat{\\beta}_1 \\pm 2 \\cdot \\text{SE}(\\hat{\\beta}_1)$',
      '$\\hat{\\beta}_1 \\pm \\text{SE}(\\hat{\\beta}_1)$',
      '$\\hat{\\beta}_1 \\pm \\text{RSS}$',
      '$\\hat{\\beta}_1 \\pm 3 \\cdot \\text{SE}(\\hat{\\beta}_1)$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A 95% CI is approximately the estimate $\\pm$ 2 standard errors (more precisely, $\\pm$ 1.96 SE).',
  },
  {
    id: 's06-m03',
    type: 'numeric',
    question: 'If $R^2 = 0.64$, what percentage of the variance in Y is explained by X?',
    correctAnswer: 64,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$R^2 = 0.64$ means 64% of the variance in $Y$ is explained by the linear relationship with $X$.',
  },
  {
    id: 's06-m04',
    type: 'multiple-choice',
    question: 'The t-statistic for testing $\\beta_1 = 0$ is calculated as:',
    options: [
      '$\\hat{\\beta}_1 \\times \\text{SE}(\\hat{\\beta}_1)$',
      '$\\hat{\\beta}_1 / \\text{SE}(\\hat{\\beta}_1)$',
      '$\\text{SE}(\\hat{\\beta}_1) / \\hat{\\beta}_1$',
      '$\\hat{\\beta}_1 - \\text{SE}(\\hat{\\beta}_1)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$t = \\frac{\\hat{\\beta}_1 - 0}{\\text{SE}(\\hat{\\beta}_1)} = \\frac{\\hat{\\beta}_1}{\\text{SE}(\\hat{\\beta}_1)}$',
  },
  {
    id: 's06-m05',
    type: 'multiple-choice',
    question: 'RSE (Residual Standard Error) estimates:',
    options: [
      'The standard deviation of $\\beta_1$',
      'The standard deviation of X',
      'The standard deviation of the error term $\\epsilon$',
      'The standard deviation of Y'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'RSE = $\\sqrt{\\frac{\\text{RSS}}{n-2}}$ estimates $\\sigma$, the standard deviation of the error term.',
  },
  // Hard questions
  {
    id: 's06-h01',
    type: 'multiple-choice',
    question: 'In simple linear regression, $R^2 = r^2$ where $r$ is:',
    options: [
      'The regression coefficient',
      'The residual',
      'The standard error',
      'The correlation between X and Y'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'In simple linear regression (one predictor), $R^2$ equals the square of the correlation coefficient between $X$ and $Y$.',
  },
  {
    id: 's06-h02',
    type: 'multiple-choice',
    question: 'A p-value of 0.001 for $\\beta_1$ means:',
    options: [
      'The probability of seeing such extreme results if $\\beta_1 = 0$ is 0.001',
      'The probability that $\\beta_1 = 0$ is 0.001',
      'We are 0.1% confident in our result',
      'The effect size is 0.001'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The p-value is the probability of observing a t-statistic this extreme (or more) if the null hypothesis ($\\beta_1 = 0$) were true.',
  },
  {
    id: 's06-h03',
    type: 'multiple-choice',
    question: 'The formula $\\hat{\\beta}_1 = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum(x_i - \\bar{x})^2}$ shows that $\\hat{\\beta}_1$:',
    options: [
      'Depends only on $Y$ values',
      'Is a weighted sum of the $y_i$ values',
      'Depends only on $X$ values',
      'Always equals the correlation'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The numerator involves products of deviations. This can be rewritten to show $\\hat{\\beta}_1$ is a linear combination of the $y_i$.',
  },
  {
    id: 's06-h04',
    type: 'numeric',
    question: 'If TSS = 1000 and RSS = 200, what is $R^2$? (Enter as a decimal)',
    correctAnswer: 0.8,
    numericRange: { min: 0, max: 1, precision: 2 },
    difficulty: 'hard',
    explanation: '$R^2 = 1 - \\frac{\\text{RSS}}{\\text{TSS}} = 1 - \\frac{200}{1000} = 1 - 0.2 = 0.8$',
  },
];
