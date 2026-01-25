import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the six parameters that define secp256k1?',
    options: [
      '$(x, y, z, a, b, c)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'secp256k1 is defined by the prime $p$, curve coefficients $a$ and $b$, generator point $G$, group order $n$, and cofactor $h$.',
  },
      '$(p, a, b, G, n, h)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'secp256k1 is defined by the prime $p$, curve coefficients $a$ and $b$, generator point $G$, group order $n$, and cofactor $h$.',
  },
      '$(d, Q, k, r, s, z)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'secp256k1 is defined by the prime $p$, curve coefficients $a$ and $b$, generator point $G$, group order $n$, and cofactor $h$.',
  },
      '$(m, e, s, R, P, Q)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'secp256k1 is defined by the prime $p$, curve coefficients $a$ and $b$, generator point $G$, group order $n$, and cofactor $h$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'secp256k1 is defined by the prime $p$, curve coefficients $a$ and $b$, generator point $G$, group order $n$, and cofactor $h$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the value of $a$ in secp256k1\'s equation $y^2 = x^3 + ax + b$?',
    options: [
      '$1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'secp256k1 uses $a = 0$, which simplifies the curve equation to $y^2 = x^3 + 7$.',
  },
      '$7
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'secp256k1 uses $a = 0$, which simplifies the curve equation to $y^2 = x^3 + 7$.',
  },
      '$256
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'secp256k1 uses $a = 0$, which simplifies the curve equation to $y^2 = x^3 + 7$.',
  },
      '$0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'secp256k1 uses $a = 0$, which simplifies the curve equation to $y^2 = x^3 + 7$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'secp256k1 uses $a = 0$, which simplifies the curve equation to $y^2 = x^3 + 7$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is secp256k1\'s prime $p = 2^{256} - 2^{32} - 977$ special?',
    options: [
      'It\'s the largest 256-bit prime',
      'It was chosen randomly by the NSA',
      'It\'s a pseudo-Mersenne prime allowing fast modular reduction',
      'It\'s the product of two smaller primes'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The special form (close to a power of 2) allows for ~30% faster modular arithmetic compared to arbitrary primes.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is secp256k1\'s cofactor $h$?',
    correctAnswer: '1',
    difficulty: 'easy',
    explanation: 'secp256k1 has cofactor $h = 1$, the simplest case that avoids small-subgroup attacks.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is $h = 1$ considered ideal for cryptographic curves?',
    options: [
      'All non-identity points have prime order, preventing small-subgroup attacks',
      'It makes the curve larger',
      'It was mandated by NIST',
      'It allows faster computation',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'With $h = 1$, every non-identity point generates the entire group, so there are no small subgroups to exploit.',
  },
];
