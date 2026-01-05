import type { QuizQuestion } from './types';

export const section211Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VII.32 states that any number is either:',
    options: [
      'Even or odd',
      'Prime or has a prime factor',
      'Perfect or deficient',
      'Rational or irrational'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VII.32 states that every number greater than 1 is either prime or is measured by some prime.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'This proposition, combined with VII.31, implies that every integer greater than 1:',
    options: [
      'Is a perfect square',
      'Has at least one prime in its factorization',
      'Is divisible by 2',
      'Has no prime factors'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Together, VII.31 and VII.32 show that every integer > 1 involves primes: either it is prime, or it has prime factors.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.32 is foundational for which important theorem in number theory?',
    options: [
      'Fermat\'s Last Theorem',
      'The Fundamental Theorem of Arithmetic (existence of prime factorization)',
      'The Pythagorean Theorem',
      'The Prime Number Theorem'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VII.32 establishes that prime factorization exists for all integers > 1, which is the existence part of the Fundamental Theorem of Arithmetic.',
  },
];
