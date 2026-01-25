import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The convolution of two $2\\pi$-periodic functions $f$ and $g$ is defined as:',
    options: [
      '$(f * g)(x) = \\frac{1}{2\\pi} \\int_0^{2\\pi} f(y) g(x - y) \\, dy
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Periodic convolution integrates $f(y)g(x-y)$ over one period.',
  },
      '$(f * g)(x) = f(x) \\cdot g(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Periodic convolution integrates $f(y)g(x-y)$ over one period.',
  },
      '$(f * g)(x) = f(x) + g(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Periodic convolution integrates $f(y)g(x-y)$ over one period.',
  },
      '$(f * g)(x) = \\int_0^\\infty f(y) g(y) \\, dy
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Periodic convolution integrates $f(y)g(x-y)$ over one period.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Periodic convolution integrates $f(y)g(x-y)$ over one period.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Fourier coefficients of $f * g$ satisfy:',
    options: [
      '$\\widehat{f * g}(n) = \\hat{f}(n) + \\hat{g}(n)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Convolution in physical space corresponds to multiplication in frequency space.',
  },
      '$\\widehat{f * g}(n) = \\hat{f}(n) / \\hat{g}(n)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Convolution in physical space corresponds to multiplication in frequency space.',
  },
      '$\\widehat{f * g}(n) = \\hat{f}(n) - \\hat{g}(n)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Convolution in physical space corresponds to multiplication in frequency space.',
  },
      '$\\widehat{f * g}(n) = \\hat{f}(n) \\cdot \\hat{g}(n)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Convolution in physical space corresponds to multiplication in frequency space.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Convolution in physical space corresponds to multiplication in frequency space.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Convolution is:',
    options: [
      'Never defined',
      'Not commutative',
      'Commutative: $f * g = g * f
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Convolution is commutative and associative.',
  },
      'Commutative only for even functions',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Convolution is commutative and associative.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $K_N$ is an approximate identity (good kernel), then $f * K_N$:',
    options: [
      'Diverges',
      'Equals zero',
      'Equals $K_N
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Convolving with an approximate identity smooths and approximates the original function.',
  },
      'Converges to $f$ (in appropriate sense)',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Convolving with an approximate identity smooths and approximates the original function.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Dirichlet kernel $D_N$ is defined as:',
    options: [
      '$D_N(x) = e^{iNx}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Dirichlet kernel is $D_N(x) = \\sum_{n=-N}^N e^{inx}$, and $S_N f = f * D_N$.',
  },
      '$D_N(x) = \\sin(Nx)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Dirichlet kernel is $D_N(x) = \\sum_{n=-N}^N e^{inx}$, and $S_N f = f * D_N$.',
  },
      '$D_N(x) = \\sum_{n=-N}^N e^{inx}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Dirichlet kernel is $D_N(x) = \\sum_{n=-N}^N e^{inx}$, and $S_N f = f * D_N$.',
  },
      '$D_N(x) = N
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Dirichlet kernel is $D_N(x) = \\sum_{n=-N}^N e^{inx}$, and $S_N f = f * D_N$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Dirichlet kernel is $D_N(x) = \\sum_{n=-N}^N e^{inx}$, and $S_N f = f * D_N$.',
  },
];
