import type { QuizQuestion } from './types';

export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Clairaut\'s theorem states that if $f$ has continuous second partial derivatives, then:',
    options: [
      '$\\frac{\\partial^2 f}{\\partial x \\partial y} = 0$',
      '$\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$',
      '$\\frac{\\partial^2 f}{\\partial x^2} = \\frac{\\partial^2 f}{\\partial y^2}$',
      '$f$ is linear'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Clairaut\'s theorem: mixed partials are equal when continuous.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The condition for Clairaut\'s theorem is:',
    options: [
      '$f$ is continuous',
      'The second partial derivatives exist',
      'The second partial derivatives are continuous',
      '$f$ is differentiable once'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Continuity of the mixed partials (or at least one of them) ensures equality.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Hessian matrix of $f: \\mathbf{R}^n \\to \\mathbf{R}$ is:',
    options: [
      'The gradient',
      'The matrix of second partial derivatives',
      'The Jacobian',
      'The determinant of the Jacobian'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Hessian is $H_{ij} = \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'By Clairaut\'s theorem, the Hessian matrix (when continuous) is:',
    options: [
      'Diagonal',
      'Symmetric',
      'Anti-symmetric',
      'The identity'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since mixed partials are equal, $H_{ij} = H_{ji}$, so the Hessian is symmetric.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A function is $C^k$ (k-times continuously differentiable) if:',
    options: [
      'It is continuous',
      'All partial derivatives up to order $k$ exist and are continuous',
      'It has $k$ roots',
      'It is bounded by $k$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$C^k$ means all partial derivatives through order $k$ exist and are continuous.',
  },
];
