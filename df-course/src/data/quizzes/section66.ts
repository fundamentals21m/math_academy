import type { QuizQuestion } from './types';

export const section66Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An algebraic element $\\alpha$ over $F$ is separable if:',
    options: [
      '$[F(\\alpha):F]$ is prime',
      'Its minimal polynomial has no repeated roots in any extension',
      'Its minimal polynomial has integer coefficients',
      'It generates a normal extension',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An element is separable over $F$ if its minimal polynomial over $F$ has distinct roots in an algebraic closure. Equivalently, the minimal polynomial and its derivative are coprime.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Over a field of characteristic $0$, every algebraic extension is:',
    options: [
      'Separable',
      'Inseparable',
      'Normal',
      'Galois'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In characteristic $0$, every irreducible polynomial is separable because if $f$ has a repeated root, then $\\gcd(f, f\') \\neq 1$, but $\\deg(f\') = \\deg(f) - 1$ and $f\' \\neq 0$, forcing $f$ reducible.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In characteristic $p > 0$, the polynomial $x^p - a$ where $a \\notin F^p$ is:',
    options: [
      'Separable and irreducible',
      'Separable but reducible',
      'Inseparable but irreducible',
      'Inseparable and reducible',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If $a \\notin F^p$, then $x^p - a$ is irreducible over $F$. However, in the algebraic closure, $x^p - a = (x - \\alpha)^p$ where $\\alpha^p = a$, so it has $\\alpha$ as a $p$-fold repeated root. Thus it is inseparable.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A finite field $\\mathbb{F}_q$ is:',
    options: [
      'Never a perfect field',
      'Perfect only if $q$ is prime',
      'Always a perfect field',
      'Perfect only if $q$ is a power of $2$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A field is perfect if every algebraic extension is separable. Finite fields are perfect because the Frobenius map $x \\mapsto x^p$ is surjective (hence bijective) on a finite field, so every element is a $p$-th power.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The separable degree $[E:F]_s$ of a finite extension $E/F$ satisfies:',
    options: [
      '$[E:F]_s = [E:F]$ always',
      '$[E:F]_s = 1$ always',
      '$[E:F]$ divides $[E:F]_s$',
      '$[E:F]_s$ divides $[E:F]$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The separable degree counts the number of $F$-embeddings of $E$ into an algebraic closure. We have $[E:F] = [E:F]_s \\cdot [E:F]_i$ where $[E:F]_i$ is the inseparable degree, so $[E:F]_s$ divides $[E:F]$.',
  },
];
