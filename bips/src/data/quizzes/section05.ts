import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the initial status of a newly submitted BIP?',
    options: [
      'Final',
      'Draft',
      'Proposed',
      'Active',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'All BIPs start with Draft status before advancing through the review process.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What status indicates a BIP has been implemented and deployed?',
    options: [
      'Final',
      'Complete',
      'Deployed',
      'Activated'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Final status indicates the BIP has been fully specified and deployed in the reference implementation.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What status is used for BIPs that are ongoing and never really "finished" (like process BIPs)?',
    correctAnswer: 'Active',
    difficulty: 'medium',
    explanation: 'Active status is used for BIPs that remain in effect indefinitely, like process documents.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which status indicates a BIP was intentionally abandoned by its author?',
    options: [
      'Abandoned',
      'Cancelled',
      'Dead',
      'Withdrawn',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Withdrawn status indicates the author has chosen to abandon the proposal.',
  },
];
