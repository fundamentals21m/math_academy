import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 'sec12-q1',
    type: 'multiple-choice',
    question: 'A metric space $X$ is connected if:',
    options: [
      '$X$ cannot be written as the union of two nonempty disjoint open sets',
      '$X$ is compact',
      '$X$ is bounded',
      'Every point of $X$ is a limit point'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$X$ is connected if there do not exist nonempty open sets $A$ and $B$ with $A \\cap B = \\emptyset$ and $A \\cup B = X$. Equivalently, the only clopen sets are $\\emptyset$ and $X$.',
  },
  {
    id: 'sec12-q2',
    type: 'multiple-choice',
    question: 'Which of the following subsets of $\\mathbb{R}$ is connected?',
    options: [
      '$\\{0\\} \\cup \\{1\\}$',
      '$[0, 1]$',
      '$\\mathbb{Q}$ (the rationals)',
      '$\\{1/n : n \\in \\mathbb{Z}^+\\}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In $\\mathbb{R}$, the connected subsets are exactly the intervals. $[0,1]$ is an interval and hence connected. The other sets are not intervals.',
  },
  {
    id: 'sec12-q3',
    type: 'multiple-choice',
    question: 'If $E \\subset \\mathbb{R}$ is connected and $x, y \\in E$ with $x < y$, then:',
    options: [
      'Only $x$ and $y$ are in $E$',
      '$E$ contains only rationals between $x$ and $y$',
      'Every $z$ with $x < z < y$ is in $E$',
      '$E$ must be finite'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Connected subsets of $\\mathbb{R}$ are intervals. If $x, y \\in E$, then every point between them must also be in $E$, otherwise $E$ could be split into two separated pieces.',
  },
  {
    id: 'sec12-q4',
    type: 'multiple-choice',
    question: 'The image of a connected set under a continuous function is:',
    options: [
      'Compact',
      'Closed',
      'Open',
      'Connected'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Continuous functions preserve connectedness: if $f: X \\to Y$ is continuous and $X$ is connected, then $f(X)$ is connected. This is because the preimages of a separation would give a separation of $X$.',
  },
  {
    id: 'sec12-q5',
    type: 'multiple-choice',
    question: 'Which statement characterizes connected subsets of $\\mathbb{R}$?',
    options: [
      'A subset $E$ is connected iff $E$ is an interval',
      'A subset $E$ is connected iff $E$ is compact',
      'A subset $E$ is connected iff $E$ is closed',
      'A subset $E$ is connected iff $E$ is perfect'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In $\\mathbb{R}$, a set is connected if and only if it is an interval (bounded, unbounded, open, closed, or half-open). This is a special characterization that holds in $\\mathbb{R}$ but not in higher dimensions.',
  },
];
