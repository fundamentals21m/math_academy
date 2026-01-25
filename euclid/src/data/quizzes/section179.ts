import type { QuizQuestion } from './types';

export const section179Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Euclid\'s Definition VII.1, what is a unit?',
    options: [
      'That by virtue of which each of the things that exist is called one',
      'The smallest prime number',
      'Any number that divides another number evenly',
      'The number zero',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Euclid defines a unit as "that by virtue of which each of the things that exist is called one." It is the fundamental building block of all numbers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What distinguishes a prime number from a composite number according to Book VII definitions?',
    options: [
      'A prime is greater than 10, while a composite is less than 10',
      'A prime is only measured by a unit, while a composite is measured by some number',
      'A prime is even, while a composite is odd',
      'A prime can be written as a product, while a composite cannot',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A prime number is "that which is measured by a unit alone" (only divisible by 1), while a composite number is "that which is measured by some number" (has divisors other than 1 and itself).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to Euclid, when are two numbers "relatively prime" (or "prime to one another")?',
    options: [
      'When both numbers are prime',
      'When their sum is a prime number',
      'When one number divides the other evenly',
      'When a unit alone measures them (their only common measure is 1)'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Numbers are "prime to one another" when their only common measure is the unit (1). For example, 8 and 15 are relatively prime because GCD(8,15)=1, even though neither is prime.',
  },
];
