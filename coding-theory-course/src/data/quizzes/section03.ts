import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A set of vectors $\\{v_1, v_2, \\ldots, v_n\\}$ is linearly independent if:',
    options: [
      'No two vectors are equal',
      '$a_1v_1 + a_2v_2 + \\cdots + a_nv_n = 0$ implies all $a_i = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A set of vectors is linearly independent if the only way to write the zero vector as a linear combination of them is with all coefficients equal to zero.',
  },
      'All vectors are non-zero',
      'The vectors span the entire space',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A set of vectors is linearly independent if the only way to write the zero vector as a linear combination of them is with all coefficients equal to zero.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is the dimension of the vector space $\\mathcal{P}_{n-1}(X)$ of polynomials of degree at most $n-1$?',
    correctAnswer: 6,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'The space $\\mathcal{P}_{n-1}(X)$ has basis $\\{1, X, X^2, \\ldots, X^{n-1}\\}$, which has $n$ elements. For $n-1 = 5$ (i.e., $n = 6$), the dimension is 6.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For non-zero polynomials $a(X)$ and $b(X)$ in $F[X]$, what is $\\deg(a(X)b(X))$?',
    options: [
      '$\\deg a(X) + \\deg b(X)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For non-zero polynomials over a field, the degree of the product equals the sum of the degrees: $\\deg(a(X)b(X)) = \\deg a(X) + \\deg b(X)$.',
  },
      '$\\min(\\deg a(X), \\deg b(X))
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For non-zero polynomials over a field, the degree of the product equals the sum of the degrees: $\\deg(a(X)b(X)) = \\deg a(X) + \\deg b(X)$.',
  },
      '$\\deg a(X) \\cdot \\deg b(X)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For non-zero polynomials over a field, the degree of the product equals the sum of the degrees: $\\deg(a(X)b(X)) = \\deg a(X) + \\deg b(X)$.',
  },
      '$\\max(\\deg a(X), \\deg b(X))
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For non-zero polynomials over a field, the degree of the product equals the sum of the degrees: $\\deg(a(X)b(X)) = \\deg a(X) + \\deg b(X)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For non-zero polynomials over a field, the degree of the product equals the sum of the degrees: $\\deg(a(X)b(X)) = \\deg a(X) + \\deg b(X)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the binary polynomial ring $\\mathbb{B}[X]$, what is $a(X) + a(X)$?',
    options: [
      '$2a(X)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In $\\mathbb{B}[X]$, since $1 + 1 = 0$ in the binary field, we have $a(X) + a(X) = 0$ for all polynomials $a(X)$. Every polynomial is its own additive inverse.',
  },
      '$a(X)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In $\\mathbb{B}[X]$, since $1 + 1 = 0$ in the binary field, we have $a(X) + a(X) = 0$ for all polynomials $a(X)$. Every polynomial is its own additive inverse.',
  },
      '$0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In $\\mathbb{B}[X]$, since $1 + 1 = 0$ in the binary field, we have $a(X) + a(X) = 0$ for all polynomials $a(X)$. Every polynomial is its own additive inverse.',
  },
      '$a(X^2)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In $\\mathbb{B}[X]$, since $1 + 1 = 0$ in the binary field, we have $a(X) + a(X) = 0$ for all polynomials $a(X)$. Every polynomial is its own additive inverse.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In $\\mathbb{B}[X]$, since $1 + 1 = 0$ in the binary field, we have $a(X) + a(X) = 0$ for all polynomials $a(X)$. Every polynomial is its own additive inverse.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The polynomial $1 + X + X^3$ over $\\mathbb{B}$ corresponds to which word of length 6?',
    options: [
      '$(0, 0, 1, 0, 1, 1)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The polynomial $a(X) = a_0 + a_1X + \\cdots + a_{n-1}X^{n-1}$ corresponds to the word $(a_0, a_1, \\ldots, a_{n-1})$. For $1 + X + X^3$ with length 6, the word is $(1, 1, 0, 1, 0, 0)$.',
  },
      '$(1, 0, 1, 1, 0, 0)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The polynomial $a(X) = a_0 + a_1X + \\cdots + a_{n-1}X^{n-1}$ corresponds to the word $(a_0, a_1, \\ldots, a_{n-1})$. For $1 + X + X^3$ with length 6, the word is $(1, 1, 0, 1, 0, 0)$.',
  },
      '$(1, 1, 1, 0, 0, 0)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The polynomial $a(X) = a_0 + a_1X + \\cdots + a_{n-1}X^{n-1}$ corresponds to the word $(a_0, a_1, \\ldots, a_{n-1})$. For $1 + X + X^3$ with length 6, the word is $(1, 1, 0, 1, 0, 0)$.',
  },
      '$(1, 1, 0, 1, 0, 0)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The polynomial $a(X) = a_0 + a_1X + \\cdots + a_{n-1}X^{n-1}$ corresponds to the word $(a_0, a_1, \\ldots, a_{n-1})$. For $1 + X + X^3$ with length 6, the word is $(1, 1, 0, 1, 0, 0)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The polynomial $a(X) = a_0 + a_1X + \\cdots + a_{n-1}X^{n-1}$ corresponds to the word $(a_0, a_1, \\ldots, a_{n-1})$. For $1 + X + X^3$ with length 6, the word is $(1, 1, 0, 1, 0, 0)$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Two vector spaces of equal finite dimension over the same field are:',
    options: [
      'Orthogonal',
      'Isomorphic',
      'Identical',
      'Disjoint',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Any two vector spaces of the same finite dimension over the same field are isomorphic. The isomorphism can be constructed by mapping one basis to another.',
  },
];
