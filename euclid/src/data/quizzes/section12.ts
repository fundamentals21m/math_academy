import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.12 construct?',
    options: [
      'A perpendicular from a point on a line',
      'A perpendicular from a point not on a line to that line',
      'A parallel through a point',
      'An angle equal to a given angle'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.12: "To draw a straight line perpendicular to a given infinite straight line from a given point not on it."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the key step in the construction of I.12?',
    options: [
      'Constructing an equilateral triangle',
      'Using the parallel postulate',
      'Bisecting an angle',
      'Drawing a circle centered at the given point that intersects the line at two points',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Draw a circle centered at the point that crosses the line twice, then bisect the chord between the intersections.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which propositions does I.12 rely on?',
    options: [
      'I.8 and I.10',
      'I.8 and I.9',
      'I.10 and I.11',
      'I.4 and I.10',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'I.12 uses I.10 (bisect the chord) and I.8 (SSS) to prove the angles are right angles.',
  },
];
