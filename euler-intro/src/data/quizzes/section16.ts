import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the brachistochrone problem?',
    options: [
      'Finding the shortest path between two points',
      'Finding the curve with minimal area',
      'Finding the curve of fastest descent under gravity',
      'Finding the curve with maximum curvature'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The brachistochrone is the curve along which a bead slides (frictionlessly, under gravity) from one point to another in the shortest time.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What curve solves the brachistochrone problem?',
    options: [
      'A straight line',
      'A parabola',
      'A catenary',
      'A cycloid'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The brachistochrone is a cycloid—the curve traced by a point on a rolling circle. This was discovered by Johann Bernoulli in 1696.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is an isoperimetric problem?',
    options: [
      'Finding curves with the same equation',
      'Finding curves with equal perimeter but different areas',
      'Finding the curve with maximum area for a given perimeter',
      'Finding curves that are congruent',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Isoperimetric problems ask: among all curves with a given length (perimeter), which encloses the maximum area? The answer is a circle.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What type of mathematical problem does finding curves from properties lead to?',
    options: [
      'Differential equations',
      'Linear algebra',
      'Number theory',
      'Combinatorics',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Specifying properties like arc length, tangent angle, or curvature conditions typically leads to differential equations whose solutions give the desired curves.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the tautochrone property of the cycloid?',
    options: [
      'The area under one arch is exactly three times the rolling circle',
      'Objects take the same time to slide down regardless of starting point',
      'The arc length equals the chord length',
      'The tangent always makes a 45° angle',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The cycloid is tautochronous: a bead sliding down a cycloidal path takes the same time to reach the bottom regardless of where it starts.',
  },
];
