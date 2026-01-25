import type { QuizQuestion } from './types';

export const section49Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An $R$-module $M$ is a generalization of:',
    options: [
      'A ring',
      'A field',
      'A group homomorphism',
      'A vector space (with $R$ replacing the field)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An $R$-module generalizes vector spaces: instead of scalars from a field, we have scalars from a ring $R$. When $R$ is a field, an $R$-module is exactly a vector space.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Every abelian group is naturally a module over:',
    options: [
      '$\\mathbb{Z}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Every abelian group $(G, +)$ is a $\\mathbb{Z}$-module with $n \\cdot g = g + g + \\cdots + g$ ($n$ times) for $n > 0$, and extended to negative integers appropriately.',
  },
      '$\\mathbb{Q}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Every abelian group $(G, +)$ is a $\\mathbb{Z}$-module with $n \\cdot g = g + g + \\cdots + g$ ($n$ times) for $n > 0$, and extended to negative integers appropriately.',
  },
      '$\\mathbb{R}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Every abelian group $(G, +)$ is a $\\mathbb{Z}$-module with $n \\cdot g = g + g + \\cdots + g$ ($n$ times) for $n > 0$, and extended to negative integers appropriately.',
  },
      'Any field',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Every abelian group $(G, +)$ is a $\\mathbb{Z}$-module with $n \\cdot g = g + g + \\cdots + g$ ($n$ times) for $n > 0$, and extended to negative integers appropriately.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A submodule $N$ of an $R$-module $M$ must satisfy:',
    options: [
      '$N = M
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A submodule $N \\subseteq M$ must be closed under the module operations: if $n_1, n_2 \\in N$ and $r \\in R$, then $n_1 + n_2 \\in N$ and $rn_1 \\in N$.',
  },
      '$N$ contains only $0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A submodule $N \\subseteq M$ must be closed under the module operations: if $n_1, n_2 \\in N$ and $r \\in R$, then $n_1 + n_2 \\in N$ and $rn_1 \\in N$.',
  },
      '$N$ is closed under addition and scalar multiplication by elements of $R
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A submodule $N \\subseteq M$ must be closed under the module operations: if $n_1, n_2 \\in N$ and $r \\in R$, then $n_1 + n_2 \\in N$ and $rn_1 \\in N$.',
  },
      '$N$ is a ring',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A submodule $N \\subseteq M$ must be closed under the module operations: if $n_1, n_2 \\in N$ and $r \\in R$, then $n_1 + n_2 \\in N$ and $rn_1 \\in N$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The $\\mathbb{Z}$-submodules of $\\mathbb{Z}$ are:',
    options: [
      'Only $\\{0\\}$ and $\\mathbb{Z}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The $\\mathbb{Z}$-submodules of $\\mathbb{Z}$ are exactly the subgroups of $(\\mathbb{Z}, +)$, which are $n\\mathbb{Z} = \\{\\ldots, -2n, -n, 0, n, 2n, \\ldots\\}$ for each $n \\geq 0$.',
  },
      'Only prime ideals',
      'Only maximal ideals',
      'All ideals $n\\mathbb{Z}$ for $n \\geq 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $\\mathbb{Z}$-submodules of $\\mathbb{Z}$ are exactly the subgroups of $(\\mathbb{Z}, +)$, which are $n\\mathbb{Z} = \\{\\ldots, -2n, -n, 0, n, 2n, \\ldots\\}$ for each $n \\geq 0$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $\\mathbb{Z}$-submodules of $\\mathbb{Z}$ are exactly the subgroups of $(\\mathbb{Z}, +)$, which are $n\\mathbb{Z} = \\{\\ldots, -2n, -n, 0, n, 2n, \\ldots\\}$ for each $n \\geq 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $R$ is a ring, then $R$ is a module over itself. The submodules of $R$ (as a left $R$-module) are:',
    options: [
      'All subsets of $R
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The submodules of $R$ as a left $R$-module are exactly the left ideals of $R$ (closed under addition and left multiplication by ring elements).',
  },
      'Left ideals of $R
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The submodules of $R$ as a left $R$-module are exactly the left ideals of $R$ (closed under addition and left multiplication by ring elements).',
  },
      'Only $\\{0\\}$ and $R
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The submodules of $R$ as a left $R$-module are exactly the left ideals of $R$ (closed under addition and left multiplication by ring elements).',
  },
      'Right ideals of $R
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The submodules of $R$ as a left $R$-module are exactly the left ideals of $R$ (closed under addition and left multiplication by ring elements).',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The submodules of $R$ as a left $R$-module are exactly the left ideals of $R$ (closed under addition and left multiplication by ring elements).',
  },
];
