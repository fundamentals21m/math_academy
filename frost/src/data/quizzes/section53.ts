import type { QuizQuestion } from './types';

export const section53Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the Lagrange coefficient $\\lambda_i$ used for in FROST signing?',
    options: [
      'To encrypt the message',
      'To verify the public key',
      'To interpolate secret shares back to the full secret at a specific point',
      'To generate new random nonces',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Lagrange coefficients allow reconstruction of a polynomial (and hence the secret) from $t$ shares by interpolation: $\\lambda_i = \\prod_{j \\neq i} \\frac{x_j}{x_j - x_i}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Given signers with indices $\\{1, 3, 4\\}$ and threshold $t = 2$, what is $\\lambda_1$ evaluated at $x = 0$?',
    options: [
      '$\\frac{3 \\cdot 4}{(3-1)(4-1)} = 2
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\lambda_1 = \\frac{(0-3)(0-4)}{(1-3)(1-4)} = \\frac{(-3)(-4)}{(-2)(-3)} = \\frac{12}{6} = 2$',
  },
      '$\\frac{(-3)(-4)}{(-3-(-1))(-4-(-1))} = 2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\lambda_1 = \\frac{(0-3)(0-4)}{(1-3)(1-4)} = \\frac{(-3)(-4)}{(-2)(-3)} = \\frac{12}{6} = 2$',
  },
      '$\\frac{3 \\cdot 4}{(1-3)(1-4)} = \\frac{12}{6} = 2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\lambda_1 = \\frac{(0-3)(0-4)}{(1-3)(1-4)} = \\frac{(-3)(-4)}{(-2)(-3)} = \\frac{12}{6} = 2$',
  },
      '$\\frac{3 \\cdot 4}{(3-1)(4-1)} = \\frac{12}{6} = 2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\lambda_1 = \\frac{(0-3)(0-4)}{(1-3)(1-4)} = \\frac{(-3)(-4)}{(-2)(-3)} = \\frac{12}{6} = 2$',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\lambda_1 = \\frac{(0-3)(0-4)}{(1-3)(1-4)} = \\frac{(-3)(-4)}{(-2)(-3)} = \\frac{12}{6} = 2$',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why must Lagrange coefficient computation be done in modular arithmetic for FROST?',
    options: [
      'To make computation faster',
      'To avoid negative numbers',
      'Because the scalar field $\\mathbb{Z}_q$ requires all operations modulo $q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'All scalar operations in FROST occur in $\\mathbb{Z}_q$. Division becomes multiplication by the modular inverse, ensuring algebraic consistency.',
  },
      'Because floating point arithmetic is imprecise',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'All scalar operations in FROST occur in $\\mathbb{Z}_q$. Division becomes multiplication by the modular inverse, ensuring algebraic consistency.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What happens if two signers accidentally use the same index in FROST?',
    options: [
      'Lagrange interpolation fails due to division by zero',
      'The signature is twice as secure',
      'The protocol automatically reassigns indices',
      'Nothing, indices do not matter',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $x_i = x_j$ for $i \\neq j$, the Lagrange formula contains $(x_j - x_i) = 0$ in a denominator, causing division by zero.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For efficiency, when should Lagrange coefficients be precomputed?',
    options: [
      'Never, they must always be computed fresh',
      'When the signing group is known in advance and fixed',
      'After the signature is complete',
      'Only during key generation',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When the same subset of signers repeatedly signs, their Lagrange coefficients remain constant and can be cached to avoid redundant computation.',
  },
];
