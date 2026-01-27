import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Work done by a constant force $F$ over distance $d$ is:',
    options: [
      '$F + d$',
      '$F/d$',
      '$Fd$',
      '$F - d$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Work = Force × Distance = $Fd$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When force varies with position, $F = f(x)$, the work done from $a$ to $b$ is:',
    options: [
      '$f(b) - f(a)$',
      '$\\frac{f(a) + f(b)}{2}(b-a)$',
      '$f(a) + f(b)$',
      '$\\int_a^b f(x)\\,dx$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Work with variable force: $W = \\int_a^b f(x)\\,dx$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The average value of $f$ on $[a, b]$ is:',
    options: [
      '$\\frac{1}{b-a}\\int_a^b f(x)\\,dx$',
      '$\\frac{f(a) + f(b)}{2}$',
      '$\\int_a^b f(x)\\,dx$',
      '$\\frac{f(b) - f(a)}{b - a}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Average value: $f_{avg} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $\\int_0^4 f(x)\\,dx = 12$, what is the average value of $f$ on $[0, 4]$?',
    correctAnswer: 3,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Average $= \\frac{1}{4-0} \\cdot 12 = 3$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Hooke\'s Law states that the force required to stretch a spring is:',
    options: [
      'Constant',
      'Proportional to the displacement: $F = kx$',
      'Proportional to the square of displacement',
      'Independent of displacement'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Hooke\'s Law: $F = kx$ where $k$ is the spring constant.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'The work to stretch a spring from $x = 0$ to $x = 2$ with $k = 5$ is $\\int_0^2 5x\\,dx$. What is this work?',
    correctAnswer: 10,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\int_0^2 5x\\,dx = 5 \\cdot \\frac{x^2}{2}\\Big|_0^2 = 5 \\cdot 2 = 10$.',
  },
];
