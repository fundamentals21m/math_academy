import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The characteristic polynomial of an $n \\times n$ matrix $A$ is:',
    options: [
      '$\\det(A - \\lambda I)$',
      '$\\det A - \\lambda$',
      '$\\det(\\lambda I - A)$',
      '$\\lambda^n - \\det A$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The characteristic polynomial is defined as $f(\\lambda) = \\det(\\lambda I - A)$. Note: $\\det(A - \\lambda I) = (-1)^n \\det(\\lambda I - A)$ gives the same roots.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The degree of the characteristic polynomial of an $n \\times n$ matrix is:',
    options: ['$n-1$', '$n$', '$n+1$', '$2n$'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The characteristic polynomial $\\det(\\lambda I - A)$ is a polynomial of degree $n$ with leading term $\\lambda^n$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The product of all eigenvalues of a matrix $A$ equals:',
    options: [
      '$\\det A
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'From the factored form $f(\\lambda) = (\\lambda - \\lambda_1) \\cdots (\\lambda - \\lambda_n)$, setting $\\lambda = 0$ gives $f(0) = (-1)^n \\lambda_1 \\cdots \\lambda_n = (-1)^n \\det A$, so the product of eigenvalues equals $\\det A$.',
  },
      '$\\text{tr} \\, A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'From the factored form $f(\\lambda) = (\\lambda - \\lambda_1) \\cdots (\\lambda - \\lambda_n)$, setting $\\lambda = 0$ gives $f(0) = (-1)^n \\lambda_1 \\cdots \\lambda_n = (-1)^n \\det A$, so the product of eigenvalues equals $\\det A$.',
  },
      '$n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'From the factored form $f(\\lambda) = (\\lambda - \\lambda_1) \\cdots (\\lambda - \\lambda_n)$, setting $\\lambda = 0$ gives $f(0) = (-1)^n \\lambda_1 \\cdots \\lambda_n = (-1)^n \\det A$, so the product of eigenvalues equals $\\det A$.',
  },
      '$\\text{rank} \\, A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'From the factored form $f(\\lambda) = (\\lambda - \\lambda_1) \\cdots (\\lambda - \\lambda_n)$, setting $\\lambda = 0$ gives $f(0) = (-1)^n \\lambda_1 \\cdots \\lambda_n = (-1)^n \\det A$, so the product of eigenvalues equals $\\det A$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'From the factored form $f(\\lambda) = (\\lambda - \\lambda_1) \\cdots (\\lambda - \\lambda_n)$, setting $\\lambda = 0$ gives $f(0) = (-1)^n \\lambda_1 \\cdots \\lambda_n = (-1)^n \\det A$, so the product of eigenvalues equals $\\det A$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The sum of all eigenvalues of a matrix $A$ equals:',
    options: [
      '$\\text{tr} \\, A$',
      '$\\det A$',
      '$\\text{rank} \\, A$',
      '$n \\cdot \\det A$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Comparing coefficients of $\\lambda^{n-1}$ in the characteristic polynomial shows that the sum of eigenvalues equals the trace $\\text{tr} \\, A = a_{11} + a_{22} + \\cdots + a_{nn}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Over $\\mathbb{C}$, an $n \\times n$ matrix has:',
    options: [
      'At most $n$ eigenvalues',
      'At least $n$ eigenvalues',
      'An infinite number of eigenvalues',
      'Exactly $n$ eigenvalues (counting multiplicity)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'By the fundamental theorem of algebra, the degree-$n$ characteristic polynomial has exactly $n$ complex roots (counting multiplicity), so every $n \\times n$ complex matrix has exactly $n$ eigenvalues.',
  },
];
