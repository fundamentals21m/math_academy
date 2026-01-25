import type { QuizQuestion } from './types';

export const section98Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Matrix addition $(A + B)_{ij} = ?$',
    options: [
      '$A_{ij} B_{ij}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Add corresponding entries.',
  },
      '$A_{ij} - B_{ij}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Add corresponding entries.',
  },
      '$\\sum_k A_{ik} B_{kj}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Add corresponding entries.',
  },
      '$A_{ij} + B_{ij}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Add corresponding entries.',
  },
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
      '$c + A_{ij}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Multiply each entry by $c$.',
  },
      '$A_{ij}/c
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Multiply each entry by $c$.',
  },
      '$c
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Multiply each entry by $c$.',
  },
      '$cA_{ij}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Multiply each entry by $c$.',
  },
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
      '$A_{ij} B_{ij}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$(AB)_{ij} = \\sum_k A_{ik} B_{kj}$ (row $i$ of $A$ dot column $j$ of $B$).',
  },
      '$\\sum_k A_{ki} B_{jk}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$(AB)_{ij} = \\sum_k A_{ik} B_{kj}$ (row $i$ of $A$ dot column $j$ of $B$).',
  },
      '$\\sum_k A_{ik} B_{kj}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$(AB)_{ij} = \\sum_k A_{ik} B_{kj}$ (row $i$ of $A$ dot column $j$ of $B$).',
  },
      '$A_{ij} + B_{ij}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$(AB)_{ij} = \\sum_k A_{ik} B_{kj}$ (row $i$ of $A$ dot column $j$ of $B$).',
  },
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
      'Commutative',
      'Always undefined',
      'Not commutative in general',
      'Same as addition',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In general, $AB \\neq BA$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To multiply $A$ ($m \\times n$) and $B$ ($p \\times q$), we need:',
    options: [
      '$n = p
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Columns of $A$ must equal rows of $B$: $n = p$.',
  },
      '$m = p
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Columns of $A$ must equal rows of $B$: $n = p$.',
  },
      '$m = q
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Columns of $A$ must equal rows of $B$: $n = p$.',
  },
      '$n = q
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Columns of $A$ must equal rows of $B$: $n = p$.',
  },
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
      '$A_{ij}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Transpose: swap rows and columns.',
  },
      '$A_{ji}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Transpose: swap rows and columns.',
  },
      '$-A_{ij}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Transpose: swap rows and columns.',
  },
      '$1/A_{ij}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Transpose: swap rows and columns.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Transpose: swap rows and columns.',
  },
];
