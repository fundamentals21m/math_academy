import type { QuizQuestion } from './types';

/**
 * Section 2: Primitive Roots and Fermat's Theorem
 * Topics: Fermat's Little Theorem, order, primitive roots, indices (discrete log), Wilson's Theorem
 */
export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "Fermat's Little Theorem states that if $p$ is prime and $\\gcd(a, p) = 1$, then:",
    options: [
      '$a^{p-1} \\equiv 1 \\pmod{p}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: "Fermat's Little Theorem: If $p$ is prime and $\\gcd(a, p) = 1$, then $a^{p-1} \\equiv 1 \\pmod{p}$.",
  },
      '$a^p \\equiv 1 \\pmod{p}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: "Fermat's Little Theorem: If $p$ is prime and $\\gcd(a, p) = 1$, then $a^{p-1} \\equiv 1 \\pmod{p}$.",
  },
      '$a^{p+1} \\equiv 1 \\pmod{p}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: "Fermat's Little Theorem: If $p$ is prime and $\\gcd(a, p) = 1$, then $a^{p-1} \\equiv 1 \\pmod{p}$.",
  },
      '$a^p \\equiv a \\pmod{p-1}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: "Fermat's Little Theorem: If $p$ is prime and $\\gcd(a, p) = 1$, then $a^{p-1} \\equiv 1 \\pmod{p}$.",
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: "Fermat's Little Theorem: If $p$ is prime and $\\gcd(a, p) = 1$, then $a^{p-1} \\equiv 1 \\pmod{p}$.",
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is $2^6 \\pmod{7}$?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 6, precision: 0 },
    difficulty: 'easy',
    explanation: "By Fermat's Little Theorem, $2^6 \\equiv 1 \\pmod{7}$ since $7$ is prime and $\\gcd(2, 7) = 1$.",
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The order of $a$ modulo $m$ is:',
    options: [
      'The smallest positive $k$ such that $a^k \\equiv 0 \\pmod{m}$',
      'The number of divisors of $m$',
      'The value of $a \\pmod{m}$',
      'The smallest positive $k$ such that $a^k \\equiv 1 \\pmod{m}$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The order of $a$ modulo $m$ is the smallest positive integer $k$ such that $a^k \\equiv 1 \\pmod{m}$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is the order of $2$ modulo $7$?',
    correctAnswer: 3,
    numericRange: { min: 1, max: 6, precision: 0 },
    difficulty: 'medium',
    explanation: '$2^1 = 2$, $2^2 = 4$, $2^3 = 8 \\equiv 1 \\pmod{7}$. The order is $3$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A primitive root modulo a prime $p$ is an element $g$ with order:',
    options: [
      '$p
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A primitive root modulo $p$ has order $p - 1$, meaning it generates all non-zero residues.',
  },
      '$p + 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A primitive root modulo $p$ has order $p - 1$, meaning it generates all non-zero residues.',
  },
      '$p - 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A primitive root modulo $p$ has order $p - 1$, meaning it generates all non-zero residues.',
  },
      '$2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A primitive root modulo $p$ has order $p - 1$, meaning it generates all non-zero residues.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A primitive root modulo $p$ has order $p - 1$, meaning it generates all non-zero residues.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'Is $3$ a primitive root modulo $7$? (Enter 1 for yes, 0 for no)',
    correctAnswer: 1,
    numericRange: { min: 0, max: 1, precision: 0 },
    difficulty: 'medium',
    explanation: '$3^1=3, 3^2=9\\equiv 2, 3^3=27\\equiv 6, 3^4\\equiv 4, 3^5\\equiv 5, 3^6\\equiv 1 \\pmod{7}$. Since the order is $6 = p-1$, yes, $3$ is a primitive root.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: "Wilson's Theorem states that for a prime $p$:",
    options: [
      '$(p-1)! \\equiv 0 \\pmod{p}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: "Wilson's Theorem: $(p-1)! \\equiv -1 \\pmod{p}$ for any prime $p$.",
  },
      '$(p-1)! \\equiv 1 \\pmod{p}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: "Wilson's Theorem: $(p-1)! \\equiv -1 \\pmod{p}$ for any prime $p$.",
  },
      '$(p-1)! \\equiv -1 \\pmod{p}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: "Wilson's Theorem: $(p-1)! \\equiv -1 \\pmod{p}$ for any prime $p$.",
  },
      '$(p-1)! \\equiv p-1 \\pmod{p}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: "Wilson's Theorem: $(p-1)! \\equiv -1 \\pmod{p}$ for any prime $p$.",
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: "Wilson's Theorem: $(p-1)! \\equiv -1 \\pmod{p}$ for any prime $p$.",
  },
  {
    id: 8,
    type: 'numeric',
    question: 'How many primitive roots are there modulo $7$?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 6, precision: 0 },
    difficulty: 'hard',
    explanation: 'The number of primitive roots mod $p$ is $\\phi(p-1) = \\phi(6) = 2$. They are $3$ and $5$.',
  },
  {
    id: 9,
    type: 'numeric',
    question: 'If $g = 3$ is a primitive root mod $7$ and $3^k \\equiv 5 \\pmod{7}$, what is $k$?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 5, precision: 0 },
    difficulty: 'hard',
    explanation: 'Computing powers of $3$ mod $7$: $3^1=3, 3^2=2, 3^3=6, 3^4=4, 3^5=5$. So $k=5$, the index (discrete log) of $5$.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'Which of the following moduli have primitive roots?',
    options: [
      'Only prime moduli',
      '$1, 2, 4, p^k, 2p^k$ for odd primes $p
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Primitive roots exist for $m = 1, 2, 4, p^k$, and $2p^k$ where $p$ is an odd prime.',
  },
      'All positive integers',
      'Only powers of $2
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Primitive roots exist for $m = 1, 2, 4, p^k$, and $2p^k$ where $p$ is an odd prime.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Primitive roots exist for $m = 1, 2, 4, p^k$, and $2p^k$ where $p$ is an odd prime.',
  },
];
