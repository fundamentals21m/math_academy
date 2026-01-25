import type { QuizQuestion } from './types';

export const section37Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The cross-ratio of four points p, q, r, s is defined as:',
    options: [
      '$(r - p) + (s - q)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The cross-ratio is a specific ratio of ratios of distances.',
  },
      '$\\frac{r + s}{p + q}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The cross-ratio is a specific ratio of ratios of distances.',
  },
      '$(r - p)(s - q)(r - q)(s - p)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The cross-ratio is a specific ratio of ratios of distances.',
  },
      '$\\frac{(r - p)(s - q)}{(r - q)(s - p)}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The cross-ratio is a specific ratio of ratios of distances.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The cross-ratio is a specific ratio of ratios of distances.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The cross-ratio is invariant under:',
    options: [
      'Linear fractional transformations (projections)',
      'Translation only',
      'Rotation only',
      'Squaring',
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
      '2',
      '3/2',
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
      'By multiplying it by l',
      'By adding l to it',
      'By subtracting l',
      'Not at all',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Translation adds the same constant to all four points, so differences are unchanged.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Scaling x → kx changes the cross-ratio:',
    options: [
      'By multiplying it by k',
      'By dividing by k',
      'By multiplying it by k²',
      'Not at all',
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
      'Right angles',
      'Equal lengths',
      'Equal tiles in perspective',
      'Parallel lines',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The cross-ratio preserves the "equal spacing" information even when lengths appear distorted.',
  },
];
