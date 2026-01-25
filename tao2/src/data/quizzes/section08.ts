import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A metric space $X$ is connected if:',
    options: [
      'Every two points can be joined by a path',
      'It cannot be written as the union of two non-empty disjoint open sets',
      'It is compact',
      'It contains no isolated points'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A space is connected if it cannot be partitioned into two non-empty disjoint open sets.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Intermediate Value Theorem states that if $f: [a, b] \\to \\mathbf{R}$ is continuous and $y$ is between $f(a)$ and $f(b)$, then:',
    options: [
      '$f$ is constant',
      '$f$ is monotonic',
      'There exists $c \\in [a, b]$ with $f(c) = y$',
      '$f$ has a maximum at some point'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The IVT says continuous functions on intervals take all intermediate values.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f: X \\to Y$ is continuous and $X$ is connected, then:',
    options: [
      '$f(X)$ is compact',
      '$Y$ must be connected',
      '$f(X)$ is open',
      '$f(X)$ is connected'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Continuous images of connected sets are connected.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A space $X$ is path-connected if:',
    options: [
      'For any two points $x, y \\in X$, there exists a continuous path from $x$ to $y$',
      'It is connected',
      'It contains no holes',
      'Every continuous function on $X$ is bounded'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Path-connected means any two points can be joined by a continuous curve.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of the following is TRUE about connectedness?',
    options: [
      'Connected implies path-connected',
      'Path-connected implies connected',
      'Connected and path-connected are equivalent',
      'Neither implies the other'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Path-connected implies connected, but not vice versa. The topologist\'s sine curve is connected but not path-connected.',
  },
];
