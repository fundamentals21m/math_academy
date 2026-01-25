import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the Fundamental Theorem of Calculus say about differentiation and integration?',
    options: [
      'They are the same operation',
      'They are inverse operations—each undoes the other',
      'They are completely unrelated',
      'One is always larger than the other',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Fundamental Theorem reveals that differentiation and integration are inverse operations, like addition and subtraction.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to Part 1 of the Fundamental Theorem, if $F(x) = \\int_a^x f(t)\\,dt$, then $F\'(x)$ equals:',
    options: [
      '$a
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Part 1 states that $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$. The derivative of an accumulation function is the original integrand.',
  },
      '$f(a)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Part 1 states that $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$. The derivative of an accumulation function is the original integrand.',
  },
      '$\\int_a^x f(t)\\,dt
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Part 1 states that $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$. The derivative of an accumulation function is the original integrand.',
  },
      '$f(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Part 1 states that $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$. The derivative of an accumulation function is the original integrand.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Part 1 states that $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$. The derivative of an accumulation function is the original integrand.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To compute $\\int_a^b f(x)\\,dx$ using the Fundamental Theorem, you need to:',
    options: [
      'Find an antiderivative $F$ of $f$, then compute $F(b) - F(a)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Part 2 says $\\int_a^b f(x)\\,dx = F(b) - F(a)$ where $F\'= f$. Find an antiderivative and evaluate at the endpoints.',
  },
      'Find the derivative of $f
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Part 2 says $\\int_a^b f(x)\\,dx = F(b) - F(a)$ where $F\'= f$. Find an antiderivative and evaluate at the endpoints.',
  },
      'Multiply $f(a)$ by $f(b)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Part 2 says $\\int_a^b f(x)\\,dx = F(b) - F(a)$ where $F\'= f$. Find an antiderivative and evaluate at the endpoints.',
  },
      'Add $a$ and $b
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Part 2 says $\\int_a^b f(x)\\,dx = F(b) - F(a)$ where $F\'= f$. Find an antiderivative and evaluate at the endpoints.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Part 2 says $\\int_a^b f(x)\\,dx = F(b) - F(a)$ where $F\'= f$. Find an antiderivative and evaluate at the endpoints.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Using the Fundamental Theorem, compute $\\int_0^2 x\\,dx$.',
    correctAnswer: 2,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'An antiderivative of $x$ is $\\frac{x^2}{2}$. So $\\int_0^2 x\\,dx = \\frac{2^2}{2} - \\frac{0^2}{2} = 2 - 0 = 2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The equation $\\int_a^b F\'(x)\\,dx = F(b) - F(a)$ is called:',
    options: [
      'The Mean Value Theorem',
      'The Net Change Theorem (or Part 2 of the Fundamental Theorem)',
      'L\\'Hôpital\\'s Rule',
      'The Product Rule',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'This form states that the integral of a rate of change equals the net change—a direct application of the Fundamental Theorem.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why is the Fundamental Theorem so important?',
    options: [
      'It makes calculus harder',
      'It proves that integration is impossible',
      'It lets us compute integrals without taking limits of Riemann sums',
      'It only applies to simple functions',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The theorem transforms the impossible (adding infinitely many pieces) into the straightforward (find an antiderivative and subtract).',
  },
];
