import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An irreducible polynomial $f(X) \\in F_p[X]$ of degree $n$ is primitive if:',
    options: [
      'Its degree is prime',
      'It divides $X^{p^n} - 1$',
      'It has all coefficients equal to 1',
      'It divides $X^{p^n-1} - 1$ but not $X^k - 1$ for any $k < p^n - 1$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A primitive polynomial divides $X^{p^n-1} - 1$ (all non-zero field elements satisfy $x^{p^n-1} = 1$) but does not divide $X^k - 1$ for any smaller $k$. This ensures the associated element has maximal order.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f(X)$ is a primitive polynomial, then $\\alpha = X + \\langle f(X) \\rangle$ is:',
    options: [
      'The zero element',
      'A primitive element of the field',
      'The identity element',
      'Not in the field',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $f(X)$ is primitive, the element $\\alpha = X + \\langle f(X) \\rangle$ generates the entire multiplicative group of the field—it is a primitive element.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Over $\\mathbb{B}$, the polynomial $X^3 + X + 1$ is:',
    options: [
      'Primitive',
      'Reducible',
      'Irreducible but not primitive',
      'The zero polynomial',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$X^3 + X + 1$ is irreducible over $\\mathbb{B}$ (neither 0 nor 1 is a root). Since $2^3 - 1 = 7$ is prime, any irreducible cubic is automatically primitive.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The polynomial $X^4 + X^3 + X^2 + X + 1$ over $\\mathbb{B}$ is:',
    options: [
      'Reducible',
      'Primitive',
      'Not a valid polynomial',
      'Irreducible but not primitive',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'This polynomial is irreducible but not primitive. The element $\\alpha$ it generates satisfies $\\alpha^5 = 1$ (order 5, not 15), so it is not a primitive element of $GF(16)$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'How many primitive polynomials of degree 3 exist over $\\mathbb{B}$?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'Since $2^3 - 1 = 7$ is prime, every irreducible cubic over $\\mathbb{B}$ is primitive. There are exactly 2 irreducible cubics: $X^3 + X + 1$ and $X^3 + X^2 + 1$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A splitting field of $f(X)$ over $F$ is:',
    options: [
      'The polynomial ring $F[X]
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A splitting field is an extension $K$ of $F$ where $f(X)$ splits into linear factors, and $K$ is generated over $F$ by the roots of $f(X)$. It is the smallest such extension.',
  },
      'Any field containing $F
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A splitting field is an extension $K$ of $F$ where $f(X)$ splits into linear factors, and $K$ is generated over $F$ by the roots of $f(X)$. It is the smallest such extension.',
  },
      'The smallest extension of $F$ in which $f(X)$ factors completely into linear factors',
      'A field where $f(X)$ has no roots',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A splitting field is an extension $K$ of $F$ where $f(X)$ splits into linear factors, and $K$ is generated over $F$ by the roots of $f(X)$. It is the smallest such extension.',
  },
];
