import type { QuizQuestion } from './types';

export const section62Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The non-Euclidean distance from $i$ to $2i$ on the imaginary axis is:',
    options: [
      '$2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'On the imaginary axis, ndist(pi, qi) = log(q/p) = log(2/1) = log 2.',
  },
      '$\\log 2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'On the imaginary axis, ndist(pi, qi) = log(q/p) = log(2/1) = log 2.',
  },
      '$\\log 3
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'On the imaginary axis, ndist(pi, qi) = log(q/p) = log(2/1) = log 2.',
  },
      '$1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'On the imaginary axis, ndist(pi, qi) = log(q/p) = log(2/1) = log 2.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'On the imaginary axis, ndist(pi, qi) = log(q/p) = log(2/1) = log 2.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The hyperbolic distance formula uses which function?',
    options: [
      'Sine',
      'Exponential',
      'Logarithm',
      'Square root',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Hyperbolic distance is |log(CR)| where CR is the cross-ratio, involving the logarithm.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The transformation $z \\mapsto kz$ preserves hyperbolic distance because:',
    options: [
      'It preserves Euclidean distance',
      'It is a rotation',
      'The factors of $k$ cancel in the ratio $q/p
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'ndist(kpi, kqi) = log(kq/kp) = log(q/p) = ndist(pi, qi). The k cancels.',
  },
      'It fixes all points',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'ndist(kpi, kqi) = log(kq/kp) = log(q/p) = ndist(pi, qi). The k cancels.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The hyperbolic distance from any interior point to the boundary is:',
    options: [
      'Infinite',
      'One',
      'Zero',
      'Finite but positive',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'As you approach the boundary, log(1/ε) → ∞. The boundary is infinitely far from any interior point.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The hyperbolic line element (metric) at $z = x + iy$ is:',
    options: [
      '$ds = |dz|/y
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The hyperbolic metric is ds = |dz|/y = √(dx² + dy²)/y, inversely proportional to height.',
  },
      '$ds = |dz|
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The hyperbolic metric is ds = |dz|/y = √(dx² + dy²)/y, inversely proportional to height.',
  },
      '$ds = |dz| \\cdot y
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The hyperbolic metric is ds = |dz|/y = √(dx² + dy²)/y, inversely proportional to height.',
  },
      '$ds = |dz|/x
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The hyperbolic metric is ds = |dz|/y = √(dx² + dy²)/y, inversely proportional to height.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The hyperbolic metric is ds = |dz|/y = √(dx² + dy²)/y, inversely proportional to height.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The shortest path between two points in the hyperbolic plane is:',
    options: [
      'A horizontal line',
      'A Euclidean straight line',
      'Any smooth curve',
      'The arc of the non-Euclidean line through them',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Non-Euclidean lines are geodesics: they minimize hyperbolic distance between points.',
  },
];
