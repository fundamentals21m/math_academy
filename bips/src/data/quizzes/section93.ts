import type { QuizQuestion } from './types';

export const section93Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which proposal would enable more flexible covenants?',
    options: [
      'OP_EQUAL',
      'OP_CAT',
      'OP_ADD',
      'OP_DUP',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'OP_CAT (concatenation) enables various covenant constructions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Cross-input signature aggregation would:',
    options: [
      'Combine all signatures into one per transaction',
      'Encrypt signatures',
      'Remove signatures',
      'Add more signatures',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Aggregation would dramatically reduce multi-input transaction sizes.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Future soft forks require broad _____ before activation.',
    correctAnswer: 'consensus',
    difficulty: 'easy',
    explanation: 'Bitcoin changes need community consensus to activate.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'BitVM enables:',
    options: [
      'Faster mining',
      'Larger blocks',
      'Optimistic verification of arbitrary computation',
      'New addresses',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'BitVM allows verifying complex computations with fraud proofs.',
  },
];
