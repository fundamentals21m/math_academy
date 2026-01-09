import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A group of order $56 = 2^3 \\cdot 7$ has Sylow $7$-subgroups. By Sylow theorems, how many Sylow $7$-subgroups can it have?',
    options: [
      'Only $1$',
      '$1$ or $8$',
      '$1$, $7$, or $8$',
      '$1$, $2$, $4$, or $8$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The number $n_7$ of Sylow $7$-subgroups must satisfy $n_7 \\equiv 1 \\pmod{7}$ and $n_7 \\mid 8$. The divisors of $8$ are $1, 2, 4, 8$, and only $1$ and $8$ satisfy $n_7 \\equiv 1 \\pmod{7}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If a group $G$ of order $pq$ (where $p < q$ are primes) has a unique Sylow $q$-subgroup, what can we conclude?',
    options: [
      '$G$ is simple',
      '$G$ has a normal subgroup of order $q$',
      '$G$ is abelian',
      '$G \\cong \\mathbb{Z}_p \\times \\mathbb{Z}_q$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A unique Sylow subgroup is always normal. So $G$ has a normal subgroup of order $q$. The group may or may not be abelian depending on whether $q \\equiv 1 \\pmod{p}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following groups is NOT simple?',
    options: [
      '$A_5$',
      '$\\mathbb{Z}_{15}$',
      '$\\mathbb{Z}_{17}$',
      '$\\text{PSL}_2(\\mathbb{F}_7)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}_{15}$ has order $15 = 3 \\cdot 5$ and has proper normal subgroups of orders $3$ and $5$. The others are simple: $A_5$ is the smallest non-abelian simple group, $\\mathbb{Z}_{17}$ is simple (prime order), and $\\text{PSL}_2(\\mathbb{F}_7)$ is a simple group of order $168$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For a group of order $36 = 2^2 \\cdot 3^2$, what are the possible values of $n_3$ (number of Sylow $3$-subgroups)?',
    options: [
      '$1$ only',
      '$1$ or $4$',
      '$1$, $2$, or $4$',
      '$1$, $3$, or $9$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'We need $n_3 \\equiv 1 \\pmod{3}$ and $n_3 \\mid 4$. The divisors of $4$ are $1, 2, 4$. Among these, $1$ and $4$ satisfy $n_3 \\equiv 1 \\pmod{3}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $G$ is a group of order $p^2q$ where $p$ and $q$ are distinct primes with $p^2 \\nmid (q-1)$ and $q \\nmid (p^2-1)$, then:',
    options: [
      '$G$ must be abelian',
      '$G$ has normal Sylow subgroups for both $p$ and $q$',
      '$G$ is simple',
      '$G$ has no proper normal subgroups'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The conditions imply $n_p = 1$ (since $n_p \\mid q$ and $n_p \\equiv 1 \\pmod{p}$, but $q \\not\\equiv 1 \\pmod{p}$) and similarly $n_q = 1$. Thus both Sylow subgroups are normal.',
  },
];
