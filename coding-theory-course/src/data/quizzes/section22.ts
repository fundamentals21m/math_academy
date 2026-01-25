import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A code $C$ is self-dual if:',
    options: [
      '$C \\cap C^\\perp = \\{0\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A code is self-dual if it equals its dual: $C = C^\\perp$. This implies $\\dim(C) = n/2$, so self-dual codes only exist when $n$ is even.',
  },
      '$C \\subseteq C^\\perp
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A code is self-dual if it equals its dual: $C = C^\\perp$. This implies $\\dim(C) = n/2$, so self-dual codes only exist when $n$ is even.',
  },
      '$C^\\perp = \\{0\\}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A code is self-dual if it equals its dual: $C = C^\\perp$. This implies $\\dim(C) = n/2$, so self-dual codes only exist when $n$ is even.',
  },
      '$C = C^\\perp
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A code is self-dual if it equals its dual: $C = C^\\perp$. This implies $\\dim(C) = n/2$, so self-dual codes only exist when $n$ is even.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A code is self-dual if it equals its dual: $C = C^\\perp$. This implies $\\dim(C) = n/2$, so self-dual codes only exist when $n$ is even.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a binary cyclic code with generator polynomial $g(x)$, the code is self-dual if and only if:',
    options: [
      '$g(x) = h(x)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The dual of a cyclic code with generator $g(x)$ has generator $h^*(x) = x^k h(1/x)$ (the reciprocal polynomial). Self-duality requires these to match appropriately.',
  },
      '$g(x) = x^{n/2} h^*(1/x)$ (up to scalar)',
      '$g(x)$ divides $h^*(x)$ and $h^*(x)$ divides $g(x)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The dual of a cyclic code with generator $g(x)$ has generator $h^*(x) = x^k h(1/x)$ (the reciprocal polynomial). Self-duality requires these to match appropriately.',
  },
      '$g(x) h(x) = 1
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The dual of a cyclic code with generator $g(x)$ has generator $h^*(x) = x^k h(1/x)$ (the reciprocal polynomial). Self-duality requires these to match appropriately.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The dual of a cyclic code with generator $g(x)$ has generator $h^*(x) = x^k h(1/x)$ (the reciprocal polynomial). Self-duality requires these to match appropriately.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'A self-dual code of length $n$ must have dimension $k$ equal to what fraction of $n$?',
    correctAnswer: 0.5,
    numericRange: { min: 0, max: 1, precision: 2 },
    difficulty: 'easy',
    explanation: 'For a self-dual code, $C = C^\\perp$. Since $\\dim(C) + \\dim(C^\\perp) = n$, we get $2k = n$, so $k = n/2$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The extended binary Golay code $[24, 12, 8]$ is:',
    options: [
      'Self-dual',
      'Self-orthogonal but not self-dual',
      'Neither self-orthogonal nor self-dual',
      'The dual of a Hamming code',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The extended binary Golay code $[24, 12, 8]$ is one of the most famous self-dual codes. It has remarkable properties and is related to the Mathieu group $M_{24}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a binary self-dual cyclic code to exist of length $n$, which condition on $n$ is necessary?',
    options: [
      '$n$ must be odd',
      '$n$ must be even',
      '$n$ must be a power of 2',
      '$n$ must be prime',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Self-dual codes require $k = n/2$, so $n$ must be even. For cyclic codes, there are additional constraints from the factorization of $x^n - 1$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The reciprocal polynomial of $g(x) = x^3 + x + 1$ is:',
    options: [
      '$1 + x + x^3
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The reciprocal of $g(x) = x^3 + x + 1$ is $g^*(x) = x^3 g(1/x) = x^3(1/x^3 + 1/x + 1) = 1 + x^2 + x^3 = x^3 + x^2 + 1$.',
  },
      '$x^3 + x + 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The reciprocal of $g(x) = x^3 + x + 1$ is $g^*(x) = x^3 g(1/x) = x^3(1/x^3 + 1/x + 1) = 1 + x^2 + x^3 = x^3 + x^2 + 1$.',
  },
      '$x^3 + x^2 + x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The reciprocal of $g(x) = x^3 + x + 1$ is $g^*(x) = x^3 g(1/x) = x^3(1/x^3 + 1/x + 1) = 1 + x^2 + x^3 = x^3 + x^2 + 1$.',
  },
      '$x^3 + x^2 + 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The reciprocal of $g(x) = x^3 + x + 1$ is $g^*(x) = x^3 g(1/x) = x^3(1/x^3 + 1/x + 1) = 1 + x^2 + x^3 = x^3 + x^2 + 1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The reciprocal of $g(x) = x^3 + x + 1$ is $g^*(x) = x^3 g(1/x) = x^3(1/x^3 + 1/x + 1) = 1 + x^2 + x^3 = x^3 + x^2 + 1$.',
  },
];
