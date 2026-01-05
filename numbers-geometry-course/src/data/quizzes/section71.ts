import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 71: Discussion
 */
export const section71Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who wrote the definitive ancient treatise on conic sections?',
    options: ['Euclid', 'Apollonius', 'Archimedes', 'Pythagoras'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Apollonius of Perga wrote "Conics" around 200 BC, the definitive ancient work on the subject.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In projective geometry, where do parallel lines meet?',
    options: [
      'Nowhere',
      'At a point at infinity',
      'At the origin',
      'At the focus',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Projective geometry adds points at infinity where parallel lines meet, unifying geometry.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How does a parabola relate to the line at infinity?',
    options: [
      'It doesn\'t intersect it',
      'It intersects it twice',
      'It is tangent to it',
      'It equals it',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A parabola is tangent to the line at infinity (touches it at one point), which explains its single asymptotic direction.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What are homogeneous coordinates?',
    options: [
      'Coordinates on a hyperbola',
      'Coordinates where multiples represent the same point',
      'Coordinates in 2D only',
      'Coordinates measured from the focus',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'In homogeneous coordinates (X:Y:Z), multiples like (2X:2Y:2Z) represent the same point as (X:Y:Z).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In projective geometry, how many points do two conics intersect in?',
    options: ['At most 4', 'Exactly 4', 'At most 2', 'Exactly 2'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Over the complex projective plane, Bézout\'s theorem gives exactly 2×2 = 4 intersection points.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What field of mathematics generalizes the study of conics?',
    options: [
      'Topology',
      'Algebraic geometry',
      'Differential equations',
      'Statistics',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Algebraic geometry studies solutions to polynomial equations geometrically, with conics being degree 2 curves.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What are elliptic curves?',
    options: [
      'Ellipses in 3D',
      'Degree 3 algebraic curves',
      'Circles with varying radius',
      'Curves with eccentricity 0',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Elliptic curves are degree 3 (cubic) curves, the next step beyond conics in algebraic geometry.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Which three areas of mathematics does this chapter connect?',
    options: [
      'Calculus, statistics, logic',
      'Geometry, algebra, number theory',
      'Topology, analysis, combinatorics',
      'Set theory, category theory, algebra',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Conics unite geometry (shapes), algebra (equations), and number theory (integer solutions).',
  },
];
