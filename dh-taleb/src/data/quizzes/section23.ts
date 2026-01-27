import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A one-touch option pays:',
    options: [
      'Only at expiration',
      'The difference between two prices',
      'The average price',
      'As soon as the barrier is touched'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'One-touch (American binary) pays immediately when the barrier level is first reached.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A no-touch option pays if:',
    options: [
      'The barrier is never touched during the option life',
      'The barrier is touched',
      'The underlying rises',
      'Volatility increases'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'No-touch pays the fixed amount only if the barrier is never breached.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A double no-touch option is essentially:',
    options: [
      'A bet on high volatility',
      'A bet on range-bound trading',
      'A directional bet',
      'A bet on trending markets'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Double no-touch pays if spot stays within a range, essentially shorting volatility.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of option pays immediately upon hitting a specified price level?',
    correctAnswer: 'one-touch',
    difficulty: 'easy',
    explanation: 'One-touch options pay their payout as soon as the barrier level is touched.',
  },
];
