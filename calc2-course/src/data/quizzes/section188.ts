import type { QuizQuestion } from './types';

export const section188Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The trapezoidal rule approximates $\\int_a^b f(x)\\,dx$ by:',
    options: [
      '$\\frac{b - a}{2}[f(a) + f(b)]
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The trapezoidal rule uses linear interpolation between endpoints, giving the area of a trapezoid: $\\frac{b - a}{2}[f(a) + f(b)]$.',
  },
      '$(b - a) \\cdot f(a)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The trapezoidal rule uses linear interpolation between endpoints, giving the area of a trapezoid: $\\frac{b - a}{2}[f(a) + f(b)]$.',
  },
      '$(b - a) \\cdot f\\left(\\frac{a+b}{2}\\right)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The trapezoidal rule uses linear interpolation between endpoints, giving the area of a trapezoid: $\\frac{b - a}{2}[f(a) + f(b)]$.',
  },
      '$\\frac{b - a}{3}[f(a) + f(b)]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The trapezoidal rule uses linear interpolation between endpoints, giving the area of a trapezoid: $\\frac{b - a}{2}[f(a) + f(b)]$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The trapezoidal rule uses linear interpolation between endpoints, giving the area of a trapezoid: $\\frac{b - a}{2}[f(a) + f(b)]$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The error in the single-interval trapezoidal rule is:',
    options: [
      '$O(b-a)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The error is $-\\frac{(b-a)^3}{12}f\'\'(\\xi)$, which is $O((b-a)^3)$. This means the rule is exact for linear functions.',
  },
      '$O((b-a)^2)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The error is $-\\frac{(b-a)^3}{12}f\'\'(\\xi)$, which is $O((b-a)^3)$. This means the rule is exact for linear functions.',
  },
      '$O((b-a)^3)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The error is $-\\frac{(b-a)^3}{12}f\'\'(\\xi)$, which is $O((b-a)^3)$. This means the rule is exact for linear functions.',
  },
      '$O((b-a)^4)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The error is $-\\frac{(b-a)^3}{12}f\'\'(\\xi)$, which is $O((b-a)^3)$. This means the rule is exact for linear functions.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The error is $-\\frac{(b-a)^3}{12}f\'\'(\\xi)$, which is $O((b-a)^3)$. This means the rule is exact for linear functions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the composite trapezoidal rule with $n$ subintervals, the weights for interior points are:',
    options: [
      '$1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The composite rule is $\\frac{h}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)]$. Interior points get weight 2.',
  },
      '$2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The composite rule is $\\frac{h}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)]$. Interior points get weight 2.',
  },
      '$4
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The composite rule is $\\frac{h}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)]$. Interior points get weight 2.',
  },
      '$h
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The composite rule is $\\frac{h}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)]$. Interior points get weight 2.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The composite rule is $\\frac{h}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)]$. Interior points get weight 2.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For the composite trapezoidal rule, the global error is:',
    options: [
      '$O(h)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The composite error is $-\\frac{(b-a)h^2}{12}f\'\'(\\xi) = O(h^2)$. Halving $h$ reduces error by a factor of 4.',
  },
      '$O(h^3)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The composite error is $-\\frac{(b-a)h^2}{12}f\'\'(\\xi) = O(h^2)$. Halving $h$ reduces error by a factor of 4.',
  },
      '$O(h^4)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The composite error is $-\\frac{(b-a)h^2}{12}f\'\'(\\xi) = O(h^2)$. Halving $h$ reduces error by a factor of 4.',
  },
      '$O(h^2)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The composite error is $-\\frac{(b-a)h^2}{12}f\'\'(\\xi) = O(h^2)$. Halving $h$ reduces error by a factor of 4.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The composite error is $-\\frac{(b-a)h^2}{12}f\'\'(\\xi) = O(h^2)$. Halving $h$ reduces error by a factor of 4.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Using the trapezoidal rule with $a = 0$, $b = 2$, $f(0) = 1$, and $f(2) = 5$, what is the approximate integral?',
    correctAnswer: 6,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\frac{b - a}{2}[f(a) + f(b)] = \\frac{2 - 0}{2}[1 + 5] = 1 \\cdot 6 = 6$.',
  },
];
