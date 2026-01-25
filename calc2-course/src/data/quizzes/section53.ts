import type { QuizQuestion } from './types';

export const section53Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Complex roots of a real characteristic polynomial occur in:',
    options: [
      'Triples',
      'Conjugate pairs',
      'Single roots only',
      'Quadruples'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since coefficients are real, complex roots come in conjugate pairs: $\\alpha + i\\beta$ and $\\alpha - i\\beta$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For complex roots $\\alpha \\pm i\\beta$, the real solutions are:',
    options: [
      '$e^{\\alpha x}\\cos\\beta x$ and $e^{\\alpha x}\\sin\\beta x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Using Euler\'s formula, the real and imaginary parts of $e^{(\\alpha + i\\beta)x}$ give $e^{\\alpha x}\\cos\\beta x$ and $e^{\\alpha x}\\sin\\beta x$.',
  },
      '$\\cos\\alpha x$ and $\\sin\\beta x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Using Euler\'s formula, the real and imaginary parts of $e^{(\\alpha + i\\beta)x}$ give $e^{\\alpha x}\\cos\\beta x$ and $e^{\\alpha x}\\sin\\beta x$.',
  },
      '$e^{\\alpha x}$ and $e^{\\beta x}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Using Euler\'s formula, the real and imaginary parts of $e^{(\\alpha + i\\beta)x}$ give $e^{\\alpha x}\\cos\\beta x$ and $e^{\\alpha x}\\sin\\beta x$.',
  },
      '$e^{i\\beta x}$ and $e^{-i\\beta x}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Using Euler\'s formula, the real and imaginary parts of $e^{(\\alpha + i\\beta)x}$ give $e^{\\alpha x}\\cos\\beta x$ and $e^{\\alpha x}\\sin\\beta x$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Using Euler\'s formula, the real and imaginary parts of $e^{(\\alpha + i\\beta)x}$ give $e^{\\alpha x}\\cos\\beta x$ and $e^{\\alpha x}\\sin\\beta x$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $y\'\' + 4y = 0$ with roots $\\pm 2i$, the general solution is:',
    options: [
      '$y = c_1 \\cos 2x + c_2 \\sin 2x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Roots $\\pm 2i$ means $\\alpha = 0$, $\\beta = 2$. Solutions are $\\cos 2x$ and $\\sin 2x$.',
  },
      '$y = c_1 e^{2x} + c_2 e^{-2x}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Roots $\\pm 2i$ means $\\alpha = 0$, $\\beta = 2$. Solutions are $\\cos 2x$ and $\\sin 2x$.',
  },
      '$y = c_1 e^{2ix} + c_2 e^{-2ix}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Roots $\\pm 2i$ means $\\alpha = 0$, $\\beta = 2$. Solutions are $\\cos 2x$ and $\\sin 2x$.',
  },
      '$y = (c_1 + c_2 x)e^{2x}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Roots $\\pm 2i$ means $\\alpha = 0$, $\\beta = 2$. Solutions are $\\cos 2x$ and $\\sin 2x$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Roots $\\pm 2i$ means $\\alpha = 0$, $\\beta = 2$. Solutions are $\\cos 2x$ and $\\sin 2x$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\alpha < 0$ for complex roots $\\alpha \\pm i\\beta$, the solutions:',
    options: [
      'Grow exponentially',
      'Are constant',
      'Decay while oscillating',
      'Are purely polynomial',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The factor $e^{\\alpha x}$ with $\\alpha < 0$ causes exponential decay, while $\\cos\\beta x, \\sin\\beta x$ provide oscillation.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For repeated complex roots $\\alpha \\pm i\\beta$ with multiplicity $m$, how many independent real solutions are there?',
    options: [
      '$m
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Each pair gives $2$ solutions per multiplicity level: $x^{q-1}e^{\\alpha x}\\cos\\beta x$ and $x^{q-1}e^{\\alpha x}\\sin\\beta x$ for $q = 1, \\ldots, m$.',
  },
      '$m^2
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Each pair gives $2$ solutions per multiplicity level: $x^{q-1}e^{\\alpha x}\\cos\\beta x$ and $x^{q-1}e^{\\alpha x}\\sin\\beta x$ for $q = 1, \\ldots, m$.',
  },
      '$2m - 1
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Each pair gives $2$ solutions per multiplicity level: $x^{q-1}e^{\\alpha x}\\cos\\beta x$ and $x^{q-1}e^{\\alpha x}\\sin\\beta x$ for $q = 1, \\ldots, m$.',
  },
      '$2m
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Each pair gives $2$ solutions per multiplicity level: $x^{q-1}e^{\\alpha x}\\cos\\beta x$ and $x^{q-1}e^{\\alpha x}\\sin\\beta x$ for $q = 1, \\ldots, m$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Each pair gives $2$ solutions per multiplicity level: $x^{q-1}e^{\\alpha x}\\cos\\beta x$ and $x^{q-1}e^{\\alpha x}\\sin\\beta x$ for $q = 1, \\ldots, m$.',
  },
];
