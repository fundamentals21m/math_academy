import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the value of $e$ (Euler\'s number) approximately?',
    options: [
      '$3.14159
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$e \\approx 2.71828...$',
  },
      '$1.414
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$e \\approx 2.71828...$',
  },
      '$1.618
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$e \\approx 2.71828...$',
  },
      '$2.718
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$e \\approx 2.71828...$',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$e \\approx 2.71828...$',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the derivative of $e^x$?',
    options: [
      '$xe^{x-1}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The exponential function $e^x$ is its own derivative: $\\frac{d}{dx}e^x = e^x$.',
  },
      '$e^{x-1}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The exponential function $e^x$ is its own derivative: $\\frac{d}{dx}e^x = e^x$.',
  },
      '$x \\cdot e^x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The exponential function $e^x$ is its own derivative: $\\frac{d}{dx}e^x = e^x$.',
  },
      '$e^x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The exponential function $e^x$ is its own derivative: $\\frac{d}{dx}e^x = e^x$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The exponential function $e^x$ is its own derivative: $\\frac{d}{dx}e^x = e^x$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is $e^x$ called the "natural" exponential function?',
    options: [
      'Its derivative equals itself, making it fundamental in calculus',
      'It was discovered in nature',
      'It is easier to compute than other exponentials',
      'It only produces natural numbers',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$e$ is the unique base for which $\\frac{d}{dx}b^x = b^x$. This makes it natural for calculus.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the derivative of $e^{2x}$?',
    options: [
      '$e^{2x}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dx}e^{2x} = e^{2x} \\cdot 2 = 2e^{2x}$.',
  },
      '$e^{2x-1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dx}e^{2x} = e^{2x} \\cdot 2 = 2e^{2x}$.',
  },
      '$2e^{2x}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dx}e^{2x} = e^{2x} \\cdot 2 = 2e^{2x}$.',
  },
      '$2xe^{2x}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dx}e^{2x} = e^{2x} \\cdot 2 = 2e^{2x}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dx}e^{2x} = e^{2x} \\cdot 2 = 2e^{2x}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The exponential function describes:',
    options: [
      'Only financial growth',
      'Linear relationships',
      'Periodic phenomena',
      'Constant growth rates like population, radioactive decay, and compound interest',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Exponential functions model any process where the rate of change is proportional to the current amount.',
  },
];
