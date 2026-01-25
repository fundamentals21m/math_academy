import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does $a \\equiv b \\pmod{n}$ mean?',
    options: [
      '$a$ divides $n - b
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Two integers are congruent modulo $n$ if their difference is divisible by $n$.',
  },
      '$a = b
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Two integers are congruent modulo $n$ if their difference is divisible by $n$.',
  },
      '$a$ and $b$ are both divisible by $n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Two integers are congruent modulo $n$ if their difference is divisible by $n$.',
  },
      '$n$ divides $a - b
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Two integers are congruent modulo $n$ if their difference is divisible by $n$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Two integers are congruent modulo $n$ if their difference is divisible by $n$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is $17 \\mod 5$?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 4, precision: 0 },
    difficulty: 'easy',
    explanation: '$17 = 3 \\times 5 + 2$, so $17 \\equiv 2 \\pmod{5}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How many elements does $\\mathbb{Z}_{12}$ have?',
    options: [
      '12',
      '11',
      '13',
      'Infinitely many',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\mathbb{Z}_n$ has exactly $n$ congruence classes: $[0], [1], \\ldots, [n-1]$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When is $[a]_n$ invertible in $\\mathbb{Z}_n$?',
    options: [
      'When $n$ is prime',
      'When $a$ is prime',
      'When $\\gcd(a, n) = 1$',
      'Always'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$[a]_n$ has a multiplicative inverse if and only if $a$ and $n$ are relatively prime.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'In $\\mathbb{Z}_7$, what is the multiplicative inverse of $[3]$?',
    correctAnswer: 5,
    numericRange: { min: 1, max: 6, precision: 0 },
    difficulty: 'medium',
    explanation: '$3 \\times 5 = 15 = 2 \\times 7 + 1 \\equiv 1 \\pmod{7}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $p$ is prime, what is true about $\\mathbb{Z}_p$?',
    options: [
      'It has zero-divisors',
      'Every non-zero element is invertible',
      'No elements are invertible',
      'Only $[1]$ is invertible',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $p$ is prime, $\\gcd(a, p) = 1$ for all $1 \\leq a < p$, so all non-zero elements are invertible.',
  },
];
