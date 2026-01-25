import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which of the following is an example of a real linear space?',
    options: [
      'The set of all polynomials of degree $\\leq n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The set of polynomials of degree $\\leq n$ forms a linear space. The sum of two such polynomials has degree $\\leq n$, and scalar multiples have degree $\\leq n$. The other options fail closure axioms.',
  },
      'The set of all polynomials of degree exactly $n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The set of polynomials of degree $\\leq n$ forms a linear space. The sum of two such polynomials has degree $\\leq n$, and scalar multiples have degree $\\leq n$. The other options fail closure axioms.',
  },
      'The set of solutions to $y\\'\\' + y = 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The set of polynomials of degree $\\leq n$ forms a linear space. The sum of two such polynomials has degree $\\leq n$, and scalar multiples have degree $\\leq n$. The other options fail closure axioms.',
  },
      'The set of all functions $f$ with $f(1) = 5
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The set of polynomials of degree $\\leq n$ forms a linear space. The sum of two such polynomials has degree $\\leq n$, and scalar multiples have degree $\\leq n$. The other options fail closure axioms.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The set of polynomials of degree $\\leq n$ forms a linear space. The sum of two such polynomials has degree $\\leq n$, and scalar multiples have degree $\\leq n$. The other options fail closure axioms.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is the set of all polynomials of degree exactly $n$ NOT a linear space?',
    options: [
      'It lacks a zero element',
      'Addition of two degree-$n$ polynomials may not have degree $n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sum of two polynomials of degree $n$ may have degree less than $n$ if the leading coefficients cancel. For example, $(x^n + x) + (-x^n + 1) = x + 1$ has degree 1, not $n$.',
  },
      'It is not closed under scalar multiplication',
      'It contains infinitely many elements',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The sum of two polynomials of degree $n$ may have degree less than $n$ if the leading coefficients cancel. For example, $(x^n + x) + (-x^n + 1) = x + 1$ has degree 1, not $n$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the function space definition, how is $(f + g)(x)$ defined?',
    options: [
      '$f(g(x))
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In function spaces, the sum of two functions $f$ and $g$ is defined pointwise: $(f + g)(x) = f(x) + g(x)$ for every $x$ in the intersection of their domains.',
  },
      '$f(x) \\cdot g(x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In function spaces, the sum of two functions $f$ and $g$ is defined pointwise: $(f + g)(x) = f(x) + g(x)$ for every $x$ in the intersection of their domains.',
  },
      '$f(x) + g(x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In function spaces, the sum of two functions $f$ and $g$ is defined pointwise: $(f + g)(x) = f(x) + g(x)$ for every $x$ in the intersection of their domains.',
  },
      '$f(x + g(x))
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In function spaces, the sum of two functions $f$ and $g$ is defined pointwise: $(f + g)(x) = f(x) + g(x)$ for every $x$ in the intersection of their domains.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In function spaces, the sum of two functions $f$ and $g$ is defined pointwise: $(f + g)(x) = f(x) + g(x)$ for every $x$ in the intersection of their domains.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The set of all solutions to the homogeneous differential equation $y\'\' + ay\' + by = 0$ forms a linear space. What happens if we consider $y\'\' + ay\' + by = c$ where $c \\neq 0$?',
    options: [
      'It fails to be a linear space',
      'It forms a different linear space',
      'It forms the same linear space',
      'It depends on the values of $a$ and $b
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The set of solutions to a nonhomogeneous equation does not form a linear space because it fails the closure axioms. If $y_1$ and $y_2$ are solutions, then $y_1 + y_2$ satisfies $y\'\' + ay\' + by = 2c \\neq c$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The set of solutions to a nonhomogeneous equation does not form a linear space because it fails the closure axioms. If $y_1$ and $y_2$ are solutions, then $y_1 + y_2$ satisfies $y\'\' + ay\' + by = 2c \\neq c$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of the following is the zero element in the function space of all continuous functions on $[a, b]$?',
    options: [
      'The empty function',
      'The function $f(x) = 1$',
      'The function $f(x) = x$',
      'The function $f(x) = 0$ for all $x$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The zero element in a function space is the function whose value is 0 for every $x$ in its domain. This satisfies $f + 0 = f$ for all functions $f$.',
  },
];
