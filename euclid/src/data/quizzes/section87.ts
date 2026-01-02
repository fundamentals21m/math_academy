import type { QuizQuestion } from './types';

export const section87Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.23 proves that on the same base, how many similar segments of circles can exist on the same side?',
    options: [
      'None',
      'Exactly one',
      'Exactly two',
      'Infinitely many'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'III.23 proves that on the same chord and same side, two similar but unequal segments cannot exist—there is at most one similar segment.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Two circular segments are "similar" if:',
    options: [
      'They have equal areas',
      'They contain equal angles (inscribed angles in them are equal)',
      'They have equal arcs',
      'They have the same radius'
    ],
    correctIndex: 1,
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
      'III.16 (tangent perpendicular to radius)',
      'I.47 (Pythagorean theorem)'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The proof uses III.21: if two segments on the same base were similar, inscribed angles would be equal, leading to a contradiction if the segments differ.',
  },
];
