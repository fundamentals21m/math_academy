import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The osculating circle at a point on a curve:',
    options: [
      'Passes through the origin',
      'Has infinite radius',
      'Best approximates the curve locally, sharing its tangent and curvature',
      'Is always the unit circle'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The osculating circle "kisses" the curve at a point, matching both direction and curvature.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The radius of curvature $R$ is related to curvature $\\kappa$ by:',
    options: [
      '$R = \\kappa$',
      '$R = 2\\kappa$',
      '$R = \\kappa^2$',
      '$R = \\frac{1}{\\kappa}$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Curvature $\\kappa = \\frac{1}{R}$, so $R = \\frac{1}{\\kappa}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'At the vertex of a parabola $y = x^2$:',
    options: [
      'The curvature is at its maximum',
      'The curvature is zero',
      'The curvature is undefined',
      'The curvature equals 1'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The parabola bends most sharply at its vertex (x = 0) and flattens as |x| increases.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Road curves are banked based on:',
    options: [
      'The color of the road',
      'The curvature of the turn',
      'The length of the road',
      'The number of lanes'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Sharper turns (higher curvature) require more banking to keep vehicles safe.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For $y = x^2$, the radius of curvature at $x = 0$ is $R = \\frac{(1+0)^{3/2}}{2} = ?$',
    correctAnswer: 0.5,
    numericRange: { min: 0, max: 10, precision: 1 },
    difficulty: 'medium',
    explanation: '$R = \\frac{1}{2} = 0.5$ at the vertex of the parabola.',
  },
];
