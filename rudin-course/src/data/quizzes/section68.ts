import type { QuizQuestion } from './types';

export const section68Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A $k$-cell in $\\mathbb{R}^n$ is:',
    options: [
      'A product of $k$ closed intervals $[a_i, b_i]$',
      'A sphere of dimension $k$',
      'A $k$-dimensional linear subspace',
      'Any bounded subset of $\\mathbb{R}^k$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A $k$-cell is a "box" in $\\mathbb{R}^k$: the Cartesian product $[a_1,b_1] \\times \\cdots \\times [a_k, b_k]$ of closed intervals.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The integral of a continuous function $f$ over a $k$-cell is defined using:',
    options: [
      'Partitions and Riemann sums, taking limits as the mesh goes to zero',
      'The Fundamental Theorem of Calculus directly',
      'Measure theory and Lebesgue integration',
      'Contour integration'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Riemann integral over a $k$-cell uses partitions of the cell into sub-cells, forming Riemann sums, and taking limits as the partition becomes finer.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Fubini\'s theorem states that for continuous $f$ on $[a,b] \\times [c,d]$:',
    options: [
      '$\\int\\int f(x,y) \\, dA = \\int_a^b \\left(\\int_c^d f(x,y) \\, dy\\right) dx = \\int_c^d \\left(\\int_a^b f(x,y) \\, dx\\right) dy$',
      'The double integral equals zero',
      'The order of integration cannot be changed',
      'The integral depends on the path of integration'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Fubini\'s theorem allows computing double integrals as iterated single integrals, and the order of integration can be exchanged for continuous functions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A function $f$ on a rectangle is Riemann integrable if and only if:',
    options: [
      'The set of discontinuities of $f$ has measure zero',
      '$f$ is continuous everywhere',
      '$f$ is bounded',
      '$f$ is monotonic'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Lebesgue criterion: a bounded function is Riemann integrable iff its set of discontinuities has measure zero. Continuous functions and monotone functions satisfy this.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For integration over more general sets, we typically:',
    options: [
      'Extend $f$ to be zero outside the set and integrate over a containing cell',
      'Only consider convex sets',
      'Use polar coordinates exclusively',
      'Require the set to be open'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'To integrate over a region $E \\subset I$ (where $I$ is a cell), we extend $f$ by zero outside $E$ and integrate over $I$. This works when $E$ has a "nice" boundary.',
  },
];
