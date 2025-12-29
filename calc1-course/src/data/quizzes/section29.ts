import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The derivative $f\'(a)$ represents:',
    options: [
      'The area under the curve at $a$',
      'The slope of the tangent line at $(a, f(a))$',
      'The $y$-intercept of the graph',
      'The maximum value of $f$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Geometrically, $f\'(a)$ is the slope of the tangent line at $x = a$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The equation of the tangent line to $y = f(x)$ at $x = a$ is:',
    options: [
      '$y = f(a)$',
      '$y - f(a) = f\'(a)(x - a)$',
      '$y = f\'(a)$',
      '$y = x - a$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Point-slope form: $y - f(a) = f\'(a)(x - a)$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'For $f(x) = x^2$, what is the slope of the tangent line at $x = 3$?',
    correctAnswer: 6,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$f\'(x) = 2x$, so slope at $x = 3$ is $f\'(3) = 6$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f\'(a) > 0$, then near $x = a$:',
    options: [
      '$f$ is decreasing',
      '$f$ is increasing',
      '$f$ is constant',
      '$f$ has a maximum'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Positive derivative means the function is increasing.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f\'(a) = 0$, then the tangent line at $a$ is:',
    options: [
      'Vertical',
      'Horizontal',
      'Does not exist',
      'At 45°'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Zero slope means a horizontal tangent line.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'The tangent line to $y = x^2$ at $x = 2$ passes through $(2, 4)$ with slope $4$. What is the $y$-intercept?',
    correctAnswer: -4,
    numericRange: { min: -100, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$y - 4 = 4(x - 2)$ gives $y = 4x - 4$. The $y$-intercept is $-4$.',
  },
];
