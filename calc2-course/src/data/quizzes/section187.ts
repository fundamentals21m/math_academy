import type { QuizQuestion } from './types';

export const section187Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Chebyshev polynomial $T_n(x)$ is defined on $[-1, 1]$ by:',
    options: [
      '$T_n(x) = \\sin(n \\arcsin x)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Chebyshev polynomials are defined by $T_n(x) = \\cos(n \\arccos x)$, connecting polynomial algebra to trigonometry.',
  },
      '$T_n(x) = \\tan(n \\arctan x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Chebyshev polynomials are defined by $T_n(x) = \\cos(n \\arccos x)$, connecting polynomial algebra to trigonometry.',
  },
      '$T_n(x) = e^{n \\ln x}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Chebyshev polynomials are defined by $T_n(x) = \\cos(n \\arccos x)$, connecting polynomial algebra to trigonometry.',
  },
      '$T_n(x) = \\cos(n \\arccos x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Chebyshev polynomials are defined by $T_n(x) = \\cos(n \\arccos x)$, connecting polynomial algebra to trigonometry.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Chebyshev polynomials are defined by $T_n(x) = \\cos(n \\arccos x)$, connecting polynomial algebra to trigonometry.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Chebyshev polynomials satisfy the recurrence relation:',
    options: [
      '$T_{n+1}(x) = xT_n(x) - T_{n-1}(x)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The recurrence $T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x)$ follows from the cosine addition formula, with $T_0(x) = 1$ and $T_1(x) = x$.',
  },
      '$T_{n+1}(x) = 2xT_n(x) + T_{n-1}(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The recurrence $T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x)$ follows from the cosine addition formula, with $T_0(x) = 1$ and $T_1(x) = x$.',
  },
      '$T_{n+1}(x) = T_n(x) + T_{n-1}(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The recurrence $T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x)$ follows from the cosine addition formula, with $T_0(x) = 1$ and $T_1(x) = x$.',
  },
      '$T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The recurrence $T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x)$ follows from the cosine addition formula, with $T_0(x) = 1$ and $T_1(x) = x$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The recurrence $T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x)$ follows from the cosine addition formula, with $T_0(x) = 1$ and $T_1(x) = x$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is $T_2(x)$?',
    options: [
      '$2x^2 - 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Using the recurrence: $T_2(x) = 2x \\cdot T_1(x) - T_0(x) = 2x \\cdot x - 1 = 2x^2 - 1$.',
  },
      '$x^2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Using the recurrence: $T_2(x) = 2x \\cdot T_1(x) - T_0(x) = 2x \\cdot x - 1 = 2x^2 - 1$.',
  },
      '$2x^2 + 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Using the recurrence: $T_2(x) = 2x \\cdot T_1(x) - T_0(x) = 2x \\cdot x - 1 = 2x^2 - 1$.',
  },
      '$x^2 - 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Using the recurrence: $T_2(x) = 2x \\cdot T_1(x) - T_0(x) = 2x \\cdot x - 1 = 2x^2 - 1$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Using the recurrence: $T_2(x) = 2x \\cdot T_1(x) - T_0(x) = 2x \\cdot x - 1 = 2x^2 - 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The zeros of $T_n(x)$ on $[-1, 1]$ are called Chebyshev nodes. Where are they located?',
    options: [
      'Clustered near the center of the interval',
      'Equally spaced throughout the interval',
      'At the integers from $-1$ to $1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Chebyshev nodes $x_k = \\cos\\left(\\frac{(2k+1)\\pi}{2n}\\right)$ are clustered near the endpoints, which counteracts polynomial oscillation near boundaries.',
  },
      'Clustered near the endpoints of the interval',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Chebyshev nodes $x_k = \\cos\\left(\\frac{(2k+1)\\pi}{2n}\\right)$ are clustered near the endpoints, which counteracts polynomial oscillation near boundaries.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why are Chebyshev nodes optimal for polynomial interpolation?',
    options: [
      'They make the interpolating polynomial unique',
      'They make all divided differences equal',
      'They ensure the polynomial has integer coefficients',
      'They minimize the maximum value of $|\\omega(x)|$ over the interval',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Using Chebyshev nodes makes $\\omega(x)$ a multiple of $T_{n+1}(x)$, minimizing $\\max|\\omega(x)|$ and thus the interpolation error bound.',
  },
];
