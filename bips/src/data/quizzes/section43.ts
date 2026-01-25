import type { QuizQuestion } from './types';

export const section43Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-370 (PSBT v2) improve over BIP-174?',
    options: [
      'Smaller file sizes',
      'Support for transaction construction workflows',
      'Faster signing',
      'Better encryption',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'PSBT v2 separates transaction construction from signing, enabling different workflows.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is the PSBT version number for BIP-370?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 5, precision: 0 },
    difficulty: 'easy',
    explanation: 'BIP-370 defines PSBT version 2.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In PSBT v2, the unsigned transaction:',
    options: [
      'Must always be present',
      'Is compressed',
      'Is encrypted',
      'Can be absent, with fields stored separately',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'PSBT v2 can store transaction fields individually rather than a complete unsigned tx.',
  },
  {
    id: 4,
    type: 'text',
    question: 'PSBT v2 is better suited for _____ workflows where the transaction is built incrementally.',
    correctAnswer: 'interactive',
    difficulty: 'medium',
    explanation: 'PSBT v2 supports interactive construction where inputs/outputs are added over time.',
  },
];
