import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 57: Argument and the Square Root of -1
 */
export const section57Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the argument of i?',
    options: ['0', 'π/4', 'π/2', 'π'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The number i lies on the positive imaginary axis, which is at angle π/2 from the positive real axis.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What geometric transformation does multiplication by i represent?',
    options: [
      'Reflection in the real axis',
      'Rotation by 90° counterclockwise',
      'Scaling by factor 2',
      'Translation by 1 unit',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Multiplying by i adds π/2 to the argument, which is a 90° counterclockwise rotation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is i⁴?',
    options: ['1', '-1', 'i', '-i'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'i⁴ = (i²)² = (-1)² = 1. The powers of i cycle with period 4.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'When multiplying two complex numbers in polar form, what happens to their arguments?',
    options: [
      'They are multiplied',
      'They are added',
      'They are subtracted',
      'The larger one is taken',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'In polar form multiplication, absolute values multiply and arguments add.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What are the fourth roots of unity?',
    options: [
      '1, 2, 3, 4',
      '1, -1',
      '1, i, -1, -i',
      '1, ω, ω², ω³ where ω = e^(iπ/2)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The fourth roots of unity are 1, i, -1, -i—evenly spaced around the unit circle at 90° intervals.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is i¹⁰⁰?',
    options: ['1', '-1', 'i', '-i'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      '100 = 4 × 25, so 100 ≡ 0 (mod 4). Thus i¹⁰⁰ = i⁰ = 1.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Which mathematician discovered that multiplication adds arguments?',
    options: ['Euler', 'Viète', 'Gauss', 'Newton'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'François Viète discovered around 1590 that the product of triangles adds their angles.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What does the Fundamental Theorem of Algebra state?',
    options: [
      'Every equation has a real solution',
      'Every polynomial equation has a complex solution',
      'Complex numbers form a field',
      'i² = -1',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Fundamental Theorem of Algebra states that every polynomial equation has a solution in the complex numbers.',
  },
];
