import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.42 construct?',
    options: [
      'A triangle equal to a given parallelogram',
      'A parallelogram equal to a given triangle with a given angle',
      'A square equal to a given rectangle',
      'A circle equal to a given polygon'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.42: To construct a parallelogram equal in area to a given triangle, with a given angle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the significance of I.42?',
    options: [
      'It proves the Pythagorean theorem',
      'It shows any triangular area can be converted to a parallelogram',
      'It constructs all regular polygons',
      'It proves triangles exist'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.42 enables transformation of triangular areas into parallelograms, a key step in area theory.',
  },
];
