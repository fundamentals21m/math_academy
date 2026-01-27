import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Related rates problems involve:',
    options: [
      'Finding antiderivatives',
      'Solving algebraic equations',
      'Computing areas',
      'Finding how rates of change of related quantities are connected'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Related rates use the chain rule to connect rates of change of related quantities.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In implicit differentiation, we differentiate both sides with respect to $x$, treating $y$ as:',
    options: [
      'A function of $x$',
      'A constant',
      'Zero',
      'Independent of $x$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'We treat $y$ as $y(x)$ and apply the chain rule when differentiating terms with $y$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $x^2 + y^2 = 25$, implicit differentiation gives $\\frac{dy}{dx} = ?$',
    options: [
      '$x/y$',
      '$-x/y$',
      '$-y/x$',
      '$y/x$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$2x + 2y\\frac{dy}{dx} = 0$ gives $\\frac{dy}{dx} = -x/y$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'A balloon\'s volume $V = \\frac{4}{3}\\pi r^3$ is increasing at 50 cm³/sec. When $r = 5$, what is $\\frac{dV}{dr}$?',
    correctAnswer: 314.16,
    numericRange: { min: 300, max: 330, precision: 2 },
    difficulty: 'hard',
    explanation: '$\\frac{dV}{dr} = 4\\pi r^2 = 4\\pi(25) = 100\\pi \\approx 314.16$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $A = \\pi r^2$ and $\\frac{dr}{dt} = 3$, then $\\frac{dA}{dt} = ?$',
    options: [
      '$2\\pi r$',
      '$\\pi r^2$',
      '$6\\pi r$',
      '$3\\pi r^2$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\frac{dA}{dt} = 2\\pi r \\cdot \\frac{dr}{dt} = 2\\pi r \\cdot 3 = 6\\pi r$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In a related rates problem, the key step is to:',
    options: [
      'Guess the answer',
      'Set all rates equal to zero',
      'Integrate both sides',
      'Find an equation relating the quantities, then differentiate with respect to time'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'First establish a relationship, then differentiate implicitly with respect to time.',
  },
];
