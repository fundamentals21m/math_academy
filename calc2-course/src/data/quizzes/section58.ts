import type { QuizQuestion } from './types';

export const section58Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f$ is analytic on an interval if:',
    options: [
      'It is continuous',
      'It is differentiable',
      'It has a convergent power series expansion',
      'It is bounded'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Analytic means $f(x) = \\sum_{n=0}^\\infty a_n (x - x_0)^n$ converges on the interval.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For $y\'\' + P_1(x)y\' + P_2(x)y = 0$ with analytic coefficients, Theorem 6.13 guarantees:',
    options: [
      'Two independent analytic solutions',
      'No solutions exist',
      'Polynomial solutions only',
      'Only one solution',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When $P_1$ and $P_2$ are analytic on an interval, there exist two independent solutions that are also analytic on that interval.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To find power series solutions, we substitute $y = \\sum a_n (x - x_0)^n$ and:',
    options: [
      'Solve for $y$ directly',
      'Differentiate and equate coefficients to get a recursion',
      'Integrate the equation',
      'Factor the operator',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Substituting the series and equating coefficients of like powers gives a recursion formula for the $a_n$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The coefficients $a_0$ and $a_1$ in a power series solution represent:',
    options: [
      'Random constants',
      '$y(x_0)$ and $y\'(x_0)$',
      'The roots of the equation',
      'The interval of convergence'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$a_0 = y(x_0)$ and $a_1 = y\'(x_0)$ are the initial conditions that determine the specific solution.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Two independent power series solutions $u_1, u_2$ can be obtained by choosing:',
    options: [
      '$a_0 = a_1 = 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'These choices give solutions with initial vectors $(1, 0)$ and $(0, 1)$, which are independent. Their Wronskian at $x_0$ is $1 \\neq 0$.',
  },
      '$a_0 = a_1 = 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'These choices give solutions with initial vectors $(1, 0)$ and $(0, 1)$, which are independent. Their Wronskian at $x_0$ is $1 \\neq 0$.',
  },
      'Any values',
      '$(a_0, a_1) = (1, 0)$ and $(a_0, a_1) = (0, 1)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'These choices give solutions with initial vectors $(1, 0)$ and $(0, 1)$, which are independent. Their Wronskian at $x_0$ is $1 \\neq 0$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'These choices give solutions with initial vectors $(1, 0)$ and $(0, 1)$, which are independent. Their Wronskian at $x_0$ is $1 \\neq 0$.',
  },
];
