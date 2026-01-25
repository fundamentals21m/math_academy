import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 2: Prime Numbers
 */
export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a prime number?',
    options: [
      'Any odd number',
      'Any number that ends in 1, 3, 7, or 9',
      'A number that cannot be divided by 2',
      'An integer greater than 1 with exactly two positive divisors',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'A prime number is an integer greater than 1 that has exactly two positive divisors: 1 and itself. For example, 7 is prime because its only divisors are 1 and 7.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: "What did Euclid prove about prime numbers in his Elements (300 BC)?",
    options: [
      'That 2 is the only even prime',
      'That every prime is odd',
      'That primes follow a predictable pattern',
      'That there are infinitely many prime numbers',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      "Euclid's Theorem (Book IX, Proposition 20) proves there are infinitely many primes. His elegant proof shows that for any finite list of primes, there must exist a prime not on that list.",
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'Who formally proved the Unique Factorization Theorem for all positive integers in 1801?',
    options: [
      'Carl Friedrich Gauss',
      'Euclid',
      'Eratosthenes',
      'Pierre de Fermat',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Carl Friedrich Gauss (1777-1855) formally proved the Unique Factorization Theorem (Fundamental Theorem of Arithmetic) in his Disquisitiones Arithmeticae in 1801.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the Sieve of Eratosthenes?',
    options: [
      'An algorithm for listing all prime numbers by crossing out multiples',
      'A formula that generates all prime numbers',
      'A method for finding prime factors of large numbers',
      'A proof that there are infinitely many primes',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Sieve of Eratosthenes (230 BC) is an algorithm for finding all primes: write down integers starting from 2, then systematically cross out multiples of each prime. The remaining numbers are prime.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'The polynomial $f(x) = x^2 - x + 41$ is prime for $x = 0$ to $40$. Why does it fail at $x = 41$?',
    options: [
      '$f(41) = 41^2$, which is not prime',
      'The formula becomes negative',
      '$f(41) = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'When x = 41, we get f(41) = 41² - 41 + 41 = 41² = 1681, which is clearly not prime (it equals 41 × 41). No single-variable polynomial with integer coefficients can generate only primes.',
  },
      'The formula gives a fraction',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'When x = 41, we get f(41) = 41² - 41 + 41 = 41² = 1681, which is clearly not prime (it equals 41 × 41). No single-variable polynomial with integer coefficients can generate only primes.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "What does Goldbach's Conjecture state?",
    options: [
      'There are infinitely many twin primes',
      'Every even number greater than 2 is the sum of two primes',
      'Every odd number is either prime or a product of two primes',
      'The gap between consecutive primes grows without bound',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      "Goldbach's Conjecture (1742) states that every even integer greater than 2 can be expressed as the sum of two prime numbers. For example, 100 = 47 + 53. This remains unproven!",
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'Who proved the Prime Number Theorem in 1896, showing that $\\pi(x) \\approx x/\\log x$?',
    options: [
      'Gauss and Euler',
      'Riemann and Dirichlet',
      'Hadamard and de la Vallée Poussin (independently)',
      'Fermat and Pascal',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The Prime Number Theorem was proved independently in 1896 by Jacques Hadamard (French, 1865-1963) and Charles de la Vallée Poussin (Belgian, 1866-1962).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Why are large prime numbers important in modern cryptography?',
    options: [
      'Primes can be computed very quickly',
      'Prime numbers have special patterns that create secure codes',
      'It is easy to multiply large primes but very hard to factor their product',
      'Only prime numbers can be used in computer calculations',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Public-key cryptography relies on the fact that multiplying two large primes is easy, but factoring their product back into the original primes is computationally infeasible. This asymmetry provides security.',
  },
  {
    id: 9,
    type: 'numeric',
    question: 'How many prime numbers are there less than 20?',
    correctAnswer: 8,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation:
      'The primes less than 20 are: 2, 3, 5, 7, 11, 13, 17, 19. That gives us exactly 8 prime numbers.',
  },
];
