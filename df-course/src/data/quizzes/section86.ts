import type { QuizQuestion } from './types';

export const section86Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Group cohomology $H^n(G, A)$ is defined for:',
    options: [
      'Any group $G$ and any abelian group $A$',
      'Only abelian groups $G$',
      'Only finite groups $G$',
      'Any group $G$ and any $G$-module $A$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Group cohomology $H^n(G, A)$ is defined for a group $G$ and a $G$-module $A$ (an abelian group with a $G$-action). It can be computed as $\\text{Ext}^n_{\\mathbb{Z}G}(\\mathbb{Z}, A)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: '$H^0(G, A)$ equals:',
    options: [
      '$A
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$H^0(G, A) = A^G$ is the subgroup of $G$-invariants: elements of $A$ fixed by every element of $G$.',
  },
      'The trivial group',
      '$A/GA
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$H^0(G, A) = A^G$ is the subgroup of $G$-invariants: elements of $A$ fixed by every element of $G$.',
  },
      '$A^G = \\{a \\in A : ga = a \\text{ for all } g \\in G\\}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$H^0(G, A) = A^G$ is the subgroup of $G$-invariants: elements of $A$ fixed by every element of $G$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$H^0(G, A) = A^G$ is the subgroup of $G$-invariants: elements of $A$ fixed by every element of $G$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a finite cyclic group $G = \\langle \\sigma \\rangle$ of order $n$ acting trivially on $\\mathbb{Z}$, $H^2(G, \\mathbb{Z})$ equals:',
    options: [
      '$0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'For cyclic $G$ of order $n$ with trivial action on $\\mathbb{Z}$, cohomology is periodic: $H^{2k}(G, \\mathbb{Z}) \\cong \\mathbb{Z}/n\\mathbb{Z}$ for $k \\geq 1$.',
  },
      '$\\mathbb{Z}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For cyclic $G$ of order $n$ with trivial action on $\\mathbb{Z}$, cohomology is periodic: $H^{2k}(G, \\mathbb{Z}) \\cong \\mathbb{Z}/n\\mathbb{Z}$ for $k \\geq 1$.',
  },
      '$\\mathbb{Z}/n\\mathbb{Z}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For cyclic $G$ of order $n$ with trivial action on $\\mathbb{Z}$, cohomology is periodic: $H^{2k}(G, \\mathbb{Z}) \\cong \\mathbb{Z}/n\\mathbb{Z}$ for $k \\geq 1$.',
  },
      '$\\mathbb{Z}^n
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For cyclic $G$ of order $n$ with trivial action on $\\mathbb{Z}$, cohomology is periodic: $H^{2k}(G, \\mathbb{Z}) \\cong \\mathbb{Z}/n\\mathbb{Z}$ for $k \\geq 1$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For cyclic $G$ of order $n$ with trivial action on $\\mathbb{Z}$, cohomology is periodic: $H^{2k}(G, \\mathbb{Z}) \\cong \\mathbb{Z}/n\\mathbb{Z}$ for $k \\geq 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Group cohomology can be computed using:',
    options: [
      'Gaussian elimination only',
      'The bar resolution of $\\mathbb{Z}$ as a $\\mathbb{Z}G$-module',
      'Smith normal form',
      'Eigenvalue decomposition',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The standard bar resolution is a free resolution of $\\mathbb{Z}$ as a $\\mathbb{Z}G$-module. Applying $\\text{Hom}_{\\mathbb{Z}G}(-, A)$ and taking cohomology gives $H^n(G, A)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $A$ is a trivial $G$-module (every $g$ acts as identity), then $H^1(G, A)$ equals:',
    options: [
      '$\\text{Hom}(G, A)$ (group homomorphisms)',
      '$0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When $A$ is a trivial $G$-module, $H^1(G, A) \\cong \\text{Hom}(G, A)$, the group of homomorphisms from $G$ to $A$. This is because every crossed homomorphism is a true homomorphism when the action is trivial.',
  },
      '$G \\otimes A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When $A$ is a trivial $G$-module, $H^1(G, A) \\cong \\text{Hom}(G, A)$, the group of homomorphisms from $G$ to $A$. This is because every crossed homomorphism is a true homomorphism when the action is trivial.',
  },
      '$A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When $A$ is a trivial $G$-module, $H^1(G, A) \\cong \\text{Hom}(G, A)$, the group of homomorphisms from $G$ to $A$. This is because every crossed homomorphism is a true homomorphism when the action is trivial.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When $A$ is a trivial $G$-module, $H^1(G, A) \\cong \\text{Hom}(G, A)$, the group of homomorphisms from $G$ to $A$. This is because every crossed homomorphism is a true homomorphism when the action is trivial.',
  },
];
