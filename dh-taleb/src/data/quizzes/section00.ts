import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the primary purpose of dynamic hedging?',
    options: [
      'To eliminate all risk from an options position',
      'To manage option risk through continuous adjustment of hedging positions',
      'To maximize profit on every trade',
      'To avoid trading options altogether'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Dynamic hedging involves continuously adjusting hedge positions to manage option risk as market conditions change.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the P&L equation for a delta-hedged position, profit occurs when:',
    options: [
      'Implied volatility equals realized volatility',
      'Realized volatility exceeds implied volatility (for a long gamma position)',
      'The underlying price increases',
      'Time to expiration increases'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A long gamma position profits when realized volatility exceeds the implied volatility at which the option was purchased.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to Taleb, what is the key difference between academic theory and trading reality?',
    options: [
      'Academic models are always correct',
      'Markets follow exact mathematical formulas',
      'The market cares about supply/demand and liquidity, not models',
      'There is no difference'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Taleb emphasizes that real markets are driven by supply, demand, fear, greed, and liquidity - models are tools, not truth.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What Greek letter represents the first derivative of option price with respect to the underlying price?',
    correctAnswer: 'delta',
    difficulty: 'easy',
    explanation: 'Delta ($\\Delta$) measures how much the option price changes for a unit change in the underlying.',
  },
];
