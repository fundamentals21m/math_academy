import type { QuizQuestion } from './types';

export const section85Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Lightning Network payments are:',
    options: [
      'Mined like regular transactions',
      'Recorded on the blockchain',
      'Routed through payment channels off-chain',
      'Validated by all nodes',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Lightning payments traverse payment channels without blockchain transactions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A Lightning channel is funded by:',
    options: [
      'A 2-of-2 multisig on-chain transaction',
      'Coinbase transaction',
      'Regular P2PKH',
      'P2SH only',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Channels use 2-of-2 multisig for joint control of funds.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Lightning Network specifications are called _____ (not BIPs).',
    correctAnswer: 'BOLTs',
    difficulty: 'medium',
    explanation: 'BOLTs (Basis of Lightning Technology) define Lightning.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Lightning enabled by SegWit because SegWit fixed:',
    options: [
      'Block size',
      'Transaction malleability',
      'Mining difficulty',
      'Address format',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Lightning requires stable txids for commitment transaction chains.',
  },
];
