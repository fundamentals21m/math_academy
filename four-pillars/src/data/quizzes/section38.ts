import type { QuizQuestion } from './types';

export const section38Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Given three points p, q, r, the fourth point s is uniquely determined by:',
    options: [
      'The sum p + q + r + s',
      'Nothing — s can be any point',
      'The average of p, q, r',
      'The cross-ratio [p, q; r, s]'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Once the cross-ratio value is fixed, there is exactly one s with that cross-ratio.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Any three points on ℝP¹ can be sent to any other three points by:',
    options: [
      'A unique linear fractional transformation',
      'Infinitely many transformations',
      'No transformation',
      'Only a translation'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'There is exactly one linear fractional function mapping any triple to any other triple.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A nontrivial projective invariant must involve at least:',
    options: [
      'Two points',
      'Four points',
      'Five points',
      'Three points'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Any three points can be mapped to any three points, so invariants of triples are trivial.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Any invariant of four points under linear fractional transformations is:',
    options: [
      'Always equal to 1',
      'Independent of the cross-ratio',
      'A function of the cross-ratio',
      'Always undefined'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'All four-point invariants can be expressed in terms of the cross-ratio.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If [p, q; r, s] = y, then [p, q; s, r] = :',
    options: [
      'y',
      '1/y',
      '−y',
      '1 − y',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Swapping the last two points inverts the cross-ratio.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The cross-ratio group consists of how many transformations?',
    options: [
      '6',
      '4',
      '2',
      '24'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Permuting four variables produces six distinct functions: y, 1/y, 1−y, 1−1/y, 1/(1−y), y/(y−1).',
  },
];
