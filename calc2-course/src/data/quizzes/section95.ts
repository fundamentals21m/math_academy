import type { QuizQuestion } from './types';

export const section95Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A point $(x_1, y_1)$ is called a stationary point (critical point) of $f$ if:',
    options: [
      '$f(x_1, y_1) = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A stationary point (critical point) is a point where all partial derivatives vanish: $D_1 f(x_1, y_1) = 0$ and $D_2 f(x_1, y_1) = 0$. This means $\\nabla f = 0$ at that point.',
  },
      'The function $f$ is constant near $(x_1, y_1)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A stationary point (critical point) is a point where all partial derivatives vanish: $D_1 f(x_1, y_1) = 0$ and $D_2 f(x_1, y_1) = 0$. This means $\\nabla f = 0$ at that point.',
  },
      '$D_1 f(x_1, y_1) = 0$ and $D_2 f(x_1, y_1) = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A stationary point (critical point) is a point where all partial derivatives vanish: $D_1 f(x_1, y_1) = 0$ and $D_2 f(x_1, y_1) = 0$. This means $\\nabla f = 0$ at that point.',
  },
      '$D_1 f(x_1, y_1) = D_2 f(x_1, y_1)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A stationary point (critical point) is a point where all partial derivatives vanish: $D_1 f(x_1, y_1) = 0$ and $D_2 f(x_1, y_1) = 0$. This means $\\nabla f = 0$ at that point.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A stationary point (critical point) is a point where all partial derivatives vanish: $D_1 f(x_1, y_1) = 0$ and $D_2 f(x_1, y_1) = 0$. This means $\\nabla f = 0$ at that point.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'At a stationary point, the tangent plane to the surface $z = f(x, y)$ is:',
    options: [
      'Horizontal',
      'Vertical',
      'Does not exist',
      'Parallel to the $xz$-plane',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'When $\\nabla f = 0$, the gradient vector of $F(x, y, z) = f(x, y) - z$ has the form $(0, 0, -1)$. This means the tangent plane is horizontal (parallel to the $xy$-plane).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A saddle point of $f$ is a stationary point where:',
    options: [
      '$f$ has a local maximum',
      '$f$ has a local minimum',
      'Every neighborhood contains points where $f(x) < f(a)$ and points where $f(x) > f(a)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A saddle point is a stationary point that is neither a local max nor a local min. Every neighborhood contains points where $f$ is larger than $f(a)$ and points where $f$ is smaller than $f(a)$.',
  },
      'The gradient is undefined',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A saddle point is a stationary point that is neither a local max nor a local min. Every neighborhood contains points where $f$ is larger than $f(a)$ and points where $f$ is smaller than $f(a)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The function $f(x, y) = xy$ has at the origin:',
    options: [
      'A relative maximum',
      'A saddle point',
      'A relative minimum',
      'No stationary point',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $f(x, y) = xy$, both partial derivatives are zero at the origin. But $f > 0$ in the first and third quadrants, and $f < 0$ in the second and fourth quadrants, so the origin is a saddle point.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The function $f(x, y) = 2 - x^2 - y^2$ has at the origin:',
    options: [
      'A saddle point',
      'A relative minimum',
      'An absolute maximum',
      'No stationary point',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $f(x, y) = 2 - (x^2 + y^2) \\leq 2 = f(0, 0)$ for all $(x, y)$, the origin is an absolute maximum. The level curves are circles, consistent with an extremum.',
  },
];
