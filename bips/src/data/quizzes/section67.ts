import type { QuizQuestion } from './types';

export const section67Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-152 compact block relay enable?',
    options: [
      'Smaller blocks',
      'Faster mining',
      'Lower fees',
      'Efficient block propagation using short IDs',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Compact blocks use short transaction IDs, assuming the receiver has most transactions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Compact blocks reduce bandwidth by:',
    options: [
      'Using smaller headers',
      'Compressing data',
      'Not re-sending known transactions',
      'Removing signatures',
    ],
    correctIndex: 2,
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
      'Block propagation across the network',
      'Transaction signing',
      'Address generation',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Compact blocks enable faster block propagation, improving security.',
  },
];
