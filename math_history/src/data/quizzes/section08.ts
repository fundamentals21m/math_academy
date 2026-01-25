import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a conic section?',
    options: [
      'Circle',
      'Pentagon',
      'Ellipse',
      'Parabola',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The conic sections are circle, ellipse, parabola, and hyperbola. A pentagon is a polygon, not a conic.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A conic section is formed by:',
    options: [
      'Intersecting two planes',
      'Folding a circle',
      'Intersecting a plane with a cone',
      'Rotating a triangle',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Conic sections are curves formed when a plane intersects a double cone at various angles.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The definitive Greek work on conic sections was written by:',
    options: [
      'Apollonius',
      'Euclid',
      'Archimedes',
      'Pythagoras',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Apollonius of Perga wrote the Conics, an 8-book masterpiece that gave the curves their modern names.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If the eccentricity $e$ of a conic equals 1, the curve is a:',
    options: [
      'Parabola',
      'Circle',
      'Ellipse',
      'Hyperbola',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Eccentricity e < 1 gives an ellipse, e = 1 gives a parabola, and e > 1 gives a hyperbola. A circle has e = 0.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Kepler discovered that planetary orbits are:',
    options: [
      'Circles',
      'Parabolas',
      'Hyperbolas',
      'Ellipses',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Kepler\'s First Law (1609) states that planets move in elliptical orbits with the Sun at one focus.',
  },
];
