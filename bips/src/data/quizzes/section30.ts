import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What address type does BIP-84 specify?',
    options: [
      'P2SH-wrapped SegWit',
      'Native SegWit P2WPKH (bc1q addresses)',
      'Legacy P2PKH',
      'Taproot',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-84 defines derivation for native SegWit P2WPKH addresses starting with bc1q.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What purpose number does BIP-84 use?',
    correctAnswer: 84,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'BIP-84 uses purpose 84.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Compared to BIP-49, BIP-84 addresses are:',
    options: [
      'More efficient (lower fees)',
      'Larger in size',
      'More compatible with old wallets',
      'Less secure',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Native SegWit (BIP-84) is more efficient than wrapped SegWit (BIP-49).',
  },
  {
    id: 4,
    type: 'text',
    question: 'Native SegWit addresses use _____ encoding instead of Base58.',
    correctAnswer: 'bech32',
    difficulty: 'medium',
    explanation: 'BIP-84 addresses use bech32 encoding, which is more efficient and error-resistant.',
  },
];
