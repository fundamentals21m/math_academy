import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 47: Quadratic Surds
 */
export const section47Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a quadratic surd?',
    options: [
      'Any irrational number',
      'The square root of any integer',
      'A rational approximation to √2',
      'An expression of the form (a + √d)/b where d is a positive nonsquare integer',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'A quadratic surd is (a + √d)/b where a and b ≠ 0 are integers and d is a positive nonsquare integer. The integers a and b are uniquely determined.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the continued fraction (1, 1, 1, ...) equal?',
    options: [
      '1',
      '√2',
      'e (Euler\\\\'s number)',
      'The golden ratio φ = (1 + √5)/2',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'If x = (1, 1, 1, ...), then x = 1 + 1/x, giving x² - x - 1 = 0. The positive root is (1 + √5)/2 ≈ 1.618, the golden ratio.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who first proved that √d is irrational for nonsquare d?',
    options: [
      'Pythagoras',
      'Euclid',
      'Theaetetus (~400 BC)',
      'Lagrange',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Theaetetus first proved around 400 BC that √d is irrational when d is a positive nonsquare integer, using what would become the Fundamental Theorem of Arithmetic.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What did Lagrange prove about quadratic surds around 1770?',
    options: [
      'They have ultimately periodic continued fraction expansions',
      'They are all irrational',
      'They are transcendental numbers',
      'They cannot be computed exactly',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Lagrange proved that every quadratic surd has a continued fraction expansion that is ultimately periodic, and conversely, every ultimately periodic continued fraction represents a quadratic surd.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the special form of the continued fraction expansion of √d?',
    options: [
      '(a₀, a₁, ..., aₙ₋₁, 2a₀) with the part after a₀ periodic',
      '(a₀, a₁, a₂, ...) with all aᵢ = 1',
      '(a₀, 2a₀, 3a₀, ...)',
      'A finite continued fraction',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'For nonsquare d, √d = (a₀, a₁, ..., aₙ₋₁, 2a₀) where the overlined part is periodic. The period always ends with 2a₀, where a₀ = ⌊√d⌋.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why must the continued fraction expansion of √d be periodic?',
    options: [
      'Because √d is rational',
      'Because there are only finitely many possibilities for xₙ = (√d + aₙ)/rₙ',
      'Because the partial quotients are all equal',
      'Because Euclid\\\'s algorithm terminates',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Since 2√d > rₙ > 0 and √d > aₙ > -√d for large n, there are only finitely many possibilities for xₙ = (√d + aₙ)/rₙ. By the pigeonhole principle, some xₙ must repeat, causing periodicity.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What equation can be solved using the continued fraction expansion of √d?',
    options: [
      'x² - dy² = ±1 (Pell equation)',
      'ax + by = c (linear Diophantine)',
      'x³ + y³ = z³',
      'x² + y² = z²',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The convergents of the continued fraction expansion of √d provide solutions to the Pell equation x² - dy² = ±1. This is a powerful application of continued fractions.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is the continued fraction expansion of √2?',
    options: [
      '(1, 1, 1, ...)',
      '(1, 2, 2, 2, ...)',
      '(1, 2, 1, 2, ...)',
      '(2, 1, 1, 1, ...)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      '√2 = (1, 2̄) where the 2 repeats forever. This follows the pattern √d = (a₀, 2a₀) with period 1, since ⌊√2⌋ = 1.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Who developed the "chakravala" method for solving Pell equations before Lagrange?',
    options: [
      'Euclid',
      'Diophantus',
      'Brahmagupta and Bhaskara II',
      'Newton',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Brahmagupta (628 AD) and later Bhaskara II (12th century) developed the "chakravala" (cyclic) method for solving Pell equations, centuries before Lagrange\'s work on continued fractions.',
  },
];
