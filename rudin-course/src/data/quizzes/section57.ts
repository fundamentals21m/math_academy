import type { QuizQuestion } from './types';

export const section57Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Fourier series of a function $f$ on $[-\\pi, \\pi]$ is:',
    options: [
      '$\\sum_{n=-\\infty}^{\\infty} c_n e^{inx}$ where $c_n = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} f(t)e^{-int}\\,dt
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Fourier series represents $f$ in terms of complex exponentials $e^{inx}$ (or equivalently, sines and cosines). The coefficients $c_n$ are computed via the inner product with $e^{-inx}$.',
  },
      '$\\sum_{n=0}^{\\infty} a_n x^n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Fourier series represents $f$ in terms of complex exponentials $e^{inx}$ (or equivalently, sines and cosines). The coefficients $c_n$ are computed via the inner product with $e^{-inx}$.',
  },
      '$\\sum_{n=1}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Fourier series represents $f$ in terms of complex exponentials $e^{inx}$ (or equivalently, sines and cosines). The coefficients $c_n$ are computed via the inner product with $e^{-inx}$.',
  },
      '$\\int_{-\\pi}^{\\pi} f(t) \\, dt
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Fourier series represents $f$ in terms of complex exponentials $e^{inx}$ (or equivalently, sines and cosines). The coefficients $c_n$ are computed via the inner product with $e^{-inx}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Fourier series represents $f$ in terms of complex exponentials $e^{inx}$ (or equivalently, sines and cosines). The coefficients $c_n$ are computed via the inner product with $e^{-inx}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Fourier coefficients $c_n$ of $f$ satisfy Bessel\'s inequality:',
    options: [
      '$\\sum_{n=-\\infty}^{\\infty} |c_n|^2 = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} |f(t)|^2 \\, dt
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Bessel\'s inequality states $\\sum |c_n|^2 \\leq \\frac{1}{2\\pi}\\int |f|^2$. Equality (Parseval) holds when $f$ equals its Fourier series in $L^2$ sense.',
  },
      '$\\sum_{n=-\\infty}^{\\infty} |c_n|^2 \\leq \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} |f(t)|^2 \\, dt
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Bessel\'s inequality states $\\sum |c_n|^2 \\leq \\frac{1}{2\\pi}\\int |f|^2$. Equality (Parseval) holds when $f$ equals its Fourier series in $L^2$ sense.',
  },
      '$\\sum_{n=-\\infty}^{\\infty} |c_n| < \\infty
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Bessel\'s inequality states $\\sum |c_n|^2 \\leq \\frac{1}{2\\pi}\\int |f|^2$. Equality (Parseval) holds when $f$ equals its Fourier series in $L^2$ sense.',
  },
      '$|c_n| \\leq 1$ for all $n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Bessel\'s inequality states $\\sum |c_n|^2 \\leq \\frac{1}{2\\pi}\\int |f|^2$. Equality (Parseval) holds when $f$ equals its Fourier series in $L^2$ sense.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Bessel\'s inequality states $\\sum |c_n|^2 \\leq \\frac{1}{2\\pi}\\int |f|^2$. Equality (Parseval) holds when $f$ equals its Fourier series in $L^2$ sense.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f$ is continuous and $2\\pi$-periodic, its Fourier series:',
    options: [
      'Always converges uniformly to $f
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Continuity alone does not guarantee pointwise convergence of Fourier series everywhere (du Bois-Reymond constructed a continuous function whose Fourier series diverges at a point). However, Parseval guarantees $L^2$ convergence.',
  },
      'Converges to $f(x)$ at every point',
      'May not converge to $f$ everywhere (but converges in $L^2$)',
      'Diverges everywhere',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Continuity alone does not guarantee pointwise convergence of Fourier series everywhere (du Bois-Reymond constructed a continuous function whose Fourier series diverges at a point). However, Parseval guarantees $L^2$ convergence.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The partial sums $S_N(f; x) = \\sum_{n=-N}^{N} c_n e^{inx}$ can be written as:',
    options: [
      '$\\int_{-\\pi}^{\\pi} f(t) \\, dt
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The partial sums are convolutions with the Dirichlet kernel: $S_N(f; x) = (f * D_N)(x)$ where $D_N(t) = \\sum_{n=-N}^{N} e^{int} = \\frac{\\sin((N+1/2)t)}{\\sin(t/2)}$.',
  },
      '$f(x) - R_N(x)$ where $R_N \\to 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The partial sums are convolutions with the Dirichlet kernel: $S_N(f; x) = (f * D_N)(x)$ where $D_N(t) = \\sum_{n=-N}^{N} e^{int} = \\frac{\\sin((N+1/2)t)}{\\sin(t/2)}$.',
  },
      '$N \\cdot c_0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The partial sums are convolutions with the Dirichlet kernel: $S_N(f; x) = (f * D_N)(x)$ where $D_N(t) = \\sum_{n=-N}^{N} e^{int} = \\frac{\\sin((N+1/2)t)}{\\sin(t/2)}$.',
  },
      '$\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} f(t) D_N(x - t) \\, dt$ where $D_N$ is the Dirichlet kernel',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The partial sums are convolutions with the Dirichlet kernel: $S_N(f; x) = (f * D_N)(x)$ where $D_N(t) = \\sum_{n=-N}^{N} e^{int} = \\frac{\\sin((N+1/2)t)}{\\sin(t/2)}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Parseval\'s theorem states that for $f \\in L^2[-\\pi, \\pi]$:',
    options: [
      '$f$ equals its Fourier series pointwise',
      'The Fourier series converges uniformly',
      '$c_n \\to 0$ as $|n| \\to \\infty
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Parseval\'s theorem (equality in Bessel\'s inequality) says the $L^2$ norm of $f$ equals the $\\ell^2$ norm of its Fourier coefficients: $\\|f\\|_2^2 = 2\\pi \\sum |c_n|^2$. This is "conservation of energy."',
  },
      '$\\sum_{n=-\\infty}^{\\infty} |c_n|^2 = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} |f(t)|^2 \\, dt
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Parseval\'s theorem (equality in Bessel\'s inequality) says the $L^2$ norm of $f$ equals the $\\ell^2$ norm of its Fourier coefficients: $\\|f\\|_2^2 = 2\\pi \\sum |c_n|^2$. This is "conservation of energy."',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Parseval\'s theorem (equality in Bessel\'s inequality) says the $L^2$ norm of $f$ equals the $\\ell^2$ norm of its Fourier coefficients: $\\|f\\|_2^2 = 2\\pi \\sum |c_n|^2$. This is "conservation of energy."',
  },
];
