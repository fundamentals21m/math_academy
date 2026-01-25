import type { QuizQuestion } from './types';

export const section89Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The group ring $kG$ for a field $k$ and group $G$ consists of:',
    options: [
      'Polynomials in elements of $G
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$kG = \\{\\sum_{g \\in G} a_g g : a_g \\in k, \\text{ finitely many } a_g \\neq 0\\}$ with multiplication extending $(ag)(bh) = ab(gh)$ linearly.',
  },
      'Formal finite $k$-linear combinations of elements of $G
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$kG = \\{\\sum_{g \\in G} a_g g : a_g \\in k, \\text{ finitely many } a_g \\neq 0\\}$ with multiplication extending $(ag)(bh) = ab(gh)$ linearly.',
  },
      'Functions from $G$ to $k
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$kG = \\{\\sum_{g \\in G} a_g g : a_g \\in k, \\text{ finitely many } a_g \\neq 0\\}$ with multiplication extending $(ag)(bh) = ab(gh)$ linearly.',
  },
      'Matrices over $k
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$kG = \\{\\sum_{g \\in G} a_g g : a_g \\in k, \\text{ finitely many } a_g \\neq 0\\}$ with multiplication extending $(ag)(bh) = ab(gh)$ linearly.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$kG = \\{\\sum_{g \\in G} a_g g : a_g \\in k, \\text{ finitely many } a_g \\neq 0\\}$ with multiplication extending $(ag)(bh) = ab(gh)$ linearly.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A $kG$-module is the same as:',
    options: [
      'A $k$-vector space',
      'A group homomorphism $G \\to k^*
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A $kG$-module is a $k$-vector space $V$ with a $G$-action by $k$-linear maps. This is precisely a representation of $G$ over $k$.',
  },
      'A $k$-vector space with a $k$-linear $G$-action (representation)',
      'A subgroup of $G
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A $kG$-module is a $k$-vector space $V$ with a $G$-action by $k$-linear maps. This is precisely a representation of $G$ over $k$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A $kG$-module is a $k$-vector space $V$ with a $G$-action by $k$-linear maps. This is precisely a representation of $G$ over $k$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The group ring $\\mathbb{C}G$ for a finite group $G$ is:',
    options: [
      'Always an integral domain',
      'Always a field',
      'Always commutative',
      'Semisimple (a product of matrix rings)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Maschke\'s theorem, $\\mathbb{C}G$ is semisimple when $G$ is finite. By Wedderburn, it decomposes as a product of matrix rings over $\\mathbb{C}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The dimension of $kG$ as a $k$-vector space equals:',
    options: [
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The elements of $G$ form a $k$-basis for $kG$, so $\\dim_k(kG) = |G|$. For infinite $G$, $kG$ is infinite-dimensional.',
  },
      '$|G|^2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The elements of $G$ form a $k$-basis for $kG$, so $\\dim_k(kG) = |G|$. For infinite $G$, $kG$ is infinite-dimensional.',
  },
      '$|G|
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The elements of $G$ form a $k$-basis for $kG$, so $\\dim_k(kG) = |G|$. For infinite $G$, $kG$ is infinite-dimensional.',
  },
      '$\\infty$ always',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The elements of $G$ form a $k$-basis for $kG$, so $\\dim_k(kG) = |G|$. For infinite $G$, $kG$ is infinite-dimensional.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Maschke\'s theorem states that $kG$ is semisimple if:',
    options: [
      '$k$ has characteristic $0$ or $\\text{char}(k) \\nmid |G|
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Maschke\'s theorem: If $G$ is finite and $\\text{char}(k)$ does not divide $|G|$, then $kG$ is semisimple. The condition ensures we can average to find complements.',
  },
      '$G$ is abelian',
      '$G$ is cyclic',
      '$k$ is algebraically closed',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Maschke\'s theorem: If $G$ is finite and $\\text{char}(k)$ does not divide $|G|$, then $kG$ is semisimple. The condition ensures we can average to find complements.',
  },
];
