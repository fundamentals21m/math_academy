import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A formal power series is:',
    options: [
      'A power series that converges everywhere',
      'An infinite sum $\\sum_{n=0}^\\infty a_n x^n$ treated algebraically without regard to convergence',
      'A polynomial of high degree',
      'A series that diverges'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Formal power series are algebraic objects—we manipulate them without worrying about convergence.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Two formal power series $\\sum a_n x^n$ and $\\sum b_n x^n$ are equal if:',
    options: [
      'They converge to the same function',
      '$a_n = b_n$ for all $n$',
      'Their sums are equal at $x = 1$',
      'They have the same radius of convergence'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Formal power series are equal iff their coefficients are identical.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The product of formal power series $\\sum a_n x^n$ and $\\sum b_n x^n$ has coefficients:',
    options: [
      '$c_n = a_n b_n$',
      '$c_n = a_n + b_n$',
      '$c_n = \\sum_{k=0}^n a_k b_{n-k}$ (Cauchy product)',
      '$c_n = a_n / b_n$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The product uses the Cauchy (convolution) formula: $c_n = \\sum_{k=0}^n a_k b_{n-k}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The ring of formal power series $\\mathbf{R}[[x]]$ is:',
    options: [
      'A field',
      'An integral domain',
      'Not a ring',
      'Isomorphic to $\\mathbf{R}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Formal power series form an integral domain. A series is invertible iff its constant term is nonzero.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A formal power series $f = \\sum a_n x^n$ is invertible in $\\mathbf{R}[[x]]$ iff:',
    options: [
      'All coefficients are nonzero',
      '$a_0 \\neq 0$',
      'The series converges',
      '$a_1 \\neq 0$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A formal power series has a multiplicative inverse iff its constant term $a_0$ is nonzero.',
  },
];
