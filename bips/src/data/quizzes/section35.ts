import type { QuizQuestion } from './types';

export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the descriptor multi(k, KEY1, KEY2, ...) represent?',
    options: [
      'Hash timelock',
      'Single signature',
      'k-of-n multisig',
      'Taproot script'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'multi(k, ...) creates a k-of-n multisig script.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What descriptor function wraps another descriptor in P2SH?',
    options: [
      'wrap()',
      'sh()',
      'wsh()',
      'p2sh()',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'sh() wraps a script in P2SH (pay-to-script-hash).',
  },
  {
    id: 3,
    type: 'text',
    question: 'The descriptor wsh() stands for witness script _____.',
    correctAnswer: 'hash',
    difficulty: 'easy',
    explanation: 'wsh = witness script hash, the native SegWit script wrapper.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To create a SegWit multisig, you would use:',
    options: [
      'wsh(multi(...))',
      'multi(...)',
      'sh(multi(...))',
      'wpkh(multi(...))'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'wsh(multi(...)) creates a native SegWit multisig output.',
  },
];
