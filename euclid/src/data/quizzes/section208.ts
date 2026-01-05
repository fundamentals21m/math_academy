import type { QuizQuestion } from './types';

export const section208Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VII.29 states that a prime number is relatively prime to:',
    options: [
      'All numbers',
      'All odd numbers',
      'Any number it does not divide',
      'Only other prime numbers'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VII.29 proves that if p is prime and p does not divide n, then gcd(p, n) = 1.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is gcd(7, 15)?',
    options: [
      '7',
      '15',
      '3',
      '1'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since 7 is prime and 7 does not divide 15, by VII.29, gcd(7, 15) = 1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is VII.29 fundamentally about the nature of prime numbers?',
    options: [
      'It shows primes are even',
      'It shows a prime has no divisors except 1 and itself, so any non-multiple shares only factor 1',
      'It proves there are infinitely many primes',
      'It shows primes cannot be written as sums'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Since a prime p has only divisors 1 and p, any common divisor with a non-multiple must be 1.',
  },
];
