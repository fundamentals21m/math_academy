import type { QuizQuestion } from './types';

export const section37Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The substitution rule for integration states $\\int f(g(x))g\'(x)\\,dx = ?$',
    options: [
      '$\\int f(x)g(x)\\,dx
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Substitution: let $u = g(x)$, then $du = g\'(x)\\,dx$.',
  },
      '$\\int f(u)\\,du$ where $u = g(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Substitution: let $u = g(x)$, then $du = g\'(x)\\,dx$.',
  },
      '$f(g(x)) + C
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Substitution: let $u = g(x)$, then $du = g\'(x)\\,dx$.',
  },
      '$f\\'(g(x))
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Substitution: let $u = g(x)$, then $du = g\'(x)\\,dx$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Substitution: let $u = g(x)$, then $du = g\'(x)\\,dx$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To evaluate $\\int 2x(x^2 + 1)^5\\,dx$, the best substitution is:',
    options: [
      '$u = x$',
      '$u = (x^2+1)^5$',
      '$u = 2x$',
      '$u = x^2 + 1$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Let $u = x^2 + 1$, then $du = 2x\\,dx$. The integral becomes $\\int u^5\\,du$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: '$\\int \\cos(3x)\\,dx = ?$',
    options: [
      '$\\sin(3x) + C
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Let $u = 3x$, $du = 3\\,dx$. $\\int \\cos u \\cdot \\frac{du}{3} = \\frac{1}{3}\\sin(3x) + C$.',
  },
      '$3\\sin(3x) + C
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Let $u = 3x$, $du = 3\\,dx$. $\\int \\cos u \\cdot \\frac{du}{3} = \\frac{1}{3}\\sin(3x) + C$.',
  },
      '$\\frac{1}{3}\\sin(3x) + C
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Let $u = 3x$, $du = 3\\,dx$. $\\int \\cos u \\cdot \\frac{du}{3} = \\frac{1}{3}\\sin(3x) + C$.',
  },
      '$-\\sin(3x) + C
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Let $u = 3x$, $du = 3\\,dx$. $\\int \\cos u \\cdot \\frac{du}{3} = \\frac{1}{3}\\sin(3x) + C$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Let $u = 3x$, $du = 3\\,dx$. $\\int \\cos u \\cdot \\frac{du}{3} = \\frac{1}{3}\\sin(3x) + C$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: '$\\int e^{2x}\\,dx = ?$',
    options: [
      '$\\frac{1}{2}e^{2x} + C
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Let $u = 2x$. $\\int e^u \\cdot \\frac{du}{2} = \\frac{1}{2}e^{2x} + C$.',
  },
      '$e^{2x} + C
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Let $u = 2x$. $\\int e^u \\cdot \\frac{du}{2} = \\frac{1}{2}e^{2x} + C$.',
  },
      '$2e^{2x} + C
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Let $u = 2x$. $\\int e^u \\cdot \\frac{du}{2} = \\frac{1}{2}e^{2x} + C$.',
  },
      '$e^{x^2} + C
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Let $u = 2x$. $\\int e^u \\cdot \\frac{du}{2} = \\frac{1}{2}e^{2x} + C$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Let $u = 2x$. $\\int e^u \\cdot \\frac{du}{2} = \\frac{1}{2}e^{2x} + C$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Evaluate $\\int_0^1 2x(x^2+1)^2\\,dx$ using $u = x^2 + 1$. When $x=0$, $u=1$; when $x=1$, $u=2$.',
    correctAnswer: 2.33,
    numericRange: { min: 2, max: 3, precision: 2 },
    difficulty: 'hard',
    explanation: '$\\int_1^2 u^2\\,du = \\frac{u^3}{3}\\Big|_1^2 = \\frac{8}{3} - \\frac{1}{3} = \\frac{7}{3} \\approx 2.33$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For definite integrals with substitution, we must:',
    options: [
      'Change the limits to the new variable OR substitute back',
      'Keep the original limits',
      'Always use limits 0 to 1',
      'Ignore the limits',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Either change limits to $u$-values or substitute back to $x$ before evaluating.',
  },
];
