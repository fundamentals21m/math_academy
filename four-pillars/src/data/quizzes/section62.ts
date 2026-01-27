import type { QuizQuestion } from './types';

export const section62Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The non-Euclidean distance from $i$ to $2i$ on the imaginary axis is:',
    options: [
      '$2$',
      '$\\log 2$',
      '$1$',
      '$\\log 3$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'On the imaginary axis, ndist(pi, qi) = log(q/p) = log(2/1) = log 2.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The hyperbolic distance formula uses which function?',
    options: [
      'Exponential',
      'Sine',
      'Logarithm',
      'Square root'
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
      'It fixes all points',
      'It is a rotation',
      'The factors of $k$ cancel in the ratio $q/p$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'ndist(kpi, kqi) = log(kq/kp) = log(q/p) = ndist(pi, qi). The k cancels.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The hyperbolic distance from any interior point to the boundary is:',
    options: [
      'Infinite',
      'Zero',
      'One',
      'Finite but positive'
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
      '$ds = |dz|$',
      '$ds = |dz|/y$',
      '$ds = |dz|/x$',
      '$ds = |dz| \\cdot y$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The hyperbolic metric is ds = |dz|/y = √(dx² + dy²)/y, inversely proportional to height.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The shortest path between two points in the hyperbolic plane is:',
    options: [
      'A Euclidean straight line',
      'A horizontal line',
      'The arc of the non-Euclidean line through them',
      'Any smooth curve'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Non-Euclidean lines are geodesics: they minimize hyperbolic distance between points.',
  },
];
