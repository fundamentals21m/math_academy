import type { QuizQuestion } from './types';

export const section79Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A line in $\\mathbb{R}^n$ through point $\\mathbf{P}$ with direction $\\mathbf{d}$ is:',
    options: [
      '$\\{\\mathbf{P} + t\\mathbf{d} : t \\in \\mathbb{R}\\}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Parametric form: $\\mathbf{r}(t) = \\mathbf{P} + t\\mathbf{d}$.',
  },
      '$\\{\\mathbf{P} + \\mathbf{d}\\}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Parametric form: $\\mathbf{r}(t) = \\mathbf{P} + t\\mathbf{d}$.',
  },
      '$\\{t\\mathbf{P} : t \\in \\mathbb{R}\\}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Parametric form: $\\mathbf{r}(t) = \\mathbf{P} + t\\mathbf{d}$.',
  },
      '$\\mathbf{P} \\cdot \\mathbf{d}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Parametric form: $\\mathbf{r}(t) = \\mathbf{P} + t\\mathbf{d}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Parametric form: $\\mathbf{r}(t) = \\mathbf{P} + t\\mathbf{d}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The parametric equations for a line are:',
    options: [
      '$x = P_1 d_1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Each coordinate is linear in parameter $t$.',
  },
      '$x = P_1 + td_1$, $y = P_2 + td_2$, etc.',
      '$x = t$, $y = t
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each coordinate is linear in parameter $t$.',
  },
      '$x + y = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each coordinate is linear in parameter $t$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each coordinate is linear in parameter $t$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Two lines are parallel if:',
    options: [
      'They intersect',
      'They are perpendicular',
      'They have the same $y$-intercept',
      'Their direction vectors are scalar multiples',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Parallel: same or opposite direction.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The line through $(1, 2, 3)$ with direction $(1, 0, -1)$ has parametric equations:',
    options: [
      '$x = t$, $y = 2t$, $z = 3t
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Add $t$ times direction to point.',
  },
      '$x = 1$, $y = 2$, $z = 3
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Add $t$ times direction to point.',
  },
      '$x = 1 + t$, $y = 2$, $z = 3 - t
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Add $t$ times direction to point.',
  },
      '$x = 1 + 2t$, $y = 2 + 3t$, $z = 3
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Add $t$ times direction to point.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Add $t$ times direction to point.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In 3D, two distinct lines that are not parallel:',
    options: [
      'May be skew (not intersect and not parallel)',
      'Must intersect',
      'Are always perpendicular',
      'Must be coplanar',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In 3D, non-parallel lines can be skew (no intersection).',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'On the line $(x, y) = (2, 1) + t(1, 3)$, what is $y$ when $t = 2$?',
    correctAnswer: 7,
    numericRange: { min: 5, max: 9, precision: 0 },
    difficulty: 'easy',
    explanation: '$y = 1 + 2(3) = 7$.',
  },
];
