import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The centralizer $C_G(A)$ of a subset $A$ in a group $G$ is:',
    options: [
      '$\\{g \\in G : gA = Ag\\}$',
      '$\\{g \\in G : ga = ag \\text{ for all } a \\in A\\}$',
      '$\\{g \\in G : gAg^{-1} = A\\}$',
      '$\\{a \\in A : ga = ag \\text{ for all } g \\in G\\}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$C_G(A) = \\{g \\in G : ga = ag \\text{ for all } a \\in A\\}$ is the set of elements that commute with every element of $A$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The normalizer $N_G(A)$ of a subset $A$ in a group $G$ is:',
    options: [
      '$\\{g \\in G : ga = ag \\text{ for all } a \\in A\\}$',
      '$\\{g \\in G : gAg^{-1} = A\\}$',
      '$\\{g \\in G : gA = A\\}$',
      '$\\{a \\in A : gag^{-1} \\in A\\}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$N_G(A) = \\{g \\in G : gAg^{-1} = A\\}$ is the set of elements that normalize $A$ (map $A$ to itself under conjugation).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For any subset $A$ of $G$, which containment always holds?',
    options: [
      '$N_G(A) \\subseteq C_G(A)$',
      '$C_G(A) \\subseteq N_G(A)$',
      '$C_G(A) = N_G(A)$',
      'Neither is contained in the other'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $g$ commutes with every element of $A$, then $gAg^{-1} = A$. So $C_G(A) \\subseteq N_G(A)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The center $Z(G)$ of a group $G$ is:',
    options: [
      '$C_G(G)$',
      '$N_G(G)$',
      '$C_G(\\{e\\})$',
      '$N_G(\\{e\\})$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$Z(G) = C_G(G) = \\{g \\in G : ga = ag \\text{ for all } a \\in G\\}$ is the set of elements that commute with everything.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $H$ is a subgroup of $G$, then $H$ is normal in $G$ if and only if:',
    options: [
      '$C_G(H) = G$',
      '$N_G(H) = G$',
      '$Z(G) = H$',
      '$C_G(H) = H$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$H$ is normal iff $gHg^{-1} = H$ for all $g \\in G$, which means $N_G(H) = G$.',
  },
];
