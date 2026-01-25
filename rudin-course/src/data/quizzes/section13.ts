import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 'sec13-q1',
    type: 'multiple-choice',
    question: 'A sequence $\\{p_n\\}$ in a metric space converges to $p$ if:',
    options: [
      'For every $\\varepsilon > 0$, there exists $N$ such that $n \\geq N$ implies $d(p_n, p) < \\varepsilon
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Convergence means that eventually all terms are arbitrarily close to the limit: for any $\\varepsilon > 0$, there is an $N$ such that $d(p_n, p) < \\varepsilon$ for all $n \\geq N$.',
  },
      'The sequence is bounded',
      'The sequence is monotonic',
      '$p_n = p$ for infinitely many $n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Convergence means that eventually all terms are arbitrarily close to the limit: for any $\\varepsilon > 0$, there is an $N$ such that $d(p_n, p) < \\varepsilon$ for all $n \\geq N$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Convergence means that eventually all terms are arbitrarily close to the limit: for any $\\varepsilon > 0$, there is an $N$ such that $d(p_n, p) < \\varepsilon$ for all $n \\geq N$.',
  },
  {
    id: 'sec13-q2',
    type: 'multiple-choice',
    question: 'If $\\{p_n\\}$ converges in a metric space, the limit is:',
    options: [
      'Unique',
      'Not necessarily unique',
      'Always rational',
      'Always in the sequence',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Limits are unique in metric spaces. If $p_n \\to p$ and $p_n \\to q$, then $d(p, q) \\leq d(p, p_n) + d(p_n, q)$, which can be made arbitrarily small, so $p = q$.',
  },
  {
    id: 'sec13-q3',
    type: 'multiple-choice',
    question: 'A convergent sequence is:',
    options: [
      'Unbounded',
      'Eventually constant',
      'Monotonic',
      'Bounded',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'If $p_n \\to p$, then for large $n$, $d(p_n, p) < 1$, so $p_n$ is within distance $1$ of $p$. The finitely many initial terms are also at finite distances, so the whole sequence is bounded.',
  },
  {
    id: 'sec13-q4',
    type: 'multiple-choice',
    question: 'In $\\mathbb{R}^k$, a sequence $\\{\\mathbf{x}_n\\}$ converges to $\\mathbf{x}$ if and only if:',
    options: [
      'The first coordinate converges',
      'Each coordinate sequence converges to the corresponding coordinate of $\\mathbf{x}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In $\\mathbb{R}^k$, convergence is equivalent to coordinate-wise convergence: $\\mathbf{x}_n \\to \\mathbf{x}$ iff $(x_n)_j \\to x_j$ for each $j = 1, \\ldots, k$.',
  },
      'At least one coordinate converges',
      'The norms $|\\mathbf{x}_n|$ converge to $|\\mathbf{x}|
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In $\\mathbb{R}^k$, convergence is equivalent to coordinate-wise convergence: $\\mathbf{x}_n \\to \\mathbf{x}$ iff $(x_n)_j \\to x_j$ for each $j = 1, \\ldots, k$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In $\\mathbb{R}^k$, convergence is equivalent to coordinate-wise convergence: $\\mathbf{x}_n \\to \\mathbf{x}$ iff $(x_n)_j \\to x_j$ for each $j = 1, \\ldots, k$.',
  },
  {
    id: 'sec13-q5',
    type: 'multiple-choice',
    question: 'If $E$ is a closed set and $\\{p_n\\}$ is a sequence in $E$ converging to $p$, then:',
    options: [
      '$p$ may or may not be in $E
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Closed sets contain all their limit points. If $p_n \\in E$ for all $n$ and $p_n \\to p$, then $p$ is a limit point of $E$ (or in $E$ already), so $p \\in E$ since $E$ is closed.',
  },
      '$p$ is an interior point of $E
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Closed sets contain all their limit points. If $p_n \\in E$ for all $n$ and $p_n \\to p$, then $p$ is a limit point of $E$ (or in $E$ already), so $p \\in E$ since $E$ is closed.',
  },
      '$p \\in E
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Closed sets contain all their limit points. If $p_n \\in E$ for all $n$ and $p_n \\to p$, then $p$ is a limit point of $E$ (or in $E$ already), so $p \\in E$ since $E$ is closed.',
  },
      'The sequence must be eventually constant',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Closed sets contain all their limit points. If $p_n \\in E$ for all $n$ and $p_n \\to p$, then $p$ is a limit point of $E$ (or in $E$ already), so $p \\in E$ since $E$ is closed.',
  },
];
