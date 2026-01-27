import type { QuizQuestion } from './types';

export const section88Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Kepler\'s First Law states that planets move in:',
    options: [
      'Ellipses with the sun at one focus',
      'Circles with the sun at center',
      'Parabolas',
      'Straight lines'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'First Law: elliptical orbits with sun at a focus.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Kepler\'s Second Law (equal areas) states:',
    options: [
      'Planets move at constant speed',
      'A line from sun to planet sweeps equal areas in equal times',
      'All orbits have the same period',
      'Gravity is constant'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Second Law: equal areas in equal times (conservation of angular momentum).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Kepler\'s Third Law relates:',
    options: [
      'Velocity and mass',
      'Force and distance',
      'Period squared and semi-major axis cubed',
      'Energy and momentum'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Third Law: $T^2 \\propto a^3$ (period squared proportional to axis cubed).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Newton showed Kepler\'s laws follow from:',
    options: [
      'Special relativity',
      'Electromagnetism',
      'Quantum mechanics',
      'The inverse-square law of gravitation'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Inverse-square gravity ($F \\propto 1/r^2$) implies Kepler\'s laws.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The gravitational force law is $\\mathbf{F} = ?$',
    options: [
      '$-\\frac{GMm}{r^2} \\hat{\\mathbf{r}}$',
      '$-GMm \\hat{\\mathbf{r}}$',
      '$\\frac{GMm}{r} \\hat{\\mathbf{r}}$',
      '$GMm r^2 \\hat{\\mathbf{r}}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Newton\'s law: $F = GMm/r^2$ directed toward the sun.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A planet moves fastest when it is:',
    options: [
      'Farthest from the sun (aphelion)',
      'Closest to the sun (perihelion)',
      'At the midpoint of the orbit',
      'Speed is constant'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By equal areas law, planet moves faster when closer to sun.',
  },
];
