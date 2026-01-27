import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: A \\to B$ is defined by:',
    options: [
      'A set of ordered pairs',
      'Any relation between $A$ and $B$',
      'A rule assigning each element of $A$ to exactly one element of $B$',
      'A bijection from $A$ to $B$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A function assigns each element of the domain to exactly one element of the codomain.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the domain of $f(x) = \\sqrt{x - 2}$?',
    options: [
      'All real numbers',
      '$x \\geq 0$',
      '$x > 2$',
      '$x \\geq 2$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'We need $x - 2 \\geq 0$, so $x \\geq 2$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In Cartesian coordinates, the point $(3, 4)$ has distance from the origin equal to:',
    options: [
      '$5$',
      '$7$',
      '$12$',
      '$\\sqrt{7}$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Distance $= \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the range of $f(x) = x^2$?',
    options: [
      'All real numbers',
      '$y \\geq 0$',
      '$y > 0$',
      '$y \\leq 0$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since $x^2 \\geq 0$ for all real $x$, the range is $[0, \\infty)$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If $f(x) = 2x + 3$, what is $f(5)$?',
    correctAnswer: 13,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$f(5) = 2(5) + 3 = 10 + 3 = 13$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The graph of $y = x^2 - 4$ intersects the $x$-axis at:',
    options: [
      '$x = 0$',
      '$x = 2$ only',
      '$x = \\pm 2$',
      '$x = 4$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Setting $x^2 - 4 = 0$ gives $x^2 = 4$, so $x = \\pm 2$.',
  },
];
