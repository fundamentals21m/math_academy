import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 18: Discussion - The Pythagorean Influence
 */
export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How did the Pythagoreans discover the power of numbers?',
    options: [
      'Through astronomy',
      'Through calculus',
      'Through measuring land',
      'Through studying plucked strings and music',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The Pythagoreans discovered that musical harmony corresponds to simple integer ratios in string lengths, leading them to believe numbers explain all things.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What ratio corresponds to the musical octave?',
    options: [
      '3:2',
      '2:1',
      '4:3',
      '5:4',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The octave corresponds to a string length ratio of 2:1. The perfect fifth is 3:2 and the perfect fourth is 4:3.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What was the "harmony of the spheres"?',
    options: [
      'A musical instrument',
      'A proof of the Pythagorean theorem',
      'An attempt to explain planetary positions using numbers',
      'A type of geometric shape',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The harmony of the spheres was an idea that planetary positions could be explained by numerical ratios, similar to musical harmonies.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'Who provided a better explanation for planetary motion than the harmony of the spheres?',
    options: [
      'Kepler',
      'Aristotle',
      'Pythagoras',
      'Newton',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      "Newton's theory of gravitation explained planetary motion through inverse-square forces, replacing the Pythagorean musical explanation.",
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the Pythagorean comma?',
    options: [
      'A type of punctuation',
      'The small difference between 7 octaves and 12 perfect fifths',
      'A musical instrument',
      'A theorem about triangles',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The Pythagorean comma is the small discrepancy between 7 octaves (2^7 = 128) and 12 perfect fifths ((3/2)^12 ≈ 129.75), showing perfect tuning is impossible.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why is Pythagorean music theory "fundamentally irrational"?',
    options: [
      'The Pythagoreans were irrational people',
      'Musical harmony involves irrational ratios',
      'The ratio of octave to fifth involves irrational numbers',
      'Music cannot be described mathematically',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Comparing intervals like the octave and perfect fifth leads to irrational numbers. The ratio of their sizes cannot be expressed as a ratio of integers.',
  },
  {
    id: 7,
    type: 'numeric',
    question: 'What is $2^7$, the multiplier for 7 octaves?',
    correctAnswer: 128,
    numericRange: { min: 0, max: 200, precision: 0 },
    difficulty: 'easy',
    explanation:
      '2^7 = 128. This is the factor by which string length is multiplied when lowered by 7 octaves.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'How was the Pythagorean dream ultimately fulfilled?',
    options: [
      'By expanding numbers to include all real numbers',
      'By restricting to rational numbers only',
      'By abandoning mathematics',
      'By rejecting the connection between numbers and nature'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The dream of understanding nature through numbers succeeded by expanding the number concept from rationals to all real numbers, allowing irrational lengths to be represented.',
  },
];
