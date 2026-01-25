import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What famous exclamation is attributed to Archimedes upon discovering buoyancy?',
    options: [
      'E = mc²!',
      'QED!',
      'Eureka!',
      'Cogito ergo sum!',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Legend says Archimedes shouted "Eureka!" (I have found it!) when he discovered the principle of buoyancy in his bath.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the value Archimedes calculated for pi, expressed as bounds?',
    options: [
      '$3\\frac{10}{71} < \\pi < 3\\frac{1}{7}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Archimedes proved that $3\\frac{10}{71} < \\pi < 3\\frac{1}{7}$ using inscribed and circumscribed 96-gons.',
  },
      '$3 < \\pi < 4
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Archimedes proved that $3\\frac{10}{71} < \\pi < 3\\frac{1}{7}$ using inscribed and circumscribed 96-gons.',
  },
      '$\\pi = \\frac{22}{7}$ exactly',
      '$3.14 < \\pi < 3.15
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Archimedes proved that $3\\frac{10}{71} < \\pi < 3\\frac{1}{7}$ using inscribed and circumscribed 96-gons.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Archimedes proved that $3\\frac{10}{71} < \\pi < 3\\frac{1}{7}$ using inscribed and circumscribed 96-gons.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which Archimedean discovery relates the volume of a sphere to a cylinder?',
    options: [
      'The sphere\'s volume is half the cylinder\'s',
      'The sphere\'s volume is three-quarters the cylinder\'s',
      'They have equal volumes',
      'The sphere\'s volume is two-thirds the cylinder\'s'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A sphere has $\\frac{2}{3}$ the volume of a circumscribed cylinder. Archimedes was so proud of this he had it inscribed on his tomb.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Archimedes Palimpsest revealed his work on a technique anticipating:',
    options: [
      'Algebra',
      'Calculus (infinitesimals)',
      'Number theory',
      'Probability',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Method revealed Archimedes used infinitesimal techniques similar to integration, centuries before calculus was invented.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Archimedes died in 212 BC during the Roman siege of which city? (Enter the year BC as a positive number)',
    correctAnswer: 212,
    numericRange: { min: 0, max: 500, precision: 0 },
    difficulty: 'easy',
    explanation: 'Archimedes was killed by a Roman soldier during the siege of Syracuse in 212 BC.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What simple machine did Archimedes famously say could move the Earth if he had a place to stand?',
    correctAnswer: 'lever',
    difficulty: 'easy',
    explanation: '"Give me a place to stand and I will move the Earth" refers to the mechanical advantage of levers.',
  },
];
