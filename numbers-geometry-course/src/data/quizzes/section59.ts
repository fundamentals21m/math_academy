import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 59: The Gaussian Integers
 */
export const section59Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a Gaussian integer?',
    options: [
      'Any complex number',
      'a + bi where a, b are rational',
      'Any real number',
      'a + bi where a, b are integers',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'A Gaussian integer is a complex number a + bi where both a and b are ordinary integers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the norm N(3 + 4i)?',
    options: [
      '5',
      '25',
      '7',
      '12',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'N(3 + 4i) = 3² + 4² = 9 + 16 = 25.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How many units are there in the Gaussian integers?',
    options: [
      '4',
      '2',
      '8',
      'Infinitely many',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The units are 1, -1, i, and -i—exactly the Gaussian integers with norm 1.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is N(z) equal to?',
    options: [
      'z · z̄',
      'z²',
      '|z|',
      '|z̄|',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'N(z) = z · z̄ = |z|². For z = a + bi, this equals a² + b².',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is (1 + i)(1 - i)?',
    options: [
      '0',
      '1',
      '2',
      '2i',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      '(1 + i)(1 - i) = 1 - i² = 1 - (-1) = 2.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If α divides β in Z[i], what can we conclude about their norms?',
    options: [
      'N(α) = N(β)',
      'Nothing in general',
      'N(α) > N(β)',
      'N(α) divides N(β)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'If α | β, then β = αγ, so N(β) = N(α)N(γ), meaning N(α) | N(β).',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is i⁻¹ in Z[i]?',
    options: [
      '1',
      '-i',
      '-1',
      'i',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'i⁻¹ = 1/i = i/i² = i/(-1) = -i. Check: i · (-i) = -i² = 1 ✓',
  },
  {
    id: 8,
    type: 'numeric',
    question: 'What is N(2 + i)?',
    correctAnswer: 5,
    numericRange: { min: 5, max: 5, precision: 0 },
    difficulty: 'easy',
    explanation:
      'N(2 + i) = 2² + 1² = 4 + 1 = 5.',
  },
];
