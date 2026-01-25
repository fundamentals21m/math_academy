import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The binary Golay code $\\mathcal{G}_{23}$ has what parameters?',
    options: [
      '$[24, 12, 8]
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The binary Golay code $\\mathcal{G}_{23}$ is a $[23, 12, 7]$ code, meaning it has length 23, dimension 12, and minimum distance 7.',
  },
      '$[23, 12, 7]
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The binary Golay code $\\mathcal{G}_{23}$ is a $[23, 12, 7]$ code, meaning it has length 23, dimension 12, and minimum distance 7.',
  },
      '$[23, 11, 7]
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The binary Golay code $\\mathcal{G}_{23}$ is a $[23, 12, 7]$ code, meaning it has length 23, dimension 12, and minimum distance 7.',
  },
      '$[23, 12, 5]
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The binary Golay code $\\mathcal{G}_{23}$ is a $[23, 12, 7]$ code, meaning it has length 23, dimension 12, and minimum distance 7.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The binary Golay code $\\mathcal{G}_{23}$ is a $[23, 12, 7]$ code, meaning it has length 23, dimension 12, and minimum distance 7.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A quadratic residue (QR) code of length $n$ over $\\mathbb{F}_q$ exists when:',
    options: [
      '$n$ is any odd integer',
      '$n = q - 1$ for any prime power $q
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'QR codes of length $n$ over $\\mathbb{F}_q$ exist when $n$ is an odd prime and $q$ is a quadratic residue modulo $n$, i.e., $q$ is a non-zero square in $\\mathbb{Z}_n^*$.',
  },
      '$n$ is a power of 2',
      '$n$ is prime and $q$ is a quadratic residue modulo $n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'QR codes of length $n$ over $\\mathbb{F}_q$ exist when $n$ is an odd prime and $q$ is a quadratic residue modulo $n$, i.e., $q$ is a non-zero square in $\\mathbb{Z}_n^*$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'QR codes of length $n$ over $\\mathbb{F}_q$ exist when $n$ is an odd prime and $q$ is a quadratic residue modulo $n$, i.e., $q$ is a non-zero square in $\\mathbb{Z}_n^*$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'How many errors can the binary Golay code $\\mathcal{G}_{23}$ correct?',
    correctAnswer: 3,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'A code with minimum distance $d$ can correct up to $\\lfloor (d-1)/2 \\rfloor$ errors. For $\\mathcal{G}_{23}$ with $d=7$, this is $\\lfloor 6/2 \\rfloor = 3$ errors.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The generator polynomial of a binary QR code is formed using:',
    options: [
      'Any irreducible polynomial of appropriate degree',
      'The product of all cyclotomic polynomials',
      'The product of minimal polynomials of quadratic residues',
      'A primitive polynomial over the field',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The generator polynomial of a QR code is $g(x) = \\prod_{i \\in Q} (x - \\alpha^i)$ where $Q$ is the set of quadratic residues modulo $n$ and $\\alpha$ is a primitive $n$-th root of unity.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For a $[23, 12, 7]$ binary Golay code, what is the dimension of the dual code?',
    correctAnswer: 11,
    numericRange: { min: 0, max: 23, precision: 0 },
    difficulty: 'easy',
    explanation: 'For an $[n, k, d]$ code, the dual code has dimension $n - k$. For the Golay code with $n=23$ and $k=12$, the dual has dimension $23 - 12 = 11$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which property makes the binary Golay code particularly remarkable?',
    options: [
      'It is a perfect code',
      'It is the only cyclic code',
      'It has the maximum possible rate',
      'It has distance equal to its length',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The binary Golay code $\\mathcal{G}_{23}$ is one of only two families of non-trivial perfect codes (along with Hamming codes). A perfect code achieves the Hamming bound with equality.',
  },
];
