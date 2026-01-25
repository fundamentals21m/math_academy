import type { QuizQuestion } from './types';

export const section62Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A field extension $K/F$ has degree $[K:F]$ defined as:',
    options: [
      'The dimension of $K$ as an $F$-vector space',
      'The number of elements in $K
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The degree $[K:F] = \\dim_F(K)$ is the dimension of $K$ as a vector space over $F$.',
  },
      'The order of the Galois group',
      'The number of intermediate fields',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The degree $[K:F] = \\dim_F(K)$ is the dimension of $K$ as a vector space over $F$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The degree $[\\mathbb{C}:\\mathbb{R}]$ equals:',
    options: [
      '$1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\mathbb{C} = \\mathbb{R} + \\mathbb{R}i$ has basis $\\{1, i\\}$ over $\\mathbb{R}$, so $[\\mathbb{C}:\\mathbb{R}] = 2$.',
  },
      '$2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\mathbb{C} = \\mathbb{R} + \\mathbb{R}i$ has basis $\\{1, i\\}$ over $\\mathbb{R}$, so $[\\mathbb{C}:\\mathbb{R}] = 2$.',
  },
      '$4
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\mathbb{C} = \\mathbb{R} + \\mathbb{R}i$ has basis $\\{1, i\\}$ over $\\mathbb{R}$, so $[\\mathbb{C}:\\mathbb{R}] = 2$.',
  },
      'Infinite',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\mathbb{C} = \\mathbb{R} + \\mathbb{R}i$ has basis $\\{1, i\\}$ over $\\mathbb{R}$, so $[\\mathbb{C}:\\mathbb{R}] = 2$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'An element $\\alpha \\in K$ is algebraic over $F$ if:',
    options: [
      '$\\alpha \\in F
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\alpha$ is algebraic over $F$ if there exists a non-zero $f(x) \\in F[x]$ with $f(\\alpha) = 0$. Otherwise, $\\alpha$ is transcendental over $F$.',
  },
      '$\\alpha$ is transcendental',
      '$\\alpha = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\alpha$ is algebraic over $F$ if there exists a non-zero $f(x) \\in F[x]$ with $f(\\alpha) = 0$. Otherwise, $\\alpha$ is transcendental over $F$.',
  },
      '$\\alpha$ is a root of some non-zero polynomial in $F[x]
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\alpha$ is algebraic over $F$ if there exists a non-zero $f(x) \\in F[x]$ with $f(\\alpha) = 0$. Otherwise, $\\alpha$ is transcendental over $F$.',
  },
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
      '$x - \\sqrt{2}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\sqrt{2}$ satisfies $x^2 - 2 = 0$, and this polynomial is irreducible over $\\mathbb{Q}$ (has no rational roots). So it is the minimal polynomial.',
  },
      '$x^2 - 2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sqrt{2}$ satisfies $x^2 - 2 = 0$, and this polynomial is irreducible over $\\mathbb{Q}$ (has no rational roots). So it is the minimal polynomial.',
  },
      '$x^2 + 2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sqrt{2}$ satisfies $x^2 - 2 = 0$, and this polynomial is irreducible over $\\mathbb{Q}$ (has no rational roots). So it is the minimal polynomial.',
  },
      '$x^4 - 4
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sqrt{2}$ satisfies $x^2 - 2 = 0$, and this polynomial is irreducible over $\\mathbb{Q}$ (has no rational roots). So it is the minimal polynomial.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sqrt{2}$ satisfies $x^2 - 2 = 0$, and this polynomial is irreducible over $\\mathbb{Q}$ (has no rational roots). So it is the minimal polynomial.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $[L:K] = m$ and $[K:F] = n$, then $[L:F] = $',
    options: [
      '$m + n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The tower law: $[L:F] = [L:K][K:F] = mn$. If $\\{\\alpha_i\\}$ is a basis of $K/F$ and $\\{\\beta_j\\}$ is a basis of $L/K$, then $\\{\\alpha_i \\beta_j\\}$ is a basis of $L/F$.',
  },
      '$\\gcd(m, n)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The tower law: $[L:F] = [L:K][K:F] = mn$. If $\\{\\alpha_i\\}$ is a basis of $K/F$ and $\\{\\beta_j\\}$ is a basis of $L/K$, then $\\{\\alpha_i \\beta_j\\}$ is a basis of $L/F$.',
  },
      '$mn
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The tower law: $[L:F] = [L:K][K:F] = mn$. If $\\{\\alpha_i\\}$ is a basis of $K/F$ and $\\{\\beta_j\\}$ is a basis of $L/K$, then $\\{\\alpha_i \\beta_j\\}$ is a basis of $L/F$.',
  },
      '$\\max(m, n)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The tower law: $[L:F] = [L:K][K:F] = mn$. If $\\{\\alpha_i\\}$ is a basis of $K/F$ and $\\{\\beta_j\\}$ is a basis of $L/K$, then $\\{\\alpha_i \\beta_j\\}$ is a basis of $L/F$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The tower law: $[L:F] = [L:K][K:F] = mn$. If $\\{\\alpha_i\\}$ is a basis of $K/F$ and $\\{\\beta_j\\}$ is a basis of $L/K$, then $\\{\\alpha_i \\beta_j\\}$ is a basis of $L/F$.',
  },
];
