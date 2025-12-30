import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the derivative of $\\sin(x)$?',
    options: [
      '$-\\sin(x)$',
      '$\\cos(x)$',
      '$-\\cos(x)$',
      '$\\tan(x)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\frac{d}{dx}\\sin(x) = \\cos(x)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the derivative of $\\cos(x)$?',
    options: [
      '$\\sin(x)$',
      '$-\\sin(x)$',
      '$\\cos(x)$',
      '$-\\cos(x)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\frac{d}{dx}\\cos(x) = -\\sin(x)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The derivatives of sine and cosine are related because:',
    options: [
      'They are both always positive',
      'They form a cycle: differentiating repeatedly brings you back',
      'They have the same derivative',
      'They are inverse functions'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\sin \\to \\cos \\to -\\sin \\to -\\cos \\to \\sin$. Four derivatives return to the original.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the derivative of $\\tan(x)$?',
    options: [
      '$\\cot(x)$',
      '$\\sec(x)$',
      '$\\sec^2(x)$',
      '$\\cos^2(x)$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dx}\\tan(x) = \\sec^2(x)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The second derivative of $\\sin(x)$ is:',
    options: [
      '$\\sin(x)$',
      '$-\\sin(x)$',
      '$\\cos(x)$',
      '$-\\cos(x)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dx}\\sin(x) = \\cos(x)$, then $\\frac{d}{dx}\\cos(x) = -\\sin(x)$.',
  },
];
