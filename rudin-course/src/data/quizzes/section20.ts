import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 'sec20-q1',
    type: 'multiple-choice',
    question: 'The number $e$ is defined as:',
    options: [
      '$\\sum_{n=0}^{\\infty} \\frac{1}{n!}$',
      '$\\sum_{n=0}^{\\infty} n!$',
      '$\\lim_{n \\to \\infty} n!$',
      '$\\prod_{n=1}^{\\infty} (1 + 1/n)$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$e = \\sum_{n=0}^{\\infty} \\frac{1}{n!} = 1 + 1 + \\frac{1}{2} + \\frac{1}{6} + \\cdots \\approx 2.71828$. Equivalently, $e = \\lim_{n \\to \\infty} (1 + 1/n)^n$.',
  },
  {
    id: 'sec20-q2',
    type: 'multiple-choice',
    question: 'The series $\\sum_{n=0}^{\\infty} \\frac{1}{n!}$ converges because:',
    options: [
      'The terms are positive',
      '$1/n! \\leq 1/2^n$ for $n \\geq 1$, and $\\sum 1/2^n$ converges',
      'It is an alternating series',
      'The terms are decreasing'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $n \\geq 1$: $n! \\geq 2^{n-1}$, so $1/n! \\leq 2/2^n$. Since $\\sum 1/2^n$ converges, so does $\\sum 1/n!$ by comparison.',
  },
  {
    id: 'sec20-q3',
    type: 'multiple-choice',
    question: 'The number $e$ is:',
    options: [
      'Rational',
      'An integer',
      'Irrational',
      'Negative'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Rudin proves $e$ is irrational. If $e = p/q$ with $q \\geq 2$, then $q!(e - \\sum_{n=0}^{q} 1/n!)$ would be a positive integer less than $1$, a contradiction.',
  },
  {
    id: 'sec20-q4',
    type: 'multiple-choice',
    question: 'What is $\\lim_{n \\to \\infty} \\left(1 + \\frac{x}{n}\\right)^n$ for any real $x$?',
    options: [
      '$x$',
      '$1$',
      'Does not exist',
      '$e^x$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'This limit equals $e^x$. For $x = 1$, we get $e$. The general result follows from $\\ln(1 + x/n)^n = n \\ln(1 + x/n) \\to x$ as $n \\to \\infty$.',
  },
  {
    id: 'sec20-q5',
    type: 'multiple-choice',
    question: 'Between which two integers does $e$ lie?',
    options: [
      '$2$ and $3$',
      '$1$ and $2$',
      '$3$ and $4$',
      '$0$ and $1$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$e = 1 + 1 + 1/2 + 1/6 + \\cdots$. The first three terms already give $2.5$, and the full sum is approximately $2.71828$. So $2 < e < 3$.',
  },
];
