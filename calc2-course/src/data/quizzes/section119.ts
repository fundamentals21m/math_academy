import type { QuizQuestion } from './types';

export const section119Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The ordinate set of a nonnegative function $f$ over a rectangle $Q$ is:',
    options: [
      'The set of points $(x, y)$ in $Q$',
      'The level sets of $f$',
      'The graph of $f$',
      'The set of points $(x, y, z)$ with $(x, y) \\in Q$ and $0 \\leq z \\leq f(x, y)$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The ordinate set is the 3D region between $Q$ (in the $xy$-plane) and the surface $z = f(x, y)$: all points $(x, y, z)$ with $(x, y) \\in Q$ and $0 \\leq z \\leq f(x, y)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a nonnegative function $f$, the double integral $\\iint_Q f$ equals:',
    options: [
      'The surface area of the graph',
      'The volume of the ordinate set',
      'The area of $Q
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $f \\geq 0$, the double integral $\\iint_Q f(x, y) \\, dx \\, dy$ equals the volume of the region under the surface $z = f(x, y)$ and above $Q$.',
  },
      'The perimeter of $Q
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'When $f \\geq 0$, the double integral $\\iint_Q f(x, y) \\, dx \\, dy$ equals the volume of the region under the surface $z = f(x, y)$ and above $Q$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'When $f \\geq 0$, the double integral $\\iint_Q f(x, y) \\, dx \\, dy$ equals the volume of the region under the surface $z = f(x, y)$ and above $Q$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The cross-sectional area $A(y) = \\int_a^b f(x, y) \\, dx$ represents:',
    options: [
      'The area of the slice of the ordinate set cut by a plane parallel to the $xz$-plane at height $y
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For fixed $y$, $A(y) = \\int_a^b f(x, y) \\, dx$ is the area of the vertical cross-section of the ordinate set cut by a plane perpendicular to the $y$-axis at that value of $y$.',
  },
      'The total volume',
      'The boundary of the region',
      'The centroid',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For fixed $y$, $A(y) = \\int_a^b f(x, y) \\, dx$ is the area of the vertical cross-section of the ordinate set cut by a plane perpendicular to the $y$-axis at that value of $y$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The volume formula $v(S) = \\int_c^d A(y) \\, dy$ is reminiscent of:',
    options: [
      'The disk method in single-variable calculus',
      'The chain rule',
      'Cavalieri\'s principle (volume by cross-sections)',
      'Integration by parts'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This is Cavalieri\'s principle: volume equals the integral of cross-sectional areas. Slicing the solid and integrating the areas of the slices gives the total volume.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In the example $\\iint_Q (x\\sin y - ye^x) \\, dx \\, dy$ over $Q = [-1, 1] \\times [0, \\pi/2]$, integrating first with respect to $x$ gives $A(y) = $:',
    options: [
      '$2\\sin y
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$A(y) = \\int_{-1}^1 (x\\sin y - ye^x) \\, dx = [\\frac{x^2}{2}\\sin y - ye^x]_{-1}^1 = (\\frac{1}{2}\\sin y - ye) - (\\frac{1}{2}\\sin y - ye^{-1}) = -ey + y/e$.',
  },
      '$x\\sin y
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$A(y) = \\int_{-1}^1 (x\\sin y - ye^x) \\, dx = [\\frac{x^2}{2}\\sin y - ye^x]_{-1}^1 = (\\frac{1}{2}\\sin y - ye) - (\\frac{1}{2}\\sin y - ye^{-1}) = -ey + y/e$.',
  },
      '$-ey + y/e
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$A(y) = \\int_{-1}^1 (x\\sin y - ye^x) \\, dx = [\\frac{x^2}{2}\\sin y - ye^x]_{-1}^1 = (\\frac{1}{2}\\sin y - ye) - (\\frac{1}{2}\\sin y - ye^{-1}) = -ey + y/e$.',
  },
      '$ye^x
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$A(y) = \\int_{-1}^1 (x\\sin y - ye^x) \\, dx = [\\frac{x^2}{2}\\sin y - ye^x]_{-1}^1 = (\\frac{1}{2}\\sin y - ye) - (\\frac{1}{2}\\sin y - ye^{-1}) = -ey + y/e$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$A(y) = \\int_{-1}^1 (x\\sin y - ye^x) \\, dx = [\\frac{x^2}{2}\\sin y - ye^x]_{-1}^1 = (\\frac{1}{2}\\sin y - ye) - (\\frac{1}{2}\\sin y - ye^{-1}) = -ey + y/e$.',
  },
];
