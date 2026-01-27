import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Fourier series represent periodic functions as sums of:',
    options: [
      'Polynomials',
      'Exponentials',
      'Logarithms',
      'Sines and cosines'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Fourier series decompose periodic functions into sums of sines and cosines of different frequencies.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Fourier developed his mathematical techniques to study:',
    options: [
      'Heat conduction',
      'Sound waves',
      'Light propagation',
      'Fluid flow'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Fourier developed his series to solve the heat equation and understand heat conduction in solids.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Fourier transform converts a function from the time domain to the:',
    options: [
      'Space domain',
      'Frequency domain',
      'Complex domain',
      'Discrete domain'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Fourier transform reveals what frequencies are present in a signal.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Fourier\'s work was initially controversial because:',
    options: [
      'It used imaginary numbers',
      'It contradicted Newton',
      'It claimed any function could be represented as a trigonometric series',
      'It was not rigorous enough for Laplace'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Lagrange and others doubted that discontinuous functions could be represented by continuous sines and cosines.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Fourier also made contributions to understanding what global phenomenon?',
    options: [
      'Ocean currents',
      'Earthquakes',
      'Continental drift',
      'The greenhouse effect'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fourier was among the first to study what we now call the greenhouse effect and Earth\'s energy balance.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What physical quantity did Fourier study the flow of, leading to his famous series?',
    correctAnswer: 'heat',
    difficulty: 'easy',
    explanation: 'Fourier\'s Théorie Analytique de la Chaleur (1822) analyzed heat conduction using what we now call Fourier series.',
  },
];
