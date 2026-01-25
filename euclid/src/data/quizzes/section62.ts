import type { QuizQuestion } from './types';

export const section62Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the main difference between II.12 and II.13?',
    options: [
      'II.12 handles obtuse angles, II.13 handles acute angles',
      'II.12 uses squares, II.13 uses rectangles',
      'II.12 uses the parallel postulate, II.13 does not',
      'II.12 is constructive, II.13 is not',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'II.12 proves the law of cosines for obtuse triangles, while II.13 proves it for acute triangles.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In II.13, compared to the Pythagorean theorem, the square on the side opposite the acute angle is:',
    options: [
      'Equal to the sum of the other squares',
      'Less than the sum of the other squares',
      'Greater than the sum of the other squares',
      'Twice the sum of the other squares',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In an acute triangle, c² < a² + b², with the deficiency being twice the rectangle mentioned in II.13.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The modern law of cosines c² = a² + b² - 2ab·cos(C) unifies which propositions?',
    options: [
      'I.47, II.4, and II.5',
      'II.5, II.6, and II.11',
      'II.1, II.2, and II.3',
      'I.47, II.12, and II.13',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'I.47 (Pythagorean theorem) is the special case C = 90°; II.12 handles C > 90°; II.13 handles C < 90°.',
  },
];
