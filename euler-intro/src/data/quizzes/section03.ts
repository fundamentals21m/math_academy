import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many points does a curve of order $n$ generally intersect a straight line?',
    options: [
      '$n - 1$ points',
      '$n$ points',
      '$n + 1$ points',
      '$2n$ points'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Bézout\'s theorem states that a curve of degree $n$ intersects a line in at most $n$ points (counting multiplicity and complex intersections).',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'How many independent coefficients does a general equation of degree $n$ have (after normalization)?',
    correctAnswer: 5,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'hard',
    explanation: 'For a conic (n=2), the equation $\\alpha x^2 + \\beta xy + \\gamma y^2 + \\delta x + \\varepsilon y + \\zeta = 0$ has 6 coefficients, but dividing by one makes 5 independent.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the relationship between the number of points needed to determine a curve and its order?',
    options: [
      'Higher order curves need fewer points',
      'Higher order curves need more points',
      'All curves need the same number of points',
      'The order has no relation to points needed'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Higher order curves have more coefficients in their equations, so more points are needed to determine them uniquely. A line needs 2 points, a conic needs 5.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What happens when two curves of orders $m$ and $n$ intersect?',
    options: [
      'They intersect at $m + n$ points',
      'They intersect at $m \\times n$ points',
      'They intersect at $\\max(m, n)$ points',
      'They never intersect'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Bézout\'s theorem: two curves of degrees $m$ and $n$ intersect in at most $mn$ points (counting multiplicity and complex intersections).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why does Euler study properties that are common to curves of the same order?',
    options: [
      'Because they have the same color',
      'Because coordinate transformations preserve order',
      'Because they have the same length',
      'Because they were discovered at the same time'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since order is preserved under coordinate transformations, curves of the same order share geometric properties that don\'t depend on the choice of coordinates.',
  },
];
