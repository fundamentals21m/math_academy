import type { QuizQuestion } from './types';

export const section84Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does HTLC stand for?',
    options: [
      'Hashed Time-Locked Contract',
      'Hash Table Linked Contract',
      'Hash Transfer Lock Contract',
      'Hierarchical Time Lock Chain',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'HTLC = Hashed Time-Locked Contract.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'An HTLC can be claimed by:',
    options: [
      'Mining a block',
      'Paying a fee',
      'Signing twice',
      'Revealing the preimage before timeout',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The receiver reveals the preimage (hash input) to claim funds.',
  },
  {
    id: 3,
    type: 'text',
    question: 'If the preimage isn\'t revealed, the sender gets a _____ after timeout.',
    correctAnswer: 'refund',
    difficulty: 'medium',
    explanation: 'The timelock ensures funds return to sender if unclaimed.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'HTLCs enable:',
    options: [
      'Faster mining',
      'Atomic swaps and Lightning payments',
      'Larger blocks',
      'Lower fees only'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'HTLCs are the building block for trustless cross-chain and multi-hop payments.',
  },
];
