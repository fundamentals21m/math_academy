import type { QuizQuestion } from './types';

export const section56Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A homogeneous linear ODE has the form:',
    options: [
      '$y\\'\\' + ay\\' + by = f(x)$ where $f \\neq 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Homogeneous means the right-hand side is zero.',
  },
      'Any ODE with constant coefficients',
      '$y\\'\\' + ay\\' + by = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Homogeneous means the right-hand side is zero.',
  },
      '$y\\' = y/x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Homogeneous means the right-hand side is zero.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Homogeneous means the right-hand side is zero.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If the characteristic equation has a repeated root $r$, the general solution is:',
    options: [
      '$y = C_1 e^{rx}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Repeated root $r$ gives $y = (C_1 + C_2 x)e^{rx}$.',
  },
      '$y = C_1 e^{rx} + C_2 e^{rx}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Repeated root $r$ gives $y = (C_1 + C_2 x)e^{rx}$.',
  },
      '$y = C_1 xe^{rx}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Repeated root $r$ gives $y = (C_1 + C_2 x)e^{rx}$.',
  },
      '$y = (C_1 + C_2 x)e^{rx}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Repeated root $r$ gives $y = (C_1 + C_2 x)e^{rx}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Repeated root $r$ gives $y = (C_1 + C_2 x)e^{rx}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If the characteristic equation has complex roots $\\alpha \\pm \\beta i$, the general solution involves:',
    options: [
      '$e^{(\\alpha + \\beta i)x}$ only',
      '$\\cos(\\alpha x) + \\sin(\\beta x)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Complex roots give real solution $y = e^{\\alpha x}(C_1 \\cos \\beta x + C_2 \\sin \\beta x)$.',
  },
      '$e^{i\\beta x}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Complex roots give real solution $y = e^{\\alpha x}(C_1 \\cos \\beta x + C_2 \\sin \\beta x)$.',
  },
      '$e^{\\alpha x}(C_1 \\cos \\beta x + C_2 \\sin \\beta x)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Complex roots give real solution $y = e^{\\alpha x}(C_1 \\cos \\beta x + C_2 \\sin \\beta x)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Complex roots give real solution $y = e^{\\alpha x}(C_1 \\cos \\beta x + C_2 \\sin \\beta x)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The equation $y\'\' + y = 0$ has characteristic equation:',
    options: [
      '$r^2 + 1 = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$r^2 + 1 = 0$ gives $r = \\pm i$ (complex roots).',
  },
      '$r^2 - 1 = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$r^2 + 1 = 0$ gives $r = \\pm i$ (complex roots).',
  },
      '$r^2 = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$r^2 + 1 = 0$ gives $r = \\pm i$ (complex roots).',
  },
      '$r + 1 = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$r^2 + 1 = 0$ gives $r = \\pm i$ (complex roots).',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$r^2 + 1 = 0$ gives $r = \\pm i$ (complex roots).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The general solution to $y\'\' + y = 0$ is:',
    options: [
      '$y = C_1 \\cos x + C_2 \\sin x$',
      '$y = C_1 e^x + C_2 e^{-x}$',
      '$y = Ce^{ix}$',
      '$y = C_1 + C_2 x$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Complex roots $\\pm i$ (with $\\alpha = 0$, $\\beta = 1$) give $y = C_1 \\cos x + C_2 \\sin x$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Simple harmonic motion $y\'\' + \\omega^2 y = 0$ has solution:',
    options: [
      '$y = Ce^{\\omega t}$',
      '$y = A\\cos(\\omega t) + B\\sin(\\omega t)$',
      '$y = A\\cos(\\omega^2 t)$',
      '$y = At + B$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'SHM has oscillatory solution with frequency $\\omega$.',
  },
];
