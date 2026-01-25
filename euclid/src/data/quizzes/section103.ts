import type { QuizQuestion } from './types';

export const section103Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In Proposition IV.1, what condition must the given straight line satisfy?',
    options: [
      'It must be equal to the diameter',
      'It must not be greater than the diameter',
      'It must be greater than the diameter',
      'It must be exactly half the diameter'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The given line must not exceed the diameter because the diameter is the longest chord in a circle (III.15).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a "chord" of a circle?',
    options: [
      'A line passing through the center',
      'A tangent to the circle',
      'The radius of the circle',
      'A line segment with both endpoints on the circle',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A chord is a straight line segment whose endpoints both lie on the circumference of the circle.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the construction of IV.1, why is an auxiliary circle drawn from point C?',
    options: [
      'To locate point A where a chord of the desired length can be drawn',
      'To find the center of the given circle',
      'To construct a tangent line',
      'To bisect the diameter',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The auxiliary circle with radius equal to the desired length intersects the original circle at point A, giving chord CA with the required length.',
  },
];
