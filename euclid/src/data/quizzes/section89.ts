import type { QuizQuestion } from './types';

export const section89Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.25 is a construction. What does it construct?',
    options: [
      'A tangent line to a circle',
      'The center of a given complete circle',
      'A chord of given length',
      'The complete circle given a segment of it'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'III.25 shows how to complete a circle when only a segment (arc and chord) is given.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The construction relies on finding what?',
    options: [
      'The diameter',
      'The tangent point',
      'The center of the circle',
      'The inscribed angle',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'To complete the circle, we must find the center, then draw the full circle with that center and appropriate radius.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The construction in III.25 uses perpendicular bisectors because:',
    options: [
      'They are easier to construct',
      'The perpendicular bisector of any chord passes through the center',
      'They create right angles',
      'They bisect the arc'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By III.1 and III.3, the perpendicular bisector of any chord passes through the center, allowing us to locate it.',
  },
];
