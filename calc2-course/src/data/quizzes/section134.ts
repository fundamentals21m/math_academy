import type { QuizQuestion } from './types';

export const section134Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An n-fold integral over an n-dimensional region $S$ is denoted:',
    options: [
      '$\\int \\cdots \\int_S f(x_1, \\ldots, x_n)\\,dx_1 \\cdots dx_n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The n-fold integral is written with n integral signs: $\\int \\cdots \\int_S f(x_1, \\ldots, x_n)\\,dx_1 \\cdots dx_n$.',
  },
      '$\\int_S f
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The n-fold integral is written with n integral signs: $\\int \\cdots \\int_S f(x_1, \\ldots, x_n)\\,dx_1 \\cdots dx_n$.',
  },
      '$\\sum_{i=1}^n \\int f_i
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The n-fold integral is written with n integral signs: $\\int \\cdots \\int_S f(x_1, \\ldots, x_n)\\,dx_1 \\cdots dx_n$.',
  },
      '$\\prod_{i=1}^n \\int f\\,dx_i
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The n-fold integral is written with n integral signs: $\\int \\cdots \\int_S f(x_1, \\ldots, x_n)\\,dx_1 \\cdots dx_n$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The n-fold integral is written with n integral signs: $\\int \\cdots \\int_S f(x_1, \\ldots, x_n)\\,dx_1 \\cdots dx_n$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a solid $S$ described by $(x,y) \\in Q$ and $\\varphi_1(x,y) \\leq z \\leq \\varphi_2(x,y)$, the triple integral is computed by:',
    options: [
      '$\\iiint_S f = \\int_{\\varphi_1}^{\\varphi_2} \\iint_Q f\\,dx\\,dy\\,dz
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'We first integrate with respect to $z$ from $\\varphi_1(x,y)$ to $\\varphi_2(x,y)$, then integrate the result over the projection $Q$ in the xy-plane.',
  },
      '$\\iiint_S f = \\iint_Q [\\int_{\\varphi_1(x,y)}^{\\varphi_2(x,y)} f(x,y,z)\\,dz]\\,dx\\,dy
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We first integrate with respect to $z$ from $\\varphi_1(x,y)$ to $\\varphi_2(x,y)$, then integrate the result over the projection $Q$ in the xy-plane.',
  },
      '$\\iiint_S f = \\iint_Q f \\cdot \\int dz
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We first integrate with respect to $z$ from $\\varphi_1(x,y)$ to $\\varphi_2(x,y)$, then integrate the result over the projection $Q$ in the xy-plane.',
  },
      '$\\iiint_S f = \\int_a^b \\int_c^d \\int_e^f f\\,dx\\,dy\\,dz
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We first integrate with respect to $z$ from $\\varphi_1(x,y)$ to $\\varphi_2(x,y)$, then integrate the result over the projection $Q$ in the xy-plane.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We first integrate with respect to $z$ from $\\varphi_1(x,y)$ to $\\varphi_2(x,y)$, then integrate the result over the projection $Q$ in the xy-plane.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The volume of an n-dimensional sphere of radius $a$ involves which special function?',
    options: [
      'The Bessel function',
      'The error function',
      'The zeta function',
      'The gamma function $\\Gamma
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The volume is $V_n(a) = \\frac{\\pi^{n/2}}{\\Gamma(n/2 + 1)}a^n$. The gamma function generalizes the factorial to non-integer arguments.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The volume is $V_n(a) = \\frac{\\pi^{n/2}}{\\Gamma(n/2 + 1)}a^n$. The gamma function generalizes the factorial to non-integer arguments.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $n = 2$, the formula $V_n(a) = \\frac{\\pi^{n/2}}{\\Gamma(n/2 + 1)}a^n$ gives:',
    options: [
      '$\\pi a^2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For $n = 2$: $V_2(a) = \\frac{\\pi^1}{\\Gamma(2)}a^2 = \\frac{\\pi}{1!}a^2 = \\pi a^2$, the area of a circle.',
  },
      '$2a
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For $n = 2$: $V_2(a) = \\frac{\\pi^1}{\\Gamma(2)}a^2 = \\frac{\\pi}{1!}a^2 = \\pi a^2$, the area of a circle.',
  },
      '$\\frac{4}{3}\\pi a^3
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For $n = 2$: $V_2(a) = \\frac{\\pi^1}{\\Gamma(2)}a^2 = \\frac{\\pi}{1!}a^2 = \\pi a^2$, the area of a circle.',
  },
      '$\\frac{\\pi^2 a^4}{2}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For $n = 2$: $V_2(a) = \\frac{\\pi^1}{\\Gamma(2)}a^2 = \\frac{\\pi}{1!}a^2 = \\pi a^2$, the area of a circle.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For $n = 2$: $V_2(a) = \\frac{\\pi^1}{\\Gamma(2)}a^2 = \\frac{\\pi}{1!}a^2 = \\pi a^2$, the area of a circle.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A function $f$ is integrable on an n-dimensional interval if it is:',
    options: [
      'Bounded',
      'Bounded and has discontinuities on a set of n-dimensional content zero',
      'Differentiable everywhere',
      'Continuous at least at one point',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The integrability condition extends to n dimensions: $f$ must be bounded, and its set of discontinuities must have n-dimensional content zero.',
  },
];
