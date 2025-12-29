import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many generations of the Bernoulli family produced significant mathematicians?',
    options: [
      'One',
      'Two',
      'Three',
      'Four'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Three generations of Bernoullis made major contributions to mathematics and physics.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Bernoulli numbers appear in formulas for:',
    options: [
      'Prime factorization',
      'Sums of powers of integers',
      'Trigonometric identities',
      'Logarithms'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Bernoulli numbers appear in formulas for $\\sum k^n$ and in the Euler-Maclaurin formula.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Bernoulli\'s principle in fluid dynamics relates fluid speed to:',
    options: [
      'Temperature',
      'Pressure',
      'Viscosity',
      'Density'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Bernoulli\'s principle states that faster-moving fluid has lower pressure, explaining airplane lift.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The brachistochrone problem asks for the curve of:',
    options: [
      'Shortest distance between two points',
      'Fastest descent under gravity',
      'Maximum enclosed area',
      'Minimum surface area'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Johann Bernoulli posed the brachistochrone problem: find the curve of fastest descent. The answer is a cycloid.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The rivalry between which two Bernoulli brothers was legendary?',
    options: [
      'Johann and Daniel',
      'Jakob and Johann',
      'Nicolaus and Johann',
      'Daniel and Nicolaus'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Jakob and Johann Bernoulli had a famously bitter rivalry despite both being brilliant mathematicians.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What shape is the solution to the brachistochrone problem?',
    correctAnswer: 'cycloid',
    difficulty: 'medium',
    explanation: 'The cycloid—the curve traced by a point on a rolling circle—is the curve of fastest descent.',
  },
];
