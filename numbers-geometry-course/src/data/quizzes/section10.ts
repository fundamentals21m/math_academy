import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 10: Geometric Intuition
 */
export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How does geometry contrast with arithmetic?',
    options: [
      'Both are discrete and computational',
      'Geometry is continuous and visual; arithmetic is discrete and logical',
      'Arithmetic is continuous; geometry is discrete',
      'They have no relationship to each other',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Geometry is continuous, fluid, dynamic, and visual, while arithmetic is discrete, static, computational, and logical. They are complementary.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Pythagorean theorem states that:',
    options: [
      '$a + b = c$',
      '$a^2 + b^2 = c^2$ where $c$ is the hypotenuse',
      '$a \\times b = c^2$',
      'The sum of angles in a triangle is 180°',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The Pythagorean theorem states that in a right triangle, the square on the hypotenuse equals the sum of squares on the other two sides: $a^2 + b^2 = c^2$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who gave a beautiful visual proof of the Pythagorean theorem in the 12th century?',
    options: [
      'Euclid',
      'Pythagoras',
      'Bhaskara II',
      'Descartes',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Bhaskara II, an Indian mathematician of the 12th century, gave a very immediate visual proof of the Pythagorean theorem.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the main weakness of synthetic geometry?',
    options: [
      'It requires calculus',
      'It fails to explain the similarity between geometry and arithmetic',
      'It was invented too recently',
      'It cannot prove the Pythagorean theorem',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Synthetic geometry is self-contained and close to intuition, but it fails to explain why geometric quantities (like numbers) can be added, subtracted, and multiplied.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Who initiated analytic geometry?',
    options: [
      'Euclid (300 BC)',
      'Thales (6th century BC)',
      'René Descartes (1637)',
      'David Hilbert (1899)',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Analytic geometry was initiated by René Descartes in his Geometry (1637). It uses coordinates and algebra to study geometric objects.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'According to legend, who proved that any right-angled triangle fits in a semicircle?',
    options: [
      'Pythagoras',
      'Thales',
      'Euclid',
      'Gauss',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'According to legend, Thales in the 6th century BC proved that any right-angled triangle fits in a semicircle, with the hypotenuse as diameter.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why is geometric intuition described as both a "blessing and a curse"?',
    options: [
      'It is easy to learn but hard to master',
      'It gives direct access to results, but they must still be validated by logic',
      'It works in 2D but not 3D',
      'It was useful in ancient times but not today',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Intuition gives amazingly direct access to mathematical results, but we cannot be satisfied until they have been validated by logic—intuition alone is not proof.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What new mathematical world does analytic geometry open?',
    options: [
      'Set theory and logic',
      'Algebra and calculus',
      'Number theory only',
      'Topology and manifolds',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Analytic geometry enriches both arithmetic and geometry with new concepts, opening the whole new mathematical world of algebra and calculus.',
  },
];
