import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Stanley Druckenmiller, what percentage of Bitcoin holders at the $17,000 peak did NOT sell when it crashed to $3,000?',
    options: [
      '50%',
      '72%',
      '86%',
      '95%'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'An astonishing 86% of those who acquired Bitcoin at its $17,000 peak did not sell when it crashed to $3,000, demonstrating the strong HODL mentality.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What do "HODL waves" charts demonstrate about Bitcoin supply?',
    options: [
      'The increasing number of daily transactions',
      'The gradual reduction in circulating supply as holders move coins to cold storage',
      'The volatility of Bitcoin prices',
      'The mining difficulty adjustments'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'HODL waves show Bitcoin supply categorized by time held, demonstrating how long-term holders gradually move coins to cold storage, reducing circulating supply.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the maximum supply of Bitcoin?',
    options: [
      '18 million',
      '21 million',
      '100 million',
      'Unlimited'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Bitcoin has a fixed maximum supply of 21 million coins, enforced by the protocol\'s consensus rules.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does the expression "stack sats" encourage Bitcoin holders to do?',
    options: [
      'Sell Bitcoin quickly',
      'Trade Bitcoin for altcoins',
      'Continuously accumulate Bitcoin (measured in satoshis)',
      'Stake Bitcoin for yield'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '"Stack sats" encourages continuous accumulation of Bitcoin, measured in satoshis (the smallest unit), based on the belief in its superior monetary properties.',
  },
];
