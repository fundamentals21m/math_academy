import type { QuizQuestion } from './types';

export const section185Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The first-order divided difference $f[x_k, x_{k+1}]$ is defined as:',
    options: [
      '$f(x_{k+1}) - f(x_k)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The first divided difference is the slope of the secant line through the two points, generalizing the difference quotient.',
  },
      '$f(x_k) \\cdot f(x_{k+1})
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The first divided difference is the slope of the secant line through the two points, generalizing the difference quotient.',
  },
      '$\\frac{f(x_{k+1}) - f(x_k)}{x_{k+1} - x_k}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The first divided difference is the slope of the secant line through the two points, generalizing the difference quotient.',
  },
      '$\\frac{f(x_k) + f(x_{k+1})}{2}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The first divided difference is the slope of the secant line through the two points, generalizing the difference quotient.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The first divided difference is the slope of the secant line through the two points, generalizing the difference quotient.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is an advantage of Newton\'s interpolation formula over Lagrange\'s?',
    options: [
      'It requires fewer data points',
      'Adding a new point only adds one term',
      'It works only for polynomials',
      'It requires no arithmetic operations',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Newton\'s formula is incremental: adding a new point $x_{n+1}$ only requires computing one new divided difference and adding one term.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The forward difference operator $\\Delta$ is defined as $\\Delta f_k = $',
    options: [
      '$f_k - f_{k-1}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The forward difference $\\Delta f_k = f_{k+1} - f_k$ measures the change in $f$ at consecutive points.',
  },
      '$f_{k+1} + f_k
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The forward difference $\\Delta f_k = f_{k+1} - f_k$ measures the change in $f$ at consecutive points.',
  },
      '$\\frac{f_{k+1} - f_k}{h}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The forward difference $\\Delta f_k = f_{k+1} - f_k$ measures the change in $f$ at consecutive points.',
  },
      '$f_{k+1} - f_k
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The forward difference $\\Delta f_k = f_{k+1} - f_k$ measures the change in $f$ at consecutive points.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The forward difference $\\Delta f_k = f_{k+1} - f_k$ measures the change in $f$ at consecutive points.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For equally spaced points with spacing $h$, the divided difference $f[x_0, x_1, \\ldots, x_n]$ equals:',
    options: [
      '$\\frac{\\Delta^n f_0}{n! \\, h^n}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The divided difference is related to the forward difference by $f[x_0, \\ldots, x_n] = \\frac{\\Delta^n f_0}{n! \\, h^n}$.',
  },
      '$\\Delta^n f_0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The divided difference is related to the forward difference by $f[x_0, \\ldots, x_n] = \\frac{\\Delta^n f_0}{n! \\, h^n}$.',
  },
      '$n! \\, h^n \\Delta^n f_0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The divided difference is related to the forward difference by $f[x_0, \\ldots, x_n] = \\frac{\\Delta^n f_0}{n! \\, h^n}$.',
  },
      '$\\frac{\\Delta^n f_0}{h}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The divided difference is related to the forward difference by $f[x_0, \\ldots, x_n] = \\frac{\\Delta^n f_0}{n! \\, h^n}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The divided difference is related to the forward difference by $f[x_0, \\ldots, x_n] = \\frac{\\Delta^n f_0}{n! \\, h^n}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In Newton\'s forward difference formula, $p(x_0 + sh) = \\sum_{k=0}^{n} \\binom{s}{k} \\Delta^k f_0$, what is $\\binom{s}{k}$?',
    options: [
      'The ordinary binomial coefficient $\\frac{n!}{k!(n-k)!}$',
      '$s^k$',
      'The Stirling number of the first kind',
      'The generalized binomial coefficient $\\frac{s(s-1)(s-2)\\cdots(s-k+1)}{k!}$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The generalized binomial coefficient extends to non-integer $s$: $\\binom{s}{k} = \\frac{s(s-1)\\cdots(s-k+1)}{k!}$.',
  },
];
