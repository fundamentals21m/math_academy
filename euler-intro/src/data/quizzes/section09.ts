import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the degree of a cubic curve?',
    options: [
      '3',
      '2',
      '4',
      '5'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A cubic curve is defined by a polynomial equation of degree 3, hence it is a third-order or cubic curve.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'How many points does a line generally intersect a cubic curve (counting multiplicity)?',
    correctAnswer: 3,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'By Bézout\'s theorem, a line (degree 1) intersects a cubic (degree 3) in $1 \\times 3 = 3$ points, counting multiplicity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What famous cubic curve has the equation $y^2 = x^3 - x$?',
    options: [
      'A parabola',
      'A hyperbola',
      'A circle',
      'An elliptic curve',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Equations of the form $y^2 = x^3 + ax + b$ define elliptic curves, which are important cubic curves in number theory and cryptography.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The cubic $y = x^3$ has what kind of point at the origin?',
    options: [
      'A maximum',
      'An inflection point',
      'A minimum',
      'A discontinuity',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The curve $y = x^3$ has an inflection point at the origin—a point where the concavity changes from concave up to concave down (or vice versa).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How many independent coefficients does the general cubic equation have?',
    options: [
      '6',
      '12',
      '9',
      '10',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'A general cubic has terms $x^3, x^2y, xy^2, y^3, x^2, xy, y^2, x, y, 1$—that\'s 10 terms, but dividing by one gives 9 independent coefficients.',
  },
];
