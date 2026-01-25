import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A polynomial is irreducible over $F$ if:',
    options: [
      'It cannot be factored into lower-degree polynomials with coefficients in $F
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Irreducible means it cannot be written as a product of polynomials of positive degree over $F$.',
  },
      'It has no roots in $F
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Irreducible means it cannot be written as a product of polynomials of positive degree over $F$.',
  },
      'It has degree 1',
      'It is monic',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Irreducible means it cannot be written as a product of polynomials of positive degree over $F$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: '$x^2 + 1$ is irreducible over:',
    options: [
      '$\\mathbb{C}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$x^2 + 1$ has no real roots, so it\'s irreducible over $\\mathbb{R}$. Over $\\mathbb{C}$, it factors as $(x+i)(x-i)$.',
  },
      '$\\mathbb{Z}_2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$x^2 + 1$ has no real roots, so it\'s irreducible over $\\mathbb{R}$. Over $\\mathbb{C}$, it factors as $(x+i)(x-i)$.',
  },
      'All fields',
      '$\\mathbb{R}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$x^2 + 1$ has no real roots, so it\'s irreducible over $\\mathbb{R}$. Over $\\mathbb{C}$, it factors as $(x+i)(x-i)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$x^2 + 1$ has no real roots, so it\'s irreducible over $\\mathbb{R}$. Over $\\mathbb{C}$, it factors as $(x+i)(x-i)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a polynomial of degree 2 or 3 over a field $F$, it is irreducible if and only if:',
    options: [
      'It is monic',
      'It has degree exactly 2',
      'It has no roots in $F
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For degree 2 or 3, having no roots implies irreducibility (any factor would give a root).',
  },
      'All its coefficients are non-zero',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For degree 2 or 3, having no roots implies irreducibility (any factor would give a root).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The unique irreducible polynomial of degree 2 over $\\mathbb{Z}_2$ is:',
    options: [
      '$x^2 + x + 1
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$x^2 + x + 1$ has no roots in $\\mathbb{Z}_2$: $0^2 + 0 + 1 = 1$ and $1^2 + 1 + 1 = 1$.',
  },
      '$x^2
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$x^2 + x + 1$ has no roots in $\\mathbb{Z}_2$: $0^2 + 0 + 1 = 1$ and $1^2 + 1 + 1 = 1$.',
  },
      '$x^2 + 1
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$x^2 + x + 1$ has no roots in $\\mathbb{Z}_2$: $0^2 + 0 + 1 = 1$ and $1^2 + 1 + 1 = 1$.',
  },
      '$x^2 + x
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$x^2 + x + 1$ has no roots in $\\mathbb{Z}_2$: $0^2 + 0 + 1 = 1$ and $1^2 + 1 + 1 = 1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$x^2 + x + 1$ has no roots in $\\mathbb{Z}_2$: $0^2 + 0 + 1 = 1$ and $1^2 + 1 + 1 = 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Eisenstein\'s criterion is a test for irreducibility over:',
    options: [
      '$\\mathbb{Z}_p
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Eisenstein\'s criterion applies to polynomials in $\\mathbb{Z}[x]$ to prove irreducibility over $\\mathbb{Q}$.',
  },
      '$\\mathbb{Q}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Eisenstein\'s criterion applies to polynomials in $\\mathbb{Z}[x]$ to prove irreducibility over $\\mathbb{Q}$.',
  },
      '$\\mathbb{C}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Eisenstein\'s criterion applies to polynomials in $\\mathbb{Z}[x]$ to prove irreducibility over $\\mathbb{Q}$.',
  },
      'Any field',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Eisenstein\'s criterion applies to polynomials in $\\mathbb{Z}[x]$ to prove irreducibility over $\\mathbb{Q}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Every non-constant polynomial over a field factors uniquely into:',
    options: [
      'Linear factors',
      'Degree-2 factors',
      'Integer factors',
      'Monic irreducible factors',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Unique factorization: every polynomial factors as constant times monic irreducibles, uniquely up to order.',
  },
];
