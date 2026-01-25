import type { QuizQuestion } from './types';

export const section80Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.16 proves what fundamental property of tangent lines?',
    options: [
      'A tangent is parallel to the diameter',
      'A line perpendicular to a diameter at its endpoint is tangent to the circle',
      'A tangent line bisects the circle',
      'A tangent passes through the center',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'III.16 proves that the line drawn perpendicular to a diameter at its extremity (endpoint on the circle) is tangent to the circle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the key relationship between a tangent line and the radius at the point of tangency?',
    options: [
      'They are parallel',
      'They form a 45° angle',
      'They are equal in length',
      'They are perpendicular',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A tangent line is perpendicular to the radius at the point of tangency. This is fundamental to tangent geometry.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'III.16 also proves that no straight line can fall between:',
    options: [
      'Two parallel tangents',
      'The center and the circumference',
      'The circle and its tangent (at the tangent point)',
      'Two intersecting chords',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'III.16 proves that no straight line can be inserted between the circle and the tangent at the point of tangency—the tangent is the limiting position.',
  },
];
