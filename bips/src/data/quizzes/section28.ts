import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-45 specify?',
    options: [
      'Single-signature wallets',
      'Hardware wallet protocol',
      'Multi-signature HD wallet structure',
      'Block validation',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-45 defines the derivation structure for multi-signature HD wallets.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In BIP-45, what must cosigners share?',
    options: [
      'Mnemonic phrases',
      'Private keys',
      'Transaction history',
      'Extended public keys (xpubs)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Cosigners share their extended public keys to derive common multisig addresses.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What purpose number does BIP-45 use?',
    correctAnswer: 45,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'BIP-45 uses purpose 45, matching its BIP number.',
  },
  {
    id: 4,
    type: 'text',
    question: 'BIP-45 was designed primarily for _____ wallets.',
    correctAnswer: 'multisig',
    difficulty: 'easy',
    explanation: 'BIP-45 specifically addresses multi-signature wallet coordination.',
  },
];
