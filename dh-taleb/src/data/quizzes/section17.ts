import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Early exercise of American calls on non-dividend stocks is:',
    options: [
      'Always optimal',
      'Optimal near expiration',
      'Optimal when deep ITM',
      'Never optimal'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For non-dividend stocks, early exercise of calls forfeits time value with no offsetting benefit.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Early exercise of American calls on dividend-paying stocks may be optimal:',
    options: [
      'Just after the ex-dividend date',
      'Just before the ex-dividend date',
      'Only at expiration',
      'Never'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Exercise just before ex-date if the dividend exceeds remaining time value.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Discrete hedging introduces:',
    options: [
      'Perfect replication',
      'P&L variance around the theoretical value',
      'Lower transaction costs than continuous hedging',
      'Both B and C'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Discrete hedging is cheaper but introduces variance since hedges are not continuously adjusted.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of option can be exercised at any time before expiration?',
    correctAnswer: 'american',
    difficulty: 'easy',
    explanation: 'American options can be exercised any time; European only at expiration.',
  },
];
