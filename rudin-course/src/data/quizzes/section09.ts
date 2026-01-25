import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 'sec09-q1',
    type: 'multiple-choice',
    question: 'A metric space is a set $X$ with a function $d: X \\times X \\to \\mathbb{R}$ satisfying:',
    options: [
      '$d(x,y) \\geq 0$, $d(x,y) = 0 \\Leftrightarrow x = y$, $d(x,y) = d(y,x)$, and $d(x,z) \\leq d(x,y) + d(y,z)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A metric satisfies: (i) positivity: $d(x,y) \\geq 0$, (ii) identity: $d(x,y) = 0 \\iff x = y$, (iii) symmetry: $d(x,y) = d(y,x)$, and (iv) triangle inequality: $d(x,z) \\leq d(x,y) + d(y,z)$.',
  },
      '$d(x,y) > 0$ for all $x, y
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A metric satisfies: (i) positivity: $d(x,y) \\geq 0$, (ii) identity: $d(x,y) = 0 \\iff x = y$, (iii) symmetry: $d(x,y) = d(y,x)$, and (iv) triangle inequality: $d(x,z) \\leq d(x,y) + d(y,z)$.',
  },
      '$d(x,y) = |x - y|$ always',
      '$d$ must be continuous',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A metric satisfies: (i) positivity: $d(x,y) \\geq 0$, (ii) identity: $d(x,y) = 0 \\iff x = y$, (iii) symmetry: $d(x,y) = d(y,x)$, and (iv) triangle inequality: $d(x,z) \\leq d(x,y) + d(y,z)$.',
  },
  {
    id: 'sec09-q2',
    type: 'multiple-choice',
    question: 'A set $E$ in a metric space is open if:',
    options: [
      'Its complement is finite',
      '$E$ contains all its limit points',
      'Every point of $E$ is an interior point',
      '$E$ is bounded'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$E$ is open if every $x \\in E$ is an interior point, meaning there exists $r > 0$ such that the ball $B_r(x) = \\{y : d(x,y) < r\\} \\subset E$.',
  },
  {
    id: 'sec09-q3',
    type: 'multiple-choice',
    question: 'A set $E$ is closed if and only if:',
    options: [
      '$E$ is bounded',
      '$E$ is finite',
      '$E$ is the complement of a bounded set',
      '$E$ contains all its limit points',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$E$ is closed if and only if $E$ contains every limit point of $E$. Equivalently, $E$ is closed if its complement is open.',
  },
  {
    id: 'sec09-q4',
    type: 'multiple-choice',
    question: 'In $\\mathbb{R}$, which of the following is both open and closed?',
    options: [
      '$\\mathbb{R}$ itself',
      'The interval $[0, 1]$',
      'The interval $(0, 1)$',
      'The singleton $\\{0\\}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In any metric space, $\\emptyset$ and the whole space are both open and closed (clopen). In a connected space like $\\mathbb{R}$, these are the only clopen sets.',
  },
  {
    id: 'sec09-q5',
    type: 'multiple-choice',
    question: 'The closure $\\bar{E}$ of a set $E$ is:',
    options: [
      'The interior of $E
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The closure $\\bar{E} = E \\cup E\'$ where $E\'$ is the set of limit points of $E$. Equivalently, $\\bar{E}$ is the smallest closed set containing $E$.',
  },
      'The complement of $E
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The closure $\\bar{E} = E \\cup E\'$ where $E\'$ is the set of limit points of $E$. Equivalently, $\\bar{E}$ is the smallest closed set containing $E$.',
  },
      'The boundary of $E
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The closure $\\bar{E} = E \\cup E\'$ where $E\'$ is the set of limit points of $E$. Equivalently, $\\bar{E}$ is the smallest closed set containing $E$.',
  },
      '$E$ together with all its limit points',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The closure $\\bar{E} = E \\cup E\'$ where $E\'$ is the set of limit points of $E$. Equivalently, $\\bar{E}$ is the smallest closed set containing $E$.',
  },
];
