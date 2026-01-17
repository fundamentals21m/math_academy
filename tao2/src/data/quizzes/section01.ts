import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a metric space $(X, d)$, what is the definition of the ball $B(x_0, r)$?',
    options: [
      '$\\{x \\in X : d(x, x_0) \\leq r\\}$',
      '$\\{x \\in X : d(x, x_0) < r\\}$',
      '$\\{x \\in X : d(x, x_0) = r\\}$',
      '$\\{x \\in X : d(x, x_0) > r\\}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A ball $B(x_0, r)$ is the set of all points strictly less than $r$ distance from $x_0$. This is an open ball.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A point $x_0$ is an interior point of $E$ if:',
    options: [
      '$x_0 \\in E$',
      'There exists $r > 0$ such that $B(x_0, r) \\subseteq E$',
      '$x_0$ is in the boundary of $E$',
      'Every sequence in $E$ converges to $x_0$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An interior point has a ball around it entirely contained in the set.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which statement about open and closed sets is TRUE?',
    options: [
      'A set cannot be both open and closed',
      'A set must be either open or closed',
      'The empty set is both open and closed',
      'Every open set contains its boundary'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The empty set $\\emptyset$ and the whole space $X$ are always both open and closed. A set can also be neither open nor closed (like $[0, 1)$ in $\\mathbf{R}$).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the closure $\\overline{E}$ of a set $E$?',
    options: [
      'The set of interior points of $E$',
      'The set of boundary points of $E$',
      'The set of all adherent points of $E$',
      'The complement of $E$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The closure of $E$ is the set of all adherent points, which equals $\\text{int}(E) \\cup \\partial E$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $E$ is a closed set, which of the following is true?',
    options: [
      '$E$ contains all its interior points only',
      '$E$ contains all its adherent points',
      '$E$ has no boundary points',
      '$E$ is always bounded'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A set is closed if and only if it contains all its adherent points, i.e., $E = \\overline{E}$.',
  },
];
