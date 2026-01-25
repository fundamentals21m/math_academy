import type { QuizQuestion } from './types';

export const section74Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An extension $E/F$ is a radical extension if:',
    options: [
      '$E = F(\\alpha)$ for some algebraic $\\alpha
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A radical extension is one of the form $F = F_0 \\subset F_1 \\subset \\cdots \\subset F_n = E$ where each $F_{i+1} = F_i(\\alpha_i)$ with $\\alpha_i^{n_i} \\in F_i$ for some positive integer $n_i$.',
  },
      '$E$ is obtained by adjoining a sequence of $n$-th roots',
      '$[E:F]$ is a prime number',
      '$\\text{Gal}(E/F)$ is cyclic',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A radical extension is one of the form $F = F_0 \\subset F_1 \\subset \\cdots \\subset F_n = E$ where each $F_{i+1} = F_i(\\alpha_i)$ with $\\alpha_i^{n_i} \\in F_i$ for some positive integer $n_i$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A polynomial $f(x) \\in F[x]$ is solvable by radicals if:',
    options: [
      'Its Galois group is abelian',
      'Its degree is less than $5
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A polynomial is solvable by radicals if its roots can be expressed using the field operations and $n$-th roots, which means the roots lie in a radical extension.',
  },
      'It has a rational root',
      'Its roots lie in some radical extension of $F
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A polynomial is solvable by radicals if its roots can be expressed using the field operations and $n$-th roots, which means the roots lie in a radical extension.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A polynomial is solvable by radicals if its roots can be expressed using the field operations and $n$-th roots, which means the roots lie in a radical extension.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The general quintic polynomial is not solvable by radicals because:',
    options: [
      'Its Galois group can be $S_5$, which is not solvable',
      'Its degree is too high',
      'It always has complex roots',
      'The discriminant is too complicated',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A polynomial is solvable by radicals if and only if its Galois group is a solvable group. The symmetric group $S_5$ is not solvable (its only normal subgroup is $A_5$, which is simple and non-abelian).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which statement about solvable groups is TRUE?',
    options: [
      'Every group of order $< 60$ is solvable',
      'Every abelian group is solvable',
      'Both A and B',
      '$S_4$ is not solvable'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Abelian groups are solvable (with trivial derived series). $A_5$ is the smallest non-abelian simple group (order $60$), so every group of order $< 60$ is solvable. $S_4$ is solvable with composition series involving $A_4$, the Klein four-group, etc.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The polynomial $f(x) = x^5 - 4x + 2$ over $\\mathbb{Q}$:',
    options: [
      'Is not solvable by radicals; one can show $\\text{Gal}(f) = S_5
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'By Eisenstein with $p = 2$, $f$ is irreducible. Analysis shows $f$ has exactly $3$ real roots. Complex conjugation gives a transposition in $\\text{Gal}(f)$. Irreducibility gives a $5$-cycle. Thus $\\text{Gal}(f) = S_5$, which is not solvable.',
  },
      'Is solvable by radicals because its degree is $5
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'By Eisenstein with $p = 2$, $f$ is irreducible. Analysis shows $f$ has exactly $3$ real roots. Complex conjugation gives a transposition in $\\text{Gal}(f)$. Irreducibility gives a $5$-cycle. Thus $\\text{Gal}(f) = S_5$, which is not solvable.',
  },
      'Has Galois group $A_5
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'By Eisenstein with $p = 2$, $f$ is irreducible. Analysis shows $f$ has exactly $3$ real roots. Complex conjugation gives a transposition in $\\text{Gal}(f)$. Irreducibility gives a $5$-cycle. Thus $\\text{Gal}(f) = S_5$, which is not solvable.',
  },
      'Is solvable by radicals because it has a rational root',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'By Eisenstein with $p = 2$, $f$ is irreducible. Analysis shows $f$ has exactly $3$ real roots. Complex conjugation gives a transposition in $\\text{Gal}(f)$. Irreducibility gives a $5$-cycle. Thus $\\text{Gal}(f) = S_5$, which is not solvable.',
  },
];
