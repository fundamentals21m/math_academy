import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Charles Hermite proved that which famous mathematical constant is transcendental?',
    options: [
      '$e$',
      '$\\pi$',
      '$\\sqrt{2}$',
      '$\\phi$ (golden ratio)'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Hermite proved $e$ (Euler\'s number) is transcendental in 1873.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A transcendental number is one that:',
    options: [
      'Is irrational',
      'Is not the root of any polynomial with integer coefficients',
      'Is imaginary',
      'Cannot be computed'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Transcendental numbers are not algebraic—they don\'t satisfy any polynomial equation with integer coefficients.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Hermitian matrices (named after Hermite) satisfy:',
    options: [
      '$A = A^T$',
      '$A^2 = I$',
      '$A = A^*$ (equal to conjugate transpose)',
      '$\\det(A) = 1$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Hermitian matrices equal their conjugate transpose, generalizing symmetric matrices to complex numbers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Hermite polynomials are important in:',
    options: [
      'Cryptography',
      'Graph theory',
      'Number theory',
      'Quantum mechanics'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Hermite polynomials appear in the quantum harmonic oscillator wave functions.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Hermite\'s proof that $e$ is transcendental was later extended by Lindemann to prove:',
    options: [
      '$\\pi$ is transcendental',
      '$\\sqrt{2}$ is irrational',
      '$e + \\pi$ is transcendental',
      'All algebraic numbers are computable'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Lindemann used Hermite\'s methods to prove $\\pi$ is transcendental in 1882.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What type of number (neither rational nor algebraic) did Hermite prove $e$ to be?',
    correctAnswer: 'transcendental',
    difficulty: 'easy',
    explanation: 'Transcendental numbers like $e$ and $\\pi$ are not roots of any polynomial with integer coefficients.',
  },
];
