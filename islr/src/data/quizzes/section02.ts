import type { QuizQuestion } from './types';

export const section02Quiz: QuizQuestion[] = [
  // Easy questions
  {
    id: 's02-e01',
    type: 'multiple-choice',
    question: 'What type of error can potentially be reduced by using a better statistical model?',
    options: ['Irreducible error', 'Reducible error', 'Random error', 'Measurement error'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Reducible error arises because $\\hat{f}$ is not a perfect estimate for $f$. We can reduce this by using more appropriate methods or more data.',
  },
  {
    id: 's02-e02',
    type: 'multiple-choice',
    question: 'Parametric methods require us to:',
    options: [
      'Have very large datasets',
      'Avoid making any assumptions',
      'Use only non-linear models',
      'Assume a functional form for $f$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Parametric methods first assume a functional form (like linear), then estimate the parameters of that form from data.',
  },
  {
    id: 's02-e03',
    type: 'multiple-choice',
    question: 'In the linear model $f(X) = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2$, how many parameters need to be estimated?',
    options: ['1', '2', '3', '4'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'We need to estimate $\\beta_0$ (intercept), $\\beta_1$, and $\\beta_2$ - three parameters total.',
  },
  {
    id: 's02-e04',
    type: 'text',
    question: 'What type of methods make no explicit assumptions about the functional form of $f$? (one word, starts with "non")',
    correctAnswer: 'non-parametric',
    difficulty: 'easy',
    explanation: 'Non-parametric methods do not assume a specific form for $f$, instead seeking an estimate that fits the data flexibly.',
  },
  {
    id: 's02-e05',
    type: 'multiple-choice',
    question: 'Even with a perfect estimate of $f$, we cannot predict $Y$ perfectly because of:',
    options: ['Reducible error', 'Irreducible error', 'Training error', 'Model complexity'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Irreducible error from $\\epsilon$ cannot be reduced regardless of how well we estimate $f$, as it represents inherent randomness.',
  },
  // Medium questions
  {
    id: 's02-m01',
    type: 'multiple-choice',
    question: 'Which is an advantage of parametric over non-parametric methods?',
    options: [
      'They require fewer observations to estimate $f$',
      'They can fit any functional form',
      'They never make incorrect assumptions',
      'They always have lower bias'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Parametric methods reduce the problem to estimating a fixed number of parameters, requiring less data than non-parametric methods that must estimate the entire function.',
  },
  {
    id: 's02-m02',
    type: 'multiple-choice',
    question: 'A very flexible model typically has:',
    options: [
      'High bias, low variance',
      'Low bias, high variance',
      'High bias, high variance',
      'Low bias, low variance'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Flexible models can closely fit training data (low bias) but are sensitive to the specific data used (high variance).',
  },
  {
    id: 's02-m03',
    type: 'multiple-choice',
    question: 'Linear regression is less flexible than thin-plate splines. Which method is more interpretable?',
    options: ['Thin-plate splines', 'Linear regression', 'They are equally interpretable', 'It depends on the data'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'There is a trade-off between flexibility and interpretability. Linear regression, being less flexible, is more interpretable.',
  },
  {
    id: 's02-m04',
    type: 'multiple-choice',
    question: 'The expected prediction error can be decomposed into:',
    options: [
      'Training error + test error',
      'Bias + variance',
      'Bias squared + variance + irreducible error',
      'Reducible error only'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$E[(Y - \\hat{Y})^2] = [\\text{Bias}(\\hat{f})]^2 + \\text{Var}(\\hat{f}) + \\text{Var}(\\epsilon)$',
  },
  {
    id: 's02-m05',
    type: 'multiple-choice',
    question: 'If we primarily need to understand which predictors affect the response, we should prefer:',
    options: [
      'More flexible methods for better fit',
      'Deep neural networks',
      'Non-parametric methods',
      'Less flexible methods for better interpretability'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For inference (understanding relationships), interpretability is crucial. Less flexible methods like linear regression make it easier to understand predictor effects.',
  },
  // Hard questions
  {
    id: 's02-h01',
    type: 'multiple-choice',
    question: 'In parametric regression, assuming $f$ is linear when the true relationship is quadratic will result in:',
    options: [
      'Increased bias',
      'Increased variance',
      'Decreased irreducible error',
      'Better predictions'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Using an incorrect functional form (linear when true is quadratic) introduces bias - a systematic error that cannot be reduced by collecting more data.',
  },
  {
    id: 's02-h02',
    type: 'multiple-choice',
    question: 'Why might a less flexible method outperform a more flexible method even when the true $f$ is non-linear?',
    options: [
      'Less flexible methods always have lower error',
      'The reduction in variance may outweigh the increase in bias',
      'Non-linear relationships cannot be modeled',
      'Flexible methods always overfit'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The bias-variance trade-off means that sometimes accepting some bias (from a simpler model) is worth the reduction in variance, especially with limited data.',
  },
  {
    id: 's02-h03',
    type: 'multiple-choice',
    question: 'A non-parametric method requires more data than a parametric method primarily because:',
    options: [
      'It must estimate many more parameters',
      'Non-parametric methods are always more complex',
      'It must estimate the function at every point rather than just a few parameters',
      'Parametric methods use regularization'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Non-parametric methods effectively estimate $f$ at many points (or use local information), requiring more data than estimating a small fixed set of parameters.',
  },
];
