import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A BCH code is designed to correct up to $t$ errors. Its generator polynomial is the LCM of the minimal polynomials of:',
    options: [
      '$\\alpha, \\alpha^2, \\ldots, \\alpha^t$',
      '$\\alpha, \\alpha^2, \\ldots, \\alpha^{2t}$',
      '$\\alpha^2, \\alpha^4, \\ldots, \\alpha^{2t}$',
      '$1, \\alpha, \\alpha^2, \\ldots, \\alpha^{t-1}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For a $t$-error-correcting BCH code, the generator polynomial is the LCM of minimal polynomials of $\\alpha, \\alpha^2, \\ldots, \\alpha^{2t}$, where $\\alpha$ is a primitive $n$-th root of unity.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The binary Hamming code of length $n = 2^m - 1$ can be viewed as a cyclic code. Its generator polynomial is:',
    options: [
      'Any irreducible polynomial of degree $m$',
      'A primitive polynomial of degree $m$',
      'The polynomial $x^m - 1$',
      'The polynomial $(x^n - 1)/(x - 1)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The generator polynomial of the cyclic Hamming code is a primitive polynomial of degree $m$, which is the minimal polynomial of a primitive element $\\alpha$ of $\\mathbb{F}_{2^m}$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'The binary BCH code of length $15$ designed to correct $2$ errors has generator polynomial of degree at most $2 \\cdot 2 \\cdot m = 8$ where $m = 4$. If the minimal polynomials of $\\alpha$ and $\\alpha^3$ both have degree $4$ (and $\\alpha^2$ shares minimal polynomial with $\\alpha$, while $\\alpha^4$ shares with $\\alpha^3$), what is the actual degree of $g(x)$?',
    correctAnswer: 8,
    numericRange: { min: 1, max: 15, precision: 0 },
    difficulty: 'hard',
    explanation: 'The generator is $\\text{lcm}(m_1(x), m_3(x))$ where $m_1$ and $m_3$ are the minimal polynomials of $\\alpha$ and $\\alpha^3$. Since both have degree $4$ and are distinct, $\\deg(g) = 4 + 4 = 8$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For the binary Hamming code $[7, 4, 3]$ as a cyclic code, what is the relationship between the code and BCH codes?',
    options: [
      'It is a 1-error-correcting BCH code',
      'It is a 2-error-correcting BCH code',
      'It is not a BCH code',
      'It is a 3-error-correcting BCH code'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The $[7, 4, 3]$ Hamming code is the simplest BCH code: a 1-error-correcting BCH code. Its generator polynomial is the minimal polynomial of $\\alpha$, a primitive 7th root of unity.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'A binary BCH code of length $n = 31$ ($m = 5$) is designed to correct $t = 3$ errors. The bound on the dimension is $k \\geq n - mt$. What is this lower bound?',
    correctAnswer: 16,
    numericRange: { min: 0, max: 31, precision: 0 },
    difficulty: 'medium',
    explanation: 'The BCH bound gives $k \\geq n - mt = 31 - 5 \\cdot 3 = 31 - 15 = 16$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The designed distance $\\delta$ of a BCH code with consecutive roots $\\alpha^b, \\alpha^{b+1}, \\ldots, \\alpha^{b+\\delta-2}$ is:',
    options: [
      '$\\delta - 1$',
      '$\\delta$',
      '$\\delta + 1$',
      '$2\\delta - 1$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The BCH bound states that if $g(x)$ has $\\delta - 1$ consecutive powers of $\\alpha$ as roots, then the minimum distance $d \\geq \\delta$. This $\\delta$ is called the designed distance.',
  },
];
