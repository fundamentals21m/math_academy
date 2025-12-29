import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Niels Henrik Abel proved that the general equation of which degree has no algebraic solution?',
    options: [
      'Third degree',
      'Fourth degree',
      'Fifth degree and higher',
      'Second degree'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Abel proved the quintic (fifth-degree) and higher polynomial equations cannot be solved by radicals.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Abel died tragically young at age:',
    options: [
      '20',
      '22',
      '26',
      '30'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Abel died of tuberculosis at just 26 years old, before receiving recognition for his work.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Abelian groups are commutative groups named after Abel. In such groups:',
    options: [
      '$a \\cdot b = b \\cdot a$ for all elements',
      'All elements have order 2',
      'The group must be finite',
      'Every element is its own inverse'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Abelian groups satisfy the commutative property: the order of operation doesn\'t matter.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Abel made major contributions to which mathematical objects involving integrals?',
    options: [
      'Definite integrals',
      'Elliptic integrals and functions',
      'Triple integrals',
      'Improper integrals'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Abel made foundational contributions to the theory of elliptic functions.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Abel\'s nationality was:',
    options: [
      'German',
      'Norwegian',
      'Swedish',
      'Danish'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Abel was Norwegian; the Abel Prize awarded in his name is given by the Norwegian Academy.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'What is the lowest degree polynomial equation that cannot generally be solved by radicals?',
    correctAnswer: 5,
    numericRange: { min: 4, max: 6, precision: 0 },
    difficulty: 'easy',
    explanation: 'The quintic (degree 5) equation is the first that cannot be solved by radicals in general.',
  },
];
