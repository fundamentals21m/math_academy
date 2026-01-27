import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The slope of a line measures:',
    options: [
      'Its length',
      'Its steepness (rise over run)',
      'Its y-intercept',
      'The angle with the y-axis'
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
      '$ax + by = c$',
      '$y - y_1 = m(x - x_1)$',
      '$y = mx + b$',
      '$x = k$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$y = mx + b$ where m is slope and b is the y-intercept.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Two lines are parallel if and only if:',
    options: [
      'They have the same y-intercept',
      'Their slopes multiply to -1',
      'They pass through the origin',
      'They have the same slope'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Parallel lines never meet, which occurs exactly when their slopes are equal.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Two lines are perpendicular if and only if the product of their slopes is:',
    options: [
      '-1',
      '0',
      '1',
      'Undefined'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Perpendicular lines have slopes m₁ and m₂ with m₁ · m₂ = -1.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The equation of the line through $(2, 3)$ with slope $4$ is:',
    options: [
      '$y = 4x + 3$',
      '$y - 3 = 4(x - 2)$, i.e., $y = 4x - 5$',
      '$y = 2x + 3$',
      '$y = 3x + 4$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Point-slope form: $y - 3 = 4(x - 2)$, which simplifies to $y = 4x - 5$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A vertical line has:',
    options: [
      'Slope 0',
      'Slope 1',
      'Undefined slope',
      'Negative slope'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'A vertical line has the form x = k; the "run" is 0, making slope undefined.',
  },
];
