import type { QuizQuestion } from './types';

export const section201Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.22 prove?',
    options: [
      'Prime numbers are relatively prime to all numbers',
      'Consecutive numbers are relatively prime',
      'All odd numbers are relatively prime',
      'The least numbers in any ratio are relatively prime to one another',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'VII.22 is the converse of VII.21: if a:b is in lowest terms (least numbers in the ratio), then gcd(a,b) = 1. The least representatives are necessarily coprime.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 4:6 reduces to 2:3, what does VII.22 tell us about 2 and 3?',
    options: [
      '2 and 3 are relatively prime (gcd = 1)',
      '2 and 3 are both prime',
      '2 divides 3',
      '2 and 3 are consecutive',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since 2:3 is the reduced form (least numbers) of the ratio 4:6, VII.22 guarantees that gcd(2,3) = 1. The numbers in lowest terms must be relatively prime.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.21 and VII.22 together establish:',
    options: [
      'An algorithm for finding GCDs',
      'A bijection between ratios in lowest terms and pairs of relatively prime numbers',
      'That all numbers can be factored into primes',
      'The existence of irrational numbers',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VII.21 (coprime implies least) and VII.22 (least implies coprime) together show: a pair is in lowest terms if and only if the numbers are relatively prime. This is a complete characterization.',
  },
];
