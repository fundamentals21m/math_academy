import type { QuizQuestion } from './types';

export const section202Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.23 state about relatively prime numbers and measurement?',
    options: [
      'If a is relatively prime to b, then a measures any multiple of b',
      'Relatively prime numbers never measure each other',
      'If a is relatively prime to b, and a measures b times c, then a measures c',
      'If a measures b, they cannot be relatively prime'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VII.23: If gcd(a,b) = 1 and a|bc, then a|c. When a is coprime to b, any factor of a that divides bc must come from c.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If gcd(7,6) = 1 and 7 divides 6 times 14 = 84, what can we conclude?',
    options: [
      '7 divides 6',
      '7 and 14 are relatively prime',
      '6 divides 14',
      '7 divides 14'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By VII.23, since gcd(7,6) = 1 and 7|84 = 6 times 14, we conclude 7|14. Indeed, 14 = 7 times 2.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.23 is a key lemma for proving which fundamental theorem?',
    options: [
      'The infinitude of primes',
      'The unique factorization theorem (Fundamental Theorem of Arithmetic)',
      'The Euclidean algorithm terminates',
      'Every number has a square root',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VII.23 is essential for unique factorization: if prime p divides ab, then (since p is coprime to any number it doesn\'t divide) p must divide a or b. This "Euclid\'s lemma" underlies unique prime factorization.',
  },
];
