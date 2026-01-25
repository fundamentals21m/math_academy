import type { QuizQuestion } from './types';

export const section113Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which earlier proposition is essential for constructing the inscribed pentagon in IV.11?',
    options: [
      'I.47 (Pythagorean theorem)',
      'II.14 (constructing a square equal to a rectangle)',
      'IV.10 (golden triangle)',
      'III.31 (angle in semicircle)',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'IV.10 constructs the golden triangle (36°-72°-72°), which is inscribed in the circle and then subdivided to create the five vertices of the pentagon.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the measure of each interior angle of a regular pentagon?',
    options: [
      '90°',
      '72°',
      '120°',
      '108°',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A regular pentagon has interior angles of (5-2)×180°/5 = 108° each.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In a regular pentagon, what is the ratio of a diagonal to a side?',
    options: [
      '√2',
      'φ (golden ratio, ≈1.618)',
      '2',
      'π/2',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The diagonals of a regular pentagon relate to its sides by the golden ratio φ ≈ 1.618. This is why the golden ratio construction (IV.10) is prerequisite.',
  },
];
