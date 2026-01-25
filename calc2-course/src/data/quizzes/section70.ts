import type { QuizQuestion } from './types';

export const section70Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Cayley-Hamilton theorem states that every square matrix:',
    options: [
      'Satisfies its own characteristic equation',
      'Is diagonalizable',
      'Has real eigenvalues',
      'Commutes with its transpose',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If $p(\\lambda) = \\det(\\lambda I - A)$ is the characteristic polynomial of $A$, then $p(A) = O$ (the zero matrix).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $A$ is a $2 \\times 2$ matrix with characteristic polynomial $\\lambda^2 - 5\\lambda + 6$, then Cayley-Hamilton implies:',
    options: [
      '$A^2 = 5A - 6I
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By Cayley-Hamilton, substituting $A$ for $\\lambda$: $A^2 - 5A + 6I = O$.',
  },
      '$A^2 - 5A + 6I = O
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Cayley-Hamilton, substituting $A$ for $\\lambda$: $A^2 - 5A + 6I = O$.',
  },
      '$A^2 + 5A + 6I = O
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Cayley-Hamilton, substituting $A$ for $\\lambda$: $A^2 - 5A + 6I = O$.',
  },
      '$A = 5I
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Cayley-Hamilton, substituting $A$ for $\\lambda$: $A^2 - 5A + 6I = O$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Cayley-Hamilton, substituting $A$ for $\\lambda$: $A^2 - 5A + 6I = O$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Using Cayley-Hamilton, any power $A^n$ of an $n \\times n$ matrix can be expressed as:',
    options: [
      'A polynomial in $A$ of degree exactly $n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Cayley-Hamilton lets us reduce $A^n$ to lower powers, so any $A^k$ is a polynomial in $A$ of degree at most $n-1$.',
  },
      'An infinite series',
      'A diagonal matrix',
      'A polynomial in $A$ of degree at most $n-1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Cayley-Hamilton lets us reduce $A^n$ to lower powers, so any $A^k$ is a polynomial in $A$ of degree at most $n-1$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Cayley-Hamilton lets us reduce $A^n$ to lower powers, so any $A^k$ is a polynomial in $A$ of degree at most $n-1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Cayley-Hamilton theorem implies that $e^{tA}$ for an $n \\times n$ matrix is:',
    options: [
      'A polynomial in $A$ with coefficients depending on $t
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Since high powers of $A$ reduce to polynomials of degree $\\leq n-1$ in $A$, $e^{tA}$ can be written as $\\sum_{k=0}^{n-1} f_k(t)A^k$.',
  },
      'Always a polynomial of degree $n$ in $t
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Since high powers of $A$ reduce to polynomials of degree $\\leq n-1$ in $A$, $e^{tA}$ can be written as $\\sum_{k=0}^{n-1} f_k(t)A^k$.',
  },
      'Equal to $I + tA
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Since high powers of $A$ reduce to polynomials of degree $\\leq n-1$ in $A$, $e^{tA}$ can be written as $\\sum_{k=0}^{n-1} f_k(t)A^k$.',
  },
      'Independent of $A
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Since high powers of $A$ reduce to polynomials of degree $\\leq n-1$ in $A$, $e^{tA}$ can be written as $\\sum_{k=0}^{n-1} f_k(t)A^k$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Since high powers of $A$ reduce to polynomials of degree $\\leq n-1$ in $A$, $e^{tA}$ can be written as $\\sum_{k=0}^{n-1} f_k(t)A^k$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a $3 \\times 3$ matrix with characteristic polynomial $\\lambda^3 - 6\\lambda^2 + 11\\lambda - 6$, Cayley-Hamilton gives:',
    options: [
      '$A^3 = 6A^2 - 11A + 6I
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Substituting $A$ for $\\lambda$ in the characteristic polynomial gives $A^3 - 6A^2 + 11A - 6I = O$.',
  },
      '$A^3 - 6A^2 + 11A - 6I = O
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Substituting $A$ for $\\lambda$ in the characteristic polynomial gives $A^3 - 6A^2 + 11A - 6I = O$.',
  },
      '$A^3 + 6A^2 + 11A + 6I = O
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Substituting $A$ for $\\lambda$ in the characteristic polynomial gives $A^3 - 6A^2 + 11A - 6I = O$.',
  },
      '$A = 6I
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Substituting $A$ for $\\lambda$ in the characteristic polynomial gives $A^3 - 6A^2 + 11A - 6I = O$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Substituting $A$ for $\\lambda$ in the characteristic polynomial gives $A^3 - 6A^2 + 11A - 6I = O$.',
  },
];
