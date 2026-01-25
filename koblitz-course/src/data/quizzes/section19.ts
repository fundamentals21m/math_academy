import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The elliptic curve discrete log problem (ECDLP) asks: given $P$ and $Q = nP$, find:',
    options: [
      '$n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'ECDLP: Given $Q = nP$, find the scalar $n$.',
  },
      '$P
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'ECDLP: Given $Q = nP$, find the scalar $n$.',
  },
      '$Q
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'ECDLP: Given $Q = nP$, find the scalar $n$.',
  },
      'The curve equation',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'ECDLP: Given $Q = nP$, find the scalar $n$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why does ECC provide equivalent security with smaller keys than RSA?',
    options: [
      'No subexponential attack on ECDLP is known',
      'ECC uses faster algorithms',
      'ECC is newer technology',
      'RSA has more overhead',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Unlike integer DLP, ECDLP has no known subexponential algorithm, requiring smaller keys for same security.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'A 256-bit ECC key provides roughly the same security as how many bits of RSA?',
    correctAnswer: 3072,
    numericRange: { min: 2000, max: 4000, precision: 0 },
    difficulty: 'medium',
    explanation: '256-bit ECC ≈ 3072-bit RSA for 128-bit security level.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In ECDSA, what must be kept secret and unique for each signature?',
    options: [
      'The public key',
      'The message hash',
      'The curve parameters',
      'The random nonce $k
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Reusing or leaking the nonce $k$ allows private key recovery.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Reusing or leaking the nonce $k$ allows private key recovery.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What EC-based key exchange protocol is analogous to Diffie-Hellman?',
    correctAnswer: 'ECDH',
    difficulty: 'easy',
    explanation: 'ECDH (Elliptic Curve Diffie-Hellman) provides key exchange using elliptic curves.',
  },
];
