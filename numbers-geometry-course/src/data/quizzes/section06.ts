import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 6: Prime Factorization and Divisors
 */
export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many divisors does $30 = 2 \\times 3 \\times 5$ have?',
    options: [
      '3',
      '6',
      '8',
      '30',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'For $30 = 2^1 \\times 3^1 \\times 5^1$, the number of divisors is $(1+1)(1+1)(1+1) = 2 \\times 2 \\times 2 = 8$. They are: 1, 2, 3, 5, 6, 10, 15, 30.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $n = p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k}$, how many divisors does $n$ have?',
    options: [
      '$e_1 + e_2 + \\cdots + e_k$',
      '$e_1 \\times e_2 \\times \\cdots \\times e_k$',
      '$(e_1 + 1)(e_2 + 1) \\cdots (e_k + 1)$',
      '$p_1 + p_2 + \\cdots + p_k$',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Each divisor is $p_1^{d_1} \\cdots p_k^{d_k}$ where $0 \\leq d_i \\leq e_i$. There are $e_i + 1$ choices for each $d_i$, giving $(e_1+1)(e_2+1)\\cdots(e_k+1)$ total divisors.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'How many divisors does $72 = 2^3 \\times 3^2$ have?',
    correctAnswer: 12,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation:
      'Number of divisors = $(3+1)(2+1) = 4 \\times 3 = 12$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To find $\\gcd(m, n)$ using prime factorizations, we take:',
    options: [
      'The maximum exponent of each prime',
      'The minimum exponent of each prime',
      'The sum of all exponents',
      'The product of all primes',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The gcd is found by taking the minimum exponent of each prime that appears in both factorizations. This gives the largest number that divides both $m$ and $n$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is $\\gcd(12, 18)$ if $12 = 2^2 \\times 3$ and $18 = 2 \\times 3^2$?',
    options: [
      '2',
      '3',
      '6',
      '36',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      '$\\gcd(12, 18) = 2^{\\min(2,1)} \\times 3^{\\min(1,2)} = 2^1 \\times 3^1 = 6$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What elegant formula relates gcd, lcm, and the product $mn$?',
    options: [
      '$\\gcd(m,n) + \\text{lcm}(m,n) = mn$',
      '$\\gcd(m,n) \\times \\text{lcm}(m,n) = mn$',
      '$\\gcd(m,n) \\times \\text{lcm}(m,n) = m + n$',
      '$\\gcd(m,n) = \\text{lcm}(m,n)$',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      '$\\gcd(m,n) \\times \\text{lcm}(m,n) = mn$. This allows computing lcm without factorization: find gcd by Euclidean algorithm, then divide into $mn$.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'A perfect number is one that:',
    options: [
      'Is divisible by all primes',
      'Equals the sum of its proper divisors',
      'Has exactly two divisors',
      'Is both a square and a cube',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A perfect number equals the sum of its proper divisors (all divisors except itself). For example, $6 = 1 + 2 + 3$ and $28 = 1 + 2 + 4 + 7 + 14$.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'According to Euclid, $2^{n-1}(2^n - 1)$ is perfect when:',
    options: [
      '$n$ is any natural number',
      '$n$ is even',
      '$2^n - 1$ is prime (a Mersenne prime)',
      '$n$ is a perfect square',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Euclid proved that if $p = 2^n - 1$ is prime, then $2^{n-1}p$ is perfect. For example, $n=2$ gives $p=3$, and $2^1 \\times 3 = 6$ is perfect.',
  },
];
