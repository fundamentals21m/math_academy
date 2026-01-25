import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An element $e$ in a ring is called idempotent if:',
    options: [
      '$e^2 = 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An idempotent element satisfies $e^2 = e$. In the context of cyclic codes, idempotents generate cyclic codes as ideals.',
  },
      '$e + e = e
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An idempotent element satisfies $e^2 = e$. In the context of cyclic codes, idempotents generate cyclic codes as ideals.',
  },
      '$e^{-1} = e
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An idempotent element satisfies $e^2 = e$. In the context of cyclic codes, idempotents generate cyclic codes as ideals.',
  },
      '$e^2 = e
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An idempotent element satisfies $e^2 = e$. In the context of cyclic codes, idempotents generate cyclic codes as ideals.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An idempotent element satisfies $e^2 = e$. In the context of cyclic codes, idempotents generate cyclic codes as ideals.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the ring $\\mathbb{F}_q[x]/(x^n - 1)$ where $\\gcd(n, q) = 1$, every cyclic code has:',
    options: [
      'A unique generator polynomial only',
      'Both a unique generator polynomial and a unique idempotent generator',
      'A unique idempotent generator only',
      'Neither a unique generator nor a unique idempotent'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $\\gcd(n, q) = 1$, each cyclic code has both a unique monic generator polynomial $g(x)$ dividing $x^n - 1$ and a unique idempotent generator $e(x)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $e(x)$ is the idempotent generator of a cyclic code $C$, then $1 - e(x)$ is:',
    options: [
      'The idempotent generator of the same code $C
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $e^2 = e$, then $(1-e)^2 = 1 - 2e + e^2 = 1 - 2e + e = 1 - e$, so $1-e$ is also idempotent. It generates the complementary ideal.',
  },
      'The idempotent generator of the complementary code',
      'The idempotent generator of the dual code $C^\\perp
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $e^2 = e$, then $(1-e)^2 = 1 - 2e + e^2 = 1 - 2e + e = 1 - e$, so $1-e$ is also idempotent. It generates the complementary ideal.',
  },
      'Not an idempotent',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $e^2 = e$, then $(1-e)^2 = 1 - 2e + e^2 = 1 - 2e + e = 1 - e$, so $1-e$ is also idempotent. It generates the complementary ideal.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The relationship between the idempotent $e(x)$ and generator polynomial $g(x)$ of a cyclic code is:',
    options: [
      '$e(x) = g(x)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The idempotent $e(x)$ satisfies $e(x) \\equiv 1 \\pmod{g(x)}$ and $e(x) \\equiv 0 \\pmod{h(x)}$, where $h(x)$ is the check polynomial. This follows from the Chinese Remainder Theorem.',
  },
      '$e(x) + g(x) = x^n - 1
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The idempotent $e(x)$ satisfies $e(x) \\equiv 1 \\pmod{g(x)}$ and $e(x) \\equiv 0 \\pmod{h(x)}$, where $h(x)$ is the check polynomial. This follows from the Chinese Remainder Theorem.',
  },
      '$e(x) \\equiv 1 \\pmod{g(x)}$ and $e(x) \\equiv 0 \\pmod{h(x)}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The idempotent $e(x)$ satisfies $e(x) \\equiv 1 \\pmod{g(x)}$ and $e(x) \\equiv 0 \\pmod{h(x)}$, where $h(x)$ is the check polynomial. This follows from the Chinese Remainder Theorem.',
  },
      '$e(x) = g(x) \\cdot h(x)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The idempotent $e(x)$ satisfies $e(x) \\equiv 1 \\pmod{g(x)}$ and $e(x) \\equiv 0 \\pmod{h(x)}$, where $h(x)$ is the check polynomial. This follows from the Chinese Remainder Theorem.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The idempotent $e(x)$ satisfies $e(x) \\equiv 1 \\pmod{g(x)}$ and $e(x) \\equiv 0 \\pmod{h(x)}$, where $h(x)$ is the check polynomial. This follows from the Chinese Remainder Theorem.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'In $\\mathbb{F}_2[x]/(x^3 - 1)$ where $x^3 - 1 = (x-1)(x^2+x+1)$, how many distinct idempotents are there?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'By CRT, $\\mathbb{F}_2[x]/(x^3-1) \\cong \\mathbb{F}_2 \\times \\mathbb{F}_4$. Each component contributes one idempotent choice (0 or 1 for $\\mathbb{F}_2$, etc.), giving $2 \\times 2 = 4$ idempotents.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Primitive idempotents in $\\mathbb{F}_q[x]/(x^n - 1)$ correspond to:',
    options: [
      'Irreducible factors of $x^n - 1$',
      'The trivial code',
      'The entire ring',
      'Reducible factors of $x^n - 1$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Primitive idempotents are non-zero idempotents that cannot be written as a sum of two non-zero orthogonal idempotents. They correspond bijectively to the irreducible factors of $x^n - 1$.',
  },
];
