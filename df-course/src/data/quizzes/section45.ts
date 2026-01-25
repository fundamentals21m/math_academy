import type { QuizQuestion } from './types';

export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $R$ is a UFD, then $R[x]$ is:',
    options: [
      'A UFD',
      'Not necessarily a UFD',
      'A field',
      'A PID',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A fundamental theorem states that if $R$ is a UFD, then $R[x]$ is also a UFD. This extends by induction to $R[x_1, \\ldots, x_n]$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The content of a polynomial $f(x) = a_nx^n + \\cdots + a_0 \\in \\mathbb{Z}[x]$ is:',
    options: [
      'The leading coefficient $a_n$',
      'The constant term $a_0$',
      'The degree $n$',
      '$\\gcd(a_n, \\ldots, a_0)$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The content of a polynomial over a UFD is the gcd of all its coefficients. A polynomial is primitive if its content is $1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "Gauss's Lemma states that the product of two primitive polynomials over a UFD is:",
    options: [
      'Always zero',
      'Irreducible',
      'Primitive',
      'Monic',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: "Gauss's Lemma: If $f$ and $g$ are primitive polynomials over a UFD, then $fg$ is also primitive.",
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A polynomial $f \\in \\mathbb{Z}[x]$ is irreducible over $\\mathbb{Z}$ if and only if:',
    options: [
      'It is irreducible over $\\mathbb{Q}$',
      'It is primitive and irreducible over $\\mathbb{Q}$',
      'It has no integer roots',
      'Its content is $1$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A non-constant $f \\in \\mathbb{Z}[x]$ is irreducible over $\\mathbb{Z}$ iff it is primitive (content $= 1$) and irreducible over $\\mathbb{Q}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The content of $6x^2 + 4x + 2 \\in \\mathbb{Z}[x]$ is:',
    options: [
      '$2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\gcd(6, 4, 2) = 2$. The primitive part is $3x^2 + 2x + 1$.',
  },
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\gcd(6, 4, 2) = 2$. The primitive part is $3x^2 + 2x + 1$.',
  },
      '$4
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\gcd(6, 4, 2) = 2$. The primitive part is $3x^2 + 2x + 1$.',
  },
      '$6
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\gcd(6, 4, 2) = 2$. The primitive part is $3x^2 + 2x + 1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\gcd(6, 4, 2) = 2$. The primitive part is $3x^2 + 2x + 1$.',
  },
];
