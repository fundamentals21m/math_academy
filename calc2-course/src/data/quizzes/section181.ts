import type { QuizQuestion } from './types';

export const section181Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the central problem that numerical analysis addresses?',
    options: [
      'Finding exact solutions to all mathematical problems',
      'Proving mathematical theorems rigorously',
      'Classifying different types of functions',
      'Obtaining approximate numerical solutions when exact computation is impossible or impractical',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Numerical analysis provides approximate solutions to problems where exact solutions cannot be computed directly, such as roots of high-degree polynomials or integrals without elementary antiderivatives.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why does the polynomial $x^5 - x + 1 = 0$ illustrate a key problem in numerical analysis?',
    options: [
      'There is no general formula for roots of polynomials of degree five or higher',
      'It has no roots',
      'It cannot be graphed',
      'Its coefficients are irrational',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the Abel-Ruffini theorem, there is no general algebraic formula for roots of polynomials of degree 5 or higher, necessitating numerical methods.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which integral is mentioned as having no elementary antiderivative?',
    options: [
      '$\\int e^{-x^2}\\,dx
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Gaussian integral $\\int e^{-x^2}\\,dx$ cannot be expressed in terms of elementary functions, yet it is essential in probability and statistics.',
  },
      '$\\int x^2\\,dx
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Gaussian integral $\\int e^{-x^2}\\,dx$ cannot be expressed in terms of elementary functions, yet it is essential in probability and statistics.',
  },
      '$\\int \\sin(x)\\,dx
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Gaussian integral $\\int e^{-x^2}\\,dx$ cannot be expressed in terms of elementary functions, yet it is essential in probability and statistics.',
  },
      '$\\int \\frac{1}{x}\\,dx
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Gaussian integral $\\int e^{-x^2}\\,dx$ cannot be expressed in terms of elementary functions, yet it is essential in probability and statistics.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Gaussian integral $\\int e^{-x^2}\\,dx$ cannot be expressed in terms of elementary functions, yet it is essential in probability and statistics.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why are polynomials the natural choice for function approximation?',
    options: [
      'They are the only continuous functions',
      'They can only be evaluated using addition',
      'They can be evaluated using only addition and multiplication, and their derivatives/integrals are again polynomials',
      'They always pass through the origin',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Polynomials require only addition and multiplication for evaluation, their calculus operations yield polynomials, and the Weierstrass theorem guarantees any continuous function can be uniformly approximated by polynomials.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'A polynomial of degree $n$ has how many coefficients (degrees of freedom)?',
    correctAnswer: 0,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'A polynomial $p(x) = a_0 + a_1 x + \\cdots + a_n x^n$ of degree $n$ has $n + 1$ coefficients. If we enter $n$, the answer is $n + 1$. For this question, if $n = 0$ (constant), the answer is 1 coefficient.',
  },
];
