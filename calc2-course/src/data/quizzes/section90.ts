import type { QuizQuestion } from './types';

export const section90Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which of the following is the strongest condition for a function $f: \\mathbb{R}^n \\to \\mathbb{R}$ at a point $a$?',
    options: [
      'All partial derivatives $D_1 f(a), \\ldots, D_n f(a)$ exist',
      'All directional derivatives $f\'(a; y)$ exist for all $y$',
      'All partial derivatives are continuous at $a$',
      'The function $f$ is differentiable at $a$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Continuous differentiability (all partial derivatives continuous at $a$) is the strongest condition. It implies differentiability, which implies existence of all directional derivatives, which implies existence of partial derivatives. The implications do not reverse.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a differentiable scalar field $f$, the gradient $\\nabla f(a)$ points in the direction of:',
    options: [
      'The level set $f = f(a)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The gradient vector $\\nabla f(a)$ points in the direction of steepest increase of $f$ at the point $a$. Its magnitude $\\|\\nabla f(a)\\|$ gives the rate of steepest increase.',
  },
      'Steepest increase of $f
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The gradient vector $\\nabla f(a)$ points in the direction of steepest increase of $f$ at the point $a$. Its magnitude $\\|\\nabla f(a)\\|$ gives the rate of steepest increase.',
  },
      'Steepest decrease of $f
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The gradient vector $\\nabla f(a)$ points in the direction of steepest increase of $f$ at the point $a$. Its magnitude $\\|\\nabla f(a)\\|$ gives the rate of steepest increase.',
  },
      'The tangent plane to the surface $z = f(x, y)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The gradient vector $\\nabla f(a)$ points in the direction of steepest increase of $f$ at the point $a$. Its magnitude $\\|\\nabla f(a)\\|$ gives the rate of steepest increase.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The gradient vector $\\nabla f(a)$ points in the direction of steepest increase of $f$ at the point $a$. Its magnitude $\\|\\nabla f(a)\\|$ gives the rate of steepest increase.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $g(t) = f[r(t)]$ where $f$ is a scalar field and $r$ is a path, the chain rule gives:',
    options: [
      '$g\\'(t) = \\nabla f(r(t))
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the chain rule for scalar fields composed with curves, $g\'(t) = \\nabla f(r(t)) \\cdot r\'(t)$, which is the dot product of the gradient evaluated along the path and the tangent vector to the path.',
  },
      '$g\\'(t) = f\\'(r(t)) \\cdot r\\'(t)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule for scalar fields composed with curves, $g\'(t) = \\nabla f(r(t)) \\cdot r\'(t)$, which is the dot product of the gradient evaluated along the path and the tangent vector to the path.',
  },
      '$g\\'(t) = Df(r(t)) \\cdot Dr(t)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule for scalar fields composed with curves, $g\'(t) = \\nabla f(r(t)) \\cdot r\'(t)$, which is the dot product of the gradient evaluated along the path and the tangent vector to the path.',
  },
      '$g\\'(t) = \\nabla f(r(t)) \\cdot r\\'(t)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule for scalar fields composed with curves, $g\'(t) = \\nabla f(r(t)) \\cdot r\'(t)$, which is the dot product of the gradient evaluated along the path and the tangent vector to the path.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule for scalar fields composed with curves, $g\'(t) = \\nabla f(r(t)) \\cdot r\'(t)$, which is the dot product of the gradient evaluated along the path and the tangent vector to the path.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For a vector field $f: \\mathbb{R}^n \\to \\mathbb{R}^m$, the Jacobian determinant $|\\det Df|$ represents:',
    options: [
      'The rate of change along a level set',
      'The magnitude of the gradient',
      'The local volume magnification factor',
      'The trace of the Hessian matrix',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The absolute value of the Jacobian determinant $|\\det Df|$ represents the local volume magnification factor. It tells us how much the transformation $f$ magnifies or shrinks volumes near a point.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the relationship between the gradient $\\nabla f$ and level sets of a scalar field $f$?',
    options: [
      'The gradient is perpendicular to the level sets',
      'The gradient is tangent to the level sets',
      'The gradient lies within the level sets',
      'There is no relationship between them',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The gradient $\\nabla f$ is always perpendicular (normal) to the level sets $f = c$. This is because the directional derivative in any direction tangent to a level set is zero.',
  },
];
