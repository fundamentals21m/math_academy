import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the method of exhaustion used for?',
    options: [
      'Finding limits of sequences',
      'Computing areas by inscribing polygons',
      'Solving differential equations',
      'Factoring polynomials'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The method of exhaustion approximates the area of a shape by inscribing polygons whose areas converge to the area of the containing shape.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When approximating the area under $y = x^2$ from $0$ to $b$ using $n$ rectangles, what is the width of each rectangle?',
    options: [
      '$n/b$',
      '$b \\cdot n$',
      '$b/n$',
      '$b^2/n$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The base of length $b$ is divided into $n$ equal parts, so each has width $b/n$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Using the formula for the sum of squares, $\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$, what is $\\sum_{k=1}^{3} k^2$?',
    correctAnswer: 14,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14$. Alternatively: $\\frac{3 \\cdot 4 \\cdot 7}{6} = 14$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does Archimedes conclude is the area under $y = x^2$ from $0$ to $b$?',
    options: [
      '$b^2$',
      '$b^3/2$',
      '$b^2/2$',
      '$b^3/3$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Using the method of exhaustion, Archimedes showed that the area under $y = x^2$ from $0$ to $b$ is $b^3/3$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In the upper sum $S_n$ for $y = x^2$, why do we use the right endpoint of each subinterval?',
    options: [
      'It gives the maximum height since $x^2$ is increasing',
      'It gives the minimum height',
      'It simplifies the calculation',
      'It was Archimedes\' convention'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $y = x^2$ is an increasing function on $[0, b]$, the maximum value on each subinterval occurs at the right endpoint.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $b = 2$ and we use $n = 4$ subintervals, what is the width of each rectangle?',
    correctAnswer: 0.5,
    numericRange: { min: 0, max: 10, precision: 2 },
    difficulty: 'easy',
    explanation: 'Width = $b/n = 2/4 = 0.5$.',
  },
];
