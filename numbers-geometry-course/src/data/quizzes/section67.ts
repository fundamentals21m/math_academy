import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 67: Intersections (Advanced)
 */
export const section67Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What did Menaechmus construct using two parabolas?',
    options: ['√2', '∛2', 'π', 'e'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Menaechmus showed how to construct ∛2 (cube root of 2) by intersecting two parabolas.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to Bézout\'s theorem, how many points can a degree 2 curve and a degree 3 curve have in common?',
    options: ['At most 3', 'At most 5', 'At most 6', 'At most 9'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'By Bézout\'s theorem, curves of degree m and n intersect in at most mn points: 2 × 3 = 6.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How many intersection points can two conics have?',
    options: ['At most 2', 'At most 3', 'At most 4', 'At most 8'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Two conics (degree 2 curves) can intersect in at most 2 × 2 = 4 points.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who discovered how to solve quartic equations using conic intersections?',
    options: ['Menaechmus', 'Ferrari', 'Cardano', 'Tartaglia'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Lodovico Ferrari (1522-1565) discovered that quartics could be solved via conic intersections.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is the Menaechmus construction important?',
    options: [
      'It proved π is irrational',
      'It showed compass-and-straightedge cannot construct ∛2',
      'It solved problems beyond compass-and-straightedge',
      'It discovered the parabola',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Menaechmus showed that conic sections could solve problems (like doubling the cube) that compass and straightedge cannot.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is Bézout\'s theorem about?',
    options: [
      'The area of triangles',
      'The number of intersection points of curves',
      'The discriminant of polynomials',
      'The focus of a parabola',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Bézout\'s theorem states that curves of degree m and n intersect in at most mn points.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'In Menaechmus\'s construction, what are the two curves?',
    options: [
      'Two circles',
      'A circle and a line',
      'Two parabolas',
      'An ellipse and a hyperbola',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Menaechmus used two parabolas: y = x² and x = y²/2.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'A quartic equation has how many roots (counting multiplicities)?',
    options: ['2', '3', '4', '5'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'A quartic (degree 4) polynomial has exactly 4 roots when counted with multiplicity over the complex numbers.',
  },
];
