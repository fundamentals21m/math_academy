import type { QuizQuestion } from './types';

export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A contraction mapping on a metric space $(X, d)$ is a function $T: X \\to X$ such that:',
    options: [
      '$d(T(x), T(y)) = d(x, y)$ for all $x, y$',
      '$d(T(x), T(y)) \\leq c \\cdot d(x, y)$ for some $c < 1$',
      '$T(x) = x$ for all $x$',
      '$d(T(x), T(y)) \\geq d(x, y)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A contraction strictly decreases distances by a factor $c < 1$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Banach fixed-point theorem states that a contraction on a complete metric space:',
    options: [
      'Has no fixed point',
      'Has exactly one fixed point',
      'Has infinitely many fixed points',
      'Is not continuous'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Contractions on complete spaces have unique fixed points.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To find the fixed point of a contraction $T$, we can:',
    options: [
      'Solve $T(x) = 0$',
      'Iterate $x_{n+1} = T(x_n)$ starting from any point',
      'Compute $T^{-1}$',
      'Differentiate $T$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Iteration converges to the unique fixed point: $x_n \\to x^*$ where $T(x^*) = x^*$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $T$ is a contraction with constant $c < 1$, then the error after $n$ iterations satisfies:',
    options: [
      '$d(x_n, x^*) \\leq c^n d(x_0, x^*)$',
      '$d(x_n, x^*) = n \\cdot c$',
      '$d(x_n, x^*) \\geq c^n$',
      '$d(x_n, x^*) = 1/n$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The error decays exponentially: each iteration multiplies the error by at most $c$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The contraction mapping theorem requires the space to be:',
    options: [
      'Compact',
      'Complete',
      'Connected',
      'Finite-dimensional'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Completeness is essential: Cauchy sequences from iteration must converge.',
  },
];
