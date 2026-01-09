import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'How many elements are in the quaternion group $Q_8$?',
    correctAnswer: 8,
    numericRange: { min: 1, max: 50, precision: 0 },
    difficulty: 'easy',
    explanation: '$Q_8 = \\{1, -1, i, -i, j, -j, k, -k\\}$ has exactly 8 elements.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In $Q_8$, what is $ij$?',
    options: ['$1$', '$-1$', '$k$', '$-k$'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The quaternion multiplication rule gives $ij = k$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In $Q_8$, what is $ji$?',
    options: ['$1$', '$-1$', '$k$', '$-k$'],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Quaternion multiplication is not commutative: $ji = -ij = -k$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Is $Q_8$ an abelian group?',
    options: [
      'Yes, because all groups of order 8 are abelian',
      'Yes, because $i, j, k$ all commute',
      'No, because $ij \\neq ji$',
      'No, because it has no identity element'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$Q_8$ is non-abelian since $ij = k$ but $ji = -k$, so $ij \\neq ji$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'What is the order of the element $i$ in $Q_8$?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: '$i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$. So the order of $i$ is 4.',
  },
];
