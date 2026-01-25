import type { QuizQuestion } from './types';

export const section72Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An alternative to computing $e^{tA}$ directly is to use the Laplace transform, giving:',
    options: [
      '$e^{tA} = \\mathcal{L}^{-1}\\{(sI - A)^{-1}\\}$',
      '$e^{tA} = \\mathcal{L}^{-1}\\{A\\}$',
      '$e^{tA} = \\mathcal{L}\\{I + tA\\}$',
      '$e^{tA} = sI - A$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taking Laplace transforms of $Y\' = AY$, $Y(0) = I$ gives $\\mathcal{L}\\{e^{tA}\\} = (sI - A)^{-1}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Jordan normal form approach computes $e^{tA}$ by writing $A = PJP^{-1}$ where $J$ is:',
    options: [
      'Diagonal',
      'Upper triangular with eigenvalues on diagonal and 1s or 0s above',
      'Symmetric',
      'Orthogonal'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Jordan form $J$ has eigenvalues on the diagonal and 1s above the diagonal within each Jordan block.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a Jordan block $J = \\lambda I + N$ where $N$ is nilpotent, $e^{tJ} =$',
    options: [
      '$e^{\\lambda t}I
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $\\lambda I$ and $N$ commute, $e^{tJ} = e^{t\\lambda I}e^{tN} = e^{\\lambda t}e^{tN}$.',
  },
      '$e^{\\lambda t}e^{tN}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $\\lambda I$ and $N$ commute, $e^{tJ} = e^{t\\lambda I}e^{tN} = e^{\\lambda t}e^{tN}$.',
  },
      '$e^{\\lambda t} + e^{tN}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $\\lambda I$ and $N$ commute, $e^{tJ} = e^{t\\lambda I}e^{tN} = e^{\\lambda t}e^{tN}$.',
  },
      '$\\lambda e^{tN}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $\\lambda I$ and $N$ commute, $e^{tJ} = e^{t\\lambda I}e^{tN} = e^{\\lambda t}e^{tN}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $\\lambda I$ and $N$ commute, $e^{tJ} = e^{t\\lambda I}e^{tN} = e^{\\lambda t}e^{tN}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The resolvent method uses the integral $e^{tA} = \\frac{1}{2\\pi i}\\oint_C e^{\\lambda t}(\\lambda I - A)^{-1}d\\lambda$ where $C$:',
    options: [
      'Is any closed curve',
      'Is the unit circle',
      'Encloses all eigenvalues of $A
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The contour $C$ must enclose all eigenvalues of $A$ for the integral formula to yield $e^{tA}$.',
  },
      'Passes through all eigenvalues',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The contour $C$ must enclose all eigenvalues of $A$ for the integral formula to yield $e^{tA}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The interpolation method for $e^{tA}$ uses the fact that $e^{tA}$ equals a polynomial of degree at most:',
    options: [
      '$n$ where $A$ is $n \\times n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Cayley-Hamilton, $e^{tA}$ can be written as a polynomial in $A$ of degree at most $n-1$.',
  },
      'Equal to the number of distinct eigenvalues minus 1',
      'Infinite',
      '$n - 1$ where $A$ is $n \\times n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By Cayley-Hamilton, $e^{tA}$ can be written as a polynomial in $A$ of degree at most $n-1$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By Cayley-Hamilton, $e^{tA}$ can be written as a polynomial in $A$ of degree at most $n-1$.',
  },
];
