import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a tangent line to a curve at a point?',
    options: [
      'A line that crosses the curve at two points',
      'A line that best approximates the curve near that point',
      'A vertical line through the point',
      'A line parallel to the x-axis'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The tangent line at a point is the line that best approximates the curve near that point—it shows the instantaneous direction of the curve.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a secant line?',
    options: [
      'A line tangent to a curve',
      'A line passing through two points on a curve',
      'A vertical line',
      'A line parallel to the curve'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A secant line passes through two points on a curve. As the two points get closer together, the secant approaches the tangent.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How do we find the tangent line from secant lines?',
    options: [
      'By averaging many secant lines',
      'By taking the limit as the two points on the secant merge into one',
      'By drawing a perpendicular line',
      'By extending the secant to infinity'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The tangent is the limit of secant lines as the two points approach each other—what the secant "wants to become" as the gap closes.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does the slope of the tangent line tell us?',
    options: [
      'The area under the curve',
      'The instantaneous rate of change of the function',
      'The maximum value of the function',
      'The y-intercept of the function'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The slope of the tangent line is the derivative—it tells us the instantaneous rate of change of the function at that point.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'The tangent line to $y = x^2$ at the point $(2, 4)$ has what slope?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'The derivative of $x^2$ is $2x$. At $x = 2$, the slope is $2 \\times 2 = 4$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Where on a curve would the tangent line be horizontal?',
    options: [
      'At every point',
      'At maxima and minima (where the derivative is zero)',
      'Only at the y-intercept',
      'At inflection points'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The tangent line is horizontal where the derivative equals zero—at local maxima and minima where the function momentarily stops rising or falling.',
  },
];
