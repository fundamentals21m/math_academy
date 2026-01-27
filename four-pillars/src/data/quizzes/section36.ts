import type { QuizQuestion } from './types';

export const section36Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A linear fractional function has the form:',
    options: [
      '$f(x) = ax + b$',
      '$f(x) = \\frac{ax + b}{cx + d}$ with $ad - bc \\neq 0$',
      '$f(x) = ax^2 + bx + c$',
      '$f(x) = \\sqrt{x}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Linear fractional (Möbius) functions are ratios of linear polynomials.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The condition $ad - bc \\neq 0$ ensures that:',
    options: [
      'The function is continuous',
      'The function is periodic',
      'The function is not constant',
      'The function is quadratic'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When ad − bc = 0, the function reduces to a constant.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The real projective line ℝP¹ is:',
    options: [
      'ℝ only',
      'ℂ',
      '{0, 1}',
      'ℝ ∪ {∞}'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We add a point at infinity to handle 1/0 = ∞ and 1/∞ = 0.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For f(x) = (ax + b)/(cx + d), the value f(∞) equals:',
    options: [
      'a/c',
      '0',
      '∞',
      'Undefined'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'As x → ∞, (ax + b)/(cx + d) → a/c (ratio of leading coefficients).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Composing two linear fractional functions gives:',
    options: [
      'A polynomial function',
      'Another linear fractional function',
      'A trigonometric function',
      'An undefined expression'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Linear fractional functions are closed under composition.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The composition of f₁(x) = (a₁x + b₁)/(c₁x + d₁) and f₂(x) = (a₂x + b₂)/(c₂x + d₂) corresponds to:',
    options: [
      'Adding the matrices',
      'Subtracting the matrices',
      'Multiplying the 2×2 matrices of coefficients',
      'Taking the transpose'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Matrix multiplication encodes function composition for linear fractional functions.',
  },
];
