import type { QuizQuestion } from './types';

export const section114Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In IV.12, how is a circumscribed pentagon constructed?',
    options: [
      'By doubling the inscribed pentagon',
      'By using only angle bisectors',
      'By drawing tangent lines at the vertices of an inscribed pentagon',
      'By extending the sides of an inscribed pentagon'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'First inscribe a pentagon (IV.11), then draw tangent lines at each vertex. These tangents meet to form the circumscribed pentagon.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why are the sides of the circumscribed pentagon equal?',
    options: [
      'Because tangent segments from an external point to a circle are equal',
      'By assumption',
      'Because they are parallel',
      'Because of the Pythagorean theorem',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Tangent segments from the same external point to a circle are equal. This, combined with the symmetry from the inscribed pentagon, makes all sides equal.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the relationship between IV.11 and IV.12?',
    options: [
      'They are independent constructions',
      'IV.11 uses IV.12',
      'They produce the same figure',
      'IV.12 (circumscribed) builds upon IV.11 (inscribed)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'IV.12 starts by inscribing a pentagon (IV.11), then constructs tangent lines at each vertex to create the circumscribed pentagon.',
  },
];
