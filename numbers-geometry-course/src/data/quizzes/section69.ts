import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 69: Square Roots and the Euclidean Algorithm (Advanced)
 */
export const section69Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the continued fraction expansion of √2?',
    options: [
      '[1; 1, 1, 1, ...]',
      '[1; 2, 2, 2, ...]',
      '[2; 1, 1, 1, ...]',
      '[1; 1, 2, 1, ...]',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      '√2 = [1; 2, 2, 2, ...] = [1; 2̄], where the 2 repeats forever.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does Lagrange\'s theorem say about √d (d not a perfect square)?',
    options: [
      'Its continued fraction terminates',
      'Its continued fraction is eventually periodic',
      'Its continued fraction equals d',
      'Its continued fraction has no pattern',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Lagrange proved that the continued fraction of √d is eventually periodic, always ending with 2a₀.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a convergent of a continued fraction?',
    options: [
      'The sum of all terms',
      'The limit as terms go to infinity',
      'The product of numerators',
      'A rational approximation from truncation',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Convergents are rational numbers obtained by truncating the continued fraction at each step.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why are convergents special?',
    options: [
      'They are the best rational approximations',
      'They are always integers',
      'They have period 1',
      'They equal the original number',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Convergents are optimal: no fraction with smaller denominator can be closer to the target.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The convergent 3/2 approximates √2. Check: 3² - 2(2²) = ?',
    options: [
      '0',
      '1',
      '-1',
      '2',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      '3² - 2(2²) = 9 - 8 = 1, showing (3, 2) solves x² - 2y² = 1.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In the continued fraction [a₀; a₁, a₂, ...] for √d, the period ends with:',
    options: [
      'a₀',
      'a₁',
      '2a₀',
      '1',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'By Lagrange\'s theorem, the periodic part always ends with 2a₀.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How is the continued fraction of √d computed?',
    options: [
      'Using the Euclidean algorithm',
      'Using derivatives',
      'Using Newton\\\'s method',
      'Using Taylor series',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The continued fraction comes from repeatedly taking floor and reciprocal—the Euclidean algorithm!',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'The convergent 17/12 for √2 satisfies 17² - 2(12²) = ?',
    options: [
      '0',
      '-1',
      '2',
      '1',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      '17² - 2(12²) = 289 - 288 = 1, so (17, 12) is a solution to Pell\'s equation.',
  },
];
