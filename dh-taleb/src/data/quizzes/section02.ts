import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The payoff of a call option at expiration is:',
    options: [
      '$S_T - K$',
      '$\\max(S_T - K, 0)$',
      '$\\max(K - S_T, 0)$',
      '$K - S_T$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A call option pays the maximum of $(S_T - K)$ or zero, since you only exercise if profitable.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'An option is "in-the-money" (ITM) when:',
    options: [
      'It has no intrinsic value',
      'The strike equals the spot price',
      'Time value equals zero',
      'It has positive intrinsic value'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'ITM means the option has intrinsic value - for calls when S > K, for puts when S < K.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Time value of an option is maximized when the option is:',
    options: [
      'At-the-money',
      'Deep out-of-the-money',
      'Deep in-the-money',
      'At expiration'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Time value is highest for ATM options because there is maximum uncertainty about whether they will expire ITM.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of option can only be exercised at expiration?',
    correctAnswer: 'european',
    difficulty: 'easy',
    explanation: 'European options can only be exercised at expiration, unlike American options which can be exercised any time.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'A call with strike $100 when the stock is at $105 has intrinsic value of:',
    correctAnswer: 5,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Intrinsic value = max(S - K, 0) = max(105 - 100, 0) = $5.',
  },
];
