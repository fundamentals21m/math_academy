import type { QuizQuestion } from './types';

export const section55Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a bounded function $f$ on $[a,b]$ and partition $P$, the upper Riemann sum $U(f, P)$ is:',
    options: [
      '$\\sum_{i=1}^{n} \\inf_{x \\in [x_{i-1}, x_i]} f(x) \\cdot (x_i - x_{i-1})
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The upper Riemann sum uses the supremum of $f$ on each subinterval: $U(f,P) = \\sum M_i \\Delta x_i$ where $M_i = \\sup_{[x_{i-1}, x_i]} f$.',
  },
      '$\\sum_{i=1}^{n} f(x_i)(x_i - x_{i-1})
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The upper Riemann sum uses the supremum of $f$ on each subinterval: $U(f,P) = \\sum M_i \\Delta x_i$ where $M_i = \\sup_{[x_{i-1}, x_i]} f$.',
  },
      '$\\sum_{i=1}^{n} \\sup_{x \\in [x_{i-1}, x_i]} f(x) \\cdot (x_i - x_{i-1})
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The upper Riemann sum uses the supremum of $f$ on each subinterval: $U(f,P) = \\sum M_i \\Delta x_i$ where $M_i = \\sup_{[x_{i-1}, x_i]} f$.',
  },
      '$\\sum_{i=1}^{n} f\\left(\\frac{x_{i-1} + x_i}{2}\\right)(x_i - x_{i-1})
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The upper Riemann sum uses the supremum of $f$ on each subinterval: $U(f,P) = \\sum M_i \\Delta x_i$ where $M_i = \\sup_{[x_{i-1}, x_i]} f$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The upper Riemann sum uses the supremum of $f$ on each subinterval: $U(f,P) = \\sum M_i \\Delta x_i$ where $M_i = \\sup_{[x_{i-1}, x_i]} f$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The upper Riemann integral $\\overline{\\int_a^b} f$ is defined as:',
    options: [
      '$\\sup_P U(f, P)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The upper Riemann integral is $\\overline{\\int_a^b} f = \\inf_P U(f, P)$, the infimum of all upper sums over all partitions.',
  },
      '$\\sup_P L(f, P)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The upper Riemann integral is $\\overline{\\int_a^b} f = \\inf_P U(f, P)$, the infimum of all upper sums over all partitions.',
  },
      '$\\lim_{\\|P\\| \\to 0} U(f, P)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The upper Riemann integral is $\\overline{\\int_a^b} f = \\inf_P U(f, P)$, the infimum of all upper sums over all partitions.',
  },
      '$\\inf_P U(f, P)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The upper Riemann integral is $\\overline{\\int_a^b} f = \\inf_P U(f, P)$, the infimum of all upper sums over all partitions.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The upper Riemann integral is $\\overline{\\int_a^b} f = \\inf_P U(f, P)$, the infimum of all upper sums over all partitions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For any bounded function $f$ on $[a,b]$, which inequality always holds?',
    options: [
      '$\\overline{\\int_a^b} f < \\underline{\\int_a^b} f
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For any bounded function, $\\underline{\\int} f \\leq \\overline{\\int} f$. This follows because $L(f,P) \\leq U(f,P)$ for any partition $P$.',
  },
      '$\\underline{\\int_a^b} f \\leq \\overline{\\int_a^b} f
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For any bounded function, $\\underline{\\int} f \\leq \\overline{\\int} f$. This follows because $L(f,P) \\leq U(f,P)$ for any partition $P$.',
  },
      '$\\overline{\\int_a^b} f = \\underline{\\int_a^b} f
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For any bounded function, $\\underline{\\int} f \\leq \\overline{\\int} f$. This follows because $L(f,P) \\leq U(f,P)$ for any partition $P$.',
  },
      'No general relationship exists',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For any bounded function, $\\underline{\\int} f \\leq \\overline{\\int} f$. This follows because $L(f,P) \\leq U(f,P)$ for any partition $P$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $Q$ is a refinement of $P$, then:',
    options: [
      '$U(f, Q) \\leq U(f, P)$ and $L(f, Q) \\geq L(f, P)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Refinement decreases upper sums and increases lower sums: $U(f,Q) \\leq U(f,P)$ and $L(f,Q) \\geq L(f,P)$. This is because finer partitions allow tighter bounds.',
  },
      '$U(f, Q) \\geq U(f, P)$ and $L(f, Q) \\leq L(f, P)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Refinement decreases upper sums and increases lower sums: $U(f,Q) \\leq U(f,P)$ and $L(f,Q) \\geq L(f,P)$. This is because finer partitions allow tighter bounds.',
  },
      'No relationship in general',
      '$U(f, Q) = U(f, P)$ and $L(f, Q) = L(f, P)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Refinement decreases upper sums and increases lower sums: $U(f,Q) \\leq U(f,P)$ and $L(f,Q) \\geq L(f,P)$. This is because finer partitions allow tighter bounds.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Refinement decreases upper sums and increases lower sums: $U(f,Q) \\leq U(f,P)$ and $L(f,Q) \\geq L(f,P)$. This is because finer partitions allow tighter bounds.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Let $f(x) = x$ on $[0, 2]$ with partition $P = \\{0, 1, 2\\}$. Calculate the upper sum $U(f, P)$.',
    correctAnswer: 3,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'On $[0,1]$: $\\sup f = 1$. On $[1,2]$: $\\sup f = 2$. So $U(f,P) = 1 \\cdot 1 + 2 \\cdot 1 = 3$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'For $f(x) = x$ on $[0, 2]$ with partition $P = \\{0, 1, 2\\}$, calculate the lower sum $L(f, P)$.',
    correctAnswer: 1,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'On $[0,1]$: $\\inf f = 0$. On $[1,2]$: $\\inf f = 1$. So $L(f,P) = 0 \\cdot 1 + 1 \\cdot 1 = 1$.',
  },
];
