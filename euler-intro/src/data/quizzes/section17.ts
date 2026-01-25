import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'When are two curves said to be similar?',
    options: [
      'When they have the same equation',
      'When they have the same degree',
      'When one can be obtained from the other by uniform scaling',
      'When they intersect',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Two curves are similar if one is a uniformly scaled (enlarged or reduced) version of the other, preserving all angles and proportions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Are all circles similar to each other?',
    options: [
      'Yes, all circles are similar',
      'No, only circles of the same radius',
      'Only concentric circles',
      'Only circles with the same center',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'All circles are similar because any circle can be scaled to match any other circle. They differ only in size, not shape.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is an affine transformation?',
    options: [
      'A transformation that includes non-uniform scaling (different in x and y directions)',
      'A transformation that preserves angles',
      'A transformation that only translates',
      'A transformation that only rotates',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'An affine transformation includes translations, rotations, and scaling (possibly non-uniform), but preserves parallelism of lines.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which curves are affinely equivalent to each other?',
    options: [
      'Only congruent curves',
      'All conics of the same type (all ellipses, all parabolas, all hyperbolas)',
      'Only circles',
      'All algebraic curves',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'All ellipses are affinely equivalent (any ellipse can be transformed to any other). Similarly for all parabolas and all hyperbolas. But an ellipse cannot be transformed into a hyperbola.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Under an affine transformation, what geometric property is preserved?',
    options: [
      'Distances',
      'Angles',
      'Perpendicularity',
      'Parallelism of lines',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Affine transformations preserve parallelism: if two lines are parallel before the transformation, they remain parallel afterward.',
  },
];
