import type { QuizQuestion } from './types';

export const section94Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The induced representation $\\text{Ind}_H^G(V)$ for $V$ a representation of $H \\leq G$ has dimension:',
    options: [
      '$\\dim(V)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\text{Ind}_H^G(V) = \\mathbb{C}G \\otimes_{\\mathbb{C}H} V$ has dimension $[G:H] \\cdot \\dim(V)$. Induction increases dimension by the index.',
  },
      '$[G:H] \\cdot \\dim(V)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\text{Ind}_H^G(V) = \\mathbb{C}G \\otimes_{\\mathbb{C}H} V$ has dimension $[G:H] \\cdot \\dim(V)$. Induction increases dimension by the index.',
  },
      '$\\dim(V)/[G:H]
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\text{Ind}_H^G(V) = \\mathbb{C}G \\otimes_{\\mathbb{C}H} V$ has dimension $[G:H] \\cdot \\dim(V)$. Induction increases dimension by the index.',
  },
      '$|G| \\cdot \\dim(V)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\text{Ind}_H^G(V) = \\mathbb{C}G \\otimes_{\\mathbb{C}H} V$ has dimension $[G:H] \\cdot \\dim(V)$. Induction increases dimension by the index.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\text{Ind}_H^G(V) = \\mathbb{C}G \\otimes_{\\mathbb{C}H} V$ has dimension $[G:H] \\cdot \\dim(V)$. Induction increases dimension by the index.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The induced character $\\text{Ind}_H^G(\\chi)$ satisfies:',
    options: [
      '$\\text{Ind}_H^G(\\chi)(g) = \\chi(g)$ for all $g
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The induced character formula: $\\text{Ind}_H^G(\\chi)(g) = \\frac{1}{|H|}\\sum_{x: x^{-1}gx \\in H} \\chi(x^{-1}gx)$, summing over coset representatives whose conjugates of $g$ lie in $H$.',
  },
      '$\\text{Ind}_H^G(\\chi) = \\chi \\cdot [G:H]
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The induced character formula: $\\text{Ind}_H^G(\\chi)(g) = \\frac{1}{|H|}\\sum_{x: x^{-1}gx \\in H} \\chi(x^{-1}gx)$, summing over coset representatives whose conjugates of $g$ lie in $H$.',
  },
      '$\\text{Ind}_H^G(\\chi)(g) = 0$ for $g \\notin H
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The induced character formula: $\\text{Ind}_H^G(\\chi)(g) = \\frac{1}{|H|}\\sum_{x: x^{-1}gx \\in H} \\chi(x^{-1}gx)$, summing over coset representatives whose conjugates of $g$ lie in $H$.',
  },
      '$\\text{Ind}_H^G(\\chi)(g) = \\frac{1}{|H|}\\sum_{x \\in G, x^{-1}gx \\in H} \\chi(x^{-1}gx)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The induced character formula: $\\text{Ind}_H^G(\\chi)(g) = \\frac{1}{|H|}\\sum_{x: x^{-1}gx \\in H} \\chi(x^{-1}gx)$, summing over coset representatives whose conjugates of $g$ lie in $H$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The induced character formula: $\\text{Ind}_H^G(\\chi)(g) = \\frac{1}{|H|}\\sum_{x: x^{-1}gx \\in H} \\chi(x^{-1}gx)$, summing over coset representatives whose conjugates of $g$ lie in $H$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Frobenius reciprocity states:',
    options: [
      '$\\text{Ind}_H^G$ and $\\text{Res}_H^G$ are inverse functors',
      '$\\text{Ind}_H^G(\\chi) = \\text{Res}_H^G(\\psi)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Frobenius reciprocity: $\\langle \\text{Ind}_H^G(\\chi), \\psi \\rangle_G = \\langle \\chi, \\text{Res}_H^G(\\psi) \\rangle_H$. Induction and restriction are adjoint functors.',
  },
      '$\\langle \\text{Ind}_H^G(\\chi), \\psi \\rangle_G = \\langle \\chi, \\text{Res}_H^G(\\psi) \\rangle_H
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Frobenius reciprocity: $\\langle \\text{Ind}_H^G(\\chi), \\psi \\rangle_G = \\langle \\chi, \\text{Res}_H^G(\\psi) \\rangle_H$. Induction and restriction are adjoint functors.',
  },
      'Induction is always irreducible',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Frobenius reciprocity: $\\langle \\text{Ind}_H^G(\\chi), \\psi \\rangle_G = \\langle \\chi, \\text{Res}_H^G(\\psi) \\rangle_H$. Induction and restriction are adjoint functors.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The restriction $\\text{Res}_H^G(V)$ of a representation $V$ of $G$ to $H \\leq G$:',
    options: [
      'Has smaller dimension than $V
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Restriction keeps the same vector space but only allows the subgroup $H$ to act. The dimension is unchanged.',
  },
      'Is always irreducible',
      'Has dimension $[G:H] \\cdot \\dim(V)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Restriction keeps the same vector space but only allows the subgroup $H$ to act. The dimension is unchanged.',
  },
      'Has the same underlying vector space as $V
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Restriction keeps the same vector space but only allows the subgroup $H$ to act. The dimension is unchanged.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Restriction keeps the same vector space but only allows the subgroup $H$ to act. The dimension is unchanged.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $G = S_3$ and $H = A_3 \\cong \\mathbb{Z}/3\\mathbb{Z}$, then $\\text{Ind}_{A_3}^{S_3}(1)$ equals:',
    options: [
      'The trivial representation',
      'The sign representation',
      'The trivial plus sign representation ($1 \\oplus \\text{sgn}$)',
      'The $2$-dimensional standard representation',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\text{Ind}_{A_3}^{S_3}(1)$ has dimension $[S_3:A_3] \\cdot 1 = 2$. By Frobenius reciprocity, it decomposes as the sum of representations whose restrictions to $A_3$ contain the trivial representation: these are the trivial and sign characters of $S_3$.',
  },
];
