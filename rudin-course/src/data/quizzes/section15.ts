import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 'sec15-q1',
    type: 'multiple-choice',
    question: 'A sequence $\\{p_n\\}$ in a metric space is Cauchy if:',
    options: [
      'The sequence converges',
      'For every $\\varepsilon > 0$, there exists $N$ such that $m, n \\geq N$ implies $d(p_m, p_n) < \\varepsilon$',
      'The sequence is bounded',
      'Each term equals the previous term'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A Cauchy sequence has terms that become arbitrarily close to each other: for any $\\varepsilon > 0$, eventually $d(p_m, p_n) < \\varepsilon$ for all large $m, n$.',
  },
  {
    id: 'sec15-q2',
    type: 'multiple-choice',
    question: 'In $\\mathbb{R}^k$, a sequence is Cauchy if and only if:',
    options: [
      'It is bounded',
      'It is monotonic',
      'It converges',
      'It has a convergent subsequence'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbb{R}^k$ is complete: every Cauchy sequence converges. Conversely, every convergent sequence is Cauchy. So in $\\mathbb{R}^k$, Cauchy $\\Leftrightarrow$ convergent.',
  },
  {
    id: 'sec15-q3',
    type: 'multiple-choice',
    question: 'A metric space is complete if:',
    options: [
      'It is bounded',
      'Every Cauchy sequence converges (to a point in the space)',
      'It is compact',
      'It contains $\\mathbb{Q}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Completeness means Cauchy sequences converge within the space. $\\mathbb{R}^k$ is complete, but $\\mathbb{Q}$ is not (the Cauchy sequence $(1.4, 1.41, 1.414, \\ldots)$ has limit $\\sqrt{2} \\notin \\mathbb{Q}$).',
  },
  {
    id: 'sec15-q4',
    type: 'multiple-choice',
    question: 'Every Cauchy sequence is:',
    options: [
      'Convergent',
      'Bounded',
      'Monotonic',
      'Eventually constant'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Every Cauchy sequence is bounded: for $\\varepsilon = 1$, there exists $N$ such that $d(p_m, p_n) < 1$ for $m, n \\geq N$. All terms are within distance $1$ of $p_N$, plus finitely many initial terms.',
  },
  {
    id: 'sec15-q5',
    type: 'multiple-choice',
    question: 'Which space is NOT complete?',
    options: [
      '$\\mathbb{R}$ with the standard metric',
      '$\\mathbb{R}^n$ with the Euclidean metric',
      '$\\mathbb{Q}$ with the standard metric',
      'A compact metric space'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\mathbb{Q}$ is not complete. For example, a sequence of rationals approximating $\\sqrt{2}$ is Cauchy but does not converge in $\\mathbb{Q}$. Compact spaces and $\\mathbb{R}^n$ are complete.',
  },
];
