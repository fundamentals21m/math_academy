import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "Sylow's First Theorem states that if $p^k$ divides $|G|$ where $p$ is prime, then:",
    options: [
      '$G$ has exactly one subgroup of order $p^k
    correctIndex: 2,
    difficulty: 'medium',
    explanation: "Sylow's First Theorem: If $p^k | |G|$, then $G$ has a subgroup of order $p^k$.",
  },
      '$G$ has $p^k$ subgroups',
      '$G$ has a subgroup of order $p^k
    correctIndex: 3,
    difficulty: 'medium',
    explanation: "Sylow's First Theorem: If $p^k | |G|$, then $G$ has a subgroup of order $p^k$.",
  },
      '$G$ is a $p$-group',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: "Sylow's First Theorem: If $p^k | |G|$, then $G$ has a subgroup of order $p^k$.",
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A Sylow $p$-subgroup of $G$ is:',
    options: [
      'Any subgroup of order $p
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A Sylow $p$-subgroup has order $p^n$ where $p^n$ is the highest power of $p$ dividing $|G|$.',
  },
      'The unique subgroup of order $p
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A Sylow $p$-subgroup has order $p^n$ where $p^n$ is the highest power of $p$ dividing $|G|$.',
  },
      'A maximal $p$-subgroup (subgroup of order $p^n$ where $p^n || |G|$)',
      'A normal subgroup of order $p^k
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A Sylow $p$-subgroup has order $p^n$ where $p^n$ is the highest power of $p$ dividing $|G|$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A Sylow $p$-subgroup has order $p^n$ where $p^n$ is the highest power of $p$ dividing $|G|$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "Sylow's Second Theorem states that all Sylow $p$-subgroups are:",
    options: [
      'Conjugate to each other',
      'Normal',
      'Abelian',
      'Cyclic',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: "Sylow's Second Theorem: Any two Sylow $p$-subgroups are conjugate in $G$.",
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: "Sylow's Third Theorem states that $n_p$ (the number of Sylow $p$-subgroups) satisfies:",
    options: [
      '$n_p | |G|$ only',
      '$n_p | m$ and $n_p \\equiv 1 \\pmod{p}$ where $|G| = p^n m$ with $\\gcd(p, m) = 1
    correctIndex: 1,
    difficulty: 'hard',
    explanation: "Sylow's Third: $n_p \\equiv 1 \\pmod{p}$ and $n_p$ divides $[G : P]$ where $P$ is a Sylow $p$-subgroup.",
  },
      '$n_p \\equiv 1 \\pmod{p}$ only',
      '$n_p = 1$ always',
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
      '$G$ is abelian',
      '$p$ divides $|Z(G)|$',
      '$n_p = 1$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since Sylow $p$-subgroups are conjugate, $P$ is normal iff it is the unique Sylow $p$-subgroup, i.e., $n_p = 1$.',
  },
];
