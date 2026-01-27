import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a delta-hedged position, path dependence means:',
    options: [
      'Only the final price matters',
      'Hedging is unnecessary',
      'Delta never changes',
      'The path taken to the final price affects P&L'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Gamma scalping P&L depends on the sum of squared moves, not just the endpoint.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A trending market is bad for long gamma because:',
    options: [
      'Gamma becomes negative',
      'Delta hedges are always profitable',
      'Realized vol is low relative to the move size',
      'Time decay stops'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Trending moves give low realized vol (few oscillations) causing hedges to buy high and sell low.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Gap risk is particularly dangerous because:',
    options: [
      'It can be perfectly hedged',
      'Prices jump through intermediate levels where hedging would occur',
      'It only affects long positions',
      'It only occurs during trading hours'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Gaps bypass intermediate prices, eliminating opportunities to adjust hedges.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of market (oscillating vs trending) is best for long gamma positions?',
    correctAnswer: 'oscillating',
    difficulty: 'medium',
    explanation: 'Oscillating markets let gamma scalpers buy low, sell high repeatedly.',
  },
];
