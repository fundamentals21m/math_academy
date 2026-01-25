import type { QuizQuestion } from './types';

export const section60Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The rational canonical form of a matrix $A$ is based on viewing $F^n$ as an $F[x]$-module via:',
    options: [
      '$p(x) \\cdot v = p(0) \\cdot v
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We make $F^n$ an $F[x]$-module by $p(x) \\cdot v = p(A)v$. Then $F^n \\cong F[x]/(f_1) \\oplus \\cdots \\oplus F[x]/(f_k)$ where $f_1 | f_2 | \\cdots | f_k$.',
  },
      '$p(x) \\cdot v = p(v)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'We make $F^n$ an $F[x]$-module by $p(x) \\cdot v = p(A)v$. Then $F^n \\cong F[x]/(f_1) \\oplus \\cdots \\oplus F[x]/(f_k)$ where $f_1 | f_2 | \\cdots | f_k$.',
  },
      '$p(x) \\cdot v = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'We make $F^n$ an $F[x]$-module by $p(x) \\cdot v = p(A)v$. Then $F^n \\cong F[x]/(f_1) \\oplus \\cdots \\oplus F[x]/(f_k)$ where $f_1 | f_2 | \\cdots | f_k$.',
  },
      '$p(x) \\cdot v = p(A) \\cdot v
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'We make $F^n$ an $F[x]$-module by $p(x) \\cdot v = p(A)v$. Then $F^n \\cong F[x]/(f_1) \\oplus \\cdots \\oplus F[x]/(f_k)$ where $f_1 | f_2 | \\cdots | f_k$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'We make $F^n$ an $F[x]$-module by $p(x) \\cdot v = p(A)v$. Then $F^n \\cong F[x]/(f_1) \\oplus \\cdots \\oplus F[x]/(f_k)$ where $f_1 | f_2 | \\cdots | f_k$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The invariant factors $f_1 | f_2 | \\cdots | f_k$ of a matrix $A$ satisfy:',
    options: [
      '$f_1 f_2 \\cdots f_k = \\det(A)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The largest invariant factor $f_k$ is the minimal polynomial. The product of all invariant factors equals the characteristic polynomial.',
  },
      '$f_k$ equals the minimal polynomial and $f_1 f_2 \\cdots f_k$ equals the characteristic polynomial',
      'All $f_i$ are linear',
      '$f_1 = f_2 = \\cdots = f_k
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The largest invariant factor $f_k$ is the minimal polynomial. The product of all invariant factors equals the characteristic polynomial.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The largest invariant factor $f_k$ is the minimal polynomial. The product of all invariant factors equals the characteristic polynomial.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The companion matrix of $f(x) = x^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0$ is:',
    options: [
      'A matrix with $1$s on the superdiagonal and $-a_0, -a_1, \\ldots, -a_{n-1}$ in the last column',
      'The identity matrix',
      'Always $n \\times n$ identity',
      'A diagonal matrix',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The companion matrix has $1$s on the subdiagonal (or superdiagonal, depending on convention) and the negatives of coefficients in the last row (or column).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The rational canonical form is:',
    options: [
      'Always diagonal',
      'A block diagonal matrix with companion matrices on the diagonal',
      'The identity matrix',
      'Never block diagonal',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The rational canonical form is block diagonal with companion matrices $C(f_1), C(f_2), \\ldots, C(f_k)$ corresponding to the invariant factors.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Two matrices $A$ and $B$ over $F$ are similar if and only if:',
    options: [
      'They have the same eigenvalues',
      'They have the same characteristic polynomial',
      'They have the same invariant factors',
      'They have the same trace',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Two matrices are similar iff they have the same rational canonical form, which is equivalent to having the same invariant factors.',
  },
];
