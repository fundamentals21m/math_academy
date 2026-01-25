import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 46: Three Examples
 */
export const section46Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If it is 9 o\'clock now, what time will it be in 17 hours (mod 12)?',
    options: [
      '5 o\\'clock',
      '8 o\\'clock',
      '26 o\\'clock',
      '2 o\\'clock',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      '9 + 17 = 26 ≡ 2 (mod 12). So the answer is 2 o\'clock.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following cannot be written as a sum of two squares?',
    options: [
      '5',
      '13',
      '25',
      '15',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      '15 ≡ 3 (mod 4), so it cannot be a sum of two squares. The others can: 5 = 1² + 2², 13 = 2² + 3², 25 = 3² + 4².',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the result of odd + odd in arithmetic mod 2?',
    options: [
      '1 (odd)',
      '0 (even)',
      '2',
      'undefined',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'odd + odd = 1 + 1 = 2 ≡ 0 (mod 2), which represents an even number.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What are the possible values of a perfect square mod 4?',
    options: [
      '0 or 1',
      '0 only',
      '1 only',
      '0, 1, or 2',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Checking 0² = 0, 1² = 1, 2² = 4 ≡ 0, 3² = 9 ≡ 1 (mod 4). So squares can only be 0 or 1 mod 4.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'If today is Wednesday (day 3) and you count 100 days forward, what day of the week is it?',
    options: [
      'Friday',
      'Wednesday',
      'Thursday',
      'Saturday',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      '3 + 100 = 103. 103 = 14 × 7 + 5, so 103 ≡ 5 (mod 7). Day 5 is Friday.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which mathematician initiated the systematic study of modular arithmetic?',
    options: [
      'Euler',
      'Gauss',
      'Fermat',
      'Lagrange',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Carl Friedrich Gauss developed the systematic theory of modular arithmetic in his Disquisitiones Arithmeticae (1801).',
  },
  {
    id: 7,
    type: 'numeric',
    question: 'What is 37 mod 7?',
    correctAnswer: 2,
    numericRange: { min: 2, max: 2, precision: 0 },
    difficulty: 'easy',
    explanation:
      '37 = 5 × 7 + 2, so 37 ≡ 2 (mod 7).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'If a sum of two squares equals n, which value of n mod 4 is impossible?',
    options: [
      '0',
      '1',
      '3',
      '2',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Since squares are 0 or 1 mod 4, sums of two squares can be 0+0=0, 0+1=1, or 1+1=2 mod 4. So 3 is impossible.',
  },
];
