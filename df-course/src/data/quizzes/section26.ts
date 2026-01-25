import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The (external) direct product $G \\times H$ has elements:',
    options: [
      'Products $gh$ with $g \\in G, h \\in H
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$G \\times H = \\{(g, h) : g \\in G, h \\in H\\}$ with operation $(g_1, h_1)(g_2, h_2) = (g_1 g_2, h_1 h_2)$.',
  },
      'Pairs $(g, h)$ with $g \\in G, h \\in H
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$G \\times H = \\{(g, h) : g \\in G, h \\in H\\}$ with operation $(g_1, h_1)(g_2, h_2) = (g_1 g_2, h_1 h_2)$.',
  },
      'The union $G \\cup H
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$G \\times H = \\{(g, h) : g \\in G, h \\in H\\}$ with operation $(g_1, h_1)(g_2, h_2) = (g_1 g_2, h_1 h_2)$.',
  },
      'Cosets $gH$ with $g \\in G
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$G \\times H = \\{(g, h) : g \\in G, h \\in H\\}$ with operation $(g_1, h_1)(g_2, h_2) = (g_1 g_2, h_1 h_2)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$G \\times H = \\{(g, h) : g \\in G, h \\in H\\}$ with operation $(g_1, h_1)(g_2, h_2) = (g_1 g_2, h_1 h_2)$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is $|\\mathbb{Z}_6 \\times \\mathbb{Z}_4|$?',
    correctAnswer: 24,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$|G \\times H| = |G| \\cdot |H| = 6 \\cdot 4 = 24$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A group $G$ is an internal direct product of subgroups $H$ and $K$ if:',
    options: [
      '$G = HK$, $H \\cap K = \\{e\\}$, and $H, K$ are both normal',
      '$G = H \\cup K
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Internal direct product: $G = HK$, $H \\cap K = \\{e\\}$, and both $H, K \\trianglelefteq G$.',
  },
      '$G = H \\times K$ as sets',
      '$H$ and $K$ are conjugate',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Internal direct product: $G = HK$, $H \\cap K = \\{e\\}$, and both $H, K \\trianglelefteq G$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: '$\\mathbb{Z}_6$ is isomorphic to which direct product?',
    options: [
      '$\\mathbb{Z}_2 \\times \\mathbb{Z}_2$',
      '$\\mathbb{Z}_3 \\times \\mathbb{Z}_3$',
      '$\\mathbb{Z}_2 \\times \\mathbb{Z}_3$',
      '$\\mathbb{Z}_4 \\times \\mathbb{Z}_2$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}_6 \\cong \\mathbb{Z}_2 \\times \\mathbb{Z}_3$ since $\\gcd(2, 3) = 1$. By the Chinese Remainder Theorem, $\\mathbb{Z}_{mn} \\cong \\mathbb{Z}_m \\times \\mathbb{Z}_n$ when $\\gcd(m,n) = 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Is $\\mathbb{Z}_4$ isomorphic to $\\mathbb{Z}_2 \\times \\mathbb{Z}_2$?',
    options: [
      'Yes, they both have order 4',
      'No, they have different numbers of elements',
      'Yes, both are abelian',
      'No, $\\mathbb{Z}_4$ is cyclic but $\\mathbb{Z}_2 \\times \\mathbb{Z}_2$ is not'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}_4$ is cyclic (has an element of order 4), while $\\mathbb{Z}_2 \\times \\mathbb{Z}_2$ has no element of order 4 (max order is 2).',
  },
];
