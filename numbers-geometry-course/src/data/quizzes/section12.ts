import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 12: Parallels and Angles
 */
export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Playfair\'s axiom, how many lines through a point $P$ are parallel to a line $\\mathcal{L}$ (not containing $P$)?',
    options: [
      'None',
      'Exactly one',
      'Exactly two',
      'Infinitely many',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Playfair\'s axiom (1795) states that through any point not on a line, there is exactly one line parallel to it.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the sum of the interior angles of a triangle in Euclidean geometry?',
    options: [
      '90° (one right angle)',
      '180° (two right angles)',
      '270° (three right angles)',
      '360° (four right angles)',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'In Euclidean geometry, the angle sum of any triangle is 180° (two right angles). This is a consequence of the parallel axiom.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Two lines cut by a transversal are parallel when their interior angles sum to:',
    options: [
      '90°',
      '180°',
      '270°',
      '360°',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'When a transversal cuts two lines, they are parallel if and only if the interior angles on the same side sum to 180° (two right angles).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Vertically opposite angles are:',
    options: [
      'Always supplementary (sum to 180°)',
      'Always complementary (sum to 90°)',
      'Always equal',
      'Always right angles',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'When two lines cross, vertically opposite angles are always equal. Each angle plus its adjacent angle equals 180°.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'What is the sum of the interior angles (in degrees) of a quadrilateral?',
    correctAnswer: 360,
    numericRange: { min: 0, max: 720, precision: 0 },
    difficulty: 'easy',
    explanation:
      'A quadrilateral can be divided into two triangles, so its angle sum is 2 × 180° = 360° (four right angles).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which statement is NOT equivalent to the parallel axiom?',
    options: [
      'The angle sum of a triangle is 180°',
      'Rectangles of any size exist',
      'Every number has a prime factorization',
      'Exactly one parallel exists through any external point',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The prime factorization theorem is from arithmetic, not geometry. The other three are all equivalent formulations of the parallel axiom.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why is the existence of rectangles important?',
    options: [
      'It proves the Pythagorean theorem',
      'It is the key to the concept of area and connecting geometry to arithmetic',
      'It shows that all angles are equal',
      'It disproves non-Euclidean geometry',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The existence of rectangles is key to the intuitive concept of area and to finding a common ground for geometry and arithmetic.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'In a quadrilateral with all equal angles, each angle is:',
    options: [
      '60°',
      '90° (a right angle)',
      '120°',
      '180°',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Since the angles sum to 360° and are all equal, each must be 360° ÷ 4 = 90°. This is why rectangles have right angles.',
  },
];
