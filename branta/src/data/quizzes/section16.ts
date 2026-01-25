import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the main benefit of zero-knowledge verification?',
    options: [
      'Faster verification speed',
      'Lower API costs',
      'Verifying addresses without revealing which address is being checked',
      'Better error messages',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Zero-knowledge verification allows address verification while keeping the actual address private from Branta.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a cryptographic commitment?',
    options: [
      'A legal agreement about encryption',
      'A way to commit to a value without revealing it, which can be verified later',
      'A promise to use encryption',
      'A type of digital signature',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A commitment scheme lets you "lock in" a value (like hashing it with a nonce) without revealing it, then prove it later.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a tradeoff of zero-knowledge verification compared to traditional verification?',
    options: [
      'It only returns yes/no, not the merchant name',
      'It\\\\\'s less secure',
      'It doesn\\\\\'t work with Lightning',
      'It costs more',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Zero-knowledge verification can confirm if an address is registered but cannot reveal which merchant owns it without breaking privacy.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What year did Branta introduce zero-knowledge verification?',
    correctAnswer: '2025',
    difficulty: 'easy',
    explanation: 'Branta introduced zero-knowledge verification in 2025 as part of their privacy-preserving features.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What cryptographic primitive is used for privacy-preserving set membership proofs?',
    options: [
      'Simple hashing',
      'Base64 encoding',
      'AES encryption',
      'Zero-Knowledge Proofs (ZKP)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Zero-knowledge proofs allow proving that an element belongs to a set without revealing which element it is.',
  },
];
