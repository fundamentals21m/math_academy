import type { QuizQuestion } from './types';

export const section185Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.6 address that VII.5 does not?',
    options: [
      'Subtraction of parts',
      'The case of "parts" (multiple equal parts) rather than just "a part"',
      'Division of numbers',
      'Multiplication of parts'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VII.6 extends VII.5 to handle "parts" - when a number is multiple copies of a unit fraction (like 3/4), not just a single part (1/4).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 6 is "two-thirds" of 9, and 10 is "two-thirds" of 15, what does VII.6 say about their sums?',
    options: [
      '16 is two-thirds of 24',
      '16 is one-half of 24',
      '16 is three-fourths of 24',
      '16 and 24 are relatively prime'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By VII.6: if 6 = (2/3)(9) and 10 = (2/3)(15), then 6+10=16 is two-thirds of 9+15=24. Check: (2/3)(24) = 16.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How does VII.6 build upon VII.5?',
    options: [
      'It proves VII.5 using different methods',
      'It uses VII.5 repeatedly to handle multiple parts',
      'It contradicts VII.5 in special cases',
      'It restricts VII.5 to prime numbers only'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VII.6 applies VII.5 multiple times. If A is m/n of B (where m/n means "m parts each of which is 1/n"), the proposition iterates the logic for each part.',
  },
];
