import type { QuizQuestion } from './types';

export const section73Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f(x) \\in F[x]$ has degree $n$ and splitting field $E$, then $\\text{Gal}(E/F)$ is:',
    options: [
      'Always isomorphic to $S_n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Galois group permutes the $n$ roots of $f$, so it embeds into $S_n$. It equals $S_n$ only if $f$ is "generic" enough.',
  },
      'Isomorphic to $\\mathbb{Z}/n\\mathbb{Z}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Galois group permutes the $n$ roots of $f$, so it embeds into $S_n$. It equals $S_n$ only if $f$ is "generic" enough.',
  },
      'Always abelian',
      'A subgroup of $S_n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Galois group permutes the $n$ roots of $f$, so it embeds into $S_n$. It equals $S_n$ only if $f$ is "generic" enough.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Galois group permutes the $n$ roots of $f$, so it embeds into $S_n$. It equals $S_n$ only if $f$ is "generic" enough.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The discriminant $\\Delta$ of a polynomial is useful because:',
    options: [
      '$\\text{Gal}(f) \\subseteq A_n$ if and only if $\\Delta$ is a perfect square in $F
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The discriminant $\\Delta = \\prod_{i < j}(\\alpha_i - \\alpha_j)^2$. Since $\\sqrt{\\Delta} = \\prod_{i < j}(\\alpha_i - \\alpha_j)$ changes sign under odd permutations, $\\text{Gal}(f) \\subseteq A_n$ if and only if $\\sqrt{\\Delta} \\in F$.',
  },
      '$\\Delta$ equals the product of the roots',
      '$\\Delta = 0$ if and only if $f$ is irreducible',
      '$\\Delta$ determines the degree of the splitting field',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The discriminant $\\Delta = \\prod_{i < j}(\\alpha_i - \\alpha_j)^2$. Since $\\sqrt{\\Delta} = \\prod_{i < j}(\\alpha_i - \\alpha_j)$ changes sign under odd permutations, $\\text{Gal}(f) \\subseteq A_n$ if and only if $\\sqrt{\\Delta} \\in F$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For an irreducible cubic $f(x) \\in \\mathbb{Q}[x]$, the Galois group is:',
    options: [
      'Always $S_3
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For an irreducible cubic, the Galois group is a transitive subgroup of $S_3$, hence $S_3$ or $A_3$. It is $A_3$ if and only if the discriminant is a perfect square in $\\mathbb{Q}$.',
  },
      '$A_3 \\cong \\mathbb{Z}/3\\mathbb{Z}$ if discriminant is a square, otherwise $S_3
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For an irreducible cubic, the Galois group is a transitive subgroup of $S_3$, hence $S_3$ or $A_3$. It is $A_3$ if and only if the discriminant is a perfect square in $\\mathbb{Q}$.',
  },
      'Always $A_3
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For an irreducible cubic, the Galois group is a transitive subgroup of $S_3$, hence $S_3$ or $A_3$. It is $A_3$ if and only if the discriminant is a perfect square in $\\mathbb{Q}$.',
  },
      'Either $\\mathbb{Z}/3\\mathbb{Z}$ or $\\mathbb{Z}/2\\mathbb{Z}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For an irreducible cubic, the Galois group is a transitive subgroup of $S_3$, hence $S_3$ or $A_3$. It is $A_3$ if and only if the discriminant is a perfect square in $\\mathbb{Q}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For an irreducible cubic, the Galois group is a transitive subgroup of $S_3$, hence $S_3$ or $A_3$. It is $A_3$ if and only if the discriminant is a perfect square in $\\mathbb{Q}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Galois group of $f(x) = x^3 - 2$ over $\\mathbb{Q}$ is:',
    options: [
      '$\\mathbb{Z}/3\\mathbb{Z}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The discriminant of $x^3 - 2$ is $-108 = -4 \\cdot 27$, which is not a perfect square in $\\mathbb{Q}$. Since $f$ is irreducible, its Galois group is $S_3$.',
  },
      '$\\mathbb{Z}/6\\mathbb{Z}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The discriminant of $x^3 - 2$ is $-108 = -4 \\cdot 27$, which is not a perfect square in $\\mathbb{Q}$. Since $f$ is irreducible, its Galois group is $S_3$.',
  },
      '$A_3
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The discriminant of $x^3 - 2$ is $-108 = -4 \\cdot 27$, which is not a perfect square in $\\mathbb{Q}$. Since $f$ is irreducible, its Galois group is $S_3$.',
  },
      '$S_3
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The discriminant of $x^3 - 2$ is $-108 = -4 \\cdot 27$, which is not a perfect square in $\\mathbb{Q}$. Since $f$ is irreducible, its Galois group is $S_3$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The discriminant of $x^3 - 2$ is $-108 = -4 \\cdot 27$, which is not a perfect square in $\\mathbb{Q}$. Since $f$ is irreducible, its Galois group is $S_3$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To show that a polynomial $f(x) \\in \\mathbb{Q}[x]$ of degree $5$ has Galois group $S_5$, it suffices to show:',
    options: [
      '$f$ is irreducible',
      '$f$ is irreducible and has exactly two non-real roots',
      '$f$ has five distinct roots',
      '$f$ is monic',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If $f$ is irreducible of degree $5$, then $\\text{Gal}(f)$ is a transitive subgroup of $S_5$, so contains a $5$-cycle. Having exactly $2$ non-real roots means complex conjugation restricts to a transposition. A transitive subgroup of $S_5$ containing a $5$-cycle and a transposition must be all of $S_5$.',
  },
];
