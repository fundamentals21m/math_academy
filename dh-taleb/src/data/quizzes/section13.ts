import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Vega is highest for:',
    options: [
      'Short-dated ATM options',
      'Options at expiration',
      'Deep OTM options',
      'Long-dated ATM options'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Vega increases with time to expiration and is highest for ATM options.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The volatility skew in equity markets typically shows:',
    options: [
      'OTM calls with higher implied vol than OTM puts',
      'All strikes with equal implied vol',
      'OTM puts with higher implied vol than OTM calls',
      'ATM options with highest implied vol'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Equity skew shows higher implied vol for OTM puts (downside protection demand).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To hedge positive vega exposure, you would:',
    options: [
      'Buy more options',
      'Sell options',
      'Buy the underlying',
      'Sell the underlying'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Selling options reduces vega exposure since short options have negative vega.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What Greek measures sensitivity to changes in implied volatility?',
    correctAnswer: 'vega',
    difficulty: 'easy',
    explanation: 'Vega measures how much an option price changes for a 1% change in implied volatility.',
  },
];
