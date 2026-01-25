import type { QuizQuestion } from './types';

export const section48Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What problem do Silent Payments (BIP-352) solve?',
    options: [
      'Lower fees',
      'Faster transactions',
      'Larger blocks',
      'Address reuse without interaction',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Silent Payments enable unique addresses without requiring sender-receiver interaction.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Silent Payments derive a unique address using:',
    options: [
      'Sender\\\\'s inputs and receiver\\\\'s public key',
      'Transaction fees',
      'Random numbers only',
      'Block hashes',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The receiver\'s SP address plus sender\'s input keys derive a unique output address.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Silent Payment addresses start with the prefix "sp1" on _____.',
    correctAnswer: 'mainnet',
    difficulty: 'medium',
    explanation: 'Silent Payment addresses use "sp1" prefix for mainnet.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To detect Silent Payments, receivers must:',
    options: [
      'Use a specific block explorer',
      'Scan all Taproot outputs',
      'Register with miners',
      'Publish their keys',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Receivers scan Taproot outputs and try to derive the expected key.',
  },
];
