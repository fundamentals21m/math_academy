import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 53: The Quadratic Character of -1 and 2 (Advanced)
 */
export const section53Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'When is -1 a quadratic residue mod p?',
    options: [
      'When p ≡ 1 (mod 2)',
      'When p ≡ 1 (mod 4)',
      'When p ≡ 3 (mod 4)',
      'Always',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      '(-1/p) = (-1)^((p-1)/2) = 1 iff (p-1)/2 is even, iff 4 | (p-1), iff p ≡ 1 (mod 4).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Is -1 a square mod 13?',
    options: [
      'Yes, because 13 is prime',
      'No, because 13 ≡ 1 (mod 4)',
      'No, because 13 ≡ 1 (mod 3)',
      'Yes, because 13 ≡ 1 (mod 4)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      '13 = 12 + 1 ≡ 1 (mod 4), so -1 is a square mod 13. Indeed, 5² = 25 = 26 - 1 ≡ -1 (mod 13).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'When is 2 a quadratic residue mod p?',
    options: [
      'When p ≡ 1 (mod 4)',
      'When p ≡ 3 (mod 8)',
      'When p ≡ ±1 (mod 8)',
      'When p is odd',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      '(2/p) = (-1)^((p²-1)/8) = 1 iff p ≡ ±1 (mod 8), i.e., p ≡ 1 or 7 (mod 8).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Is 2 a square mod 17?',
    options: [
      'Yes, because 17 ≡ 1 (mod 8)',
      'No, because 2 is even',
      'No, because 17 ≡ 1 (mod 8)',
      'Yes, because 17 is prime',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      '17 = 16 + 1 = 2 × 8 + 1 ≡ 1 (mod 8), so 2 is a square mod 17. Indeed, 6² = 36 = 34 + 2 ≡ 2.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For p = 7, what are (-1/p) and (2/p)?',
    options: [
      '(-1/7) = -1, (2/7) = 1',
      '(-1/7) = 1, (2/7) = 1',
      '(-1/7) = 1, (2/7) = -1',
      '(-1/7) = -1, (2/7) = -1',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      '7 ≡ 3 (mod 4), so (-1/7) = -1. And 7 ≡ -1 (mod 8), so (2/7) = 1.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does Gauss\'s lemma count to compute (2/p)?',
    options: [
      'The number of primes less than p',
      'The number of quadratic residues',
      'The number of divisors of p',
      'The number of even residues that become negative in (-p/2, p/2)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Gauss\'s lemma counts how many of {2, 4, 6, ..., p-1}, when reduced to (-p/2, p/2), are negative.',
  },
  {
    id: 7,
    type: 'numeric',
    question: 'For p = 11, compute (p² - 1)/8. (This determines the sign of (2/p).)',
    correctAnswer: 15,
    numericRange: { min: 15, max: 15, precision: 0 },
    difficulty: 'medium',
    explanation:
      '(11² - 1)/8 = (121 - 1)/8 = 120/8 = 15. Since 15 is odd, (2/11) = (-1)^15 = -1.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'If p ≡ 5 (mod 8), which statements are true?',
    options: [
      '-1 is a square, 2 is a square',
      '-1 is not a square, 2 is a square',
      '-1 is a square, 2 is not a square',
      '-1 is not a square, 2 is not a square',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'p ≡ 5 (mod 8) means p ≡ 1 (mod 4), so -1 is a square. But p ≡ 5 ≡ -3 (mod 8), so 2 is not a square.',
  },
];
