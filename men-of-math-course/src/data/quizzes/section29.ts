import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Riemann Hypothesis concerns the zeros of which function?',
    options: [
      'The exponential function $e^x$',
      'The gamma function $\\Gamma(s)$',
      'The Riemann zeta function $\\zeta(s)$',
      'The Bessel function $J_n(x)$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Riemann Hypothesis states that all non-trivial zeros of the Riemann zeta function $\\zeta(s)$ lie on the critical line $\\text{Re}(s) = \\frac{1}{2}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the value of the Riemann zeta function $\\zeta(2) = \\sum_{n=1}^{\\infty} \\frac{1}{n^2}$?',
    options: [
      '$\\frac{\\pi}{4}$',
      '$\\ln 2$',
      '$e$',
      '$\\frac{\\pi^2}{6}$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Euler proved that $\\zeta(2) = \\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$, solving the Basel problem.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In Riemannian geometry, what determines the curvature of a space?',
    options: [
      'The metric tensor',
      'The number of dimensions',
      'The coordinate system',
      'The boundary conditions'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The metric tensor $g_{ij}$ determines all geometric properties including distances, angles, and curvature in Riemannian geometry.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Riemann Hypothesis is one of the Millennium Prize Problems. What is the prize for solving it?',
    options: [
      '$100,000',
      '$1,000,000',
      '$500,000',
      '$10,000,000'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Each of the seven Millennium Prize Problems carries a prize of $1,000,000 from the Clay Mathematics Institute.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What does the critical line refer to in the context of the Riemann Hypothesis?',
    options: [
      'The real axis',
      'The imaginary axis',
      'The line $\\text{Re}(s) = \\frac{1}{2}$',
      'The unit circle'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The critical line is $\\text{Re}(s) = \\frac{1}{2}$ in the complex plane, where all non-trivial zeros of $\\zeta(s)$ are conjectured to lie.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'At what age did Riemann die?',
    correctAnswer: 39,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Riemann died in 1866 at the age of 39 from tuberculosis, leaving many ideas unpublished.',
  },
  {
    id: 7,
    type: 'text',
    question: 'What type of geometry did Riemann generalize to allow curved spaces of any dimension?',
    correctAnswer: 'differential',
    difficulty: 'medium',
    explanation: 'Riemann generalized differential geometry to spaces of any dimension with arbitrary curvature, now called Riemannian geometry.',
  },
  {
    id: 8,
    type: 'text',
    question: 'What famous physicist used Riemannian geometry as the mathematical framework for General Relativity?',
    correctAnswer: 'Einstein',
    difficulty: 'easy',
    explanation: 'Einstein used Riemannian geometry to formulate General Relativity, where gravity is the curvature of spacetime.',
  },
];
