import type { QuizQuestion } from './types';

export const section60Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Legendre polynomials $P_n(x)$ are defined on which interval?',
    options: [
      '$[-1, 1]$',
      '$(-\\infty, \\infty)$',
      '$[0, 1]$',
      '$[0, \\infty)$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Legendre polynomials are defined and orthogonal on the interval $[-1, 1]$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Rodrigues formula for Legendre polynomials is $P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n}(x^2 - 1)^n$. What is $P_0(x)$?',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For $n = 0$: $P_0(x) = \\frac{1}{2^0 \\cdot 0!}(x^2-1)^0 = 1$.',
  },
      '$x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For $n = 0$: $P_0(x) = \\frac{1}{2^0 \\cdot 0!}(x^2-1)^0 = 1$.',
  },
      '$x^2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For $n = 0$: $P_0(x) = \\frac{1}{2^0 \\cdot 0!}(x^2-1)^0 = 1$.',
  },
      '$1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For $n = 0$: $P_0(x) = \\frac{1}{2^0 \\cdot 0!}(x^2-1)^0 = 1$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For $n = 0$: $P_0(x) = \\frac{1}{2^0 \\cdot 0!}(x^2-1)^0 = 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Legendre polynomials satisfy which orthogonality relation?',
    options: [
      '$\\int_{-\\infty}^{\\infty} P_m(x) P_n(x) e^{-x^2}\\, dx = 0$ for $m \\neq n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Legendre polynomials are orthogonal with respect to the weight function $w(x) = 1$ on $[-1, 1]$.',
  },
      '$\\int_{0}^{\\infty} P_m(x) P_n(x) e^{-x}\\, dx = 0$ for $m \\neq n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Legendre polynomials are orthogonal with respect to the weight function $w(x) = 1$ on $[-1, 1]$.',
  },
      '$\\sum_{k=0}^{\\infty} P_m(k) P_n(k) = 0$ for $m \\neq n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Legendre polynomials are orthogonal with respect to the weight function $w(x) = 1$ on $[-1, 1]$.',
  },
      '$\\int_{-1}^{1} P_m(x) P_n(x)\\, dx = 0$ for $m \\neq n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Legendre polynomials are orthogonal with respect to the weight function $w(x) = 1$ on $[-1, 1]$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Legendre polynomials are orthogonal with respect to the weight function $w(x) = 1$ on $[-1, 1]$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the value of $\\int_{-1}^{1} [P_n(x)]^2\\, dx$?',
    options: [
      '$1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The normalization integral for Legendre polynomials is $\\int_{-1}^{1} [P_n(x)]^2\\, dx = \\frac{2}{2n+1}$.',
  },
      '$\\frac{2}{2n+1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The normalization integral for Legendre polynomials is $\\int_{-1}^{1} [P_n(x)]^2\\, dx = \\frac{2}{2n+1}$.',
  },
      '$\\frac{2}{n}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The normalization integral for Legendre polynomials is $\\int_{-1}^{1} [P_n(x)]^2\\, dx = \\frac{2}{2n+1}$.',
  },
      '$\\frac{1}{n+1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The normalization integral for Legendre polynomials is $\\int_{-1}^{1} [P_n(x)]^2\\, dx = \\frac{2}{2n+1}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The normalization integral for Legendre polynomials is $\\int_{-1}^{1} [P_n(x)]^2\\, dx = \\frac{2}{2n+1}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Using the Rodrigues formula, $P_1(x)$ equals:',
    options: [
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$P_1(x) = \\frac{1}{2^1 \\cdot 1!} \\frac{d}{dx}(x^2 - 1) = \\frac{1}{2} \\cdot 2x = x$.',
  },
      '$\\frac{1}{2}(3x^2 - 1)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$P_1(x) = \\frac{1}{2^1 \\cdot 1!} \\frac{d}{dx}(x^2 - 1) = \\frac{1}{2} \\cdot 2x = x$.',
  },
      '$x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$P_1(x) = \\frac{1}{2^1 \\cdot 1!} \\frac{d}{dx}(x^2 - 1) = \\frac{1}{2} \\cdot 2x = x$.',
  },
      '$\\frac{1}{2}(5x^3 - 3x)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$P_1(x) = \\frac{1}{2^1 \\cdot 1!} \\frac{d}{dx}(x^2 - 1) = \\frac{1}{2} \\cdot 2x = x$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$P_1(x) = \\frac{1}{2^1 \\cdot 1!} \\frac{d}{dx}(x^2 - 1) = \\frac{1}{2} \\cdot 2x = x$.',
  },
];
