import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A trigonometric polynomial of degree $N$ has the form:',
    options: [
      '$\\sum_{n=0}^N a_n x^n$',
      '$\\sum_{n=-N}^N c_n e^{inx}$',
      '$\\sum_{n=1}^\\infty a_n \\sin(nx)$',
      '$a_0 + a_1 \\cos(x)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A trigonometric polynomial of degree $N$ is a finite sum $\\sum_{n=-N}^N c_n e^{inx}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Fourier coefficient $\\hat{f}(n)$ of a $2\\pi$-periodic function $f$ is:',
    options: [
      '$\\hat{f}(n) = f(n)$',
      '$\\hat{f}(n) = \\frac{1}{2\\pi} \\int_0^{2\\pi} f(x) e^{-inx} \\, dx$',
      '$\\hat{f}(n) = \\int_0^\\infty f(x) e^{-nx} \\, dx$',
      '$\\hat{f}(n) = f\'(n)$'
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
      '$c_n$ for $|n| \\leq N$, and $0$ for $|n| > N$',
      '$c_n$ for all $n$',
      '$0$ for all $n$',
      '$N$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For a trigonometric polynomial, Fourier coefficients recover the original coefficients, and are zero beyond degree $N$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The partial sum $S_N f(x) = \\sum_{n=-N}^N \\hat{f}(n) e^{inx}$ is:',
    options: [
      'Always equal to $f(x)$',
      'The best $L^2$ approximation to $f$ by trigonometric polynomials of degree $\\leq N$',
      'The worst approximation to $f$',
      'Defined only for continuous $f$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The partial Fourier sum is the orthogonal projection onto the space of trigonometric polynomials.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Bessel\'s inequality states that:',
    options: [
      '$\\sum_{n=-\\infty}^\\infty |\\hat{f}(n)|^2 > \\|f\\|_2^2$',
      '$\\sum_{n=-\\infty}^\\infty |\\hat{f}(n)|^2 \\leq \\|f\\|_2^2$',
      '$\\hat{f}(n) = 0$ for large $n$',
      '$\\|f\\|_2 = 0$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Bessel\'s inequality: the sum of squared Fourier coefficients is at most the squared $L^2$ norm.',
  },
];
