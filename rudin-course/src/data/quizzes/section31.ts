import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A discontinuity at $x = c$ is called a discontinuity of the first kind (simple discontinuity) if:',
    options: [
      'The function is unbounded near $c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A simple discontinuity (first kind) occurs when both one-sided limits exist and are finite. This includes jump discontinuities (where $f(c^+) \\neq f(c^-)$) and removable discontinuities (where $f(c^+) = f(c^-) \\neq f(c)$).',
  },
      'The limit $\\lim_{x \\to c} f(x)$ exists but differs from $f(c)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A simple discontinuity (first kind) occurs when both one-sided limits exist and are finite. This includes jump discontinuities (where $f(c^+) \\neq f(c^-)$) and removable discontinuities (where $f(c^+) = f(c^-) \\neq f(c)$).',
  },
      'Both one-sided limits $f(c^+)$ and $f(c^-)$ exist and are finite',
      'The function oscillates infinitely near $c
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A simple discontinuity (first kind) occurs when both one-sided limits exist and are finite. This includes jump discontinuities (where $f(c^+) \\neq f(c^-)$) and removable discontinuities (where $f(c^+) = f(c^-) \\neq f(c)$).',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A simple discontinuity (first kind) occurs when both one-sided limits exist and are finite. This includes jump discontinuities (where $f(c^+) \\neq f(c^-)$) and removable discontinuities (where $f(c^+) = f(c^-) \\neq f(c)$).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The function $f(x) = \\sin(1/x)$ for $x \\neq 0$ has what type of discontinuity at $x = 0$?',
    options: [
      'Jump discontinuity',
      'Removable discontinuity',
      'Discontinuity of the second kind',
      'No discontinuity (can be made continuous)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'As $x \\to 0$, $\\sin(1/x)$ oscillates between $-1$ and $1$ infinitely often, so neither $\\lim_{x \\to 0^+}$ nor $\\lim_{x \\to 0^-}$ exists. This is a discontinuity of the second kind.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f$ has a jump discontinuity at $c$, which statement is true?',
    options: [
      '$f$ is unbounded in every neighborhood of $c
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A jump discontinuity is characterized by both one-sided limits existing but being unequal: $f(c^+) \\neq f(c^-)$. The "jump" is the difference $f(c^+) - f(c^-)$.',
  },
      'The discontinuity can be removed by redefining $f(c)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A jump discontinuity is characterized by both one-sided limits existing but being unequal: $f(c^+) \\neq f(c^-)$. The "jump" is the difference $f(c^+) - f(c^-)$.',
  },
      '$f(c^+) - f(c^-) = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A jump discontinuity is characterized by both one-sided limits existing but being unequal: $f(c^+) \\neq f(c^-)$. The "jump" is the difference $f(c^+) - f(c^-)$.',
  },
      '$f(c^+)$ and $f(c^-)$ both exist but $f(c^+) \\neq f(c^-)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A jump discontinuity is characterized by both one-sided limits existing but being unequal: $f(c^+) \\neq f(c^-)$. The "jump" is the difference $f(c^+) - f(c^-)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A jump discontinuity is characterized by both one-sided limits existing but being unequal: $f(c^+) \\neq f(c^-)$. The "jump" is the difference $f(c^+) - f(c^-)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A monotonic function $f: (a, b) \\to \\mathbb{R}$ can have:',
    options: [
      'Only finitely many discontinuities',
      'Uncountably many discontinuities',
      'Discontinuities of the second kind',
      'At most countably many discontinuities, all of the first kind',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Theorem 4.30 in Rudin: Monotonic functions have only discontinuities of the first kind (jumps), and the set of discontinuities is at most countable. This follows because each jump corresponds to a disjoint interval in the range, and $\\mathbb{R}$ has only countably many disjoint intervals of positive length.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Consider $f(x) = \\begin{cases} x & x \\in \\mathbb{Q} \\\\ 0 & x \\notin \\mathbb{Q} \\end{cases}$. At which points is $f$ continuous?',
    options: [
      'Only at $x = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'At $x = 0$: for any sequence $x_n \\to 0$, we have $|f(x_n)| \\leq |x_n| \\to 0$, so $f$ is continuous at $0$. At any $c \\neq 0$: if $c \\in \\mathbb{Q}$, take irrationals $x_n \\to c$, then $f(x_n) = 0 \\neq c = f(c)$. If $c \\notin \\mathbb{Q}$, take rationals $x_n \\to c$, then $f(x_n) = x_n \\to c \\neq 0 = f(c)$.',
  },
      'All rational points',
      'All irrational points',
      'Nowhere',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'At $x = 0$: for any sequence $x_n \\to 0$, we have $|f(x_n)| \\leq |x_n| \\to 0$, so $f$ is continuous at $0$. At any $c \\neq 0$: if $c \\in \\mathbb{Q}$, take irrationals $x_n \\to c$, then $f(x_n) = 0 \\neq c = f(c)$. If $c \\notin \\mathbb{Q}$, take rationals $x_n \\to c$, then $f(x_n) = x_n \\to c \\neq 0 = f(c)$.',
  },
];
