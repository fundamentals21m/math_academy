import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The slope of a line measures:',
    options: [
      'Its length',
      'Its steepness (rise over run)',
      'The angle with the y-axis',
      'Its y-intercept',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Slope m = (change in y)/(change in x) = rise/run.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The slope-intercept form of a line is:',
    options: [
      '$y - y_1 = m(x - x_1)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$y = mx + b$ where m is slope and b is the y-intercept.',
  },
      '$ax + by = c
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$y = mx + b$ where m is slope and b is the y-intercept.',
  },
      '$y = mx + b
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$y = mx + b$ where m is slope and b is the y-intercept.',
  },
      '$x = k
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$y = mx + b$ where m is slope and b is the y-intercept.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$y = mx + b$ where m is slope and b is the y-intercept.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Two lines are parallel if and only if:',
    options: [
      'They have the same y-intercept',
      'They have the same slope',
      'They pass through the origin',
      'Their slopes multiply to -1'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Parallel lines never meet, which occurs exactly when their slopes are equal.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Two lines are perpendicular if and only if the product of their slopes is:',
    options: [
      '1',
      '0',
      '-1',
      'Undefined'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Perpendicular lines have slopes m₁ and m₂ with m₁ · m₂ = -1.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The equation of the line through $(2, 3)$ with slope $4$ is:',
    options: [
      '$y - 3 = 4(x - 2)$, i.e., $y = 4x - 5
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Point-slope form: $y - 3 = 4(x - 2)$, which simplifies to $y = 4x - 5$.',
  },
      '$y = 4x + 3
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Point-slope form: $y - 3 = 4(x - 2)$, which simplifies to $y = 4x - 5$.',
  },
      '$y = 3x + 4
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Point-slope form: $y - 3 = 4(x - 2)$, which simplifies to $y = 4x - 5$.',
  },
      '$y = 2x + 3
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Point-slope form: $y - 3 = 4(x - 2)$, which simplifies to $y = 4x - 5$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Point-slope form: $y - 3 = 4(x - 2)$, which simplifies to $y = 4x - 5$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A vertical line has:',
    options: [
      'Slope 1',
      'Slope 0',
      'Negative slope',
      'Undefined slope',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'A vertical line has the form x = k; the "run" is 0, making slope undefined.',
  },
];
