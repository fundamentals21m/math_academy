import type { QuizQuestion } from './types';

export const section111Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To construct a potential function by integrating along coordinate axes in 2D, one formula is:',
    options: [
      '$\\varphi(x, y) = \\int_a^x f_1(t, b) \\, dt + \\int_b^y f_2(x, t) \\, dt
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'One method: integrate $f_1$ horizontally from $(a, b)$ to $(x, b)$, then integrate $f_2$ vertically from $(x, b)$ to $(x, y)$: $\\varphi(x, y) = \\int_a^x f_1(t, b) \\, dt + \\int_b^y f_2(x, t) \\, dt$.',
  },
      '$\\varphi(x, y) = \\int_a^x f_1(t, y) \\, dt
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'One method: integrate $f_1$ horizontally from $(a, b)$ to $(x, b)$, then integrate $f_2$ vertically from $(x, b)$ to $(x, y)$: $\\varphi(x, y) = \\int_a^x f_1(t, b) \\, dt + \\int_b^y f_2(x, t) \\, dt$.',
  },
      '$\\varphi(x, y) = \\int_a^x \\int_b^y f_1 f_2 \\, dt \\, ds
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'One method: integrate $f_1$ horizontally from $(a, b)$ to $(x, b)$, then integrate $f_2$ vertically from $(x, b)$ to $(x, y)$: $\\varphi(x, y) = \\int_a^x f_1(t, b) \\, dt + \\int_b^y f_2(x, t) \\, dt$.',
  },
      '$\\varphi(x, y) = f_1(x, y) + f_2(x, y)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'One method: integrate $f_1$ horizontally from $(a, b)$ to $(x, b)$, then integrate $f_2$ vertically from $(x, b)$ to $(x, y)$: $\\varphi(x, y) = \\int_a^x f_1(t, b) \\, dt + \\int_b^y f_2(x, t) \\, dt$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'One method: integrate $f_1$ horizontally from $(a, b)$ to $(x, b)$, then integrate $f_2$ vertically from $(x, b)$ to $(x, y)$: $\\varphi(x, y) = \\int_a^x f_1(t, b) \\, dt + \\int_b^y f_2(x, t) \\, dt$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The method of indefinite integrals works by integrating $\\frac{\\partial\\varphi}{\\partial x} = f_1$ to get:',
    options: [
      '$\\varphi(x, y, z) = f_1(x, y, z)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Integrating $\\frac{\\partial\\varphi}{\\partial x} = f_1$ with respect to $x$ gives $\\varphi = \\int f_1 \\, dx + A(y, z)$, where $A(y, z)$ is a "constant" depending on the other variables.',
  },
      '$\\varphi(x, y, z) = \\int f_1(x, y, z) \\, dx + A(y, z)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Integrating $\\frac{\\partial\\varphi}{\\partial x} = f_1$ with respect to $x$ gives $\\varphi = \\int f_1 \\, dx + A(y, z)$, where $A(y, z)$ is a "constant" depending on the other variables.',
  },
      '$\\varphi(x, y, z) = \\int f_1 \\, dy
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Integrating $\\frac{\\partial\\varphi}{\\partial x} = f_1$ with respect to $x$ gives $\\varphi = \\int f_1 \\, dx + A(y, z)$, where $A(y, z)$ is a "constant" depending on the other variables.',
  },
      '$\\varphi(x, y, z) = x \\cdot f_1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Integrating $\\frac{\\partial\\varphi}{\\partial x} = f_1$ with respect to $x$ gives $\\varphi = \\int f_1 \\, dx + A(y, z)$, where $A(y, z)$ is a "constant" depending on the other variables.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Integrating $\\frac{\\partial\\varphi}{\\partial x} = f_1$ with respect to $x$ gives $\\varphi = \\int f_1 \\, dx + A(y, z)$, where $A(y, z)$ is a "constant" depending on the other variables.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'When constructing a potential by indefinite integrals, the arbitrary functions $A(y, z)$, $B(x, z)$, $C(x, y)$ must be chosen so that:',
    options: [
      'Each is constant',
      'They sum to zero',
      'They are all polynomials',
      'All three expressions for $\\varphi$ agree',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each partial integration gives $\\varphi$ plus an arbitrary function of the other variables. These must be chosen so all three expressions for $\\varphi$ are consistent (agree everywhere).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A set $S$ in $\\mathbb{R}^n$ is called convex if:',
    options: [
      'It is bounded',
      'Every pair of points can be joined by a line segment lying entirely in $S
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A set is convex if for any two points in the set, the entire line segment joining them also lies in the set. Every open convex set is connected.',
  },
      'It is open',
      'It contains the origin',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A set is convex if for any two points in the set, the entire line segment joining them also lies in the set. Every open convex set is connected.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'On an open convex set containing the origin, a potential can be found using:',
    options: [
      '$\\varphi(\\mathbf{x}) = \\mathbf{x} \\cdot \\mathbf{x}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'On a convex set containing the origin, integrate along the line segment from $\\mathbf{0}$ to $\\mathbf{x}$: $\\varphi(\\mathbf{x}) = \\int_0^1 f(t\\mathbf{x}) \\cdot \\mathbf{x} \\, dt$.',
  },
      '$\\varphi(\\mathbf{x}) = \\int_0^1 f(t\\mathbf{x}) \\cdot \\mathbf{x} \\, dt
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'On a convex set containing the origin, integrate along the line segment from $\\mathbf{0}$ to $\\mathbf{x}$: $\\varphi(\\mathbf{x}) = \\int_0^1 f(t\\mathbf{x}) \\cdot \\mathbf{x} \\, dt$.',
  },
      '$\\varphi(\\mathbf{x}) = f(\\mathbf{x})
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'On a convex set containing the origin, integrate along the line segment from $\\mathbf{0}$ to $\\mathbf{x}$: $\\varphi(\\mathbf{x}) = \\int_0^1 f(t\\mathbf{x}) \\cdot \\mathbf{x} \\, dt$.',
  },
      '$\\varphi(\\mathbf{x}) = \\|\\mathbf{x}\\|
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'On a convex set containing the origin, integrate along the line segment from $\\mathbf{0}$ to $\\mathbf{x}$: $\\varphi(\\mathbf{x}) = \\int_0^1 f(t\\mathbf{x}) \\cdot \\mathbf{x} \\, dt$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'On a convex set containing the origin, integrate along the line segment from $\\mathbf{0}$ to $\\mathbf{x}$: $\\varphi(\\mathbf{x}) = \\int_0^1 f(t\\mathbf{x}) \\cdot \\mathbf{x} \\, dt$.',
  },
];
