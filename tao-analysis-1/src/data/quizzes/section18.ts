import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For real numbers represented by Cauchy sequences $[(a_n)]$ and $[(b_n)]$, we define $[(a_n)] > [(b_n)]$ if:',
    options: [
      '$a_n > b_n$ for all $n
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'We say $[(a_n)] > [(b_n)]$ if the sequence $(a_n - b_n)$ is eventually bounded away from zero from below: there exist $c > 0$ and $N$ such that $a_n - b_n \\geq c$ for all $n \\geq N$.',
  },
      '$a_1 > b_1
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'We say $[(a_n)] > [(b_n)]$ if the sequence $(a_n - b_n)$ is eventually bounded away from zero from below: there exist $c > 0$ and $N$ such that $a_n - b_n \\geq c$ for all $n \\geq N$.',
  },
      'There exists $c > 0$ and $N$ such that $a_n - b_n \\geq c$ for all $n \\geq N
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'We say $[(a_n)] > [(b_n)]$ if the sequence $(a_n - b_n)$ is eventually bounded away from zero from below: there exist $c > 0$ and $N$ such that $a_n - b_n \\geq c$ for all $n \\geq N$.',
  },
      '$\\lim(a_n - b_n) > 0
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'We say $[(a_n)] > [(b_n)]$ if the sequence $(a_n - b_n)$ is eventually bounded away from zero from below: there exist $c > 0$ and $N$ such that $a_n - b_n \\geq c$ for all $n \\geq N$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'We say $[(a_n)] > [(b_n)]$ if the sequence $(a_n - b_n)$ is eventually bounded away from zero from below: there exist $c > 0$ and $N$ such that $a_n - b_n \\geq c$ for all $n \\geq N$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The ordering on $\\mathbb{R}$ (constructed via Cauchy sequences) is:',
    options: [
      'A total order (trichotomy holds)',
      'A partial order only',
      'Not transitive',
      'Dependent on the choice of representative sequences'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The ordering is a total order: for any two reals $x, y$, exactly one of $x < y$, $x = y$, or $x > y$ holds. This trichotomy is essential for analysis.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $x > 0$ in $\\mathbb{R}$ (where $x = [(a_n)]$), then:',
    options: [
      '$a_n > 0$ for all $n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A positive real means its representative sequence is eventually bounded away from zero: there exist $c > 0$ and $N$ such that $a_n \\geq c$ for $n \\geq N$.',
  },
      '$a_1 > 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A positive real means its representative sequence is eventually bounded away from zero: there exist $c > 0$ and $N$ such that $a_n \\geq c$ for $n \\geq N$.',
  },
      'There exists $N$ and $c > 0$ such that $a_n \\geq c$ for all $n \\geq N
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A positive real means its representative sequence is eventually bounded away from zero: there exist $c > 0$ and $N$ such that $a_n \\geq c$ for $n \\geq N$.',
  },
      'The sequence $(a_n)$ is increasing',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A positive real means its representative sequence is eventually bounded away from zero: there exist $c > 0$ and $N$ such that $a_n \\geq c$ for $n \\geq N$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The property "$x \\leq y$ and $y \\leq x$ implies $x = y$" is called:',
    options: [
      'Transitivity',
      'Antisymmetry',
      'Reflexivity',
      'Trichotomy',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Antisymmetry states that if $x \\leq y$ and $y \\leq x$, then $x = y$. This is one of the defining properties of a partial (and total) order.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Between any two distinct real numbers $x < y$, there exists:',
    options: [
      'No other real number',
      'Exactly one rational number',
      'Only irrational numbers',
      'Infinitely many rational numbers'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The rationals are dense in the reals: between any two distinct reals $x < y$, there are infinitely many rationals $q$ with $x < q < y$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $a_n = 3 - 1/n$ and $b_n = 2 + 1/n$, for what minimum value of $n$ is $a_n - b_n > 0.5$?',
    correctAnswer: 5,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$a_n - b_n = (3 - 1/n) - (2 + 1/n) = 1 - 2/n$. We need $1 - 2/n > 0.5$, i.e., $2/n < 0.5$, so $n > 4$. The minimum integer is $n = 5$. Check: $1 - 2/5 = 0.6 > 0.5$.',
  },
];
