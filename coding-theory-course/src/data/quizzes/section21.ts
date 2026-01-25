import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The group algebra $\\mathbb{F}_q[G]$ for a finite group $G$ consists of:',
    options: [
      'Formal linear combinations $\\sum_{g \\in G} a_g g$ with $a_g \\in \\mathbb{F}_q
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The group algebra $\\mathbb{F}_q[G]$ consists of formal linear combinations $\\sum_{g \\in G} a_g g$ where $a_g \\in \\mathbb{F}_q$, with multiplication extending the group operation linearly.',
  },
      'All functions from $G$ to $\\mathbb{F}_q
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The group algebra $\\mathbb{F}_q[G]$ consists of formal linear combinations $\\sum_{g \\in G} a_g g$ where $a_g \\in \\mathbb{F}_q$, with multiplication extending the group operation linearly.',
  },
      'All group homomorphisms from $G$ to $\\mathbb{F}_q^*
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The group algebra $\\mathbb{F}_q[G]$ consists of formal linear combinations $\\sum_{g \\in G} a_g g$ where $a_g \\in \\mathbb{F}_q$, with multiplication extending the group operation linearly.',
  },
      'The quotient $\\mathbb{F}_q / G
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The group algebra $\\mathbb{F}_q[G]$ consists of formal linear combinations $\\sum_{g \\in G} a_g g$ where $a_g \\in \\mathbb{F}_q$, with multiplication extending the group operation linearly.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The group algebra $\\mathbb{F}_q[G]$ consists of formal linear combinations $\\sum_{g \\in G} a_g g$ where $a_g \\in \\mathbb{F}_q$, with multiplication extending the group operation linearly.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For $G = \\mathbb{Z}_n$ (cyclic group of order $n$), the group algebra $\\mathbb{F}_q[\\mathbb{Z}_n]$ is isomorphic to:',
    options: [
      '$\\mathbb{F}_q^n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The group algebra $\\mathbb{F}_q[\\mathbb{Z}_n] \\cong \\mathbb{F}_q[x]/(x^n - 1)$ where the generator of $\\mathbb{Z}_n$ maps to $x$. This shows cyclic codes are ideals in a group algebra.',
  },
      '$\\mathbb{F}_q[x]/(x^n - 1)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The group algebra $\\mathbb{F}_q[\\mathbb{Z}_n] \\cong \\mathbb{F}_q[x]/(x^n - 1)$ where the generator of $\\mathbb{Z}_n$ maps to $x$. This shows cyclic codes are ideals in a group algebra.',
  },
      '$\\mathbb{F}_q[x]/(x^n)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The group algebra $\\mathbb{F}_q[\\mathbb{Z}_n] \\cong \\mathbb{F}_q[x]/(x^n - 1)$ where the generator of $\\mathbb{Z}_n$ maps to $x$. This shows cyclic codes are ideals in a group algebra.',
  },
      '$\\mathbb{F}_{q^n}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The group algebra $\\mathbb{F}_q[\\mathbb{Z}_n] \\cong \\mathbb{F}_q[x]/(x^n - 1)$ where the generator of $\\mathbb{Z}_n$ maps to $x$. This shows cyclic codes are ideals in a group algebra.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The group algebra $\\mathbb{F}_q[\\mathbb{Z}_n] \\cong \\mathbb{F}_q[x]/(x^n - 1)$ where the generator of $\\mathbb{Z}_n$ maps to $x$. This shows cyclic codes are ideals in a group algebra.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Cyclic codes of length $n$ over $\\mathbb{F}_q$ correspond to:',
    options: [
      'Subgroups of $(\\mathbb{F}_q[x]/(x^n-1))^*$',
      'Prime ideals in $\\mathbb{F}_q[x]$',
      'Automorphisms of $\\mathbb{F}_q[x]$',
      'Ideals in $\\mathbb{F}_q[\\mathbb{Z}_n]$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Cyclic codes are precisely the ideals in the group algebra $\\mathbb{F}_q[\\mathbb{Z}_n] \\cong \\mathbb{F}_q[x]/(x^n-1)$. This algebraic perspective unifies the theory.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is the dimension of the group algebra $\\mathbb{F}_2[\\mathbb{Z}_7]$ as an $\\mathbb{F}_2$-vector space?',
    correctAnswer: 7,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: 'As a vector space, $\\mathbb{F}_q[G]$ has dimension $|G|$. Here $\\dim_{\\mathbb{F}_2}(\\mathbb{F}_2[\\mathbb{Z}_7]) = |\\mathbb{Z}_7| = 7$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When $\\gcd(n, q) = 1$, the group algebra $\\mathbb{F}_q[\\mathbb{Z}_n]$ is semisimple, meaning it decomposes as:',
    options: [
      'A direct sum of matrix algebras',
      'A direct product of fields',
      'A polynomial ring',
      'A local ring',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By Maschke\'s theorem and the CRT, when $\\gcd(n,q)=1$, we have $\\mathbb{F}_q[x]/(x^n-1) \\cong \\prod_i \\mathbb{F}_{q^{d_i}}$, a direct product of extension fields.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The view of cyclic codes as ideals in group algebras generalizes to:',
    options: [
      'Any finite group',
      'Only cyclic groups',
      'Only abelian groups',
      'Only simple groups',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Group codes can be defined as ideals in $\\mathbb{F}_q[G]$ for any finite group $G$. This generalizes cyclic codes (where $G = \\mathbb{Z}_n$) to a broader class of codes.',
  },
];
