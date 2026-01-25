import type { QuizQuestion } from './types';

export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For the polynomial $f(x) = 3x^3 - 2x + 5$ in $\\mathbb{Z}[x]$, what is $\\deg(f)$?',
    options: [
      '$3$',
      '$2$',
      '$1$',
      '$5$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The degree of a polynomial is the highest power of $x$ with non-zero coefficient. Here, the highest power is $x^3$, so $\\deg(f) = 3$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the matrix ring $M_2(\\mathbb{R})$, which property fails?',
    options: [
      'Associativity of multiplication',
      'Commutativity of multiplication',
      'Distributivity',
      'Existence of multiplicative identity'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Matrix multiplication is not commutative in general. For example, $\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix} \\neq \\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $R$ is an integral domain, what can we say about $R[x]$?',
    options: [
      '$R[x]$ is always a field',
      '$R[x]$ has zero divisors',
      '$R[x]$ is finite',
      '$R[x]$ is an integral domain',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If $R$ is an integral domain, then $R[x]$ is also an integral domain. This is because if $f(x), g(x) \\neq 0$ in $R[x]$, then the leading coefficient of $f \\cdot g$ is the product of the leading coefficients of $f$ and $g$, which is non-zero since $R$ has no zero divisors.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the ring $\\mathbb{Z}[x]$, what is $(x^2 + 1)(x - 1)$?',
    options: [
      '$x^3 + x - 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$(x^2 + 1)(x - 1) = x^3 - x^2 + x - 1$. Expanding: $x^2 \\cdot x = x^3$, $x^2 \\cdot (-1) = -x^2$, $1 \\cdot x = x$, $1 \\cdot (-1) = -1$.',
  },
      '$x^3 + x^2 - x - 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$(x^2 + 1)(x - 1) = x^3 - x^2 + x - 1$. Expanding: $x^2 \\cdot x = x^3$, $x^2 \\cdot (-1) = -x^2$, $1 \\cdot x = x$, $1 \\cdot (-1) = -1$.',
  },
      '$x^3 - x^2 + x - 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$(x^2 + 1)(x - 1) = x^3 - x^2 + x - 1$. Expanding: $x^2 \\cdot x = x^3$, $x^2 \\cdot (-1) = -x^2$, $1 \\cdot x = x$, $1 \\cdot (-1) = -1$.',
  },
      '$x^3 - x^2 - x + 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$(x^2 + 1)(x - 1) = x^3 - x^2 + x - 1$. Expanding: $x^2 \\cdot x = x^3$, $x^2 \\cdot (-1) = -x^2$, $1 \\cdot x = x$, $1 \\cdot (-1) = -1$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$(x^2 + 1)(x - 1) = x^3 - x^2 + x - 1$. Expanding: $x^2 \\cdot x = x^3$, $x^2 \\cdot (-1) = -x^2$, $1 \\cdot x = x$, $1 \\cdot (-1) = -1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The center of $M_n(R)$ (all $n \\times n$ matrices over a commutative ring $R$) consists of:',
    options: [
      'All upper triangular matrices',
      'All diagonal matrices',
      'Scalar matrices $rI_n$ where $r \\in R
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The center of $M_n(R)$ consists of matrices that commute with all other matrices. These are exactly the scalar matrices $rI_n$ (where $I_n$ is the identity matrix and $r \\in R$).',
  },
      'Only the zero matrix',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The center of $M_n(R)$ consists of matrices that commute with all other matrices. These are exactly the scalar matrices $rI_n$ (where $I_n$ is the identity matrix and $r \\in R$).',
  },
];
