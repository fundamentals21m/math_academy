import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many axioms define a determinant function?',
    options: [
      '2',
      '3',
      '5',
      '4',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A determinant function is defined by 4 axioms: homogeneity, additivity, vanishing (when two rows are equal), and normalization (value 1 on identity).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The homogeneity axiom states that $d(\\ldots, tA_k, \\ldots) = $',
    options: [
      '$d(\\ldots, A_k, \\ldots)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The homogeneity axiom states that scaling one row by $t$ scales the determinant by $t$: $d(\\ldots, tA_k, \\ldots) = t \\cdot d(\\ldots, A_k, \\ldots)$.',
  },
      '$t^2 \\cdot d(\\ldots, A_k, \\ldots)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The homogeneity axiom states that scaling one row by $t$ scales the determinant by $t$: $d(\\ldots, tA_k, \\ldots) = t \\cdot d(\\ldots, A_k, \\ldots)$.',
  },
      '$t^n \\cdot d(\\ldots, A_k, \\ldots)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The homogeneity axiom states that scaling one row by $t$ scales the determinant by $t$: $d(\\ldots, tA_k, \\ldots) = t \\cdot d(\\ldots, A_k, \\ldots)$.',
  },
      '$t \\cdot d(\\ldots, A_k, \\ldots)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The homogeneity axiom states that scaling one row by $t$ scales the determinant by $t$: $d(\\ldots, tA_k, \\ldots) = t \\cdot d(\\ldots, A_k, \\ldots)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The homogeneity axiom states that scaling one row by $t$ scales the determinant by $t$: $d(\\ldots, tA_k, \\ldots) = t \\cdot d(\\ldots, A_k, \\ldots)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What happens to the determinant when two adjacent rows are interchanged?',
    options: [
      'It changes sign',
      'It stays the same',
      'It doubles',
      'It becomes zero',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Interchanging two adjacent rows reverses the sign of the determinant. This follows from the axioms by considering the determinant of a matrix with both rows equal to $A_k + A_{k+1}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The axioms imply that if any row of a matrix is the zero vector, then the determinant is:',
    options: [
      '$1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By homogeneity, $d(\\ldots, 0, \\ldots) = d(\\ldots, 0 \\cdot A, \\ldots) = 0 \\cdot d(\\ldots, A, \\ldots) = 0$ for any vector $A$.',
  },
      '$-1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By homogeneity, $d(\\ldots, 0, \\ldots) = d(\\ldots, 0 \\cdot A, \\ldots) = 0 \\cdot d(\\ldots, A, \\ldots) = 0$ for any vector $A$.',
  },
      '$0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By homogeneity, $d(\\ldots, 0, \\ldots) = d(\\ldots, 0 \\cdot A, \\ldots) = 0 \\cdot d(\\ldots, A, \\ldots) = 0$ for any vector $A$.',
  },
      'Undefined',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By homogeneity, $d(\\ldots, 0, \\ldots) = d(\\ldots, 0 \\cdot A, \\ldots) = 0 \\cdot d(\\ldots, A, \\ldots) = 0$ for any vector $A$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A function satisfying axioms 1, 2, and 3 is called:',
    options: [
      'Linear',
      'Bijective',
      'Multilinear and alternating',
      'Continuous',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Axioms 1 and 2 make the function linear in each row (multilinear), while axiom 3 (vanishing when rows are equal) makes it alternating. This multilinear, alternating property characterizes determinant functions.',
  },
];
