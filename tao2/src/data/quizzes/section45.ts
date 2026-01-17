import type { QuizQuestion } from './types';

export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f$ is absolutely integrable (in $L^1$) if:',
    options: [
      '$f$ is bounded',
      '$\\int |f| < \\infty$',
      '$f$ is continuous',
      '$f \\geq 0$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$L^1$ functions have finite integral of their absolute value.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For an absolutely integrable function $f$, we define $\\int f$ as:',
    options: [
      '$\\int |f|$',
      '$\\int f^+ - \\int f^-$ where $f^+ = \\max(f, 0)$, $f^- = \\max(-f, 0)$',
      '$\\int f^+ + \\int f^-$',
      '$0$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The integral of a signed function is the integral of its positive part minus the negative part.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Dominated Convergence Theorem requires:',
    options: [
      '$f_n \\to f$ uniformly',
      '$|f_n| \\leq g$ for some integrable $g$, and $f_n \\to f$ pointwise',
      '$f_n$ increasing',
      '$f_n$ bounded'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'DCT: pointwise convergence plus domination by an integrable function.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Under the hypotheses of the Dominated Convergence Theorem:',
    options: [
      '$\\int f_n$ diverges',
      '$\\int f_n \\to \\int f$',
      '$f$ is not integrable',
      '$f_n$ must be continuous'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'DCT allows us to pass limits under the integral sign.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The triangle inequality for integrals states:',
    options: [
      '$|\\int f| = \\int |f|$',
      '$|\\int f| \\leq \\int |f|$',
      '$|\\int f| \\geq \\int |f|$',
      '$\\int f = 0$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The absolute value of the integral is bounded by the integral of the absolute value.',
  },
];
