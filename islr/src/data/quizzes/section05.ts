import type { QuizQuestion } from './types';

export const section05Quiz: QuizQuestion[] = [
  // Easy questions
  {
    id: 's05-e01',
    type: 'multiple-choice',
    question: 'With a large sample size $n$ and small number of predictors $p$, which method would generally perform better?',
    options: [
      'Flexible methods',
      'Inflexible methods',
      'They perform equally',
      'Cannot determine'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'With large $n$, we have enough data to estimate complex patterns without overfitting, so flexible methods can shine.',
  },
  {
    id: 's05-e02',
    type: 'multiple-choice',
    question: 'When the true relationship between $X$ and $Y$ is highly non-linear, which method is preferred?',
    options: [
      'Linear regression',
      'A more flexible method',
      'Any parametric method',
      'An inflexible method'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Non-linear relationships require flexible methods that can capture curves and complex patterns.',
  },
  {
    id: 's05-e03',
    type: 'multiple-choice',
    question: 'Which of the following is a quantitative variable?',
    options: [
      'Gender',
      'Brand of car',
      'Temperature',
      'Eye color'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Temperature is quantitative (numerical). Gender, brand, and eye color are qualitative (categorical).',
  },
  {
    id: 's05-e04',
    type: 'text',
    question: 'What type of error is related to model simplicity and missing patterns? (one word)',
    correctAnswer: 'bias',
    difficulty: 'easy',
    explanation: 'Bias is the error from using a model too simple to capture the true relationship.',
  },
  {
    id: 's05-e05',
    type: 'multiple-choice',
    question: 'The bias-variance tradeoff means:',
    options: [
      'Bias and variance are always equal',
      'They are unrelated concepts',
      'Both can be minimized simultaneously',
      'Reducing one often increases the other'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The tradeoff means that more flexible models (lower bias) typically have higher variance, and vice versa.',
  },
  // Medium questions
  {
    id: 's05-m01',
    type: 'multiple-choice',
    question: 'When $p$ is large relative to $n$, flexible methods often:',
    options: [
      'Overfit the training data',
      'Perform very well',
      'Have low variance',
      'Underfit the data'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'High $p$ relative to $n$ (curse of dimensionality) makes overfitting more likely with flexible methods.',
  },
  {
    id: 's05-m02',
    type: 'multiple-choice',
    question: 'For inference about which predictors affect the response, we prefer:',
    options: [
      'Neural networks',
      'Linear regression',
      'Random forests',
      'Support vector machines'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Linear regression coefficients are interpretable - each coefficient shows the effect of that predictor on the response.',
  },
  {
    id: 's05-m03',
    type: 'multiple-choice',
    question: 'High variance of error terms ($\\sigma^2$ is large) suggests we should use:',
    options: [
      'More flexible methods to capture the noise',
      'Any method will work equally well',
      'Less flexible methods to avoid fitting noise',
      'More predictors'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When noise is high, flexible methods may fit the noise. Simpler methods are more robust to noisy data.',
  },
  {
    id: 's05-m04',
    type: 'multiple-choice',
    question: 'Cluster analysis is an example of:',
    options: [
      'Supervised learning',
      'Classification',
      'Regression',
      'Unsupervised learning'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Clustering finds natural groupings without predefined labels - a classic unsupervised learning task.',
  },
  {
    id: 's05-m05',
    type: 'numeric',
    question: 'A study has data on 500 firms with 4 variables. What is $n$?',
    correctAnswer: 500,
    numericRange: { min: 1, max: 1000, precision: 0 },
    difficulty: 'medium',
    explanation: '$n$ is the sample size (number of observations), which is 500 firms in this case.',
  },
  // Hard questions
  {
    id: 's05-h01',
    type: 'multiple-choice',
    question: 'If training error is 2% and test error is 20%, the model is likely:',
    options: [
      'Overfitting',
      'Underfitting',
      'Optimal',
      'Unbiased'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Large gap between training error (2%) and test error (20%) indicates overfitting - the model learned training-specific patterns.',
  },
  {
    id: 's05-h02',
    type: 'multiple-choice',
    question: 'The irreducible error in the bias-variance decomposition:',
    options: [
      'Can be reduced with more data',
      'Is independent of our modeling choices',
      'Can be reduced with better models',
      'Equals zero in the Bayes classifier'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Irreducible error ($\\text{Var}(\\epsilon)$) is inherent randomness that cannot be reduced by any model or additional data.',
  },
  {
    id: 's05-h03',
    type: 'multiple-choice',
    question: 'When comparing two models, if Model A has lower training error but higher test error than Model B, we should choose:',
    options: [
      'Model A (lower training error)',
      'Either model (they\'re equivalent)',
      'Model B (lower test error)',
      'A third model'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Test error measures real-world performance. Model B generalizes better even though it fits training data less well.',
  },
];
