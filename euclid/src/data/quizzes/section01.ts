import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.1 construct?',
    options: [
      'A right angle',
      'An equilateral triangle on a given line segment',
      'A perpendicular bisector',
      'A circle through three points'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Proposition I.1 shows how to construct an equilateral triangle on a given finite straight line.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the construction of I.1, how many circles are drawn?',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Two circles are drawn: one centered at each endpoint of the given line segment, each with radius equal to the segment length.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which postulates are used in the proof of I.1?',
    options: [
      'Only Postulate 1',
      'Postulates 1 and 3',
      'Postulates 1, 2, and 3',
      'All five postulates'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The proof uses Postulate 1 (drawing straight lines) and Postulate 3 (drawing circles).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What property of circles ensures the two circles in I.1 intersect?',
    options: [
      'It follows from Definition 15',
      'Euclid assumes it without explicit justification',
      'It follows from Postulate 3',
      'Common Notion 4 proves it'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'This is a famous gap in Euclid\'s reasoning. He assumes the circles intersect without proving it, though it follows from continuity considerations.',
  },
];
