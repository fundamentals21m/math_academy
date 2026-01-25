import type { QuizQuestion } from './types';

export const section123Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The area of a plane region $S$ can be computed using the double integral:',
    options: [
      '$\\iint_S f(x,y)\\,dx\\,dy$',
      '$\\iint_S (x + y)\\,dx\\,dy$',
      '$\\iint_S xy\\,dx\\,dy$',
      '$\\iint_S dx\\,dy$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The area of a region $S$ is given by $a(S) = \\iint_S dx\\,dy$. This is equivalent to integrating the constant function $f(x,y) = 1$ over the region.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f(x,y) \\geq 0$ is continuous on a region $S$, the double integral $\\iint_S f(x,y)\\,dx\\,dy$ represents:',
    options: [
      'The area of $S
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When $f \\geq 0$, the double integral represents the volume of the solid (ordinate set) lying between the region $S$ in the xy-plane and the surface $z = f(x,y)$ above it.',
  },
      'The surface area of $z = f(x,y)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'When $f \\geq 0$, the double integral represents the volume of the solid (ordinate set) lying between the region $S$ in the xy-plane and the surface $z = f(x,y)$ above it.',
  },
      'The volume under the surface $z = f(x,y)$ over $S
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'When $f \\geq 0$, the double integral represents the volume of the solid (ordinate set) lying between the region $S$ in the xy-plane and the surface $z = f(x,y)$ above it.',
  },
      'The perimeter of $S
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'When $f \\geq 0$, the double integral represents the volume of the solid (ordinate set) lying between the region $S$ in the xy-plane and the surface $z = f(x,y)$ above it.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'When $f \\geq 0$, the double integral represents the volume of the solid (ordinate set) lying between the region $S$ in the xy-plane and the surface $z = f(x,y)$ above it.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The volume of an ellipsoid $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1$ is:',
    options: [
      '$\\frac{4}{3}\\pi abc
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The volume of an ellipsoid with semi-axes $a$, $b$, $c$ is $V = \\frac{4}{3}\\pi abc$. When $a = b = c$, this reduces to the familiar formula $\\frac{4}{3}\\pi r^3$ for a sphere.',
  },
      '$\\pi abc
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The volume of an ellipsoid with semi-axes $a$, $b$, $c$ is $V = \\frac{4}{3}\\pi abc$. When $a = b = c$, this reduces to the familiar formula $\\frac{4}{3}\\pi r^3$ for a sphere.',
  },
      '$4\\pi abc
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The volume of an ellipsoid with semi-axes $a$, $b$, $c$ is $V = \\frac{4}{3}\\pi abc$. When $a = b = c$, this reduces to the familiar formula $\\frac{4}{3}\\pi r^3$ for a sphere.',
  },
      '$\\frac{4}{3}\\pi a^2bc
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The volume of an ellipsoid with semi-axes $a$, $b$, $c$ is $V = \\frac{4}{3}\\pi abc$. When $a = b = c$, this reduces to the familiar formula $\\frac{4}{3}\\pi r^3$ for a sphere.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The volume of an ellipsoid with semi-axes $a$, $b$, $c$ is $V = \\frac{4}{3}\\pi abc$. When $a = b = c$, this reduces to the familiar formula $\\frac{4}{3}\\pi r^3$ for a sphere.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f \\leq g$ are both continuous on region $S$, the double integral $\\iint_S (g - f)\\,dx\\,dy$ represents:',
    options: [
      'The volume between the surfaces $z = f(x,y)$ and $z = g(x,y)$ over $S
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The double integral $\\iint_S (g - f)\\,dx\\,dy$ gives the volume of the solid lying between the lower surface $z = f(x,y)$ and upper surface $z = g(x,y)$ over the region $S$.',
  },
      'The area between the graphs of $f$ and $g
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The double integral $\\iint_S (g - f)\\,dx\\,dy$ gives the volume of the solid lying between the lower surface $z = f(x,y)$ and upper surface $z = g(x,y)$ over the region $S$.',
  },
      'The average value of $g - f
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The double integral $\\iint_S (g - f)\\,dx\\,dy$ gives the volume of the solid lying between the lower surface $z = f(x,y)$ and upper surface $z = g(x,y)$ over the region $S$.',
  },
      'The surface area between $f$ and $g
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The double integral $\\iint_S (g - f)\\,dx\\,dy$ gives the volume of the solid lying between the lower surface $z = f(x,y)$ and upper surface $z = g(x,y)$ over the region $S$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The double integral $\\iint_S (g - f)\\,dx\\,dy$ gives the volume of the solid lying between the lower surface $z = f(x,y)$ and upper surface $z = g(x,y)$ over the region $S$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a Type I region $S$ bounded by $y = \\varphi_1(x)$ and $y = \\varphi_2(x)$ over $[a,b]$, the area formula reduces to:',
    options: [
      '$\\int_a^b [\\varphi_2(x) + \\varphi_1(x)]\\,dx
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'With $f(x,y) = 1$, the inner integral gives $\\int_{\\varphi_1(x)}^{\\varphi_2(x)} 1\\,dy = \\varphi_2(x) - \\varphi_1(x)$, so the area is $\\int_a^b [\\varphi_2(x) - \\varphi_1(x)]\\,dx$.',
  },
      '$\\int_a^b [\\varphi_2(x) - \\varphi_1(x)]\\,dx
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $f(x,y) = 1$, the inner integral gives $\\int_{\\varphi_1(x)}^{\\varphi_2(x)} 1\\,dy = \\varphi_2(x) - \\varphi_1(x)$, so the area is $\\int_a^b [\\varphi_2(x) - \\varphi_1(x)]\\,dx$.',
  },
      '$\\int_a^b [\\varphi_2(x)]^2 - [\\varphi_1(x)]^2\\,dx
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $f(x,y) = 1$, the inner integral gives $\\int_{\\varphi_1(x)}^{\\varphi_2(x)} 1\\,dy = \\varphi_2(x) - \\varphi_1(x)$, so the area is $\\int_a^b [\\varphi_2(x) - \\varphi_1(x)]\\,dx$.',
  },
      '$\\int_a^b \\varphi_1(x)\\varphi_2(x)\\,dx
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $f(x,y) = 1$, the inner integral gives $\\int_{\\varphi_1(x)}^{\\varphi_2(x)} 1\\,dy = \\varphi_2(x) - \\varphi_1(x)$, so the area is $\\int_a^b [\\varphi_2(x) - \\varphi_1(x)]\\,dx$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $f(x,y) = 1$, the inner integral gives $\\int_{\\varphi_1(x)}^{\\varphi_2(x)} 1\\,dy = \\varphi_2(x) - \\varphi_1(x)$, so the area is $\\int_a^b [\\varphi_2(x) - \\varphi_1(x)]\\,dx$.',
  },
];
