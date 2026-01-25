import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The product $AB$ of an $m \\times n$ matrix $A$ and an $n \\times p$ matrix $B$ has size:',
    options: [
      '$m \\times n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When multiplying $A$ ($m \\times n$) by $B$ ($n \\times p$), the result $AB$ has size $m \\times p$. The inner dimensions ($n$) must match.',
  },
      '$n \\times p
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'When multiplying $A$ ($m \\times n$) by $B$ ($n \\times p$), the result $AB$ has size $m \\times p$. The inner dimensions ($n$) must match.',
  },
      '$m \\times p
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'When multiplying $A$ ($m \\times n$) by $B$ ($n \\times p$), the result $AB$ has size $m \\times p$. The inner dimensions ($n$) must match.',
  },
      '$n \\times n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'When multiplying $A$ ($m \\times n$) by $B$ ($n \\times p$), the result $AB$ has size $m \\times p$. The inner dimensions ($n$) must match.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'When multiplying $A$ ($m \\times n$) by $B$ ($n \\times p$), the result $AB$ has size $m \\times p$. The inner dimensions ($n$) must match.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The $(i, k)$ entry of the product $AB$ is computed by:',
    options: [
      'Adding row $i$ of $A$ and column $k$ of $B
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The entry $c_{ik} = \\sum_{j=1}^n a_{ij}b_{jk}$, which is the dot product of row $i$ of $A$ with column $k$ of $B$.',
  },
      'The dot product of row $i$ of $A$ and column $k$ of $B
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The entry $c_{ik} = \\sum_{j=1}^n a_{ij}b_{jk}$, which is the dot product of row $i$ of $A$ with column $k$ of $B$.',
  },
      'Multiplying $a_{ik}$ and $b_{ik}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The entry $c_{ik} = \\sum_{j=1}^n a_{ij}b_{jk}$, which is the dot product of row $i$ of $A$ with column $k$ of $B$.',
  },
      'The determinant of a submatrix',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The entry $c_{ik} = \\sum_{j=1}^n a_{ij}b_{jk}$, which is the dot product of row $i$ of $A$ with column $k$ of $B$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Matrix multiplication is:',
    options: [
      'Commutative and associative',
      'Commutative but not associative',
      'Neither commutative nor associative',
      'Associative but not commutative',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Matrix multiplication is associative: $(AB)C = A(BC)$. However, it is generally NOT commutative: $AB \\neq BA$ in general.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The identity matrix $I_n$ satisfies:',
    options: [
      'Both of the above',
      '$I_n A = A$ for any $n \\times m$ matrix $A
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The identity matrix is a two-sided identity: $I_m A = A$ when $A$ is $m \\times n$, and $AI_n = A$ when $A$ is $m \\times n$.',
  },
      '$AI_n = A$ for any $m \\times n$ matrix $A
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The identity matrix is a two-sided identity: $I_m A = A$ when $A$ is $m \\times n$, and $AI_n = A$ when $A$ is $m \\times n$.',
  },
      '$I_n A = AI_n$ for all $A
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The identity matrix is a two-sided identity: $I_m A = A$ when $A$ is $m \\times n$, and $AI_n = A$ when $A$ is $m \\times n$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The identity matrix is a two-sided identity: $I_m A = A$ when $A$ is $m \\times n$, and $AI_n = A$ when $A$ is $m \\times n$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The transpose of a product satisfies:',
    options: [
      '$(AB)^T = B^T A^T
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The transpose of a product reverses the order: $(AB)^T = B^T A^T$. This mirrors the formula for inverses: $(AB)^{-1} = B^{-1}A^{-1}$.',
  },
      '$(AB)^T = A^T B^T
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The transpose of a product reverses the order: $(AB)^T = B^T A^T$. This mirrors the formula for inverses: $(AB)^{-1} = B^{-1}A^{-1}$.',
  },
      '$(AB)^T = BA
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The transpose of a product reverses the order: $(AB)^T = B^T A^T$. This mirrors the formula for inverses: $(AB)^{-1} = B^{-1}A^{-1}$.',
  },
      '$(AB)^T = AB
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The transpose of a product reverses the order: $(AB)^T = B^T A^T$. This mirrors the formula for inverses: $(AB)^{-1} = B^{-1}A^{-1}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The transpose of a product reverses the order: $(AB)^T = B^T A^T$. This mirrors the formula for inverses: $(AB)^{-1} = B^{-1}A^{-1}$.',
  },
];
