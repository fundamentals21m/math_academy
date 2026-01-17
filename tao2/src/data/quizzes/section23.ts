import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A complex number $z = a + bi$ where $i^2 = -1$ has real part:',
    options: [
      '$b$',
      '$a$',
      '$a + b$',
      '$\\sqrt{a^2 + b^2}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The real part of $z = a + bi$ is $a$, denoted $\\text{Re}(z)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The modulus (absolute value) of $z = a + bi$ is:',
    options: [
      '$a + b$',
      '$|a| + |b|$',
      '$\\sqrt{a^2 + b^2}$',
      '$a^2 + b^2$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The modulus is $|z| = \\sqrt{a^2 + b^2}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For complex numbers, Euler\'s formula states:',
    options: [
      '$e^{ix} = \\cos(x) + i\\sin(x)$',
      '$e^{ix} = \\sin(x) + i\\cos(x)$',
      '$e^{ix} = x + ix^2$',
      '$e^{ix} = 1 + ix$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Euler\'s formula: $e^{ix} = \\cos(x) + i\\sin(x)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'From Euler\'s formula, $e^{i\\pi}$ equals:',
    options: [
      '$1$',
      '$-1$',
      '$i$',
      '$0$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$e^{i\\pi} = \\cos(\\pi) + i\\sin(\\pi) = -1 + 0i = -1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The complex exponential $e^z$ for $z = x + iy$ equals:',
    options: [
      '$e^x + e^{iy}$',
      '$e^x e^{iy} = e^x(\\cos y + i \\sin y)$',
      '$e^x \\cos y$',
      '$(e^x)^{iy}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$e^z = e^{x+iy} = e^x \\cdot e^{iy} = e^x(\\cos y + i \\sin y)$.',
  },
];
