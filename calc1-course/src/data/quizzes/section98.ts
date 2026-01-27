import type { QuizQuestion } from './types';

export const section98Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Matrix addition $(A + B)_{ij} = ?$',
    options: [
      '$A_{ij} B_{ij}$',
      '$A_{ij} + B_{ij}$',
      '$A_{ij} - B_{ij}$',
      '$\\sum_k A_{ik} B_{kj}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Add corresponding entries.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Scalar multiplication $(cA)_{ij} = ?$',
    options: [
      '$c + A_{ij}$',
      '$A_{ij}/c$',
      '$cA_{ij}$',
      '$c$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Multiply each entry by $c$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The $(i,j)$ entry of $AB$ is:',
    options: [
      '$A_{ij} B_{ij}$',
      '$\\sum_k A_{ki} B_{jk}$',
      '$A_{ij} + B_{ij}$',
      '$\\sum_k A_{ik} B_{kj}$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$(AB)_{ij} = \\sum_k A_{ik} B_{kj}$ (row $i$ of $A$ dot column $j$ of $B$).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Matrix multiplication is:',
    options: [
      'Not commutative in general',
      'Commutative',
      'Always undefined',
      'Same as addition'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In general, $AB \\neq BA$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To multiply $A$ ($m \\times n$) and $B$ ($p \\times q$), we need:',
    options: [
      '$m = p$',
      '$n = p$',
      '$m = q$',
      '$n = q$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Columns of $A$ must equal rows of $B$: $n = p$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The transpose $(A^T)_{ij} = ?$',
    options: [
      '$A_{ij}$',
      '$-A_{ij}$',
      '$A_{ji}$',
      '$1/A_{ij}$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Transpose: swap rows and columns.',
  },
];
