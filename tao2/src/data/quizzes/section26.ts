import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The $L^2$ inner product on $2\\pi$-periodic functions is defined as:',
    options: [
      '$\\langle f, g \\rangle = f(0)g(0)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $L^2$ inner product integrates $f \\bar{g}$ over one period, normalized by the period.',
  },
      '$\\langle f, g \\rangle = \\frac{1}{2\\pi} \\int_0^{2\\pi} f(x) \\overline{g(x)} \\, dx
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The $L^2$ inner product integrates $f \\bar{g}$ over one period, normalized by the period.',
  },
      '$\\langle f, g \\rangle = \\sup |f - g|
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The $L^2$ inner product integrates $f \\bar{g}$ over one period, normalized by the period.',
  },
      '$\\langle f, g \\rangle = \\int_0^\\infty f(x) g(x) \\, dx
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The $L^2$ inner product integrates $f \\bar{g}$ over one period, normalized by the period.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The $L^2$ inner product integrates $f \\bar{g}$ over one period, normalized by the period.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Two functions $f$ and $g$ are orthogonal (in $L^2$) if:',
    options: [
      '$f(x) = -g(x)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Orthogonality means the inner product is zero.',
  },
      '$f + g = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Orthogonality means the inner product is zero.',
  },
      '$fg = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Orthogonality means the inner product is zero.',
  },
      '$\\langle f, g \\rangle = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Orthogonality means the inner product is zero.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Orthogonality means the inner product is zero.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The functions $e^{inx}$ for different integers $n$ are:',
    options: [
      'All equal',
      'Linearly dependent',
      'Not orthogonal',
      'Orthonormal with respect to the $L^2$ inner product on $[0, 2\\pi]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\frac{1}{2\\pi}\\int_0^{2\\pi} e^{inx} e^{-imx} dx = \\delta_{nm}$ (Kronecker delta).',
  },
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
      '$\\|f\\|_2 = \\sup |f|
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The $L^2$ norm is $\\|f\\|_2 = \\sqrt{\\langle f, f \\rangle} = \\sqrt{\\frac{1}{2\\pi}\\int_0^{2\\pi} |f|^2 dx}$.',
  },
      '$\\|f\\|_2 = \\int |f|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The $L^2$ norm is $\\|f\\|_2 = \\sqrt{\\langle f, f \\rangle} = \\sqrt{\\frac{1}{2\\pi}\\int_0^{2\\pi} |f|^2 dx}$.',
  },
      '$\\|f\\|_2 = |f(0)|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The $L^2$ norm is $\\|f\\|_2 = \\sqrt{\\langle f, f \\rangle} = \\sqrt{\\frac{1}{2\\pi}\\int_0^{2\\pi} |f|^2 dx}$.',
  },
      '$\\|f\\|_2 = \\sqrt{\\langle f, f \\rangle}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The $L^2$ norm is $\\|f\\|_2 = \\sqrt{\\langle f, f \\rangle} = \\sqrt{\\frac{1}{2\\pi}\\int_0^{2\\pi} |f|^2 dx}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The $L^2$ norm is $\\|f\\|_2 = \\sqrt{\\langle f, f \\rangle} = \\sqrt{\\frac{1}{2\\pi}\\int_0^{2\\pi} |f|^2 dx}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $n \\neq m$, $\\int_0^{2\\pi} \\sin(nx)\\cos(mx) \\, dx$ equals:',
    options: [
      '$0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Sine and cosine of different frequencies are orthogonal over a full period.',
  },
      '$\\pi
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Sine and cosine of different frequencies are orthogonal over a full period.',
  },
      '$2\\pi
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Sine and cosine of different frequencies are orthogonal over a full period.',
  },
      '$1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Sine and cosine of different frequencies are orthogonal over a full period.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Sine and cosine of different frequencies are orthogonal over a full period.',
  },
];
