import type { QuizQuestion } from './types';

export const section47Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A linear differential equation of order $n$ has the form:',
    options: [
      '$P_0(x)y^n + P_1(x)y^{n-1} + \\cdots + P_n(x)y = R(x)$',
      '$P_0(x)y^{(n)} + P_1(x)y^{(n-1)} + \\cdots + P_n(x)y = R(x)$',
      '$y^n + y^{n-1} + \\cdots + y = R(x)$',
      '$y^{(n)} = P(x)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Linear means linear in $y$ and its derivatives $y\', y\'\', \\ldots, y^{(n)}$. The notation $y^{(k)}$ denotes the $k$-th derivative.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Points where the leading coefficient $P_0(x) = 0$ are called:',
    options: [
      'Singular points',
      'Regular points',
      'Critical points',
      'Inflection points',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Singular points are where $P_0(x) = 0$, which can cause complications in the solution theory.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Using operator notation, the equation $y^{(n)} + P_1y^{(n-1)} + \\cdots + P_ny = R$ can be written as:',
    options: [
      '$Dy = R
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The linear operator $L = D^n + P_1D^{n-1} + \\cdots + P_n$ acts on $y$ to give $L(y) = R$.',
  },
      '$L(y) = R
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The linear operator $L = D^n + P_1D^{n-1} + \\cdots + P_n$ acts on $y$ to give $L(y) = R$.',
  },
      '$D^n y = R
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The linear operator $L = D^n + P_1D^{n-1} + \\cdots + P_n$ acts on $y$ to give $L(y) = R$.',
  },
      '$y = L(R)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The linear operator $L = D^n + P_1D^{n-1} + \\cdots + P_n$ acts on $y$ to give $L(y) = R$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The linear operator $L = D^n + P_1D^{n-1} + \\cdots + P_n$ acts on $y$ to give $L(y) = R$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The equation $L(y) = 0$ is called:',
    options: [
      'Nonhomogeneous',
      'Particular',
      'Homogeneous',
      'Characteristic',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The equation is homogeneous when the right-hand side is zero. With $R \\neq 0$, it\'s nonhomogeneous.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The solution space $N(L)$ of an $n$th-order homogeneous linear equation has dimension:',
    options: [
      '$1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Dimensionality Theorem states $\\dim N(L) = n$, so $n$ independent solutions form a basis.',
  },
      '$n-1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Dimensionality Theorem states $\\dim N(L) = n$, so $n$ independent solutions form a basis.',
  },
      'Infinite',
      '$n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Dimensionality Theorem states $\\dim N(L) = n$, so $n$ independent solutions form a basis.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Dimensionality Theorem states $\\dim N(L) = n$, so $n$ independent solutions form a basis.',
  },
];
