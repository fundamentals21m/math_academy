import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which property is NOT required for an abelian group $(G, +)$?',
    options: [
      'Existence of an identity element',
      'Existence of inverses for each element',
      'Commutativity: $g_1 + g_2 = g_2 + g_1$',
      'Divisibility: any element can be divided by any non-zero element',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'An abelian group requires: identity, inverses, associativity, and commutativity. Divisibility is not a group property - groups have multiplication (repeated addition) but not general division.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the notation $[s]G$ represent in elliptic curve cryptography?',
    options: [
      'The scalar $s$ encoded as a point',
      'The discrete logarithm of $G$ with base $s
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$[s]G$ denotes scalar multiplication: $[s]G = \\underbrace{G + G + \\cdots + G}_{s \\text{ times}}$. The bracket notation emphasizes that $s$ is a scalar and $G$ is a group element.',
  },
      'Scalar multiplication: $G$ added to itself $s$ times',
      'A hash of $s$ concatenated with $G
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$[s]G$ denotes scalar multiplication: $[s]G = \\underbrace{G + G + \\cdots + G}_{s \\text{ times}}$. The bracket notation emphasizes that $s$ is a scalar and $G$ is a group element.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$[s]G$ denotes scalar multiplication: $[s]G = \\underbrace{G + G + \\cdots + G}_{s \\text{ times}}$. The bracket notation emphasizes that $s$ is a scalar and $G$ is a group element.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the Discrete Logarithm Problem in elliptic curves?',
    options: [
      'Given $s$, computing $Y = [s]G$ is hard',
      'Given $Y = [s]G$, computing $s$ is hard',
      'Given $G$, finding any point on the curve is hard',
      'Given two points, computing their sum is hard',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Discrete Logarithm Problem states that given $Y = [s]G$, computing $s$ is computationally infeasible. This is the one-way function that secures elliptic curve cryptography.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which equation demonstrates the linearity property that makes threshold signatures possible?',
    options: [
      '$[s_1]G + [s_2]G = [s_1 + s_2]G
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The linearity property $[s_1]G + [s_2]G = [s_1 + s_2]G$ is fundamental to threshold signatures. It allows combining partial computations from multiple parties without revealing individual secrets.',
  },
      '$[s_1]G \\cdot [s_2]G = [s_1 \\cdot s_2]G
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The linearity property $[s_1]G + [s_2]G = [s_1 + s_2]G$ is fundamental to threshold signatures. It allows combining partial computations from multiple parties without revealing individual secrets.',
  },
      '$[s_1 + s_2]G = [s_1]G \\cdot [s_2]G
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The linearity property $[s_1]G + [s_2]G = [s_1 + s_2]G$ is fundamental to threshold signatures. It allows combining partial computations from multiple parties without revealing individual secrets.',
  },
      '$[s]G + [s]G = [s^2]G
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The linearity property $[s_1]G + [s_2]G = [s_1 + s_2]G$ is fundamental to threshold signatures. It allows combining partial computations from multiple parties without revealing individual secrets.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The linearity property $[s_1]G + [s_2]G = [s_1 + s_2]G$ is fundamental to threshold signatures. It allows combining partial computations from multiple parties without revealing individual secrets.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In Bitcoin\'s secp256k1 curve, approximately how many operations would be needed to solve the discrete log problem?',
    options: [
      '$2^{128}$ operations',
      '$2^{64}$ operations',
      '$2^{512}$ operations',
      '$2^{256}$ operations',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For secp256k1, no known algorithm can compute the discrete log in less than approximately $2^{128}$ operations, making it computationally infeasible with current technology.',
  },
];
