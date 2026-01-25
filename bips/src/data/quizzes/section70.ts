import type { QuizQuestion } from './types';

export const section70Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-158 specify?',
    options: [
      'Bloom filter construction',
      'Block header format',
      'Compact block filter construction',
      'Transaction format',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-158 defines how to construct compact block filters (the actual filter data).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'BIP-158 filters use which data structure?',
    options: [
      'Merkle tree',
      'Golomb-coded sets (GCS)',
      'Bloom filter',
      'Hash table',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'BIP-158 uses Golomb-coded sets for compact probabilistic set membership.',
  },
  {
    id: 3,
    type: 'text',
    question: 'The basic filter type includes scriptPubKeys from _____ and inputs.',
    correctAnswer: 'outputs',
    difficulty: 'medium',
    explanation: 'Basic filters contain output scriptPubKeys and spent script data.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A false positive in a compact block filter means:',
    options: [
      'Block is invalid',
      'Client misses a relevant block',
      'Filter is corrupted',
      'Client downloads a block that doesn\\\\'t contain their transactions',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'False positives cause unnecessary block downloads but don\'t cause missed transactions.',
  },
];
