import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The derivative was historically motivated by:',
    options: [
      'Area problems',
      'Velocity and tangent line problems',
      'Counting problems',
      'Probability'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Derivatives arose from studying instantaneous velocity and slopes of tangent lines.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The instantaneous velocity is the limit of:',
    options: [
      'Average velocity as the time interval approaches zero',
      'Distance over time for large time intervals',
      'Position at time zero',
      'Acceleration',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Instantaneous velocity = $\\lim_{\\Delta t \\to 0} \\frac{\\Delta s}{\\Delta t}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Newton and Leibniz independently developed:',
    options: [
      'Euclidean geometry',
      'Probability theory',
      'Number theory',
      'Calculus'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Newton and Leibniz are credited as co-inventors of calculus.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The slope of the secant line through $(a, f(a))$ and $(a+h, f(a+h))$ is:',
    options: [
      '$f(a+h) - f(a)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Slope = rise/run = $\\frac{f(a+h) - f(a)}{h}$.',
  },
      '$f(a+h) + f(a)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Slope = rise/run = $\\frac{f(a+h) - f(a)}{h}$.',
  },
      '$h
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Slope = rise/run = $\\frac{f(a+h) - f(a)}{h}$.',
  },
      '$\\frac{f(a+h) - f(a)}{h}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Slope = rise/run = $\\frac{f(a+h) - f(a)}{h}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Slope = rise/run = $\\frac{f(a+h) - f(a)}{h}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'As $h \\to 0$, the secant line becomes:',
    options: [
      'A vertical line',
      'A horizontal line',
      'The tangent line',
      'Undefined',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The limiting position of secant lines is the tangent line.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The difference quotient $\\frac{f(x+h) - f(x)}{h}$ represents:',
    options: [
      'The average rate of change of $f$ over $[x, x+h]
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The difference quotient gives the average rate of change.',
  },
      'The integral of $f
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The difference quotient gives the average rate of change.',
  },
      'The maximum of $f
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The difference quotient gives the average rate of change.',
  },
      'The area under $f
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The difference quotient gives the average rate of change.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The difference quotient gives the average rate of change.',
  },
];
