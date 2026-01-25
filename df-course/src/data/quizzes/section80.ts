import type { QuizQuestion } from './types';

export const section80Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The localization $S^{-1}R$ of a ring $R$ at a multiplicative set $S$ consists of:',
    options: [
      'Equivalence classes of fractions $r/s$ with $r \\in R$, $s \\in S
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$S^{-1}R$ consists of equivalence classes of fractions $r/s$ where $r \\in R$ and $s \\in S$, with $r_1/s_1 = r_2/s_2$ if $t(r_1 s_2 - r_2 s_1) = 0$ for some $t \\in S$.',
  },
      'Elements of $R$ divisible by elements of $S
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$S^{-1}R$ consists of equivalence classes of fractions $r/s$ where $r \\in R$ and $s \\in S$, with $r_1/s_1 = r_2/s_2$ if $t(r_1 s_2 - r_2 s_1) = 0$ for some $t \\in S$.',
  },
      'Elements of $R$ that are units',
      'The intersection $R \\cap S
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$S^{-1}R$ consists of equivalence classes of fractions $r/s$ where $r \\in R$ and $s \\in S$, with $r_1/s_1 = r_2/s_2$ if $t(r_1 s_2 - r_2 s_1) = 0$ for some $t \\in S$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$S^{-1}R$ consists of equivalence classes of fractions $r/s$ where $r \\in R$ and $s \\in S$, with $r_1/s_1 = r_2/s_2$ if $t(r_1 s_2 - r_2 s_1) = 0$ for some $t \\in S$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a prime ideal $P$ of $R$, the localization $R_P$ is defined as $S^{-1}R$ where:',
    options: [
      '$S = P
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'When $P$ is prime, $S = R \\setminus P$ is multiplicatively closed. The localization $R_P = (R \\setminus P)^{-1}R$ is a local ring with maximal ideal $PR_P$.',
  },
      '$S = \\{1\\}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When $P$ is prime, $S = R \\setminus P$ is multiplicatively closed. The localization $R_P = (R \\setminus P)^{-1}R$ is a local ring with maximal ideal $PR_P$.',
  },
      '$S = R^*$ (units of $R$)',
      '$S = R \\setminus P
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When $P$ is prime, $S = R \\setminus P$ is multiplicatively closed. The localization $R_P = (R \\setminus P)^{-1}R$ is a local ring with maximal ideal $PR_P$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When $P$ is prime, $S = R \\setminus P$ is multiplicatively closed. The localization $R_P = (R \\setminus P)^{-1}R$ is a local ring with maximal ideal $PR_P$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The localization $R_f$ for $f \\in R$ is $S^{-1}R$ where:',
    options: [
      '$S = \\{f\\}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$R_f$ is localization at the multiplicative set $S = \\{1, f, f^2, f^3, \\ldots\\}$. This inverts all powers of $f$, making $f$ a unit in $R_f$.',
  },
      '$S = R \\setminus (f)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$R_f$ is localization at the multiplicative set $S = \\{1, f, f^2, f^3, \\ldots\\}$. This inverts all powers of $f$, making $f$ a unit in $R_f$.',
  },
      '$S = \\{f^n : n \\geq 0\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$R_f$ is localization at the multiplicative set $S = \\{1, f, f^2, f^3, \\ldots\\}$. This inverts all powers of $f$, making $f$ a unit in $R_f$.',
  },
      '$S = (f)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$R_f$ is localization at the multiplicative set $S = \\{1, f, f^2, f^3, \\ldots\\}$. This inverts all powers of $f$, making $f$ a unit in $R_f$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$R_f$ is localization at the multiplicative set $S = \\{1, f, f^2, f^3, \\ldots\\}$. This inverts all powers of $f$, making $f$ a unit in $R_f$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The prime ideals of $R_P$ are in bijection with:',
    options: [
      'All prime ideals of $R
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Prime ideals of $S^{-1}R$ correspond bijectively to prime ideals of $R$ that are disjoint from $S$. For $R_P$ where $S = R \\setminus P$, these are exactly the primes contained in $P$.',
  },
      'Prime ideals of $R$ contained in $P
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Prime ideals of $S^{-1}R$ correspond bijectively to prime ideals of $R$ that are disjoint from $S$. For $R_P$ where $S = R \\setminus P$, these are exactly the primes contained in $P$.',
  },
      'Prime ideals of $R$ containing $P
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Prime ideals of $S^{-1}R$ correspond bijectively to prime ideals of $R$ that are disjoint from $S$. For $R_P$ where $S = R \\setminus P$, these are exactly the primes contained in $P$.',
  },
      'Maximal ideals of $R
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Prime ideals of $S^{-1}R$ correspond bijectively to prime ideals of $R$ that are disjoint from $S$. For $R_P$ where $S = R \\setminus P$, these are exactly the primes contained in $P$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Prime ideals of $S^{-1}R$ correspond bijectively to prime ideals of $R$ that are disjoint from $S$. For $R_P$ where $S = R \\setminus P$, these are exactly the primes contained in $P$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $R$ is an integral domain, then the localization $R_{(0)}$ at the zero ideal is:',
    options: [
      'The field of fractions of $R
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When $R$ is a domain, $(0)$ is prime and $R \\setminus (0) = R \\setminus \\{0\\}$ is all nonzero elements. Localizing at this set gives the field of fractions $\\text{Frac}(R)$.',
  },
      '$R$ itself',
      'The zero ring',
      'A local ring',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $R$ is a domain, $(0)$ is prime and $R \\setminus (0) = R \\setminus \\{0\\}$ is all nonzero elements. Localizing at this set gives the field of fractions $\\text{Frac}(R)$.',
  },
];
