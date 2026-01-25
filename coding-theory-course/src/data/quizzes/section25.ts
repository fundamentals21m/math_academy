import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Berlekamp\'s algorithm is used to:',
    options: [
      'Factor polynomials over finite fields',
      'Encode messages into codewords',
      'Compute the minimum distance of a code',
      'Find the generator matrix of a code',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Berlekamp\'s algorithm is a deterministic algorithm for factoring polynomials over finite fields $\\mathbb{F}_q$. It is widely used in coding theory for factoring $x^n - 1$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In Berlekamp\'s algorithm, we seek polynomials $h(x)$ satisfying:',
    options: [
      '$h(x) \\cdot f(x) = 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Berlekamp\'s algorithm finds all $h(x)$ with $h(x)^q \\equiv h(x) \\pmod{f(x)}$. These form a vector space, and non-trivial solutions help factor $f(x)$.',
  },
      '$h(x)^q = 1 \\pmod{f(x)}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Berlekamp\'s algorithm finds all $h(x)$ with $h(x)^q \\equiv h(x) \\pmod{f(x)}$. These form a vector space, and non-trivial solutions help factor $f(x)$.',
  },
      '$h(x)^q = h(x) \\pmod{f(x)}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Berlekamp\'s algorithm finds all $h(x)$ with $h(x)^q \\equiv h(x) \\pmod{f(x)}$. These form a vector space, and non-trivial solutions help factor $f(x)$.',
  },
      '$h(x) + h(x)^q = 0 \\pmod{f(x)}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Berlekamp\'s algorithm finds all $h(x)$ with $h(x)^q \\equiv h(x) \\pmod{f(x)}$. These form a vector space, and non-trivial solutions help factor $f(x)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Berlekamp\'s algorithm finds all $h(x)$ with $h(x)^q \\equiv h(x) \\pmod{f(x)}$. These form a vector space, and non-trivial solutions help factor $f(x)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Berlekamp subalgebra $B$ of $\\mathbb{F}_q[x]/(f(x))$ consists of all $h(x)$ with $h^q = h$. This is an $\\mathbb{F}_q$-vector space of dimension:',
    options: [
      '$\\deg(f)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The dimension of the Berlekamp subalgebra equals the number of distinct irreducible factors of $f(x)$. This is a key theorem enabling the factorization.',
  },
      '$q
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The dimension of the Berlekamp subalgebra equals the number of distinct irreducible factors of $f(x)$. This is a key theorem enabling the factorization.',
  },
      'The number of distinct irreducible factors of $f(x)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The dimension of the Berlekamp subalgebra equals the number of distinct irreducible factors of $f(x)$. This is a key theorem enabling the factorization.',
  },
      '$\\deg(f) - 1
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The dimension of the Berlekamp subalgebra equals the number of distinct irreducible factors of $f(x)$. This is a key theorem enabling the factorization.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The dimension of the Berlekamp subalgebra equals the number of distinct irreducible factors of $f(x)$. This is a key theorem enabling the factorization.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To find the Berlekamp subalgebra, we construct a matrix $Q$ where the $i$-th row represents:',
    options: [
      '$x^i \\pmod{f(x)}$',
      '$x^{qi} \\pmod{f(x)}$',
      '$f(x)^i$',
      'The $i$-th derivative of $f(x)$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The matrix $Q$ has rows representing $x^{qi} \\pmod{f(x)}$ for $i = 0, 1, \\ldots, \\deg(f)-1$. The null space of $Q - I$ gives the Berlekamp subalgebra.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If Berlekamp\'s algorithm finds that the subalgebra $B$ has dimension $3$, how many irreducible factors does the polynomial have?',
    correctAnswer: 3,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'The dimension of the Berlekamp subalgebra equals the number of irreducible factors. If $\\dim(B) = 3$, then $f(x)$ has exactly 3 irreducible factors.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'After finding a non-trivial element $h(x)$ in the Berlekamp subalgebra, we obtain factors of $f(x)$ by computing:',
    options: [
      '$\\gcd(f(x), h(x))
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For $h(x)$ in the Berlekamp subalgebra, $\\gcd(f(x), h(x) - c)$ for $c \\in \\mathbb{F}_q$ gives non-trivial factors. The key is that $\\prod_{c \\in \\mathbb{F}_q}(h - c) = h^q - h = 0 \\pmod{f}$.',
  },
      '$f(x) / h(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $h(x)$ in the Berlekamp subalgebra, $\\gcd(f(x), h(x) - c)$ for $c \\in \\mathbb{F}_q$ gives non-trivial factors. The key is that $\\prod_{c \\in \\mathbb{F}_q}(h - c) = h^q - h = 0 \\pmod{f}$.',
  },
      '$h(x)^q - h(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $h(x)$ in the Berlekamp subalgebra, $\\gcd(f(x), h(x) - c)$ for $c \\in \\mathbb{F}_q$ gives non-trivial factors. The key is that $\\prod_{c \\in \\mathbb{F}_q}(h - c) = h^q - h = 0 \\pmod{f}$.',
  },
      '$\\gcd(f(x), h(x) - c)$ for various $c \\in \\mathbb{F}_q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $h(x)$ in the Berlekamp subalgebra, $\\gcd(f(x), h(x) - c)$ for $c \\in \\mathbb{F}_q$ gives non-trivial factors. The key is that $\\prod_{c \\in \\mathbb{F}_q}(h - c) = h^q - h = 0 \\pmod{f}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $h(x)$ in the Berlekamp subalgebra, $\\gcd(f(x), h(x) - c)$ for $c \\in \\mathbb{F}_q$ gives non-trivial factors. The key is that $\\prod_{c \\in \\mathbb{F}_q}(h - c) = h^q - h = 0 \\pmod{f}$.',
  },
];
