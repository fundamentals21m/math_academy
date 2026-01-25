import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 1: Division, Divisors, and Primes
 */
export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'When we write $7 = 2 \\times 3 + 1$, what is the quotient and what is the remainder?',
    options: [
      'Quotient = 1, Remainder = 2',
      'Quotient = 7, Remainder = 0',
      'Quotient = 3, Remainder = 1',
      'Quotient = 2, Remainder = 1',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'In the division $7 = 2 \\times 3 + 1$, we have 7 divided by 3. The quotient is 2 (the multiplier of 3) and the remainder is 1.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does it mean for $b$ to divide $a$?',
    options: [
      '$a$ is larger than $b
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'We say $b$ divides $a$ if there is a natural number $q$ such that $a = qb$. This means the division has no remainder.',
  },
      'There exists a natural number $q$ such that $a = qb
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'We say $b$ divides $a$ if there is a natural number $q$ such that $a = qb$. This means the division has no remainder.',
  },
      '$a$ and $b$ are both prime',
      'The remainder when $a$ is divided by $b$ is 1',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'We say $b$ divides $a$ if there is a natural number $q$ such that $a = qb$. This means the division has no remainder.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following is the definition of a prime number?',
    options: [
      'A number greater than 10',
      'An odd number',
      'A number divisible only by 1 and itself (and greater than 1)',
      'A number with exactly 3 divisors',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'A prime number $p > 1$ is a natural number divisible only by 1 and $p$. Primes are the "atoms" of multiplication because they cannot be factored further.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is 1 not considered a prime number?',
    options: [
      'Because factors of 1 are redundant in factorizations',
      'Because 1 is too small',
      'Because 1 is even',
      'Because 1 has no divisors',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The number 1 is not considered prime because factors of 1 are redundant. Including 1 as a prime would make factorizations non-unique (e.g., $6 = 2 \\times 3 = 1 \\times 2 \\times 3$).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $m = 2\\ell + 1$ (m is odd), what form does $m^2$ take?',
    options: [
      '$m^2 = 2k$ for some $k$ (even)',
      '$m^2 = 2k + 1$ for some $k$ (odd)',
      '$m^2 = 3k$ for some $k
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'If $m = 2\\ell + 1$, then $m^2 = (2\\ell + 1)^2 = 4\\ell^2 + 4\\ell + 1 = 2(2\\ell^2 + 2\\ell) + 1$, which is odd.',
  },
      '$m^2 = 4k$ for some $k
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'If $m = 2\\ell + 1$, then $m^2 = (2\\ell + 1)^2 = 4\\ell^2 + 4\\ell + 1 = 2(2\\ell^2 + 2\\ell) + 1$, which is odd.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'If $m = 2\\ell + 1$, then $m^2 = (2\\ell + 1)^2 = 4\\ell^2 + 4\\ell + 1 = 2(2\\ell^2 + 2\\ell) + 1$, which is odd.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is a Mersenne prime?',
    options: [
      'A prime of the form $n^2 + 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A Mersenne prime is a prime of the form $2^p - 1$. For $2^p - 1$ to be prime, $p$ itself must be prime (though not all such values give primes).',
  },
      'A prime of the form $2^{2^n} + 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A Mersenne prime is a prime of the form $2^p - 1$. For $2^p - 1$ to be prime, $p$ itself must be prime (though not all such values give primes).',
  },
      'A prime of the form $2^p - 1$ where $p$ is prime',
      'Any prime greater than 100',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A Mersenne prime is a prime of the form $2^p - 1$. For $2^p - 1$ to be prime, $p$ itself must be prime (though not all such values give primes).',
  },
  {
    id: 7,
    type: 'numeric',
    question: 'What is $2^5 - 1$? (This is the Mersenne number for $p = 5$.)',
    correctAnswer: 31,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation:
      '$2^5 - 1 = 32 - 1 = 31$. Since 31 has no divisors other than 1 and 31, it is indeed a Mersenne prime.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Which statement about $2^{11} - 1 = 2047$ is correct?',
    options: [
      'It is not prime; $2047 = 23 \\times 89
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Even though 11 is prime, $2^{11} - 1 = 2047 = 23 \\times 89$ is not prime. Being of the form $2^p - 1$ with $p$ prime is necessary but not sufficient for primality.',
  },
      'It is prime because 11 is prime',
      'It is not prime; $2047 = 7 \\times 293
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Even though 11 is prime, $2^{11} - 1 = 2047 = 23 \\times 89$ is not prime. Being of the form $2^p - 1$ with $p$ prime is necessary but not sufficient for primality.',
  },
      'It equals 2048',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Even though 11 is prime, $2^{11} - 1 = 2047 = 23 \\times 89$ is not prime. Being of the form $2^p - 1$ with $p$ prime is necessary but not sufficient for primality.',
  },
];
