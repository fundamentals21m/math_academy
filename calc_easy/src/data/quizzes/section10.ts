import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the derivative represent geometrically?',
    options: [
      'The slope of the tangent line at a point',
      'The area under the curve',
      'The length of the curve',
      'The distance from the origin',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The derivative at a point gives the slope of the line tangent to the curve at that point.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A tangent line to a curve at a point:',
    options: [
      'Crosses the curve at that point',
      'Touches the curve at exactly one point and has the same slope as the curve there',
      'Is always horizontal',
      'Is always vertical',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The tangent line touches the curve at one point and shares the curve\'s slope at that point.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The equation of the tangent line at $(a, f(a))$ is:',
    options: [
      '$y = f(a) + f\'(a)$',
      '$y = a + f(a)(x - a)$',
      '$y = f\'(a) \\cdot x$',
      '$y = f(a) + f\'(a)(x - a)$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Using point-slope form with slope $f\'(a)$ at point $(a, f(a))$: $y = f(a) + f\'(a)(x - a)$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'For $y = x^2$ at $x = 3$, what is the slope of the tangent line?',
    correctAnswer: 6,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\frac{dy}{dx} = 2x$. At $x = 3$: slope $= 2(3) = 6$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A normal line to a curve is:',
    options: [
      'The same as the tangent line',
      'Parallel to the $x$-axis',
      'Perpendicular to the tangent line',
      'Always passes through the origin',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The normal line is perpendicular to the tangent line at the point of tangency.',
  },
];
