import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 40: A Rational Addition Formula
 */
export const section40Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is tan(θ + φ) in terms of tan θ and tan φ?',
    options: [
      'tan θ + tan φ',
      'tan θ tan φ',
      '(tan θ + tan φ)/(1 - tan θ tan φ)',
      '(tan θ - tan φ)/(1 + tan θ tan φ)',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The tangent addition formula is tan(θ + φ) = (tan θ + tan φ)/(1 - tan θ tan φ), derived from the sine and cosine addition formulas.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is special about the tangent addition formula?',
    options: [
      'It involves square roots',
      'It is purely rational—if s and t are rational, so is (s+t)/(1-st)',
      'It only works for small angles',
      'It requires complex numbers',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The tangent addition formula is rational: if both input slopes s and t are rational, the output (s+t)/(1-st) is also rational.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'Starting with slope s = 7/24, what is the slope at angle 2θ?',
    options: ['14/48', '336/527', '49/576', '7/12'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Using the double angle formula: 2s/(1-s²) = (2×7/24)/(1-49/576) = (14/24)/(527/576) = 336/527.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What problem does the rational addition formula solve?',
    options: [
      'Squaring the circle',
      'Trisecting any angle',
      'Finding equally spaced rational points on a circle',
      'Computing π exactly',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The formula lets us generate equally spaced rational points on a circle arc, which is what the Babylonians were attempting with Plimpton 322.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'If Pythagorean triples can be "multiplied," what is the "square" of (3, 4, 5)?',
    options: ['(6, 8, 10)', '(9, 16, 25)', '(-7, 24, 25)', '(5, 12, 13)'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Using complex multiplication: (3 + 4i)² = 9 + 24i - 16 = -7 + 24i, giving the triple (-7, 24, 25).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'Into how many equal parts can the unit circle be divided by rational points?',
    options: [
      'Any number of parts',
      'Only powers of 2',
      'Only 2 or 4 parts',
      'It is impossible to divide it at all',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The circle can only be divided into 2 or 4 equal parts by rational points. This follows from properties of angles with rational tangent.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'How does the half-angle substitution t = tan(θ/2) relate to Diophantus?',
    options: [
      'It is unrelated',
      'It gives the same parametrization of rational points on the circle',
      'It was discovered by Diophantus',
      'It contradicts his work',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The formulas cos θ = (1-t²)/(1+t²) and sin θ = 2t/(1+t²) are exactly Diophantus\'s parametrization of rational points on the unit circle.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'What is an important application of the t = tan(θ/2) substitution in calculus?',
    options: [
      'Computing derivatives of polynomials',
      'Converting trigonometric integrals to rational function integrals',
      'Solving differential equations',
      'Finding Taylor series',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Weierstrass substitution t = tan(θ/2) transforms any rational expression in sin and cos into a rational function of t, making integration easier.',
  },
];
