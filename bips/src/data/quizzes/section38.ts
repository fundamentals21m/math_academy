import type { QuizQuestion } from './types';

export const section38Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-13 define?',
    options: [
      'Block structure',
      'Transaction format',
      'Address format for P2SH',
      'Network protocol'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-13 defines the address format for Pay-to-Script-Hash outputs.',
  },
  {
    id: 2,
    type: 'text',
    question: 'P2SH addresses on mainnet start with which number?',
    correctAnswer: '3',
    difficulty: 'easy',
    explanation: 'P2SH addresses begin with "3" on Bitcoin mainnet.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What encoding do P2SH addresses use?',
    options: [
      'Hexadecimal',
      'Bech32',
      'Bech32m',
      'Base58Check'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'P2SH addresses use Base58Check encoding with a specific version prefix.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'How many bytes is the hash160 in a P2SH address?',
    correctAnswer: 20,
    numericRange: { min: 16, max: 32, precision: 0 },
    difficulty: 'medium',
    explanation: 'P2SH uses HASH160 (RIPEMD160(SHA256(script))), producing a 20-byte hash.',
  },
];
