import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What must a nonempty subset $S$ of a linear space $V$ satisfy to be a subspace?',
    options: [
      'Only the closure axioms',
      'All 10 linear space axioms',
      'Only the axioms involving the zero element',
      'None of the axioms (it is automatic)',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Theorem 1.4 states that a nonempty subset $S$ is a subspace if and only if it satisfies the closure axioms. The other axioms are inherited from the parent space $V$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $S$ is a subspace of $V$, which element must $S$ contain?',
    options: [
      'Every element of $V
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If $S$ is a subspace and $x \\in S$, then $0 \\cdot x = 0$ must be in $S$ by closure under scalar multiplication. So every subspace contains the zero element.',
  },
      'At least one nonzero element',
      'The zero element',
      'All unit vectors',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'If $S$ is a subspace and $x \\in S$, then $0 \\cdot x = 0$ must be in $S$ by closure under scalar multiplication. So every subspace contains the zero element.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the linear span $L(S)$ of a set $S$ in a linear space?',
    options: [
      'The largest subspace contained in $S
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The linear span $L(S)$ is the set of all finite linear combinations of elements in $S$. It is the smallest subspace containing $S$.',
  },
      'The set $S$ itself',
      'The complement of $S$ in $V
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The linear span $L(S)$ is the set of all finite linear combinations of elements in $S$. It is the smallest subspace containing $S$.',
  },
      'The smallest subspace containing $S
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The linear span $L(S)$ is the set of all finite linear combinations of elements in $S$. It is the smallest subspace containing $S$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The linear span $L(S)$ is the set of all finite linear combinations of elements in $S$. It is the smallest subspace containing $S$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following sets spans the space of polynomials of degree $\\leq 2$?',
    options: [
      '$\\{1, t\\}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The set $\\{1, t, t^2\\}$ spans all polynomials of degree $\\leq 2$ because any such polynomial $a_0 + a_1t + a_2t^2$ is a linear combination of these three polynomials.',
  },
      '$\\{t, t^2, t^3\\}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The set $\\{1, t, t^2\\}$ spans all polynomials of degree $\\leq 2$ because any such polynomial $a_0 + a_1t + a_2t^2$ is a linear combination of these three polynomials.',
  },
      '$\\{1, t, t^2\\}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The set $\\{1, t, t^2\\}$ spans all polynomials of degree $\\leq 2$ because any such polynomial $a_0 + a_1t + a_2t^2$ is a linear combination of these three polynomials.',
  },
      '$\\{1\\}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The set $\\{1, t, t^2\\}$ spans all polynomials of degree $\\leq 2$ because any such polynomial $a_0 + a_1t + a_2t^2$ is a linear combination of these three polynomials.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The set $\\{1, t, t^2\\}$ spans all polynomials of degree $\\leq 2$ because any such polynomial $a_0 + a_1t + a_2t^2$ is a linear combination of these three polynomials.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is $L(\\emptyset)$, the linear span of the empty set?',
    options: [
      '$\\{0\\}$, the set containing only the zero element',
      'The entire space $V
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By convention, $L(\\emptyset) = \\{0\\}$, the trivial subspace containing only the zero element. This is the smallest possible subspace.',
  },
      'The empty set',
      'Undefined',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By convention, $L(\\emptyset) = \\{0\\}$, the trivial subspace containing only the zero element. This is the smallest possible subspace.',
  },
];
