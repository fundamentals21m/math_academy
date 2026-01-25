import type { QuizQuestion } from './types';

export const section113Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A double integral extends one-dimensional integration by replacing the interval $[a, b]$ with:',
    options: [
      'A single point',
      'A two-dimensional region $Q
    correctIndex: 1,
    difficulty: ',
      'A line in space',
      ',
    explanation: ',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The double integral generalizes the one-dimensional integral by replacing the interval $[a, b]$ with a two-dimensional region of integration $Q$ (typically starting with rectangles).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The notation $\\iint_Q f(x, y) \\, dx \\, dy$ represents:',
    options: [
      'A double integral over the region $Q
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The notation $\\iint_Q f(x, y) \\, dx \\, dy$ denotes a double integral of the scalar field $f$ over the two-dimensional region $Q$.',
  },
      'A line integral',
      'The gradient of $f
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The notation $\\iint_Q f(x, y) \\, dx \\, dy$ denotes a double integral of the scalar field $f$ over the two-dimensional region $Q$.',
  },
      'A surface integral',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The notation $\\iint_Q f(x, y) \\, dx \\, dy$ denotes a double integral of the scalar field $f$ over the two-dimensional region $Q$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A rectangle in the plane is defined as:',
    options: [
      'Any four-sided polygon',
      'An infinite strip',
      'The Cartesian product $[a, b] \\times [c, d]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A rectangle $Q$ is the Cartesian product of two closed intervals: $Q = [a, b] \\times [c, d] = \\{(x, y) : a \\leq x \\leq b, c \\leq y \\leq d\\}$.',
  },
      'A region with curved boundaries',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A rectangle $Q$ is the Cartesian product of two closed intervals: $Q = [a, b] \\times [c, d] = \\{(x, y) : a \\leq x \\leq b, c \\leq y \\leq d\\}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The definition of the double integral follows the pattern:',
    options: [
      'First for step functions, then for more general bounded functions',
      'First for polynomials, then for continuous functions',
      'First for smooth functions, then for discontinuous functions',
      'Only for continuous functions',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Like one-dimensional integration, the double integral is first defined for step functions (where it is a simple sum), then extended to general bounded functions using approximation by step functions.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Most double integrals in practice are computed by:',
    options: [
      'Direct summation',
      'Monte Carlo methods',
      'Iterated integration (repeated one-dimensional integration)',
      'Graphical methods',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The main computational tool is iterated integration: the double integral is evaluated by performing two successive one-dimensional integrals, integrating first with respect to one variable, then the other.',
  },
];
