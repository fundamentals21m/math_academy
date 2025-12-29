import type { QuizQuestion } from './types';

export const section69Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A sequence of functions $\\{f_n\\}$ converges pointwise to $f$ if:',
    options: [
      '$f_n(x) = f(x)$ for all $n$ and $x$',
      'For each fixed $x$, $\\lim_{n \\to \\infty} f_n(x) = f(x)$',
      '$\\lim_{n \\to \\infty} \\sup_x |f_n(x) - f(x)| = 0$',
      '$f_n$ and $f$ have the same domain'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Pointwise: convergence holds at each individual point.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For $f_n(x) = x^n$ on $[0, 1]$, the pointwise limit is:',
    options: [
      '$f(x) = x$ for all $x$',
      '$f(x) = 0$ for $x \\in [0, 1)$ and $f(1) = 1$',
      '$f(x) = 1$ for all $x$',
      'Does not exist'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$x^n \\to 0$ for $|x| < 1$, but $1^n = 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The pointwise limit of continuous functions:',
    options: [
      'Is always continuous',
      'Is always discontinuous',
      'May or may not be continuous',
      'Does not exist'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Pointwise limits can be discontinuous (like $f_n(x) = x^n$ on $[0,1]$).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $f_n(x) = \\frac{x}{n}$, the pointwise limit on $\\mathbb{R}$ is:',
    options: [
      '$f(x) = x$',
      '$f(x) = 0$',
      '$f(x) = 1$',
      'Does not exist'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\lim_{n \\to \\infty} x/n = 0$ for each fixed $x$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Pointwise convergence is "point by point", meaning:',
    options: [
      'All points converge at the same rate',
      'Convergence may be faster at some points than others',
      'The rate of convergence is uniform',
      'Only finitely many points are considered'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Rate of convergence can vary from point to point.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $f_n \\to f$ pointwise, then $\\int f_n$:',
    options: [
      'Always converges to $\\int f$',
      'May or may not converge to $\\int f$',
      'Diverges',
      'Equals zero'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Interchanging limit and integral requires more (uniform convergence).',
  },
];
