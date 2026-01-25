import type { QuizQuestion } from './types';

export const section38Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A square matrix $A$ is Hermitian if and only if:',
    options: [
      '$A = A^t$',
      '$A = \\bar{A}$',
      '$A = \\bar{A}^t$',
      '$A = -\\bar{A}^t$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A Hermitian matrix satisfies $a_{ij} = \\bar{a}_{ji}$, which is equivalent to $A = \\bar{A}^t$ (the transpose of the conjugate).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'All diagonal elements of a Hermitian matrix are:',
    options: [
      'Real',
      'Pure imaginary',
      'Zero',
      'Unit complex numbers',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For diagonal elements, $a_{ii} = \\bar{a}_{ii}$, which means $a_{ii}$ equals its own conjugate, so it must be real.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'All diagonal elements of a skew-Hermitian matrix are:',
    options: [
      'Real',
      'Positive real',
      'Negative real',
      'Pure imaginary',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For skew-Hermitian, $a_{ii} = -\\bar{a}_{ii}$, so $a_{ii} + \\bar{a}_{ii} = 0$, meaning $2\\text{Re}(a_{ii}) = 0$. Thus $a_{ii}$ is purely imaginary.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For any square matrix $A$, the matrix $B = \\frac{1}{2}(A + A^*)$ is:',
    options: [
      'Skew-Hermitian',
      'Unitary',
      'Hermitian',
      'Nilpotent',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$B^* = \\frac{1}{2}(A^* + A) = B$, so $B$ is Hermitian. This is the Hermitian part of any matrix $A$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of the following is a skew-Hermitian matrix?',
    options: [
      '$\\begin{bmatrix} 1 & 2 \\\\ 2 & 3 \\end{bmatrix}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Check: $a_{11} = i = -\\bar{i}$, $a_{22} = 3i = -\\overline{3i}$, $a_{12} = -2 = -\\overline{2}$, $a_{21} = 2 = -\\overline{-2}$. All satisfy $a_{ij} = -\\bar{a}_{ji}$.',
  },
      '$\\begin{bmatrix} i & -2 \\\\ 2 & 3i \\end{bmatrix}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Check: $a_{11} = i = -\\bar{i}$, $a_{22} = 3i = -\\overline{3i}$, $a_{12} = -2 = -\\overline{2}$, $a_{21} = 2 = -\\overline{-2}$. All satisfy $a_{ij} = -\\bar{a}_{ji}$.',
  },
      '$\\begin{bmatrix} 1 & i \\\\ -i & 1 \\end{bmatrix}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Check: $a_{11} = i = -\\bar{i}$, $a_{22} = 3i = -\\overline{3i}$, $a_{12} = -2 = -\\overline{2}$, $a_{21} = 2 = -\\overline{-2}$. All satisfy $a_{ij} = -\\bar{a}_{ji}$.',
  },
      '$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Check: $a_{11} = i = -\\bar{i}$, $a_{22} = 3i = -\\overline{3i}$, $a_{12} = -2 = -\\overline{2}$, $a_{21} = 2 = -\\overline{-2}$. All satisfy $a_{ij} = -\\bar{a}_{ji}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Check: $a_{11} = i = -\\bar{i}$, $a_{22} = 3i = -\\overline{3i}$, $a_{12} = -2 = -\\overline{2}$, $a_{21} = 2 = -\\overline{-2}$. All satisfy $a_{ij} = -\\bar{a}_{ji}$.',
  },
];
