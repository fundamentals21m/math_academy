import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To verify $H \\leq G$ using the one-step subgroup test, we check:',
    options: [
      '$ab \\in H$ for all $a, b \\in H
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The one-step test: $H \\neq \\emptyset$ and $ab^{-1} \\in H$ for all $a, b \\in H$.',
  },
      '$ab^{-1} \\in H$ for all $a, b \\in H
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The one-step test: $H \\neq \\emptyset$ and $ab^{-1} \\in H$ for all $a, b \\in H$.',
  },
      '$a^{-1} \\in H$ for all $a \\in H
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The one-step test: $H \\neq \\emptyset$ and $ab^{-1} \\in H$ for all $a, b \\in H$.',
  },
      '$e \\in H
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The one-step test: $H \\neq \\emptyset$ and $ab^{-1} \\in H$ for all $a, b \\in H$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The one-step test: $H \\neq \\emptyset$ and $ab^{-1} \\in H$ for all $a, b \\in H$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Every subgroup of a cyclic group is:',
    options: [
      'Finite',
      'Infinite',
      'Non-abelian',
      'Cyclic',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Every subgroup of a cyclic group is itself cyclic.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The subgroups of $(\\mathbb{Z}, +)$ have the form:',
    options: [
      '$\\{0\\}$ only',
      'All finite subsets',
      'There are no proper subgroups',
      '$n\\mathbb{Z}$ for $n \\geq 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Every subgroup of $\\mathbb{Z}$ is $n\\mathbb{Z} = \\{nk : k \\in \\mathbb{Z}\\}$ for some $n \\geq 0$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Every subgroup of $\\mathbb{Z}$ is $n\\mathbb{Z} = \\{nk : k \\in \\mathbb{Z}\\}$ for some $n \\geq 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: '$[a]$ generates $\\mathbb{Z}_n$ if and only if:',
    options: [
      '$\\gcd(a, n) = 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$[a]$ generates $\\mathbb{Z}_n$ exactly when $\\gcd(a, n) = 1$.',
  },
      '$a$ divides $n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$[a]$ generates $\\mathbb{Z}_n$ exactly when $\\gcd(a, n) = 1$.',
  },
      '$a = 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$[a]$ generates $\\mathbb{Z}_n$ exactly when $\\gcd(a, n) = 1$.',
  },
      '$a$ is prime',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$[a]$ generates $\\mathbb{Z}_n$ exactly when $\\gcd(a, n) = 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The number of generators of $\\mathbb{Z}_8$ is:',
    options: [
      '2',
      '8',
      '4',
      '1',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The number of generators is $\\phi(8) = 4$. They are $[1], [3], [5], [7]$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $|g| = 12$, then $|g^4| = $',
    options: [
      '4',
      '3',
      '8',
      '12',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$|g^k| = n/\\gcd(k, n)$ where $|g| = n$. So $|g^4| = 12/\\gcd(4, 12) = 12/4 = 3$.',
  },
];
