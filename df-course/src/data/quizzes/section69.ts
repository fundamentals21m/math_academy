import type { QuizQuestion } from './types';

export const section69Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Fundamental Theorem of Galois Theory establishes a correspondence between:',
    options: [
      'Subfields of $E$ and normal subgroups of $\\text{Gal}(E/F)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Fundamental Theorem gives a bijection between intermediate fields of a Galois extension $E/F$ and subgroups of $\\text{Gal}(E/F)$, where $K \\leftrightarrow \\text{Gal}(E/K)$.',
  },
      'Elements of $E$ and elements of $\\text{Gal}(E/F)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Fundamental Theorem gives a bijection between intermediate fields of a Galois extension $E/F$ and subgroups of $\\text{Gal}(E/F)$, where $K \\leftrightarrow \\text{Gal}(E/K)$.',
  },
      'Polynomials over $F$ and automorphisms of $E
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Fundamental Theorem gives a bijection between intermediate fields of a Galois extension $E/F$ and subgroups of $\\text{Gal}(E/F)$, where $K \\leftrightarrow \\text{Gal}(E/K)$.',
  },
      'Intermediate fields $F \\subseteq K \\subseteq E$ and subgroups $H \\leq \\text{Gal}(E/F)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Fundamental Theorem gives a bijection between intermediate fields of a Galois extension $E/F$ and subgroups of $\\text{Gal}(E/F)$, where $K \\leftrightarrow \\text{Gal}(E/K)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Fundamental Theorem gives a bijection between intermediate fields of a Galois extension $E/F$ and subgroups of $\\text{Gal}(E/F)$, where $K \\leftrightarrow \\text{Gal}(E/K)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Under the Galois correspondence, larger subgroups correspond to:',
    options: [
      'Larger intermediate fields',
      'There is no relationship with size',
      'Smaller intermediate fields',
      'The same intermediate field',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The correspondence reverses inclusions: if $H_1 \\leq H_2 \\leq \\text{Gal}(E/F)$, then $E^{H_1} \\supseteq E^{H_2}$. More automorphisms fixing elements means fewer fixed elements.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'An intermediate field $K$ of a Galois extension $E/F$ corresponds to a normal subgroup of $\\text{Gal}(E/F)$ if and only if:',
    options: [
      '$K/F$ is normal (i.e., $K/F$ is Galois)',
      '$K/F$ is separable',
      '$E/K$ is normal',
      '$K = F$ or $K = E$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The subgroup $\\text{Gal}(E/K)$ is normal in $\\text{Gal}(E/F)$ if and only if $K/F$ is a normal extension. In this case, $\\text{Gal}(K/F) \\cong \\text{Gal}(E/F)/\\text{Gal}(E/K)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $E/F$ is Galois with $\\text{Gal}(E/F) \\cong \\mathbb{Z}/4\\mathbb{Z}$, how many intermediate fields are there (including $E$ and $F$)?',
    options: [
      '$3
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}/4\\mathbb{Z}$ has exactly $3$ subgroups: $\\{0\\}$, $\\{0, 2\\}$, and $\\mathbb{Z}/4\\mathbb{Z}$. By the Galois correspondence, there are exactly $3$ intermediate fields: $E$, one proper intermediate field, and $F$.',
  },
      '$2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}/4\\mathbb{Z}$ has exactly $3$ subgroups: $\\{0\\}$, $\\{0, 2\\}$, and $\\mathbb{Z}/4\\mathbb{Z}$. By the Galois correspondence, there are exactly $3$ intermediate fields: $E$, one proper intermediate field, and $F$.',
  },
      '$4
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}/4\\mathbb{Z}$ has exactly $3$ subgroups: $\\{0\\}$, $\\{0, 2\\}$, and $\\mathbb{Z}/4\\mathbb{Z}$. By the Galois correspondence, there are exactly $3$ intermediate fields: $E$, one proper intermediate field, and $F$.',
  },
      '$5
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}/4\\mathbb{Z}$ has exactly $3$ subgroups: $\\{0\\}$, $\\{0, 2\\}$, and $\\mathbb{Z}/4\\mathbb{Z}$. By the Galois correspondence, there are exactly $3$ intermediate fields: $E$, one proper intermediate field, and $F$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}/4\\mathbb{Z}$ has exactly $3$ subgroups: $\\{0\\}$, $\\{0, 2\\}$, and $\\mathbb{Z}/4\\mathbb{Z}$. By the Galois correspondence, there are exactly $3$ intermediate fields: $E$, one proper intermediate field, and $F$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For the splitting field $E$ of $x^4 - 2$ over $\\mathbb{Q}$, $\\text{Gal}(E/\\mathbb{Q})$ is isomorphic to:',
    options: [
      '$\\mathbb{Z}/4\\mathbb{Z}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The splitting field is $\\mathbb{Q}(\\sqrt[4]{2}, i)$ with $[E:\\mathbb{Q}] = 8$. The Galois group permutes the four roots $\\pm\\sqrt[4]{2}, \\pm i\\sqrt[4]{2}$. The group is $D_4$, generated by $\\sigma: \\sqrt[4]{2} \\mapsto i\\sqrt[4]{2}$ and $\\tau: i \\mapsto -i$.',
  },
      '$D_4$ (dihedral group of order $8$)',
      '$\\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/2\\mathbb{Z}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The splitting field is $\\mathbb{Q}(\\sqrt[4]{2}, i)$ with $[E:\\mathbb{Q}] = 8$. The Galois group permutes the four roots $\\pm\\sqrt[4]{2}, \\pm i\\sqrt[4]{2}$. The group is $D_4$, generated by $\\sigma: \\sqrt[4]{2} \\mapsto i\\sqrt[4]{2}$ and $\\tau: i \\mapsto -i$.',
  },
      '$S_4
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The splitting field is $\\mathbb{Q}(\\sqrt[4]{2}, i)$ with $[E:\\mathbb{Q}] = 8$. The Galois group permutes the four roots $\\pm\\sqrt[4]{2}, \\pm i\\sqrt[4]{2}$. The group is $D_4$, generated by $\\sigma: \\sqrt[4]{2} \\mapsto i\\sqrt[4]{2}$ and $\\tau: i \\mapsto -i$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The splitting field is $\\mathbb{Q}(\\sqrt[4]{2}, i)$ with $[E:\\mathbb{Q}] = 8$. The Galois group permutes the four roots $\\pm\\sqrt[4]{2}, \\pm i\\sqrt[4]{2}$. The group is $D_4$, generated by $\\sigma: \\sqrt[4]{2} \\mapsto i\\sqrt[4]{2}$ and $\\tau: i \\mapsto -i$.',
  },
];
