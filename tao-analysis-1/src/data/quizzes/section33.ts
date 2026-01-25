import type { QuizQuestion } from './types';

export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A set $A$ is countable if:',
    options: [
      '$A$ is a subset of $\\mathbb{R}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A set is countable if it can be put in one-to-one correspondence with a subset of $\\mathbb{N}$, i.e., there exists an injection from $A$ to $\\mathbb{N}$. This includes both finite sets and countably infinite sets.',
  },
      'There exists an injection $f: A \\to \\mathbb{N}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A set is countable if it can be put in one-to-one correspondence with a subset of $\\mathbb{N}$, i.e., there exists an injection from $A$ to $\\mathbb{N}$. This includes both finite sets and countably infinite sets.',
  },
      '$A$ has finitely many elements',
      'There exists a surjection $f: A \\to \\mathbb{N}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A set is countable if it can be put in one-to-one correspondence with a subset of $\\mathbb{N}$, i.e., there exists an injection from $A$ to $\\mathbb{N}$. This includes both finite sets and countably infinite sets.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A set is countable if it can be put in one-to-one correspondence with a subset of $\\mathbb{N}$, i.e., there exists an injection from $A$ to $\\mathbb{N}$. This includes both finite sets and countably infinite sets.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following sets is countably infinite?',
    options: [
      '$\\mathbb{R}$ (the real numbers)',
      '$\\mathbb{Z}$ (the integers)',
      'The interval $(0, 1)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\mathbb{Z}$ is countably infinite via the bijection $0 \\mapsto 0, 1 \\mapsto 1, -1 \\mapsto 2, 2 \\mapsto 3, -2 \\mapsto 4, \\ldots$ The others are uncountable.',
  },
      'The power set of $\\mathbb{N}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\mathbb{Z}$ is countably infinite via the bijection $0 \\mapsto 0, 1 \\mapsto 1, -1 \\mapsto 2, 2 \\mapsto 3, -2 \\mapsto 4, \\ldots$ The others are uncountable.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\mathbb{Z}$ is countably infinite via the bijection $0 \\mapsto 0, 1 \\mapsto 1, -1 \\mapsto 2, 2 \\mapsto 3, -2 \\mapsto 4, \\ldots$ The others are uncountable.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The set $\\mathbb{Q}$ of rational numbers is:',
    options: [
      'Uncountable',
      'Finite',
      'Not well-defined',
      'Countably infinite',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\mathbb{Q}$ is countable. One proof: list rationals in a grid and traverse diagonally (Cantor\'s diagonal enumeration). Another: $\\mathbb{Q} \\subseteq \\mathbb{Z} \\times \\mathbb{Z}^+$ which is countable.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A countable union of countable sets is:',
    options: [
      'Countable',
      'Always finite',
      'Uncountable',
      'Possibly uncountable',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The countable union of countable sets is countable. This is proved by the diagonal argument: arrange elements in a grid and enumerate diagonally.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Cartesian product $\\mathbb{N} \\times \\mathbb{N}$ is:',
    options: [
      'Empty',
      'Uncountable',
      'Finite',
      'Countably infinite'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\mathbb{N} \\times \\mathbb{N}$ is countable. The Cantor pairing function $(m, n) \\mapsto \\frac{(m+n)(m+n+1)}{2} + n$ gives a bijection to $\\mathbb{N}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $A$ is countable and $B \\subseteq A$, then $B$ is:',
    options: [
      'Possibly uncountable',
      'Always finite',
      'Countable',
      'Countably infinite',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Every subset of a countable set is countable. If $f: A \\to \\mathbb{N}$ is an injection, then $f|_B: B \\to \\mathbb{N}$ is also an injection.',
  },
];
