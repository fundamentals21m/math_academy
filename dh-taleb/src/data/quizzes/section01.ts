import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to put-call parity, what equals $C + Ke^{-rT}$?',
    options: [
      '$P \\times S$',
      '$P + S$',
      '$S - P$',
      '$P - S$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Put-call parity states: $C + Ke^{-rT} = P + S$. A call plus the present value of the strike equals a put plus the stock.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To create synthetic long stock, you would:',
    options: [
      'Sell a call, sell a put, borrow money',
      'Buy a call, sell a put, lend money',
      'Sell a call, buy a put, lend money',
      'Buy a call, buy a put, borrow money'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Synthetic long stock = Long call + Short put + Lend PV(K). This replicates owning the stock.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The forward price formula $F = S_0 e^{(r-q)T}$ assumes:',
    options: [
      'Continuous dividend yield q and risk-free rate r',
      'No dividends and no interest',
      'Only discrete dividends',
      'Forward prices equal spot prices'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The forward price accounts for carrying cost (interest rate r) minus dividend yield (q) over time T.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the name of the relationship $C + Ke^{-rT} = P + S$?',
    correctAnswer: 'put-call parity',
    difficulty: 'easy',
    explanation: 'Put-call parity is the fundamental relationship connecting European call and put prices.',
  },
];
