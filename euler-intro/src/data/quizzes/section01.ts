import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If we translate the origin to a new point $(f, g)$, what is the transformation for the $x$-coordinate?',
    options: [
      '$x = t - f$',
      '$x = t + f$',
      '$x = tf$',
      '$x = t/f$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When translating to a new origin at $(f, g)$, the transformation is $x = t + f$ and $y = u + g$, where $(t, u)$ are the new coordinates.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What property do coordinate transformations always preserve about an equation?',
    options: [
      'The coefficients of the equation',
      'The number of terms',
      'The degree (order) of the equation',
      'The constant term'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Coordinate transformations preserve the degree of an equation. A second-degree equation remains second-degree after any translation or rotation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For rotation of axes by angle $\\phi$, what condition must $m = \\sin\\phi$ and $n = \\cos\\phi$ satisfy?',
    options: [
      '$m + n = 1$',
      '$m^2 + n^2 = 1$',
      '$mn = 1$',
      '$m - n = 0$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The condition $m^2 + n^2 = 1$ (Pythagorean identity) ensures that distances are preserved under rotation. This is the condition for an orthogonal transformation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the general equation of a straight line according to Euler?',
    options: [
      '$\\alpha t^2 + \\beta u^2 = c$',
      '$\\alpha t + \\beta u + b = 0$',
      '$tu = c$',
      '$t^2 + u^2 = r^2$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The general equation of a straight line is $\\alpha t + \\beta u + b = 0$, a first-degree equation. Any first-degree equation represents a straight line.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What are oblique coordinates?',
    options: [
      'Coordinates where both axes are curved',
      'Coordinates where the ordinate makes an arbitrary angle with the axis',
      'Coordinates in three dimensions',
      'Coordinates that only allow positive values'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In oblique coordinates, the ordinate makes an arbitrary angle $\\phi$ with the axis, rather than being perpendicular (orthogonal) to it.',
  },
];
