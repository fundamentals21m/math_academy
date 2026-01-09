import type { QuizQuestion } from './types';

export const section61Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Jordan canonical form exists for a matrix $A$ over $F$ when:',
    options: [
      'Always, for any field $F$',
      'The characteristic polynomial of $A$ splits completely over $F$',
      '$A$ is symmetric',
      '$F = \\mathbb{R}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Jordan form exists iff all eigenvalues of $A$ are in $F$, i.e., the characteristic polynomial factors into linear factors over $F$. Over algebraically closed fields like $\\mathbb{C}$, it always exists.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A Jordan block $J_k(\\lambda)$ is a $k \\times k$ matrix with:',
    options: [
      '$\\lambda$ on the diagonal and $0$ elsewhere',
      '$\\lambda$ on the diagonal, $1$s on the superdiagonal, $0$ elsewhere',
      '$1$s everywhere',
      '$\\lambda$ in the $(1,1)$ position only'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$J_k(\\lambda)$ has $\\lambda$ on the main diagonal, $1$s on the superdiagonal (entries just above the diagonal), and $0$s elsewhere.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $A$ has Jordan form with a single Jordan block $J_n(\\lambda)$, then the minimal polynomial of $A$ is:',
    options: [
      '$(x - \\lambda)$',
      '$(x - \\lambda)^n$',
      '$x^n$',
      '$(x - \\lambda)^{n-1}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For a single Jordan block $J_n(\\lambda)$, the minimal polynomial is $(x - \\lambda)^n$. The block size equals the multiplicity in the minimal polynomial.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The number of Jordan blocks with eigenvalue $\\lambda$ equals:',
    options: [
      'The algebraic multiplicity of $\\lambda$',
      'The geometric multiplicity of $\\lambda$ (dimension of eigenspace)',
      '$1$ always',
      'The size of the largest Jordan block'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The number of Jordan blocks for $\\lambda$ equals $\\dim(\\ker(A - \\lambda I))$, the geometric multiplicity. The sum of block sizes equals the algebraic multiplicity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A matrix $A$ is diagonalizable if and only if all its Jordan blocks are:',
    options: [
      'Of the same size',
      'Of size $1 \\times 1$',
      'Of size $n \\times n$',
      'Have eigenvalue $0$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A matrix is diagonalizable iff its Jordan form is diagonal, which happens iff all Jordan blocks are $1 \\times 1$ (i.e., just the eigenvalues on the diagonal).',
  },
];
