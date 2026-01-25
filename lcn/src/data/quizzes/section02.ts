import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In Pay-to-Contract, what is the output of $\\text{P2C}_{\\text{Commit}}(m; P)$?',
    options: [
      'A hash value',
      'A group element',
      'A scalar',
      'A bit string',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'P2C outputs a group element: $P + t \\cdot G$ where $t = H_{\\text{P2C}}(P, m)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $sk \\cdot G = P$, what is the discrete log of $\\text{P2C}_{\\text{Commit}}(m; P)$?',
    options: [
      '$sk + H_{\\text{P2C}}(P, m)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The tweaked secret key is $sk + t$ where $t = H_{\\text{P2C}}(P, m)$, giving discrete log of $P + tG$.',
  },
      '$sk
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The tweaked secret key is $sk + t$ where $t = H_{\\text{P2C}}(P, m)$, giving discrete log of $P + tG$.',
  },
      '$H_{\\text{P2C}}(P, m)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The tweaked secret key is $sk + t$ where $t = H_{\\text{P2C}}(P, m)$, giving discrete log of $P + tG$.',
  },
      '$sk \\cdot H_{\\text{P2C}}(P, m)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The tweaked secret key is $sk + t$ where $t = H_{\\text{P2C}}(P, m)$, giving discrete log of $P + tG$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The tweaked secret key is $sk + t$ where $t = H_{\\text{P2C}}(P, m)$, giving discrete log of $P + tG$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Pay-to-Contract is proven binding in what model?',
    options: [
      'The generic group model',
      'The standard model',
      'The algebraic group model',
      'The random oracle model',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The binding proof treats $H_{\\text{P2C}}$ as a random oracle to bound collision probability.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the binding proof for P2C, the collision probability is bounded by:',
    options: [
      '$1/p
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'With $q$ queries and $q^2$ pairs, union bound gives collision probability $\\leq q^2/p$.',
  },
      '$q/p
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'With $q$ queries and $q^2$ pairs, union bound gives collision probability $\\leq q^2/p$.',
  },
      '$2^{-\\lambda}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'With $q$ queries and $q^2$ pairs, union bound gives collision probability $\\leq q^2/p$.',
  },
      '$q^2/p
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'With $q$ queries and $q^2$ pairs, union bound gives collision probability $\\leq q^2/p$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'With $q$ queries and $q^2$ pairs, union bound gives collision probability $\\leq q^2/p$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In Bitcoin Taproot, P2C is used to:',
    options: [
      'Commit a script tree to a public key',
      'Hash transaction data',
      'Generate random numbers',
      'Verify signatures',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taproot uses P2C to commit a script tree to a public key, enabling both key-path and script-path spending.',
  },
  {
    id: 6,
    type: 'text',
    question: 'In the P2C formula $P + t \\cdot G$, what does $t$ equal?',
    correctAnswer: 'H_P2C(P,m)',
    difficulty: 'hard',
    explanation: 'The tweak $t$ is computed as $H_{\\text{P2C}}(P, m)$, the hash of the public point and message.',
  },
];
