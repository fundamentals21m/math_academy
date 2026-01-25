import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The linear congruence $ax \\equiv b \\pmod{n}$ has solutions if and only if:',
    options: [
      '$\\gcd(a, b)$ divides $n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A linear congruence is solvable iff $\\gcd(a, n) \\mid b$.',
  },
      '$a$ divides $b
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A linear congruence is solvable iff $\\gcd(a, n) \\mid b$.',
  },
      '$\\gcd(a, n)$ divides $b
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A linear congruence is solvable iff $\\gcd(a, n) \\mid b$.',
  },
      '$n$ divides $ab
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A linear congruence is solvable iff $\\gcd(a, n) \\mid b$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A linear congruence is solvable iff $\\gcd(a, n) \\mid b$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many solutions does $6x \\equiv 9 \\pmod{15}$ have?',
    options: [
      '3',
      '1',
      '0',
      '15',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\gcd(6, 15) = 3$ divides 9, so there are 3 solutions modulo 15.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the Chinese Remainder Theorem require about the moduli $m$ and $n$?',
    options: [
      '$m$ divides $n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The CRT requires that the moduli be pairwise relatively prime.',
  },
      '$m = n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The CRT requires that the moduli be pairwise relatively prime.',
  },
      '$m + n$ is prime',
      '$\\gcd(m, n) = 1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The CRT requires that the moduli be pairwise relatively prime.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The CRT requires that the moduli be pairwise relatively prime.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Solve: $x \\equiv 3 \\pmod{7}$ and $x \\equiv 6 \\pmod{25}$. Find the smallest positive solution.',
    correctAnswer: 31,
    numericRange: { min: 1, max: 175, precision: 0 },
    difficulty: 'hard',
    explanation: 'Using CRT with $7(-7) + 25(2) = 1$: $c = 6 \\cdot 7 \\cdot (-7) + 3 \\cdot 25 \\cdot 2 = -144 \\equiv 31 \\pmod{175}$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Solve $5x \\equiv 3 \\pmod{7}$. Find the solution as a number from 0 to 6.',
    correctAnswer: 2,
    numericRange: { min: 0, max: 6, precision: 0 },
    difficulty: 'medium',
    explanation: 'The inverse of 5 mod 7 is 3 (since $5 \\times 3 = 15 \\equiv 1$). So $x \\equiv 3 \\times 3 = 9 \\equiv 2 \\pmod{7}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $\\gcd(m, n) = 1$, the CRT guarantees a unique solution modulo:',
    options: [
      '$\\gcd(m, n)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The CRT gives a unique solution modulo the product $mn$.',
  },
      '$mn
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The CRT gives a unique solution modulo the product $mn$.',
  },
      '$m + n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The CRT gives a unique solution modulo the product $mn$.',
  },
      '$m - n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The CRT gives a unique solution modulo the product $mn$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The CRT gives a unique solution modulo the product $mn$.',
  },
];
