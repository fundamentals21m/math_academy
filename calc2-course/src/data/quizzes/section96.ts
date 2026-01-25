import type { QuizQuestion } from './types';

export const section96Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Hessian matrix $H(x)$ of a scalar field $f$ at a point $x$ is:',
    options: [
      'The matrix of first partial derivatives',
      'The gradient vector',
      'The Jacobian matrix',
      'The matrix of second partial derivatives $[D_{ij}f(x)]
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Hessian matrix is the $n \\times n$ matrix of second-order partial derivatives: $H(x) = [D_{ij}f(x)]_{i,j=1}^n$. When the second partials are continuous, the Hessian is symmetric.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Hessian matrix is the $n \\times n$ matrix of second-order partial derivatives: $H(x) = [D_{ij}f(x)]_{i,j=1}^n$. When the second partials are continuous, the Hessian is symmetric.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The second-order Taylor formula for a scalar field $f$ at a stationary point $a$ is:',
    options: [
      '$f(a + y) - f(a) = \\nabla f(a) \\cdot y$',
      '$f(a + y) - f(a) = \\frac{1}{2}yH(a)y^t + \\|y\\|^2 E_2(a, y)$',
      '$f(a + y) - f(a) = yH(a)$',
      '$f(a + y) - f(a) = 0$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'At a stationary point where $\\nabla f(a) = 0$, the second-order Taylor formula gives $f(a + y) - f(a) = \\frac{1}{2}yH(a)y^t + \\|y\\|^2 E_2(a, y)$, where $E_2 \\to 0$ as $y \\to 0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The quadratic form associated with the Hessian matrix is:',
    options: [
      '$yH(a)y^t = \\sum_{i,j} D_{ij}f(a)y_i y_j
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The quadratic form associated with the Hessian is $Q(y) = yH(a)y^t = \\sum_{i=1}^n \\sum_{j=1}^n D_{ij}f(a)y_i y_j$. Its sign determines the nature of stationary points.',
  },
      '$\\det H(a)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The quadratic form associated with the Hessian is $Q(y) = yH(a)y^t = \\sum_{i=1}^n \\sum_{j=1}^n D_{ij}f(a)y_i y_j$. Its sign determines the nature of stationary points.',
  },
      '$\\text{tr}(H(a))
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The quadratic form associated with the Hessian is $Q(y) = yH(a)y^t = \\sum_{i=1}^n \\sum_{j=1}^n D_{ij}f(a)y_i y_j$. Its sign determines the nature of stationary points.',
  },
      '$\\|H(a)\\|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The quadratic form associated with the Hessian is $Q(y) = yH(a)y^t = \\sum_{i=1}^n \\sum_{j=1}^n D_{ij}f(a)y_i y_j$. Its sign determines the nature of stationary points.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The quadratic form associated with the Hessian is $Q(y) = yH(a)y^t = \\sum_{i=1}^n \\sum_{j=1}^n D_{ij}f(a)y_i y_j$. Its sign determines the nature of stationary points.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For small $y$ near a stationary point, the sign of $f(a + y) - f(a)$ is determined by:',
    options: [
      'The value of $f(a)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since the error term $\\|y\\|^2 E_2(a, y)$ tends to zero faster than $\\|y\\|^2$, for small $y$ the sign of $f(a + y) - f(a)$ is determined by the sign of the quadratic form $yH(a)y^t$.',
  },
      'The sign of the gradient',
      'The sign of the quadratic form $yH(a)y^t
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since the error term $\\|y\\|^2 E_2(a, y)$ tends to zero faster than $\\|y\\|^2$, for small $y$ the sign of $f(a + y) - f(a)$ is determined by the sign of the quadratic form $yH(a)y^t$.',
  },
      'The trace of the Hessian',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since the error term $\\|y\\|^2 E_2(a, y)$ tends to zero faster than $\\|y\\|^2$, for small $y$ the sign of $f(a + y) - f(a)$ is determined by the sign of the quadratic form $yH(a)y^t$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The proof of the second-order Taylor formula uses:',
    options: [
      'Green\\'s theorem',
      'The one-dimensional Taylor formula applied to $g(u) = f(a + uy)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The proof defines $g(u) = f(a + uy)$ and applies the one-dimensional second-order Taylor formula with Lagrange\'s remainder: $g(1) - g(0) = g\'(0) + \\frac{1}{2!}g\'\'(c)$. The chain rule gives the required formula.',
  },
      'The mean value theorem for integrals',
      'Integration by parts',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The proof defines $g(u) = f(a + uy)$ and applies the one-dimensional second-order Taylor formula with Lagrange\'s remainder: $g(1) - g(0) = g\'(0) + \\frac{1}{2!}g\'\'(c)$. The chain rule gives the required formula.',
  },
];
