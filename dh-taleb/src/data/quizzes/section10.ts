import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A call option with delta 0.60 behaves like owning:',
    options: [
      '60 shares per contract',
      '40 shares per contract',
      '100 shares per contract',
      '6 shares per contract'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Delta indicates equivalent stock exposure. A 0.60 delta call on 100 shares = 60 share equivalents.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'As a call option moves deeper in-the-money, delta:',
    options: [
      'Decreases toward 0',
      'Increases toward 1',
      'Stays at 0.5',
      'Becomes negative'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Deep ITM calls have delta approaching 1, behaving like the underlying stock.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To delta-hedge a short position of 100 calls with delta 0.55:',
    options: [
      'Sell 5,500 shares',
      'Buy 5,500 shares',
      'Sell 55 shares',
      'Buy 55 shares'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Short 100 calls × 100 shares × 0.55 = -5,500 delta. Buy 5,500 shares to neutralize.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'A put option at-the-money has delta approximately equal to:',
    correctAnswer: -0.5,
    numericRange: { min: -1, max: 0, precision: 1 },
    difficulty: 'easy',
    explanation: 'ATM puts have delta near -0.5 (negative because puts decrease in value as spot rises).',
  },
];
