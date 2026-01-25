import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The area between curves $y = f(x)$ and $y = g(x)$ from $a$ to $b$ (where $f \\geq g$) is:',
    options: [
      '$\\int_a^b f(x) \\cdot g(x)\\,dx
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Area between curves = integral of (top function minus bottom function).',
  },
      '$\\int_a^b [f(x) + g(x)]\\,dx
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Area between curves = integral of (top function minus bottom function).',
  },
      '$|\\int_a^b f(x)\\,dx|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Area between curves = integral of (top function minus bottom function).',
  },
      '$\\int_a^b f(x)\\,dx - \\int_a^b g(x)\\,dx
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Area between curves = integral of (top function minus bottom function).',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Area between curves = integral of (top function minus bottom function).',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'Find the area between $y = x$ and $y = x^2$ from $x = 0$ to $x = 1$. (Hint: $\\int_0^1 x\\,dx = 1/2$, $\\int_0^1 x^2\\,dx = 1/3$)',
    correctAnswer: 0.167,
    numericRange: { min: 0, max: 10, precision: 3 },
    difficulty: 'medium',
    explanation: 'Area $= \\int_0^1 (x - x^2)\\,dx = 1/2 - 1/3 = 1/6 \\approx 0.167$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To find where two curves intersect, we:',
    options: [
      'Set their derivatives equal',
      'Set $f(x) = g(x)$ and solve for $x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Intersection points occur where $f(x) = g(x)$.',
  },
      'Find where both equal zero',
      'Compute their integrals',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Intersection points occur where $f(x) = g(x)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The curves $y = x$ and $y = x^2$ intersect at:',
    options: [
      '$x = 1$ only',
      '$x = 0$ only',
      '$x = 0$ and $x = 1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$x = x^2$ gives $x(1-x) = 0$, so $x = 0$ or $x = 1$.',
  },
      '$x = -1$ and $x = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$x = x^2$ gives $x(1-x) = 0$, so $x = 0$ or $x = 1$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$x = x^2$ gives $x(1-x) = 0$, so $x = 0$ or $x = 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f(x) < g(x)$ on $[a, b]$, the area between them is:',
    options: [
      '$\\int_a^b [g(x) - f(x)]\\,dx
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Always subtract the lower function from the upper: $\\int_a^b [g(x) - f(x)]\\,dx$.',
  },
      '$\\int_a^b [f(x) - g(x)]\\,dx
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Always subtract the lower function from the upper: $\\int_a^b [g(x) - f(x)]\\,dx$.',
  },
      'Negative',
      'Undefined',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Always subtract the lower function from the upper: $\\int_a^b [g(x) - f(x)]\\,dx$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'The area between $y = 4$ and $y = x^2$ from $x = -2$ to $x = 2$ equals $\\int_{-2}^{2}(4 - x^2)\\,dx$. Given $\\int_{-2}^{2} 4\\,dx = 16$ and $\\int_{-2}^{2} x^2\\,dx = 16/3$, what is the area?',
    correctAnswer: 10.67,
    numericRange: { min: 0, max: 100, precision: 2 },
    difficulty: 'hard',
    explanation: 'Area $= 16 - 16/3 = 48/3 - 16/3 = 32/3 \\approx 10.67$.',
  },
];
