import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Carl Gustav Jacob Jacobi is best known for his work on:',
    options: [
      'Number theory',
      'Elliptic functions',
      'Geometry',
      'Statistics'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Jacobi made fundamental contributions to the theory of elliptic functions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Jacobian matrix consists of:',
    options: [
      'Second derivatives',
      'First partial derivatives',
      'Integrals',
      'Eigenvalues'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Jacobian is the matrix of all first-order partial derivatives of a vector-valued function.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Jacobi\'s identity is a fundamental relation in:',
    options: [
      'Linear algebra',
      'Lie algebras',
      'Number theory',
      'Topology'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Jacobi\'s identity $[x,[y,z]] + [y,[z,x]] + [z,[x,y]] = 0$ is fundamental in Lie algebra theory.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Jacobi contributed to mechanics through:',
    options: [
      'The Hamilton-Jacobi equation',
      'The Lagrangian',
      'Newton\'s laws',
      'Special relativity'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Hamilton-Jacobi equation reformulates classical mechanics and connects to quantum mechanics.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Jacobi competed with which mathematician in developing elliptic function theory?',
    options: [
      'Gauss',
      'Abel',
      'Cauchy',
      'Euler'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Jacobi and Abel developed elliptic function theory independently and nearly simultaneously.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What type of mathematical functions did Jacobi study that generalize trigonometric functions?',
    correctAnswer: 'elliptic',
    difficulty: 'medium',
    explanation: 'Elliptic functions are doubly periodic generalizations of trigonometric functions.',
  },
];
