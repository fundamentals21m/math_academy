import type { QuizQuestion } from './types';

export const section203Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.24 prove?',
    options: [
      'The product of two primes is prime',
      'Products of relatively prime numbers are always odd',
      'If two numbers are each relatively prime to a third, their product is also relatively prime to that third',
      'The GCD of a product equals the product of GCDs',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VII.24: If gcd(a,c) = 1 and gcd(b,c) = 1, then gcd(ab,c) = 1. Being relatively prime to c is preserved under multiplication.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If gcd(3,7) = 1 and gcd(5,7) = 1, what is gcd(15,7)?',
    options: [
      '5',
      '3',
      '7',
      '1',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By VII.24, since both 3 and 5 are relatively prime to 7, their product 15 is also relatively prime to 7. Thus gcd(15,7) = 1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.24 can be extended to show that if a is relatively prime to b, then:',
    options: [
      'a is relatively prime to any power of b',
      'Both A and B are correct',
      'a squared is relatively prime to b',
      'a plus b is prime',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By repeated application of VII.24: if gcd(a,b) = 1, then gcd(a,b) = 1 and gcd(a,b) = 1 implies gcd(a squared, b) = 1. Similarly, gcd(a, b squared) = 1, and so on for any powers.',
  },
];
