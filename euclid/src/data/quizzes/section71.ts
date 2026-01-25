import type { QuizQuestion } from './types';

export const section71Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition III.7 establish about a point not at the center?',
    options: [
      'It lies on the circumference',
      'It is equidistant from all points on the circle',
      'The longest line from it to the circle passes through the center',
      'It cannot be inside the circle',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'III.7 proves that for a point inside a circle (not the center), the longest line segment to the circumference is the one passing through the center.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a point inside a circle, the shortest line to the circumference:',
    options: [
      'Is on the opposite side from the longest line (both on the line through the center)',
      'Passes through the center',
      'Is perpendicular to the diameter',
      'Is parallel to the tangent',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The shortest segment is also on the line through the center, but on the near side of the circle.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'III.7 shows that from an internal point, there are exactly how many lines of each length to the circle?',
    options: [
      'One of every length',
      'Two of every intermediate length, one of maximum, one of minimum',
      'None - all lengths are different',
      'Infinitely many of each length',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'There is exactly one maximum and one minimum distance, and for each intermediate distance, there are exactly two lines reaching the circle.',
  },
];
