import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 63: Discussion
 */
export const section63Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who first defined complex numbers rigorously as ordered pairs?',
    options: [
      'Euler',
      'Hamilton',
      'Gauss',
      'Cardano',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Hamilton in 1833 defined complex numbers as ordered pairs (a, b) with specific operations.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What are quaternions?',
    options: [
      '4-dimensional extension of complex numbers',
      'Complex numbers with three imaginary units',
      'Complex numbers modulo 4',
      'Gaussian integers with norm 4',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Quaternions are 4-dimensional: a + bi + cj + dk, where i² = j² = k² = ijk = -1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which ring does NOT have unique factorization?',
    options: [
      'Z',
      'Z[i]',
      'Q',
      'Z[√(-5)]',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'In Z[√(-5)], we have 6 = 2 × 3 = (1 + √(-5))(1 - √(-5)), two different irreducible factorizations.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does "multiplication by i is rotation by 90°" illustrate?',
    options: [
      'The failure of commutativity',
      'The definition of a ring',
      'The union of algebra and geometry',
      'The Euclidean algorithm'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'This shows how algebraic operations (×i) have geometric meaning (rotation).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What made unique factorization work in Z[i]?',
    options: [
      'The ring has infinitely many elements',
      'Complex numbers are closed under addition',
      'Gauss proved it by induction',
      'The norm satisfies the Euclidean property'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The Euclidean property (division with smaller remainder) ensures unique factorization.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Who discovered that complex numbers could represent rotations?',
    options: [
      'Euler (1707-1783)',
      'Cardano (1501-1576)',
      'Wessel and Argand (1797-1806)',
      'Hamilton (1805-1865)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Wessel (1797) and Argand (1806) independently discovered the geometric interpretation.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the main theme connecting sums of squares to complex numbers?',
    options: [
      'Both use the variable i',
      'a² + b² = N(a + bi), the norm',
      'Both were discovered by Fermat',
      'Squares and multiplication both use ×',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'A number is a sum of two squares iff it\'s the norm of a Gaussian integer.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is special about quaternion multiplication?',
    options: [
      'It is not commutative',
      'It is always zero',
      'It equals the norm',
      'It only works for integers',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Quaternions form a non-commutative algebra: ij = k but ji = -k.',
  },
];
