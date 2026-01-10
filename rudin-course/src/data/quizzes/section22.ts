import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 'sec22-q1',
    type: 'multiple-choice',
    question: 'A power series is an expression of the form:',
    options: [
      '$\\sum_{n=0}^{\\infty} c_n$',
      '$\\sum_{n=0}^{\\infty} c_n x^n$',
      '$\\sum_{n=0}^{\\infty} n^x$',
      '$\\prod_{n=0}^{\\infty} c_n x^n$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A power series centered at $0$ has the form $\\sum_{n=0}^{\\infty} c_n x^n$, where $c_n$ are coefficients and $x$ is the variable.',
  },
  {
    id: 'sec22-q2',
    type: 'multiple-choice',
    question: 'The radius of convergence $R$ of a power series $\\sum c_n x^n$ is defined by:',
    options: [
      '$R = \\sum |c_n|$',
      '$1/R = \\limsup_{n \\to \\infty} \\sqrt[n]{|c_n|}$',
      '$R = \\lim_{n \\to \\infty} c_n$',
      '$R = |c_0|$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the root test, the series converges for $|x| \\limsup \\sqrt[n]{|c_n|} < 1$, i.e., $|x| < 1/\\limsup \\sqrt[n]{|c_n|} = R$.',
  },
  {
    id: 'sec22-q3',
    type: 'multiple-choice',
    question: 'If a power series $\\sum c_n x^n$ has radius of convergence $R$, then it:',
    options: [
      'Converges for all $x$',
      'Converges absolutely for $|x| < R$ and diverges for $|x| > R$',
      'Converges only at $x = 0$',
      'Converges for $|x| = R$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Inside the radius ($|x| < R$): absolute convergence. Outside ($|x| > R$): divergence. At the boundary ($|x| = R$): could go either way, needs separate analysis.',
  },
  {
    id: 'sec22-q4',
    type: 'multiple-choice',
    question: 'What is the radius of convergence of $\\sum_{n=0}^{\\infty} x^n$?',
    options: [
      '$0$',
      '$1$',
      '$\\infty$',
      '$e$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'This is the geometric series. $c_n = 1$, so $\\limsup \\sqrt[n]{1} = 1$. Thus $R = 1$. It converges for $|x| < 1$ to $1/(1-x)$.',
  },
  {
    id: 'sec22-q5',
    type: 'multiple-choice',
    question: 'What is the radius of convergence of $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$?',
    options: [
      '$0$',
      '$1$',
      '$e$',
      '$\\infty$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Here $c_n = 1/n!$. $\\sqrt[n]{1/n!} \\to 0$ (since $n! > (n/e)^n$). Thus $1/R = 0$, so $R = \\infty$. The series converges for all $x$ (to $e^x$).',
  },
];
