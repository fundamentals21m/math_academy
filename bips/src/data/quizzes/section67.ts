import type { QuizQuestion } from './types';

export const section67Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-152 compact block relay enable?',
    options: [
      'Smaller blocks',
      'Faster mining',
      'Efficient block propagation using short IDs',
      'Lower fees',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Compact blocks use short transaction IDs, assuming the receiver has most transactions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Compact blocks reduce bandwidth by:',
    options: [
      'Using smaller headers',
      'Not re-sending known transactions',
      'Compressing data',
      'Removing signatures',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Receivers reconstruct blocks from their mempool using short IDs.',
  },
  {
    id: 3,
    type: 'text',
    question: 'If a transaction is missing, the receiver sends a _____ message.',
    correctAnswer: 'getblocktxn',
    difficulty: 'hard',
    explanation: 'getblocktxn requests specific missing transactions for block reconstruction.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Compact block relay significantly speeds up:',
    options: [
      'Fee estimation',
      'Transaction signing',
      'Address generation',
      'Block propagation across the network'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Compact blocks enable faster block propagation, improving security.',
  },
];
