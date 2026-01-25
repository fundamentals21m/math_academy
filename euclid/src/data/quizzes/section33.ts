import type { QuizQuestion } from './types';

export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.33 prove about lines joining ends of parallel equal lines?',
    options: [
      'They are themselves equal and parallel',
      'They are perpendicular',
      'They bisect each other',
      'They form right angles',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'I.33: Lines joining the ends of equal parallel lines (in the same direction) are themselves equal and parallel.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What shape do I.33 and I.34 begin to develop the theory of?',
    options: [
      'Triangles',
      'Circles',
      'Parallelograms',
      'Squares',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'I.33-I.34 establish fundamental properties of parallelograms.',
  },
];
