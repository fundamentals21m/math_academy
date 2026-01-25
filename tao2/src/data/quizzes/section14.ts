import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Weierstrass M-test states: if $|f_n(x)| \\leq M_n$ for all $x$ and $\\sum M_n$ converges, then:',
    options: [
      '$\\sum f_n$ converges pointwise',
      'All of the above',
      '$\\sum f_n$ converges uniformly',
      '$\\sum f_n$ converges absolutely',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The M-test gives uniform and absolute convergence of the series.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To apply the Weierstrass M-test to $\\sum_{n=1}^\\infty \\frac{\\sin(nx)}{n^2}$, we need:',
    options: [
      '$M_n = 1/n^2$ with $\\sum 1/n^2$ convergent',
      '$M_n = n^2$ with $\\sum n^2$ convergent',
      '$M_n = 1/n$ with $\\sum 1/n$ convergent',
      'The M-test cannot be applied',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $|\\sin(nx)| \\leq 1$, we have $|\\sin(nx)/n^2| \\leq 1/n^2$, and $\\sum 1/n^2$ converges.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If each $f_n$ is continuous and $\\sum f_n$ converges uniformly, then $\\sum f_n$:',
    options: [
      'Is bounded but might be discontinuous',
      'Is differentiable',
      'Equals zero',
      'Is continuous',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The partial sums are continuous, and the uniform limit of continuous functions is continuous.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The series $\\sum_{n=1}^\\infty x^n$ on $[0, 1)$:',
    options: [
      'Converges uniformly',
      'Converges uniformly on $[0, r]$ for any $r < 1
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The geometric series converges for $|x| < 1$. It converges uniformly on $[0, r]$ for $r < 1$, but not on all of $[0, 1)$ since the sum blows up as $x \\to 1$.',
  },
      'Converges pointwise but not uniformly',
      'Diverges everywhere',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The geometric series converges for $|x| < 1$. It converges uniformly on $[0, r]$ for $r < 1$, but not on all of $[0, 1)$ since the sum blows up as $x \\to 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The key assumption in the Weierstrass M-test is:',
    options: [
      'Each $f_n$ is continuous',
      'The functions are differentiable',
      'The series $\\sum M_n$ converges',
      'The domain is compact',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The M-test requires that $\\sum M_n$ converges, where $M_n$ bounds $|f_n(x)|$ uniformly in $x$.',
  },
];
