import type { QuizQuestion } from './types';

export const section47Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Proposition I.47 commonly known as?',
    options: [
      'The Pythagorean Theorem',
      'The Triangle Inequality',
      'Thales\' Theorem',
      'The Angle Sum Theorem'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'I.47 is the famous Pythagorean theorem: in a right triangle, the square on the hypotenuse equals the sum of squares on the other two sides.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In modern notation, what does I.47 state?',
    options: [
      '$a + b = c$',
      '$a^2 + b^2 = c^2$ (where $c$ is the hypotenuse)',
      '$a \\times b = c$',
      '$a^2 = b^2 + c^2$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For a right triangle with legs $a$, $b$ and hypotenuse $c$: $a^2 + b^2 = c^2$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is Euclid\'s proof of I.47 sometimes called?',
    options: [
      'The rearrangement proof',
      'The algebraic proof',
      'The windmill proof',
      'The similar triangles proof'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The "windmill proof" refers to the distinctive shape formed by the three squares and the auxiliary lines.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which proposition is crucial to the proof of I.47?',
    options: [
      'I.4 (SAS congruence)',
      'I.20 (triangle inequality)',
      'I.32 (angle sum)',
      'I.41 (parallelogram is double the triangle)'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'I.47 uses I.41 to show each small square equals a rectangle (since parallelograms are double triangles).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does Euclid divide the large square on the hypotenuse?',
    options: [
      'Into two triangles',
      'Into two rectangles using a line through A parallel to the sides',
      'Into four equal squares',
      'He does not divide it',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A line from the right angle vertex parallel to the sides of the hypotenuse square divides it into two rectangles, each equal to one of the smaller squares.',
  },
];
