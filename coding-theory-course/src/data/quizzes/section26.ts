import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the special case of Berlekamp\'s algorithm for $q = 2$ (binary), the condition $h^2 = h$ in $\\mathbb{F}_2[x]/(f(x))$ simplifies because:',
    options: [
      '$h^2 = h$ becomes $h^2 - h = h(h-1) = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In any field, $h^2 = h$ means $h(h-1) = 0$. Over $\\mathbb{F}_2$, this factors differently than in larger fields, simplifying the algorithm.',
  },
      'All elements satisfy $h^2 = h$ in characteristic 2',
      'The only solutions are $h = 0$ and $h = 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In any field, $h^2 = h$ means $h(h-1) = 0$. Over $\\mathbb{F}_2$, this factors differently than in larger fields, simplifying the algorithm.',
  },
      'All of the above considerations apply',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In any field, $h^2 = h$ means $h(h-1) = 0$. Over $\\mathbb{F}_2$, this factors differently than in larger fields, simplifying the algorithm.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For binary fields, the Berlekamp matrix $Q$ satisfies $Q_{ij} = $ coefficient of $x^j$ in:',
    options: [
      '$x^i \\pmod{f(x)}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For $q = 2$, the $i$-th row of $Q$ represents $x^{2i} \\pmod{f(x)}$. We compute $Q$ and then find the null space of $Q - I$.',
  },
      '$x^{2i} \\pmod{f(x)}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For $q = 2$, the $i$-th row of $Q$ represents $x^{2i} \\pmod{f(x)}$. We compute $Q$ and then find the null space of $Q - I$.',
  },
      '$x^{i+j} \\pmod{f(x)}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For $q = 2$, the $i$-th row of $Q$ represents $x^{2i} \\pmod{f(x)}$. We compute $Q$ and then find the null space of $Q - I$.',
  },
      '$(x^i)^2 \\pmod{f(x)}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For $q = 2$, the $i$-th row of $Q$ represents $x^{2i} \\pmod{f(x)}$. We compute $Q$ and then find the null space of $Q - I$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For $q = 2$, the $i$-th row of $Q$ represents $x^{2i} \\pmod{f(x)}$. We compute $Q$ and then find the null space of $Q - I$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'When factoring $x^4 + x + 1$ over $\\mathbb{F}_2$ using Berlekamp\'s algorithm, the matrix $Q - I$ has size $4 \\times 4$. If the null space has dimension 1, how many irreducible factors does $x^4 + x + 1$ have?',
    correctAnswer: 1,
    numericRange: { min: 1, max: 4, precision: 0 },
    difficulty: 'medium',
    explanation: 'The dimension of the null space of $Q - I$ equals the number of irreducible factors. Dimension 1 means the polynomial is irreducible.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The polynomial $x^4 + x^3 + x^2 + x + 1$ over $\\mathbb{F}_2$ is:',
    options: [
      'A product of two irreducible quadratics',
      'A product of four linear factors',
      'Irreducible',
      'A product of an irreducible cubic and a linear factor',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'This is the 5th cyclotomic polynomial, which is irreducible over $\\mathbb{F}_2$ since the order of 2 modulo 5 is 4.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In binary Berlekamp, after finding $\\gcd(f(x), h(x))$ and $\\gcd(f(x), h(x) + 1)$ for a non-trivial $h$, we get:',
    options: [
      'One trivial and one non-trivial factor',
      'Two non-trivial factors that multiply to $f(x)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The GCDs give two factors of $f(x)$, but these may not be irreducible. The algorithm is applied recursively to each factor until complete factorization.',
  },
      'The complete factorization of $f(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The GCDs give two factors of $f(x)$, but these may not be irreducible. The algorithm is applied recursively to each factor until complete factorization.',
  },
      'Two factors that may need further factoring',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The GCDs give two factors of $f(x)$, but these may not be irreducible. The algorithm is applied recursively to each factor until complete factorization.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'Over $\\mathbb{F}_2$, the polynomial $x^6 + x + 1$ factors as $(x^2+x+1)(x^4+x^3+x^2+x+1)$ but actually further examination shows $x^6+x+1 = (x^2+x+1)(x^4+x^3+1)$. How many irreducible factors does $x^6 + x + 1$ have?',
    correctAnswer: 2,
    numericRange: { min: 1, max: 6, precision: 0 },
    difficulty: 'hard',
    explanation: 'Over $\\mathbb{F}_2$, $x^6 + x + 1 = (x^2 + x + 1)(x^4 + x^3 + 1)$. Both factors are irreducible, giving 2 irreducible factors.',
  },
];
