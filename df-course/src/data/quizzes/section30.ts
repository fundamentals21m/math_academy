import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A semidirect product $N \\rtimes H$ requires:',
    options: [
      '$N$ and $H$ both normal in $G$',
      '$N$ normal in $G$, $H$ a subgroup with $N \\cap H = \\{e\\}$ and $G = NH$',
      '$H$ normal in $G$, $N$ any subgroup',
      '$N$ and $H$ both abelian'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For semidirect product: $N \\trianglelefteq G$, $H \\leq G$, $N \\cap H = \\{e\\}$, and $G = NH$. $H$ need not be normal.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The semidirect product $N \\rtimes_\\phi H$ is determined by:',
    options: [
      'The orders of $N$ and $H$',
      'A homomorphism $\\phi: H \\to \\text{Aut}(N)$',
      'A homomorphism $\\phi: N \\to \\text{Aut}(H)$',
      'An isomorphism between $N$ and $H$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The semidirect product structure is determined by how $H$ acts on $N$, given by $\\phi: H \\to \\text{Aut}(N)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the semidirect product $N \\rtimes_\\phi H$, the multiplication is:',
    options: [
      '$(n_1, h_1)(n_2, h_2) = (n_1 n_2, h_1 h_2)$',
      '$(n_1, h_1)(n_2, h_2) = (n_1 \\phi(h_1)(n_2), h_1 h_2)$',
      '$(n_1, h_1)(n_2, h_2) = (n_1 h_1 n_2 h_2)$',
      '$(n_1, h_1)(n_2, h_2) = (\\phi(n_1)(n_2), h_1 h_2)$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The twisted multiplication: $(n_1, h_1)(n_2, h_2) = (n_1 \\phi(h_1)(n_2), h_1 h_2)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\phi$ is the trivial homomorphism (all elements map to identity automorphism), then $N \\rtimes_\\phi H$ is:',
    options: [
      'Not a group',
      'The direct product $N \\times H$',
      'Isomorphic to $N$',
      'Isomorphic to $H$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $\\phi(h) = \\text{id}_N$ for all $h$, then $(n_1, h_1)(n_2, h_2) = (n_1 n_2, h_1 h_2)$, the direct product.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The dihedral group $D_{2n}$ is isomorphic to which semidirect product?',
    options: [
      '$\\mathbb{Z}_n \\times \\mathbb{Z}_2$',
      '$\\mathbb{Z}_n \\rtimes \\mathbb{Z}_2$ with $\\mathbb{Z}_2$ acting by inversion',
      '$\\mathbb{Z}_2 \\rtimes \\mathbb{Z}_n$',
      '$\\mathbb{Z}_{2n} \\rtimes \\mathbb{Z}_2$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$D_{2n} \\cong \\mathbb{Z}_n \\rtimes \\mathbb{Z}_2$ where the generator of $\\mathbb{Z}_2$ acts on $\\mathbb{Z}_n$ by $x \\mapsto -x$ (inversion).',
  },
];
