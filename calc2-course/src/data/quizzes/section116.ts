import type { QuizQuestion } from './types';

export const section116Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For step functions on a rectangle, the iterated integration formula states:',
    options: [
      '$\\iint_Q f = \\int_a^b f \\, dx \\cdot \\int_c^d f \\, dy
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For step functions, the double integral can be computed by iterated integration: $\\iint_Q f = \\int_c^d [\\int_a^b f(x, y) \\, dx] \\, dy = \\int_a^b [\\int_c^d f(x, y) \\, dy] \\, dx$.',
  },
      '$\\iint_Q f = \\int_a^b f + \\int_c^d f
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For step functions, the double integral can be computed by iterated integration: $\\iint_Q f = \\int_c^d [\\int_a^b f(x, y) \\, dx] \\, dy = \\int_a^b [\\int_c^d f(x, y) \\, dy] \\, dx$.',
  },
      '$\\iint_Q f = \\int_c^d \\left[ \\int_a^b f(x, y) \\, dx \\right] dy
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For step functions, the double integral can be computed by iterated integration: $\\iint_Q f = \\int_c^d [\\int_a^b f(x, y) \\, dx] \\, dy = \\int_a^b [\\int_c^d f(x, y) \\, dy] \\, dx$.',
  },
      '$\\iint_Q f = f(b, d) - f(a, c)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For step functions, the double integral can be computed by iterated integration: $\\iint_Q f = \\int_c^d [\\int_a^b f(x, y) \\, dx] \\, dy = \\int_a^b [\\int_c^d f(x, y) \\, dy] \\, dx$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For step functions, the double integral can be computed by iterated integration: $\\iint_Q f = \\int_c^d [\\int_a^b f(x, y) \\, dx] \\, dy = \\int_a^b [\\int_c^d f(x, y) \\, dy] \\, dx$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The linearity property of double integrals states that $\\iint_Q [c_1 s + c_2 t] = $:',
    options: [
      '$c_1 c_2 \\iint_Q s \\cdot \\iint_Q t
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The linearity property: $\\iint_Q [c_1 s + c_2 t] = c_1 \\iint_Q s + c_2 \\iint_Q t$ for constants $c_1, c_2$ and step functions $s, t$.',
  },
      '$(c_1 + c_2) \\iint_Q (s + t)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The linearity property: $\\iint_Q [c_1 s + c_2 t] = c_1 \\iint_Q s + c_2 \\iint_Q t$ for constants $c_1, c_2$ and step functions $s, t$.',
  },
      '$c_1 \\iint_Q s + c_2 \\iint_Q t
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The linearity property: $\\iint_Q [c_1 s + c_2 t] = c_1 \\iint_Q s + c_2 \\iint_Q t$ for constants $c_1, c_2$ and step functions $s, t$.',
  },
      '$\\iint_Q s + \\iint_Q t
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The linearity property: $\\iint_Q [c_1 s + c_2 t] = c_1 \\iint_Q s + c_2 \\iint_Q t$ for constants $c_1, c_2$ and step functions $s, t$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The linearity property: $\\iint_Q [c_1 s + c_2 t] = c_1 \\iint_Q s + c_2 \\iint_Q t$ for constants $c_1, c_2$ and step functions $s, t$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The additive property states that if $Q$ is subdivided into $Q_1$ and $Q_2$, then:',
    options: [
      '$\\iint_Q s = \\iint_{Q_1} s - \\iint_{Q_2} s
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The additive property: if $Q = Q_1 \\cup Q_2$ (with $Q_1, Q_2$ sharing only boundary), then $\\iint_Q s = \\iint_{Q_1} s + \\iint_{Q_2} s$.',
  },
      '$\\iint_Q s = \\iint_{Q_1} s + \\iint_{Q_2} s
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The additive property: if $Q = Q_1 \\cup Q_2$ (with $Q_1, Q_2$ sharing only boundary), then $\\iint_Q s = \\iint_{Q_1} s + \\iint_{Q_2} s$.',
  },
      '$\\iint_Q s = \\iint_{Q_1} s \\cdot \\iint_{Q_2} s
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The additive property: if $Q = Q_1 \\cup Q_2$ (with $Q_1, Q_2$ sharing only boundary), then $\\iint_Q s = \\iint_{Q_1} s + \\iint_{Q_2} s$.',
  },
      '$\\iint_Q s = \\max(\\iint_{Q_1} s, \\iint_{Q_2} s)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The additive property: if $Q = Q_1 \\cup Q_2$ (with $Q_1, Q_2$ sharing only boundary), then $\\iint_Q s = \\iint_{Q_1} s + \\iint_{Q_2} s$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The additive property: if $Q = Q_1 \\cup Q_2$ (with $Q_1, Q_2$ sharing only boundary), then $\\iint_Q s = \\iint_{Q_1} s + \\iint_{Q_2} s$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The comparison theorem states that if $s(x, y) \\leq t(x, y)$ everywhere on $Q$, then:',
    options: [
      '$\\iint_Q s = \\iint_Q t$',
      '$\\iint_Q s \\geq \\iint_Q t$',
      '$\\iint_Q s \\cdot \\iint_Q t \\geq 0$',
      '$\\iint_Q s \\leq \\iint_Q t$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The comparison theorem: if $s \\leq t$ on $Q$, then $\\iint_Q s \\leq \\iint_Q t$. In particular, if $t \\geq 0$, then $\\iint_Q t \\geq 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'These properties for step functions are proved by:',
    options: [
      'Direct computation from the definition or using the iterated formula and 1D theorems',
      'Advanced measure theory',
      'Fourier analysis',
      'Complex integration'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The properties can be proved either directly from the sum definition or by using the iterated integration formula and the corresponding theorems for one-dimensional integrals.',
  },
];
