import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 5: Unique Prime Factorization
 */
export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the prime divisor property state?',
    options: [
      'Every number has a prime divisor',
      'If a prime $p$ divides $ab$, then $p$ divides $a$ or $p$ divides $b$',
      'Every prime divides every product',
      'Primes only divide odd numbers',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The prime divisor property says: if a prime $p$ divides the product $ab$, then $p$ must divide at least one of $a$ or $b$. This is a key property that makes primes special.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is another name for the unique prime factorization theorem?',
    options: [
      'The Prime Number Theorem',
      'Fermat\'s Last Theorem',
      'The Fundamental Theorem of Arithmetic',
      'The Euclidean Algorithm',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Unique prime factorization is also called the Fundamental Theorem of Arithmetic because it is the foundation of number theory — every natural number factors into primes in exactly one way.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the proof of the prime divisor property, what key fact is used?',
    options: [
      'That all primes are odd',
      'That $\\gcd(a, p) = ax + py$ when $p$ doesn\'t divide $a$',
      'That $p$ is always larger than $a$',
      'That $ab$ is always even',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'When $p$ is prime and doesn\'t divide $a$, we have $\\gcd(a, p) = 1$. By the linear representation of gcd, $1 = ax + py$ for some integers $x, y$. Multiplying by $b$ gives the result.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the prime factorization of 60?',
    options: [
      '$2 \\times 30$',
      '$4 \\times 15$',
      '$2^2 \\times 3 \\times 5$',
      '$6 \\times 10$',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      '$60 = 2 \\times 30 = 2 \\times 2 \\times 15 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$. This is the unique prime factorization (the other options contain composite factors).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $p_1 p_2 \\cdots p_s = q_1 q_2 \\cdots q_t$ are two prime factorizations of the same number, what can we conclude?',
    options: [
      'The factorizations must be completely different',
      'We must have $s \\neq t$',
      'The primes $p_i$ and $q_j$ are the same (up to reordering)',
      'One factorization uses only 2s',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'By unique prime factorization, both sides must have the same primes with the same multiplicities. The only difference can be the order in which we write them.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'How does unique prime factorization help prove $\\sqrt{2}$ is irrational?',
    options: [
      'It shows 2 is prime',
      'It shows that in $m^2 = 2n^2$, the prime 2 appears an odd number of times on one side',
      'It shows all square roots are irrational',
      'It has nothing to do with irrationality',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'In $m^2$, every prime appears an even number of times. In $2n^2$, the prime 2 appears an odd number of times (the evens from $n^2$ plus one more). This contradicts unique factorization, so no such $m, n$ exist.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Which of the following is irrational by the unique prime factorization argument?',
    options: [
      '$\\sqrt{4}$',
      '$\\sqrt{9}$',
      '$\\sqrt{6}$',
      '$\\sqrt{25}$',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      '$\\sqrt{4} = 2$, $\\sqrt{9} = 3$, and $\\sqrt{25} = 5$ are all rational (perfect squares). But $6 = 2 \\times 3$ is not a perfect square, so $\\sqrt{6}$ is irrational.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Why is unique prime factorization called "fundamental"?',
    options: [
      'Because it was the first theorem ever proved',
      'Because it is very easy to prove',
      'Because it is the foundation upon which number theory is built',
      'Because it only applies to fundamental particles',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Unique prime factorization is called the Fundamental Theorem of Arithmetic because it establishes that primes are the basic building blocks of all natural numbers — the foundation of number theory.',
  },
];
