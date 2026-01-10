import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 'sec16-q1',
    type: 'multiple-choice',
    question: 'For a sequence $\\{s_n\\}$ of real numbers, $\\limsup_{n \\to \\infty} s_n$ is defined as:',
    options: [
      'The largest term of the sequence',
      '$\\lim_{n \\to \\infty} (\\sup_{k \\geq n} s_k)$',
      'The average of all terms',
      '$\\sup_n s_n$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Let $a_n = \\sup_{k \\geq n} s_k$. This sequence is decreasing and $\\limsup s_n = \\lim_{n \\to \\infty} a_n$. It equals the largest subsequential limit.',
  },
  {
    id: 'sec16-q2',
    type: 'multiple-choice',
    question: 'If $\\{s_n\\}$ is bounded, then $\\limsup s_n$ is:',
    options: [
      'The largest limit of any convergent subsequence',
      'Necessarily equal to $\\lim s_n$',
      '$+\\infty$',
      'Undefined'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For a bounded sequence, $\\limsup s_n$ equals the largest subsequential limit (which exists by Bolzano-Weierstrass). Similarly, $\\liminf s_n$ is the smallest subsequential limit.',
  },
  {
    id: 'sec16-q3',
    type: 'multiple-choice',
    question: 'The sequence $\\{s_n\\}$ converges to $s$ if and only if:',
    options: [
      '$\\limsup s_n = +\\infty$',
      '$\\liminf s_n = -\\infty$',
      '$\\limsup s_n = \\liminf s_n = s$',
      '$\\limsup s_n > \\liminf s_n$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Convergence to $s$ means all subsequential limits equal $s$, which happens iff $\\limsup s_n = \\liminf s_n = s$.',
  },
  {
    id: 'sec16-q4',
    type: 'multiple-choice',
    question: 'For $s_n = (-1)^n$, what are $\\limsup s_n$ and $\\liminf s_n$?',
    options: [
      '$\\limsup = 1$, $\\liminf = 1$',
      '$\\limsup = 1$, $\\liminf = -1$',
      '$\\limsup = -1$, $\\liminf = 1$',
      '$\\limsup = 0$, $\\liminf = 0$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The sequence alternates: $-1, 1, -1, 1, \\ldots$. The subsequential limits are $\\{-1, 1\\}$, so $\\limsup = 1$ and $\\liminf = -1$.',
  },
  {
    id: 'sec16-q5',
    type: 'multiple-choice',
    question: 'For any sequence, $\\liminf s_n \\leq \\limsup s_n$:',
    options: [
      'Is always false',
      'Is always true',
      'Is true only for bounded sequences',
      'Is true only for convergent sequences'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By definition, $\\liminf s_n \\leq \\limsup s_n$ always. The sequence converges iff equality holds (and both are finite).',
  },
];
