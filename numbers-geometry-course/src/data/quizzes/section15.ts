import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 15: The Pythagorean Theorem
 */
export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Euclid\'s proof of the Pythagorean theorem uses:',
    options: [
      'Only algebra',
      'Triangle-parallelogram area relationships',
      'Calculus',
      'Prime factorization',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Euclid\'s proof uses the fact that a triangle has half the area of a parallelogram with the same base and height, combined with congruence.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Pythagoreans discovered that:',
    options: [
      'All numbers are rational',
      '$\\sqrt{2}$ is rational',
      '$\\sqrt{2}$ is irrational',
      'The theorem is false',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The Pythagoreans discovered both the Pythagorean theorem and that $\\sqrt{2}$ is irrational, which conflicted with their belief that "all is number."',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The irrationality of $\\sqrt{2}$ led to:',
    options: [
      'Abandonment of mathematics',
      'Separation of arithmetic and geometry',
      'Proof that the theorem is wrong',
      'Discovery of calculus',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Greeks responded by separating arithmetic from geometry and developing a "geometric algebra" for lengths and areas.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In "geometric algebra," lengths are multiplied by:',
    options: [
      'Converting to decimals',
      'Forming rectangles with them as sides',
      'Adding them repeatedly',
      'Using prime factorization',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'In geometric algebra, the "product" of two lengths is the area of the rectangle with those lengths as adjacent sides.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Who initiated the reconciliation of arithmetic and geometry?',
    options: [
      'Euclid and Pythagoras',
      'Fermat and Descartes',
      'Gauss and Hilbert',
      'Newton and Leibniz',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Fermat and Descartes initiated analytic geometry in the 17th century, beginning the reconciliation of arithmetic and geometry.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Who completed the reconciliation by defining real numbers?',
    options: [
      'Euclid',
      'Gauss',
      'Dedekind',
      'Pythagoras',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Dedekind (1858) defined the concept of real number to capture all possible lengths, completing the reconciliation of arithmetic and geometry.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'The Pythagorean theorem is valuable because:',
    options: [
      'It avoids using numbers',
      'It relates lengths simply via their squares, even when the lengths have no simple ratio',
      'It only works for rational numbers',
      'It proves all numbers are rational',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The theorem relates the sides and hypotenuse simply via their squares ($a^2 + b^2 = c^2$), even though the lengths themselves may not be simply related.',
  },
  {
    id: 8,
    type: 'numeric',
    question: 'In what year did Dedekind define real numbers?',
    correctAnswer: 1858,
    numericRange: { min: 1800, max: 1900, precision: 0 },
    difficulty: 'medium',
    explanation:
      'Dedekind realized in 1858 that calculus, geometry, and the concept of irrational could all be clarified by defining real numbers.',
  },
];
