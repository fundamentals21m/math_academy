import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is implicit differentiation used for?',
    options: [
      'Differentiating functions written in the form $y = f(x)$',
      'Differentiating equations where $y$ is not explicitly solved for',
      'Finding indefinite integrals',
      'Solving algebraic equations'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Implicit differentiation handles equations where $y$ is not isolated (e.g., $x^2 + y^2 = 1$).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When implicitly differentiating $y^2$ with respect to $x$, the result is:',
    options: [
      '$2y$',
      '$2y \\frac{dy}{dx}$',
      '$y^2$',
      '$2x$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dx}(y^2) = 2y \\cdot \\frac{dy}{dx}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For the circle $x^2 + y^2 = 25$, what is $\\frac{dy}{dx}$?',
    options: [
      '$\\frac{x}{y}$',
      '$-\\frac{x}{y}$',
      '$\\frac{y}{x}$',
      '$-\\frac{y}{x}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Differentiating: $2x + 2y\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{x}{y}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is implicit differentiation necessary for a circle equation?',
    options: [
      'Circles are too complicated for regular calculus',
      'A circle is not a function (fails vertical line test) but we can still find slopes',
      'The power rule doesn\'t work for circles',
      'Circles have no tangent lines'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A full circle isn\'t a function, but implicit differentiation lets us find slopes at any point.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When differentiating $xy = 1$ implicitly, we use:',
    options: [
      'Only the power rule',
      'The product rule on $xy$',
      'The quotient rule',
      'No special rules needed'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$xy$ is a product of $x$ and $y$, so we need the product rule: $\\frac{d}{dx}(xy) = x\\frac{dy}{dx} + y$.',
  },
];
