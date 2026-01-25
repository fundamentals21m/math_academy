import type { QuizQuestion } from './types';

export const section195Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.16 prove about products of numbers?',
    options: [
      'If two numbers are multiplied together, the products are equal to one another (commutativity)',
      'Products of prime numbers are prime',
      'Products are always greater than either factor',
      'Products of odd numbers are odd',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VII.16 proves the commutativity of multiplication: a times b equals b times a. In Euclid\'s terms, the product of two numbers is the same regardless of order.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which earlier proposition does Euclid use to prove VII.16?',
    options: [
      'VII.1 (the Euclidean algorithm)',
      'VII.10 (measurement by parts)',
      'VII.15 (unit and number alternation)',
      'VII.5 (part of a part)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Euclid proves VII.16 using VII.15, which established an alternation property for the unit. This connects the abstract measurement relationships to concrete multiplication.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is VII.16 considered foundational for number theory despite commutativity seeming obvious?',
    options: [
      'It was not obvious to ancient Greeks',
      'It establishes commutativity from first principles using only the definitions of number and multiplication',
      'It was Euclid\\\\'s most difficult proof',
      'It proves commutativity only works for certain numbers',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VII.16 is important because it derives commutativity rigorously from the definitions, not from intuition. In axiomatic mathematics, even "obvious" facts require proof from fundamental principles.',
  },
];
