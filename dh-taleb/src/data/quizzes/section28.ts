import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Near a barrier, hedging costs can:',
    options: [
      'Decrease',
      'Become negative',
      'Exceed the remaining option value',
      'Disappear entirely'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Explosive Greeks near barriers can make hedging costs exceed remaining option value.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Static hedging of barriers uses:',
    options: [
      'Continuous delta hedging',
      'No hedging at all',
      'Only the underlying stock',
      'A portfolio of vanillas set up once without dynamic adjustment'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Static hedges use vanilla options positioned to replicate barrier payoffs at barrier levels.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The 50% rule suggests closing barrier positions when:',
    options: [
      'Expected hedging costs exceed 50% of remaining value',
      'They become profitable',
      'Volatility is low',
      'The market closes'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Better to take a certain loss than risk unmanageable hedging costs.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of hedging sets up a portfolio once without dynamic adjustment?',
    correctAnswer: 'static',
    difficulty: 'easy',
    explanation: 'Static hedging creates a one-time portfolio that replicates payoffs without rebalancing.',
  },
];
