import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the meaning of the symbol $dx$?',
    options: [
      'A very large change in $x$',
      'The derivative of $x$',
      'The integral of $x$',
      'An infinitesimally small change in $x$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$dx$ represents an infinitesimally small increment of $x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does $\\frac{dy}{dx}$ represent?',
    options: [
      'The ratio of infinitesimal changes: how much $y$ changes per unit change in $x$',
      'The sum of $dy$ and $dx$',
      'The product of $dy$ and $dx$',
      'The difference between $y$ and $x$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{dy}{dx}$ is the derivative, representing the rate of change of $y$ with respect to $x$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The "d" in $dx$ stands for:',
    options: [
      'Derivative',
      'Difference (infinitely small)',
      'Division',
      'Distance'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The "d" comes from "difference" but represents an infinitesimally small change.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $y = x^2$, what is the meaning of $dy$?',
    options: [
      'The value of $y$',
      'The square of $dx$',
      'The small change in $y$ when $x$ changes by $dx$',
      'Zero'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$dy$ represents the infinitesimally small change in $y$ corresponding to the infinitesimal change $dx$ in $x$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Thompson says calculus is "really the easiest and most natural of conceptions." What makes it seem difficult?',
    options: [
      'The underlying ideas are truly complex',
      'There are too many formulas to memorize',
      'It requires advanced algebra',
      'The notation and terminology can be intimidating'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Thompson argues that calculus concepts are simple but the notation can appear intimidating to newcomers.',
  },
];
