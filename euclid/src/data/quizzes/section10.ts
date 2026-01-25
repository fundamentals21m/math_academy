import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.10 construct?',
    options: [
      'The bisector of an angle',
      'A perpendicular from a point',
      'A parallel line',
      'The midpoint of a finite straight line',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'I.10: "To bisect a given finite straight line."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which earlier propositions does I.10 use?',
    options: [
      'Only I.1',
      'I.1, I.4, and I.9',
      'I.1 and I.9',
      'I.9 only'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'I.10 constructs an equilateral triangle (I.1) on the line, then bisects the vertex angle (I.9).',
  },
];
