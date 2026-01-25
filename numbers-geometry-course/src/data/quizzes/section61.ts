import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 61: Fermat's Two Squares Theorem
 */
export const section61Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which condition guarantees an odd prime p is a sum of two squares?',
    options: [
      'p ≡ 0 (mod 4)',
      'p ≡ 1 (mod 4)',
      'p ≡ 3 (mod 4)',
      'p ≡ 2 (mod 4)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Fermat\'s theorem: an odd prime p is a sum of two squares if and only if p ≡ 1 (mod 4).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Is 7 a sum of two squares?',
    options: [
      'Yes: 7 = 2² + 3²',
      'No, because 7 ≡ 3 (mod 4)',
      'Yes: 7 = 1² + 2² + something',
      'No, because 7 is odd',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      '7 ≡ 3 (mod 4), so by Fermat\'s theorem, 7 cannot be written as a sum of two squares.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Write 13 as a sum of two squares:',
    options: [
      '13 = 2² + 3²',
      '13 = 1² + 12²',
      '13 = 3² + 4²',
      '13 cannot be so written',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      '13 = 4 + 9 = 2² + 3². Since 13 ≡ 1 (mod 4), it must be a sum of two squares.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the connection between sums of two squares and Gaussian integers?',
    options: [
      'They share the same prime factors',
      'They use the same division algorithm',
      'n = a² + b² iff n = N(a + bi)',
      'There is no connection',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'An integer is a sum of two squares if and only if it is the norm of some Gaussian integer.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Is 45 a sum of two squares?',
    options: [
      'No, 45 = 9 × 5 has a factor ≡ 3 (mod 4)',
      'Cannot determine without more information',
      'Yes, because 3² appears, so even power of 3',
      'No, 45 is odd',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      '45 = 3² × 5. The prime 3 ≡ 3 (mod 4) appears to even power (2), so 45 = 3² + 6².',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why can no integer ≡ 3 (mod 4) be a sum of two squares?',
    options: [
      'Because squares are always even',
      'Because 3 is prime',
      'Because i² = -1',
      'Because squares mod 4 are only 0 or 1',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Squares mod 4 are 0 or 1. So a² + b² ≡ 0, 1, or 2 (mod 4), never 3.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Is 21 a sum of two squares?',
    options: [
      'Yes: 21 = 4² + 2² + 1²',
      'Yes: 21 = 3² + 12²',
      'No: 21 is odd',
      'No: 21 = 3 × 7, both ≡ 3 (mod 4) to odd powers',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      '21 = 3 × 7. Both 3 and 7 are ≡ 3 (mod 4) and appear to odd power (1), so 21 is not a sum of two squares.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is 17 as a sum of two squares?',
    options: [
      '17 = 1² + 4²',
      '17 = 3² + 4²',
      '17 = 2² + 3²',
      '17 = 0² + 17²',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      '17 = 1 + 16 = 1² + 4². Since 17 ≡ 1 (mod 4), it must be expressible as a sum of two squares.',
  },
];
