import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-143 define?',
    options: [
      'Network protocol',
      'Block validation rules',
      'Transaction signing algorithm for SegWit',
      'Address encoding',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-143 defines the new transaction digest algorithm for signing SegWit inputs.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What problem did the old signing algorithm have that BIP-143 fixed?',
    options: [
      'Incompatibility with hardware wallets',
      'Quadratic hashing for large transactions',
      'Slow signature generation',
      'Weak randomness',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The old algorithm required O(n²) hashing for transactions with many inputs, fixed by BIP-143.',
  },
  {
    id: 3,
    type: 'text',
    question: 'BIP-143 includes the _____ being spent in the signature hash for better security.',
    correctAnswer: 'amount',
    difficulty: 'medium',
    explanation: 'BIP-143 includes the input amount in the sighash, preventing certain attacks.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The BIP-143 signing algorithm is more friendly to:',
    options: [
      'Hardware wallets',
      'Mining pools',
      'Full nodes',
      'Block explorers',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'BIP-143\'s linear hashing and amount commitment make it much more suitable for hardware wallets.',
  },
];
