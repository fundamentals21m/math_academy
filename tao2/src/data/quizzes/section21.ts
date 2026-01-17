import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Cauchy product of $\\sum a_n$ and $\\sum b_n$ is $\\sum c_n$ where:',
    options: [
      '$c_n = a_n b_n$',
      '$c_n = a_n + b_n$',
      '$c_n = \\sum_{k=0}^n a_k b_{n-k}$',
      '$c_n = \\max(a_n, b_n)$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Cauchy product uses the convolution formula.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\sum a_n x^n$ and $\\sum b_n x^n$ both have radius of convergence $\\geq R$, their product has radius:',
    options: [
      'Exactly $R$',
      'At least $R$',
      'At most $R$',
      'Could be anything'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The product of power series converges at least where both factors converge.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Mertens\' theorem states that if $\\sum a_n$ converges absolutely and $\\sum b_n$ converges, then:',
    options: [
      'The Cauchy product diverges',
      'The Cauchy product converges to $(\\sum a_n)(\\sum b_n)$',
      'The Cauchy product converges but not to the expected value',
      'Nothing can be concluded'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Mertens\' theorem: if one series converges absolutely and the other converges, the Cauchy product converges to the product of the sums.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The product $(1 + x + x^2 + \\cdots)(1 + x + x^2 + \\cdots)$ for $|x| < 1$ equals:',
    options: [
      '$\\frac{1}{(1-x)^2}$',
      '$\\frac{2}{1-x}$',
      '$\\frac{1}{1-x}$',
      '$\\frac{1}{1-2x}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Each factor equals $\\frac{1}{1-x}$, so the product is $\\frac{1}{(1-x)^2}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The coefficient of $x^n$ in $(1-x)^{-2} = \\sum c_n x^n$ is:',
    options: [
      '$n$',
      '$n + 1$',
      '$2^n$',
      '$1$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'We have $(1-x)^{-2} = \\sum_{n=0}^\\infty (n+1) x^n$.',
  },
];
