import type { QuizQuestion } from './types';

export const section87Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A level set of $f: \\mathbb{R}^n \\to \\mathbb{R}$ at height $c$ is:',
    options: [
      '$\\{\\mathbf{x} : f(\\mathbf{x}) = c\\}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A level set (or level curve/surface) is the set of points where $f$ takes a constant value $c$.',
  },
      '$\\{\\mathbf{x} : f(\\mathbf{x}) > c\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A level set (or level curve/surface) is the set of points where $f$ takes a constant value $c$.',
  },
      '$\\{\\mathbf{x} : \\nabla f(\\mathbf{x}) = c\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A level set (or level curve/surface) is the set of points where $f$ takes a constant value $c$.',
  },
      '$\\{\\mathbf{x} : f(\\mathbf{x}) < c\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A level set (or level curve/surface) is the set of points where $f$ takes a constant value $c$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A level set (or level curve/surface) is the set of points where $f$ takes a constant value $c$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The gradient $\\nabla f$ at a point on a level set is:',
    options: [
      'Tangent to the level set',
      'Zero',
      'Normal (perpendicular) to the level set',
      'Parallel to the level set',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The gradient is perpendicular to level sets because directional derivatives along the level set are zero.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For the surface $f(x, y, z) = c$, the tangent plane at $(a, b, d)$ has normal vector:',
    options: [
      '$(a, b, d)$',
      '$\\nabla f(a, b, d)$',
      '$(1, 1, 1)$',
      '$f(a, b, d)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The gradient at a point is normal to the level surface, so it\'s the normal vector to the tangent plane.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The equation of the tangent plane to $f(x,y,z) = c$ at $(a,b,d)$ is:',
    options: [
      '$f(x,y,z) = c$',
      '$x + y + z = a + b + d$',
      '$\\nabla f(a,b,d) \\cdot (x-a, y-b, z-d) = 0$',
      '$(x-a)^2 + (y-b)^2 + (z-d)^2 = 0$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The tangent plane consists of vectors perpendicular to $\\nabla f$: $\\nabla f \\cdot (\\mathbf{x} - \\mathbf{a}) = 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $f(x,y,z) = x^2 + y^2 + z^2$, the tangent plane to the sphere $x^2+y^2+z^2 = 1$ at $(1,0,0)$ is:',
    options: [
      '$2x = 2$, i.e., $x = 1$',
      '$x = 0$',
      '$x + y + z = 1$',
      '$x = 1$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\nabla f = (2x, 2y, 2z)$, at $(1,0,0)$: $\\nabla f = (2,0,0)$. Tangent plane: $2(x-1) + 0 + 0 = 0$, i.e., $x = 1$.',
  },
];
