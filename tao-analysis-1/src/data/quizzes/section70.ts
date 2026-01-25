import type { QuizQuestion } from './types';

export const section70Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In base-10 (decimal) representation, a natural number $n$ is written as $\\sum_{i=0}^{k} a_i \\cdot 10^i$ where each digit $a_i$ satisfies:',
    options: [
      '$a_i$ can be any integer',
      '$0 \\leq a_i \\leq 9
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In base-10, each digit must be one of the 10 values from 0 to 9. The leading digit $a_k$ is typically required to be nonzero (unless $n = 0$).',
  },
      '$0 \\leq a_i \\leq 10
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'In base-10, each digit must be one of the 10 values from 0 to 9. The leading digit $a_k$ is typically required to be nonzero (unless $n = 0$).',
  },
      '$1 \\leq a_i \\leq 9
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'In base-10, each digit must be one of the 10 values from 0 to 9. The leading digit $a_k$ is typically required to be nonzero (unless $n = 0$).',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'In base-10, each digit must be one of the 10 values from 0 to 9. The leading digit $a_k$ is typically required to be nonzero (unless $n = 0$).',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is the value of the natural number with decimal representation $2 \\cdot 10^2 + 5 \\cdot 10^1 + 3 \\cdot 10^0$?',
    correctAnswer: 253,
    numericRange: { min: 0, max: 1000, precision: 0 },
    difficulty: 'easy',
    explanation: '$2 \\cdot 100 + 5 \\cdot 10 + 3 \\cdot 1 = 200 + 50 + 3 = 253$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The existence and uniqueness of decimal representation for natural numbers relies on:',
    options: [
      'The Peano axioms only',
      'The well-ordering principle only',
      'The axiom of choice',
      'The division algorithm: for any $n$ and $b > 1$, there exist unique $q$ and $r$ with $n = bq + r$ and $0 \\leq r < b
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The division algorithm allows us to recursively extract digits: divide $n$ by 10 to get quotient $q$ and remainder $r \\in \\{0,...,9\\}$. The remainder is the units digit, and we repeat with $q$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The division algorithm allows us to recursively extract digits: divide $n$ by 10 to get quotient $q$ and remainder $r \\in \\{0,...,9\\}$. The remainder is the units digit, and we repeat with $q$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'How many digits does the natural number $10^5$ have in its decimal representation?',
    correctAnswer: 6,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: '$10^5 = 100000$, which has 6 digits: one 1 followed by five 0s. In general, $10^k$ has $k+1$ digits.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A natural number $n > 0$ has exactly $k$ digits in base 10 if and only if:',
    options: [
      '$10^{k-1} < n \\leq 10^k
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A $k$-digit number ranges from $10^{k-1}$ (the smallest, like 100...0 with $k-1$ zeros) to $10^k - 1$ (the largest, like 999...9 with $k$ nines). Thus $10^{k-1} \\leq n \\leq 10^k - 1$, or equivalently $10^{k-1} \\leq n < 10^k$.',
  },
      '$10^k \\leq n < 10^{k+1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A $k$-digit number ranges from $10^{k-1}$ (the smallest, like 100...0 with $k-1$ zeros) to $10^k - 1$ (the largest, like 999...9 with $k$ nines). Thus $10^{k-1} \\leq n \\leq 10^k - 1$, or equivalently $10^{k-1} \\leq n < 10^k$.',
  },
      '$10^{k-1} \\leq n < 10^k
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A $k$-digit number ranges from $10^{k-1}$ (the smallest, like 100...0 with $k-1$ zeros) to $10^k - 1$ (the largest, like 999...9 with $k$ nines). Thus $10^{k-1} \\leq n \\leq 10^k - 1$, or equivalently $10^{k-1} \\leq n < 10^k$.',
  },
      '$k-1 \\leq \\log_{10}(n) < k+1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A $k$-digit number ranges from $10^{k-1}$ (the smallest, like 100...0 with $k-1$ zeros) to $10^k - 1$ (the largest, like 999...9 with $k$ nines). Thus $10^{k-1} \\leq n \\leq 10^k - 1$, or equivalently $10^{k-1} \\leq n < 10^k$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A $k$-digit number ranges from $10^{k-1}$ (the smallest, like 100...0 with $k-1$ zeros) to $10^k - 1$ (the largest, like 999...9 with $k$ nines). Thus $10^{k-1} \\leq n \\leq 10^k - 1$, or equivalently $10^{k-1} \\leq n < 10^k$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'In binary (base 2), the number $13$ is written as $1101_2$. Verify: $1 \\cdot 2^3 + 1 \\cdot 2^2 + 0 \\cdot 2^1 + 1 \\cdot 2^0 = ?$',
    correctAnswer: 13,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$1 \\cdot 8 + 1 \\cdot 4 + 0 \\cdot 2 + 1 \\cdot 1 = 8 + 4 + 0 + 1 = 13$.',
  },
];
