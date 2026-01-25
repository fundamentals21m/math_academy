import type { QuizQuestion } from './types';

export const section183Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Lagrange basis polynomial $L_k(x)$ satisfies $L_k(x_j) = \\delta_{kj}$. What does this mean?',
    options: [
      '$L_k(x_j) = 1$ for all $j
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Kronecker delta $\\delta_{kj}$ equals 1 when $k = j$ and 0 otherwise. This property allows each $L_k$ to "pick out" exactly one data value.',
  },
      '$L_k(x_j) = 0$ for all $j
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Kronecker delta $\\delta_{kj}$ equals 1 when $k = j$ and 0 otherwise. This property allows each $L_k$ to "pick out" exactly one data value.',
  },
      '$L_k(x_j) = 1$ if $j = k$, and $0$ if $j \\neq k
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Kronecker delta $\\delta_{kj}$ equals 1 when $k = j$ and 0 otherwise. This property allows each $L_k$ to "pick out" exactly one data value.',
  },
      '$L_k(x_j) = k$ for all $j
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Kronecker delta $\\delta_{kj}$ equals 1 when $k = j$ and 0 otherwise. This property allows each $L_k$ to "pick out" exactly one data value.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Kronecker delta $\\delta_{kj}$ equals 1 when $k = j$ and 0 otherwise. This property allows each $L_k$ to "pick out" exactly one data value.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Lagrange interpolation formula is:',
    options: [
      '$p(x) = \\sum_{k=0}^{n} x_k L_k(y)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Lagrange formula writes the interpolating polynomial as a linear combination of basis polynomials $L_k(x)$, weighted by the data values $y_k$.',
  },
      '$p(x) = \\sum_{k=0}^{n} y_k L_k(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Lagrange formula writes the interpolating polynomial as a linear combination of basis polynomials $L_k(x)$, weighted by the data values $y_k$.',
  },
      '$p(x) = \\prod_{k=0}^{n} y_k L_k(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Lagrange formula writes the interpolating polynomial as a linear combination of basis polynomials $L_k(x)$, weighted by the data values $y_k$.',
  },
      '$p(x) = \\sum_{k=0}^{n} y_k x^k
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Lagrange formula writes the interpolating polynomial as a linear combination of basis polynomials $L_k(x)$, weighted by the data values $y_k$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Lagrange formula writes the interpolating polynomial as a linear combination of basis polynomials $L_k(x)$, weighted by the data values $y_k$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For linear interpolation through two points $(x_0, y_0)$ and $(x_1, y_1)$, what is $L_0(x)$?',
    options: [
      '$\\frac{x - x_1}{x_0 - x_1}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$L_0(x) = \\frac{x - x_1}{x_0 - x_1}$ equals 1 at $x_0$ and 0 at $x_1$, as required by the Lagrange basis property.',
  },
      '$\\frac{x - x_0}{x_1 - x_0}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$L_0(x) = \\frac{x - x_1}{x_0 - x_1}$ equals 1 at $x_0$ and 0 at $x_1$, as required by the Lagrange basis property.',
  },
      '$\\frac{x_1 - x}{x_1 + x_0}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$L_0(x) = \\frac{x - x_1}{x_0 - x_1}$ equals 1 at $x_0$ and 0 at $x_1$, as required by the Lagrange basis property.',
  },
      '$\\frac{x_0 - x_1}{x - x_1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$L_0(x) = \\frac{x - x_1}{x_0 - x_1}$ equals 1 at $x_0$ and 0 at $x_1$, as required by the Lagrange basis property.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$L_0(x) = \\frac{x - x_1}{x_0 - x_1}$ equals 1 at $x_0$ and 0 at $x_1$, as required by the Lagrange basis property.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a practical drawback of the Lagrange formula?',
    options: [
      'Adding a new point requires recomputing all basis polynomials',
      'It only works for linear functions',
      'It cannot handle negative function values',
      'It requires the points to be equally spaced',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When a new point is added, every Lagrange basis polynomial $L_k(x)$ must be recalculated since each depends on all interpolation points.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\omega(x) = (x - x_0)(x - x_1)\\cdots(x - x_n)$, then $\\omega\'(x_k)$ equals:',
    options: [
      '$\\prod_{j \\neq k}(x_k - x_j)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'By the product rule, $\\omega\'(x_k) = \\prod_{j \\neq k}(x_k - x_j)$ since all other factors vanish at $x = x_k$.',
  },
      '$\\sum_{j \\neq k}(x_k - x_j)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By the product rule, $\\omega\'(x_k) = \\prod_{j \\neq k}(x_k - x_j)$ since all other factors vanish at $x = x_k$.',
  },
      '$(x_k)^n
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By the product rule, $\\omega\'(x_k) = \\prod_{j \\neq k}(x_k - x_j)$ since all other factors vanish at $x = x_k$.',
  },
      '$n \\cdot \\omega(x_k)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By the product rule, $\\omega\'(x_k) = \\prod_{j \\neq k}(x_k - x_j)$ since all other factors vanish at $x = x_k$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By the product rule, $\\omega\'(x_k) = \\prod_{j \\neq k}(x_k - x_j)$ since all other factors vanish at $x = x_k$.',
  },
];
