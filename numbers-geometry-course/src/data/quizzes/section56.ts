import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 56: Addition, Multiplication, and Absolute Value
 */
export const section56Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is i²?',
    options: [
      '1',
      'i',
      '-1',
      '-i',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'By definition, i = √(-1), so i² = -1. This is the fundamental property of the imaginary unit.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is (2 + 3i) + (4 - i)?',
    options: [
      '6 + 2i',
      '6 + 4i',
      '8 + 2i',
      '2 + 4i',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Add real parts: 2 + 4 = 6. Add imaginary parts: 3 + (-1) = 2. So the answer is 6 + 2i.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is (1 + i)(1 - i)?',
    options: [
      '0',
      '1',
      '-2i',
      '2',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      '(1 + i)(1 - i) = 1 - i² = 1 - (-1) = 2. This is a difference of squares pattern.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the absolute value |3 + 4i|?',
    options: [
      '7',
      '12',
      '25',
      '5',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      '|3 + 4i| = √(3² + 4²) = √(9 + 16) = √25 = 5. This is a 3-4-5 right triangle!',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is i³?',
    options: [
      '-i',
      '1',
      '-1',
      'i',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'i³ = i² × i = (-1) × i = -i. The powers of i cycle: i, -1, -i, 1, i, ...',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which property does the absolute value of complex numbers satisfy?',
    options: [
      '|z₁ + z₂| = |z₁| + |z₂|',
      '|z₁ - z₂| = |z₁| - |z₂|',
      '|z₁z₂| = |z₁| × |z₂|',
      '|z₁/z₂| = |z₁| + |z₂|',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The absolute value is multiplicative: |z₁z₂| = |z₁| × |z₂|. This is equivalent to the Diophantus identity.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Who first rigorously defined complex numbers as ordered pairs?',
    options: [
      'Euler',
      'Hamilton',
      'Gauss',
      'Cauchy',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'William Rowan Hamilton in 1833 defined complex numbers as ordered pairs (a, b) with specific addition and multiplication rules.',
  },
  {
    id: 8,
    type: 'numeric',
    question: 'What is |5 - 12i|?',
    correctAnswer: 13,
    numericRange: { min: 13, max: 13, precision: 0 },
    difficulty: 'medium',
    explanation:
      '|5 - 12i| = √(5² + 12²) = √(25 + 144) = √169 = 13. This is a 5-12-13 Pythagorean triple.',
  },
];
