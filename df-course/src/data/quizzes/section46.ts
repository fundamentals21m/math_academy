import type { QuizQuestion } from './types';

export const section46Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Eisenstein criterion applies to $f(x) = a_nx^n + \\cdots + a_0 \\in \\mathbb{Z}[x]$ when there exists a prime $p$ such that:',
    options: [
      '$p | a_n$, $p | a_i$ for $i < n$, $p^2 \\nmid a_0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Eisenstein requires: $p \\nmid a_n$ (leading coefficient), $p | a_i$ for all $i < n$, and $p^2 \\nmid a_0$ (constant term). Then $f$ is irreducible over $\\mathbb{Q}$.',
  },
      '$p^2 | a_0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Eisenstein requires: $p \\nmid a_n$ (leading coefficient), $p | a_i$ for all $i < n$, and $p^2 \\nmid a_0$ (constant term). Then $f$ is irreducible over $\\mathbb{Q}$.',
  },
      '$p \\nmid a_n$, $p | a_i$ for $i < n$, $p^2 \\nmid a_0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Eisenstein requires: $p \\nmid a_n$ (leading coefficient), $p | a_i$ for all $i < n$, and $p^2 \\nmid a_0$ (constant term). Then $f$ is irreducible over $\\mathbb{Q}$.',
  },
      '$p | a_i$ for all $i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Eisenstein requires: $p \\nmid a_n$ (leading coefficient), $p | a_i$ for all $i < n$, and $p^2 \\nmid a_0$ (constant term). Then $f$ is irreducible over $\\mathbb{Q}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Eisenstein requires: $p \\nmid a_n$ (leading coefficient), $p | a_i$ for all $i < n$, and $p^2 \\nmid a_0$ (constant term). Then $f$ is irreducible over $\\mathbb{Q}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Using Eisenstein with $p = 2$, is $x^3 + 2x^2 + 4x + 2$ irreducible over $\\mathbb{Q}$?',
    options: [
      'Yes, Eisenstein applies',
      'No, Eisenstein does not apply because $2 | 1$',
      'No, Eisenstein does not apply because $4 \\nmid 2$',
      'No, Eisenstein does not apply because $2^2 | 4$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Check: $2 \\nmid 1$ (leading coeff), $2 | 2, 4, 2$ (other coeffs), and $4 \\nmid 2$ (constant term). All conditions satisfied, so irreducible.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The polynomial $x^4 + 1$ over $\\mathbb{Q}$ is:',
    options: [
      'Irreducible (use substitution $x \\mapsto x+1$ then Eisenstein)',
      'Reducible',
      'Has a rational root',
      'Factors as $(x^2+1)^2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Substitute $x \\mapsto x+1$: $(x+1)^4 + 1 = x^4 + 4x^3 + 6x^2 + 4x + 2$. Eisenstein with $p=2$ applies (2 divides $4,6,4$ but not leading $1$, and $4 \\nmid 2$).',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Substitute $x \\mapsto x+1$: $(x+1)^4 + 1 = x^4 + 4x^3 + 6x^2 + 4x + 2$. Eisenstein with $p=2$ applies (2 divides $4,6,4$ but not leading $1$, and $4 \\nmid 2$).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A polynomial of degree $2$ or $3$ over a field $F$ is irreducible if and only if:',
    options: [
      'It is monic',
      'It has no roots in $F
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For degree $2$ or $3$, the only possible proper factorization involves a linear factor. So irreducibility is equivalent to having no roots in $F$.',
  },
      'Its discriminant is zero',
      'All coefficients are non-zero',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For degree $2$ or $3$, the only possible proper factorization involves a linear factor. So irreducibility is equivalent to having no roots in $F$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The polynomial $x^2 + x + 1$ over $\\mathbb{Z}_2$ is:',
    options: [
      'Reducible',
      'Has root $1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Check roots: $f(0) = 1 \\neq 0$, $f(1) = 1 + 1 + 1 = 1 \\neq 0$ in $\\mathbb{Z}_2$. No roots, so irreducible (degree 2).',
  },
      'Irreducible',
      'Has root $0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Check roots: $f(0) = 1 \\neq 0$, $f(1) = 1 + 1 + 1 = 1 \\neq 0$ in $\\mathbb{Z}_2$. No roots, so irreducible (degree 2).',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Check roots: $f(0) = 1 \\neq 0$, $f(1) = 1 + 1 + 1 = 1 \\neq 0$ in $\\mathbb{Z}_2$. No roots, so irreducible (degree 2).',
  },
];
