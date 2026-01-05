import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 48: The Ring Z/nZ
 */
export const section48Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a ring?',
    options: [
      'A set with only addition',
      'A set with addition and multiplication satisfying certain axioms',
      'A circular structure',
      'A field with zero divisors',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A ring is a set with two operations (addition and multiplication) satisfying associativity, distributivity, and having additive inverses.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In Z/6Z, what is 2 × 3?',
    options: ['6', '0', '1', '5'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      '2 × 3 = 6 ≡ 0 (mod 6). This shows that 2 and 3 are zero divisors in Z/6Z.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a zero divisor?',
    options: [
      'An element equal to zero',
      'A non-zero element whose product with some non-zero element is zero',
      'An element that divides every other element',
      'The multiplicative identity',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'A zero divisor is a non-zero element a such that ab = 0 for some non-zero b.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When is Z/nZ a field?',
    options: [
      'When n is even',
      'When n is a perfect square',
      'When n is prime',
      'Always',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Z/nZ is a field if and only if n is prime. In this case, every non-zero element has a multiplicative inverse.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'How many elements does Z/7Z have?',
    correctAnswer: 7,
    numericRange: { min: 7, max: 7, precision: 0 },
    difficulty: 'easy',
    explanation:
      'Z/nZ has exactly n elements: the residue classes [0], [1], ..., [n-1].',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In Z/5Z, what is 3 × 2?',
    options: ['0', '1', '6', '11'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      '3 × 2 = 6 ≡ 1 (mod 5). This shows that 3 and 2 are multiplicative inverses in Z/5Z.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Which of the following has zero divisors?',
    options: ['Z/7Z', 'Z/11Z', 'Z/12Z', 'Z/13Z'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Z/12Z has zero divisors because 12 is composite. For example, 3 × 4 = 12 ≡ 0. The others are fields (prime moduli).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is the difference between a ring and a field?',
    options: [
      'A field has more elements',
      'In a field, every non-zero element has a multiplicative inverse',
      'A ring has no zero element',
      'They are the same thing',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'A field is a ring where every non-zero element has a multiplicative inverse. This means fields have no zero divisors.',
  },
];
