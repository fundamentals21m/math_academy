import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What famous theorem does Proposition I.32 prove?',
    options: [
      'The Pythagorean theorem',
      'The angle sum of a triangle equals two right angles (180°)',
      'The exterior angle theorem',
      'The triangle inequality'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.32: "In any triangle... the three interior angles of the triangle are equal to two right angles."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What else does I.32 prove about exterior angles?',
    options: [
      'They are always obtuse',
      'An exterior angle equals the sum of the two non-adjacent interior angles',
      'They sum to 360°',
      'They are supplementary to interior angles'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.32 also proves: the exterior angle equals the sum of the two remote interior angles.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which proposition is essential to proving I.32?',
    options: [
      'I.13',
      'I.27',
      'I.29',
      'I.31'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The proof draws a parallel through a vertex (I.31) and uses properties of parallel lines (I.29).',
  },
];
