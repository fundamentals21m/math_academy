import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A positive integer $p$ is prime if:',
    options: [
      'It is greater than 1',
      'It is not divisible by 2',
      'It has no divisors',
      'It has exactly two positive divisors: 1 and $p
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A prime has exactly two positive divisors: 1 and itself.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A prime has exactly two positive divisors: 1 and itself.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Is 1 a prime number?',
    options: [
      'Yes, because it is only divisible by itself',
      'Yes, because it is the first positive integer',
      'No, because it has only one positive divisor',
      'No, because it is even',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '1 has only one positive divisor (itself), so it does not meet the definition of prime.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Prime Divisibility Property states that if $p$ is prime and $p \\mid ab$, then:',
    options: [
      '$p \\mid a + b
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If a prime divides a product, it must divide at least one of the factors.',
  },
      '$p \\mid a$ or $p \\mid b
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If a prime divides a product, it must divide at least one of the factors.',
  },
      '$p \\mid a$ and $p \\mid b
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If a prime divides a product, it must divide at least one of the factors.',
  },
      '$p = ab
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If a prime divides a product, it must divide at least one of the factors.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If a prime divides a product, it must divide at least one of the factors.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the name of the theorem that states every integer $n \\geq 2$ factors uniquely into primes?',
    correctAnswer: 'Fundamental Theorem of Arithmetic',
    difficulty: 'medium',
    explanation: 'The Fundamental Theorem of Arithmetic guarantees unique prime factorization.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Using prime factorizations, compute $\\gcd(360, 150)$.',
    correctAnswer: 30,
    numericRange: { min: 1, max: 150, precision: 0 },
    difficulty: 'medium',
    explanation: '$360 = 2^3 \\cdot 3^2 \\cdot 5$, $150 = 2 \\cdot 3 \\cdot 5^2$. GCD uses minimum exponents: $2^1 \\cdot 3^1 \\cdot 5^1 = 30$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "Euclid's proof of the infinitude of primes considers $N = p_1 p_2 \\cdots p_n + 1$. What can we conclude about $N$?",
    options: [
      '$N$ has a prime factor not in the list $p_1, \\ldots, p_n
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Dividing $N$ by any $p_i$ gives remainder 1, so $N$ has a prime factor outside the list.',
  },
      '$N$ is divisible by all primes in the list',
      '$N$ is always prime',
      '$N$ is always composite',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Dividing $N$ by any $p_i$ gives remainder 1, so $N$ has a prime factor outside the list.',
  },
];
