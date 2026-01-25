import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 'sec21-q1',
    type: 'multiple-choice',
    question: 'The root test: if $\\limsup_{n \\to \\infty} \\sqrt[n]{|a_n|} = L$, then $\\sum a_n$:',
    options: [
      'Converges if $L > 1$, diverges if $L < 1$',
      'Converges if $L < 1$, diverges if $L > 1$',
      'Always converges',
      'Always diverges'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Root test: if $\\limsup \\sqrt[n]{|a_n|} < 1$, the series converges absolutely. If $> 1$, it diverges. If $= 1$, the test is inconclusive.',
  },
  {
    id: 'sec21-q2',
    type: 'multiple-choice',
    question: 'The ratio test: if $\\lim_{n \\to \\infty} |a_{n+1}/a_n| = L$, then $\\sum a_n$:',
    options: [
      'Converges if $L > 1$',
      'Diverges if $L < 1$',
      'Converges absolutely if $L < 1$, diverges if $L > 1$',
      'Is inconclusive for all $L$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Ratio test: if the limit is $L < 1$, the series converges absolutely. If $L > 1$, it diverges. If $L = 1$, the test is inconclusive.',
  },
  {
    id: 'sec21-q3',
    type: 'multiple-choice',
    question: 'Apply the ratio test to $\\sum \\frac{n!}{n^n}$. The series:',
    options: [
      'Diverges',
      'Converges conditionally but not absolutely',
      'The ratio test is inconclusive',
      'Converges'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{n!} = \\frac{n^n}{(n+1)^n} = \\left(\\frac{n}{n+1}\\right)^n \\to 1/e < 1$. So the series converges.',
  },
  {
    id: 'sec21-q4',
    type: 'multiple-choice',
    question: 'For which series is both the root and ratio test inconclusive?',
    options: [
      '$\\sum \\frac{1}{n^2}$',
      '$\\sum \\frac{1}{2^n}$',
      '$\\sum \\frac{1}{n!}$',
      '$\\sum 2^n$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For $\\sum 1/n^2$: $\\sqrt[n]{1/n^2} = 1/n^{2/n} \\to 1$ and $a_{n+1}/a_n = n^2/(n+1)^2 \\to 1$. Both tests give $L = 1$, inconclusive. (The series converges by the $p$-test.)',
  },
  {
    id: 'sec21-q5',
    type: 'multiple-choice',
    question: 'Which statement is true about the root and ratio tests?',
    options: [
      'The ratio test is always more powerful than the root test',
      'The root test is at least as powerful as the ratio test',
      'They always give the same result',
      'Neither test can prove convergence'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If the ratio test limit exists and is $L$, then so is the root test limit. But the root test can sometimes detect convergence when the ratio test is inconclusive (limsup vs limit).',
  },
];
