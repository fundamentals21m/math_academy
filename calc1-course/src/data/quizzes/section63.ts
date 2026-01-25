import type { QuizQuestion } from './types';

export const section63Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A complex-valued function $f(t) = u(t) + iv(t)$ is differentiable if:',
    options: [
      'Both $u(t)$ and $v(t)$ are differentiable',
      'Only $u(t)$ is differentiable',
      '$f(t)$ is constant',
      'Neither needs to be differentiable',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Differentiate component-wise: $f\'(t) = u\'(t) + iv\'(t)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The derivative of $e^{it}$ is:',
    options: [
      '$e^{it}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dt}e^{it} = ie^{it}$ (chain rule).',
  },
      '$ie^{it}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dt}e^{it} = ie^{it}$ (chain rule).',
  },
      '$-ie^{it}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dt}e^{it} = ie^{it}$ (chain rule).',
  },
      '$te^{it}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dt}e^{it} = ie^{it}$ (chain rule).',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dt}e^{it} = ie^{it}$ (chain rule).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The integral $\\int e^{it}\\,dt$ equals:',
    options: [
      '$e^{it} + C
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\int e^{it}\\,dt = \\frac{e^{it}}{i} = -ie^{it} + C$.',
  },
      '$ie^{it} + C
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\int e^{it}\\,dt = \\frac{e^{it}}{i} = -ie^{it} + C$.',
  },
      '$\\frac{1}{i}e^{it} + C = -ie^{it} + C
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\int e^{it}\\,dt = \\frac{e^{it}}{i} = -ie^{it} + C$.',
  },
      '$te^{it} + C
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\int e^{it}\\,dt = \\frac{e^{it}}{i} = -ie^{it} + C$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\int e^{it}\\,dt = \\frac{e^{it}}{i} = -ie^{it} + C$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Using $e^{it} = \\cos t + i\\sin t$, we can express $\\cos t$ as:',
    options: [
      '$\\frac{e^{it} + e^{-it}}{2}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\cos t = \\frac{e^{it} + e^{-it}}{2}$ (from Euler\'s formula).',
  },
      '$\\frac{e^{it} + e^{-it}}{2i}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\cos t = \\frac{e^{it} + e^{-it}}{2}$ (from Euler\'s formula).',
  },
      '$\\frac{e^{it} - e^{-it}}{2}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\cos t = \\frac{e^{it} + e^{-it}}{2}$ (from Euler\'s formula).',
  },
      '$e^{it}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\cos t = \\frac{e^{it} + e^{-it}}{2}$ (from Euler\'s formula).',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\cos t = \\frac{e^{it} + e^{-it}}{2}$ (from Euler\'s formula).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Similarly, $\\sin t = ?$',
    options: [
      '$\\frac{e^{it} + e^{-it}}{2}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\sin t = \\frac{e^{it} - e^{-it}}{2i}$.',
  },
      '$\\frac{e^{it} - e^{-it}}{2i}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\sin t = \\frac{e^{it} - e^{-it}}{2i}$.',
  },
      '$\\frac{e^{it} - e^{-it}}{2}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\sin t = \\frac{e^{it} - e^{-it}}{2i}$.',
  },
      '$ie^{it}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\sin t = \\frac{e^{it} - e^{-it}}{2i}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\sin t = \\frac{e^{it} - e^{-it}}{2i}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Complex exponentials simplify finding particular solutions to:',
    options: [
      'Any differential equation',
      'Only first-order DEs',
      'Partial differential equations',
      'DEs with trig forcing terms (using $e^{i\\omega t}$)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Replace $\\cos(\\omega t)$ or $\\sin(\\omega t)$ with $e^{i\\omega t}$, solve, take real/imaginary part.',
  },
];
