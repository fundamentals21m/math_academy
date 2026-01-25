import type { QuizQuestion } from './types';

export const section78Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An open ball $B(\\mathbf{a}, r)$ in $\\mathbb{R}^n$ is the set of all points $\\mathbf{x}$ such that:',
    options: [
      '$\\|\\mathbf{x} - \\mathbf{a}\\| = r
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An open ball consists of all points whose distance from the center is strictly less than the radius.',
  },
      '$\\|\\mathbf{x} - \\mathbf{a}\\| \\leq r
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'An open ball consists of all points whose distance from the center is strictly less than the radius.',
  },
      '$\\|\\mathbf{x} - \\mathbf{a}\\| > r
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'An open ball consists of all points whose distance from the center is strictly less than the radius.',
  },
      '$\\|\\mathbf{x} - \\mathbf{a}\\| < r
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'An open ball consists of all points whose distance from the center is strictly less than the radius.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'An open ball consists of all points whose distance from the center is strictly less than the radius.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A set $S \\subseteq \\mathbb{R}^n$ is open if and only if:',
    options: [
      '$S$ contains all its boundary points',
      '$S$ is connected',
      '$S$ is bounded',
      'Every point of $S$ is an interior point',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A set is open if every point has a neighborhood entirely contained in the set (every point is interior).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The intersection of two open sets is:',
    options: [
      'Always closed',
      'Always open',
      'Neither open nor closed',
      'Open only if the sets are disjoint',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The intersection of any finite collection of open sets is open (a fundamental topological property).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In $\\mathbb{R}^2$, the set $\\{(x,y) : x^2 + y^2 < 1\\}$ is:',
    options: [
      'Open but not closed',
      'Closed but not open',
      'Both open and closed',
      'Neither open nor closed',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'This is the open unit disk, which is open (strict inequality) but not closed (doesn\'t contain boundary circle).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The union of infinitely many open sets is:',
    options: [
      'Not necessarily open',
      'Always closed',
      'Always open',
      'Never open',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Any union (finite or infinite) of open sets is open. This is another fundamental property of open sets.',
  },
];
