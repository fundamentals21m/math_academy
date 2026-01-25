import type { QuizQuestion } from './types';

export const section210Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VII.31 states that every composite number:',
    options: [
      'Is divisible by 2',
      'Is a perfect square',
      'Has a prime factor',
      'Has exactly two factors',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VII.31 proves that every composite number is divisible by some prime number.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following correctly identifies a prime factor of 91?',
    options: [
      '2',
      '7',
      '3',
      '9',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '91 = 7 * 13, so 7 is a prime factor of 91.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof of VII.31 uses a descent argument: if the smallest divisor greater than 1 were composite, then:',
    options: [
      'That divisor would have a smaller divisor greater than 1, contradiction',
      'The number would be prime',
      'The number would equal 1',
      'The divisor would equal the number itself',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'If the smallest divisor d > 1 were composite, it would have a divisor 1 < e < d that also divides the original number, contradicting minimality of d.',
  },
];
