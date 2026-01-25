import type { QuizQuestion } from './types';

export const section73Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition III.9 prove about a point from which more than two equal lines reach the circumference?',
    options: [
      'It must be outside the circle',
      'It must be on the circumference',
      'Such a point cannot exist',
      'It must be the center of the circle'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'III.9 proves that if more than two equal straight lines can be drawn from a point to a circle, that point is the center.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why does having three or more equal distances to the circle imply the point is the center?',
    options: [
      'Because three points determine a circle',
      'Because the center is unique',
      'All of the above contribute to the reasoning',
      'Because the center is equidistant from all points on the circle',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The center is defined as the point equidistant from all points on the circumference. If three or more equal radii exist from a point, it must be the center.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'From a non-center point, at most how many equal lines can reach the circle?',
    options: [
      'Two',
      'One',
      'Three',
      'Infinitely many',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'III.7 and III.8 establish that from any non-center point, at most two lines of any given length can reach the circle.',
  },
];
