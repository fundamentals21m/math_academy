import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The exponential function is defined by the power series:',
    options: [
      '$e^x = \\sum_{n=0}^\\infty x^n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The exponential series is $e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}$.',
  },
      '$e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The exponential series is $e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}$.',
  },
      '$e^x = \\sum_{n=0}^\\infty \\frac{x^n}{2^n}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The exponential series is $e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}$.',
  },
      '$e^x = \\sum_{n=1}^\\infty \\frac{x^n}{n}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The exponential series is $e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The exponential series is $e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The radius of convergence of $\\sum_{n=0}^\\infty \\frac{x^n}{n!}$ is:',
    options: [
      '$R = e
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The exponential series converges for all $x \\in \\mathbf{R}$.',
  },
      '$R = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The exponential series converges for all $x \\in \\mathbf{R}$.',
  },
      '$R = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The exponential series converges for all $x \\in \\mathbf{R}$.',
  },
      '$R = \\infty
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The exponential series converges for all $x \\in \\mathbf{R}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The exponential series converges for all $x \\in \\mathbf{R}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The natural logarithm $\\ln(1 + x)$ for $|x| < 1$ equals:',
    options: [
      '$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots = \\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n}$.',
  },
      '$\\sum_{n=1}^\\infty x^n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots = \\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n}$.',
  },
      '$\\sum_{n=0}^\\infty \\frac{x^n}{n!}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots = \\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n}$.',
  },
      '$\\sum_{n=1}^\\infty \\frac{x^n}{n!}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots = \\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots = \\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which property defines $e^x$ uniquely (up to a constant)?',
    options: [
      '$e^x$ is the only bounded function',
      '$(e^x)\\' = e^x$ and $e^0 = 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The exponential is the unique function satisfying $f\' = f$ with $f(0) = 1$.',
  },
      '$e^x$ is the only continuous function',
      '$e^x$ is the only function with a power series',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The exponential is the unique function satisfying $f\' = f$ with $f(0) = 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The identity $e^{x+y} = e^x \\cdot e^y$ can be proven using:',
    options: [
      'The Cauchy product of power series',
      'The ratio test',
      'L\\\\\'Hôpital\\\\\'s rule',
      'The intermediate value theorem',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Multiplying the power series for $e^x$ and $e^y$ using the Cauchy product gives $e^{x+y}$.',
  },
];
