import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 75: The Exponential Function
 */
export const section75Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the addition formula for eˣ?',
    options: [
      'eᵃ⁺ᵇ = eᵃ · eᵇ',
      'eᵃ⁺ᵇ = eᵃ + eᵇ',
      'eᵃ⁺ᵇ = (eᵃ)ᵇ',
      'eᵃ⁺ᵇ = eᵃᵇ',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The addition formula eᵃ⁺ᵇ = eᵃ · eᵇ is the fundamental property of exponentials.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is Euler\'s formula?',
    options: [
      'e = mc²',
      'eⁱᶿ = cos θ + i sin θ',
      'e + π = i',
      'e = 2.718...',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Euler\'s formula eⁱᶿ = cos θ + i sin θ unifies exponential and trigonometric functions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is eⁱᵖⁱ?',
    options: [
      '1',
      '0',
      'i',
      '-1',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'By Euler\'s formula: eⁱᵖⁱ = cos π + i sin π = -1 + 0 = -1.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which limit formula defines e?',
    options: [
      'lim (1/n)ⁿ as n → ∞',
      'lim (1 + 1/n)ⁿ as n → ∞',
      'lim (1 + n)^(1/n) as n → ∞',
      'lim n/(n+1) as n → ∞',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'e = lim (1 + 1/n)ⁿ as n → ∞, which approaches approximately 2.71828.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is eˣ transcendental?',
    options: [
      'Because e is irrational',
      'Because it cannot be computed exactly',
      'Because eˣ = 1 has infinitely many solutions (x = 2πin)',
      'Because it grows too fast',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'If eˣ were algebraic, eˣ = 1 would have finitely many solutions, but x = 2πin works for all integers n.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The series for eˣ is:',
    options: [
      '1 + x + x² + x³ + ...',
      'x + x²/2 + x³/3 + ...',
      '1 - x + x² - x³ + ...',
      '1 + x/1! + x²/2! + x³/3! + ...',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'eˣ = 1 + x/1! + x²/2! + x³/3! + ..., where n! = n(n-1)(n-2)...1.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Who proved that e is transcendental?',
    options: ['Euler', 'Gauss', 'Hermite', 'Lindemann'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Charles Hermite proved in 1873 that e is transcendental—the first known transcendental number.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What five constants appear in eⁱᵖⁱ + 1 = 0?',
    options: [
      'e, i, π, 1, 0',
      'e, i, π, 2, 0',
      'e, √-1, π, -1, 0',
      'e, i, 2π, 1, -1',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The equation eⁱᵖⁱ + 1 = 0 connects e, i, π, 1, and 0—five fundamental constants.',
  },
];
