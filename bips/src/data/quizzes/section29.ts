import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What address type does BIP-49 specify derivation for?',
    options: [
      'Taproot (bc1p addresses)',
      'Native SegWit (bc1 addresses)',
      'P2WPKH nested in P2SH (3-prefix addresses)',
      'Legacy P2PKH (1-prefix addresses)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'BIP-49 defines derivation for P2SH-wrapped SegWit addresses (starting with 3).',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What purpose number does BIP-49 use?',
    correctAnswer: 49,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'BIP-49 uses purpose 49, matching its BIP number.',
  },
  {
    id: 3,
    type: 'text',
    question: 'BIP-49 addresses provide SegWit benefits while maintaining _____ with older software.',
    correctAnswer: 'compatibility',
    difficulty: 'medium',
    explanation: 'Wrapped SegWit maintains backward compatibility with software that only recognizes P2SH addresses.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A BIP-49 derivation path for Bitcoin mainnet starts with:',
    options: [
      'm/44\\'/0\\'/',
      'm/49\\'/0\\'/',
      'm/84\\'/0\\'/',
      'm/86\\'/0\\'/',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-49 uses purpose 49 and coin type 0 for Bitcoin mainnet.',
  },
];
