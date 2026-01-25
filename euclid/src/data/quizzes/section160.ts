import type { QuizQuestion } from './types';

export const section160Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VI.15 is the triangle analogue of VI.14. Equal triangles with one angle equal have:',
    options: [
      'Equal bases',
      'Equal heights',
      'Congruent medians',
      'Reciprocally proportional sides about the equal angles',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'VI.15 proves that equal triangles sharing one equal angle have their sides about that angle reciprocally proportional.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If triangles ABC and DEF have equal areas, angle A = angle D, and sides AB = 4, AC = 6, DE = 3, what is DF?',
    options: [
      '6',
      '9',
      '8',
      '12',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By reciprocal proportion: AB:DE = DF:AC, so 4:3 = DF:6, giving DF = 8.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does VI.15 require the equal angles to be at corresponding vertices?',
    options: [
      'For aesthetic symmetry',
      'Because the area formula involves sine of the included angle',
      'To ensure the triangles are congruent',
      'To make the proof shorter',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Area = (1/2)ab sin(C). For equal areas with equal angles, the products of the two sides must be equal, yielding reciprocal proportion.',
  },
];
