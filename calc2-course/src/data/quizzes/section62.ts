import type { QuizQuestion } from './types';

export const section62Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Bessel equation of order $\\nu$ is:',
    options: [
      '$y\\'\\' + y = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The standard form of Bessel\'s equation of order $\\nu$ is $x^2 y\'\' + xy\' + (x^2 - \\nu^2)y = 0$.',
  },
      '$x^2 y\\'\\' + xy\\' + x^2 y = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The standard form of Bessel\'s equation of order $\\nu$ is $x^2 y\'\' + xy\' + (x^2 - \\nu^2)y = 0$.',
  },
      '$y\\'\\' + \\frac{1}{x}y\\' + y = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The standard form of Bessel\'s equation of order $\\nu$ is $x^2 y\'\' + xy\' + (x^2 - \\nu^2)y = 0$.',
  },
      '$x^2 y\\'\\' + xy\\' + (x^2 - \\nu^2)y = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The standard form of Bessel\'s equation of order $\\nu$ is $x^2 y\'\' + xy\' + (x^2 - \\nu^2)y = 0$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The standard form of Bessel\'s equation of order $\\nu$ is $x^2 y\'\' + xy\' + (x^2 - \\nu^2)y = 0$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Bessel function of the first kind $J_\\nu(x)$ is defined by a Frobenius series with leading term:',
    options: [
      '$x^{-\\nu}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For the Bessel equation, one root of the indicial equation is $r = \\nu$, giving $J_\\nu(x) = x^\\nu \\sum_{n=0}^{\\infty} a_n x^n$.',
  },
      '$\\ln x
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For the Bessel equation, one root of the indicial equation is $r = \\nu$, giving $J_\\nu(x) = x^\\nu \\sum_{n=0}^{\\infty} a_n x^n$.',
  },
      '$x^\\nu
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For the Bessel equation, one root of the indicial equation is $r = \\nu$, giving $J_\\nu(x) = x^\\nu \\sum_{n=0}^{\\infty} a_n x^n$.',
  },
      '$e^x
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For the Bessel equation, one root of the indicial equation is $r = \\nu$, giving $J_\\nu(x) = x^\\nu \\sum_{n=0}^{\\infty} a_n x^n$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For the Bessel equation, one root of the indicial equation is $r = \\nu$, giving $J_\\nu(x) = x^\\nu \\sum_{n=0}^{\\infty} a_n x^n$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Bessel function $J_0(0)$ equals:',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Bessel function $J_0(x)$ has the series expansion starting with $1 - \\frac{x^2}{4} + \\cdots$, so $J_0(0) = 1$.',
  },
      '$\\infty
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Bessel function $J_0(x)$ has the series expansion starting with $1 - \\frac{x^2}{4} + \\cdots$, so $J_0(0) = 1$.',
  },
      'Undefined',
      '$1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Bessel function $J_0(x)$ has the series expansion starting with $1 - \\frac{x^2}{4} + \\cdots$, so $J_0(0) = 1$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Bessel function $J_0(x)$ has the series expansion starting with $1 - \\frac{x^2}{4} + \\cdots$, so $J_0(0) = 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For the Bessel equation of order $\\nu = 0$, the indicial equation has:',
    options: [
      'A repeated root $r = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When $\\nu = 0$, the indicial equation $r^2 - \\nu^2 = r^2 = 0$ has a double root at $r = 0$, requiring logarithmic terms for the second solution.',
  },
      'Two distinct roots $r = 0$ and $r = 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $\\nu = 0$, the indicial equation $r^2 - \\nu^2 = r^2 = 0$ has a double root at $r = 0$, requiring logarithmic terms for the second solution.',
  },
      'Complex roots',
      'No real roots',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $\\nu = 0$, the indicial equation $r^2 - \\nu^2 = r^2 = 0$ has a double root at $r = 0$, requiring logarithmic terms for the second solution.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The recurrence relation for the coefficients in $J_\\nu(x)$ is:',
    options: [
      '$a_{n+2} = -\\frac{a_n}{(n+2)(n+2+2\\nu)}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Bessel equation yields a two-term recurrence where $a_{n+2}$ relates to $a_n$, with odd-indexed coefficients being zero.',
  },
      '$a_{n+2} = a_n
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Bessel equation yields a two-term recurrence where $a_{n+2}$ relates to $a_n$, with odd-indexed coefficients being zero.',
  },
      '$a_{n+1} = \\frac{a_n}{n+1}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Bessel equation yields a two-term recurrence where $a_{n+2}$ relates to $a_n$, with odd-indexed coefficients being zero.',
  },
      '$a_{n+1} = -a_n
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Bessel equation yields a two-term recurrence where $a_{n+2}$ relates to $a_n$, with odd-indexed coefficients being zero.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Bessel equation yields a two-term recurrence where $a_{n+2}$ relates to $a_n$, with odd-indexed coefficients being zero.',
  },
];
