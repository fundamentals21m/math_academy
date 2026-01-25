import type { QuizQuestion } from './types';

export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The second derivative $f\'\'(x)$ tells us about:',
    options: [
      'Where $f$ is zero',
      'The $y$-intercept',
      'Concavity of $f
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The second derivative determines concavity (curving up or down).',
  },
      'The domain of $f
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The second derivative determines concavity (curving up or down).',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The second derivative determines concavity (curving up or down).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f\'\'(x) > 0$, then $f$ is:',
    options: [
      'Concave up',
      'Concave down',
      'Linear',
      'Decreasing',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Positive second derivative means concave up (curves upward like a cup).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'An inflection point occurs where:',
    options: [
      'Concavity changes',
      '$f\\'(x) = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Inflection points are where the function changes from concave up to concave down or vice versa.',
  },
      '$f(x) = 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Inflection points are where the function changes from concave up to concave down or vice versa.',
  },
      '$f$ has a maximum',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Inflection points are where the function changes from concave up to concave down or vice versa.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Second Derivative Test: if $f\'(c) = 0$ and $f\'\'(c) > 0$, then $f$ has:',
    options: [
      'A local maximum at $c
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Zero first derivative and positive second derivative means local minimum.',
  },
      'An inflection point at $c
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Zero first derivative and positive second derivative means local minimum.',
  },
      'No conclusion',
      'A local minimum at $c
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Zero first derivative and positive second derivative means local minimum.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Zero first derivative and positive second derivative means local minimum.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For $f(x) = x^3 - 3x$, the inflection point occurs at $x = ?$ (where $f\'\'(x) = 0$)',
    correctAnswer: 0,
    numericRange: { min: -10, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: '$f\'(x) = 3x^2 - 3$, $f\'\'(x) = 6x = 0$ at $x = 0$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'When sketching a curve, we analyze:',
    options: [
      'Intercepts, critical points, inflection points, asymptotes, and end behavior',
      'Only the $y$-intercept',
      'Only where $f = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Curve sketching combines information from $f$, $f\'$, and $f\'\'$.',
  },
      'Only the maximum',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Curve sketching combines information from $f$, $f\'$, and $f\'\'$.',
  },
];
