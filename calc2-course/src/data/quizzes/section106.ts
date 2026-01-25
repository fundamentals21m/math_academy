import type { QuizQuestion } from './types';

export const section106Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An open set $S$ in $\\mathbb{R}^n$ is called connected if:',
    options: [
      'It contains only one point',
      'It is bounded',
      'Every pair of points can be joined by a piecewise smooth path in $S$',
      'It is closed'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'An open set $S$ is connected if every pair of points in $S$ can be joined by a piecewise smooth path whose graph lies entirely in $S$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A set is disconnected if:',
    options: [
      'It is the union of two or more disjoint nonempty open sets',
      'It is empty',
      'It is unbounded',
      'It contains only isolated points',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'An open set $S$ is disconnected if it can be written as the union of two or more disjoint nonempty open sets. Connected sets are precisely those that are not disconnected.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The line integral of $f$ is independent of the path in $S$ means:',
    options: [
      'The integral is zero along every path',
      'The integral depends only on the length of the path',
      'The field $f$ is constant',
      'The integral has the same value for all paths joining any two points in $S
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Path independence means the line integral from $\\mathbf{a}$ to $\\mathbf{b}$ has the same value for all piecewise smooth paths in $S$ joining $\\mathbf{a}$ to $\\mathbf{b}$, for every pair of points.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Path independence means the line integral from $\\mathbf{a}$ to $\\mathbf{b}$ has the same value for all piecewise smooth paths in $S$ joining $\\mathbf{a}$ to $\\mathbf{b}$, for every pair of points.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following is an example of an open connected set in the plane?',
    options: [
      'The interior of an ellipse',
      'The set of all points with $x > 0$ or $x < -1$ (two separate regions)',
      'A single point',
      'The empty set',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The interior of an ellipse is open (no boundary points) and connected (any two interior points can be joined by a path inside). Two separate regions like $x > 0$ or $x < -1$ would be disconnected.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The main result relating path independence to gradients is that path independence holds if and only if:',
    options: [
      '$f$ is constant',
      '$f$ is the gradient of some potential function',
      '$f$ is continuous',
      '$f$ is bounded',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For a continuous vector field on an open connected set, the line integral is path-independent if and only if $f$ is the gradient of some potential function. This is a fundamental characterization.',
  },
];
