import type { QuizQuestion } from './types';

export const section71Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A power series has the form:',
    options: [
      '$\\sum_{n=0}^{\\infty} a_n$',
      '$\\sum_{n=0}^{\\infty} a_n x^n$',
      '$\\sum_{n=0}^{\\infty} a_n n^x$',
      '$a_0 + a_1 x$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Power series: $\\sum a_n x^n$ or more generally $\\sum a_n (x-c)^n$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The radius of convergence $R$ is defined so that the series converges for:',
    options: [
      '$|x| > R$',
      '$|x| < R$',
      '$|x| = R$',
      'All $x$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Converges for $|x| < R$, diverges for $|x| > R$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The ratio test gives $R = \\lim |a_n/a_{n+1}|$ when this limit exists. For $\\sum x^n/n!$, $R = ?$',
    options: [
      '$0$',
      '$1$',
      '$\\infty$',
      '$e$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$|a_n/a_{n+1}| = |(n+1)!/n!| = n+1 \\to \\infty$. Converges for all $x$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Inside its radius of convergence, a power series:',
    options: [
      'Is discontinuous',
      'Represents a continuous (in fact infinitely differentiable) function',
      'Equals zero',
      'Has finitely many terms'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Power series are infinitely differentiable inside their interval of convergence.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $\\sum_{n=0}^{\\infty} x^n$, the radius of convergence is:',
    options: [
      '$0$',
      '$1$',
      '$\\infty$',
      '$1/2$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Geometric series converges for $|x| < 1$, so $R = 1$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A power series can be differentiated term by term:',
    options: [
      'Never',
      'Only at $x = 0$',
      'Inside its radius of convergence',
      'Only for polynomial sums'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Term-by-term differentiation is valid for $|x| < R$.',
  },
];
