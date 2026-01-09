import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "Sylow's First Theorem states that if $p^k$ divides $|G|$ where $p$ is prime, then:",
    options: [
      '$G$ has exactly one subgroup of order $p^k$',
      '$G$ has a subgroup of order $p^k$',
      '$G$ is a $p$-group',
      '$G$ has $p^k$ subgroups'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: "Sylow's First Theorem: If $p^k | |G|$, then $G$ has a subgroup of order $p^k$.",
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A Sylow $p$-subgroup of $G$ is:',
    options: [
      'Any subgroup of order $p$',
      'A maximal $p$-subgroup (subgroup of order $p^n$ where $p^n || |G|$)',
      'The unique subgroup of order $p$',
      'A normal subgroup of order $p^k$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A Sylow $p$-subgroup has order $p^n$ where $p^n$ is the highest power of $p$ dividing $|G|$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "Sylow's Second Theorem states that all Sylow $p$-subgroups are:",
    options: [
      'Normal',
      'Conjugate to each other',
      'Abelian',
      'Cyclic'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: "Sylow's Second Theorem: Any two Sylow $p$-subgroups are conjugate in $G$.",
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: "Sylow's Third Theorem states that $n_p$ (the number of Sylow $p$-subgroups) satisfies:",
    options: [
      '$n_p | |G|$ only',
      '$n_p \\equiv 1 \\pmod{p}$ only',
      '$n_p | m$ and $n_p \\equiv 1 \\pmod{p}$ where $|G| = p^n m$ with $\\gcd(p, m) = 1$',
      '$n_p = 1$ always'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: "Sylow's Third: $n_p \\equiv 1 \\pmod{p}$ and $n_p$ divides $[G : P]$ where $P$ is a Sylow $p$-subgroup.",
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A Sylow $p$-subgroup $P$ is normal in $G$ if and only if:',
    options: [
      '$P$ is abelian',
      '$n_p = 1$',
      '$p$ divides $|Z(G)|$',
      '$G$ is abelian'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since Sylow $p$-subgroups are conjugate, $P$ is normal iff it is the unique Sylow $p$-subgroup, i.e., $n_p = 1$.',
  },
];
