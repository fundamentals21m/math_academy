import type { QuizQuestion } from './types';

export const section55Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Rudin defines $\\cos(x)$ and $\\sin(x)$ via:',
    options: [
      'Geometric definitions using the unit circle',
      'Inverse functions of arccos and arcsin',
      'As solutions to $y\'\' + y = 0$',
      'Power series: $\\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$, $\\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Rudin defines trigonometric functions analytically via their power series (Definition 8.6). The geometric properties (periodicity, relation to the circle) are then derived as theorems.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Euler\'s formula states that for real $x$:',
    options: [
      '$e^{ix} = \\cos x + i \\sin x$',
      '$e^{ix} = \\cos x - i \\sin x$',
      '$e^x = \\cos x + \\sin x$',
      '$i^x = \\cos x + i \\sin x$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Euler\'s formula $e^{ix} = \\cos x + i\\sin x$ follows directly from the power series definitions. The real part of $e^{ix}$ is $\\cos x$ and the imaginary part is $\\sin x$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The number $\\pi$ is defined in Rudin as:',
    options: [
      'The ratio of circumference to diameter of a circle',
      'Twice the smallest positive zero of $\\cos$',
      '$4 \\arctan(1)$',
      'The area of the unit circle'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Rudin defines $\\pi$ analytically: he proves $\\cos$ has a smallest positive zero (call it $x_0$), and defines $\\pi = 2x_0$. The geometric interpretation follows as a theorem.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The functions $\\sin$ and $\\cos$ are periodic with period:',
    options: [
      '$2\\pi
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Both $\\sin$ and $\\cos$ have period $2\\pi$: $\\sin(x + 2\\pi) = \\sin x$ and $\\cos(x + 2\\pi) = \\cos x$. This follows from $e^{i(x + 2\\pi)} = e^{ix} \\cdot e^{2\\pi i} = e^{ix}$.',
  },
      '$\\pi
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Both $\\sin$ and $\\cos$ have period $2\\pi$: $\\sin(x + 2\\pi) = \\sin x$ and $\\cos(x + 2\\pi) = \\cos x$. This follows from $e^{i(x + 2\\pi)} = e^{ix} \\cdot e^{2\\pi i} = e^{ix}$.',
  },
      '$\\pi/2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Both $\\sin$ and $\\cos$ have period $2\\pi$: $\\sin(x + 2\\pi) = \\sin x$ and $\\cos(x + 2\\pi) = \\cos x$. This follows from $e^{i(x + 2\\pi)} = e^{ix} \\cdot e^{2\\pi i} = e^{ix}$.',
  },
      '$4\\pi
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Both $\\sin$ and $\\cos$ have period $2\\pi$: $\\sin(x + 2\\pi) = \\sin x$ and $\\cos(x + 2\\pi) = \\cos x$. This follows from $e^{i(x + 2\\pi)} = e^{ix} \\cdot e^{2\\pi i} = e^{ix}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Both $\\sin$ and $\\cos$ have period $2\\pi$: $\\sin(x + 2\\pi) = \\sin x$ and $\\cos(x + 2\\pi) = \\cos x$. This follows from $e^{i(x + 2\\pi)} = e^{ix} \\cdot e^{2\\pi i} = e^{ix}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The identity $\\cos^2 x + \\sin^2 x = 1$ follows from:',
    options: [
      'The Pythagorean theorem',
      'The intermediate value theorem',
      '$e^{ix} \\cdot e^{-ix} = e^0 = 1$, i.e., $|e^{ix}|^2 = 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $e^{ix} \\cdot \\overline{e^{ix}} = e^{ix} \\cdot e^{-ix} = e^0 = 1$, we have $|e^{ix}|^2 = (\\cos x)^2 + (\\sin x)^2 = 1$.',
  },
      'The power series having unit radius of convergence',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since $e^{ix} \\cdot \\overline{e^{ix}} = e^{ix} \\cdot e^{-ix} = e^0 = 1$, we have $|e^{ix}|^2 = (\\cos x)^2 + (\\sin x)^2 = 1$.',
  },
];
