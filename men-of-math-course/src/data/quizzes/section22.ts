import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Évariste Galois founded which branch of mathematics?',
    options: [
      'Topology',
      'Group theory',
      'Set theory',
      'Analysis'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Galois invented group theory to study when polynomial equations are solvable by radicals.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Galois died tragically in:',
    options: [
      'A laboratory accident',
      'A duel',
      'War',
      'Disease'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Galois was killed in a duel at age 20, possibly over a romantic dispute.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Galois theory connects polynomial solvability to:',
    options: [
      'The degree of the polynomial',
      'The structure of its symmetry group',
      'The size of its coefficients',
      'The number of real roots'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A polynomial is solvable by radicals if and only if its Galois group is solvable.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The night before his duel, Galois:',
    options: [
      'Slept peacefully',
      'Wrote down his mathematical ideas frantically',
      'Tried to escape Paris',
      'Met with Cauchy'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Galois spent his final night writing down his revolutionary mathematical ideas.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A Galois extension is a type of:',
    options: [
      'Function',
      'Field extension',
      'Matrix',
      'Differential equation'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Galois extensions are field extensions that are both normal and separable.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'At what age did Galois die?',
    correctAnswer: 20,
    numericRange: { min: 18, max: 22, precision: 0 },
    difficulty: 'easy',
    explanation: 'Galois was killed in a duel at just 20 years old.',
  },
];
