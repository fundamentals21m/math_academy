import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In RSA, the public modulus $n$ is:',
    options: [
      'A large prime',
      'A product of two large primes $p \\cdot q
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'RSA modulus $n = pq$ where $p$ and $q$ are large, distinct primes.',
  },
      'Any large integer',
      'A power of 2',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'RSA modulus $n = pq$ where $p$ and $q$ are large, distinct primes.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The RSA decryption exponent $d$ satisfies:',
    options: [
      '$ed \\equiv 1 \\pmod{n}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$d$ is the modular inverse of $e$ mod $\\phi(n)$: $ed \\equiv 1 \\pmod{\\phi(n)}$.',
  },
      '$ed \\equiv 1 \\pmod{\\phi(n)}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$d$ is the modular inverse of $e$ mod $\\phi(n)$: $ed \\equiv 1 \\pmod{\\phi(n)}$.',
  },
      '$e + d = n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$d$ is the modular inverse of $e$ mod $\\phi(n)$: $ed \\equiv 1 \\pmod{\\phi(n)}$.',
  },
      '$e \\cdot d = n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$d$ is the modular inverse of $e$ mod $\\phi(n)$: $ed \\equiv 1 \\pmod{\\phi(n)}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$d$ is the modular inverse of $e$ mod $\\phi(n)$: $ed \\equiv 1 \\pmod{\\phi(n)}$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'If $n = 15$, $e = 3$, and $\\phi(15) = 8$, what is the decryption exponent $d$?',
    correctAnswer: 3,
    numericRange: { min: 1, max: 14, precision: 0 },
    difficulty: 'medium',
    explanation: 'We need $3d \\equiv 1 \\pmod{8}$. Since $3 \\cdot 3 = 9 \\equiv 1 \\pmod{8}$, $d = 3$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The security of RSA relies on the difficulty of:',
    options: [
      'Computing discrete logarithms',
      'Solving systems of linear equations',
      'Factoring large integers',
      'Finding hash collisions',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'RSA security is based on the computational difficulty of factoring $n = pq$.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What function of $n = pq$ determines the RSA private key calculation: $\\phi(n) = (p-1)(q-1)$?',
    correctAnswer: 'Euler',
    difficulty: 'medium',
    explanation: 'Euler\'s totient function $\\phi(n)$ counts integers coprime to $n$.',
  },
];
