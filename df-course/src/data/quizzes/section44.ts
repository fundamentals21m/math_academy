import type { QuizQuestion } from './types';

export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $F$ is a field and $f(x) \\in F[x]$ has degree $n$, then $f$ has at most how many roots in $F$?',
    options: [
      '$1$',
      '$n-1$',
      '$n$',
      'Infinitely many'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A polynomial of degree $n$ over a field has at most $n$ roots (counting multiplicity). This follows from the factor theorem and degree considerations.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The division algorithm for $F[x]$ (where $F$ is a field) states that for $f, g \\in F[x]$ with $g \\neq 0$:',
    options: [
      'There exist unique $q, r$ with $f = gq + r$ and $\\deg(r) < \\deg(g)$ or $r = 0$',
      '$f$ is always divisible by $g$',
      'Division is not always possible',
      '$q$ and $r$ are not unique'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The division algorithm guarantees existence and uniqueness of quotient $q$ and remainder $r$ satisfying $f = gq + r$ with $\\deg(r) < \\deg(g)$ (or $r = 0$).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f(a) = 0$ for some $a \\in F$, then:',
    options: [
      '$f(x) = 0$',
      '$(x - a)$ divides $f(x)$',
      '$a$ is a unit in $F$',
      '$f$ is irreducible'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Factor Theorem states that $a$ is a root of $f(x)$ if and only if $(x - a)$ divides $f(x)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Dividing $x^3 - 2x + 1$ by $x - 1$ in $\\mathbb{Q}[x]$ gives remainder:',
    options: [
      '$0$',
      '$1$',
      '$-1$',
      '$2$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The remainder when dividing by $(x-1)$ equals $f(1) = 1 - 2 + 1 = 0$. So $(x-1)$ divides $x^3 - 2x + 1$ evenly.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In $\\mathbb{Z}_5[x]$, the polynomial $x^2 + 1$ has:',
    options: [
      'No roots in $\\mathbb{Z}_5$',
      'Exactly one root',
      'Two distinct roots: $2$ and $3$',
      'Five roots'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Check: $2^2 + 1 = 5 \\equiv 0 \\pmod{5}$ and $3^2 + 1 = 10 \\equiv 0 \\pmod{5}$. So $x^2 + 1 = (x-2)(x-3)$ in $\\mathbb{Z}_5[x]$.',
  },
];
