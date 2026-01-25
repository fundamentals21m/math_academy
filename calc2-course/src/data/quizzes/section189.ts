import type { QuizQuestion } from './types';

export const section189Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Simpson\'s rule on $[a, b]$ with midpoint $m = (a+b)/2$ is:',
    options: [
      '$\\frac{b - a}{2}[f(a) + f(b)]
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Simpson\'s rule uses quadratic interpolation through three points, yielding $\\frac{b - a}{6}[f(a) + 4f(m) + f(b)]$.',
  },
      '$\\frac{b - a}{4}[f(a) + 2f(m) + f(b)]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Simpson\'s rule uses quadratic interpolation through three points, yielding $\\frac{b - a}{6}[f(a) + 4f(m) + f(b)]$.',
  },
      '$\\frac{b - a}{3}[f(a) + f(m) + f(b)]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Simpson\'s rule uses quadratic interpolation through three points, yielding $\\frac{b - a}{6}[f(a) + 4f(m) + f(b)]$.',
  },
      '$\\frac{b - a}{6}[f(a) + 4f(m) + f(b)]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Simpson\'s rule uses quadratic interpolation through three points, yielding $\\frac{b - a}{6}[f(a) + 4f(m) + f(b)]$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Simpson\'s rule uses quadratic interpolation through three points, yielding $\\frac{b - a}{6}[f(a) + 4f(m) + f(b)]$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The error term in Simpson\'s rule involves which derivative?',
    options: [
      '$f^{(4)}(\\xi)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Remarkably, Simpson\'s rule—based on quadratic interpolation—is exact for cubics. The error involves $f^{(4)}(\\xi)$, not $f\'\'\'$.',
  },
      '$f\\'\\'(\\xi)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Remarkably, Simpson\'s rule—based on quadratic interpolation—is exact for cubics. The error involves $f^{(4)}(\\xi)$, not $f\'\'\'$.',
  },
      '$f\\'\\'\\'(\\xi)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Remarkably, Simpson\'s rule—based on quadratic interpolation—is exact for cubics. The error involves $f^{(4)}(\\xi)$, not $f\'\'\'$.',
  },
      '$f^{(5)}(\\xi)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Remarkably, Simpson\'s rule—based on quadratic interpolation—is exact for cubics. The error involves $f^{(4)}(\\xi)$, not $f\'\'\'$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Remarkably, Simpson\'s rule—based on quadratic interpolation—is exact for cubics. The error involves $f^{(4)}(\\xi)$, not $f\'\'\'$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For the composite Simpson\'s rule with $n$ subintervals, $n$ must be:',
    options: [
      'An odd number',
      'Any positive integer',
      'An even number',
      'A power of 2',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Simpson\'s rule uses pairs of subintervals (three points each), so $n$ must be even.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The pattern of coefficients in composite Simpson\'s rule is:',
    options: [
      '$1, 4, 2, 4, 2, \\ldots, 4, 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The coefficients alternate: $1, 4, 2, 4, 2, \\ldots, 2, 4, 1$, with 4 at odd-indexed interior points and 2 at even-indexed interior points.',
  },
      '$1, 2, 2, 2, \\ldots, 2, 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The coefficients alternate: $1, 4, 2, 4, 2, \\ldots, 2, 4, 1$, with 4 at odd-indexed interior points and 2 at even-indexed interior points.',
  },
      '$1, 1, 1, \\ldots, 1, 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The coefficients alternate: $1, 4, 2, 4, 2, \\ldots, 2, 4, 1$, with 4 at odd-indexed interior points and 2 at even-indexed interior points.',
  },
      '$1, 3, 3, 1, 3, 3, \\ldots
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The coefficients alternate: $1, 4, 2, 4, 2, \\ldots, 2, 4, 1$, with 4 at odd-indexed interior points and 2 at even-indexed interior points.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The coefficients alternate: $1, 4, 2, 4, 2, \\ldots, 2, 4, 1$, with 4 at odd-indexed interior points and 2 at even-indexed interior points.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The composite Simpson\'s rule has error of order:',
    options: [
      '$O(h^4)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Simpson\'s rule has $O(h^4)$ error. Halving the step size reduces the error by a factor of 16, making it much more accurate than the trapezoidal rule.',
  },
      '$O(h^2)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Simpson\'s rule has $O(h^4)$ error. Halving the step size reduces the error by a factor of 16, making it much more accurate than the trapezoidal rule.',
  },
      '$O(h^3)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Simpson\'s rule has $O(h^4)$ error. Halving the step size reduces the error by a factor of 16, making it much more accurate than the trapezoidal rule.',
  },
      '$O(h^5)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Simpson\'s rule has $O(h^4)$ error. Halving the step size reduces the error by a factor of 16, making it much more accurate than the trapezoidal rule.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Simpson\'s rule has $O(h^4)$ error. Halving the step size reduces the error by a factor of 16, making it much more accurate than the trapezoidal rule.',
  },
];
