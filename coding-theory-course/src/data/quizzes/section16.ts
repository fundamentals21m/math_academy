import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $g(x)$ is the generator polynomial of a cyclic code, how is the check polynomial $h(x)$ defined?',
    options: [
      '$h(x) = g(x)^{-1}$',
      '$h(x) = (x^n - 1) / g(x)$',
      '$h(x) = x^n - 1 - g(x)$',
      '$h(x) = g(x) \\cdot (x^n - 1)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The check polynomial is defined as $h(x) = (x^n - 1) / g(x)$. Since $g(x)$ divides $x^n - 1$, this quotient is always a polynomial.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A polynomial $c(x)$ is a codeword if and only if:',
    options: [
      '$c(x) \\cdot h(x) \\equiv 0 \\pmod{x^n - 1}$',
      '$c(x) \\cdot g(x) \\equiv 0 \\pmod{x^n - 1}$',
      '$c(x) + h(x) \\equiv 0 \\pmod{x^n - 1}$',
      '$c(x) / h(x)$ is a polynomial'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The check polynomial satisfies $g(x) \\cdot h(x) = x^n - 1$. A polynomial $c(x) = m(x) \\cdot g(x)$ is a codeword iff $c(x) \\cdot h(x) \\equiv 0 \\pmod{x^n - 1}$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'If a cyclic code has length $n = 15$ and generator polynomial of degree $11$, what is the degree of the check polynomial?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 15, precision: 0 },
    difficulty: 'easy',
    explanation: 'Since $g(x) \\cdot h(x) = x^n - 1$, we have $\\deg(g) + \\deg(h) = n$. Thus $\\deg(h) = 15 - 11 = 4$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The check polynomial $h(x)$ generates which code?',
    options: [
      'The same cyclic code as $g(x)$',
      'The dual code $C^\\perp$',
      'A code of double the length',
      'The trivial code $\\{0\\}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The reciprocal of the check polynomial $h^*(x) = x^{\\deg h} h(1/x)$ generates the dual code $C^\\perp$. The check polynomial is closely related to the dual code structure.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For the binary cyclic code with $g(x) = x^3 + x + 1$ dividing $x^7 - 1$, what is $h(x)$?',
    options: [
      '$x^4 + x^3 + x^2 + 1$',
      '$x^4 + x^2 + x + 1$',
      '$x^3 + x^2 + 1$',
      '$x^4 + x^3 + 1$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Computing $(x^7 - 1)/(x^3 + x + 1) = (x^7 + 1)/(x^3 + x + 1)$ over $\\mathbb{F}_2$ gives $h(x) = x^4 + x^3 + x^2 + 1$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If the check polynomial has degree $k$, what is the dimension of the cyclic code?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'The dimension of the code equals the degree of the check polynomial, since $k = n - \\deg(g) = \\deg(h)$. If $\\deg(h) = 4$, then $k = 4$.',
  },
];
