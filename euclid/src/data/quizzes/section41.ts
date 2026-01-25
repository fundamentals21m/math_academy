import type { QuizQuestion } from './types';

export const section41Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What relationship does I.41 establish?',
    options: [
      'A triangle equals a rectangle',
      'A triangle equals half a parallelogram on the same base between same parallels',
      'Two triangles equal one parallelogram',
      'A parallelogram equals two squares',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.41: A parallelogram on the same base and between the same parallels as a triangle is double the triangle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is I.41 important for the Pythagorean theorem?',
    options: [
      'It is not used in the Pythagorean theorem',
      'It proves right angles exist',
      'It relates triangles to parallelograms/rectangles, enabling area comparisons',
      'It constructs squares',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'I.41 is crucial for I.47: it shows triangles are half of parallelograms, enabling the area proof.',
  },
];
