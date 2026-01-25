import type { QuizQuestion } from './types';

export const section67Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For $F(x) = \\int_a^x f(t) \\, dt$ where $f$ is continuous, $F\'(x) = $:',
    options: [
      '$f(x) - f(a)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'This is the First Fundamental Theorem of Calculus: differentiating an integral with respect to its upper limit gives back the integrand.',
  },
      '$\\int_a^x f\\'(t) \\, dt
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'This is the First Fundamental Theorem of Calculus: differentiating an integral with respect to its upper limit gives back the integrand.',
  },
      '$f(x)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'This is the First Fundamental Theorem of Calculus: differentiating an integral with respect to its upper limit gives back the integrand.',
  },
      '$f(a)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'This is the First Fundamental Theorem of Calculus: differentiating an integral with respect to its upper limit gives back the integrand.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'This is the First Fundamental Theorem of Calculus: differentiating an integral with respect to its upper limit gives back the integrand.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For $G(x) = \\int_a^{g(x)} f(t) \\, dt$ where $f$ and $g$ are $C^1$, $G\'(x) = $:',
    options: [
      '$f(g(x))
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the chain rule combined with the Fundamental Theorem: $G\'(x) = f(g(x)) \\cdot g\'(x)$. This is Leibniz\'s rule for differentiation under the integral sign.',
  },
      '$f\\'(g(x)) \\cdot g\\'(x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule combined with the Fundamental Theorem: $G\'(x) = f(g(x)) \\cdot g\'(x)$. This is Leibniz\'s rule for differentiation under the integral sign.',
  },
      '$f(g(x)) \\cdot g\\'(x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule combined with the Fundamental Theorem: $G\'(x) = f(g(x)) \\cdot g\'(x)$. This is Leibniz\'s rule for differentiation under the integral sign.',
  },
      '$\\int_a^{g(x)} f\\'(t) \\, dt
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule combined with the Fundamental Theorem: $G\'(x) = f(g(x)) \\cdot g\'(x)$. This is Leibniz\'s rule for differentiation under the integral sign.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule combined with the Fundamental Theorem: $G\'(x) = f(g(x)) \\cdot g\'(x)$. This is Leibniz\'s rule for differentiation under the integral sign.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $F(x) = \\int_{a(x)}^{b(x)} f(t) \\, dt$, then $F\'(x) = $:',
    options: [
      '$f(b(x)) b\\'(x) - f(a(x)) a\\'(x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When both limits depend on $x$, we get contributions from both: $F\'(x) = f(b(x))b\'(x) - f(a(x))a\'(x)$ by applying the chain rule to each limit.',
  },
      '$f(b(x)) - f(a(x))
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When both limits depend on $x$, we get contributions from both: $F\'(x) = f(b(x))b\'(x) - f(a(x))a\'(x)$ by applying the chain rule to each limit.',
  },
      '$b\\'(x) - a\\'(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When both limits depend on $x$, we get contributions from both: $F\'(x) = f(b(x))b\'(x) - f(a(x))a\'(x)$ by applying the chain rule to each limit.',
  },
      '$\\int_{a(x)}^{b(x)} f\\'(t) \\, dt
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When both limits depend on $x$, we get contributions from both: $F\'(x) = f(b(x))b\'(x) - f(a(x))a\'(x)$ by applying the chain rule to each limit.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When both limits depend on $x$, we get contributions from both: $F\'(x) = f(b(x))b\'(x) - f(a(x))a\'(x)$ by applying the chain rule to each limit.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $\\Phi(x) = \\int_a^b f(x,t) \\, dt$, the Leibniz integral rule states $\\Phi\'(x) = $:',
    options: [
      '$\\int_a^b f(x,t) \\, dt
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Leibniz integral rule: when $f$ and $\\partial f/\\partial x$ are continuous, differentiation and integration commute: $\\frac{d}{dx}\\int_a^b f(x,t)dt = \\int_a^b \\frac{\\partial f}{\\partial x}(x,t)dt$.',
  },
      '$f(x,b) - f(x,a)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Leibniz integral rule: when $f$ and $\\partial f/\\partial x$ are continuous, differentiation and integration commute: $\\frac{d}{dx}\\int_a^b f(x,t)dt = \\int_a^b \\frac{\\partial f}{\\partial x}(x,t)dt$.',
  },
      '$\\frac{\\partial}{\\ partial t} \\int_a^b f(x,t) \\, dt
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Leibniz integral rule: when $f$ and $\\partial f/\\partial x$ are continuous, differentiation and integration commute: $\\frac{d}{dx}\\int_a^b f(x,t)dt = \\int_a^b \\frac{\\partial f}{\\partial x}(x,t)dt$.',
  },
      '$\\int_a^b \\frac{\\partial f}{\\partial x}(x,t) \\, dt$ (under suitable conditions)',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Leibniz integral rule: when $f$ and $\\partial f/\\partial x$ are continuous, differentiation and integration commute: $\\frac{d}{dx}\\int_a^b f(x,t)dt = \\int_a^b \\frac{\\partial f}{\\partial x}(x,t)dt$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The conditions for differentiating under the integral sign (Leibniz rule) require:',
    options: [
      'That $f$ be independent of $x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For finite intervals, continuity of $f$ and $\\partial f/\\partial x$ suffices. For improper integrals, additional uniform convergence conditions are needed.',
  },
      '$f(x,t)$ continuous and $\\frac{\\partial f}{\\partial x}$ continuous on the domain',
      'Only that $f(x,t)$ be integrable',
      'That the integral converges absolutely',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For finite intervals, continuity of $f$ and $\\partial f/\\partial x$ suffices. For improper integrals, additional uniform convergence conditions are needed.',
  },
];
