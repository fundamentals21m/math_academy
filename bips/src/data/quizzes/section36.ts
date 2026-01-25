import type { QuizQuestion } from './types';

export const section36Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-389 multipath descriptors enable?',
    options: [
      'Multiple signatures',
      'Multiple derivation paths in a single descriptor',
      'Multiple transactions',
      'Multiple wallets'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'BIP-389 allows descriptors to specify multiple derivation paths (e.g., for receive and change).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What syntax does BIP-389 use for multiple paths?',
    options: [
      '{0,1} for path sets',
      '[0|1] for path options',
      '(0/1) for alternatives',
      '<0;1> for choosing between paths',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'BIP-389 uses angle brackets with semicolons: <0;1> means "0 or 1".',
  },
  {
    id: 3,
    type: 'text',
    question: 'Multipath descriptors are useful for compactly representing both external and _____ addresses.',
    correctAnswer: 'internal',
    difficulty: 'medium',
    explanation: 'A single descriptor can describe both external (receiving) and internal (change) addresses.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In wpkh([fp/84h/0h/0h]xpub.../<0;1>/*), what does /* represent?',
    options: [
      'Hidden keys',
      'A literal asterisk',
      'All indices (address index wildcard)',
      'Any purpose',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The /* wildcard represents the varying address index within the derivation path.',
  },
];
