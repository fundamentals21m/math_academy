import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A trigonometric polynomial of degree $N$ has the form:',
    options: [
      '$\\sum_{n=0}^N a_n x^n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A trigonometric polynomial of degree $N$ is a finite sum $\\sum_{n=-N}^N c_n e^{inx}$.',
  },
      '$\\sum_{n=1}^\\infty a_n \\sin(nx)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A trigonometric polynomial of degree $N$ is a finite sum $\\sum_{n=-N}^N c_n e^{inx}$.',
  },
      '$\\sum_{n=-N}^N c_n e^{inx}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A trigonometric polynomial of degree $N$ is a finite sum $\\sum_{n=-N}^N c_n e^{inx}$.',
  },
      '$a_0 + a_1 \\cos(x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A trigonometric polynomial of degree $N$ is a finite sum $\\sum_{n=-N}^N c_n e^{inx}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A trigonometric polynomial of degree $N$ is a finite sum $\\sum_{n=-N}^N c_n e^{inx}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Fourier coefficient $\\hat{f}(n)$ of a $2\\pi$-periodic function $f$ is:',
    options: [
      '$\\hat{f}(n) = f(n)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The $n$-th Fourier coefficient extracts the component of $f$ in the direction of $e^{inx}$.',
  },
      '$\\hat{f}(n) = \\int_0^\\infty f(x) e^{-nx} \\, dx
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $n$-th Fourier coefficient extracts the component of $f$ in the direction of $e^{inx}$.',
  },
      '$\\hat{f}(n) = f\\'(n)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $n$-th Fourier coefficient extracts the component of $f$ in the direction of $e^{inx}$.',
  },
      '$\\hat{f}(n) = \\frac{1}{2\\pi} \\int_0^{2\\pi} f(x) e^{-inx} \\, dx
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $n$-th Fourier coefficient extracts the component of $f$ in the direction of $e^{inx}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $n$-th Fourier coefficient extracts the component of $f$ in the direction of $e^{inx}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f$ is a trigonometric polynomial $f(x) = \\sum_{n=-N}^N c_n e^{inx}$, then $\\hat{f}(n) = $',
    options: [
      '$0$ for all $n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For a trigonometric polynomial, Fourier coefficients recover the original coefficients, and are zero beyond degree $N$.',
  },
      '$c_n$ for $|n| \\leq N$, and $0$ for $|n| > N
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For a trigonometric polynomial, Fourier coefficients recover the original coefficients, and are zero beyond degree $N$.',
  },
      '$c_n$ for all $n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For a trigonometric polynomial, Fourier coefficients recover the original coefficients, and are zero beyond degree $N$.',
  },
      '$N
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For a trigonometric polynomial, Fourier coefficients recover the original coefficients, and are zero beyond degree $N$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For a trigonometric polynomial, Fourier coefficients recover the original coefficients, and are zero beyond degree $N$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The partial sum $S_N f(x) = \\sum_{n=-N}^N \\hat{f}(n) e^{inx}$ is:',
    options: [
      'The best $L^2$ approximation to $f$ by trigonometric polynomials of degree $\\leq N
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The partial Fourier sum is the orthogonal projection onto the space of trigonometric polynomials.',
  },
      'Always equal to $f(x)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The partial Fourier sum is the orthogonal projection onto the space of trigonometric polynomials.',
  },
      'Defined only for continuous $f
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The partial Fourier sum is the orthogonal projection onto the space of trigonometric polynomials.',
  },
      'The worst approximation to $f
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The partial Fourier sum is the orthogonal projection onto the space of trigonometric polynomials.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The partial Fourier sum is the orthogonal projection onto the space of trigonometric polynomials.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Bessel\'s inequality states that:',
    options: [
      '$\\sum_{n=-\\infty}^\\infty |\\hat{f}(n)|^2 > \\|f\\|_2^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Bessel\'s inequality: the sum of squared Fourier coefficients is at most the squared $L^2$ norm.',
  },
      '$\\sum_{n=-\\infty}^\\infty |\\hat{f}(n)|^2 \\leq \\|f\\|_2^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Bessel\'s inequality: the sum of squared Fourier coefficients is at most the squared $L^2$ norm.',
  },
      '$\\hat{f}(n) = 0$ for large $n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Bessel\'s inequality: the sum of squared Fourier coefficients is at most the squared $L^2$ norm.',
  },
      '$\\|f\\|_2 = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Bessel\'s inequality: the sum of squared Fourier coefficients is at most the squared $L^2$ norm.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Bessel\'s inequality: the sum of squared Fourier coefficients is at most the squared $L^2$ norm.',
  },
];
