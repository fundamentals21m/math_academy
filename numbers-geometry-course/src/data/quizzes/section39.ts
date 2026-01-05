import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 39: Addition Formulas
 */
export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is cos(θ + φ)?',
    options: [
      'cos θ + cos φ',
      'cos θ cos φ + sin θ sin φ',
      'cos θ cos φ - sin θ sin φ',
      'sin θ cos φ + cos θ sin φ',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The addition formula for cosine is cos(θ + φ) = cos θ cos φ - sin θ sin φ. Note the minus sign between the two products.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is sin(θ + φ)?',
    options: [
      'sin θ + sin φ',
      'sin θ cos φ - cos θ sin φ',
      'cos θ cos φ - sin θ sin φ',
      'sin θ cos φ + cos θ sin φ',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The addition formula for sine is sin(θ + φ) = sin θ cos φ + cos θ sin φ. Note the plus sign between the two products.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the double angle formula for cos 2θ?',
    options: [
      '2 cos θ',
      'cos² θ + sin² θ',
      'cos² θ - sin² θ',
      '2 cos θ sin θ',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Setting φ = θ in the cosine addition formula gives cos 2θ = cos² θ - sin² θ. This can also be written as 2cos² θ - 1 or 1 - 2sin² θ.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is sin 2θ?',
    options: ['2 sin θ', '2 sin θ cos θ', 'sin² θ - cos² θ', 'sin θ + cos θ'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Setting φ = θ in the sine addition formula gives sin 2θ = sin θ cos θ + cos θ sin θ = 2 sin θ cos θ.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "What does de Moivre's formula state?",
    options: [
      'cos θ + sin θ = 1',
      '(cos θ + i sin θ)(cos φ + i sin φ) = cos(θ+φ) + i sin(θ+φ)',
      'cos² θ + sin² θ = 1',
      'i² = -1',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      "De Moivre's formula unifies both addition formulas: (cos θ + i sin θ)(cos φ + i sin φ) = cos(θ+φ) + i sin(θ+φ). This shows the multiplicative nature of rotations.",
  },
  {
    id: 6,
    type: 'numeric',
    question: "In what year was de Moivre's formula discovered?",
    correctAnswer: 1730,
    numericRange: { min: 1700, max: 1800, precision: 0 },
    difficulty: 'hard',
    explanation:
      "De Moivre's formula dates to around 1730, discovered by Abraham de Moivre, showing the connection between complex numbers and trigonometry.",
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'What is the derivative of sin x (found using the addition formula)?',
    options: ['-cos x', 'cos x', 'sin x', '-sin x'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Using the sine addition formula and the limits lim(θ→0) sin θ/θ = 1 and lim(θ→0) (cos θ - 1)/θ = 0, we can show that the derivative of sin x is cos x.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is cos 3θ in terms of cos θ?',
    options: [
      '3 cos θ',
      '4 cos³ θ - 3 cos θ',
      '3 cos³ θ - 4 cos θ',
      'cos³ θ + 3 cos θ',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Using de Moivre or the addition formulas repeatedly: cos 3θ = 4cos³ θ - 3cos θ. Viète used such formulas to solve polynomial equations.',
  },
];
