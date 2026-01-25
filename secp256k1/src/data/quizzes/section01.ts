import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the general form of an elliptic curve equation?',
    options: [
      '$y = x^2 + ax + b
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Elliptic curves have the Weierstrass form $y^2 = x^3 + ax + b$, which is cubic in $x$ and quadratic in $y$.',
  },
      '$y^3 = x^2 + ax + b
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Elliptic curves have the Weierstrass form $y^2 = x^3 + ax + b$, which is cubic in $x$ and quadratic in $y$.',
  },
      '$y^2 = x^2 + ax + b
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Elliptic curves have the Weierstrass form $y^2 = x^3 + ax + b$, which is cubic in $x$ and quadratic in $y$.',
  },
      '$y^2 = x^3 + ax + b
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Elliptic curves have the Weierstrass form $y^2 = x^3 + ax + b$, which is cubic in $x$ and quadratic in $y$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Elliptic curves have the Weierstrass form $y^2 = x^3 + ax + b$, which is cubic in $x$ and quadratic in $y$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How is point addition defined geometrically?',
    options: [
      'Draw a line through two points, find the third intersection, reflect over x-axis',
      'Add the coordinates directly: $(x_1 + x_2, y_1 + y_2)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'To add $P + Q$: draw a line through $P$ and $Q$, find where it intersects the curve again, then reflect that point over the x-axis.',
  },
      'Compute the midpoint of the two points',
      'Multiply the coordinates together',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'To add $P + Q$: draw a line through $P$ and $Q$, find where it intersects the curve again, then reflect that point over the x-axis.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is point doubling ($P + P$)?',
    options: [
      'Not defined for elliptic curves',
      'The reflection of $P$ over the x-axis',
      'Adding $P$ to itself using the tangent line at $P$',
      'The point $(2x, 2y)$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Point doubling uses the tangent line at $P$ instead of a secant. The tangent intersects the curve at exactly one other point, which is then reflected.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What point serves as the identity element in elliptic curve arithmetic? (Use the letter O)',
    correctAnswer: 'O',
    difficulty: 'easy',
    explanation: 'The "point at infinity" $\\mathcal{O}$ is the identity element: $P + \\mathcal{O} = P$ for any point $P$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is scalar multiplication ($nP$) on an elliptic curve?',
    options: [
      'Multiplying the coordinates by $n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Scalar multiplication $nP$ means $P + P + \\ldots + P$ ($n$ times). It\'s efficiently computed using the double-and-add algorithm.',
  },
      'Adding $P$ to itself $n$ times',
      'Finding the $n$th root of $P
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Scalar multiplication $nP$ means $P + P + \\ldots + P$ ($n$ times). It\'s efficiently computed using the double-and-add algorithm.',
  },
      'Dividing the point by $n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Scalar multiplication $nP$ means $P + P + \\ldots + P$ ($n$ times). It\'s efficiently computed using the double-and-add algorithm.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Scalar multiplication $nP$ means $P + P + \\ldots + P$ ($n$ times). It\'s efficiently computed using the double-and-add algorithm.',
  },
];
