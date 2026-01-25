import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 14: Length and Area
 */
export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Area is measured by counting:',
    options: [
      'Unit lengths',
      'Unit cubes',
      'Unit squares',
      'Angles',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Just as length is measured by counting unit lengths, area is measured by counting unit squares (squares with sides of unit length).',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is the area of a rectangle with height 4 and width 7?',
    correctAnswer: 28,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation:
      'Area of a rectangle = height × width = 4 × 7 = 28 unit squares.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What problem did $\\sqrt{2}$ pose for the Greeks?',
    options: [
      'They couldn\\\\'t draw it',
      'It was too large',
      'It doesn\\\\'t exist',
      'It is irrational, so they didn\\\\'t regard it as a number',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Since $\\sqrt{2}$ is irrational, Greeks didn\'t consider it a number. They kept a separate arithmetic of lengths and areas.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How did the Greeks define $\\sqrt{2}$?',
    options: [
      'As the side of a square of area 2',
      'As 1.414...',
      'As the diagonal of a unit square',
      'They didn\\\'t define it at all',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Greeks defined $\\sqrt{2}$ geometrically as the side of a square with area 2, avoiding the issue of whether it was a "number."',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The area of a parallelogram is:',
    options: [
      'side × side',
      'base × height',
      'base + height',
      '½ × base × height',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The area of a parallelogram equals base × height. This is shown by cutting a triangle from one end and pasting it to the other to form a rectangle.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The area of a triangle is:',
    options: [
      '2 × base × height',
      'base × height',
      '(base + height) / 2',
      '½ × base × height',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The area of a triangle is ½ × base × height. This follows because a triangle is half of a parallelogram.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How can we find the area of any polygon?',
    options: [
      'Cut it into triangles and sum their areas',
      'Measure it with a ruler',
      'It\\\'s impossible for non-rectangles',
      'Use only multiplication',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Any polygon can be cut into triangles. Since we know the formula for triangle area, we can compute any polygon\'s area.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'The word "geometry" comes from the Greek for:',
    options: [
      'Circle drawing',
      'Earth measurement (land measurement)',
      'Number counting',
      'Line extending',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      '"Geometry" comes from Greek words meaning "earth/land measurement" (geo = earth, metry = measurement).',
  },
];
