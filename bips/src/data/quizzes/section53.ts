import type { QuizQuestion } from './types';

export const section53Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What address format does BIP-173 define?',
    options: [
      'Bech32 addresses',
      'Base58 addresses',
      'Hex addresses',
      'Binary addresses',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'BIP-173 defines Bech32 encoding for native SegWit addresses.',
  },
  {
    id: 2,
    type: 'text',
    question: 'Native SegWit addresses on mainnet start with "bc1" and then what letter?',
    correctAnswer: 'q',
    difficulty: 'medium',
    explanation: 'SegWit v0 addresses start with "bc1q" (bc1 + version 0 encoded as q).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Compared to Base58, Bech32 is:',
    options: [
      'Case-sensitive',
      'Shorter',
      'Less efficient',
      'Better at error detection',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Bech32 has better error detection and can locate errors in addresses.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Bech32 addresses use which characters?',
    options: [
      'Hexadecimal only',
      'Only numbers',
      'Lowercase alphanumeric excluding 1, b, i, o',
      'Uppercase and lowercase',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Bech32 uses lowercase alphanumeric characters, excluding confusable characters.',
  },
];
