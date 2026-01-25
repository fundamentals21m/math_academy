import type { QuizQuestion } from './types';

export const section117Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What special property makes the regular hexagon uniquely easy to inscribe in a circle?',
    options: [
      'Its angles are all 120°',
      'Its diagonals are all equal',
      'It has six sides',
      'Its side length equals the radius of the circumscribed circle',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The side of a regular hexagon equals the radius of its circumscribed circle. This makes construction straightforward—just step around the circle with the radius.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In IV.15, what shape are the six triangles formed by connecting the center to each vertex?',
    options: [
      'Isosceles triangles',
      'Equilateral triangles',
      'Right triangles',
      'Scalene triangles',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each triangle has two sides equal to the radius and one side equal to a side of the hexagon. Since side = radius, all three sides are equal—equilateral triangles.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why do bees build hexagonal honeycomb cells?',
    options: [
      'It\\\'s the only shape that tessellates',
      'It\\\'s the easiest to construct',
      'It\\\'s the most efficient shape for covering a plane',
      'It\\\'s tradition',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Hexagons tile the plane with no gaps and use the least perimeter for a given area among shapes that tessellate—maximum storage with minimum wax.',
  },
];
