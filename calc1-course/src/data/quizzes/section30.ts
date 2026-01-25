import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The chain rule states that if $f = u \\circ v$, then $f\'(x) = ?$',
    options: [
      '$u\\'(x) \\cdot v\\'(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Chain rule: $(u \\circ v)\'(x) = u\'(v(x)) \\cdot v\'(x)$.',
  },
      '$u\\'(v(x)) \\cdot v\\'(x)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Chain rule: $(u \\circ v)\'(x) = u\'(v(x)) \\cdot v\'(x)$.',
  },
      '$v\\'(u(x))
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Chain rule: $(u \\circ v)\'(x) = u\'(v(x)) \\cdot v\'(x)$.',
  },
      '$u(v\\'(x))
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Chain rule: $(u \\circ v)\'(x) = u\'(v(x)) \\cdot v\'(x)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Chain rule: $(u \\circ v)\'(x) = u\'(v(x)) \\cdot v\'(x)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In Leibniz notation, if $z = u(y)$ and $y = v(x)$, then $\\frac{dz}{dx} = ?$',
    options: [
      '$\\frac{dz}{dy} + \\frac{dy}{dx}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Chain rule in Leibniz form: $\\frac{dz}{dx} = \\frac{dz}{dy} \\cdot \\frac{dy}{dx}$.',
  },
      '$\\frac{dz}{dy} / \\frac{dy}{dx}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Chain rule in Leibniz form: $\\frac{dz}{dx} = \\frac{dz}{dy} \\cdot \\frac{dy}{dx}$.',
  },
      '$\\frac{dy}{dz} \\cdot \\frac{dx}{dy}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Chain rule in Leibniz form: $\\frac{dz}{dx} = \\frac{dz}{dy} \\cdot \\frac{dy}{dx}$.',
  },
      '$\\frac{dz}{dy} \\cdot \\frac{dy}{dx}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Chain rule in Leibniz form: $\\frac{dz}{dx} = \\frac{dz}{dy} \\cdot \\frac{dy}{dx}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Chain rule in Leibniz form: $\\frac{dz}{dx} = \\frac{dz}{dy} \\cdot \\frac{dy}{dx}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f(x) = \\sin(x^2)$, then $f\'(x) = ?$',
    options: [
      '$2x\\cos(x^2)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Chain rule: derivative of outside $\\cos(x^2)$ times derivative of inside $2x$.',
  },
      '$\\cos(x^2)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Chain rule: derivative of outside $\\cos(x^2)$ times derivative of inside $2x$.',
  },
      '$2x\\sin(x^2)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Chain rule: derivative of outside $\\cos(x^2)$ times derivative of inside $2x$.',
  },
      '$\\cos(2x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Chain rule: derivative of outside $\\cos(x^2)$ times derivative of inside $2x$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Chain rule: derivative of outside $\\cos(x^2)$ times derivative of inside $2x$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $f(x) = (2x + 1)^3$, what is $f\'(0)$?',
    correctAnswer: 6,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$f\'(x) = 3(2x+1)^2 \\cdot 2 = 6(2x+1)^2$. So $f\'(0) = 6(1)^2 = 6$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The general power rule $(v^n)\' = ?$ (where $v = v(x)$)',
    options: [
      '$nv^{n-1}$',
      '$v^n/n$',
      '$nv^{n-1}v\'$',
      '$nv\'$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'General power rule: $(v^n)\' = nv^{n-1} \\cdot v\'$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $f(x) = \\sqrt{1 + x^2}$, then $f\'(x) = \\frac{x}{\\sqrt{1+x^2}}$. What is $f\'(0)$?',
    correctAnswer: 0,
    numericRange: { min: -10, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: '$f\'(0) = \\frac{0}{\\sqrt{1}} = 0$.',
  },
];
