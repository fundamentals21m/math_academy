import type { QuizQuestion } from './types';

export const section175Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'When transforming $(X, Y)$ to $(U, V)$ via a one-to-one mapping, the new density involves:',
    options: [
      'Only the old density',
      'The square of the old density',
      'The old density divided by the Jacobian',
      'The old density times the absolute value of the Jacobian'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The change of variables formula: $g(u, v) = f[Q(u,v), R(u,v)] \\cdot |\\partial(Q, R)/\\partial(u, v)|$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the transformation $U = X + Y$, $V = X - Y$, the Jacobian of the inverse transformation is:',
    options: [
      '$1/2$',
      '$2$',
      '$1$',
      '$-1/2$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The inverse is $x = (u+v)/2$, $y = (u-v)/2$. The Jacobian determinant is $|\\partial(x,y)/\\partial(u,v)| = 1/2$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The density of $U = X + Y$ for general $(X, Y)$ is:',
    options: [
      '$f_X(u) + f_Y(u)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The density of the sum is $f_{X+Y}(u) = \\int_{-\\infty}^{\\infty} f(x, u-x)\\,dx$.',
  },
      '$f(u, u)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The density of the sum is $f_{X+Y}(u) = \\int_{-\\infty}^{\\infty} f(x, u-x)\\,dx$.',
  },
      '$\\int_{-\\infty}^{\\infty} f(x, u-x)\\,dx
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The density of the sum is $f_{X+Y}(u) = \\int_{-\\infty}^{\\infty} f(x, u-x)\\,dx$.',
  },
      '$f_X(u) \\cdot f_Y(u)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The density of the sum is $f_{X+Y}(u) = \\int_{-\\infty}^{\\infty} f(x, u-x)\\,dx$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The density of the sum is $f_{X+Y}(u) = \\int_{-\\infty}^{\\infty} f(x, u-x)\\,dx$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When $X$ and $Y$ are independent, the density of $X + Y$ is the:',
    options: [
      'Sum of $f_X$ and $f_Y
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For independent variables, $f_{X+Y}(u) = \\int f_X(x) f_Y(u-x)\\,dx = (f_X * f_Y)(u)$, the convolution.',
  },
      'Convolution of $f_X$ and $f_Y
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For independent variables, $f_{X+Y}(u) = \\int f_X(x) f_Y(u-x)\\,dx = (f_X * f_Y)(u)$, the convolution.',
  },
      'Product of $f_X$ and $f_Y
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For independent variables, $f_{X+Y}(u) = \\int f_X(x) f_Y(u-x)\\,dx = (f_X * f_Y)(u)$, the convolution.',
  },
      'Maximum of $f_X$ and $f_Y
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For independent variables, $f_{X+Y}(u) = \\int f_X(x) f_Y(u-x)\\,dx = (f_X * f_Y)(u)$, the convolution.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For independent variables, $f_{X+Y}(u) = \\int f_X(x) f_Y(u-x)\\,dx = (f_X * f_Y)(u)$, the convolution.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For independent $X, Y$ with CDFs $F_X, F_Y$, the CDF of $\\max(X, Y)$ is:',
    options: [
      '$F_X(t) + F_Y(t)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$P(\\max(X,Y) \\leq t) = P(X \\leq t, Y \\leq t) = P(X \\leq t) P(Y \\leq t) = F_X(t) F_Y(t)$ by independence.',
  },
      '$1 - F_X(t) F_Y(t)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$P(\\max(X,Y) \\leq t) = P(X \\leq t, Y \\leq t) = P(X \\leq t) P(Y \\leq t) = F_X(t) F_Y(t)$ by independence.',
  },
      '$F_X(t) \\cdot F_Y(t)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$P(\\max(X,Y) \\leq t) = P(X \\leq t, Y \\leq t) = P(X \\leq t) P(Y \\leq t) = F_X(t) F_Y(t)$ by independence.',
  },
      '$\\max(F_X(t), F_Y(t))
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$P(\\max(X,Y) \\leq t) = P(X \\leq t, Y \\leq t) = P(X \\leq t) P(Y \\leq t) = F_X(t) F_Y(t)$ by independence.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$P(\\max(X,Y) \\leq t) = P(X \\leq t, Y \\leq t) = P(X \\leq t) P(Y \\leq t) = F_X(t) F_Y(t)$ by independence.',
  },
];
