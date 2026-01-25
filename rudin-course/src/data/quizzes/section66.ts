import type { QuizQuestion } from './types';

export const section66Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a $C^2$ function $f: \\mathbb{R}^n \\to \\mathbb{R}$, the second partial derivatives satisfy:',
    options: [
      '$\\frac{\\partial^2 f}{\\partial x_i \\partial x_j} + \\frac{\\partial^2 f}{\\partial x_j \\partial x_i} = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Clairaut\'s theorem (symmetry of second derivatives) states that if the mixed partial derivatives are continuous, they are equal: $f_{xy} = f_{yx}$.',
  },
      '$\\frac{\\partial^2 f}{\\partial x_i \\partial x_j} = 0$ when $i \\neq j
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Clairaut\'s theorem (symmetry of second derivatives) states that if the mixed partial derivatives are continuous, they are equal: $f_{xy} = f_{yx}$.',
  },
      'The mixed partials are always positive',
      '$\\frac{\\partial^2 f}{\\partial x_i \\partial x_j} = \\frac{\\partial^2 f}{\\partial x_j \\partial x_i}$ (Clairaut\\'s theorem)',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Clairaut\'s theorem (symmetry of second derivatives) states that if the mixed partial derivatives are continuous, they are equal: $f_{xy} = f_{yx}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Hessian matrix of $f: \\mathbb{R}^n \\to \\mathbb{R}$ at a point is:',
    options: [
      'The determinant of the matrix of first derivatives',
      'The gradient vector',
      'The $n \\times n$ matrix of all second partial derivatives',
      'The Jacobian matrix',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Hessian $H_f$ is the $n \\times n$ symmetric matrix with entries $(H_f)_{ij} = \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}$. It represents the second derivative as a bilinear form.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f$ is $C^2$ and has a local minimum at $a$ with $\\nabla f(a) = 0$, then the Hessian $H_f(a)$ is:',
    options: [
      'Positive semidefinite',
      'Positive definite',
      'Negative definite',
      'Indefinite',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'At a local minimum, the Hessian must be positive semidefinite. If the Hessian is positive definite, it guarantees a strict local minimum (sufficient condition).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Taylor\'s theorem for $f: \\mathbb{R}^n \\to \\mathbb{R}$ of class $C^2$ gives:',
    options: [
      '$f(a+h) = f(a) + \\nabla f(a) \\cdot h + \\frac{1}{2} h^T H_f(a) h + o(|h|^2)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The second-order Taylor expansion involves the gradient (first-order term) and the Hessian quadratic form (second-order term), with error $o(|h|^2)$.',
  },
      '$f(a+h) = f(a) + f\\'(a)h + f\\'\\'(a)h^2
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The second-order Taylor expansion involves the gradient (first-order term) and the Hessian quadratic form (second-order term), with error $o(|h|^2)$.',
  },
      '$f(a+h) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!} h^n
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The second-order Taylor expansion involves the gradient (first-order term) and the Hessian quadratic form (second-order term), with error $o(|h|^2)$.',
  },
      '$f(a+h) = f(a) + \\nabla f(a) \\cdot h
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The second-order Taylor expansion involves the gradient (first-order term) and the Hessian quadratic form (second-order term), with error $o(|h|^2)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The second-order Taylor expansion involves the gradient (first-order term) and the Hessian quadratic form (second-order term), with error $o(|h|^2)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A $C^k$ function $f$ has the property that all partial derivatives up to order $k$:',
    options: [
      'Are constant',
      'Exist but may be discontinuous',
      'Are zero',
      'Exist and are continuous',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$C^k$ means continuously differentiable $k$ times: all partial derivatives up to order $k$ exist and are continuous. $C^\\infty$ means smooth (infinitely differentiable).',
  },
];
