import type { QuizQuestion } from './types';

export const section72Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Taylor series of $f$ at $a$ is:',
    options: [
      '$\\sum_{n=0}^{\\infty} f(a) x^n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Taylor series: $\\sum \\frac{f^{(n)}(a)}{n!}(x-a)^n$.',
  },
      '$f(a) + f\\'(a)x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Taylor series: $\\sum \\frac{f^{(n)}(a)}{n!}(x-a)^n$.',
  },
      '$\\sum_{n=0}^{\\infty} f(x) n^a
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Taylor series: $\\sum \\frac{f^{(n)}(a)}{n!}(x-a)^n$.',
  },
      '$\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Taylor series: $\\sum \\frac{f^{(n)}(a)}{n!}(x-a)^n$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Taylor series: $\\sum \\frac{f^{(n)}(a)}{n!}(x-a)^n$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Taylor series for $e^x$ at $a = 0$ is:',
    options: [
      '$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$',
  },
      '$\\sum_{n=0}^{\\infty} x^n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$',
  },
      '$\\sum_{n=1}^{\\infty} \\frac{x^n}{n}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$',
  },
      '$1 + x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Taylor series for $\\sin x$ at $a = 0$ is:',
    options: [
      '$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - ...$',
  },
      '$x - x^2 + x^3 - ...
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - ...$',
  },
      '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - ...$',
  },
      '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - ...$',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - ...$',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Taylor series for $\\cos x$ at $a = 0$ is:',
    options: [
      '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - ...$',
  },
      '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - ...$',
  },
      '$\\sum_{n=0}^{\\infty} x^n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - ...$',
  },
      '$1 - x + x^2 - ...
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - ...$',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - ...$',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A function equals its Taylor series inside the radius of convergence if:',
    options: [
      'Always',
      'The function is polynomial',
      'The remainder goes to zero',
      'Never',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Need $R_n(x) \\to 0$ to ensure $f(x) = $ Taylor series.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Taylor series for $\\frac{1}{1-x}$ at $a = 0$ is:',
    options: [
      '$\\sum_{n=0}^{\\infty} (-1)^n x^n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Geometric series: $\\frac{1}{1-x} = 1 + x + x^2 + ...$',
  },
      '$\\sum_{n=0}^{\\infty} x^n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Geometric series: $\\frac{1}{1-x} = 1 + x + x^2 + ...$',
  },
      '$\\sum_{n=1}^{\\infty} \\frac{x^n}{n}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Geometric series: $\\frac{1}{1-x} = 1 + x + x^2 + ...$',
  },
      '$1 + 2x + 3x^2 + ...
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Geometric series: $\\frac{1}{1-x} = 1 + x + x^2 + ...$',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Geometric series: $\\frac{1}{1-x} = 1 + x + x^2 + ...$',
  },
];
