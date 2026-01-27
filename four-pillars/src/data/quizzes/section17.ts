import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The distance formula in ℝ² comes from:',
    options: [
      'The parallel postulate',
      'The inscribed angle theorem',
      'Trigonometric identities',
      'The Pythagorean theorem'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Distance = √((x₂-x₁)² + (y₂-y₁)²) follows from applying the Pythagorean theorem to horizontal and vertical displacements.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The equation of a circle with center (a, b) and radius r is:',
    options: [
      '$(x - a)^2 + (y - b)^2 = r^2$',
      '$(x - a) + (y - b) = r$',
      '$(x + a)^2 + (y + b)^2 = r$',
      '$x^2 + y^2 = a + b + r$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A circle is all points at distance r from (a, b), so the squared distance equals r².',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The set of points equidistant from two distinct points A and B forms:',
    options: [
      'A circle',
      'A line (the perpendicular bisector of AB)',
      'A point',
      'An ellipse'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The perpendicular bisector of AB is the locus of all points equidistant from A and B.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The triangle inequality states: for any three non-collinear points O, P, Q:',
    options: [
      '$|OP| + |PQ| = |OQ|$',
      '$|OP| \\cdot |PQ| = |OQ|$',
      '$|OP| + |PQ| > |OQ|$',
      '$|OP| - |PQ| > |OQ|$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Two sides of a triangle are together greater than the third side.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Three non-collinear points lie on:',
    options: [
      'No circle',
      'Infinitely many circles',
      'Exactly two circles',
      'Exactly one circle'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The perpendicular bisectors of any two sides meet at a unique point equidistant from all three points.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The triangle inequality becomes an equality if and only if:',
    options: [
      'The three points are collinear',
      'The triangle is equilateral',
      'The triangle is isosceles',
      'The triangle is right-angled'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$|OP| + |PQ| = |OQ|$ exactly when P lies on the segment from O to Q (collinear case).',
  },
];
