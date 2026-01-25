import type { QuizQuestion } from './types';

export const section72Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.8 deals with lines drawn from a point:',
    options: [
      'Inside the circle',
      'At the center of the circle',
      'On the circumference',
      'Outside the circle',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'III.8 analyzes lines from an external point to the circle, complementing III.7 which dealt with internal points.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'From an external point, which line to the circle is shortest?',
    options: [
      'The tangent line',
      'The line through the center (near side)',
      'The line through the center (far side)',
      'Any chord through the point'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The shortest distance from an external point to a circle is along the line through the center, to the near side of the circle.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'From an external point, how many lines of a given length reach the circle (between minimum and maximum)?',
    options: [
      'Two',
      'One',
      'Infinitely many',
      'None',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For any length between the minimum and maximum distances, exactly two lines from the external point reach the circle at that distance.',
  },
];
