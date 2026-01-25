import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A sequence $(a_n)_{n=1}^{\\infty}$ of rational numbers is a Cauchy sequence if:',
    options: [
      'For every $\\varepsilon > 0$, there exists $N$ such that $|a_n| < \\varepsilon$ for all $n \\geq N
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A Cauchy sequence is one where the terms become arbitrarily close to each other: for any $\\varepsilon > 0$, there is $N$ such that $|a_n - a_m| \\leq \\varepsilon$ for all $n, m \\geq N$.',
  },
      'For every $\\varepsilon > 0$, there exists $N$ such that $|a_n - a_m| \\leq \\varepsilon$ for all $n, m \\geq N
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A Cauchy sequence is one where the terms become arbitrarily close to each other: for any $\\varepsilon > 0$, there is $N$ such that $|a_n - a_m| \\leq \\varepsilon$ for all $n, m \\geq N$.',
  },
      'The sequence is bounded',
      'The sequence is monotonic',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A Cauchy sequence is one where the terms become arbitrarily close to each other: for any $\\varepsilon > 0$, there is $N$ such that $|a_n - a_m| \\leq \\varepsilon$ for all $n, m \\geq N$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Every Cauchy sequence of rational numbers is:',
    options: [
      'Convergent to a rational limit',
      'Bounded',
      'Divergent',
      'Monotonic',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Every Cauchy sequence is bounded. Taking $\\varepsilon = 1$, there exists $N$ such that all terms beyond $N$ lie within distance $1$ of $a_N$. The finitely many earlier terms contribute a finite bound.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a Cauchy sequence?',
    options: [
      '$(1/n)_{n=1}^{\\infty}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sequence $((-1)^n) = (-1, 1, -1, 1, \\ldots)$ has $|a_n - a_{n+1}| = 2$ for all $n$, so it cannot be Cauchy. The other sequences have terms that get arbitrarily close.',
  },
      '$((-1)^n)_{n=1}^{\\infty}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The sequence $((-1)^n) = (-1, 1, -1, 1, \\ldots)$ has $|a_n - a_{n+1}| = 2$ for all $n$, so it cannot be Cauchy. The other sequences have terms that get arbitrarily close.',
  },
      '$(1 + 1/n)_{n=1}^{\\infty}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The sequence $((-1)^n) = (-1, 1, -1, 1, \\ldots)$ has $|a_n - a_{n+1}| = 2$ for all $n$, so it cannot be Cauchy. The other sequences have terms that get arbitrarily close.',
  },
      '$(1 - 1/2^n)_{n=1}^{\\infty}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The sequence $((-1)^n) = (-1, 1, -1, 1, \\ldots)$ has $|a_n - a_{n+1}| = 2$ for all $n$, so it cannot be Cauchy. The other sequences have terms that get arbitrarily close.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The sequence $((-1)^n) = (-1, 1, -1, 1, \\ldots)$ has $|a_n - a_{n+1}| = 2$ for all $n$, so it cannot be Cauchy. The other sequences have terms that get arbitrarily close.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $(a_n)$ and $(b_n)$ are Cauchy sequences, then $(a_n + b_n)$ is:',
    options: [
      'Not necessarily Cauchy',
      'Bounded but possibly not Cauchy',
      'Convergent to zero',
      'Cauchy',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The sum of Cauchy sequences is Cauchy. If $|a_n - a_m| < \\varepsilon/2$ and $|b_n - b_m| < \\varepsilon/2$ for $n, m \\geq N$, then $|(a_n + b_n) - (a_m + b_m)| \\leq |a_n - a_m| + |b_n - b_m| < \\varepsilon$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For the sequence $a_n = 1 + \\frac{1}{2} + \\frac{1}{4} + \\cdots + \\frac{1}{2^n}$, what is $a_3$ (as a decimal)?',
    correctAnswer: 1.875,
    numericRange: { min: 0, max: 10, precision: 3 },
    difficulty: 'easy',
    explanation: '$a_3 = 1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} = \\frac{8 + 4 + 2 + 1}{8} = \\frac{15}{8} = 1.875$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A sequence that converges (in the rationals) to a limit $L$ is:',
    options: [
      'Cauchy only if $L = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Every convergent sequence is Cauchy. If $a_n \\to L$, then for large $n, m$, $|a_n - a_m| \\leq |a_n - L| + |L - a_m|$ can be made arbitrarily small by the triangle inequality.',
  },
      'Cauchy only if $L$ is an integer',
      'Always Cauchy',
      'Not necessarily Cauchy',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Every convergent sequence is Cauchy. If $a_n \\to L$, then for large $n, m$, $|a_n - a_m| \\leq |a_n - L| + |L - a_m|$ can be made arbitrarily small by the triangle inequality.',
  },
];
