import type { QuizQuestion } from './types';

export const section47Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Taylor\'s theorem gives the error (remainder) as:',
    options: [
      'Always exactly zero',
      'The difference $f(x) - P_n(x)$',
      '$f(a)$',
      'The $(n+1)$th Taylor term'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The remainder $R_n(x) = f(x) - P_n(x)$ is the approximation error.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Lagrange form of the remainder is:',
    options: [
      '$\\frac{f^{(n)}(a)}{n!}(x-a)^n$',
      '$\\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ for some $c$ between $a$ and $x$',
      '$f(x) - f(a)$',
      'Always zero'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Lagrange remainder: $R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The remainder helps us:',
    options: [
      'Compute exact values',
      'Bound the approximation error',
      'Find antiderivatives',
      'Solve equations'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The remainder formula lets us bound how far $P_n(x)$ is from $f(x)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $e^x$, all derivatives are $e^c$, so the remainder at $a = 0$ is bounded by:',
    options: [
      '$\\frac{e^x |x|^{n+1}}{(n+1)!}$ when $x > 0$',
      '$x^n$',
      '$e^x$',
      'Cannot be bounded'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Since $e^c \\leq e^x$ for $0 < c < x$, $|R_n| \\leq \\frac{e^x |x|^{n+1}}{(n+1)!}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'As $n \\to \\infty$, the Taylor remainder for $e^x$ goes to:',
    options: [
      '$\\infty$',
      '$1$',
      '$0$',
      'Depends on $x$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $e^x$, the remainder $\\to 0$ as $n \\to \\infty$ (series converges to $e^x$).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The integral form of the remainder involves:',
    options: [
      'A definite integral of the $(n+1)$th derivative',
      'Only the first derivative',
      'No integration',
      'The antiderivative of $f$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Integral form: $R_n(x) = \\frac{1}{n!}\\int_a^x (x-t)^n f^{(n+1)}(t)\\,dt$.',
  },
];
