import type { QuizQuestion } from './types';

export const section77Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A set function $\\phi$ on a ring of sets $\\mathcal{R}$ is additive if:',
    options: [
      '$\\phi(A \\cup B) = \\phi(A) + \\phi(B)$ when $A$ and $B$ are disjoint',
      '$\\phi(A \\cup B) = \\phi(A) + \\phi(B)$ for all $A, B$',
      '$\\phi(A \\cap B) = \\phi(A)\\phi(B)$',
      '$\\phi(A) \\leq \\phi(B)$ when $A \\subset B$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Additivity (or finite additivity) means the measure of a disjoint union equals the sum of measures. This extends to finite disjoint unions by induction.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A set function is countably additive (or $\\sigma$-additive) if:',
    options: [
      '$\\phi(\\bigcup_{n=1}^\\infty A_n) = \\sum_{n=1}^\\infty \\phi(A_n)$ for pairwise disjoint $A_n$',
      '$\\phi$ is defined on all subsets',
      '$\\phi(A) \\geq 0$ for all $A$',
      '$\\phi(\\emptyset) = 0$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Countable additivity extends finite additivity to countably infinite disjoint unions. This is the key property distinguishing measures from merely finitely additive set functions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A ring of sets $\\mathcal{R}$ is closed under:',
    options: [
      'Finite unions and set differences',
      'All set operations including complements',
      'Countable unions only',
      'Only intersections'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A ring is closed under finite unions, intersections, and set differences. A $\\sigma$-ring is also closed under countable unions. An algebra also contains the whole space.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The outer measure $\\mu^*$ is defined by:',
    options: [
      '$\\mu^*(E) = \\inf\\{\\sum \\mu(A_n) : E \\subset \\bigcup A_n, A_n \\in \\mathcal{R}\\}$',
      '$\\mu^*(E) = \\sup\\{\\mu(A) : A \\subset E, A \\in \\mathcal{R}\\}$',
      '$\\mu^*(E) = \\mu(E)$ when $E \\in \\mathcal{R}$',
      '$\\mu^*(E) = 0$ for all $E$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Outer measure covers $E$ by countable unions of sets from $\\mathcal{R}$ and takes the infimum of the sum of their measures. It may exceed the inner measure.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A set function $\\mu$ is monotone if:',
    options: [
      '$A \\subset B$ implies $\\mu(A) \\leq \\mu(B)$',
      '$\\mu(A \\cup B) \\leq \\mu(A) + \\mu(B)$',
      '$\\mu$ is non-negative',
      '$\\mu(A) = \\mu(B)$ when $|A| = |B|$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Monotonicity means larger sets have larger (or equal) measure. For additive non-negative set functions, monotonicity follows from additivity.',
  },
];
