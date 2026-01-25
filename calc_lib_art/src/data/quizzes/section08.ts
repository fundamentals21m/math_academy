import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the formal definition of the derivative $f\'(a)$?',
    options: [
      '$f(a+h) - f(a)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The derivative is defined as the limit of the difference quotient as $h$ approaches zero: $\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$.',
  },
      '$\\frac{f(b) - f(a)}{b - a}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The derivative is defined as the limit of the difference quotient as $h$ approaches zero: $\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$.',
  },
      '$f(a) \\times h
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The derivative is defined as the limit of the difference quotient as $h$ approaches zero: $\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$.',
  },
      '$\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The derivative is defined as the limit of the difference quotient as $h$ approaches zero: $\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The derivative is defined as the limit of the difference quotient as $h$ approaches zero: $\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does it mean for the derivative to measure "sensitivity"?',
    options: [
      'The function is easily damaged',
      'The function responds to touch',
      'The function is always positive',
      'How much the output changes per unit change in input',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Sensitivity means how responsive the output is to changes in input. If $f\'(a) = 3$, a small change $\\Delta x$ produces about $3 \\Delta x$ change in output.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'At which type of point does a function fail to have a derivative?',
    options: [
      'Corners, cusps, or discontinuities',
      'Smooth points',
      'Points where the function is positive',
      'Points where the function crosses the x-axis',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Derivatives don\'t exist at corners (where left and right slopes differ), cusps (sharp points), or discontinuities (jumps in the function).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does the second derivative $f\'\'(x)$ tell us about the graph?',
    options: [
      'The y-intercept',
      'The maximum value',
      'The concavity (whether the graph curves up or down)',
      'The x-intercepts',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The second derivative describes concavity: $f\'\' > 0$ means concave up (smile), $f\'\' < 0$ means concave down (frown).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If a function is differentiable at a point, it must be:',
    options: [
      'Constant',
      'Continuous at that point',
      'Positive',
      'Linear',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Differentiability implies continuity—if a function has a derivative at a point, it must be continuous there. (The converse is false.)',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The derivative $f\'(x)$ gives the best linear approximation to $f$ near $x = a$ as:',
    options: [
      '$f(x) \\approx f\\'(a)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Near $x = a$, the tangent line $y = f(a) + f\'(a)(x-a)$ is the best linear approximation to the function.',
  },
      '$f(x) \\approx f(a) \\cdot x
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Near $x = a$, the tangent line $y = f(a) + f\'(a)(x-a)$ is the best linear approximation to the function.',
  },
      '$f(x) \\approx (x-a)^2
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Near $x = a$, the tangent line $y = f(a) + f\'(a)(x-a)$ is the best linear approximation to the function.',
  },
      '$f(x) \\approx f(a) + f\\'(a)(x-a)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Near $x = a$, the tangent line $y = f(a) + f\'(a)(x-a)$ is the best linear approximation to the function.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Near $x = a$, the tangent line $y = f(a) + f\'(a)(x-a)$ is the best linear approximation to the function.',
  },
];
