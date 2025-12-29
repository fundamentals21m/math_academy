import type { QuizQuestion } from './types';

export const section73Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The binomial series $(1+x)^\\alpha$ equals:',
    options: [
      '$1 + \\alpha x$',
      '$\\sum_{n=0}^{\\infty} \\binom{\\alpha}{n} x^n$',
      '$(1+x)^n$ only for integer $n$',
      '$e^{\\alpha \\ln(1+x)}$ only'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Binomial series: $(1+x)^\\alpha = \\sum \\binom{\\alpha}{n} x^n$ for $|x| < 1$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The generalized binomial coefficient $\\binom{\\alpha}{n}$ for non-integer $\\alpha$ is:',
    options: [
      '$\\frac{\\alpha!}{n!(\\alpha-n)!}$',
      '$\\frac{\\alpha(\\alpha-1)...((\\alpha-n+1)}{n!}$',
      'Undefined',
      '$\\alpha^n/n!$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\binom{\\alpha}{n} = \\frac{\\alpha(\\alpha-1)...(\\alpha-n+1)}{n!}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $\\sqrt{1+x} = (1+x)^{1/2}$, the first three terms are:',
    options: [
      '$1 + x + x^2$',
      '$1 + \\frac{1}{2}x - \\frac{1}{8}x^2 + ...$',
      '$1 - \\frac{1}{2}x + \\frac{1}{4}x^2 - ...$',
      '$1 + 2x + x^2$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\sqrt{1+x} = 1 + \\frac{1}{2}x + \\frac{(1/2)(-1/2)}{2!}x^2 + ... = 1 + \\frac{x}{2} - \\frac{x^2}{8} + ...$',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The binomial series for $(1+x)^{-1}$ gives:',
    options: [
      '$1 + x + x^2 + ...$',
      '$1 - x + x^2 - x^3 + ...$',
      '$1 - x$',
      '$-1 + x$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(1+x)^{-1} = 1 - x + x^2 - ... = \\frac{1}{1+x}$ for $|x| < 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The radius of convergence of the binomial series is typically:',
    options: [
      '$0$',
      '$1$',
      '$\\infty$',
      'Depends on $\\alpha$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Binomial series converges for $|x| < 1$ (at least).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'When $\\alpha$ is a non-negative integer, the binomial series:',
    options: [
      'Has infinitely many terms',
      'Terminates (is a polynomial)',
      'Diverges',
      'Has radius of convergence 0'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For integer $\\alpha \\geq 0$, $\\binom{\\alpha}{n} = 0$ for $n > \\alpha$.',
  },
];
