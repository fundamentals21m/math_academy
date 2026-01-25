import type { QuizQuestion } from './types';

export const section99Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the method of Lagrange multipliers, if we want to extremize $f$ subject to $g(x) = 0$, the condition at an extremum is:',
    options: [
      '$\\nabla f = 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'At a constrained extremum, the gradient of the objective function must be parallel to the gradient of the constraint: $\\nabla f = \\lambda \\nabla g$. The scalar $\\lambda$ is the Lagrange multiplier.',
  },
      '$\\nabla g = 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'At a constrained extremum, the gradient of the objective function must be parallel to the gradient of the constraint: $\\nabla f = \\lambda \\nabla g$. The scalar $\\lambda$ is the Lagrange multiplier.',
  },
      '$\\nabla f = \\lambda \\nabla g$ for some scalar $\\lambda
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'At a constrained extremum, the gradient of the objective function must be parallel to the gradient of the constraint: $\\nabla f = \\lambda \\nabla g$. The scalar $\\lambda$ is the Lagrange multiplier.',
  },
      '$f = g
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'At a constrained extremum, the gradient of the objective function must be parallel to the gradient of the constraint: $\\nabla f = \\lambda \\nabla g$. The scalar $\\lambda$ is the Lagrange multiplier.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'At a constrained extremum, the gradient of the objective function must be parallel to the gradient of the constraint: $\\nabla f = \\lambda \\nabla g$. The scalar $\\lambda$ is the Lagrange multiplier.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Geometrically, the condition $\\nabla f = \\lambda \\nabla g$ means:',
    options: [
      'The level set of $f$ is perpendicular to the constraint surface',
      'The level set of $f$ is tangent to the constraint surface',
      'The gradients of $f$ and $g$ are perpendicular',
      '$f$ and $g$ have the same level sets',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $\\nabla f = \\lambda \\nabla g$, the gradients are parallel. Since each gradient is normal to its level set, this means the level set of $f$ is tangent to the constraint surface $g = 0$ at the extremum.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $m$ constraints $g_1 = 0, \\ldots, g_m = 0$ in $n$ variables, the Lagrange condition is:',
    options: [
      '$\\nabla f = \\lambda_1 \\nabla g_1 + \\cdots + \\lambda_m \\nabla g_m
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'With $m$ constraints, the gradient of the objective must lie in the span of the constraint gradients: $\\nabla f = \\lambda_1 \\nabla g_1 + \\cdots + \\lambda_m \\nabla g_m$, giving $m$ Lagrange multipliers.',
  },
      '$\\nabla f = 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'With $m$ constraints, the gradient of the objective must lie in the span of the constraint gradients: $\\nabla f = \\lambda_1 \\nabla g_1 + \\cdots + \\lambda_m \\nabla g_m$, giving $m$ Lagrange multipliers.',
  },
      '$\\nabla f = \\nabla g_1 \\cdot \\nabla g_m
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'With $m$ constraints, the gradient of the objective must lie in the span of the constraint gradients: $\\nabla f = \\lambda_1 \\nabla g_1 + \\cdots + \\lambda_m \\nabla g_m$, giving $m$ Lagrange multipliers.',
  },
      'The constraints must be independent',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'With $m$ constraints, the gradient of the objective must lie in the span of the constraint gradients: $\\nabla f = \\lambda_1 \\nabla g_1 + \\cdots + \\lambda_m \\nabla g_m$, giving $m$ Lagrange multipliers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To find the closest point on a surface $g(x, y, z) = 0$ to the origin, we minimize:',
    options: [
      '$f = x + y + z$ subject to $g = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'To minimize distance to the origin, we minimize $r^2 = x^2 + y^2 + z^2$ (or equivalently $r$) subject to the constraint $g(x, y, z) = 0$.',
  },
      '$f = x^2 + y^2 + z^2$ subject to $g = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'To minimize distance to the origin, we minimize $r^2 = x^2 + y^2 + z^2$ (or equivalently $r$) subject to the constraint $g(x, y, z) = 0$.',
  },
      '$f = g(x, y, z)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'To minimize distance to the origin, we minimize $r^2 = x^2 + y^2 + z^2$ (or equivalently $r$) subject to the constraint $g(x, y, z) = 0$.',
  },
      '$f = |g(x, y, z)|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'To minimize distance to the origin, we minimize $r^2 = x^2 + y^2 + z^2$ (or equivalently $r$) subject to the constraint $g(x, y, z) = 0$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'To minimize distance to the origin, we minimize $r^2 = x^2 + y^2 + z^2$ (or equivalently $r$) subject to the constraint $g(x, y, z) = 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Lagrange multiplier method requires that the constraint gradients be:',
    options: [
      'Zero at the extremum',
      'Equal to each other',
      'Perpendicular to the gradient of $f$',
      'Linearly independent at the extremum'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For the method to be valid, the gradients $\\nabla g_1, \\ldots, \\nabla g_m$ must be linearly independent at the extremum. This is equivalent to requiring that not all relevant Jacobian determinants vanish.',
  },
];
