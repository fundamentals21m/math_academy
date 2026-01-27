import type { QuizQuestion } from './types';

export const section97Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A linear transformation $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ can be represented by:',
    options: [
      'A scalar',
      'A vector',
      'An $n \\times m$ matrix',
      'An $m \\times n$ matrix'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$T(\\mathbf{x}) = A\\mathbf{x}$ where $A$ is $m \\times n$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The $j$th column of matrix $A$ representing $T$ is:',
    options: [
      '$T(\\mathbf{e}_j)$',
      '$T(\\mathbf{e}_1)$',
      '$\\mathbf{e}_j$',
      'The $j$th row of $A$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Column $j$ = $T(\\mathbf{e}_j)$ (image of $j$th standard basis vector).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The matrix of the identity transformation $I: \\mathbb{R}^n \\to \\mathbb{R}^n$ is:',
    options: [
      'The zero matrix',
      'The identity matrix $I_n$',
      'Any matrix',
      'A diagonal matrix with 2s'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Identity transformation corresponds to identity matrix.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $S$ and $T$ are linear transformations, the matrix of $T \\circ S$ is:',
    options: [
      '$[S][T]$',
      '$[S] + [T]$',
      '$[T][S]$',
      '$[S] - [T]$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Composition: $[T \\circ S] = [T][S]$ (matrix multiplication).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The rotation by $\\theta$ in $\\mathbb{R}^2$ has matrix:',
    options: [
      '$\\begin{pmatrix} \\theta & 0 \\\\ 0 & \\theta \\end{pmatrix}$',
      '$\\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{pmatrix}$',
      '$\\begin{pmatrix} 1 & \\theta \\\\ 0 & 1 \\end{pmatrix}$',
      '$\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Rotation matrix: $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The matrix representation depends on:',
    options: [
      'The choice of bases for domain and codomain',
      'Only the transformation',
      'Only the codomain basis',
      'Neither'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Different bases give different matrix representations.',
  },
];
