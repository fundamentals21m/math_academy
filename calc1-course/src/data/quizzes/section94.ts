import type { QuizQuestion } from './types';

export const section94Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The best approximation to $\\mathbf{v}$ in a subspace $W$ is:',
    options: [
      'Any vector in $W$',
      'The projection of $\\mathbf{v}$ onto $W$',
      '$\\mathbf{v}$ itself',
      'The zero vector'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Orthogonal projection minimizes distance.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The error $\\mathbf{v} - \\text{proj}_W(\\mathbf{v})$ is:',
    options: [
      'In $W$',
      'Orthogonal to $W$',
      'Parallel to $\\mathbf{v}$',
      'Zero'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The error vector is perpendicular to the subspace.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Least squares finds the best approximate solution to:',
    options: [
      'Any equation',
      'Overdetermined systems $A\\mathbf{x} = \\mathbf{b}$',
      'Underdetermined systems only',
      'Homogeneous systems'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Least squares: minimize $\\|A\\mathbf{x} - \\mathbf{b}\\|$ when exact solution doesn\'t exist.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The normal equation for least squares is:',
    options: [
      '$A\\mathbf{x} = \\mathbf{b}$',
      '$A^T A \\mathbf{x} = A^T \\mathbf{b}$',
      '$A^{-1}\\mathbf{b} = \\mathbf{x}$',
      '$\\mathbf{x} = \\mathbf{b}$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Normal equation: $A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In linear regression, we find the line $y = mx + c$ that minimizes:',
    options: [
      'The maximum error',
      'The sum of squared vertical distances',
      'The number of points off the line',
      'The horizontal distances'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Least squares minimizes sum of squared residuals.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $W$ is spanned by orthonormal $\\{\\mathbf{u}_1, ..., \\mathbf{u}_k\\}$, then $\\text{proj}_W(\\mathbf{v}) = ?$',
    options: [
      '$\\sum_{i=1}^k \\mathbf{u}_i$',
      '$\\sum_{i=1}^k \\langle \\mathbf{v}, \\mathbf{u}_i \\rangle \\mathbf{u}_i$',
      '$\\langle \\mathbf{v}, \\mathbf{u}_1 \\rangle$',
      '$\\mathbf{v}$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Projection onto orthonormal set: sum of projections onto each basis vector.',
  },
];
