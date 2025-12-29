import type { QuizQuestion } from './types';

export const section48Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The notation $f(x) = o(g(x))$ as $x \\to a$ means:',
    options: [
      '$f(x) = g(x)$',
      '$\\lim_{x \\to a} f(x)/g(x) = 0$',
      '$f(x) > g(x)$',
      '$f$ and $g$ are equal'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Little-o: $f = o(g)$ means $f$ grows slower than $g$ (ratio $\\to 0$).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f(x) = o(1)$ as $x \\to 0$, then:',
    options: [
      '$f(x) \\to 1$',
      '$f(x) \\to 0$',
      '$f(x) \\to \\infty$',
      '$f(x)$ is constant'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$o(1)$ means $f(x)/1 \\to 0$, i.e., $f(x) \\to 0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'As $x \\to 0$, $x^3 = o(x^2)$ because:',
    options: [
      '$x^3 > x^2$',
      '$\\lim_{x \\to 0} x^3/x^2 = \\lim x = 0$',
      '$x^3 = x^2$',
      'They are incomparable'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$x^3/x^2 = x \\to 0$ as $x \\to 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Using little-o, $e^x = 1 + x + o(x)$ as $x \\to 0$ means:',
    options: [
      '$e^x = 1 + x$ exactly',
      '$e^x - 1 - x$ goes to 0 faster than $x$',
      '$e^x$ is constant',
      'The expansion is invalid'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The error $e^x - 1 - x = o(x)$ vanishes faster than $x$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'As $x \\to 0$: $\\sin x = x + o(x^2)$. This implies:',
    options: [
      '$\\sin x = x$ exactly',
      '$\\sin x - x$ is $o(x^2)$, i.e., the error is smaller than $x^2$ order',
      '$\\sin x > x$',
      '$\\sin x < x$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The remainder after linear term is of smaller order than $x^2$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The o-notation is useful for:',
    options: [
      'Exact computation',
      'Describing limiting behavior and error terms',
      'Counting operations',
      'Defining integrals'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Little-o describes asymptotic behavior and error bounds.',
  },
];
