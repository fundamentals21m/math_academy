import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the meaning of the symbol $dx$?',
    options: [
      'An infinitesimally small change in $x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$dx$ represents an infinitesimally small increment of $x$.',
  },
      'A very large change in $x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$dx$ represents an infinitesimally small increment of $x$.',
  },
      'The derivative of $x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$dx$ represents an infinitesimally small increment of $x$.',
  },
      'The integral of $x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$dx$ represents an infinitesimally small increment of $x$.',
  },
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
      'The sum of $dy$ and $dx
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\frac{dy}{dx}$ is the derivative, representing the rate of change of $y$ with respect to $x$.',
  },
      'The ratio of infinitesimal changes: how much $y$ changes per unit change in $x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{dy}{dx}$ is the derivative, representing the rate of change of $y$ with respect to $x$.',
  },
      'The product of $dy$ and $dx
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{dy}{dx}$ is the derivative, representing the rate of change of $y$ with respect to $x$.',
  },
      'The difference between $y$ and $x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{dy}{dx}$ is the derivative, representing the rate of change of $y$ with respect to $x$.',
  },
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
      'Difference (infinitely small)',
      'Derivative',
      'Division',
      'Distance',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The "d" comes from "difference" but represents an infinitesimally small change.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $y = x^2$, what is the meaning of $dy$?',
    options: [
      'The value of $y
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$dy$ represents the infinitesimally small change in $y$ corresponding to the infinitesimal change $dx$ in $x$.',
  },
      'The square of $dx
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$dy$ represents the infinitesimally small change in $y$ corresponding to the infinitesimal change $dx$ in $x$.',
  },
      'Zero',
      'The small change in $y$ when $x$ changes by $dx
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$dy$ represents the infinitesimally small change in $y$ corresponding to the infinitesimal change $dx$ in $x$.',
  },
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
      'The notation and terminology can be intimidating',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Thompson argues that calculus concepts are simple but the notation can appear intimidating to newcomers.',
  },
];
