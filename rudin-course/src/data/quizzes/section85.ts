import type { QuizQuestion } from './types';

export const section85Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The space $L^2(\\mu)$ consists of:',
    options: [
      'All measurable functions',
      'All square functions',
      'Continuous functions with compact support',
      'Measurable functions $f$ with $\\int |f|^2 d\\mu < \\infty$ (identified if equal a.e.)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$L^2$ is the space of square-integrable functions. Functions equal almost everywhere are identified, making $L^2$ a proper vector space (not just a set).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The inner product on $L^2(\\mu)$ is defined as:',
    options: [
      '$\\langle f, g \\rangle = \\int f \\overline{g} \\, d\\mu
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The $L^2$ inner product uses complex conjugation: $\\langle f, g \\rangle = \\int f \\bar{g}$. This makes $\\langle f, f \\rangle = \\int |f|^2 \\geq 0$.',
  },
      '$\\langle f, g \\rangle = \\int |f| |g| \\, d\\mu
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The $L^2$ inner product uses complex conjugation: $\\langle f, g \\rangle = \\int f \\bar{g}$. This makes $\\langle f, f \\rangle = \\int |f|^2 \\geq 0$.',
  },
      '$\\langle f, g \\rangle = \\int fg \\, d\\mu
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The $L^2$ inner product uses complex conjugation: $\\langle f, g \\rangle = \\int f \\bar{g}$. This makes $\\langle f, f \\rangle = \\int |f|^2 \\geq 0$.',
  },
      '$\\langle f, g \\rangle = \\sup f \\cdot \\sup g
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The $L^2$ inner product uses complex conjugation: $\\langle f, g \\rangle = \\int f \\bar{g}$. This makes $\\langle f, f \\rangle = \\int |f|^2 \\geq 0$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The $L^2$ inner product uses complex conjugation: $\\langle f, g \\rangle = \\int f \\bar{g}$. This makes $\\langle f, f \\rangle = \\int |f|^2 \\geq 0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Cauchy-Schwarz inequality in $L^2$ states:',
    options: [
      '$\\int fg = \\int f \\cdot \\int g
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Cauchy-Schwarz: $|\\int f\\bar{g}| \\leq (\\int |f|^2)^{1/2}(\\int |g|^2)^{1/2}$. Equality holds iff $f$ and $g$ are proportional.',
  },
      '$|\\langle f, g \\rangle| \\leq \\|f\\|_2 \\|g\\|_2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Cauchy-Schwarz: $|\\int f\\bar{g}| \\leq (\\int |f|^2)^{1/2}(\\int |g|^2)^{1/2}$. Equality holds iff $f$ and $g$ are proportional.',
  },
      '$\\|f + g\\|_2 \\leq \\|f\\|_2 + \\|g\\|_2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Cauchy-Schwarz: $|\\int f\\bar{g}| \\leq (\\int |f|^2)^{1/2}(\\int |g|^2)^{1/2}$. Equality holds iff $f$ and $g$ are proportional.',
  },
      '$\\|fg\\|_1 \\leq \\|f\\|_2 \\|g\\|_2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Cauchy-Schwarz: $|\\int f\\bar{g}| \\leq (\\int |f|^2)^{1/2}(\\int |g|^2)^{1/2}$. Equality holds iff $f$ and $g$ are proportional.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Cauchy-Schwarz: $|\\int f\\bar{g}| \\leq (\\int |f|^2)^{1/2}(\\int |g|^2)^{1/2}$. Equality holds iff $f$ and $g$ are proportional.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The space $L^2(\\mu)$ is:',
    options: [
      'An incomplete inner product space',
      'Not a vector space',
      'A complete inner product space (Hilbert space)',
      'Complete only for finite measures',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Riesz-Fischer theorem: $L^2$ is complete, making it a Hilbert space. This is fundamental for Fourier analysis and quantum mechanics.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\{e_n\\}$ is an orthonormal basis for $L^2[0,2\\pi]$ (e.g., $e_n = \\frac{1}{\\sqrt{2\\pi}}e^{inx}$), then for any $f \\in L^2$:',
    options: [
      '$f = \\sum_{n} \\langle f, e_n \\rangle e_n$ converging in $L^2$ norm',
      '$f = \\sum_n \\langle f, e_n \\rangle e_n$ converging pointwise everywhere',
      'The series diverges',
      '$f$ equals a finite sum',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'In a Hilbert space with orthonormal basis, every element has a unique expansion converging in the norm. This is the basis of Fourier series in $L^2$.',
  },
];
