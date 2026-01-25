import type { QuizQuestion } from './types';

export const section94Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $F(x, y, z) = 0$ defines $z$ implicitly as a function of $x$ and $y$, and $\\frac{\\partial F}{\\partial z} \\neq 0$, then $\\frac{\\partial z}{\\partial x}$ equals:',
    options: [
      '$-\\frac{\\partial F / \\partial x}{\\partial F / \\partial z}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Using implicit differentiation: if $F(x, y, z) = 0$ and $z = f(x, y)$, then differentiating with respect to $x$ gives $\\frac{\\partial F}{\\partial x} + \\frac{\\partial F}{\\partial z}\\frac{\\partial z}{\\partial x} = 0$, so $\\frac{\\partial z}{\\partial x} = -\\frac{\\partial F / \\partial x}{\\partial F / \\partial z}$.',
  },
      '$\\frac{\\partial F / \\partial x}{\\partial F / \\partial z}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Using implicit differentiation: if $F(x, y, z) = 0$ and $z = f(x, y)$, then differentiating with respect to $x$ gives $\\frac{\\partial F}{\\partial x} + \\frac{\\partial F}{\\partial z}\\frac{\\partial z}{\\partial x} = 0$, so $\\frac{\\partial z}{\\partial x} = -\\frac{\\partial F / \\partial x}{\\partial F / \\partial z}$.',
  },
      '$-\\frac{\\partial F / \\partial z}{\\partial F / \\partial x}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Using implicit differentiation: if $F(x, y, z) = 0$ and $z = f(x, y)$, then differentiating with respect to $x$ gives $\\frac{\\partial F}{\\partial x} + \\frac{\\partial F}{\\partial z}\\frac{\\partial z}{\\partial x} = 0$, so $\\frac{\\partial z}{\\partial x} = -\\frac{\\partial F / \\partial x}{\\partial F / \\partial z}$.',
  },
      '$\\frac{\\partial F / \\partial z}{\\partial F / \\partial x}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Using implicit differentiation: if $F(x, y, z) = 0$ and $z = f(x, y)$, then differentiating with respect to $x$ gives $\\frac{\\partial F}{\\partial x} + \\frac{\\partial F}{\\partial z}\\frac{\\partial z}{\\partial x} = 0$, so $\\frac{\\partial z}{\\partial x} = -\\frac{\\partial F / \\partial x}{\\partial F / \\partial z}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Using implicit differentiation: if $F(x, y, z) = 0$ and $z = f(x, y)$, then differentiating with respect to $x$ gives $\\frac{\\partial F}{\\partial x} + \\frac{\\partial F}{\\partial z}\\frac{\\partial z}{\\partial x} = 0$, so $\\frac{\\partial z}{\\partial x} = -\\frac{\\partial F / \\partial x}{\\partial F / \\partial z}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the unit sphere $x^2 + y^2 + z^2 = 1$, solving for $z$ in terms of $x$ and $y$ gives:',
    options: [
      'One solution: $z = \\sqrt{1 - x^2 - y^2}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The equation $x^2 + y^2 + z^2 = 1$ has two solutions for $z$: $z = \\sqrt{1 - x^2 - y^2}$ (upper hemisphere) and $z = -\\sqrt{1 - x^2 - y^2}$ (lower hemisphere), valid for $x^2 + y^2 \\leq 1$.',
  },
      'Infinitely many solutions',
      'Two solutions: $z = \\pm\\sqrt{1 - x^2 - y^2}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The equation $x^2 + y^2 + z^2 = 1$ has two solutions for $z$: $z = \\sqrt{1 - x^2 - y^2}$ (upper hemisphere) and $z = -\\sqrt{1 - x^2 - y^2}$ (lower hemisphere), valid for $x^2 + y^2 \\leq 1$.',
  },
      'No solution exists',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The equation $x^2 + y^2 + z^2 = 1$ has two solutions for $z$: $z = \\sqrt{1 - x^2 - y^2}$ (upper hemisphere) and $z = -\\sqrt{1 - x^2 - y^2}$ (lower hemisphere), valid for $x^2 + y^2 \\leq 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The key condition for being able to solve $F(x, y, z) = 0$ for $z$ as a differentiable function of $x$ and $y$ near a point is:',
    options: [
      '$\\frac{\\partial F}{\\partial y} \\neq 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The implicit function theorem requires that $\\frac{\\partial F}{\\partial z} \\neq 0$ at the point. This ensures we can solve for $z$ as a differentiable function of the other variables.',
  },
      '$\\frac{\\partial F}{\\partial x} \\neq 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The implicit function theorem requires that $\\frac{\\partial F}{\\partial z} \\neq 0$ at the point. This ensures we can solve for $z$ as a differentiable function of the other variables.',
  },
      '$F = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The implicit function theorem requires that $\\frac{\\partial F}{\\partial z} \\neq 0$ at the point. This ensures we can solve for $z$ as a differentiable function of the other variables.',
  },
      '$\\frac{\\partial F}{\\partial z} \\neq 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The implicit function theorem requires that $\\frac{\\partial F}{\\partial z} \\neq 0$ at the point. This ensures we can solve for $z$ as a differentiable function of the other variables.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The implicit function theorem requires that $\\frac{\\partial F}{\\partial z} \\neq 0$ at the point. This ensures we can solve for $z$ as a differentiable function of the other variables.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $F(x_1, \\ldots, x_n) = 0$ defines $x_n$ implicitly as a differentiable function of $x_1, \\ldots, x_{n-1}$, then $D_k f = $ (for $k < n$):',
    options: [
      '$D_k F$',
      '$-\\frac{D_k F}{D_n F}$',
      '$-D_k F$',
      '$\\frac{D_k F}{D_n F}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the general implicit function theorem, $D_k f = -\\frac{D_k F}{D_n F}$ at points where $D_n F \\neq 0$. This generalizes the two-variable formula to $n$ dimensions.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When two surfaces $F(x, y, z) = 0$ and $G(x, y, z) = 0$ intersect along a curve, the derivatives of functions along the curve involve:',
    options: [
      'Jacobian determinants of $F$ and $G
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For two constraints defining a curve, solving for two variables in terms of the third involves Jacobian determinants. For example, $X\'(z) = \\frac{\\partial(F, G)/\\partial(y, z)}{\\partial(F, G)/\\partial(x, y)}$.',
  },
      'Only $F$ and its derivatives',
      'Only $G$ and its derivatives',
      'The Laplacian of $F + G
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'For two constraints defining a curve, solving for two variables in terms of the third involves Jacobian determinants. For example, $X\'(z) = \\frac{\\partial(F, G)/\\partial(y, z)}{\\partial(F, G)/\\partial(x, y)}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'For two constraints defining a curve, solving for two variables in terms of the third involves Jacobian determinants. For example, $X\'(z) = \\frac{\\partial(F, G)/\\partial(y, z)}{\\partial(F, G)/\\partial(x, y)}$.',
  },
];
