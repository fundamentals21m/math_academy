import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An isometry of ℝ² is determined by the images of:',
    options: [
      'One point',
      'Four points',
      'Two points',
      'Three non-collinear points',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Any point P is determined by its distances from three non-collinear points; isometries preserve these distances.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Three Reflections Theorem says every isometry is a combination of at most:',
    options: [
      'Two reflections',
      'One reflection',
      'Four reflections',
      'Three reflections',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Any isometry can be expressed using one, two, or three reflections.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Translations and rotations are products of:',
    options: [
      'One reflection',
      'Two reflections',
      'They cannot be expressed as reflections',
      'Three reflections',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Translations = two parallel reflections; rotations = two intersecting reflections.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Glide reflections are products of:',
    options: [
      'Two reflections',
      'One reflection',
      'Three reflections',
      'Zero reflections',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A glide reflection with nonzero translation requires exactly three reflections.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Translations and rotations ____ orientation.',
    options: [
      'Reverse',
      'Preserve',
      'Have no effect on',
      'Sometimes preserve, sometimes reverse'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Even numbers of reflections preserve orientation (clockwise stays clockwise).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Reflections and glide reflections ____ orientation.',
    options: [
      'Reverse',
      'Sometimes preserve, sometimes reverse',
      'Preserve',
      'Double',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Odd numbers of reflections reverse orientation (clockwise becomes counterclockwise).',
  },
];
