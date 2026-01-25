import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-39 define?',
    options: [
      'Transaction encoding',
      'Mnemonic code for generating seeds',
      'Address formats',
      'Network protocol',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-39 defines mnemonic phrases (seed phrases) for wallet backup.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'How many words are in a standard BIP-39 mnemonic phrase?',
    correctAnswer: 24,
    numericRange: { min: 12, max: 24, precision: 0 },
    difficulty: 'easy',
    explanation: 'While 12, 15, 18, 21, and 24 are valid, 24 words (256 bits) is the most secure standard.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'How many words are in the BIP-39 English wordlist?',
    correctAnswer: 2048,
    numericRange: { min: 1000, max: 3000, precision: 0 },
    difficulty: 'medium',
    explanation: 'The BIP-39 wordlist contains 2048 words, representing 11 bits of entropy each.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What optional feature does BIP-39 support for additional security?',
    correctAnswer: 'passphrase',
    difficulty: 'medium',
    explanation: 'BIP-39 supports an optional passphrase that modifies the derived seed.',
  },
];
