import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The convolution of two $2\\pi$-periodic functions $f$ and $g$ is defined as:',
    options: [
      '$(f * g)(x) = f(x) \\cdot g(x)$',
      '$(f * g)(x) = \\frac{1}{2\\pi} \\int_0^{2\\pi} f(y) g(x - y) \\, dy$',
      '$(f * g)(x) = f(x) + g(x)$',
      '$(f * g)(x) = \\int_0^\\infty f(y) g(y) \\, dy$'
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
      '$\\widehat{f * g}(n) = \\hat{f}(n) + \\hat{g}(n)$',
      '$\\widehat{f * g}(n) = \\hat{f}(n) \\cdot \\hat{g}(n)$',
      '$\\widehat{f * g}(n) = \\hat{f}(n) / \\hat{g}(n)$',
      '$\\widehat{f * g}(n) = \\hat{f}(n) - \\hat{g}(n)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Convolution in physical space corresponds to multiplication in frequency space.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Convolution is:',
    options: [
      'Commutative: $f * g = g * f$',
      'Not commutative',
      'Commutative only for even functions',
      'Never defined'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Convolution is commutative and associative.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $K_N$ is an approximate identity (good kernel), then $f * K_N$:',
    options: [
      'Diverges',
      'Converges to $f$ (in appropriate sense)',
      'Equals zero',
      'Equals $K_N$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Convolving with an approximate identity smooths and approximates the original function.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Dirichlet kernel $D_N$ is defined as:',
    options: [
      '$D_N(x) = e^{iNx}$',
      '$D_N(x) = \\sum_{n=-N}^N e^{inx}$',
      '$D_N(x) = \\sin(Nx)$',
      '$D_N(x) = N$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Dirichlet kernel is $D_N(x) = \\sum_{n=-N}^N e^{inx}$, and $S_N f = f * D_N$.',
  },
];
