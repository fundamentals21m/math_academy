import type { QuizQuestion } from './types';

export const section62Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A field extension $K/F$ has degree $[K:F]$ defined as:',
    options: [
      'The number of elements in $K$',
      'The dimension of $K$ as an $F$-vector space',
      'The number of intermediate fields',
      'The order of the Galois group'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The degree $[K:F] = \\dim_F(K)$ is the dimension of $K$ as a vector space over $F$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The degree $[\\mathbb{C}:\\mathbb{R}]$ equals:',
    options: [
      '$1$',
      '$2$',
      '$4$',
      'Infinite'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\mathbb{C} = \\mathbb{R} + \\mathbb{R}i$ has basis $\\{1, i\\}$ over $\\mathbb{R}$, so $[\\mathbb{C}:\\mathbb{R}] = 2$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'An element $\\alpha \\in K$ is algebraic over $F$ if:',
    options: [
      '$\\alpha \\in F$',
      '$\\alpha$ is a root of some non-zero polynomial in $F[x]$',
      '$\\alpha$ is transcendental',
      '$\\alpha = 0$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\alpha$ is algebraic over $F$ if there exists a non-zero $f(x) \\in F[x]$ with $f(\\alpha) = 0$. Otherwise, $\\alpha$ is transcendental over $F$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The minimal polynomial of $\\sqrt{2}$ over $\\mathbb{Q}$ is:',
    options: [
      '$x - \\sqrt{2}$',
      '$x^2 - 2$',
      '$x^2 + 2$',
      '$x^4 - 4$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\sqrt{2}$ satisfies $x^2 - 2 = 0$, and this polynomial is irreducible over $\\mathbb{Q}$ (has no rational roots). So it is the minimal polynomial.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $[L:K] = m$ and $[K:F] = n$, then $[L:F] = $',
    options: [
      '$m + n$',
      '$mn$',
      '$\\max(m, n)$',
      '$\\gcd(m, n)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The tower law: $[L:F] = [L:K][K:F] = mn$. If $\\{\\alpha_i\\}$ is a basis of $K/F$ and $\\{\\beta_j\\}$ is a basis of $L/K$, then $\\{\\alpha_i \\beta_j\\}$ is a basis of $L/F$.',
  },
];
