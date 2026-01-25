import type { QuizQuestion } from './types';

export const section38Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The interval $(a, b) = \\{x \\in \\mathbb{R} : a < x < b\\}$ is called:',
    options: [
      'A closed interval',
      'A compact interval',
      'A half-open interval',
      'An open interval',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An open interval $(a,b)$ excludes its endpoints. It contains all real numbers strictly between $a$ and $b$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A subset $U \\subseteq \\mathbb{R}$ is open if and only if:',
    options: [
      '$U$ contains all its limit points',
      'For every $x \\in U$, there exists $\\epsilon > 0$ such that $(x-\\epsilon, x+\\epsilon) \\subseteq U
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A set is open if every point has a neighborhood entirely contained in the set. This is the $\\epsilon$-neighborhood definition of openness.',
  },
      '$U$ is bounded',
      '$U$ is a finite union of intervals',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A set is open if every point has a neighborhood entirely contained in the set. This is the $\\epsilon$-neighborhood definition of openness.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following sets is closed in $\\mathbb{R}$?',
    options: [
      '$(0, 1)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A closed set contains all its limit points. The interval $[0,1]$ includes its endpoints 0 and 1, which are limit points, making it closed.',
  },
      '$[0, 1)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A closed set contains all its limit points. The interval $[0,1]$ includes its endpoints 0 and 1, which are limit points, making it closed.',
  },
      '$(0, 1]
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A closed set contains all its limit points. The interval $[0,1]$ includes its endpoints 0 and 1, which are limit points, making it closed.',
  },
      '$[0, 1]
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A closed set contains all its limit points. The interval $[0,1]$ includes its endpoints 0 and 1, which are limit points, making it closed.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A closed set contains all its limit points. The interval $[0,1]$ includes its endpoints 0 and 1, which are limit points, making it closed.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The set $\\mathbb{Q}$ of rational numbers in $\\mathbb{R}$ is:',
    options: [
      'Open',
      'Neither open nor closed',
      'Closed',
      'Both open and closed',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\mathbb{Q}$ is not open (no interval around a rational contains only rationals) and not closed (its complement $\\mathbb{R} \\setminus \\mathbb{Q}$ is also dense, so $\\mathbb{Q}$ is missing limit points).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $A$ and $B$ are open subsets of $\\mathbb{R}$, then $A \\cap B$ is:',
    options: [
      'Neither open nor closed in general',
      'Always closed',
      'Always open',
      'Open only if $A = B
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The intersection of any finite collection of open sets is open. This is a fundamental property of the topology on $\\mathbb{R}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The intersection of any finite collection of open sets is open. This is a fundamental property of the topology on $\\mathbb{R}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The closure $\\overline{A}$ of a set $A \\subseteq \\mathbb{R}$ equals:',
    options: [
      'The set of isolated points of $A
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The closure $\\overline{A}$ is $A$ together with all its limit points. Equivalently, it is the smallest closed set containing $A$.',
  },
      'The union of $A$ with all its limit points',
      'The interior of $A
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The closure $\\overline{A}$ is $A$ together with all its limit points. Equivalently, it is the smallest closed set containing $A$.',
  },
      'The complement of $A
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The closure $\\overline{A}$ is $A$ together with all its limit points. Equivalently, it is the smallest closed set containing $A$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The closure $\\overline{A}$ is $A$ together with all its limit points. Equivalently, it is the smallest closed set containing $A$.',
  },
];
