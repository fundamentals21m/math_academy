import type { QuizQuestion } from './types';

export const section64Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A real number $\\alpha$ is constructible with straightedge and compass if and only if:',
    options: [
      '$\\alpha$ is rational',
      '$[\\mathbb{Q}(\\alpha):\\mathbb{Q}]$ is a power of $2$',
      '$\\alpha$ is algebraic over $\\mathbb{Q}$',
      '$\\alpha$ satisfies a quadratic equation'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A number is constructible if and only if it lies in a field extension of $\\mathbb{Q}$ obtained by a tower of quadratic extensions. This means $[\\mathbb{Q}(\\alpha):\\mathbb{Q}] = 2^k$ for some non-negative integer $k$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Doubling the cube is impossible with straightedge and compass because:',
    options: [
      '$\\sqrt[3]{2}$ is irrational',
      '$\\sqrt[3]{2}$ is transcendental',
      '$[\\mathbb{Q}(\\sqrt[3]{2}):\\mathbb{Q}] = 3$, which is not a power of $2$',
      'The cube has too many vertices'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Doubling the cube requires constructing $\\sqrt[3]{2}$. The minimal polynomial of $\\sqrt[3]{2}$ over $\\mathbb{Q}$ is $x^3 - 2$, so $[\\mathbb{Q}(\\sqrt[3]{2}):\\mathbb{Q}] = 3$. Since $3$ is not a power of $2$, the construction is impossible.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following angles can be trisected with straightedge and compass?',
    options: [
      '$90°
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Trisecting $90°$ yields $30°$, which is constructible since $\\cos(30°) = \\sqrt{3}/2$ has degree $2$ over $\\mathbb{Q}$. Trisecting $60°$ would require constructing $\\cos(20°)$, which has minimal polynomial of degree $3$.',
  },
      '$60°
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Trisecting $90°$ yields $30°$, which is constructible since $\\cos(30°) = \\sqrt{3}/2$ has degree $2$ over $\\mathbb{Q}$. Trisecting $60°$ would require constructing $\\cos(20°)$, which has minimal polynomial of degree $3$.',
  },
      'None of these can be trisected in general',
      '$45°
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Trisecting $90°$ yields $30°$, which is constructible since $\\cos(30°) = \\sqrt{3}/2$ has degree $2$ over $\\mathbb{Q}$. Trisecting $60°$ would require constructing $\\cos(20°)$, which has minimal polynomial of degree $3$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Trisecting $90°$ yields $30°$, which is constructible since $\\cos(30°) = \\sqrt{3}/2$ has degree $2$ over $\\mathbb{Q}$. Trisecting $60°$ would require constructing $\\cos(20°)$, which has minimal polynomial of degree $3$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A regular $n$-gon is constructible with straightedge and compass if and only if $n$ is:',
    options: [
      'A power of $2
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The Gauss-Wantzel theorem states that a regular $n$-gon is constructible if and only if $n = 2^k p_1 \\cdots p_m$ where each $p_i$ is a distinct Fermat prime (primes of the form $2^{2^j} + 1$).',
  },
      'Any positive integer',
      'A prime number',
      '$2^k p_1 p_2 \\cdots p_m$ where each $p_i$ is a distinct Fermat prime',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Gauss-Wantzel theorem states that a regular $n$-gon is constructible if and only if $n = 2^k p_1 \\cdots p_m$ where each $p_i$ is a distinct Fermat prime (primes of the form $2^{2^j} + 1$).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of the following regular polygons is NOT constructible?',
    options: [
      'Regular $7$-gon (heptagon)',
      'Regular $3$-gon (equilateral triangle)',
      'Regular $5$-gon (pentagon)',
      'Regular $17$-gon',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The regular $7$-gon is not constructible because $7$ is not a Fermat prime (Fermat primes are $3, 5, 17, 257, 65537$). The triangle ($n=3$), pentagon ($n=5$), and $17$-gon are all constructible.',
  },
];
