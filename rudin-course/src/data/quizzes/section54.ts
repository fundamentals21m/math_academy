import type { QuizQuestion } from './types';

export const section54Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The exponential function $E(z) = \\sum_{n=0}^{\\infty} \\frac{z^n}{n!}$ satisfies:',
    options: [
      '$E(z + w) = E(z) + E(w)$',
      '$E(z + w) = E(z) \\cdot E(w)$',
      '$E(zw) = E(z) \\cdot E(w)$',
      '$E(z)E(w) = E(z) + E(w)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The fundamental property of the exponential is $E(z + w) = E(z)E(w)$. This follows from the Cauchy product of the two series and the binomial theorem.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The natural logarithm $L(x)$ is defined for $x > 0$ as:',
    options: [
      'The inverse function of $E$ restricted to real numbers',
      '$\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$',
      'The derivative of $E(x)$',
      '$\\int_0^x E(t) \\, dt$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $E: \\mathbb{R} \\to (0, \\infty)$ is strictly increasing (with $E\' = E > 0$), it has an inverse function $L: (0, \\infty) \\to \\mathbb{R}$, the natural logarithm.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The derivative of $L(x)$ equals:',
    options: [
      '$L(x)$',
      '$1/x$',
      '$E(x)$',
      '$x$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By the inverse function theorem: $L\'(x) = 1/E\'(L(x)) = 1/E(L(x)) = 1/x$. Alternatively, from $\\int_1^x (1/t)\\,dt = L(x)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For real $x$ and $y > 0$, $y^x$ is defined as:',
    options: [
      '$y$ multiplied by itself $x$ times',
      '$E(x \\cdot L(y))$',
      '$L(x \\cdot E(y))$',
      '$x^y$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For arbitrary real exponents, we define $y^x = E(x \\cdot L(y)) = e^{x \\ln y}$. This extends the definition from rational to all real exponents while preserving the expected properties.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The limit $\\lim_{n \\to \\infty} (1 + 1/n)^n$ equals:',
    options: [
      '$1$',
      '$2$',
      '$e = E(1)$',
      '$\\infty$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This is one of the classical definitions of $e$. Using $L(1 + 1/n)^n = n \\cdot L(1 + 1/n) \\to 1$ as $n \\to \\infty$ (since $L\'(1) = 1$), we get $(1 + 1/n)^n \\to E(1) = e$.',
  },
];
