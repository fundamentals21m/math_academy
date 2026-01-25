import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 's06-q1',
    type: 'multiple-choice',
    question: 'The number of non-negative integer solutions to $x_1 + x_2 + \\cdots + x_r = n$ is:',
    options: [
      '$\\binom{n}{r}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The stars and bars formula gives $\\binom{n + r - 1}{r - 1} = \\binom{n + r - 1}{n}$ non-negative integer solutions.'
  },
      '$\\binom{n - 1}{r - 1}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The stars and bars formula gives $\\binom{n + r - 1}{r - 1} = \\binom{n + r - 1}{n}$ non-negative integer solutions.'
  },
      '$n^r
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The stars and bars formula gives $\\binom{n + r - 1}{r - 1} = \\binom{n + r - 1}{n}$ non-negative integer solutions.'
  },
      '$\\binom{n + r - 1}{r - 1}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The stars and bars formula gives $\\binom{n + r - 1}{r - 1} = \\binom{n + r - 1}{n}$ non-negative integer solutions.'
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The stars and bars formula gives $\\binom{n + r - 1}{r - 1} = \\binom{n + r - 1}{n}$ non-negative integer solutions.'
  },
  {
    id: 's06-q2',
    type: 'numeric',
    question: 'How many non-negative integer solutions are there to $x_1 + x_2 + x_3 = 5$?',
    correctAnswer: 21,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\binom{5 + 3 - 1}{3 - 1} = \\binom{7}{2} = 21$'
  },
  {
    id: 's06-q3',
    type: 'multiple-choice',
    question: 'The "stars and bars" method represents solutions using:',
    options: [
      'Stars for units (the total) and bars for dividers between groups',
      'Stars for dividers and bars for units',
      'Stars for variables and bars for constants',
      'Stars for positive numbers and bars for negative numbers',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In stars and bars, we use $n$ stars (representing the total) and $r-1$ bars (dividing the stars into $r$ groups). Each arrangement corresponds to one solution.'
  },
  {
    id: 's06-q4',
    type: 'numeric',
    question: 'How many ways can 10 identical cookies be distributed among 4 children?',
    correctAnswer: 286,
    numericRange: { min: 0, max: 1000, precision: 0 },
    difficulty: 'medium',
    explanation: 'We need non-negative solutions to $x_1 + x_2 + x_3 + x_4 = 10$. Answer: $\\binom{10 + 4 - 1}{4 - 1} = \\binom{13}{3} = 286$.'
  },
  {
    id: 's06-q5',
    type: 'multiple-choice',
    question: 'The number of *positive* integer solutions to $x_1 + x_2 + \\cdots + x_r = n$ is:',
    options: [
      '$\\binom{n + r - 1}{r - 1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For positive solutions (each $x_i \\geq 1$), we substitute $y_i = x_i - 1$ and get $\\binom{n - 1}{r - 1}$.'
  },
      '$\\binom{n - 1}{r - 1}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For positive solutions (each $x_i \\geq 1$), we substitute $y_i = x_i - 1$ and get $\\binom{n - 1}{r - 1}$.'
  },
      '$\\binom{n}{r}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For positive solutions (each $x_i \\geq 1$), we substitute $y_i = x_i - 1$ and get $\\binom{n - 1}{r - 1}$.'
  },
      '$\\binom{n + r}{r}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For positive solutions (each $x_i \\geq 1$), we substitute $y_i = x_i - 1$ and get $\\binom{n - 1}{r - 1}$.'
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For positive solutions (each $x_i \\geq 1$), we substitute $y_i = x_i - 1$ and get $\\binom{n - 1}{r - 1}$.'
  },
  {
    id: 's06-q6',
    type: 'numeric',
    question: 'Distribute 10 cookies among 4 children so each child gets at least one. How many ways?',
    correctAnswer: 84,
    numericRange: { min: 0, max: 1000, precision: 0 },
    difficulty: 'medium',
    explanation: 'We need positive solutions to $x_1 + x_2 + x_3 + x_4 = 10$. Answer: $\\binom{10 - 1}{4 - 1} = \\binom{9}{3} = 84$.'
  }
];
