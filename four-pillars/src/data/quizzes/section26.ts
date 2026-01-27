import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The inner product (dot product) of u = (u₁, u₂) and v = (v₁, v₂) is:',
    options: [
      '$(u_1 + v_1, u_2 + v_2)$',
      '$u_1 v_1 + u_2 v_2$',
      '$(u_1 v_1, u_2 v_2)$',
      '$u_1 + u_2 + v_1 + v_2$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The inner product multiplies corresponding components and sums them.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The length |u| of a vector u satisfies:',
    options: [
      '$|\\mathbf{u}| = \\mathbf{u} + \\mathbf{u}$',
      '$|\\mathbf{u}| = \\mathbf{u} \\cdot \\mathbf{u}$',
      '$|\\mathbf{u}|^2 = \\mathbf{u} \\cdot \\mathbf{u}$',
      '$|\\mathbf{u}|^2 = \\mathbf{u} + \\mathbf{u}$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The square of the length equals the inner product of the vector with itself.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Vectors u and v are perpendicular if and only if:',
    options: [
      '$\\mathbf{u} + \\mathbf{v} = \\mathbf{0}$',
      '$|\\mathbf{u}| = |\\mathbf{v}|$',
      '$\\mathbf{u} = \\mathbf{v}$',
      '$\\mathbf{u} \\cdot \\mathbf{v} = 0$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Zero inner product is the algebraic criterion for perpendicularity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The altitudes of a triangle all meet at a point called the:',
    options: [
      'Orthocenter',
      'Centroid',
      'Circumcenter',
      'Incenter'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The orthocenter is the common point of the three altitudes.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The inner product is symmetric, meaning:',
    options: [
      '$\\mathbf{u} \\cdot \\mathbf{v} = -\\mathbf{v} \\cdot \\mathbf{u}$',
      '$\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}$',
      '$\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}|$',
      '$\\mathbf{u} \\cdot \\mathbf{v} = 0$ always'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The order of the vectors does not affect the inner product.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The diagonals of a rhombus are perpendicular because:',
    options: [
      'A rhombus is a square',
      'All quadrilaterals have perpendicular diagonals',
      'The diagonals have directions u + v and u − v with (u + v)·(u − v) = |u|² − |v|² = 0',
      'The diagonals bisect each other'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'In a rhombus |u| = |v|, so (u + v)·(u − v) = |u|² − |v|² = 0.',
  },
];
