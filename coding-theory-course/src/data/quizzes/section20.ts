import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A cyclic code $C$ is said to have the invariance property under a permutation $\\pi$ if:',
    options: [
      '$\\pi$ maps every codeword to another codeword in $C
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A code has invariance under $\\pi$ if applying $\\pi$ to any codeword produces another codeword in the same code. This means $\\pi(C) = C$.',
  },
      '$\\pi$ maps every codeword to itself',
      '$\\pi$ fixes the generator polynomial',
      '$\\pi$ is the identity permutation',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A code has invariance under $\\pi$ if applying $\\pi$ to any codeword produces another codeword in the same code. This means $\\pi(C) = C$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'Consider the binary cyclic code with $g(x) = x^2 + x + 1$ dividing $x^3 - 1$. What is the dimension of this code?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 3, precision: 0 },
    difficulty: 'easy',
    explanation: 'The dimension is $k = n - \\deg(g) = 3 - 2 = 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The cyclic shift permutation $\\sigma: (c_0, c_1, \\ldots, c_{n-1}) \\mapsto (c_{n-1}, c_0, \\ldots, c_{n-2})$ generates a group of order:',
    options: [
      '$n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The cyclic shift $\\sigma$ has order $n$ since $\\sigma^n$ returns each codeword to its original position. The group generated is $\\mathbb{Z}_n$.',
  },
      '$n - 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The cyclic shift $\\sigma$ has order $n$ since $\\sigma^n$ returns each codeword to its original position. The group generated is $\\mathbb{Z}_n$.',
  },
      '$n + 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The cyclic shift $\\sigma$ has order $n$ since $\\sigma^n$ returns each codeword to its original position. The group generated is $\\mathbb{Z}_n$.',
  },
      '$2n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The cyclic shift $\\sigma$ has order $n$ since $\\sigma^n$ returns each codeword to its original position. The group generated is $\\mathbb{Z}_n$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The cyclic shift $\\sigma$ has order $n$ since $\\sigma^n$ returns each codeword to its original position. The group generated is $\\mathbb{Z}_n$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For the $[7, 4, 3]$ Hamming code as a cyclic code, the automorphism group includes:',
    options: [
      'Only cyclic shifts',
      'Only the identity',
      'Cyclic shifts and the Frobenius automorphism',
      'The full symmetric group $S_7
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The automorphism group of the $[7,4,3]$ cyclic Hamming code includes the cyclic shifts (order 7) and the Frobenius map $x \\mapsto x^2 \\pmod{7}$, forming a group of order 21.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The automorphism group of the $[7,4,3]$ cyclic Hamming code includes the cyclic shifts (order 7) and the Frobenius map $x \\mapsto x^2 \\pmod{7}$, forming a group of order 21.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For a binary cyclic $[15, 5]$ code, how many codewords does it contain?',
    correctAnswer: 32,
    numericRange: { min: 1, max: 1000, precision: 0 },
    difficulty: 'medium',
    explanation: 'A code with dimension $k = 5$ over $\\mathbb{F}_2$ contains $2^k = 2^5 = 32$ codewords.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If a cyclic code $C$ is invariant under the multiplier $\\mu_a: i \\mapsto ai \\pmod{n}$, then for any codeword $c(x)$:',
    options: [
      '$c(ax) \\in C
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The multiplier $\\mu_a$ acts on polynomials by $c(x) \\mapsto c(x^a)$. If $C$ is invariant under $\\mu_a$, then $c(x^a) \\in C$ for all $c(x) \\in C$.',
  },
      '$x^a c(x) \\in C
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The multiplier $\\mu_a$ acts on polynomials by $c(x) \\mapsto c(x^a)$. If $C$ is invariant under $\\mu_a$, then $c(x^a) \\in C$ for all $c(x) \\in C$.',
  },
      '$c(x^a) \\in C
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The multiplier $\\mu_a$ acts on polynomials by $c(x) \\mapsto c(x^a)$. If $C$ is invariant under $\\mu_a$, then $c(x^a) \\in C$ for all $c(x) \\in C$.',
  },
      '$c(x)^a \\in C
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The multiplier $\\mu_a$ acts on polynomials by $c(x) \\mapsto c(x^a)$. If $C$ is invariant under $\\mu_a$, then $c(x^a) \\in C$ for all $c(x) \\in C$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The multiplier $\\mu_a$ acts on polynomials by $c(x) \\mapsto c(x^a)$. If $C$ is invariant under $\\mu_a$, then $c(x^a) \\in C$ for all $c(x) \\in C$.',
  },
];
