import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The identity $A(\\text{cof} \\, A)^T = (\\det A) \\cdot I$ implies that when $\\det A \\neq 0$:',
    options: [
      '$A^{-1} = \\frac{1}{\\det A}(\\text{cof} \\, A)^T$',
      '$A^{-1} = (\\text{cof} \\, A)^T$',
      '$A^{-1} = (\\det A)(\\text{cof} \\, A)^T$',
      '$A^{-1} = (\\text{cof} \\, A)$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'From $A(\\text{cof} \\, A)^T = (\\det A) I$, dividing by $\\det A$ gives $A^{-1} = \\frac{1}{\\det A}(\\text{cof} \\, A)^T$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The matrix $(\\text{cof} \\, A)^T$ is also called the:',
    options: [
      'Transpose',
      'Adjugate (classical adjoint)',
      'Inverse',
      'Conjugate'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The transpose of the cofactor matrix, $(\\text{cof} \\, A)^T$, is called the adjugate or classical adjoint of $A$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "In Cramer's rule for the system $AX = B$, the solution for $x_j$ is:",
    options: [
      '$\\frac{\\det A}{\\det C_j}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: "Cramer's rule gives $x_j = \\frac{\\det C_j}{\\det A}$, where $C_j$ is the matrix $A$ with column $j$ replaced by $B$.",
  },
      '$\\det A \\cdot \\det C_j
    correctIndex: 2,
    difficulty: 'medium',
    explanation: "Cramer's rule gives $x_j = \\frac{\\det C_j}{\\det A}$, where $C_j$ is the matrix $A$ with column $j$ replaced by $B$.",
  },
      '$\\det C_j - \\det A
    correctIndex: 2,
    difficulty: 'medium',
    explanation: "Cramer's rule gives $x_j = \\frac{\\det C_j}{\\det A}$, where $C_j$ is the matrix $A$ with column $j$ replaced by $B$.",
  },
      '$\\frac{\\det C_j}{\\det A}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: "Cramer's rule gives $x_j = \\frac{\\det C_j}{\\det A}$, where $C_j$ is the matrix $A$ with column $j$ replaced by $B$.",
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: "Cramer's rule gives $x_j = \\frac{\\det C_j}{\\det A}$, where $C_j$ is the matrix $A$ with column $j$ replaced by $B$.",
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: "For large systems, Cramer's rule is computationally:",
    options: [
      'More efficient than Gaussian elimination',
      'About as efficient as Gaussian elimination',
      'Less efficient than Gaussian elimination',
      'The only valid method',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: "Cramer's rule requires computing $n+1$ determinants of size $n$, making it far slower than Gaussian elimination for large $n$. It is mainly useful for theoretical analysis or small systems.",
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a $2 \\times 2$ system $ax + by = e$, $cx + dy = f$ with $ad - bc \\neq 0$, the solution for $x$ is:',
    options: [
      '$\\frac{ed - bf}{ad - bc}$',
      '$\\frac{af - ce}{ad - bc}$',
      '$\\frac{ae - cf}{ad - bc}$',
      '$\\frac{ad - bc}{ed - bf}$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: "By Cramer's rule, $x = \\frac{\\det \\begin{bmatrix} e & b \\\\ f & d \\end{bmatrix}}{\\det \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}} = \\frac{ed - bf}{ad - bc}$.",
  },
];
