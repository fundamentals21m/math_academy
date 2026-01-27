import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A true arbitrage opportunity requires:',
    options: [
      'High expected return with some risk',
      'No initial investment, no risk of loss, positive probability of profit',
      'Leverage and borrowed funds',
      'Perfect market timing'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'True arbitrage is self-financing, has no risk of loss, and has positive probability of profit.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Statistical arbitrage differs from true arbitrage because:',
    options: [
      'It has non-zero variance in returns',
      'It requires more capital',
      'It only works in options markets',
      'It has no expected profit'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Statistical arbitrage has positive expected profit but non-zero variance - it can lose money on individual trades.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The lower bound for a European call option price is:',
    options: [
      '$K$',
      '$S$',
      '$\\max(S - Ke^{-rT}, 0)$',
      '$S - K$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A call must be worth at least its intrinsic value in present value terms: $\\max(S - Ke^{-rT}, 0)$.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What term describes trading strategies that exploit price discrepancies for risk-free profit?',
    correctAnswer: 'arbitrage',
    difficulty: 'easy',
    explanation: 'Arbitrage exploits price discrepancies to earn risk-free profits.',
  },
];
