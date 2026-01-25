import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'For a binary QR code of length $n = 7$, what is the dimension $k$ of the code?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 7, precision: 0 },
    difficulty: 'easy',
    explanation: 'The binary QR code of length 7 has dimension $k = (n+1)/2 = (7+1)/2 = 4$. This is actually the $[7, 4, 3]$ Hamming code.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The binary QR code of length 7 is equivalent to which well-known code?',
    options: [
      'The repetition code',
      'The $[7, 4, 3]$ Hamming code',
      'The $[8, 4, 4]$ extended Hamming code',
      'The simplex code',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The binary QR code of length 7 is the $[7, 4, 3]$ Hamming code. This demonstrates the connection between QR codes and other important code families.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'For the ternary Golay code (QR code over $\\mathbb{F}_3$ of length 11), what is its minimum distance?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 11, precision: 0 },
    difficulty: 'medium',
    explanation: 'The ternary Golay code is an $[11, 6, 5]$ code over $\\mathbb{F}_3$, making it a perfect 2-error-correcting code.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When computing the generator polynomial of a QR code, the roots are:',
    options: [
      'Primitive $n$-th roots of unity corresponding to quadratic residues',
      'Roots of any irreducible polynomial',
      'All $n$-th roots of unity',
      'Only the primitive element $\\alpha
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The generator polynomial $g(x)$ of a QR code has roots $\\alpha^i$ where $i$ ranges over the quadratic residues modulo $n$, and $\\alpha$ is a primitive $n$-th root of unity.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The generator polynomial $g(x)$ of a QR code has roots $\\alpha^i$ where $i$ ranges over the quadratic residues modulo $n$, and $\\alpha$ is a primitive $n$-th root of unity.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'The extended ternary Golay code has parameters $[12, 6, d]$. What is $d$?',
    correctAnswer: 6,
    numericRange: { min: 0, max: 12, precision: 0 },
    difficulty: 'easy',
    explanation: 'The extended ternary Golay code has parameters $[12, 6, 6]$. Extending the $[11, 6, 5]$ code increases the minimum distance from 5 to 6.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In constructing the binary QR code of length 23, which field extension is needed to find a primitive 23rd root of unity?',
    options: [
      '$\\mathbb{F}_{2^{23}}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A primitive 23rd root of unity exists in $\\mathbb{F}_{2^m}$ where $m$ is the multiplicative order of 2 modulo 23. Since $2^{11} \\equiv 1 \\pmod{23}$, we need $\\mathbb{F}_{2^{11}}$.',
  },
      '$\\mathbb{F}_{2^{11}}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A primitive 23rd root of unity exists in $\\mathbb{F}_{2^m}$ where $m$ is the multiplicative order of 2 modulo 23. Since $2^{11} \\equiv 1 \\pmod{23}$, we need $\\mathbb{F}_{2^{11}}$.',
  },
      '$\\mathbb{F}_{2^{12}}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A primitive 23rd root of unity exists in $\\mathbb{F}_{2^m}$ where $m$ is the multiplicative order of 2 modulo 23. Since $2^{11} \\equiv 1 \\pmod{23}$, we need $\\mathbb{F}_{2^{11}}$.',
  },
      '$\\mathbb{F}_{2^5}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A primitive 23rd root of unity exists in $\\mathbb{F}_{2^m}$ where $m$ is the multiplicative order of 2 modulo 23. Since $2^{11} \\equiv 1 \\pmod{23}$, we need $\\mathbb{F}_{2^{11}}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A primitive 23rd root of unity exists in $\\mathbb{F}_{2^m}$ where $m$ is the multiplicative order of 2 modulo 23. Since $2^{11} \\equiv 1 \\pmod{23}$, we need $\\mathbb{F}_{2^{11}}$.',
  },
];
