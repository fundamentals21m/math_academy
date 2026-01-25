import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For $x > 0$ and $n \\in \\mathbb{N}$, the $n$-th root $x^{1/n}$ is defined as:',
    options: [
      '$x$ divided by $n$',
      'The unique positive real $y$ such that $y^n = x$',
      'The $n$-th term of the sequence converging to $x$',
      '$\\ln(x)/n$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For positive real $x$ and positive integer $n$, $x^{1/n}$ is defined as the unique positive real number $y$ satisfying $y^n = x$. Existence and uniqueness follow from the completeness of $\\mathbb{R}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The existence of $n$-th roots of positive reals relies on:',
    options: [
      'The Archimedean property only',
      'The density of rationals',
      'The intermediate value theorem',
      'The Least Upper Bound Property (completeness)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The existence proof uses the LUB property: consider $S = \\{t > 0 : t^n < x\\}$. This set is non-empty and bounded above, so $\\sup(S)$ exists and equals $x^{1/n}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $x > 0$ and rational $r = p/q$ (with $q > 0$), we define $x^r$ as:',
    options: [
      'Only defined when $x$ is rational',
      '$x \\cdot r
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Rational exponentiation is defined by $x^{p/q} = (x^p)^{1/q} = (x^{1/q})^p$. These are equal by the laws of exponents, and this extends integer exponentiation.',
  },
      '$(x^p)^{1/q}$, which equals $(x^{1/q})^p
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Rational exponentiation is defined by $x^{p/q} = (x^p)^{1/q} = (x^{1/q})^p$. These are equal by the laws of exponents, and this extends integer exponentiation.',
  },
      '$x^p + x^{1/q}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Rational exponentiation is defined by $x^{p/q} = (x^p)^{1/q} = (x^{1/q})^p$. These are equal by the laws of exponents, and this extends integer exponentiation.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Rational exponentiation is defined by $x^{p/q} = (x^p)^{1/q} = (x^{1/q})^p$. These are equal by the laws of exponents, and this extends integer exponentiation.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Calculate $8^{2/3}$.',
    correctAnswer: 4,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$8^{2/3} = (8^{1/3})^2 = 2^2 = 4$, since the cube root of $8$ is $2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The law $x^r \\cdot x^s = x^{r+s}$ for positive real $x$ and rationals $r, s$:',
    options: [
      'Holds for all positive $x$ and rationals $r, s$',
      'Fails for some rationals',
      'Only holds when $r$ and $s$ are integers',
      'Requires $x > 1$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The standard exponent laws extend to rational exponents: $x^r \\cdot x^s = x^{r+s}$, $(x^r)^s = x^{rs}$, and $(xy)^r = x^r y^r$ for all positive reals $x, y$ and rationals $r, s$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $x^{1/2} = 5$, what is $x$?',
    correctAnswer: 25,
    numericRange: { min: 0, max: 1000, precision: 0 },
    difficulty: 'easy',
    explanation: '$x^{1/2} = 5$ means $\\sqrt{x} = 5$, so $x = 5^2 = 25$.',
  },
];
