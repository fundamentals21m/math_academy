import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To stay within algebra, we measure angles using:',
    options: [
      'Degrees',
      'Slope',
      'Arc length',
      'Radians',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Slope t = tan θ is an algebraic function of coordinates, while θ itself requires transcendental functions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Two non-vertical lines are perpendicular if the product of their slopes is:',
    options: [
      '1',
      '0',
      'undefined',
      '-1',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Lines with slopes t₁ and t₂ are perpendicular iff t₁ · t₂ = -1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A rotation about the origin through angle θ sends (x, y) to:',
    options: [
      '$(x\\cos\\theta - y\\sin\\theta, x\\sin\\theta + y\\cos\\theta)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The rotation formula uses cos θ and sin θ in a matrix-like transformation.',
  },
      '$(x + \\cos\\theta, y + \\sin\\theta)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The rotation formula uses cos θ and sin θ in a matrix-like transformation.',
  },
      '$(x - y, x + y)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The rotation formula uses cos θ and sin θ in a matrix-like transformation.',
  },
      '$(x\\cos\\theta, y\\sin\\theta)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The rotation formula uses cos θ and sin θ in a matrix-like transformation.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The rotation formula uses cos θ and sin θ in a matrix-like transformation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The relative slope of line L₁ to L₂ (slopes t₁ and t₂) involves the expression:',
    options: [
      '$t_1 - t_2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'This comes from tan(θ₁ - θ₂) = (tan θ₁ - tan θ₂)/(1 + tan θ₁ tan θ₂).',
  },
      '$\\frac{t_1 - t_2}{1 + t_1 t_2}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'This comes from tan(θ₁ - θ₂) = (tan θ₁ - tan θ₂)/(1 + tan θ₁ tan θ₂).',
  },
      '$t_1 + t_2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'This comes from tan(θ₁ - θ₂) = (tan θ₁ - tan θ₂)/(1 + tan θ₁ tan θ₂).',
  },
      '$t_1 \\cdot t_2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'This comes from tan(θ₁ - θ₂) = (tan θ₁ - tan θ₂)/(1 + tan θ₁ tan θ₂).',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'This comes from tan(θ₁ - θ₂) = (tan θ₁ - tan θ₂)/(1 + tan θ₁ tan θ₂).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Composing two rotations about the origin yields:',
    options: [
      'A translation',
      'A glide reflection',
      'Another rotation about the origin',
      'A reflection',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Rotation through θ₁ followed by rotation through θ₂ is rotation through θ₁ + θ₂.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The trigonometric addition formulas can be derived from:',
    options: [
      'Composing rotation transformations',
      'The inscribed angle theorem',
      'The Pythagorean theorem',
      'The parallel postulate',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Composing rotations r_{c₁,s₁} and r_{c₂,s₂} gives the formulas for sin(θ₁+θ₂) and cos(θ₁+θ₂).',
  },
];
