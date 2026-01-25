import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 76: The Hyperbolic Functions
 */
export const section76Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the definition of cosh θ?',
    options: [
      '(eᶿ - e⁻ᶿ)/2',
      '(eᶿ + e⁻ᶿ)/2',
      'eᶿ/2',
      'eᶿ + e⁻ᶿ',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'cosh θ = (eᶿ + e⁻ᶿ)/2, the hyperbolic cosine.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the hyperbolic identity?',
    options: [
      'cosh²θ + sinh²θ = 1',
      'cosh θ + sinh θ = 1',
      'cosh θ - sinh θ = 1',
      'cosh²θ - sinh²θ = 1',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'cosh²θ - sinh²θ = 1, analogous to cos²θ + sin²θ = 1 for circular functions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What curve does (cosh θ, sinh θ) parametrize?',
    options: [
      'The circle x² + y² = 1',
      'The parabola y = x²',
      'The ellipse x²/4 + y²/9 = 1',
      'The hyperbola x² - y² = 1',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Since cosh²θ - sinh²θ = 1, the point (cosh θ, sinh θ) lies on x² - y² = 1.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Is cosh θ always ≥ 1?',
    options: [
      'Yes, cosh θ ≥ 1 always',
      'No, it can be negative',
      'No, it can be between 0 and 1',
      'Only for θ > 0',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'cosh θ = (eᶿ + e⁻ᶿ)/2 ≥ √(eᶿ · e⁻ᶿ) = 1 by AM-GM, with equality when θ = 0.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is cosh(θ + φ)?',
    options: [
      'cosh θ cosh φ + sinh θ sinh φ',
      'cosh θ cosh φ - sinh θ sinh φ',
      'sinh θ cosh φ + cosh θ sinh φ',
      'cosh θ + cosh φ',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'cosh(θ + φ) = cosh θ cosh φ + sinh θ sinh φ (note the + sign, unlike cos).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'How are cos θ and cosh θ related?',
    options: [
      'They are unrelated',
      'cos θ = cosh θ',
      'cos θ = cosh(iθ)',
      'cos θ = i cosh θ',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'By Euler\'s formula, cos θ = cosh(iθ), connecting circular and hyperbolic functions.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What does adding points Pθ + Pφ on the hyperbola mean?',
    options: [
      'Adding their coordinates',
      'Averaging their positions',
      'Taking the point Pθ+φ',
      'Finding their intersection',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Adding points on the hyperbola means adding their parameters: Pθ + Pφ = Pθ+φ.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is sinh(-θ)?',
    options: [
      'sinh θ',
      '-sinh θ',
      '-cosh θ',
      'cosh θ',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'sinh(-θ) = -sinh θ because sinh is an odd function (like sin).',
  },
];
