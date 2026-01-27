import type { QuizQuestion } from './types';

export const section52Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A differential equation is an equation involving:',
    options: [
      'Only numbers',
      'Only polynomials',
      'A function and its derivatives',
      'Integrals only'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A DE relates an unknown function to its derivatives.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The order of a differential equation is:',
    options: [
      'The number of terms',
      'The number of solutions',
      'The degree of the polynomial',
      'The highest derivative that appears'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Order = highest derivative. E.g., $y\'\' + y = 0$ is second order.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: '$y\' = 2y$ is what type of equation?',
    options: [
      'First-order differential equation',
      'Algebraic equation',
      'Second-order differential equation',
      'Integral equation'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Highest derivative is $y\'$ (first derivative), so first-order.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A solution to a DE is:',
    options: [
      'A number',
      'A function that satisfies the equation',
      'The derivative of the equation',
      'An integral'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A solution is a function $y(x)$ that makes the DE true.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The general solution to $y\' = 0$ is:',
    options: [
      '$y = 0$',
      '$y = x$',
      '$y = C$ (constant)',
      '$y = e^x$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If $y\' = 0$, then $y$ is constant.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'An initial value problem (IVP) consists of:',
    options: [
      'Just a differential equation',
      'Multiple differential equations',
      'Only boundary conditions',
      'A DE together with initial condition(s)'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An IVP specifies a DE plus initial values like $y(0) = 1$.',
  },
];
