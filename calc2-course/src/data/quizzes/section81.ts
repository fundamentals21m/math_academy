import type { QuizQuestion } from './types';

export const section81Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The directional derivative of $f$ at $\\mathbf{a}$ in the direction of unit vector $\\mathbf{u}$ is:',
    options: [
      '$f(\\mathbf{a}) \\cdot \\mathbf{u}$',
      '$f\'(\\mathbf{a}; \\mathbf{u})$ where $\\|\\mathbf{u}\\| = 1$',
      '$\\nabla f(\\mathbf{a})$',
      '$f\'(\\mathbf{a}; \\mathbf{u})/\\|\\mathbf{u}\\|$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The directional derivative is $f\'(\\mathbf{a}; \\mathbf{u})$ where $\\mathbf{u}$ is a unit vector in the direction of interest.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The partial derivative $\\frac{\\partial f}{\\partial x_i}$ at $\\mathbf{a}$ is the directional derivative in the direction:',
    options: [
      '$\\mathbf{a}$',
      'The gradient $\\nabla f(\\mathbf{a})$',
      'The $i$th standard basis vector $\\mathbf{e}_i$',
      'Any unit vector'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The partial derivative $\\frac{\\partial f}{\\partial x_i}(\\mathbf{a}) = f\'(\\mathbf{a}; \\mathbf{e}_i)$ is the derivative along the $i$th coordinate axis.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $f(x, y) = x^2y + y^3$, the partial derivative $\\frac{\\partial f}{\\partial x}$ is:',
    options: [
      '$2xy
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Treating $y$ as constant: $\\frac{\\partial}{\\partial x}(x^2y + y^3) = 2xy$.',
  },
      '$2xy + 3y^2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Treating $y$ as constant: $\\frac{\\partial}{\\partial x}(x^2y + y^3) = 2xy$.',
  },
      '$x^2 + 3y^2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Treating $y$ as constant: $\\frac{\\partial}{\\partial x}(x^2y + y^3) = 2xy$.',
  },
      '$2x + 3y^2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Treating $y$ as constant: $\\frac{\\partial}{\\partial x}(x^2y + y^3) = 2xy$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Treating $y$ as constant: $\\frac{\\partial}{\\partial x}(x^2y + y^3) = 2xy$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $f(x, y) = x^2y + y^3$, the partial derivative $\\frac{\\partial f}{\\partial y}$ is:',
    options: [
      '$x^2 + 3y^2$',
      '$2xy$',
      '$2x + 3y^2$',
      '$2xy + 3y^2$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Treating $x$ as constant: $\\frac{\\partial}{\\partial y}(x^2y + y^3) = x^2 + 3y^2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f$ has continuous partial derivatives, the directional derivative in direction $\\mathbf{u}$ can be computed as:',
    options: [
      '$\\mathbf{u} \\cdot \\mathbf{u}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When $f$ is differentiable, $D_{\\mathbf{u}}f(\\mathbf{a}) = \\nabla f(\\mathbf{a}) \\cdot \\mathbf{u}$.',
  },
      '$\\|\\nabla f(\\mathbf{a})\\|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $f$ is differentiable, $D_{\\mathbf{u}}f(\\mathbf{a}) = \\nabla f(\\mathbf{a}) \\cdot \\mathbf{u}$.',
  },
      '$f(\\mathbf{a})\\mathbf{u}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $f$ is differentiable, $D_{\\mathbf{u}}f(\\mathbf{a}) = \\nabla f(\\mathbf{a}) \\cdot \\mathbf{u}$.',
  },
      '$\\nabla f(\\mathbf{a}) \\cdot \\mathbf{u}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $f$ is differentiable, $D_{\\mathbf{u}}f(\\mathbf{a}) = \\nabla f(\\mathbf{a}) \\cdot \\mathbf{u}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $f$ is differentiable, $D_{\\mathbf{u}}f(\\mathbf{a}) = \\nabla f(\\mathbf{a}) \\cdot \\mathbf{u}$.',
  },
];
