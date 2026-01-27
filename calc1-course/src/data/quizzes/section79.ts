import type { QuizQuestion } from './types';

export const section79Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A line in $\\mathbb{R}^n$ through point $\\mathbf{P}$ with direction $\\mathbf{d}$ is:',
    options: [
      '$\\{\\mathbf{P} + \\mathbf{d}\\}$',
      '$\\{t\\mathbf{P} : t \\in \\mathbb{R}\\}$',
      '$\\{\\mathbf{P} + t\\mathbf{d} : t \\in \\mathbb{R}\\}$',
      '$\\mathbf{P} \\cdot \\mathbf{d}$'
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
      '$x = P_1 d_1$',
      '$x = t$, $y = t$',
      '$x + y = 0$',
      '$x = P_1 + td_1$, $y = P_2 + td_2$, etc.'
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
      'Their direction vectors are scalar multiples',
      'They intersect',
      'They are perpendicular',
      'They have the same $y$-intercept'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Parallel: same or opposite direction.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The line through $(1, 2, 3)$ with direction $(1, 0, -1)$ has parametric equations:',
    options: [
      '$x = t$, $y = 2t$, $z = 3t$',
      '$x = 1 + t$, $y = 2$, $z = 3 - t$',
      '$x = 1$, $y = 2$, $z = 3$',
      '$x = 1 + 2t$, $y = 2 + 3t$, $z = 3$'
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
      'Must intersect',
      'Are always perpendicular',
      'May be skew (not intersect and not parallel)',
      'Must be coplanar'
    ],
    correctIndex: 2,
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
