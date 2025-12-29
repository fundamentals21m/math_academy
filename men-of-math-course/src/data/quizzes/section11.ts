import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What mathematical technique did Lagrange develop to find extrema with constraints?',
    options: [
      'Integration by parts',
      'Lagrange multipliers',
      'The chain rule',
      'Taylor series'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Lagrange multipliers allow finding maxima and minima of functions subject to constraints.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Lagrangian mechanics reformulates Newton\'s laws using:',
    options: [
      'Force and acceleration',
      'Energy (kinetic minus potential)',
      'Momentum and impulse',
      'Pressure and volume'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Lagrangian $L = T - V$ (kinetic minus potential energy) reformulates mechanics elegantly.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Lagrange\'s theorem in group theory states that the order of a subgroup:',
    options: [
      'Equals the order of the group',
      'Divides the order of the group',
      'Is always prime',
      'Is always even'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The order of a subgroup always divides the order of the group.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The calculus of variations, developed by Lagrange, finds:',
    options: [
      'Derivatives of functions',
      'Integrals of functions',
      'Functions that extremize integrals',
      'Limits of sequences'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The calculus of variations finds functions (not numbers) that maximize or minimize integral quantities.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which work by Lagrange presented mechanics without geometric diagrams?',
    options: [
      'Principia Mathematica',
      'Mécanique Analytique',
      'Elements',
      'Disquisitiones Arithmeticae'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Mécanique Analytique (1788) developed mechanics purely analytically, famously containing no diagrams.',
  },
  {
    id: 6,
    type: 'text',
    question: 'Lagrange proved that every positive integer can be written as the sum of at most how many squares?',
    correctAnswer: '4',
    difficulty: 'hard',
    explanation: 'Lagrange\'s four-square theorem: every positive integer is the sum of at most four perfect squares.',
  },
];
