import type { QuizQuestion } from './types';

export const section68Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition III.4 prove about two chords that cross inside a circle?',
    options: [
      'They are always equal in length',
      'They do not bisect each other unless both are diameters',
      'They always bisect each other',
      'They are always perpendicular'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'III.4 proves that two chords that are not both diameters cannot bisect each other inside a circle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What special case would make two chords bisect each other?',
    options: [
      'If they are equal in length',
      'If both are diameters',
      'If they are perpendicular',
      'If they subtend equal arcs'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Two diameters always bisect each other at the center. III.4 shows this is the only case.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof of III.4 proceeds by:',
    options: [
      'Direct construction',
      'Contradiction, assuming chords bisect each other',
      'Using similar triangles',
      'Applying the Pythagorean theorem'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euclid assumes two non-diameter chords bisect each other at point E, then shows E would have to be the center, contradicting that they are not diameters.',
  },
];
