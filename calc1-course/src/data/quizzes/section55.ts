import type { QuizQuestion } from './types';

export const section55Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A second-order linear ODE with constant coefficients has the form:',
    options: [
      '$y\' + ay = 0$',
      '$y\'\' = y^2$',
      '$y\'\' + ay\' + by = 0$',
      '$(y\')^2 + y = 0$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Second-order linear constant coefficient: $y\'\' + ay\' + by = 0$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To solve $y\'\' + ay\' + by = 0$, we try solutions of the form:',
    options: [
      '$y = e^{rx}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Assume $y = e^{rx}$ and find the characteristic equation.',
  },
      '$y = x^r
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Assume $y = e^{rx}$ and find the characteristic equation.',
  },
      '$y = \\ln(rx)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Assume $y = e^{rx}$ and find the characteristic equation.',
  },
      '$y = \\sin(rx)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Assume $y = e^{rx}$ and find the characteristic equation.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Assume $y = e^{rx}$ and find the characteristic equation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The characteristic equation for $y\'\' + ay\' + by = 0$ is:',
    options: [
      '$r^2 + ar + b = 0$',
      '$r + a = 0$',
      '$r^2 = ab$',
      '$e^r + a = 0$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Substituting $y = e^{rx}$ gives $r^2 + ar + b = 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If the characteristic equation has distinct real roots $r_1, r_2$, the general solution is:',
    options: [
      '$y = e^{r_1 x} + e^{r_2 x}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Distinct roots give $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$.',
  },
      '$y = (C_1 + C_2 x)e^{rx}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Distinct roots give $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$.',
  },
      '$y = C_1 \\cos(r_1 x) + C_2 \\sin(r_2 x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Distinct roots give $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$.',
  },
      '$y = C_1 e^{r_1 x} + C_2 e^{r_2 x}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Distinct roots give $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Distinct roots give $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The characteristic equation for $y\'\' - 4y = 0$ is:',
    options: [
      '$r - 4 = 0$',
      '$r^2 + 4 = 0$',
      '$r^2 - 4 = 0$',
      '$r^2 = 0$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$y\'\' - 4y = 0$ gives $r^2 - 4 = 0$, so $r = \\pm 2$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The general solution to $y\'\' - 4y = 0$ is:',
    options: [
      '$y = Ce^{2x}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Roots $r = 2, -2$ give $y = C_1 e^{2x} + C_2 e^{-2x}$.',
  },
      '$y = C_1 e^{2x} + C_2 e^{-2x}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Roots $r = 2, -2$ give $y = C_1 e^{2x} + C_2 e^{-2x}$.',
  },
      '$y = (C_1 + C_2 x)e^{2x}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Roots $r = 2, -2$ give $y = C_1 e^{2x} + C_2 e^{-2x}$.',
  },
      '$y = C_1 \\cos 2x + C_2 \\sin 2x
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Roots $r = 2, -2$ give $y = C_1 e^{2x} + C_2 e^{-2x}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Roots $r = 2, -2$ give $y = C_1 e^{2x} + C_2 e^{-2x}$.',
  },
];
