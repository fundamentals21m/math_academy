import type { QuizQuestion } from './types';

export const section90Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is RGB Protocol?',
    options: [
      'A new blockchain',
      'A mining protocol',
      'An address format',
      'Client-side validated smart contracts on Bitcoin',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'RGB enables smart contracts with validation happening on the client side.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'RGB state is bound to Bitcoin using:',
    options: [
      'Single-use seals (UTXOs)',
      'Mining difficulty',
      'Block headers',
      'Timestamps only',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'RGB uses Bitcoin UTXOs as single-use seals for state transitions.',
  },
  {
    id: 3,
    type: 'text',
    question: 'RGB validation happens on the _____ side, not globally.',
    correctAnswer: 'client',
    difficulty: 'medium',
    explanation: 'Only parties to a contract validate its state (client-side validation).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'RGB achieves privacy by:',
    options: [
      'Mining privately',
      'Encrypting blocks',
      'Keeping contract data off-chain between parties',
      'Using stealth addresses only',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Contract data is never on the blockchain, only commitments.',
  },
];
