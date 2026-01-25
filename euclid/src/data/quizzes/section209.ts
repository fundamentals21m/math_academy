import type { QuizQuestion } from './types';

export const section209Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Euclid\'s Lemma (VII.30) states: if a prime p divides the product ab, then:',
    options: [
      'p divides a + b',
      'p divides a - b',
      'p divides a or p divides b (or both)',
      'p equals a times b',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Euclid\'s Lemma states that if p | ab where p is prime, then p | a or p | b.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 7 divides 3 * 14 = 42, what does Euclid\'s Lemma tell us?',
    options: [
      '7 must divide at least one of 3 or 14',
      '7 must divide 3',
      '7 must divide both 3 and 14',
      '7 cannot divide 42'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since 7 | 42 = 3 * 14 and 7 is prime, Euclid\'s Lemma says 7 | 3 or 7 | 14. Here, 7 | 14 (but 7 does not divide 3).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Euclid\'s Lemma is fundamental to number theory because it:',
    options: [
      'Shows all numbers are prime',
      'Proves there are infinitely many primes',
      'Defines what a prime number is',
      'Is the key step in proving uniqueness of prime factorization',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Euclid\'s Lemma is essential for proving the Fundamental Theorem of Arithmetic: that every integer greater than 1 has a unique prime factorization.',
  },
];
