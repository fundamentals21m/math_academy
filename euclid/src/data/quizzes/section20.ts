import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What famous inequality does Proposition I.20 prove?',
    options: [
      'The Pythagorean inequality',
      'The angle inequality',
      'The parallel inequality',
      'The triangle inequality',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'I.20: "In any triangle two sides taken together in any manner are greater than the remaining one." (Triangle Inequality)',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which proposition is essential to the proof of I.20?',
    options: [
      'I.19 (Greater angle opposite greater side)',
      'I.5 (Isosceles triangle theorem)',
      'I.8 (SSS congruence)',
      'I.4 (SAS congruence)',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The proof extends one side, creates an isosceles triangle, and applies I.19.',
  },
];
