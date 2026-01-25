import type { QuizQuestion } from './types';

export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The general form of a first-order linear differential equation is:',
    options: [
      '$y\' + P(x)y = Q(x)$',
      '$y\' = y^2 + P(x)$',
      '$y\'\' + P(x)y\' = 0$',
      '$y\' = P(x)y^2$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A first-order linear equation has the form $y\' + P(x)y = Q(x)$, linear in both $y$ and $y\'$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the first-order linear equation $y\' + P(x)y = Q(x)$ with initial condition $f(a) = b$, Theorem 6.1 guarantees:',
    options: [
      'No solutions exist',
      'Infinitely many solutions',
      'One and only one solution',
      'At most two solutions',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The existence-uniqueness theorem guarantees exactly one solution when $P$ and $Q$ are continuous on an open interval containing $a$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The integrating factor for $y\' + P(x)y = Q(x)$ is:',
    options: [
      '$e^{P(x)}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The integrating factor is $e^{A(x)}$ where $A(x) = \\int P(x)\\,dx$. Multiplying by it makes the left side an exact derivative.',
  },
      '$e^{\\int P(x)\\,dx}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The integrating factor is $e^{A(x)}$ where $A(x) = \\int P(x)\\,dx$. Multiplying by it makes the left side an exact derivative.',
  },
      '$P(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The integrating factor is $e^{A(x)}$ where $A(x) = \\int P(x)\\,dx$. Multiplying by it makes the left side an exact derivative.',
  },
      '$Q(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The integrating factor is $e^{A(x)}$ where $A(x) = \\int P(x)\\,dx$. Multiplying by it makes the left side an exact derivative.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The integrating factor is $e^{A(x)}$ where $A(x) = \\int P(x)\\,dx$. Multiplying by it makes the left side an exact derivative.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For the equation $y\' - 3y = e^{2x}$, the integrating factor is:',
    options: [
      '$e^{3x}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Here $P(x) = -3$, so the integrating factor is $e^{\\int -3\\,dx} = e^{-3x}$.',
  },
      '$3
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Here $P(x) = -3$, so the integrating factor is $e^{\\int -3\\,dx} = e^{-3x}$.',
  },
      '$e^{-3x}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Here $P(x) = -3$, so the integrating factor is $e^{\\int -3\\,dx} = e^{-3x}$.',
  },
      '$e^{2x}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Here $P(x) = -3$, so the integrating factor is $e^{\\int -3\\,dx} = e^{-3x}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Here $P(x) = -3$, so the integrating factor is $e^{\\int -3\\,dx} = e^{-3x}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The solution formula $f(x) = be^{-A(x)} + e^{-A(x)}\\int_a^x Q(t)e^{A(t)}\\,dt$ consists of:',
    options: [
      'Two particular solutions',
      'Two homogeneous solutions',
      'Only the particular solution',
      'The homogeneous solution plus a particular solution',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The first term $be^{-A(x)}$ is the homogeneous solution with initial value $b$; the integral term is a particular solution of the nonhomogeneous equation.',
  },
];
