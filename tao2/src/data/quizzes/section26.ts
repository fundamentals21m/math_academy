import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The $L^2$ inner product on $2\\pi$-periodic functions is defined as:',
    options: [
      '$\\langle f, g \\rangle = f(0)g(0)$',
      '$\\langle f, g \\rangle = \\frac{1}{2\\pi} \\int_0^{2\\pi} f(x) \\overline{g(x)} \\, dx$',
      '$\\langle f, g \\rangle = \\int_0^\\infty f(x) g(x) \\, dx$',
      '$\\langle f, g \\rangle = \\sup |f - g|$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $L^2$ inner product integrates $f \\bar{g}$ over one period, normalized by the period.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Two functions $f$ and $g$ are orthogonal (in $L^2$) if:',
    options: [
      '$f(x) = -g(x)$',
      '$\\langle f, g \\rangle = 0$',
      '$f + g = 0$',
      '$fg = 0$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Orthogonality means the inner product is zero.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The functions $e^{inx}$ for different integers $n$ are:',
    options: [
      'All equal',
      'Orthonormal with respect to the $L^2$ inner product on $[0, 2\\pi]$',
      'Linearly dependent',
      'Not orthogonal'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\frac{1}{2\\pi}\\int_0^{2\\pi} e^{inx} e^{-imx} dx = \\delta_{nm}$ (Kronecker delta).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The $L^2$ norm of a function $f$ is defined as:',
    options: [
      '$\\|f\\|_2 = \\sup |f|$',
      '$\\|f\\|_2 = \\sqrt{\\langle f, f \\rangle}$',
      '$\\|f\\|_2 = \\int |f|$',
      '$\\|f\\|_2 = |f(0)|$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The $L^2$ norm is $\\|f\\|_2 = \\sqrt{\\langle f, f \\rangle} = \\sqrt{\\frac{1}{2\\pi}\\int_0^{2\\pi} |f|^2 dx}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $n \\neq m$, $\\int_0^{2\\pi} \\sin(nx)\\cos(mx) \\, dx$ equals:',
    options: [
      '$\\pi$',
      '$2\\pi$',
      '$0$',
      '$1$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Sine and cosine of different frequencies are orthogonal over a full period.',
  },
];
