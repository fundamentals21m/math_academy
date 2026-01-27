import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Theta is typically:',
    options: [
      'Independent of time',
      'Negative for long options',
      'Zero for all options',
      'Positive for long options'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Long options lose value as time passes, so theta is typically negative.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Vanna measures:',
    options: [
      'Sensitivity of delta to volatility',
      'Both A and B (they are equivalent)',
      'Sensitivity of vega to spot',
      'Sensitivity of gamma to time'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Vanna = $\\partial\\Delta/\\partial\\sigma = \\partial\\mathcal{V}/\\partial S$ - sensitivity of delta to vol or vega to spot.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Rho is most important for:',
    options: [
      'At-the-money options only',
      'Long-dated options',
      'Short-dated options',
      'Binary options only'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Rho matters more for long-dated options where interest rate effects compound over time.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What Greek measures the rate of time decay of an option?',
    correctAnswer: 'theta',
    difficulty: 'easy',
    explanation: 'Theta ($\\Theta$) measures how much an option loses in value per day due to time decay.',
  },
];
