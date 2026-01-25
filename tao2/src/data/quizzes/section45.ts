import type { QuizQuestion } from './types';

export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f$ is absolutely integrable (in $L^1$) if:',
    options: [
      '$\\int |f| < \\infty
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$L^1$ functions have finite integral of their absolute value.',
  },
      '$f$ is bounded',
      '$f$ is continuous',
      '$f \\geq 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$L^1$ functions have finite integral of their absolute value.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$L^1$ functions have finite integral of their absolute value.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For an absolutely integrable function $f$, we define $\\int f$ as:',
    options: [
      '$\\int |f|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The integral of a signed function is the integral of its positive part minus the negative part.',
  },
      '$0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The integral of a signed function is the integral of its positive part minus the negative part.',
  },
      '$\\int f^+ - \\int f^-$ where $f^+ = \\max(f, 0)$, $f^- = \\max(-f, 0)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The integral of a signed function is the integral of its positive part minus the negative part.',
  },
      '$\\int f^+ + \\int f^-
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The integral of a signed function is the integral of its positive part minus the negative part.',
  },
    ],
    correctIndex: 3,
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
      '$f_n$ bounded',
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
      '$\\int f_n \\to \\int f
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'DCT allows us to pass limits under the integral sign.',
  },
      '$\\int f_n$ diverges',
      '$f$ is not integrable',
      '$f_n$ must be continuous',
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
      '$|\\int f| = \\int |f|
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The absolute value of the integral is bounded by the integral of the absolute value.',
  },
      '$|\\int f| \\leq \\int |f|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The absolute value of the integral is bounded by the integral of the absolute value.',
  },
      '$|\\int f| \\geq \\int |f|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The absolute value of the integral is bounded by the integral of the absolute value.',
  },
      '$\\int f = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The absolute value of the integral is bounded by the integral of the absolute value.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The absolute value of the integral is bounded by the integral of the absolute value.',
  },
];
