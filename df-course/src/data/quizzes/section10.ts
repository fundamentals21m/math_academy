import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A nonempty subset $H$ of a group $G$ is a subgroup if and only if:',
    options: [
      'For all $a, b \\in H$, we have $ab^{-1} \\in H
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The one-step subgroup test: $H \\neq \\emptyset$ is a subgroup iff $ab^{-1} \\in H$ for all $a, b \\in H$.',
  },
      '$H$ contains the identity',
      '$H$ is finite',
      '$H$ is closed under the group operation',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The one-step subgroup test: $H \\neq \\emptyset$ is a subgroup iff $ab^{-1} \\in H$ for all $a, b \\in H$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a subgroup of $(\\mathbb{Z}, +)$?',
    options: ['$2\\mathbb{Z}$ (even integers)', '$3\\mathbb{Z}$ (multiples of 3)', '$\\mathbb{N}$ (natural numbers)', '$\\{0\\}$'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\mathbb{N}$ is not a subgroup because it does not contain inverses (negative integers).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The intersection of two subgroups $H$ and $K$ of $G$ is:',
    options: [
      'Not necessarily a subgroup',
      'Always a subgroup',
      'A subgroup only if $H \\subseteq K$ or $K \\subseteq H
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The intersection of any collection of subgroups is always a subgroup.',
  },
      'Equal to $\\{e\\}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The intersection of any collection of subgroups is always a subgroup.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The intersection of any collection of subgroups is always a subgroup.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The union $H \\cup K$ of two subgroups is a subgroup if and only if:',
    options: [
      'Always',
      'Never',
      '$H \\cap K = \\{e\\}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$H \\cup K$ is a subgroup iff one is contained in the other. Otherwise, take $h \\in H \\setminus K$ and $k \\in K \\setminus H$; then $hk$ is in neither.',
  },
      '$H \\subseteq K$ or $K \\subseteq H
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$H \\cup K$ is a subgroup iff one is contained in the other. Otherwise, take $h \\in H \\setminus K$ and $k \\in K \\setminus H$; then $hk$ is in neither.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$H \\cup K$ is a subgroup iff one is contained in the other. Otherwise, take $h \\in H \\setminus K$ and $k \\in K \\setminus H$; then $hk$ is in neither.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $H$ is a subgroup of $G$, then the identity element of $H$ is:',
    options: [
      'Possibly different from the identity of $G$',
      'Only the same if $H = G$',
      'The same as the identity element of $G$',
      'Not well-defined'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If $e_H$ is the identity of $H$, then $e_H \\cdot e_H = e_H$. In $G$, this means $e_H = e_G$.',
  },
];
