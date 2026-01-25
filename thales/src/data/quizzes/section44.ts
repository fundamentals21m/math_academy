import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 44: Continued Fractions
 */
export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What algorithm naturally produces continued fractions?',
    options: [
      'The Sieve of Eratosthenes',
      'Newton\\\'s Method',
      'Gaussian elimination',
      'Euclid\\\'s Algorithm',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Euclid\'s Algorithm for finding the GCD naturally produces continued fractions. The sequence of quotients in the divisions becomes the sequence of partial quotients.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the notation (3, 5, 8, 6) represent?',
    options: [
      '3 + 5 + 8 + 6',
      '3 × 5 × 8 × 6',
      'gcd(3, 5, 8, 6)',
      '3 + 1/(5 + 1/(8 + 1/6))',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The notation (a₀, a₁, a₂, ...) represents a₀ + 1/(a₁ + 1/(a₂ + ...)), a simple continued fraction.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is (1, 1, 1, ...) equal to?',
    options: [
      '1',
      '(1 + √5)/2',
      '√2',
      'e',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'If x = (1, 1, 1, ...), then x = 1 + 1/x, so x² - x - 1 = 0. The positive root is (1 + √5)/2, the golden ratio φ ≈ 1.618.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What are the "convergents" of a continued fraction?',
    options: [
      'The partial quotients',
      'The finite truncations that approximate the value',
      'The remainders in Euclid\\\\'s Algorithm',
      'The denominators only',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Convergents are the rational approximations obtained by truncating the continued fraction: c₀ = a₀, c₁ = (a₀, a₁), c₂ = (a₀, a₁, a₂), etc.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How are the numerators pₙ of convergents computed?',
    options: [
      'pₙ = aₙpₙ₋₁ + pₙ₋₂',
      'pₙ = aₙ + pₙ₋₁',
      'pₙ = aₙ × pₙ₋₁',
      'pₙ = pₙ₋₁ + pₙ₋₂',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The recurrence for numerators is pₙ = aₙpₙ₋₁ + pₙ₋₂, starting with p₀ = a₀ and p₁ = a₀a₁ + 1. The same recurrence applies to denominators qₙ.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does pₙqₙ₋₁ - pₙ₋₁qₙ equal?',
    options: [
      '0',
      '1',
      '(-1)ⁿ⁻¹',
      'aₙ',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The alternating determinant property states that pₙqₙ₋₁ - pₙ₋₁qₙ = (-1)ⁿ⁻¹. This proves that every convergent is automatically in lowest terms.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Which numbers have finite continued fraction expansions?',
    options: [
      'Rational numbers',
      'Only integers',
      'All real numbers',
      'Irrational numbers',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Rational numbers have finite continued fraction expansions (from Euclid\'s Algorithm terminating). Irrational numbers have infinite expansions.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'How do the odd convergents c₁, c₃, c₅, ... behave?',
    options: [
      'They strictly decrease',
      'They strictly increase',
      'They alternate',
      'They stay constant',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Odd convergents form a strictly decreasing sequence: c₁ > c₃ > c₅ > ... Even convergents form a strictly increasing sequence. Both converge to the same limit.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Who first explicitly defined continued fractions?',
    options: [
      'Euclid',
      'Euler',
      'Daniel Schwenter (1618)',
      'Lagrange',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Although continued fractions were implicit in Greek mathematics and Euclid\'s Algorithm, Daniel Schwenter first explicitly defined them in 1618.',
  },
];
