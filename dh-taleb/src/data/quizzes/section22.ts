import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A cash-or-nothing binary call pays:',
    options: [
      'A fixed cash amount if ITM, zero otherwise',
      'The stock price if ITM',
      'The intrinsic value',
      'The time value'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Cash-or-nothing pays a fixed amount Q if the option finishes in-the-money.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Near expiry and at the strike, binary option delta:',
    options: [
      'Approaches zero',
      'Approaches infinity',
      'Stays at 0.5',
      'Becomes negative'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Binary delta explodes near the strike at expiry - tiny moves create 100% payoff changes.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A binary option can be approximately replicated by:',
    options: [
      'A single vanilla call',
      'A straddle',
      'A tight call spread',
      'A variance swap'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'As strike width narrows, a call spread converges to a binary payoff.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is another name for binary options?',
    correctAnswer: 'digital',
    difficulty: 'easy',
    explanation: 'Binary options are also called digital options due to their 0-or-1 payoff.',
  },
];
