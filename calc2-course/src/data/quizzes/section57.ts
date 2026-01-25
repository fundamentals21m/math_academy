import type { QuizQuestion } from './types';

export const section57Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The annihilator method converts $L(y) = R$ into:',
    options: [
      'A first-order equation',
      'A system of equations',
      'A higher-order homogeneous equation $AL(y) = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If $A$ annihilates $R$, then applying $A$ to both sides gives $AL(y) = 0$, a homogeneous equation.',
  },
      'An integral equation',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'If $A$ annihilates $R$, then applying $A$ to both sides gives $AL(y) = 0$, a homogeneous equation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The polynomial $x^{m-1}$ is annihilated by:',
    options: [
      '$D$',
      '$D^{m-1}$',
      '$D^m$',
      '$(D - 1)^m$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$D^m(x^{m-1}) = 0$ since differentiation $m$ times gives zero for a polynomial of degree $m-1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The function $e^{\\alpha x}$ is annihilated by:',
    options: [
      '$D
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$(D - \\alpha)(e^{\\alpha x}) = \\alpha e^{\\alpha x} - \\alpha e^{\\alpha x} = 0$.',
  },
      '$(D - \\alpha)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$(D - \\alpha)(e^{\\alpha x}) = \\alpha e^{\\alpha x} - \\alpha e^{\\alpha x} = 0$.',
  },
      '$D^2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$(D - \\alpha)(e^{\\alpha x}) = \\alpha e^{\\alpha x} - \\alpha e^{\\alpha x} = 0$.',
  },
      '$(D + \\alpha)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$(D - \\alpha)(e^{\\alpha x}) = \\alpha e^{\\alpha x} - \\alpha e^{\\alpha x} = 0$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$(D - \\alpha)(e^{\\alpha x}) = \\alpha e^{\\alpha x} - \\alpha e^{\\alpha x} = 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To solve $y\'\' - 5y\' + 6y = xe^x$, we need to find an operator that annihilates:',
    options: [
      '$e^x$, which is annihilated by $(D-1)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$xe^x$ requires $(D-1)^2$ because $x e^{\\alpha x}$ is annihilated by $(D - \\alpha)^2$.',
  },
      '$x$, which is annihilated by $D
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$xe^x$ requires $(D-1)^2$ because $x e^{\\alpha x}$ is annihilated by $(D - \\alpha)^2$.',
  },
      '$xe^x$, which is annihilated by $(D-1)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$xe^x$ requires $(D-1)^2$ because $x e^{\\alpha x}$ is annihilated by $(D - \\alpha)^2$.',
  },
      '$xe^x$, which is annihilated by $(D-1)^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$xe^x$ requires $(D-1)^2$ because $x e^{\\alpha x}$ is annihilated by $(D - \\alpha)^2$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$xe^x$ requires $(D-1)^2$ because $x e^{\\alpha x}$ is annihilated by $(D - \\alpha)^2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The annihilator method does NOT work for:',
    options: [
      '$R(x) = \\tan x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The method requires $R$ to be a combination of polynomials, exponentials, sines, and cosines. Functions like $\\tan x$, $\\log x$, or $e^{x^2}$ are not annihilated by constant-coefficient operators.',
  },
      '$R(x) = e^{2x}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The method requires $R$ to be a combination of polynomials, exponentials, sines, and cosines. Functions like $\\tan x$, $\\log x$, or $e^{x^2}$ are not annihilated by constant-coefficient operators.',
  },
      '$R(x) = x^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The method requires $R$ to be a combination of polynomials, exponentials, sines, and cosines. Functions like $\\tan x$, $\\log x$, or $e^{x^2}$ are not annihilated by constant-coefficient operators.',
  },
      '$R(x) = \\sin 3x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The method requires $R$ to be a combination of polynomials, exponentials, sines, and cosines. Functions like $\\tan x$, $\\log x$, or $e^{x^2}$ are not annihilated by constant-coefficient operators.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The method requires $R$ to be a combination of polynomials, exponentials, sines, and cosines. Functions like $\\tan x$, $\\log x$, or $e^{x^2}$ are not annihilated by constant-coefficient operators.',
  },
];
