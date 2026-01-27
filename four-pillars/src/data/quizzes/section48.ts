import type { QuizQuestion } from './types';

export const section48Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An isometry of the plane is a function that preserves:',
    options: [
      'Angles only',
      'Distance',
      'Area only',
      'Color'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An isometry is a distance-preserving map: |f(P) − f(Q)| = |P − Q|.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Every isometry of the plane is one of:',
    options: [
      'Rotation, translation, or scaling',
      'Rotation or reflection only',
      'Rotation, translation, reflection, or glide reflection',
      'Translation or scaling'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The four types of isometries are: rotation, translation, reflection, and glide reflection.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The product of reflections in two lines meeting at angle $\\theta$ is:',
    options: [
      'A translation',
      'A rotation through angle $\\theta$',
      'A glide reflection',
      'A rotation through angle $2\\theta$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Two reflections in lines meeting at angle θ produce a rotation through 2θ.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The product of reflections in two parallel lines at distance $d$ apart is:',
    options: [
      'A translation through distance $2d$',
      'A rotation',
      'A translation through distance $d$',
      'The identity'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Two reflections in parallel lines distance d apart give a translation through 2d.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Orientation-preserving isometries are exactly:',
    options: [
      'Reflections and glide reflections',
      'Rotations and translations',
      'Translations only',
      'All isometries'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Rotations and translations preserve orientation; reflections and glide reflections reverse it.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Every isometry of the plane is a product of at most:',
    options: [
      'One reflection',
      'Two reflections',
      'Three reflections',
      'Four reflections'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Three Reflections Theorem: every isometry can be expressed as a product of at most three reflections.',
  },
];
