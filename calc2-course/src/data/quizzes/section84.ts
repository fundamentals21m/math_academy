import type { QuizQuestion } from './types';

export const section84Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The gradient of $f: \\mathbb{R}^n \\to \\mathbb{R}$ is the vector:',
    options: [
      '$(f, f, \\ldots, f)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The gradient $\\nabla f = \\left(\\frac{\\partial f}{\\partial x_1}, \\ldots, \\frac{\\partial f}{\\partial x_n}\\right)$ is the vector of partial derivatives.',
  },
      '$\\sum_i \\frac{\\partial f}{\\partial x_i}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The gradient $\\nabla f = \\left(\\frac{\\partial f}{\\partial x_1}, \\ldots, \\frac{\\partial f}{\\partial x_n}\\right)$ is the vector of partial derivatives.',
  },
      '$\\frac{\\partial^2 f}{\\partial x_1 \\partial x_2}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The gradient $\\nabla f = \\left(\\frac{\\partial f}{\\partial x_1}, \\ldots, \\frac{\\partial f}{\\partial x_n}\\right)$ is the vector of partial derivatives.',
  },
      '$\\left(\\frac{\\partial f}{\\partial x_1}, \\ldots, \\frac{\\partial f}{\\partial x_n}\\right)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The gradient $\\nabla f = \\left(\\frac{\\partial f}{\\partial x_1}, \\ldots, \\frac{\\partial f}{\\partial x_n}\\right)$ is the vector of partial derivatives.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The gradient $\\nabla f = \\left(\\frac{\\partial f}{\\partial x_1}, \\ldots, \\frac{\\partial f}{\\partial x_n}\\right)$ is the vector of partial derivatives.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The gradient $\\nabla f(\\mathbf{a})$ points in the direction of:',
    options: [
      'Minimum rate of change',
      'Zero change',
      'Constant $f
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The gradient points in the direction of steepest ascent (maximum rate of increase).',
  },
      'Maximum rate of increase of $f
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The gradient points in the direction of steepest ascent (maximum rate of increase).',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The gradient points in the direction of steepest ascent (maximum rate of increase).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The magnitude $\\|\\nabla f(\\mathbf{a})\\|$ equals:',
    options: [
      'The maximum directional derivative at $\\mathbf{a}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u} \\leq \\|\\nabla f\\|\\|\\mathbf{u}\\| = \\|\\nabla f\\|$, the max is achieved when $\\mathbf{u} \\parallel \\nabla f$.',
  },
      'The value $f(\\mathbf{a})
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u} \\leq \\|\\nabla f\\|\\|\\mathbf{u}\\| = \\|\\nabla f\\|$, the max is achieved when $\\mathbf{u} \\parallel \\nabla f$.',
  },
      'Zero always',
      'The Laplacian',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u} \\leq \\|\\nabla f\\|\\|\\mathbf{u}\\| = \\|\\nabla f\\|$, the max is achieved when $\\mathbf{u} \\parallel \\nabla f$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $f(x, y, z) = x^2 + y^2 + z^2$, the gradient at $(1, 2, 3)$ is:',
    options: [
      '$(1, 2, 3)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\nabla f = (2x, 2y, 2z)$, so at $(1,2,3)$: $\\nabla f = (2, 4, 6)$.',
  },
      '$14
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\nabla f = (2x, 2y, 2z)$, so at $(1,2,3)$: $\\nabla f = (2, 4, 6)$.',
  },
      '$(2, 4, 6)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\nabla f = (2x, 2y, 2z)$, so at $(1,2,3)$: $\\nabla f = (2, 4, 6)$.',
  },
      '$(1, 4, 9)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\nabla f = (2x, 2y, 2z)$, so at $(1,2,3)$: $\\nabla f = (2, 4, 6)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\nabla f = (2x, 2y, 2z)$, so at $(1,2,3)$: $\\nabla f = (2, 4, 6)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\nabla f(\\mathbf{a}) = \\mathbf{0}$, then $\\mathbf{a}$ is:',
    options: [
      'Necessarily a minimum',
      'A critical point (stationary point)',
      'Necessarily a maximum',
      'Not in the domain of $f
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When the gradient vanishes, $\\mathbf{a}$ is a critical point; it could be a max, min, or saddle point.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When the gradient vanishes, $\\mathbf{a}$ is a critical point; it could be a max, min, or saddle point.',
  },
];
