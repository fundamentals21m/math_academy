import type { QuizQuestion } from './types';

export const section61Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A conformal map is one that preserves:',
    options: [
      'Distances',
      'Angles',
      'Lengths of curves',
      'Areas'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Conformal means angle-preserving: the angle between curves at a point is preserved under the map.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Möbius transformations are conformal because their derivative is:',
    options: [
      'Always positive',
      'Zero',
      'Pure imaginary',
      'Never zero (where defined)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For f(z) = (az + b)/(cz + d), f\'(z) = (ad − bc)/(cz + d)² ≠ 0 since ad − bc ≠ 0.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the upper half plane, hyperbolic angles equal:',
    options: [
      'Half the Euclidean angles',
      'The complement of Euclidean angles',
      'The same as Euclidean angles',
      'Double the Euclidean angles',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The hyperbolic metric is a scalar multiple of the Euclidean metric at each point, so angles coincide.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The transformation $z \\mapsto z^2$ is conformal except at:',
    options: [
      '$z = i
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The derivative is 2z, which is zero only at z = 0. Angles double there instead of being preserved.',
  },
      '$z = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The derivative is 2z, which is zero only at z = 0. Angles double there instead of being preserved.',
  },
      '$z = 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The derivative is 2z, which is zero only at z = 0. Angles double there instead of being preserved.',
  },
      'All points',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The derivative is 2z, which is zero only at z = 0. Angles double there instead of being preserved.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Given any three distinct points on the boundary, there is a unique Möbius transformation mapping them to:',
    options: [
      'Any other three distinct points',
      'Any other single point',
      'Points inside the half plane',
      'The same three points',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Möbius transformations act triply transitively on the boundary: any triple maps to any other triple uniquely.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'An orientation-reversing conformal map preserves angle magnitudes but:',
    options: [
      'Reverses their sense (clockwise ↔ counterclockwise)',
      'Halves them',
      'Doubles them',
      'Adds 90°',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Orientation-reversing maps (like reflections) preserve angle size but reverse orientation.',
  },
];
