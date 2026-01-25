import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 'sec05-q1',
    type: 'multiple-choice',
    question: 'A complex number $z = a + bi$ has modulus $|z|$ defined as:',
    options: [
      '$\\sqrt{a^2 + b^2}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The modulus (or absolute value) of $z = a + bi$ is $|z| = \\sqrt{a^2 + b^2}$, which represents the distance from $z$ to the origin in the complex plane.',
  },
      '$a + b
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The modulus (or absolute value) of $z = a + bi$ is $|z| = \\sqrt{a^2 + b^2}$, which represents the distance from $z$ to the origin in the complex plane.',
  },
      '$a^2 + b^2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The modulus (or absolute value) of $z = a + bi$ is $|z| = \\sqrt{a^2 + b^2}$, which represents the distance from $z$ to the origin in the complex plane.',
  },
      '$|a| + |b|
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The modulus (or absolute value) of $z = a + bi$ is $|z| = \\sqrt{a^2 + b^2}$, which represents the distance from $z$ to the origin in the complex plane.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The modulus (or absolute value) of $z = a + bi$ is $|z| = \\sqrt{a^2 + b^2}$, which represents the distance from $z$ to the origin in the complex plane.',
  },
  {
    id: 'sec05-q2',
    type: 'multiple-choice',
    question: 'For complex numbers $z$ and $w$, which identity holds?',
    options: [
      '$|z + w| = |z| + |w|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The modulus is multiplicative: $|zw| = |z| \\cdot |w|$. The triangle inequality gives $|z + w| \\leq |z| + |w|$ (not equality in general).',
  },
      '$|zw| = |z| \\cdot |w|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The modulus is multiplicative: $|zw| = |z| \\cdot |w|$. The triangle inequality gives $|z + w| \\leq |z| + |w|$ (not equality in general).',
  },
      '$|z/w| = |z| - |w|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The modulus is multiplicative: $|zw| = |z| \\cdot |w|$. The triangle inequality gives $|z + w| \\leq |z| + |w|$ (not equality in general).',
  },
      '$|z - w| = ||z| - |w||
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The modulus is multiplicative: $|zw| = |z| \\cdot |w|$. The triangle inequality gives $|z + w| \\leq |z| + |w|$ (not equality in general).',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The modulus is multiplicative: $|zw| = |z| \\cdot |w|$. The triangle inequality gives $|z + w| \\leq |z| + |w|$ (not equality in general).',
  },
  {
    id: 'sec05-q3',
    type: 'multiple-choice',
    question: 'The complex conjugate of $z = a + bi$ is $\\bar{z} = a - bi$. What is $z \\cdot \\bar{z}$?',
    options: [
      '$a^2 - b^2$',
      '$2bi$',
      '$2a$',
      '$a^2 + b^2$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$z \\cdot \\bar{z} = (a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2i^2 = a^2 + b^2 = |z|^2$.',
  },
  {
    id: 'sec05-q4',
    type: 'multiple-choice',
    question: 'The triangle inequality for complex numbers states:',
    options: [
      '$|z + w| \\geq |z| + |w|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The triangle inequality states $|z + w| \\leq |z| + |w|$. Equality holds if and only if one of $z, w$ is a nonnegative real multiple of the other.',
  },
      '$|z + w| = |z| + |w|$ if and only if $z = w
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The triangle inequality states $|z + w| \\leq |z| + |w|$. Equality holds if and only if one of $z, w$ is a nonnegative real multiple of the other.',
  },
      '$|z + w| \\leq |z| + |w|
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The triangle inequality states $|z + w| \\leq |z| + |w|$. Equality holds if and only if one of $z, w$ is a nonnegative real multiple of the other.',
  },
      '$|z - w| \\geq |z| - |w|
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The triangle inequality states $|z + w| \\leq |z| + |w|$. Equality holds if and only if one of $z, w$ is a nonnegative real multiple of the other.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The triangle inequality states $|z + w| \\leq |z| + |w|$. Equality holds if and only if one of $z, w$ is a nonnegative real multiple of the other.',
  },
  {
    id: 'sec05-q5',
    type: 'multiple-choice',
    question: 'If $|z| = 1$, then $z^{-1}$ equals:',
    options: [
      '$z$',
      '$\\bar{z}$',
      '$-z$',
      '$1/\\bar{z}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $z \\cdot \\bar{z} = |z|^2 = 1$ when $|z| = 1$, we have $z^{-1} = \\bar{z}$. In general, $z^{-1} = \\bar{z}/|z|^2$.',
  },
];
