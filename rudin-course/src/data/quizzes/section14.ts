import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 'sec14-q1',
    type: 'multiple-choice',
    question: 'A subsequence of $\\{p_n\\}$ is:',
    options: [
      'Any sequence whose terms come from $\\{p_n\\}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A subsequence is $\\{p_{n_k}\\}$ where the indices form a strictly increasing sequence: $n_1 < n_2 < n_3 < \\cdots$. This ensures we pick terms in order, possibly skipping some.',
  },
      'A sequence $\\{p_{n_k}\\}$ where $n_1 < n_2 < n_3 < \\cdots
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A subsequence is $\\{p_{n_k}\\}$ where the indices form a strictly increasing sequence: $n_1 < n_2 < n_3 < \\cdots$. This ensures we pick terms in order, possibly skipping some.',
  },
      'The first $N$ terms of $\\{p_n\\}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A subsequence is $\\{p_{n_k}\\}$ where the indices form a strictly increasing sequence: $n_1 < n_2 < n_3 < \\cdots$. This ensures we pick terms in order, possibly skipping some.',
  },
      'The odd-indexed terms only',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A subsequence is $\\{p_{n_k}\\}$ where the indices form a strictly increasing sequence: $n_1 < n_2 < n_3 < \\cdots$. This ensures we pick terms in order, possibly skipping some.',
  },
  {
    id: 'sec14-q2',
    type: 'multiple-choice',
    question: 'The Bolzano-Weierstrass theorem states that:',
    options: [
      'Every bounded sequence in $\\mathbb{R}^k$ has a convergent subsequence',
      'Every sequence converges',
      'Every monotonic sequence converges',
      'Every convergent sequence is bounded',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Bolzano-Weierstrass: Every bounded sequence in $\\mathbb{R}^k$ contains a convergent subsequence. This is a fundamental compactness result.',
  },
  {
    id: 'sec14-q3',
    type: 'multiple-choice',
    question: 'If $\\{p_n\\}$ converges to $p$, then every subsequence:',
    options: [
      'Diverges',
      'Converges to a different limit',
      'Converges to $p
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If $p_n \\to p$, then any subsequence $\\{p_{n_k}\\}$ also converges to $p$. This follows directly from the definition since subsequence indices $n_k \\geq k$.',
  },
      'Is unbounded',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If $p_n \\to p$, then any subsequence $\\{p_{n_k}\\}$ also converges to $p$. This follows directly from the definition since subsequence indices $n_k \\geq k$.',
  },
  {
    id: 'sec14-q4',
    type: 'multiple-choice',
    question: 'Let $E$ be the set of subsequential limits of $\\{p_n\\}$. If $\\{p_n\\}$ is bounded, then $E$ is:',
    options: [
      'Empty',
      'Open',
      'Countable',
      'Nonempty and closed',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'By Bolzano-Weierstrass, a bounded sequence has at least one convergent subsequence, so $E \\neq \\emptyset$. The set $E$ of subsequential limits is always closed.',
  },
  {
    id: 'sec14-q5',
    type: 'multiple-choice',
    question: 'A sequence in a compact set $K$:',
    options: [
      'Has a subsequence converging to a point in $K
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In a compact metric space, every sequence has a convergent subsequence with limit in the space. This is sequential compactness, equivalent to compactness in metric spaces.',
  },
      'Always converges',
      'Must be eventually constant',
      'Is always monotonic',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In a compact metric space, every sequence has a convergent subsequence with limit in the space. This is sequential compactness, equivalent to compactness in metric spaces.',
  },
];
