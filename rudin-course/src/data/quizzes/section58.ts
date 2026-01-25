import type { QuizQuestion } from './types';

export const section58Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Gamma function $\\Gamma(x)$ is defined for $x > 0$ by which integral?',
    options: [
      '$\\int_0^1 t^{x-1} (1-t)^{x-1} \\, dt
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Gamma function is defined as $\\Gamma(x) = \\int_0^\\infty t^{x-1} e^{-t} \\, dt$ for $x > 0$. This integral converges absolutely for all positive real $x$.',
  },
      '$\\int_0^\\infty t^x e^{-t} \\, dt
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Gamma function is defined as $\\Gamma(x) = \\int_0^\\infty t^{x-1} e^{-t} \\, dt$ for $x > 0$. This integral converges absolutely for all positive real $x$.',
  },
      '$\\int_{-\\infty}^\\infty e^{-t^2} t^x \\, dt
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Gamma function is defined as $\\Gamma(x) = \\int_0^\\infty t^{x-1} e^{-t} \\, dt$ for $x > 0$. This integral converges absolutely for all positive real $x$.',
  },
      '$\\int_0^\\infty t^{x-1} e^{-t} \\, dt
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Gamma function is defined as $\\Gamma(x) = \\int_0^\\infty t^{x-1} e^{-t} \\, dt$ for $x > 0$. This integral converges absolutely for all positive real $x$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Gamma function is defined as $\\Gamma(x) = \\int_0^\\infty t^{x-1} e^{-t} \\, dt$ for $x > 0$. This integral converges absolutely for all positive real $x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the value of $\\Gamma(n+1)$ for a positive integer $n$?',
    options: [
      '$n!
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For positive integers, $\\Gamma(n+1) = n!$. This follows from the functional equation $\\Gamma(x+1) = x\\Gamma(x)$ and the fact that $\\Gamma(1) = 1$.',
  },
      '$n^n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For positive integers, $\\Gamma(n+1) = n!$. This follows from the functional equation $\\Gamma(x+1) = x\\Gamma(x)$ and the fact that $\\Gamma(1) = 1$.',
  },
      '$(n-1)!
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For positive integers, $\\Gamma(n+1) = n!$. This follows from the functional equation $\\Gamma(x+1) = x\\Gamma(x)$ and the fact that $\\Gamma(1) = 1$.',
  },
      '$(n+1)!
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For positive integers, $\\Gamma(n+1) = n!$. This follows from the functional equation $\\Gamma(x+1) = x\\Gamma(x)$ and the fact that $\\Gamma(1) = 1$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For positive integers, $\\Gamma(n+1) = n!$. This follows from the functional equation $\\Gamma(x+1) = x\\Gamma(x)$ and the fact that $\\Gamma(1) = 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The functional equation satisfied by the Gamma function is:',
    options: [
      '$\\Gamma(x+1) = (x+1)\\Gamma(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The fundamental functional equation is $\\Gamma(x+1) = x\\Gamma(x)$, proved by integration by parts. This generalizes the factorial relation $(n+1)! = (n+1) \\cdot n!$.',
  },
      '$\\Gamma(x+1) = x\\Gamma(x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The fundamental functional equation is $\\Gamma(x+1) = x\\Gamma(x)$, proved by integration by parts. This generalizes the factorial relation $(n+1)! = (n+1) \\cdot n!$.',
  },
      '$\\Gamma(2x) = \\Gamma(x)^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The fundamental functional equation is $\\Gamma(x+1) = x\\Gamma(x)$, proved by integration by parts. This generalizes the factorial relation $(n+1)! = (n+1) \\cdot n!$.',
  },
      '$\\Gamma(x)\\Gamma(1-x) = 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The fundamental functional equation is $\\Gamma(x+1) = x\\Gamma(x)$, proved by integration by parts. This generalizes the factorial relation $(n+1)! = (n+1) \\cdot n!$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The fundamental functional equation is $\\Gamma(x+1) = x\\Gamma(x)$, proved by integration by parts. This generalizes the factorial relation $(n+1)! = (n+1) \\cdot n!$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the value of $\\Gamma(1/2)$?',
    options: [
      '$\\sqrt{\\pi}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\Gamma(1/2) = \\int_0^\\infty t^{-1/2} e^{-t} \\, dt = \\sqrt{\\pi}$. This can be computed using the substitution $t = u^2$ and the Gaussian integral $\\int_{-\\infty}^\\infty e^{-u^2} du = \\sqrt{\\pi}$.',
  },
      '$\\pi
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\Gamma(1/2) = \\int_0^\\infty t^{-1/2} e^{-t} \\, dt = \\sqrt{\\pi}$. This can be computed using the substitution $t = u^2$ and the Gaussian integral $\\int_{-\\infty}^\\infty e^{-u^2} du = \\sqrt{\\pi}$.',
  },
      '$1/2
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\Gamma(1/2) = \\int_0^\\infty t^{-1/2} e^{-t} \\, dt = \\sqrt{\\pi}$. This can be computed using the substitution $t = u^2$ and the Gaussian integral $\\int_{-\\infty}^\\infty e^{-u^2} du = \\sqrt{\\pi}$.',
  },
      '$2\\sqrt{\\pi}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\Gamma(1/2) = \\int_0^\\infty t^{-1/2} e^{-t} \\, dt = \\sqrt{\\pi}$. This can be computed using the substitution $t = u^2$ and the Gaussian integral $\\int_{-\\infty}^\\infty e^{-u^2} du = \\sqrt{\\pi}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\Gamma(1/2) = \\int_0^\\infty t^{-1/2} e^{-t} \\, dt = \\sqrt{\\pi}$. This can be computed using the substitution $t = u^2$ and the Gaussian integral $\\int_{-\\infty}^\\infty e^{-u^2} du = \\sqrt{\\pi}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Beta function $B(x,y)$ is related to the Gamma function by:',
    options: [
      '$B(x,y) = \\frac{\\Gamma(x+y)}{\\Gamma(x)\\Gamma(y)}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Beta function $B(x,y) = \\int_0^1 t^{x-1}(1-t)^{y-1} dt$ satisfies $B(x,y) = \\frac{\\Gamma(x)\\Gamma(y)}{\\Gamma(x+y)}$. This identity connects two important special functions.',
  },
      '$B(x,y) = \\frac{\\Gamma(x)\\Gamma(y)}{\\Gamma(x+y)}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Beta function $B(x,y) = \\int_0^1 t^{x-1}(1-t)^{y-1} dt$ satisfies $B(x,y) = \\frac{\\Gamma(x)\\Gamma(y)}{\\Gamma(x+y)}$. This identity connects two important special functions.',
  },
      '$B(x,y) = \\Gamma(x)\\Gamma(y)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Beta function $B(x,y) = \\int_0^1 t^{x-1}(1-t)^{y-1} dt$ satisfies $B(x,y) = \\frac{\\Gamma(x)\\Gamma(y)}{\\Gamma(x+y)}$. This identity connects two important special functions.',
  },
      '$B(x,y) = \\Gamma(xy)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Beta function $B(x,y) = \\int_0^1 t^{x-1}(1-t)^{y-1} dt$ satisfies $B(x,y) = \\frac{\\Gamma(x)\\Gamma(y)}{\\Gamma(x+y)}$. This identity connects two important special functions.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Beta function $B(x,y) = \\int_0^1 t^{x-1}(1-t)^{y-1} dt$ satisfies $B(x,y) = \\frac{\\Gamma(x)\\Gamma(y)}{\\Gamma(x+y)}$. This identity connects two important special functions.',
  },
];
