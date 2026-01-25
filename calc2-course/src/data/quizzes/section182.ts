import type { QuizQuestion } from './types';

export const section182Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Taylor polynomial of degree $n$ for $f$ centered at $a$ is given by:',
    options: [
      '$T_n(x) = \\sum_{k=0}^{n} f(a) \\cdot x^k
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Taylor polynomial uses the derivatives of $f$ at the point $a$, divided by $k!$, multiplied by $(x-a)^k$.',
  },
      '$T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x - a)^k
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Taylor polynomial uses the derivatives of $f$ at the point $a$, divided by $k!$, multiplied by $(x-a)^k$.',
  },
      '$T_n(x) = \\sum_{k=0}^{n} \\frac{f(a)}{k}(x - a)^k
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Taylor polynomial uses the derivatives of $f$ at the point $a$, divided by $k!$, multiplied by $(x-a)^k$.',
  },
      '$T_n(x) = f(a) + f\\'(a)(x-a)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Taylor polynomial uses the derivatives of $f$ at the point $a$, divided by $k!$, multiplied by $(x-a)^k$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Taylor polynomial uses the derivatives of $f$ at the point $a$, divided by $k!$, multiplied by $(x-a)^k$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The error in Taylor approximation $f(x) - T_n(x)$ is given by the Lagrange remainder formula:',
    options: [
      '$\\frac{f^{(n)}(\\xi)}{n!}(x - a)^n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Lagrange remainder involves the $(n+1)$-th derivative evaluated at some $\\xi$ between $a$ and $x$, divided by $(n+1)!$.',
  },
      '$\\frac{f\\'(\\xi)}{2}(x - a)^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Lagrange remainder involves the $(n+1)$-th derivative evaluated at some $\\xi$ between $a$ and $x$, divided by $(n+1)!$.',
  },
      '$f^{(n+1)}(a)(x - a)^{n+1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Lagrange remainder involves the $(n+1)$-th derivative evaluated at some $\\xi$ between $a$ and $x$, divided by $(n+1)!$.',
  },
      '$\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - a)^{n+1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Lagrange remainder involves the $(n+1)$-th derivative evaluated at some $\\xi$ between $a$ and $x$, divided by $(n+1)!$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Lagrange remainder involves the $(n+1)$-th derivative evaluated at some $\\xi$ between $a$ and $x$, divided by $(n+1)!$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the determinant of a Vandermonde matrix with distinct points $x_0, x_1, \\ldots, x_n$?',
    options: [
      '$\\prod_{0 \\leq i < j \\leq n} (x_j - x_i)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Vandermonde determinant is $\\prod_{0 \\leq i < j \\leq n} (x_j - x_i)$, which is nonzero when all $x_k$ are distinct, guaranteeing a unique interpolating polynomial.',
  },
      '$0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Vandermonde determinant is $\\prod_{0 \\leq i < j \\leq n} (x_j - x_i)$, which is nonzero when all $x_k$ are distinct, guaranteeing a unique interpolating polynomial.',
  },
      '$1
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Vandermonde determinant is $\\prod_{0 \\leq i < j \\leq n} (x_j - x_i)$, which is nonzero when all $x_k$ are distinct, guaranteeing a unique interpolating polynomial.',
  },
      '$\\sum_{k=0}^{n} x_k
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Vandermonde determinant is $\\prod_{0 \\leq i < j \\leq n} (x_j - x_i)$, which is nonzero when all $x_k$ are distinct, guaranteeing a unique interpolating polynomial.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Vandermonde determinant is $\\prod_{0 \\leq i < j \\leq n} (x_j - x_i)$, which is nonzero when all $x_k$ are distinct, guaranteeing a unique interpolating polynomial.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Given $n + 1$ distinct interpolation points, the unique interpolating polynomial has degree at most:',
    options: [
      '$n - 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'With $n + 1$ points, we can determine $n + 1$ coefficients, giving a polynomial of degree at most $n$.',
  },
      '$n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $n + 1$ points, we can determine $n + 1$ coefficients, giving a polynomial of degree at most $n$.',
  },
      '$2n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $n + 1$ points, we can determine $n + 1$ coefficients, giving a polynomial of degree at most $n$.',
  },
      '$n + 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $n + 1$ points, we can determine $n + 1$ coefficients, giving a polynomial of degree at most $n$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $n + 1$ points, we can determine $n + 1$ coefficients, giving a polynomial of degree at most $n$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which is a limitation of Taylor polynomials for practical approximation?',
    options: [
      'They always have degree exactly $n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Taylor polynomials need derivatives at the expansion point, accuracy degrades away from that point, and they may perform poorly for global approximation on an interval.',
  },
      'They cannot approximate continuous functions',
      'They require knowledge of derivatives, which may be unavailable',
      'They require complex numbers',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taylor polynomials need derivatives at the expansion point, accuracy degrades away from that point, and they may perform poorly for global approximation on an interval.',
  },
];
