import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.29 prove?',
    options: [
      'How to construct parallel lines',
      'The converse of I.27/I.28: parallel lines create equal alternate angles',
      'That parallel lines never meet',
      'The angle sum of a triangle'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.29: A transversal cutting parallel lines makes alternate angles equal, corresponding angles equal, and interior angles sum to two right angles.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which postulate is FIRST used in I.29?',
    options: [
      'Postulate 1',
      'Postulate 3',
      'Postulate 4',
      'Postulate 5 (Parallel Postulate)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'I.29 is the first proposition to use the Parallel Postulate. All earlier propositions are valid in non-Euclidean geometry.',
  },
];
