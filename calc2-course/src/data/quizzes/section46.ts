import type { QuizQuestion } from './types';

export const section46Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The characteristic equation of $y\'\' + ay\' + by = 0$ is:',
    options: [
      '$r + a + b = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The characteristic equation is $r^2 + ar + b = 0$, obtained by substituting $y = e^{rx}$ into the differential equation.',
  },
      '$r^2 - ar - b = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The characteristic equation is $r^2 + ar + b = 0$, obtained by substituting $y = e^{rx}$ into the differential equation.',
  },
      '$r^2 = ab
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The characteristic equation is $r^2 + ar + b = 0$, obtained by substituting $y = e^{rx}$ into the differential equation.',
  },
      '$r^2 + ar + b = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The characteristic equation is $r^2 + ar + b = 0$, obtained by substituting $y = e^{rx}$ into the differential equation.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The characteristic equation is $r^2 + ar + b = 0$, obtained by substituting $y = e^{rx}$ into the differential equation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If the discriminant $d = a^2 - 4b < 0$, the solutions involve:',
    options: [
      'Distinct real exponentials',
      'Repeated real roots',
      'Trigonometric functions with exponential decay/growth',
      'Polynomials only',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $d < 0$, the roots are complex conjugates $r = -a/2 \\pm ik$ giving solutions $e^{-ax/2}(c_1\\cos kx + c_2\\sin kx)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $y\'\' + \\omega^2 y = 0$ (simple harmonic motion), the general solution is:',
    options: [
      '$y = c_1 e^{\\omega x} + c_2 e^{-\\omega x}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'With $a = 0$ and $b = \\omega^2$, the discriminant is $-4\\omega^2 < 0$, giving oscillatory solutions with $\\cos$ and $\\sin$.',
  },
      '$y = c_1 \\cos \\omega x + c_2 \\sin \\omega x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $a = 0$ and $b = \\omega^2$, the discriminant is $-4\\omega^2 < 0$, giving oscillatory solutions with $\\cos$ and $\\sin$.',
  },
      '$y = c_1 x + c_2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $a = 0$ and $b = \\omega^2$, the discriminant is $-4\\omega^2 < 0$, giving oscillatory solutions with $\\cos$ and $\\sin$.',
  },
      '$y = (c_1 + c_2 x)e^{\\omega x}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $a = 0$ and $b = \\omega^2$, the discriminant is $-4\\omega^2 < 0$, giving oscillatory solutions with $\\cos$ and $\\sin$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $a = 0$ and $b = \\omega^2$, the discriminant is $-4\\omega^2 < 0$, giving oscillatory solutions with $\\cos$ and $\\sin$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When the discriminant $d = 0$ (repeated root $r = -a/2$), the general solution is:',
    options: [
      '$y = c_1 e^{rx} + c_2 e^{-rx}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A repeated root gives only one exponential solution. The second independent solution is $xe^{rx}$, so $y = (c_1 + c_2 x)e^{rx}$.',
  },
      '$y = c_1 \\cos rx + c_2 \\sin rx
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A repeated root gives only one exponential solution. The second independent solution is $xe^{rx}$, so $y = (c_1 + c_2 x)e^{rx}$.',
  },
      '$y = c_1 + c_2 x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A repeated root gives only one exponential solution. The second independent solution is $xe^{rx}$, so $y = (c_1 + c_2 x)e^{rx}$.',
  },
      '$y = (c_1 + c_2 x)e^{rx}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A repeated root gives only one exponential solution. The second independent solution is $xe^{rx}$, so $y = (c_1 + c_2 x)e^{rx}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A repeated root gives only one exponential solution. The second independent solution is $xe^{rx}$, so $y = (c_1 + c_2 x)e^{rx}$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For $y\'\' - 5y\' + 6y = 0$, what is the sum of the roots of the characteristic equation?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: 'The characteristic equation is $r^2 - 5r + 6 = 0$. By Vieta\'s formulas, the sum of roots equals $5$ (negative of coefficient of $r$).',
  },
];
