import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the Lagrange basis polynomial $L_i(x)$ designed to satisfy?',
    options: [
      '$L_i(x_i) = 1$ and $L_i(x_j) = 0$ for $j \\neq i
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Lagrange basis polynomial $L_i(x)$ equals 1 at its "own" point $x_i$ and equals 0 at all other points $x_j$ for $j \\neq i$. This "picks out" each point\'s contribution.',
  },
      '$L_i(x_i) = 0$ and $L_i(x_j) = 1$ for $j \\neq i
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Lagrange basis polynomial $L_i(x)$ equals 1 at its "own" point $x_i$ and equals 0 at all other points $x_j$ for $j \\neq i$. This "picks out" each point\'s contribution.',
  },
      '$L_i(x) = x_i$ for all $x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Lagrange basis polynomial $L_i(x)$ equals 1 at its "own" point $x_i$ and equals 0 at all other points $x_j$ for $j \\neq i$. This "picks out" each point\'s contribution.',
  },
      '$L_i(x) = 1$ for all $x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Lagrange basis polynomial $L_i(x)$ equals 1 at its "own" point $x_i$ and equals 0 at all other points $x_j$ for $j \\neq i$. This "picks out" each point\'s contribution.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Lagrange basis polynomial $L_i(x)$ equals 1 at its "own" point $x_i$ and equals 0 at all other points $x_j$ for $j \\neq i$. This "picks out" each point\'s contribution.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the formula for the Lagrange basis polynomial $L_i(x)$?',
    options: [
      '$L_i(x) = \\sum_{j \\neq i} \\frac{x - x_j}{x_i - x_j}$',
      '$L_i(x) = \\sum_{j \\neq i} (x - x_j)(x_i - x_j)$',
      '$L_i(x) = \\prod_{j \\neq i} \\frac{x_i - x_j}{x - x_j}$',
      '$L_i(x) = \\prod_{j \\neq i} \\frac{x - x_j}{x_i - x_j}$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The Lagrange basis polynomial is $L_i(x) = \\prod_{j \\neq i} \\frac{x - x_j}{x_i - x_j}$. The product of terms ensures $L_i(x_j) = 0$ when any $(x - x_j) = 0$, and the denominator normalizes so $L_i(x_i) = 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How is the secret $s = f(0)$ recovered using Lagrange interpolation?',
    options: [
      '$s = \\prod_{i=1}^{t} y_i \\cdot L_i(0)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The secret is recovered as $s = f(0) = \\sum_{i=1}^{t} y_i \\cdot L_i(0) = \\sum_{i=1}^{t} y_i \\cdot \\lambda_i$, a weighted sum of share values using Lagrange coefficients evaluated at 0.',
  },
      '$s = \\sum_{i=1}^{t} y_i \\cdot L_i(0)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The secret is recovered as $s = f(0) = \\sum_{i=1}^{t} y_i \\cdot L_i(0) = \\sum_{i=1}^{t} y_i \\cdot \\lambda_i$, a weighted sum of share values using Lagrange coefficients evaluated at 0.',
  },
      '$s = \\sum_{i=1}^{t} y_i / L_i(0)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The secret is recovered as $s = f(0) = \\sum_{i=1}^{t} y_i \\cdot L_i(0) = \\sum_{i=1}^{t} y_i \\cdot \\lambda_i$, a weighted sum of share values using Lagrange coefficients evaluated at 0.',
  },
      '$s = y_1 \\cdot L_1(0) - y_2 \\cdot L_2(0)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The secret is recovered as $s = f(0) = \\sum_{i=1}^{t} y_i \\cdot L_i(0) = \\sum_{i=1}^{t} y_i \\cdot \\lambda_i$, a weighted sum of share values using Lagrange coefficients evaluated at 0.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The secret is recovered as $s = f(0) = \\sum_{i=1}^{t} y_i \\cdot L_i(0) = \\sum_{i=1}^{t} y_i \\cdot \\lambda_i$, a weighted sum of share values using Lagrange coefficients evaluated at 0.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'For shares at $x = 1, 2, 3$, compute $\\lambda_1 = \\frac{(0-2)(0-3)}{(1-2)(1-3)}$.',
    correctAnswer: 3,
    numericRange: { min: -10, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\lambda_1 = \\frac{(0-2)(0-3)}{(1-2)(1-3)} = \\frac{(-2)(-3)}{(-1)(-2)} = \\frac{6}{2} = 3$',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What important property do Lagrange coefficients $\\lambda_i$ always satisfy?',
    options: [
      '$\\prod_i \\lambda_i = 1
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Lagrange coefficients always sum to 1: $\\sum_i \\lambda_i = 1$. This is because $\\sum_i L_i(x) = 1$ for all $x$ (the basis polynomials form a partition of unity).',
  },
      '$\\sum_i \\lambda_i = 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Lagrange coefficients always sum to 1: $\\sum_i \\lambda_i = 1$. This is because $\\sum_i L_i(x) = 1$ for all $x$ (the basis polynomials form a partition of unity).',
  },
      '$\\sum_i \\lambda_i = 1
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Lagrange coefficients always sum to 1: $\\sum_i \\lambda_i = 1$. This is because $\\sum_i L_i(x) = 1$ for all $x$ (the basis polynomials form a partition of unity).',
  },
      '$\\lambda_i > 0$ for all $i
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Lagrange coefficients always sum to 1: $\\sum_i \\lambda_i = 1$. This is because $\\sum_i L_i(x) = 1$ for all $x$ (the basis polynomials form a partition of unity).',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Lagrange coefficients always sum to 1: $\\sum_i \\lambda_i = 1$. This is because $\\sum_i L_i(x) = 1$ for all $x$ (the basis polynomials form a partition of unity).',
  },
];
