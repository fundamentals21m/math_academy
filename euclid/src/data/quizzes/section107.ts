import type { QuizQuestion } from './types';

export const section107Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the circumcircle of a triangle?',
    options: [
      'The unique circle passing through all three vertices',
      'The circle inscribed in the triangle',
      'Any circle containing the triangle',
      'A circle centered at one vertex',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The circumcircle passes through all three vertices of the triangle. It is the unique circle determined by three non-collinear points.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How is the circumcenter of a triangle found in IV.5?',
    options: [
      'By bisecting the angles',
      'By constructing perpendicular bisectors of two sides',
      'By drawing medians',
      'By drawing altitudes',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The circumcenter is the intersection of the perpendicular bisectors of the sides. Any point on a perpendicular bisector is equidistant from the endpoints.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For an acute triangle, where is the circumcenter located?',
    options: [
      'Always outside the triangle',
      'Always on the hypotenuse',
      'Inside the triangle',
      'At a vertex',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For an acute triangle, the circumcenter lies inside. For a right triangle, it\'s on the hypotenuse (at its midpoint). For an obtuse triangle, it\'s outside.',
  },
];
