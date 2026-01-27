import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Black-Scholes model assumes:',
    options: [
      'Volatility changes over time',
      'Constant volatility and continuous trading',
      'Returns have fat tails',
      'Discrete dividend payments'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Black-Scholes assumes constant volatility, continuous trading, lognormal returns, and no transaction costs.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the Black-Scholes formula, $N(d_2)$ represents:',
    options: [
      'The gamma of the option',
      'The risk-neutral probability of finishing in-the-money',
      'The delta of the option',
      'The implied volatility'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$N(d_2)$ is the risk-neutral probability that the option expires in-the-money.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the Black-Scholes formula, $N(d_1)$ equals:',
    options: [
      'The option price',
      'The vega of the option',
      'The strike price',
      'The delta of a call option'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For a call option, $\\Delta = N(d_1)$ gives the hedge ratio.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What year was the Black-Scholes-Merton option pricing formula published?',
    correctAnswer: '1973',
    difficulty: 'easy',
    explanation: 'Black, Scholes, and Merton published their groundbreaking work in 1973.',
  },
];
