import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The sine function is defined by the power series:',
    options: [
      '$\\sin(x) = \\sum_{n=0}^\\infty \\frac{x^n}{n!}$',
      '$\\sin(x) = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$',
      '$\\sin(x) = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}$',
      '$\\sin(x) = \\sum_{n=1}^\\infty \\frac{x^n}{n}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\sin(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The cosine function is defined by the power series:',
    options: [
      '$\\cos(x) = \\sum_{n=0}^\\infty \\frac{x^n}{n!}$',
      '$\\cos(x) = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$',
      '$\\cos(x) = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}$',
      '$\\cos(x) = \\sum_{n=1}^\\infty \\frac{x^n}{n}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\cos(x) = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'From Euler\'s formula, $\\cos(x)$ and $\\sin(x)$ can be written as:',
    options: [
      '$\\cos(x) = \\frac{e^{ix} + e^{-ix}}{2}$, $\\sin(x) = \\frac{e^{ix} - e^{-ix}}{2i}$',
      '$\\cos(x) = e^{ix}$, $\\sin(x) = e^{-ix}$',
      '$\\cos(x) = \\frac{e^{ix}}{2}$, $\\sin(x) = \\frac{e^{-ix}}{2}$',
      '$\\cos(x) = e^{ix} - 1$, $\\sin(x) = e^{ix} + 1$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Using $e^{ix} = \\cos x + i\\sin x$ and $e^{-ix} = \\cos x - i\\sin x$, we solve for $\\cos$ and $\\sin$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The identity $\\sin^2(x) + \\cos^2(x) = 1$ follows from:',
    options: [
      'The ratio test',
      '$|e^{ix}|^2 = e^{ix} \\cdot e^{-ix} = 1$',
      'The Weierstrass M-test',
      'The mean value theorem'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$|e^{ix}|^2 = |\\cos x + i\\sin x|^2 = \\cos^2 x + \\sin^2 x = 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The number $\\pi$ can be characterized as:',
    options: [
      'The smallest positive zero of $\\sin$',
      'The smallest positive zero of $\\cos$',
      'Half the smallest positive period of $\\sin$',
      'All of the above are equivalent'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'These are all equivalent characterizations of $\\pi$.',
  },
];
