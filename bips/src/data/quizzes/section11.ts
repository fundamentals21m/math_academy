import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does OP_CHECKLOCKTIMEVERIFY (CLTV) enable?',
    options: [
      'Absolute time-locked transactions',
      'Atomic swaps only',
      'Relative time-locked transactions',
      'Multi-signature transactions',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'CLTV enables absolute timelocks, preventing spending until a specific block height or Unix timestamp.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'BIP-65 (CLTV) is useful for which Layer 2 application?',
    options: [
      'Mining pools',
      'Payment channels',
      'Block explorers',
      'Wallet backups',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'CLTV is essential for payment channels, enabling time-based refund mechanisms.',
  },
  {
    id: 3,
    type: 'text',
    question: 'If a CLTV value is less than 500 million, it represents a block _____.',
    correctAnswer: 'height',
    difficulty: 'medium',
    explanation: 'CLTV values below 500 million are interpreted as block heights; values above are Unix timestamps.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What happens if you try to spend a CLTV-locked output before the timelock expires?',
    options: [
      'The transaction is delayed',
      'Higher fees are charged',
      'The transaction is invalid',
      'The funds are burned',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Attempting to spend before the timelock expires makes the entire transaction invalid.',
  },
];
