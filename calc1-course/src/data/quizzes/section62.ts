import type { QuizQuestion } from './types';

export const section62Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Euler\'s formula states:',
    options: [
      '$e^{i\\theta} = \\cos\\theta - i\\sin\\theta$',
      '$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$',
      '$e^{i\\theta} = i\\cos\\theta + \\sin\\theta$',
      '$e^{\\theta} = \\cos\\theta + i\\sin\\theta$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euler\'s formula: $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The polar form $r(\\cos\\theta + i\\sin\\theta)$ can be written as:',
    options: [
      '$r + e^{i\\theta}$',
      '$re^{i\\theta}$',
      '$e^{r + i\\theta}$',
      '$r/e^{i\\theta}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By Euler: $r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Euler\'s identity $e^{i\\pi} + 1 = 0$ involves which constants?',
    options: [
      '$e$, $i$, $\\pi$, $1$, $0$',
      'Only $e$ and $\\pi$',
      '$e$, $i$, $\\pi$ only',
      '$i$ and $\\pi$ only'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'This famous identity connects $e$, $i$, $\\pi$, $1$, and $0$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is $|e^{i\\theta}|$ for any $\\theta$?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 2, precision: 0 },
    difficulty: 'easy',
    explanation: '$|e^{i\\theta}| = |\\cos\\theta + i\\sin\\theta| = \\sqrt{\\cos^2\\theta + \\sin^2\\theta} = 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To multiply $z_1 = r_1 e^{i\\theta_1}$ and $z_2 = r_2 e^{i\\theta_2}$:',
    options: [
      'Add moduli, multiply arguments',
      'Multiply moduli, add arguments',
      'Multiply moduli, multiply arguments',
      'Add moduli, add arguments'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$z_1 z_2 = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}$: multiply moduli, add arguments.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'De Moivre\'s theorem: $(\\cos\\theta + i\\sin\\theta)^n = ?$',
    options: [
      '$\\cos(n\\theta) + i\\sin(n\\theta)$',
      '$n\\cos\\theta + ni\\sin\\theta$',
      '$\\cos(\\theta^n) + i\\sin(\\theta^n)$',
      '$\\cos\\theta + i\\sin(n\\theta)$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'De Moivre: $(e^{i\\theta})^n = e^{in\\theta} = \\cos(n\\theta) + i\\sin(n\\theta)$.',
  },
];
