import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The discrete logarithm problem asks: given $g, h, p$, find $x$ such that:',
    options: [
      '$g + x \\equiv h \\pmod{p}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'DLP: Given $g^x \\equiv h \\pmod{p}$, find $x$.',
  },
      '$g^x \\equiv h \\pmod{p}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'DLP: Given $g^x \\equiv h \\pmod{p}$, find $x$.',
  },
      '$x^g \\equiv h \\pmod{p}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'DLP: Given $g^x \\equiv h \\pmod{p}$, find $x$.',
  },
      '$gx \\equiv h \\pmod{p}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'DLP: Given $g^x \\equiv h \\pmod{p}$, find $x$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'DLP: Given $g^x \\equiv h \\pmod{p}$, find $x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In Diffie-Hellman key exchange, Alice and Bob share:',
    options: [
      'Their private keys',
      'The prime $p$ and generator $g$ only',
      'The computed shared secret $g^{ab} \\bmod p
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'They publicly share $p$, $g$, and their public values $g^a$, $g^b$. The shared secret $g^{ab}$ is computed privately.',
  },
      'Nothing - it\\'s one-way communication',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'They publicly share $p$, $g$, and their public values $g^a$, $g^b$. The shared secret $g^{ab}$ is computed privately.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'ElGamal encryption is based on:',
    options: [
      'Integer factorization',
      'Discrete logarithm problem',
      'Lattice problems',
      'Error-correcting codes',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'ElGamal\'s security relies on the difficulty of the discrete logarithm problem.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'In a group of prime order $p = 7$, if $g = 3$ is a generator and $3^x \\equiv 5 \\pmod{7}$, what is $x$?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 6, precision: 0 },
    difficulty: 'hard',
    explanation: 'Computing: $3^1=3, 3^2=2, 3^3=6, 3^4=4, 3^5=5 \\pmod{7}$. So $x=5$.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the name of the key exchange protocol where two parties establish a shared secret over an insecure channel?',
    correctAnswer: 'Diffie-Hellman',
    difficulty: 'easy',
    explanation: 'Diffie-Hellman (1976) was the first published public key protocol for key exchange.',
  },
];
