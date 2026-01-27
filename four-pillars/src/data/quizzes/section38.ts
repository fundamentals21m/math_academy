import type { QuizQuestion } from './types';

export const section38Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Given three points p, q, r, the fourth point s is uniquely determined by:',
    options: [
      'The sum p + q + r + s',
      'The cross-ratio [p, q; r, s]',
      'The average of p, q, r',
      'Nothing — s can be any point'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Once the cross-ratio value is fixed, there is exactly one s with that cross-ratio.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Any three points on ℝP¹ can be sent to any other three points by:',
    options: [
      'No transformation',
      'Infinitely many transformations',
      'A unique linear fractional transformation',
      'Only a translation'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'There is exactly one linear fractional function mapping any triple to any other triple.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A nontrivial projective invariant must involve at least:',
    options: [
      'Two points',
      'Three points',
      'Five points',
      'Four points'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Any three points can be mapped to any three points, so invariants of triples are trivial.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Any invariant of four points under linear fractional transformations is:',
    options: [
      'A function of the cross-ratio',
      'Independent of the cross-ratio',
      'Always equal to 1',
      'Always undefined'
    ],
    correctIndex: 0,
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
      '1 − y',
      '−y'
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
      '2',
      '4',
      '6',
      '24'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Permuting four variables produces six distinct functions: y, 1/y, 1−y, 1−1/y, 1/(1−y), y/(y−1).',
  },
];
