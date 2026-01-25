import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.31 construct?',
    options: [
      'A perpendicular to a line',
      'A line parallel to a given line through a given point',
      'A bisector of an angle',
      'An equilateral triangle'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.31: "Through a given point to draw a straight line parallel to a given straight line."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which proposition does the construction in I.31 rely on?',
    options: [
      'I.27 (equal alternate angles imply parallel)',
      'I.29 (parallel lines have equal alternate angles)',
      'Both I.23 and I.27',
      'I.23 (copying an angle)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'I.31 uses I.23 to copy an angle (creating equal alternate angles) and I.27 to conclude parallelism.',
  },
];
