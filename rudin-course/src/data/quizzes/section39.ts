import type { QuizQuestion } from './types';

export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Taylor\'s Theorem states that if $f \\in C^{n}$ on $[a, b]$ and $f^{(n+1)}$ exists on $(a, b)$, then for $x \\in [a, b]$:',
    options: [
      '$f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$ exactly',
      '$f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x)$ where $R_n$ involves $f^{(n+1)}$',
      '$f(x) = \\sum_{k=0}^{\\infty} \\frac{f^{(k)}(a)}{k!}(x-a)^k$',
      '$f(x) = \\sum_{k=0}^{n} f^{(k)}(a)(x-a)^k$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Taylor\'s Theorem gives $f(x) = P_n(x) + R_n(x)$ where $P_n$ is the Taylor polynomial of degree $n$ and $R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ for some $c$ between $a$ and $x$ (Lagrange form).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Lagrange form of the remainder in Taylor\'s Theorem is:',
    options: [
      '$R_n(x) = \\frac{f^{(n)}(c)}{n!}(x-a)^n$',
      '$R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ for some $c$ between $a$ and $x$',
      '$R_n(x) = \\int_a^x f^{(n+1)}(t) dt$',
      '$R_n(x) = f(x) - f(a)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Lagrange remainder is $R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ where $c$ lies strictly between $a$ and $x$. This is proven using the Generalized Mean Value Theorem.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Taylor series of $e^x$ centered at $0$ is:',
    options: [
      '$\\sum_{n=0}^{\\infty} x^n$',
      '$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$',
      '$\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$',
      '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^n}{n!}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since $\\frac{d^n}{dx^n}(e^x) = e^x$ and $e^0 = 1$, the Taylor coefficients are $\\frac{e^0}{n!} = \\frac{1}{n!}$. The series $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ converges to $e^x$ for all $x \\in \\mathbb{R}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f(x) = \\sum_{n=0}^{\\infty} a_n (x-a)^n$ converges for all $x$, then $a_n = $',
    options: [
      '$f(a)$',
      '$f^{(n)}(a)$',
      '$\\frac{f^{(n)}(a)}{n!}$',
      '$\\frac{f(a)}{n!}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $f$ equals its Taylor series, then the coefficients must be $a_n = \\frac{f^{(n)}(a)}{n!}$. This follows from term-by-term differentiation and evaluating at $x = a$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The function $f(x) = e^{-1/x^2}$ for $x \\neq 0$ and $f(0) = 0$ has the property that:',
    options: [
      'Its Taylor series at $0$ converges to $f(x)$ for all $x$',
      'Its Taylor series at $0$ is identically $0$ but $f$ is not the zero function',
      'It is not infinitely differentiable at $0$',
      'Its Taylor series diverges for $x \\neq 0$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'This is the classic example of a $C^\\infty$ function whose Taylor series at $0$ converges but not to $f$. One can show $f^{(n)}(0) = 0$ for all $n$, so the Taylor series is $0$. But $f(x) > 0$ for $x \\neq 0$.',
  },
];
