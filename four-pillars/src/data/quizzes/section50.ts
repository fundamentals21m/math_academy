import type { QuizQuestion } from './types';

export const section50Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A linear fractional function has the form:',
    options: [
      '$f(x) = ax + b
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Linear fractional (Möbius) functions are ratios of linear expressions with non-zero determinant.',
  },
      '$f(x) = \\frac{ax + b}{cx + d}$ with $ad - bc \\neq 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Linear fractional (Möbius) functions are ratios of linear expressions with non-zero determinant.',
  },
      '$f(x) = a/x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Linear fractional (Möbius) functions are ratios of linear expressions with non-zero determinant.',
  },
      '$f(x) = ax^2 + bx + c
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Linear fractional (Möbius) functions are ratios of linear expressions with non-zero determinant.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Linear fractional (Möbius) functions are ratios of linear expressions with non-zero determinant.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A linear fractional transformation is completely determined by its action on:',
    options: [
      'Any two points',
      'Any one point',
      'Any three points',
      'Any four points',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Given three distinct points and their images, there is a unique Möbius transformation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The group PGL(2, $\\mathbb{R}$) consists of matrices where:',
    options: [
      'All entries are positive',
      'The trace is zero',
      'The determinant is 1',
      'Two matrices are equivalent if one is a scalar multiple of the other',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In PGL(2,ℝ), matrices A and λA (λ ≠ 0) give the same Möbius transformation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Every linear fractional transformation is a composition of:',
    options: [
      'Translations, scalings, and inversion',
      'Only translations',
      'Two rotations',
      'Only rotations and reflections',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Translations (x → x + l), scalings (x → kx), and inversion (x → 1/x) generate all Möbius maps.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A linear fractional transformation with exactly one fixed point is called:',
    options: [
      'Elliptic',
      'Parabolic',
      'Loxodromic',
      'Hyperbolic',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Parabolic transformations (like translations) have exactly one fixed point.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The fundamental invariant of linear fractional transformations is:',
    options: [
      'Angle',
      'Distance',
      'Area',
      'The cross-ratio',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Linear fractional transformations preserve the cross-ratio of any four points.',
  },
];
