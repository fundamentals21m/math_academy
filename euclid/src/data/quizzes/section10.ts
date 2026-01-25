import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.10 construct?',
    options: [
      'The bisector of an angle',
      'The midpoint of a finite straight line',
      'A perpendicular from a point',
      'A parallel line',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.10: "To bisect a given finite straight line."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which earlier propositions does I.10 use?',
    options: [
      'I.1 and I.9',
      'Only I.1',
      'I.1, I.4, and I.9',
      'I.9 only',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'I.10 constructs an equilateral triangle (I.1) on the line, then bisects the vertex angle (I.9).',
  },
];
