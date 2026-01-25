import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The partial derivative $\\frac{\\partial f}{\\partial x_j}(x_0)$ is defined as:',
    options: [
      '$\\lim_{t \\to 0} \\frac{f(x_0 + te_j) - f(x_0)}{t}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Partial derivatives are computed by varying one variable while holding others fixed.',
  },
      'The total derivative of $f
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Partial derivatives are computed by varying one variable while holding others fixed.',
  },
      'The gradient of $f
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Partial derivatives are computed by varying one variable while holding others fixed.',
  },
      '$f(x_0) / x_j
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Partial derivatives are computed by varying one variable while holding others fixed.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Partial derivatives are computed by varying one variable while holding others fixed.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The gradient $\\nabla f$ of $f: \\mathbf{R}^n \\to \\mathbf{R}$ is:',
    options: [
      'A scalar',
      'A matrix',
      'The vector $(\\frac{\\partial f}{\\partial x_1}, \\ldots, \\frac{\\partial f}{\\partial x_n})$',
      'The Laplacian'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The gradient is the vector of partial derivatives.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The directional derivative of $f$ at $x_0$ in direction $v$ is:',
    options: [
      '$\\nabla f \\cdot v$ only when $\\|v\\| = 1$',
      '$f(v)$',
      '$\\|\\nabla f\\|$',
      '$\\lim_{t \\to 0} \\frac{f(x_0 + tv) - f(x_0)}{t}$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The directional derivative is the rate of change along direction $v$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f$ is differentiable at $x_0$, the directional derivative in direction $v$ equals:',
    options: [
      '$\\|v\\|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For differentiable functions, directional derivatives are given by $\\nabla f \\cdot v$.',
  },
      '$Df(x_0) \\cdot v = \\nabla f(x_0) \\cdot v
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For differentiable functions, directional derivatives are given by $\\nabla f \\cdot v$.',
  },
      '$\\nabla f(x_0)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For differentiable functions, directional derivatives are given by $\\nabla f \\cdot v$.',
  },
      '$0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For differentiable functions, directional derivatives are given by $\\nabla f \\cdot v$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For differentiable functions, directional derivatives are given by $\\nabla f \\cdot v$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Having all partial derivatives exist at $x_0$:',
    options: [
      'Does not imply $f$ is differentiable at $x_0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Existence of partial derivatives does not guarantee differentiability. Continuity of partials does.',
  },
      'Implies $f$ is differentiable at $x_0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Existence of partial derivatives does not guarantee differentiability. Continuity of partials does.',
  },
      'Implies $f$ is continuous at $x_0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Existence of partial derivatives does not guarantee differentiability. Continuity of partials does.',
  },
      'Implies $f$ is constant',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Existence of partial derivatives does not guarantee differentiability. Continuity of partials does.',
  },
];
