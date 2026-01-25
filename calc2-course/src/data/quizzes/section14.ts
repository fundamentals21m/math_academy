import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The matrix representation of a linear transformation $T: V \\to W$ depends on:',
    options: [
      'Only the transformation $T
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The matrix representation depends on the ordered bases chosen for both the domain $V$ and codomain $W$. Different bases give different matrices.',
  },
      'The choice of bases for $V$ and $W
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The matrix representation depends on the ordered bases chosen for both the domain $V$ and codomain $W$. Different bases give different matrices.',
  },
      'Only the dimensions of $V$ and $W
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The matrix representation depends on the ordered bases chosen for both the domain $V$ and codomain $W$. Different bases give different matrices.',
  },
      'Nothing; it is unique',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The matrix representation depends on the ordered bases chosen for both the domain $V$ and codomain $W$. Different bases give different matrices.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $T: V \\to W$ with $\\dim V = n$ and $\\dim W = m$, the matrix of $T$ has size:',
    options: [
      '$m \\times n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The matrix is $m \\times n$: $m$ rows (one for each basis element in $W$) and $n$ columns (one for each basis element in $V$).',
  },
      '$n \\times n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The matrix is $m \\times n$: $m$ rows (one for each basis element in $W$) and $n$ columns (one for each basis element in $V$).',
  },
      '$n \\times m
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The matrix is $m \\times n$: $m$ rows (one for each basis element in $W$) and $n$ columns (one for each basis element in $V$).',
  },
      '$m \\times m
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The matrix is $m \\times n$: $m$ rows (one for each basis element in $W$) and $n$ columns (one for each basis element in $V$).',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The matrix is $m \\times n$: $m$ rows (one for each basis element in $W$) and $n$ columns (one for each basis element in $V$).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The $k$th column of the matrix representation of $T$ contains:',
    options: [
      'The components of $e_k
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Column $k$ contains the components of $T(e_k)$ expressed as a linear combination of the basis elements of $W$.',
  },
      'The eigenvalues of $T
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Column $k$ contains the components of $T(e_k)$ expressed as a linear combination of the basis elements of $W$.',
  },
      'The components of $T(e_k)$ relative to the basis of $W
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Column $k$ contains the components of $T(e_k)$ expressed as a linear combination of the basis elements of $W$.',
  },
      'All zeros',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Column $k$ contains the components of $T(e_k)$ expressed as a linear combination of the basis elements of $W$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If the differentiation operator $D$ maps polynomials of degree $\\leq 3$ to polynomials of degree $\\leq 2$ using standard bases, what is the entry in row 1, column 2?',
    options: [
      '1',
      '0',
      '2',
      '3',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'With basis $(1, x, x^2, x^3)$ for domain and $(1, x, x^2)$ for codomain: $D(x) = 1$, so column 2 is $(1, 0, 0)^T$. The entry in row 1, column 2 is 1.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Given matrix $A$ of $T$ and components $(x_1, \\ldots, x_n)$ of $x$, the components of $T(x)$ are given by:',
    options: [
      'Adding the components',
      'Taking the transpose $A^T
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If $X$ is the column vector of components, then the components of $T(x)$ form the column vector $Y = AX$, computed by matrix-vector multiplication.',
  },
      'Finding the determinant',
      'Matrix-vector multiplication $AX
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $X$ is the column vector of components, then the components of $T(x)$ form the column vector $Y = AX$, computed by matrix-vector multiplication.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $X$ is the column vector of components, then the components of $T(x)$ form the column vector $Y = AX$, computed by matrix-vector multiplication.',
  },
];
