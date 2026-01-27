import type { QuizQuestion } from './types';

export const section61Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A conformal map is one that preserves:',
    options: [
      'Distances',
      'Areas',
      'Lengths of curves',
      'Angles'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Conformal means angle-preserving: the angle between curves at a point is preserved under the map.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Möbius transformations are conformal because their derivative is:',
    options: [
      'Never zero (where defined)',
      'Zero',
      'Always positive',
      'Pure imaginary'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For f(z) = (az + b)/(cz + d), f\'(z) = (ad − bc)/(cz + d)² ≠ 0 since ad − bc ≠ 0.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the upper half plane, hyperbolic angles equal:',
    options: [
      'Half the Euclidean angles',
      'The same as Euclidean angles',
      'Double the Euclidean angles',
      'The complement of Euclidean angles'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The hyperbolic metric is a scalar multiple of the Euclidean metric at each point, so angles coincide.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The transformation $z \\mapsto z^2$ is conformal except at:',
    options: [
      '$z = 1$',
      '$z = i$',
      '$z = 0$',
      'All points'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The derivative is 2z, which is zero only at z = 0. Angles double there instead of being preserved.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Given any three distinct points on the boundary, there is a unique Möbius transformation mapping them to:',
    options: [
      'Any other single point',
      'The same three points',
      'Points inside the half plane',
      'Any other three distinct points'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Möbius transformations act triply transitively on the boundary: any triple maps to any other triple uniquely.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'An orientation-reversing conformal map preserves angle magnitudes but:',
    options: [
      'Reverses their sense (clockwise ↔ counterclockwise)',
      'Doubles them',
      'Halves them',
      'Adds 90°'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Orientation-reversing maps (like reflections) preserve angle size but reverse orientation.',
  },
];
