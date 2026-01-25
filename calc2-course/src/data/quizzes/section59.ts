import type { QuizQuestion } from './types';

export const section59Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Legendre equation is:',
    options: [
      '$y\'\' + y = 0$',
      '$x^2 y\'\' + xy\' + y = 0$',
      '$y\'\' + xy = 0$',
      '$(1 - x^2)y\'\' - 2xy\' + \\alpha(\\alpha + 1)y = 0$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Legendre equation has the specific form $(1 - x^2)y\'\' - 2xy\' + \\alpha(\\alpha + 1)y = 0$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Legendre equation arises in physical problems involving:',
    options: [
      'Linear motion only',
      'Exponential growth',
      'Spherical symmetry',
      'Oscillations only',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Legendre equation appears in problems with spherical symmetry, such as gravitational attraction and heat flow on spheres.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The recursion formula for the Legendre equation gives:',
    options: [
      '$a_{n+1}$ in terms of $a_n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The recursion $a_{n+2} = -\\frac{(\\alpha - n)(\\alpha + n + 1)}{(n+1)(n+2)} a_n$ connects every other coefficient.',
  },
      '$a_n$ in terms of $a_{n+3}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The recursion $a_{n+2} = -\\frac{(\\alpha - n)(\\alpha + n + 1)}{(n+1)(n+2)} a_n$ connects every other coefficient.',
  },
      '$a_{n+2}$ in terms of $a_n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The recursion $a_{n+2} = -\\frac{(\\alpha - n)(\\alpha + n + 1)}{(n+1)(n+2)} a_n$ connects every other coefficient.',
  },
      '$a_n = n!
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The recursion $a_{n+2} = -\\frac{(\\alpha - n)(\\alpha + n + 1)}{(n+1)(n+2)} a_n$ connects every other coefficient.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The recursion $a_{n+2} = -\\frac{(\\alpha - n)(\\alpha + n + 1)}{(n+1)(n+2)} a_n$ connects every other coefficient.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Legendre equation has polynomial solutions when:',
    options: [
      '$\\alpha$ is any real number',
      '$\\alpha$ is a nonnegative integer',
      '$\\alpha < 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $\\alpha$ is a nonnegative integer, the recursion terminates, giving polynomial solutions called Legendre polynomials.',
  },
      '$\\alpha$ is irrational',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $\\alpha$ is a nonnegative integer, the recursion terminates, giving polynomial solutions called Legendre polynomials.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $\\alpha = 2$, the even solution $u_1(x)$ becomes:',
    options: [
      '$1 - 3x^2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For $\\alpha = 2$ (even), the even power series terminates. The recursion gives $u_1(x) = 1 - 3x^2$.',
  },
      '$1
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'For $\\alpha = 2$ (even), the even power series terminates. The recursion gives $u_1(x) = 1 - 3x^2$.',
  },
      '$x
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'For $\\alpha = 2$ (even), the even power series terminates. The recursion gives $u_1(x) = 1 - 3x^2$.',
  },
      '$x - \\frac{5}{3}x^3
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'For $\\alpha = 2$ (even), the even power series terminates. The recursion gives $u_1(x) = 1 - 3x^2$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'For $\\alpha = 2$ (even), the even power series terminates. The recursion gives $u_1(x) = 1 - 3x^2$.',
  },
];
