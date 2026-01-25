import type { QuizQuestion } from './types';

export const section63Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A hyperbolic translation has how many fixed points on the boundary?',
    options: [
      'Two',
      'Zero',
      'Infinitely many',
      'One',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A hyperbolic translation fixes exactly two points on ℝ ∪ {∞}, the endpoints of its axis.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'An elliptic (rotational) Möbius transformation has its fixed point:',
    options: [
      'At infinity',
      'On the boundary only',
      'On the real axis',
      'In the upper half plane (interior)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Elliptic transformations fix a point inside the upper half plane (and its conjugate below).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The transformation $z \\mapsto z + 1$ is:',
    options: [
      'Hyperbolic (translation)',
      'Parabolic (limit rotation)',
      'A reflection',
      'Elliptic (rotation)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'z → z + 1 has only one fixed point (∞), making it parabolic.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Points on a horocycle are:',
    options: [
      'On a non-Euclidean line',
      'Equidistant from a point in the interior',
      'Fixed by all transformations',
      'Tangent to the boundary at one point',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Horocycles are curves tangent to the boundary at a single point (horizontal lines or circles tangent to ℝ).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $f(z) = (az + b)/(cz + d)$ with $ad - bc = 1$, the trace $\\tau = a + d$ classifies transformations as:',
    options: [
      '$|\\tau| > 2$: elliptic, $|\\tau| < 2$: hyperbolic',
      '$|\\tau| = 1$: hyperbolic',
      '$|\\tau| > 2$: hyperbolic, $|\\tau| < 2$: elliptic',
      '$\\tau = 0$: always parabolic',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '|τ| > 2: hyperbolic, |τ| < 2: elliptic, |τ| = 2: parabolic.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Parabolic transformations have no analogue in:',
    options: [
      'Projective geometry',
      'Spherical geometry',
      'Euclidean geometry',
      'Affine geometry'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Euclidean geometry has only translations and rotations; limit rotations (parabolics) are unique to hyperbolic geometry.',
  },
];
