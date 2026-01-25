import type { QuizQuestion } from './types';

export const section211Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VII.32 states that any number is either:',
    options: [
      'Even or odd',
      'Perfect or deficient',
      'Prime or has a prime factor',
      'Rational or irrational',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VII.32 states that every number greater than 1 is either prime or is measured by some prime.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'This proposition, combined with VII.31, implies that every integer greater than 1:',
    options: [
      'Is a perfect square',
      'Is divisible by 2',
      'Has no prime factors',
      'Has at least one prime in its factorization',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Together, VII.31 and VII.32 show that every integer > 1 involves primes: either it is prime, or it has prime factors.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.32 is foundational for which important theorem in number theory?',
    options: [
      'The Fundamental Theorem of Arithmetic (existence of prime factorization)',
      'Fermat\\'s Last Theorem',
      'The Prime Number Theorem',
      'The Pythagorean Theorem',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'VII.32 establishes that prime factorization exists for all integers > 1, which is the existence part of the Fundamental Theorem of Arithmetic.',
  },
];
