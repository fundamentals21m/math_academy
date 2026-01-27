import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Implied volatility is:',
    options: [
      'A measure of trading volume',
      'The volatility that makes the model price equal the market price',
      'Always higher than realized volatility',
      'The volatility observed in past price data'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Implied volatility is the volatility input that equates the theoretical option price to the observed market price.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To annualize daily volatility, you multiply by:',
    options: [
      '252',
      '$\\sqrt{252}$',
      '12',
      '$252^2$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Volatility scales with the square root of time, so daily vol × $\\sqrt{252}$ = annual vol.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The volatility risk premium exists because:',
    options: [
      'Sellers are compensated for bearing volatility uncertainty',
      'Implied volatility is always wrong',
      'Markets are perfectly efficient',
      'Buyers always overpay'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The VRP compensates volatility sellers for bearing uncertainty and crash risk.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If daily standard deviation is 1.5% and there are 252 trading days, the annualized volatility is approximately (in %):',
    correctAnswer: 24,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '1.5% × $\\sqrt{252}$ ≈ 1.5% × 15.87 ≈ 23.8%, which rounds to 24%.',
  },
];
