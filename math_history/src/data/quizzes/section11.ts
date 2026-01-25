import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 's11-e01',
    type: 'multiple-choice',
    question: 'Which of the following numbers is prime?',
    difficulty: 'easy',
    options: [
      '21',
      '27',
      '31',
      '35',
    ],
    correctIndex: 2,
    explanation:
      '31 is prime (only divisible by 1 and 31). 21 = 3 × 7, 27 = 3³, and 35 = 5 × 7 are all composite.',
  },
  {
    id: 's11-e02',
    type: 'multiple-choice',
    question: 'Why is 1 not considered a prime number?',
    difficulty: 'easy',
    options: [
      'Because it would break unique prime factorization',
      'Because it is too small',
      'Because it is even',
      'Because the Greeks didn\\\'t like it',
    ],
    correctIndex: 0,
    explanation:
      'If 1 were prime, then numbers would have infinitely many factorizations (e.g., 6 = 2 × 3 = 1 × 2 × 3 = 1 × 1 × 2 × 3, etc.), destroying the uniqueness of prime factorization.',
  },
  {
    id: 's11-m01',
    type: 'numeric',
    question:
      'In the Sieve of Eratosthenes, to find all primes up to 100, you only need to cross out multiples of primes up to $\\sqrt{100}$. What is the largest prime you need to consider?',
    difficulty: 'medium',
    correctAnswer: 7,
    explanation:
      '$\\sqrt{100} = 10$, so we need primes up to 10. The primes to consider are 2, 3, 5, and 7. Any composite number ≤ 100 must have a prime factor ≤ 10.',
  },
  {
    id: 's11-m02',
    type: 'multiple-choice',
    question:
      'In Euclid\'s proof of infinitely many primes, if we start with primes 2 and 3, what is $N = 2 \\times 3 + 1$?',
    difficulty: 'medium',
    options: [
      '5',
      '6',
      '8',
      '7',
    ],
    correctIndex: 3,
    explanation:
      '$N = 2 \\times 3 + 1 = 7$. This $N$ is itself prime, which gives us a new prime not in our original list {2, 3}.',
  },
  {
    id: 's11-h01',
    type: 'multiple-choice',
    question:
      'If $p_1, p_2, \\ldots, p_n$ are the first $n$ primes, the number $N = p_1 \\cdot p_2 \\cdots p_n + 1$ in Euclid\'s proof:',
    difficulty: 'hard',
    options: [
      'Is always composite',
      'Is always prime',
      'Equals the next prime after $p_n
    correctIndex: 3,
    explanation:
      '$N$ is not always prime (e.g., 2×3×5×7×11×13 + 1 = 30031 = 59 × 509). However, $N$ must have at least one prime factor, and that factor cannot be any of $p_1, \\ldots, p_n$ since they all leave remainder 1.',
  },
      'Has a prime factor not in the list',
    ],
    correctIndex: 0,
    explanation:
      '$N$ is not always prime (e.g., 2×3×5×7×11×13 + 1 = 30031 = 59 × 509). However, $N$ must have at least one prime factor, and that factor cannot be any of $p_1, \\ldots, p_n$ since they all leave remainder 1.',
  },
  {
    id: 's11-h02',
    type: 'multiple-choice',
    question:
      'Which pair below are NOT twin primes?',
    difficulty: 'hard',
    options: [
      '(11, 13)',
      '(23, 25)',
      '(17, 19)',
      '(29, 31)',
    ],
    correctIndex: 1,
    explanation:
      '(23, 25) are not twin primes because 25 = 5² is not prime. Twin primes must both be prime and differ by exactly 2.',
  },
];
