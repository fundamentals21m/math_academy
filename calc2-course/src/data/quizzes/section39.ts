import type { QuizQuestion } from './types';

export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The adjoint of a matrix $A$, denoted $A^*$, is defined as:',
    options: [
      'The transpose of $A
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The adjoint $A^* = \\bar{A}^t$ is obtained by taking the complex conjugate of each entry and then transposing.',
  },
      'The transpose of the conjugate of $A
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The adjoint $A^* = \\bar{A}^t$ is obtained by taking the complex conjugate of each entry and then transposing.',
  },
      'The conjugate of $A
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The adjoint $A^* = \\bar{A}^t$ is obtained by taking the complex conjugate of each entry and then transposing.',
  },
      'The inverse of $A
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The adjoint $A^* = \\bar{A}^t$ is obtained by taking the complex conjugate of each entry and then transposing.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The adjoint $A^* = \\bar{A}^t$ is obtained by taking the complex conjugate of each entry and then transposing.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A matrix is self-adjoint if:',
    options: [
      '$A = A^{-1}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Self-adjoint means $A = A^*$. This is another name for a Hermitian matrix.',
  },
      '$A = -A^*
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Self-adjoint means $A = A^*$. This is another name for a Hermitian matrix.',
  },
      '$A^* = I
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Self-adjoint means $A = A^*$. This is another name for a Hermitian matrix.',
  },
      '$A = A^*
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Self-adjoint means $A = A^*$. This is another name for a Hermitian matrix.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Self-adjoint means $A = A^*$. This is another name for a Hermitian matrix.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For any matrices $A$ and $B$, $(AB)^* = $?',
    options: [
      '$B^* A^*
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The adjoint reverses the order: $(AB)^* = B^* A^*$. This follows from $(AB)^t = B^t A^t$ and conjugation being element-wise.',
  },
      '$A^* B^*
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The adjoint reverses the order: $(AB)^* = B^* A^*$. This follows from $(AB)^t = B^t A^t$ and conjugation being element-wise.',
  },
      '$(A^* B^*)^{-1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The adjoint reverses the order: $(AB)^* = B^* A^*$. This follows from $(AB)^t = B^t A^t$ and conjugation being element-wise.',
  },
      '$A B^*
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The adjoint reverses the order: $(AB)^* = B^* A^*$. This follows from $(AB)^t = B^t A^t$ and conjugation being element-wise.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The adjoint reverses the order: $(AB)^* = B^* A^*$. This follows from $(AB)^t = B^t A^t$ and conjugation being element-wise.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The adjoint is characterized by $(Ax, y) = (x, A^*y)$ for which inner product on $\\mathbb{C}^n$?',
    options: [
      '$(x, y) = \\sum x_i y_i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The standard inner product on $\\mathbb{C}^n$ is $(x, y) = \\sum x_i \\bar{y_i}$. With this inner product, $(Ax, y) = (x, A^*y)$.',
  },
      '$(x, y) = \\sum |x_i y_i|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The standard inner product on $\\mathbb{C}^n$ is $(x, y) = \\sum x_i \\bar{y_i}$. With this inner product, $(Ax, y) = (x, A^*y)$.',
  },
      '$(x, y) = x^t y
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The standard inner product on $\\mathbb{C}^n$ is $(x, y) = \\sum x_i \\bar{y_i}$. With this inner product, $(Ax, y) = (x, A^*y)$.',
  },
      '$(x, y) = \\sum x_i \\bar{y_i}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The standard inner product on $\\mathbb{C}^n$ is $(x, y) = \\sum x_i \\bar{y_i}$. With this inner product, $(Ax, y) = (x, A^*y)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The standard inner product on $\\mathbb{C}^n$ is $(x, y) = \\sum x_i \\bar{y_i}$. With this inner product, $(Ax, y) = (x, A^*y)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $A = \\begin{bmatrix} 1 & 2-i \\\\ 4+2i & 5i \\end{bmatrix}$, what is the $(2,1)$ entry of $A^*$?',
    options: [
      '$2-i
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$A^* = \\bar{A}^t$, so $(A^*)_{21} = \\overline{a_{12}} = \\overline{2-i} = 2+i$.',
  },
      '$-5i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$A^* = \\bar{A}^t$, so $(A^*)_{21} = \\overline{a_{12}} = \\overline{2-i} = 2+i$.',
  },
      '$2+i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$A^* = \\bar{A}^t$, so $(A^*)_{21} = \\overline{a_{12}} = \\overline{2-i} = 2+i$.',
  },
      '$4-2i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$A^* = \\bar{A}^t$, so $(A^*)_{21} = \\overline{a_{12}} = \\overline{2-i} = 2+i$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$A^* = \\bar{A}^t$, so $(A^*)_{21} = \\overline{a_{12}} = \\overline{2-i} = 2+i$.',
  },
];
