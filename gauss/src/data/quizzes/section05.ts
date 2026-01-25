import type { QuizQuestion } from './types';

/**
 * Section 5: Applications to Diophantine Equations
 * Topics: Sum of squares, Pell's equation, three squares theorem, algorithmic methods
 */
export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "A Diophantine equation is a polynomial equation where we seek:",
    options: [
      'Integer solutions',
      'Complex solutions',
      'Real solutions',
      'Rational solutions only',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Diophantine equations are polynomial equations where we seek integer (or sometimes rational) solutions.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'Find integers $x, y$ such that $x^2 + y^2 = 5$. What is $x$ (assuming $x \\le y$)?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 3, precision: 0 },
    difficulty: 'easy',
    explanation: '$5 = 1^2 + 2^2$, so $x = 1$ and $y = 2$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "Pell's equation is:",
    options: [
      '$x^2 - Dy^2 = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: "Pell's equation is $x^2 - Dy^2 = 1$ where $D$ is a positive non-square integer.",
  },
      '$x^2 + y^2 = n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: "Pell's equation is $x^2 - Dy^2 = 1$ where $D$ is a positive non-square integer.",
  },
      '$x^3 + y^3 = z^3
    correctIndex: 1,
    difficulty: 'easy',
    explanation: "Pell's equation is $x^2 - Dy^2 = 1$ where $D$ is a positive non-square integer.",
  },
      '$xy = n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: "Pell's equation is $x^2 - Dy^2 = 1$ where $D$ is a positive non-square integer.",
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: "Pell's equation is $x^2 - Dy^2 = 1$ where $D$ is a positive non-square integer.",
  },
  {
    id: 4,
    type: 'numeric',
    question: "The fundamental solution to $x^2 - 2y^2 = 1$ is $(3, 2)$. Verify: what is $3^2 - 2 \\cdot 2^2$?",
    correctAnswer: 1,
    numericRange: { min: -10, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: '$3^2 - 2 \\cdot 2^2 = 9 - 8 = 1$. Indeed $(3, 2)$ is a solution.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "For $D$ a positive non-square, Pell's equation $x^2 - Dy^2 = 1$ has:",
    options: [
      'No solutions',
      'Exactly one solution',
      'Finitely many solutions',
      'Infinitely many solutions',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: "Pell's equation always has infinitely many solutions, generated from the fundamental solution.",
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Three Squares Theorem says $n$ is a sum of three squares if and only if $n$ is NOT of the form:',
    options: [
      '$4^a(8b + 1)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$n$ is a sum of three squares iff $n$ is not of the form $4^a(8b + 7)$.',
  },
      '$4^a(8b + 7)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$n$ is a sum of three squares iff $n$ is not of the form $4^a(8b + 7)$.',
  },
      '$4^a(8b + 3)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$n$ is a sum of three squares iff $n$ is not of the form $4^a(8b + 7)$.',
  },
      '$4^a(8b + 5)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$n$ is a sum of three squares iff $n$ is not of the form $4^a(8b + 7)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$n$ is a sum of three squares iff $n$ is not of the form $4^a(8b + 7)$.',
  },
  {
    id: 7,
    type: 'numeric',
    question: 'Is $7$ a sum of three squares? (Enter 1 for yes, 0 for no)',
    correctAnswer: 0,
    numericRange: { min: 0, max: 1, precision: 0 },
    difficulty: 'medium',
    explanation: '$7 = 4^0(8 \\cdot 0 + 7)$ is of the excluded form $4^a(8b+7)$, so $7$ is NOT a sum of three squares.',
  },
  {
    id: 8,
    type: 'numeric',
    question: 'Is $6$ a sum of three squares? (Enter 1 for yes, 0 for no)',
    correctAnswer: 1,
    numericRange: { min: 0, max: 1, precision: 0 },
    difficulty: 'medium',
    explanation: '$6 = 1^2 + 1^2 + 2^2$, and $6$ is not of the form $4^a(8b+7)$. So yes, $6$ is a sum of three squares.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: "Lagrange's Four Squares Theorem states that every positive integer is:",
    options: [
      'A sum of three squares',
      'A sum of two squares',
      'A sum of four squares',
      'A perfect square',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Every positive integer can be written as a sum of four squares (some of which may be zero).',
  },
  {
    id: 10,
    type: 'numeric',
    question: 'Express $7$ as a sum of four squares: $7 = a^2 + b^2 + c^2 + d^2$. What is the largest of $a, b, c, d$?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 3, precision: 0 },
    difficulty: 'medium',
    explanation: '$7 = 1^2 + 1^2 + 1^2 + 2^2 = 1 + 1 + 1 + 4$. The largest is $2$.',
  },
];
