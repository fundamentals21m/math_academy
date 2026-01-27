import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A reverse knock-out call has the barrier:',
    options: [
      'Above the strike, causing knockout as it goes ITM',
      'Below the current spot',
      'At the strike price',
      'At zero'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Reverse knockout has barrier on the profitable side, capping upside.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'An up-and-out call near its barrier can have:',
    options: [
      'Positive delta',
      'Negative delta',
      'Zero delta',
      'Undefined delta'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Near a reverse barrier, knockout risk can make delta negative despite being a call.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A double knock-out option is knocked out if:',
    options: [
      'Only the upper barrier is touched',
      'Only the lower barrier is touched',
      'Either barrier is touched',
      'Both barriers must be touched'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Double knockout dies if spot touches either the upper or lower barrier.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of barrier option has both an upper and lower barrier?',
    correctAnswer: 'double barrier',
    difficulty: 'easy',
    explanation: 'Double barrier options have two boundaries that the spot must avoid.',
  },
];
