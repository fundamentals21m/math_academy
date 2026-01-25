import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: '$f(x) \\equiv g(x) \\pmod{m(x)}$ means:',
    options: [
      '$f(x) = g(x)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Polynomial congruence: $f \\equiv g \\pmod{m}$ means $m \\mid (f - g)$.',
  },
      '$f(x)$ divides $m(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Polynomial congruence: $f \\equiv g \\pmod{m}$ means $m \\mid (f - g)$.',
  },
      '$\\deg(f) = \\deg(g)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Polynomial congruence: $f \\equiv g \\pmod{m}$ means $m \\mid (f - g)$.',
  },
      '$m(x)$ divides $f(x) - g(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Polynomial congruence: $f \\equiv g \\pmod{m}$ means $m \\mid (f - g)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Polynomial congruence: $f \\equiv g \\pmod{m}$ means $m \\mid (f - g)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $p(x)$ is irreducible, then $F[x]/(p(x))$ is:',
    options: [
      'A field',
      'A ring but not a field',
      'Not a ring',
      'Always infinite',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Quotienting by an irreducible polynomial gives a field.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How many elements does $\\mathbb{Z}_2[x]/(x^2 + x + 1)$ have?',
    options: [
      '2',
      '3',
      '4',
      '8',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Representatives have degree $< 2$: $\\{0, 1, x, x+1\\}$, so 4 elements.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A finite field exists with $q$ elements if and only if:',
    options: [
      '$q$ is prime',
      '$q$ is a prime power',
      '$q$ is even',
      '$q$ is any positive integer',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Finite fields exist exactly for prime powers $q = p^n$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The multiplicative group of $GF(q)$ is:',
    options: [
      'Trivial',
      'Cyclic of order $q
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The non-zero elements of $GF(q)$ form a cyclic group of order $q - 1$.',
  },
      'Not a group',
      'Cyclic of order $q - 1
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The non-zero elements of $GF(q)$ form a cyclic group of order $q - 1$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The non-zero elements of $GF(q)$ form a cyclic group of order $q - 1$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: '$GF(9)$ can be constructed as:',
    options: [
      '$\\mathbb{Z}_3[x]/(x^2 + 1)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$GF(9) = \\mathbb{Z}_3[x]/(p(x))$ where $p(x)$ is irreducible of degree 2 over $\\mathbb{Z}_3$, such as $x^2 + 1$.',
  },
      '$\\mathbb{Z}_9
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$GF(9) = \\mathbb{Z}_3[x]/(p(x))$ where $p(x)$ is irreducible of degree 2 over $\\mathbb{Z}_3$, such as $x^2 + 1$.',
  },
      '$\\mathbb{Z}_2[x]/(x^3 + x + 1)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$GF(9) = \\mathbb{Z}_3[x]/(p(x))$ where $p(x)$ is irreducible of degree 2 over $\\mathbb{Z}_3$, such as $x^2 + 1$.',
  },
      '$\\mathbb{Z}_3 \\times \\mathbb{Z}_3
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$GF(9) = \\mathbb{Z}_3[x]/(p(x))$ where $p(x)$ is irreducible of degree 2 over $\\mathbb{Z}_3$, such as $x^2 + 1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$GF(9) = \\mathbb{Z}_3[x]/(p(x))$ where $p(x)$ is irreducible of degree 2 over $\\mathbb{Z}_3$, such as $x^2 + 1$.',
  },
];
