import type { QuizQuestion } from './types';

export const section127Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Using Green\'s theorem, the area of a region $R$ enclosed by curve $C$ can be expressed as:',
    options: [
      '$\\oint_C x\\,dx + y\\,dy
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'With $P = -y/2$ and $Q = x/2$, we have $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 1$. So $a(R) = \\iint_R 1\\,dA = \\frac{1}{2}\\oint_C -y\\,dx + x\\,dy$.',
  },
      '$\\oint_C y\\,dx + x\\,dy
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'With $P = -y/2$ and $Q = x/2$, we have $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 1$. So $a(R) = \\iint_R 1\\,dA = \\frac{1}{2}\\oint_C -y\\,dx + x\\,dy$.',
  },
      '$\\oint_C x\\,dx - y\\,dy
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'With $P = -y/2$ and $Q = x/2$, we have $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 1$. So $a(R) = \\iint_R 1\\,dA = \\frac{1}{2}\\oint_C -y\\,dx + x\\,dy$.',
  },
      '$\\frac{1}{2}\\oint_C -y\\,dx + x\\,dy
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'With $P = -y/2$ and $Q = x/2$, we have $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 1$. So $a(R) = \\iint_R 1\\,dA = \\frac{1}{2}\\oint_C -y\\,dx + x\\,dy$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'With $P = -y/2$ and $Q = x/2$, we have $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 1$. So $a(R) = \\iint_R 1\\,dA = \\frac{1}{2}\\oint_C -y\\,dx + x\\,dy$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = -2$ everywhere on region $R$ with area $A$, then $\\oint_C P\\,dx + Q\\,dy$ equals:',
    options: [
      '$-2A
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By Green\'s theorem: $\\oint_C P\\,dx + Q\\,dy = \\iint_R (-2)\\,dA = -2 \\cdot a(R) = -2A$.',
  },
      '$2A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Green\'s theorem: $\\oint_C P\\,dx + Q\\,dy = \\iint_R (-2)\\,dA = -2 \\cdot a(R) = -2A$.',
  },
      '$-A/2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Green\'s theorem: $\\oint_C P\\,dx + Q\\,dy = \\iint_R (-2)\\,dA = -2 \\cdot a(R) = -2A$.',
  },
      '$A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Green\'s theorem: $\\oint_C P\\,dx + Q\\,dy = \\iint_R (-2)\\,dA = -2 \\cdot a(R) = -2A$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Green\'s theorem: $\\oint_C P\\,dx + Q\\,dy = \\iint_R (-2)\\,dA = -2 \\cdot a(R) = -2A$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The area formula using a parametric curve $x = X(t)$, $y = Y(t)$ for $a \\leq t \\leq b$ involves:',
    options: [
      '$\\int_a^b X(t)Y(t)\\,dt
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The area is $\\frac{1}{2}\\int_a^b [X(t)Y\'(t) - Y(t)X\'(t)]\\,dt = \\frac{1}{2}\\int_a^b \\begin{vmatrix} X(t) & Y(t) \\\\ X\'(t) & Y\'(t) \\end{vmatrix}dt$.',
  },
      '$\\frac{1}{2}\\int_a^b [X(t)Y\\'(t) - Y(t)X\\'(t)]\\,dt
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The area is $\\frac{1}{2}\\int_a^b [X(t)Y\'(t) - Y(t)X\'(t)]\\,dt = \\frac{1}{2}\\int_a^b \\begin{vmatrix} X(t) & Y(t) \\\\ X\'(t) & Y\'(t) \\end{vmatrix}dt$.',
  },
      '$\\int_a^b [X\\'(t)]^2 + [Y\\'(t)]^2\\,dt
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The area is $\\frac{1}{2}\\int_a^b [X(t)Y\'(t) - Y(t)X\'(t)]\\,dt = \\frac{1}{2}\\int_a^b \\begin{vmatrix} X(t) & Y(t) \\\\ X\'(t) & Y\'(t) \\end{vmatrix}dt$.',
  },
      '$\\int_a^b X\\'(t)Y\\'(t)\\,dt
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The area is $\\frac{1}{2}\\int_a^b [X(t)Y\'(t) - Y(t)X\'(t)]\\,dt = \\frac{1}{2}\\int_a^b \\begin{vmatrix} X(t) & Y(t) \\\\ X\'(t) & Y\'(t) \\end{vmatrix}dt$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The area is $\\frac{1}{2}\\int_a^b [X(t)Y\'(t) - Y(t)X\'(t)]\\,dt = \\frac{1}{2}\\int_a^b \\begin{vmatrix} X(t) & Y(t) \\\\ X\'(t) & Y\'(t) \\end{vmatrix}dt$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The device that measures area by tracing boundaries (based on the area-as-line-integral formula) is called a:',
    options: [
      'Planimeter',
      'Integrator',
      'Goniometer',
      'Theodolite',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A planimeter is a mechanical device that computes area by tracing the boundary of a region, using the principle that area equals a line integral around the boundary.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'The ellipse $4x^2 + y^2 = 4$ has semi-axes $a = 1$ and $b = 2$. Using Green\'s theorem, compute the work done by $\\mathbf{F} = (y + 3x)\\mathbf{i} + (2y - x)\\mathbf{j}$ around this ellipse.',
    correctAnswer: -12.57,
    numericRange: { min: -20, max: 0, precision: 2 },
    difficulty: 'hard',
    explanation: '$\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = -1 - 1 = -2$. Area of ellipse = $\\pi ab = 2\\pi$. Work = $-2 \\cdot 2\\pi = -4\\pi \\approx -12.57$.',
  },
];
