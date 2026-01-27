import type { QuizQuestion } from './types';

export const section37Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The cross-ratio of four points p, q, r, s is defined as:',
    options: [
      '$(r - p) + (s - q)$',
      '$(r - p)(s - q)(r - q)(s - p)$',
      '$\\frac{r + s}{p + q}$',
      '$\\frac{(r - p)(s - q)}{(r - q)(s - p)}$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The cross-ratio is a specific ratio of ratios of distances.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The cross-ratio is invariant under:',
    options: [
      'Linear fractional transformations (projections)',
      'Rotation only',
      'Translation only',
      'Squaring'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The cross-ratio is preserved by all linear fractional (projective) transformations.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The cross-ratio of equally spaced points 0, 1, 2, 3 is:',
    options: [
      '1',
      '4/3',
      '3/2',
      '2'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '[0, 1; 2, 3] = (2−0)(3−1)/((2−1)(3−0)) = 2×2/(1×3) = 4/3.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Translation x → x + l changes the cross-ratio:',
    options: [
      'By adding l to it',
      'By multiplying it by l',
      'Not at all',
      'By subtracting l'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Translation adds the same constant to all four points, so differences are unchanged.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Scaling x → kx changes the cross-ratio:',
    options: [
      'By multiplying it by k',
      'By multiplying it by k²',
      'By dividing by k',
      'Not at all'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Each factor gains k, and k² cancels in numerator and denominator.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The cross-ratio is the quantity preserved by projection that allows us to recognize:',
    options: [
      'Equal tiles in perspective',
      'Equal lengths',
      'Right angles',
      'Parallel lines'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The cross-ratio preserves the "equal spacing" information even when lengths appear distorted.',
  },
];
