import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the "inverse problem" for curves?',
    options: [
      'Finding the equation from a given curve',
      'Finding a curve that satisfies given properties of its ordinates',
      'Finding the inverse function',
      'Rotating a curve 180 degrees'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The inverse problem is finding the equation of a curve when given conditions on its ordinates (like their sum or product), rather than starting with an equation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What mathematical tool does Euler use to relate sum/product of ordinates to coefficients?',
    options: [
      'The chain rule',
      'Vieta\'s formulas',
      'The quadratic formula',
      'Integration by parts'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Vieta\'s formulas relate the sum and product of polynomial roots to the coefficients. Euler uses these to constrain curve equations from ordinate properties.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If a conic has $y_1 + y_2 = 0$ for all $x$, what special property does it have?',
    options: [
      'It passes through the origin',
      'It is symmetric about the x-axis',
      'It has no real points',
      'It is a circle'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $y_1 + y_2 = 0$, the two ordinates are negatives of each other, meaning the curve is symmetric about the $x$-axis.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How is the area under a curve $y = f(x)$ related to the curve itself?',
    options: [
      'The curve is the integral of the area function',
      'The curve is the derivative of the area function',
      'They are unrelated',
      'The curve equals the area'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the fundamental theorem of calculus, if $A(x) = \\int_0^x f(t)dt$, then $f(x) = A\'(x)$. The curve is the derivative of its area function.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the tractrix?',
    options: [
      'A curve where tangent segments to the axis have constant length',
      'A curve traced by a rolling wheel',
      'The path of a planet',
      'A type of ellipse'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The tractrix is the curve where the tangent from any point to the $x$-axis has constant length $a$. It\'s the path traced by dragging an object on a string.',
  },
];
