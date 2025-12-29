import type { QuizQuestion } from './types';

export const section70Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Uniform convergence of $f_n \\to f$ on a set $S$ means:',
    options: [
      'Pointwise convergence at each point',
      '$\\sup_{x \\in S} |f_n(x) - f(x)| \\to 0$',
      '$f_n$ and $f$ are both continuous',
      '$f_n = f$ eventually'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Uniform: the maximum difference goes to zero (same $N$ works for all $x$).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Uniform convergence implies:',
    options: [
      'Pointwise convergence',
      'Divergence',
      'Nothing about individual points',
      'The limit is constant'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Uniform convergence is stronger than pointwise.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f_n$ are continuous and $f_n \\to f$ uniformly, then $f$ is:',
    options: [
      'Differentiable',
      'Continuous',
      'Possibly discontinuous',
      'Constant'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Uniform limit of continuous functions is continuous.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f_n \\to f$ uniformly on $[a, b]$, then:',
    options: [
      '$\\int_a^b f_n \\to \\int_a^b f$',
      'Integration and limit cannot be interchanged',
      '$f$ is not integrable',
      'The integrals may differ'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Uniform convergence allows interchange of limit and integral.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $f_n(x) = x^n$ on $[0, 1]$, convergence is:',
    options: [
      'Uniform',
      'Pointwise but not uniform',
      'Neither pointwise nor uniform',
      'Uniform on $[0, 1)$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Limit is discontinuous at $x = 1$, so not uniform (but pointwise).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Weierstrass M-test helps prove:',
    options: [
      'Pointwise convergence',
      'Uniform convergence of series',
      'Divergence',
      'Continuity'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'M-test: if $|f_n(x)| \\leq M_n$ and $\\sum M_n$ converges, series is uniformly convergent.',
  },
];
