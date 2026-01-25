import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "Cayley's Theorem states that every group $G$ is isomorphic to:",
    options: [
      'A cyclic group',
      'A subgroup of $GL_n(\\mathbb{R})
    correctIndex: 3,
    difficulty: ',
      ',
    explanation: "Cayley',
      'A subgroup of some symmetric group',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: "Cayley's Theorem: Every group $G$ is isomorphic to a subgroup of $S_G$ (permutations of the set $G$).",
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: "The embedding in Cayley's Theorem is given by:",
    options: [
      'The conjugation action',
      'The action on subgroups',
      'The regular (left multiplication) action',
      'The action on cosets',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The proof uses the left regular action $\\phi: G \\to S_G$ where $\\phi(g)(h) = gh$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "By Cayley's Theorem, a group of order $n$ embeds into:",
    options: [
      '$S_{n-1}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A group of order $n$ embeds into $S_n$ via the regular representation.',
  },
      '$S_{2n}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A group of order $n$ embeds into $S_n$ via the regular representation.',
  },
      '$S_n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A group of order $n$ embeds into $S_n$ via the regular representation.',
  },
      '$A_n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A group of order $n$ embeds into $S_n$ via the regular representation.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A group of order $n$ embeds into $S_n$ via the regular representation.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is the smallest $n$ such that the cyclic group $\\mathbb{Z}_4$ embeds into $S_n$?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: "By Cayley's Theorem, $\\mathbb{Z}_4$ embeds in $S_4$. In fact, $\\mathbb{Z}_4 \\cong \\langle (1234) \\rangle$ shows this is optimal.",
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "The representation from Cayley's Theorem is always:",
    options: [
      'Surjective',
      'Faithful (injective)',
      'Neither injective nor surjective',
      'Both injective and surjective',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: "Cayley's representation is always faithful: if $\\phi(g) = \\text{id}$, then $gh = h$ for all $h$, so $g = e$.",
  },
];
