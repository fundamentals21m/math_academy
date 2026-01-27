import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Fat tails (excess kurtosis) in return distributions mean:',
    options: [
      'Returns are more clustered around the mean',
      'Extreme moves occur more often than normal distribution predicts',
      'Returns are perfectly symmetric',
      'Volatility is constant'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fat tails mean extreme events (3σ, 4σ moves) happen much more often than normal predicts.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Negative skewness in equity returns means:',
    options: [
      'Large rallies are more common than large drops',
      'Large drops are more common than large rallies',
      'Returns are symmetric',
      'Volatility is low'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Negative skew means the left tail is fatter - crashes are more common than equivalent rallies.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The volatility skew exists primarily because of:',
    options: [
      'Demand for downside protection and crash risk',
      'Arbitrage opportunities',
      'Perfect Black-Scholes assumptions',
      'Constant correlation'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Skew reflects demand for crash protection and the reality of fat-tailed, negatively skewed returns.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What statistical measure quantifies the asymmetry of a distribution?',
    correctAnswer: 'skewness',
    difficulty: 'easy',
    explanation: 'Skewness measures whether a distribution leans left (negative) or right (positive).',
  },
];
