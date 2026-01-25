import type { QuizQuestion } from './types';

export const section183Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.4 state about a lesser number and a greater number?',
    options: [
      'The lesser always divides the greater',
      'The greater is always a multiple of the lesser',
      'Any number that measures the lesser also measures the greater if the lesser measures the greater',
      'The lesser and greater are always relatively prime',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VII.4 states: if a lesser number is a part of a greater, and another number measures the lesser, then it also measures the greater.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 6 measures 12, and 3 measures 6, what does VII.4 tell us?',
    options: [
      '6 measures 3',
      '3 measures 12',
      '12 measures 3',
      '3 and 12 are relatively prime',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By VII.4, since 6 measures 12 (12 = 2 x 6) and 3 measures 6 (6 = 2 x 3), it follows that 3 also measures 12 (12 = 4 x 3).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.4 is foundational for understanding which concept in modern number theory?',
    options: [
      'The transitivity of divisibility',
      'The fundamental theorem of arithmetic',
      'Fermat\\\\\'s little theorem',
      'The prime number theorem',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'VII.4 establishes the transitivity of the "measures" (divides) relation: if a|b and b|c, then a|c. This is a fundamental property of divisibility.',
  },
];
