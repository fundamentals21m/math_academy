import type { QuizQuestion } from './types';

export const section118Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Theorem 11.5 states that for an integrable function $f$ on $Q = [a, b] \\times [c, d]$:',
    options: [
      '$\\iint_Q f = \\int_a^b f \\, dx + \\int_c^d f \\, dy
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 11.5: If $f$ is integrable on $Q$ and $\\int_a^b f(x, y) \\, dx$ exists for each $y$ and the resulting function of $y$ is integrable, then $\\iint_Q f = \\int_c^d [\\int_a^b f(x, y) \\, dx] \\, dy$.',
  },
      '$\\iint_Q f = \\int_c^d [\\int_a^b f(x, y) \\, dx] \\, dy$ (under appropriate conditions)',
      '$\\iint_Q f = f(b, d)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 11.5: If $f$ is integrable on $Q$ and $\\int_a^b f(x, y) \\, dx$ exists for each $y$ and the resulting function of $y$ is integrable, then $\\iint_Q f = \\int_c^d [\\int_a^b f(x, y) \\, dx] \\, dy$.',
  },
      '$\\iint_Q f = 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 11.5: If $f$ is integrable on $Q$ and $\\int_a^b f(x, y) \\, dx$ exists for each $y$ and the resulting function of $y$ is integrable, then $\\iint_Q f = \\int_c^d [\\int_a^b f(x, y) \\, dx] \\, dy$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 11.5: If $f$ is integrable on $Q$ and $\\int_a^b f(x, y) \\, dx$ exists for each $y$ and the resulting function of $y$ is integrable, then $\\iint_Q f = \\int_c^d [\\int_a^b f(x, y) \\, dx] \\, dy$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The function $A(y) = \\int_a^b f(x, y) \\, dx$ represents:',
    options: [
      'The integral of $f$ with $y$ held fixed (a function of $y$)',
      'The area under the surface',
      'The maximum of $f
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$A(y) = \\int_a^b f(x, y) \\, dx$ is the result of integrating $f$ with respect to $x$ while treating $y$ as a constant. This produces a function of $y$ alone.',
  },
      'The gradient of $f
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$A(y) = \\int_a^b f(x, y) \\, dx$ is the result of integrating $f$ with respect to $x$ while treating $y$ as a constant. This produces a function of $y$ alone.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$A(y) = \\int_a^b f(x, y) \\, dx$ is the result of integrating $f$ with respect to $x$ while treating $y$ as a constant. This produces a function of $y$ alone.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Iterated integration means:',
    options: [
      'Integrating infinitely many times',
      'Using numerical approximation',
      'Integrating over a curve',
      'First integrating with respect to one variable, then integrating the result with respect to the other',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Iterated integration (repeated integration) means first integrating with respect to $x$ (holding $y$ fixed) to get a function of $y$, then integrating that function with respect to $y$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The order of integration can be changed (Fubini\'s theorem condition):',
    options: [
      'Never',
      'When both iterated integrals exist (under appropriate hypotheses)',
      'Always without any conditions',
      'Only for constant functions'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Under appropriate conditions (when both iterated integrals exist), we can interchange the order: $\\int_c^d [\\int_a^b f \\, dx] \\, dy = \\int_a^b [\\int_c^d f \\, dy] \\, dx$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Theorem 11.5 is the two-dimensional analog of:',
    options: [
      'The mean value theorem',
      'L\'Hopital\'s rule',
      'The second fundamental theorem of calculus',
      'Taylor\'s theorem'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 11.5 is the 2D analog of the second fundamental theorem of calculus. Just as the 1D integral can be computed via antiderivatives, the 2D integral can be computed via iterated 1D integrals.',
  },
];
