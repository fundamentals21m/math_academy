import type { QuizQuestion } from './types';

export const section75Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To compute $\\text{Gal}(f)$ for $f \\in \\mathbb{Q}[x]$, which is NOT a standard technique?',
    options: [
      'Factor $f$ over $\\mathbb{R}$',
      'Compute the discriminant',
      'Reduce $f$ modulo various primes',
      'Check if $f$ is irreducible'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Irreducibility, the discriminant, and reduction mod $p$ are all useful for computing Galois groups. Factoring over $\\mathbb{R}$ only tells us about real vs. complex roots, not the full Galois structure.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f(x) \\in \\mathbb{Z}[x]$ is irreducible and $\\bar{f}(x) \\in \\mathbb{F}_p[x]$ factors as a product of irreducibles of degrees $d_1, \\ldots, d_k$, then $\\text{Gal}(f)$ contains:',
    options: [
      'A transposition',
      'The identity only',
      'An element with cycle type $(d_1, \\ldots, d_k)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the Frobenius-Dedekind theorem, if $f$ factors mod $p$ into irreducibles of degrees $d_1, \\ldots, d_k$, then $\\text{Gal}(f)$ contains an element with cycle type $(d_1, \\ldots, d_k)$.',
  },
      'An element of order $p
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the Frobenius-Dedekind theorem, if $f$ factors mod $p$ into irreducibles of degrees $d_1, \\ldots, d_k$, then $\\text{Gal}(f)$ contains an element with cycle type $(d_1, \\ldots, d_k)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the Frobenius-Dedekind theorem, if $f$ factors mod $p$ into irreducibles of degrees $d_1, \\ldots, d_k$, then $\\text{Gal}(f)$ contains an element with cycle type $(d_1, \\ldots, d_k)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The resolvent cubic of a quartic polynomial $f(x)$ is used to:',
    options: [
      'Find a root of $f
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The resolvent cubic of a quartic has roots related to sums of pairs of roots of the quartic. Analyzing the resolvent helps determine whether $\\text{Gal}(f)$ is $S_4$, $A_4$, $D_4$, $V_4$, or $\\mathbb{Z}/4\\mathbb{Z}$.',
  },
      'Compute the discriminant',
      'Test irreducibility',
      'Determine the structure of $\\text{Gal}(f)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The resolvent cubic of a quartic has roots related to sums of pairs of roots of the quartic. Analyzing the resolvent helps determine whether $\\text{Gal}(f)$ is $S_4$, $A_4$, $D_4$, $V_4$, or $\\mathbb{Z}/4\\mathbb{Z}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The resolvent cubic of a quartic has roots related to sums of pairs of roots of the quartic. Analyzing the resolvent helps determine whether $\\text{Gal}(f)$ is $S_4$, $A_4$, $D_4$, $V_4$, or $\\mathbb{Z}/4\\mathbb{Z}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For the quartic $f(x) = x^4 + x + 1$ over $\\mathbb{Q}$, which is true?',
    options: [
      '$f$ is reducible',
      '$\\text{Gal}(f) = S_4
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$f(x) = x^4 + x + 1$ is irreducible over $\\mathbb{Q}$ (check mod $2$: $x^4 + x + 1$ is irreducible over $\\mathbb{F}_2$). Its discriminant is $-283$, not a square, and the resolvent cubic analysis shows $\\text{Gal}(f) = S_4$.',
  },
      '$\\text{Gal}(f)$ is abelian',
      '$f$ has exactly two real roots',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$f(x) = x^4 + x + 1$ is irreducible over $\\mathbb{Q}$ (check mod $2$: $x^4 + x + 1$ is irreducible over $\\mathbb{F}_2$). Its discriminant is $-283$, not a square, and the resolvent cubic analysis shows $\\text{Gal}(f) = S_4$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If an irreducible polynomial $f \\in \\mathbb{Q}[x]$ of degree $n$ has Galois group $\\text{Gal}(f) = \\mathbb{Z}/n\\mathbb{Z}$, then the splitting field has degree:',
    options: [
      '$n$',
      '$n!$',
      '$2n$',
      '$\\phi(n)$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The degree of the splitting field equals $|\\text{Gal}(f)|$. If $\\text{Gal}(f) \\cong \\mathbb{Z}/n\\mathbb{Z}$, then the splitting field has degree $n$ over $\\mathbb{Q}$.',
  },
];
