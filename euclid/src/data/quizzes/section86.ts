import type { QuizQuestion } from './types';

export const section86Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.22 proves what about opposite angles in a cyclic quadrilateral?',
    options: [
      'They are supplementary (sum to 180°)',
      'They are equal',
      'They are complementary (sum to 90°)',
      'They are right angles',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'III.22 proves that opposite angles of a quadrilateral inscribed in a circle sum to two right angles (180°).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In cyclic quadrilateral ABCD, if ∠A = 70°, what is ∠C?',
    options: [
      '70°',
      '90°',
      '110°',
      '140°',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Opposite angles sum to 180°: ∠C = 180° - 70° = 110°.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does III.22 follow from III.20?',
    options: [
      'All inscribed angles are equal',
      'The quadrilateral must be a rectangle',
      'Central angles are always 360°',
      'Opposite angles subtend arcs that together make the full circle',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Angle A subtends arc BCD, angle C subtends arc BAD. These arcs together form the whole circle (360° central angle), so the inscribed angles sum to 180°.',
  },
];
