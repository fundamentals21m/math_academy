import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the Pollard $p-1$ method, a factor $p$ of $n$ is found when:',
    options: [
      '$p-1$ has only small prime factors (is smooth)',
      '$p-1$ is a large prime',
      '$p+1$ is smooth',
      '$p$ is a Sophie Germain prime',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Pollard\'s $p-1$ method works when $p-1$ is $B$-smooth (all prime factors $\\leq B$).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the Carmichael function $\\lambda(15)$?',
    options: [
      '$2
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$15 = 3 \\cdot 5$, so $\\lambda(15) = \\text{lcm}(\\lambda(3), \\lambda(5)) = \\text{lcm}(2, 4) = 4$.',
  },
      '$6
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$15 = 3 \\cdot 5$, so $\\lambda(15) = \\text{lcm}(\\lambda(3), \\lambda(5)) = \\text{lcm}(2, 4) = 4$.',
  },
      '$8
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$15 = 3 \\cdot 5$, so $\\lambda(15) = \\text{lcm}(\\lambda(3), \\lambda(5)) = \\text{lcm}(2, 4) = 4$.',
  },
      '$4
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$15 = 3 \\cdot 5$, so $\\lambda(15) = \\text{lcm}(\\lambda(3), \\lambda(5)) = \\text{lcm}(2, 4) = 4$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$15 = 3 \\cdot 5$, so $\\lambda(15) = \\text{lcm}(\\lambda(3), \\lambda(5)) = \\text{lcm}(2, 4) = 4$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'How many primitive roots exist modulo a prime $p = 7$?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 6, precision: 0 },
    difficulty: 'medium',
    explanation: 'The number of primitive roots mod $p$ is $\\phi(p-1) = \\phi(6) = 2$. They are 3 and 5.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a key advantage of the Pollard $p-1$ factoring method?',
    options: [
      'It always finds factors in polynomial time',
      'It works well when $p-1$ is smooth',
      'It doesn\\\\'t require any modular arithmetic',
      'It factors any RSA modulus efficiently',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Pollard\'s $p-1$ is efficient when one factor $p$ has $p-1$ smooth (many small prime factors).',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the term for a number whose prime factorization contains only small primes?',
    correctAnswer: 'smooth',
    difficulty: 'easy',
    explanation: 'A number is called $B$-smooth if all its prime factors are at most $B$.',
  },
];
