import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Abel\'s theorem concerns the behavior of a power series:',
    options: [
      'Inside the radius of convergence',
      'At a boundary point where the series converges',
      'Outside the radius of convergence',
      'At the center of convergence'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Abel\'s theorem addresses what happens at the boundary of the disk of convergence when the series converges there.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\sum a_n$ converges and $f(x) = \\sum a_n x^n$ has radius 1, then Abel\'s theorem says:',
    options: [
      '$f$ extends continuously to $x = 1$ with $f(1) = \\sum a_n$',
      '$f$ diverges at $x = 1$',
      '$f(1) = 0$',
      'The theorem says nothing about $x = 1$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Abel\'s theorem: if $\\sum a_n$ converges, then $\\lim_{x \\to 1^-} \\sum a_n x^n = \\sum a_n$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Consider $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n} x^n$. At $x = 1$, this series:',
    options: [
      'Diverges',
      'Converges to $\\ln(2)$',
      'Converges to $0$',
      'Converges to $1$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The alternating harmonic series converges to $\\ln(2)$. By Abel\'s theorem, $\\sum \\frac{(-1)^{n+1}}{n} = \\ln(2)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Abel\'s theorem provides:',
    options: [
      'A way to compute $\\lim_{x \\to R^-} f(x)$ when the series converges at $x = R$',
      'A formula for the radius of convergence',
      'A test for absolute convergence',
      'A method to differentiate power series'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Abel\'s theorem says the power series function extends continuously to the boundary point.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The hypothesis of Abel\'s theorem requires the series at the boundary point to:',
    options: [
      'Converge absolutely',
      'Converge (conditionally is enough)',
      'Diverge',
      'Be a geometric series'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Abel\'s theorem only requires convergence at the boundary, not absolute convergence.',
  },
];
