import type { QuizQuestion } from './types';

export const section64Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The implication $P \\to Q$ (read "if $P$ then $Q$") is false exactly when:',
    options: [
      'Both $P$ and $Q$ are true',
      '$P$ is true and $Q$ is false',
      '$P$ is false and $Q$ is true',
      'Both $P$ and $Q$ are false',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An implication $P \\to Q$ is only false when the hypothesis $P$ is true but the conclusion $Q$ is false. In all other cases (including when $P$ is false), the implication is vacuously true.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The contrapositive of $P \\to Q$ is:',
    options: [
      '$Q \\to P
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The contrapositive of $P \\to Q$ is $\\neg Q \\to \\neg P$. An implication and its contrapositive are logically equivalent.',
  },
      '$\\neg P \\to \\neg Q
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The contrapositive of $P \\to Q$ is $\\neg Q \\to \\neg P$. An implication and its contrapositive are logically equivalent.',
  },
      '$P \\land \\neg Q
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The contrapositive of $P \\to Q$ is $\\neg Q \\to \\neg P$. An implication and its contrapositive are logically equivalent.',
  },
      '$\\neg Q \\to \\neg P
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The contrapositive of $P \\to Q$ is $\\neg Q \\to \\neg P$. An implication and its contrapositive are logically equivalent.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The contrapositive of $P \\to Q$ is $\\neg Q \\to \\neg P$. An implication and its contrapositive are logically equivalent.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The converse of $P \\to Q$ is:',
    options: [
      '$Q \\to P
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The converse of $P \\to Q$ is $Q \\to P$. Unlike the contrapositive, the converse is NOT logically equivalent to the original implication.',
  },
      '$\\neg Q \\to \\neg P
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The converse of $P \\to Q$ is $Q \\to P$. Unlike the contrapositive, the converse is NOT logically equivalent to the original implication.',
  },
      '$\\neg P \\to \\neg Q
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The converse of $P \\to Q$ is $Q \\to P$. Unlike the contrapositive, the converse is NOT logically equivalent to the original implication.',
  },
      '$\\neg(P \\to Q)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The converse of $P \\to Q$ is $Q \\to P$. Unlike the contrapositive, the converse is NOT logically equivalent to the original implication.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The converse of $P \\to Q$ is $Q \\to P$. Unlike the contrapositive, the converse is NOT logically equivalent to the original implication.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which statement is logically equivalent to $P \\to Q$?',
    options: [
      '$\\neg P \\lor Q
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The implication $P \\to Q$ is logically equivalent to $\\neg P \\lor Q$. This can be verified using truth tables: both are false only when $P$ is true and $Q$ is false.',
  },
      '$\\neg P \\land Q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The implication $P \\to Q$ is logically equivalent to $\\neg P \\lor Q$. This can be verified using truth tables: both are false only when $P$ is true and $Q$ is false.',
  },
      '$P \\land Q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The implication $P \\to Q$ is logically equivalent to $\\neg P \\lor Q$. This can be verified using truth tables: both are false only when $P$ is true and $Q$ is false.',
  },
      '$P \\lor \\neg Q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The implication $P \\to Q$ is logically equivalent to $\\neg P \\lor Q$. This can be verified using truth tables: both are false only when $P$ is true and $Q$ is false.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The implication $P \\to Q$ is logically equivalent to $\\neg P \\lor Q$. This can be verified using truth tables: both are false only when $P$ is true and $Q$ is false.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The biconditional $P \\leftrightarrow Q$ (read "$P$ if and only if $Q$") is true exactly when:',
    options: [
      '$P$ implies $Q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The biconditional $P \\leftrightarrow Q$ is equivalent to $(P \\to Q) \\land (Q \\to P)$. It is true when both $P$ and $Q$ are true, or both are false.',
  },
      '$P$ and $Q$ have different truth values',
      '$P$ and $Q$ have the same truth value',
      'At least one of $P$ or $Q$ is true',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The biconditional $P \\leftrightarrow Q$ is equivalent to $(P \\to Q) \\land (Q \\to P)$. It is true when both $P$ and $Q$ are true, or both are false.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Consider the statement "If $n^2$ is even, then $n$ is even." What is its contrapositive?',
    options: [
      'If $n$ is even, then $n^2$ is even',
      'If $n^2$ is odd, then $n$ is odd',
      'If $n^2$ is odd, then $n$ is even',
      'If $n$ is odd, then $n^2$ is odd',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Let $P$ = "$n^2$ is even" and $Q$ = "$n$ is even". The contrapositive $\\neg Q \\to \\neg P$ is "If $n$ is not even (odd), then $n^2$ is not even (odd)."',
  },
];
