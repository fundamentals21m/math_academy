import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A sequence $(x_n)$ in a metric space is Cauchy if:',
    options: [
      'It converges to some point',
      'For every $\\varepsilon > 0$, there exists $N$ such that $d(x_n, x_m) < \\varepsilon$ for all $n, m \\geq N$',
      '$d(x_n, x_{n+1}) \\to 0$ as $n \\to \\infty$',
      'It is bounded'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A Cauchy sequence has the property that terms become arbitrarily close to each other for large indices.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A metric space $(X, d)$ is complete if:',
    options: [
      'Every sequence converges',
      'Every bounded sequence converges',
      'Every Cauchy sequence converges',
      'It is compact'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A complete metric space is one where every Cauchy sequence converges to a point in the space.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following metric spaces is NOT complete?',
    options: [
      '$\\mathbf{R}$ with the standard metric',
      '$\\mathbf{Q}$ with the standard metric',
      '$\\mathbf{R}^n$ with the Euclidean metric',
      'Any compact metric space'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The rationals $\\mathbf{Q}$ are not complete. For example, the sequence of rational approximations to $\\sqrt{2}$ is Cauchy but does not converge in $\\mathbf{Q}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Every convergent sequence is:',
    options: [
      'Cauchy',
      'Bounded but not necessarily Cauchy',
      'Complete',
      'Eventually constant'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If $(x_n) \\to x$, then for large $n, m$, both $x_n$ and $x_m$ are close to $x$, hence close to each other. So every convergent sequence is Cauchy.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The completion of a metric space $(X, d)$ is:',
    options: [
      'The closure of $X$ in some larger space',
      'A complete metric space containing $X$ as a dense subspace',
      'The set of all Cauchy sequences in $X$',
      'The space $X$ with a new metric'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The completion is a complete metric space in which the original space embeds as a dense subspace. It can be constructed using equivalence classes of Cauchy sequences.',
  },
];
