import type { QuizQuestion } from './types';

export const section83Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.19 proves what about a perpendicular to a tangent at the tangent point?',
    options: [
      'It is parallel to the diameter',
      'It is tangent to another circle',
      'It bisects the tangent line',
      'It passes through the center of the circle',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'III.19 proves that a line perpendicular to a tangent at the point of tangency passes through the center of the circle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which propositions together show the equivalence of: (1) tangent to circle at P, (2) perpendicular to radius at P?',
    options: [
      'III.1 and III.2',
      'III.31 only',
      'III.16, III.18, and III.19',
      'III.3 and III.4',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'III.16 shows perpendicular to diameter endpoint is tangent; III.18 shows tangent is perpendicular to radius; III.19 shows perpendicular to tangent hits center.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'III.19 can be used to find the center of a circle if you know:',
    options: [
      'One chord',
      'One tangent line and its point of tangency',
      'Two parallel chords',
      'The diameter only',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Given a tangent and its point of tangency, the perpendicular to the tangent at that point passes through the center.',
  },
];
