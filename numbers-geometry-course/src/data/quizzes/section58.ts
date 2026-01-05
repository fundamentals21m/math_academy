import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 58: Isometries of the Plane
 */
export const section58Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What property defines an isometry?',
    options: [
      'Preserves angles',
      'Preserves distances',
      'Preserves areas',
      'Fixes the origin',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'An isometry is a transformation that preserves distances between points.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which complex function represents rotation by angle θ about the origin?',
    options: [
      'f(z) = z + θ',
      'f(z) = θz',
      'f(z) = e^(iθ)z',
      'f(z) = z̄',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Rotation by θ is f(z) = e^(iθ)z, which multiplies the argument by θ while preserving absolute value.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What geometric operation does complex conjugation z̄ perform?',
    options: [
      'Rotation by 90°',
      'Rotation by 180°',
      'Reflection in the real axis',
      'Translation by 1',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Conjugation z̄ = a - bi reflects the point z = a + bi in the real axis.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How many fixed points does a non-identity rotation have?',
    options: ['None', 'Exactly one', 'Exactly two', 'Infinitely many'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'A rotation has exactly one fixed point—its center of rotation.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is z · z̄ equal to?',
    options: ['z²', '|z|', '|z|²', '2z'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'z · z̄ = (a + bi)(a - bi) = a² + b² = |z|².',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which isometry reverses orientation?',
    options: ['Translation', 'Rotation', 'Reflection', 'Both rotation and translation'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Reflection reverses orientation (switches handedness), while rotations and translations preserve it.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the general form of an orientation-preserving isometry?',
    options: [
      'f(z) = z + c',
      'f(z) = e^(iθ)z + c',
      'f(z) = e^(iθ)z̄ + c',
      'f(z) = |z|',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Every orientation-preserving isometry can be written as f(z) = e^(iθ)z + c (rotation + translation).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'To rotate about a point c (not the origin), we use:',
    options: [
      'f(z) = e^(iθ)z + c',
      'f(z) = e^(iθ)(z - c) + c',
      'f(z) = e^(iθ)z - c',
      'f(z) = c · e^(iθ)z',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'We translate c to the origin (z - c), rotate (e^(iθ)), then translate back (+ c).',
  },
];
