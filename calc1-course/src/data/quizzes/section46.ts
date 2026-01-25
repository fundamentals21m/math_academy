import type { QuizQuestion } from './types';

export const section46Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Taylor polynomial of degree $n$ for $f$ at $a$ is:',
    options: [
      '$f(a) + f\\'(a)(x-a)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Taylor polynomial: $P_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$.',
  },
      '$\\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taylor polynomial: $P_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$.',
  },
      '$f(x) + f\\'(x)(a-x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taylor polynomial: $P_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$.',
  },
      '$n \\cdot f(a)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taylor polynomial: $P_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taylor polynomial: $P_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Taylor polynomial agrees with $f$ at $a$ in:',
    options: [
      'Value, derivatives up to order $n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The $n$th Taylor polynomial matches $f, f\', f\'\', ..., f^{(n)}$ at $x = a$.',
  },
      'Value only',
      'Value and first derivative only',
      'All derivatives',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $n$th Taylor polynomial matches $f, f\', f\'\', ..., f^{(n)}$ at $x = a$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Taylor polynomial of $e^x$ at $a = 0$ up to degree 3 is:',
    options: [
      '$1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$e^x \\approx 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!}$.',
  },
      '$1 + x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$e^x \\approx 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!}$.',
  },
      '$1 + x + x^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$e^x \\approx 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!}$.',
  },
      '$e + ex
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$e^x \\approx 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$e^x \\approx 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Maclaurin polynomial is the Taylor polynomial at:',
    options: [
      '$a = 1$',
      '$a = \\pi$',
      '$a = e$',
      '$a = 0$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Maclaurin = Taylor centered at $a = 0$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Using $e^x \\approx 1 + x + x^2/2$, approximate $e^{0.1}$ to 2 decimals.',
    correctAnswer: 1.105,
    numericRange: { min: 1.10, max: 1.11, precision: 3 },
    difficulty: 'medium',
    explanation: '$1 + 0.1 + 0.01/2 = 1 + 0.1 + 0.005 = 1.105$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The linear approximation (degree 1 Taylor polynomial) at $a$ is:',
    options: [
      '$f(a)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Linear approximation: $L(x) = f(a) + f\'(a)(x-a)$ (tangent line).',
  },
      '$f\\'(a)(x - a)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Linear approximation: $L(x) = f(a) + f\'(a)(x-a)$ (tangent line).',
  },
      '$f(a) + f\\'(a)(x - a)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Linear approximation: $L(x) = f(a) + f\'(a)(x-a)$ (tangent line).',
  },
      '$f(a) + f\\'\\'(a)(x-a)^2/2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Linear approximation: $L(x) = f(a) + f\'(a)(x-a)$ (tangent line).',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Linear approximation: $L(x) = f(a) + f\'(a)(x-a)$ (tangent line).',
  },
];
