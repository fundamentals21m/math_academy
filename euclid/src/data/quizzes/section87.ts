import type { QuizQuestion } from './types';

export const section87Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.23 proves that on the same base, how many similar segments of circles can exist on the same side?',
    options: [
      'None',
      'Exactly two',
      'Infinitely many',
      'Exactly one',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'III.23 proves that on the same chord and same side, two similar but unequal segments cannot exist—there is at most one similar segment.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Two circular segments are "similar" if:',
    options: [
      'They have equal areas',
      'They have equal arcs',
      'They contain equal angles (inscribed angles in them are equal)',
      'They have the same radius'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Similar segments admit equal angles—any inscribed angle in one segment equals any inscribed angle in the other.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof of III.23 relies on:',
    options: [
      'III.20 (central and inscribed angles)',
      'III.21 (angles in same segment)',
      'I.47 (Pythagorean theorem)',
      'III.16 (tangent perpendicular to radius)',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The proof uses III.21: if two segments on the same base were similar, inscribed angles would be equal, leading to a contradiction if the segments differ.',
  },
];
