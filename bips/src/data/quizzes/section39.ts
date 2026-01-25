import type { QuizQuestion } from './types';

export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What problem does BIP-62 address?',
    options: [
      'Double spending',
      'Block size limits',
      'Network latency',
      'Transaction malleability',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'BIP-62 attempted to address transaction malleability issues.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is transaction malleability?',
    options: [
      'The ability to double-spend',
      'The ability to create invalid blocks',
      'The ability to change a transaction ID without invalidating it',
      'The ability to forge signatures',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Malleability allows modifying transaction data (usually signatures) to change the txid.',
  },
  {
    id: 3,
    type: 'text',
    question: 'BIP-62 was ultimately superseded by _____ which fully fixed malleability.',
    correctAnswer: 'SegWit',
    difficulty: 'medium',
    explanation: 'SegWit (BIP-141) fully resolved malleability by moving signatures out of the txid calculation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is malleability problematic for Layer 2?',
    options: [
      'Dependent transactions may become invalid',
      'Blocks become larger',
      'Fees increase',
      'Mining becomes harder',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Malleability breaks chains of unconfirmed transactions, problematic for Lightning.',
  },
];
