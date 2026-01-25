import type { QuizQuestion } from './types';

export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.45 construct?',
    options: [
      'A triangle equal to a given polygon',
      'A circle equal to a polygon',
      'A square equal to any polygon',
      'A parallelogram equal to a given rectilineal figure in a given angle'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'I.45: To construct a parallelogram equal in area to a given rectilineal (polygonal) figure, in a given angle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does I.45 generalize earlier propositions?',
    options: [
      'It converts any polygon to an equal-area parallelogram',
      'It works for circles instead of polygons',
      'It only works for triangles',
      'It constructs 3D figures'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'I.45 extends I.42 and I.44: any polygon can be triangulated and converted to an equal-area parallelogram.',
  },
];
