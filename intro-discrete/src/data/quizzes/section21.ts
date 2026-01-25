import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The degree of $f(x) = x^5 + 3x^2 + 1$ is:',
    options: [
      '3',
      '8',
      '1',
      '5',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The degree is the highest power of $x$ with non-zero coefficient, which is 5.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\deg(f) = 3$ and $\\deg(g) = 2$, then $\\deg(fg) = $',
    options: [
      '6',
      '3',
      '5',
      '2',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For non-zero polynomials over an integral domain, $\\deg(fg) = \\deg(f) + \\deg(g) = 3 + 2 = 5$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In $\\mathbb{Z}_2[x]$, $(x + 1)^2 = $',
    options: [
      '$x^2 + 2x + 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$(x+1)^2 = x^2 + 2x + 1 = x^2 + 1$ in $\\mathbb{Z}_2$ since $2 \\equiv 0$.',
  },
      '$x^2 + x + 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(x+1)^2 = x^2 + 2x + 1 = x^2 + 1$ in $\\mathbb{Z}_2$ since $2 \\equiv 0$.',
  },
      '$1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(x+1)^2 = x^2 + 2x + 1 = x^2 + 1$ in $\\mathbb{Z}_2$ since $2 \\equiv 0$.',
  },
      '$x^2 + 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(x+1)^2 = x^2 + 2x + 1 = x^2 + 1$ in $\\mathbb{Z}_2$ since $2 \\equiv 0$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(x+1)^2 = x^2 + 2x + 1 = x^2 + 1$ in $\\mathbb{Z}_2$ since $2 \\equiv 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'By the Factor Theorem, $r$ is a root of $f(x)$ if and only if:',
    options: [
      '$f(r) = 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$r$ is a root of $f(x)$ if and only if $(x - r)$ divides $f(x)$.',
  },
      '$r$ divides the constant term',
      '$f(x)$ has degree $r
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$r$ is a root of $f(x)$ if and only if $(x - r)$ divides $f(x)$.',
  },
      '$(x - r)$ divides $f(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$r$ is a root of $f(x)$ if and only if $(x - r)$ divides $f(x)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$r$ is a root of $f(x)$ if and only if $(x - r)$ divides $f(x)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A polynomial of degree $n$ over an integral domain has at most:',
    options: [
      '$n$ roots',
      '$n + 1$ roots',
      '$2n$ roots',
      'Infinitely many roots',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Over an integral domain, a degree-$n$ polynomial has at most $n$ roots.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The units in $\\mathbb{Z}[x]$ are:',
    options: [
      'All polynomials',
      '$\\pm 1$ only',
      'All non-zero polynomials',
      'All monic polynomials',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The units in $R[x]$ are the units of $R$. In $\\mathbb{Z}$, the units are $\\pm 1$.',
  },
];
