import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does HD wallet stand for?',
    options: [
      'High Definition wallet',
      'Hierarchical Deterministic wallet',
      'Hash Derived wallet',
      'Hardware Device wallet',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'HD stands for Hierarchical Deterministic, where all keys derive from a single master seed.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the main advantage of BIP-32 HD wallets?',
    options: [
      'Backup a single seed to recover all keys',
      'Faster transaction signing',
      'Smaller transaction sizes',
      'Better encryption',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'HD wallets allow backing up just the seed/master key to recover all derived keys.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What is the "/" character used for in BIP-32 derivation paths?',
    correctAnswer: 'separator',
    difficulty: 'easy',
    explanation: 'The "/" separates different levels in the derivation path hierarchy.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does hardened derivation (indicated by \' or h) provide?',
    options: [
      'Shorter addresses',
      'Faster key generation',
      'Parent public key cannot derive child keys',
      'Larger key space',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Hardened derivation prevents the parent extended public key from deriving child keys.',
  },
];
