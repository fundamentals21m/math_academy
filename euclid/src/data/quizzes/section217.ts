import type { QuizQuestion } from './types';

export const section217Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VII.38 is the converse of VII.37. It states that if a number has an nth part, then:',
    options: [
      'The number is prime',
      'The number is composite',
      'n measures (divides) the number',
      'The number equals n',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VII.38 states that if m has an nth part, then n divides m.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 24 has a "sixth part," what can we conclude?',
    options: [
      '24 divides 6',
      '6 and 24 are coprime',
      '24 is prime',
      '6 divides 24',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Having a sixth part means 24/6 = 4 is a positive integer, so 6 divides 24.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Together, VII.37 and VII.38 establish what relationship?',
    options: [
      'Divisibility and having parts are equivalent concepts',
      'Primes cannot have parts',
      'All numbers have a first part',
      'Parts are always prime',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'VII.37 and VII.38 together show: n divides m if and only if m has an nth part. This establishes the equivalence of two ways of describing divisibility.',
  },
];
