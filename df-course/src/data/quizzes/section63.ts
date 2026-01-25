import type { QuizQuestion } from './types';

export const section63Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An element $\\alpha$ in an extension field $E/F$ is algebraic over $F$ if:',
    options: [
      '$\\alpha$ is a root of some nonzero polynomial in $F[x]$',
      '$\\alpha$ can be written as a ratio of elements in $F$',
      '$\\alpha$ generates $E$ as a vector space over $F$',
      '$\\alpha$ commutes with all elements of $F$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An element $\\alpha \\in E$ is algebraic over $F$ if there exists a nonzero polynomial $f(x) \\in F[x]$ such that $f(\\alpha) = 0$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The minimal polynomial of $\\sqrt{2}$ over $\\mathbb{Q}$ is:',
    options: [
      '$x^2 - 2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The minimal polynomial is the monic irreducible polynomial of smallest degree having $\\sqrt{2}$ as a root. Since $(\\sqrt{2})^2 - 2 = 0$ and $x^2 - 2$ is irreducible over $\\mathbb{Q}$ by Eisenstein, this is the minimal polynomial.',
  },
      '$x - \\sqrt{2}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The minimal polynomial is the monic irreducible polynomial of smallest degree having $\\sqrt{2}$ as a root. Since $(\\sqrt{2})^2 - 2 = 0$ and $x^2 - 2$ is irreducible over $\\mathbb{Q}$ by Eisenstein, this is the minimal polynomial.',
  },
      '$x^2 + 2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The minimal polynomial is the monic irreducible polynomial of smallest degree having $\\sqrt{2}$ as a root. Since $(\\sqrt{2})^2 - 2 = 0$ and $x^2 - 2$ is irreducible over $\\mathbb{Q}$ by Eisenstein, this is the minimal polynomial.',
  },
      '$x^4 - 4
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The minimal polynomial is the monic irreducible polynomial of smallest degree having $\\sqrt{2}$ as a root. Since $(\\sqrt{2})^2 - 2 = 0$ and $x^2 - 2$ is irreducible over $\\mathbb{Q}$ by Eisenstein, this is the minimal polynomial.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The minimal polynomial is the monic irreducible polynomial of smallest degree having $\\sqrt{2}$ as a root. Since $(\\sqrt{2})^2 - 2 = 0$ and $x^2 - 2$ is irreducible over $\\mathbb{Q}$ by Eisenstein, this is the minimal polynomial.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\alpha$ is algebraic over $F$ with minimal polynomial $m(x)$ of degree $n$, then $[F(\\alpha):F]$ equals:',
    options: [
      '$1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The degree of the simple extension $F(\\alpha)/F$ equals the degree of the minimal polynomial of $\\alpha$. The set $\\{1, \\alpha, \\alpha^2, \\ldots, \\alpha^{n-1}\\}$ forms a basis for $F(\\alpha)$ over $F$.',
  },
      '$n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The degree of the simple extension $F(\\alpha)/F$ equals the degree of the minimal polynomial of $\\alpha$. The set $\\{1, \\alpha, \\alpha^2, \\ldots, \\alpha^{n-1}\\}$ forms a basis for $F(\\alpha)$ over $F$.',
  },
      '$n!
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The degree of the simple extension $F(\\alpha)/F$ equals the degree of the minimal polynomial of $\\alpha$. The set $\\{1, \\alpha, \\alpha^2, \\ldots, \\alpha^{n-1}\\}$ forms a basis for $F(\\alpha)$ over $F$.',
  },
      '$2^n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The degree of the simple extension $F(\\alpha)/F$ equals the degree of the minimal polynomial of $\\alpha$. The set $\\{1, \\alpha, \\alpha^2, \\ldots, \\alpha^{n-1}\\}$ forms a basis for $F(\\alpha)$ over $F$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The degree of the simple extension $F(\\alpha)/F$ equals the degree of the minimal polynomial of $\\alpha$. The set $\\{1, \\alpha, \\alpha^2, \\ldots, \\alpha^{n-1}\\}$ forms a basis for $F(\\alpha)$ over $F$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which property does the minimal polynomial of an algebraic element NOT necessarily have?',
    options: [
      'It is monic',
      'It is irreducible over $F
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The minimal polynomial is monic, irreducible over $F$, and divides any polynomial in $F[x]$ with $\\alpha$ as a root. However, it need not have integer coefficients unless $F = \\mathbb{Q}$ and even then only after clearing denominators.',
  },
      'It has integer coefficients',
      'It divides every polynomial having $\\alpha$ as a root',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The minimal polynomial is monic, irreducible over $F$, and divides any polynomial in $F[x]$ with $\\alpha$ as a root. However, it need not have integer coefficients unless $F = \\mathbb{Q}$ and even then only after clearing denominators.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The element $\\sqrt{2} + \\sqrt{3}$ is algebraic over $\\mathbb{Q}$ with minimal polynomial of degree:',
    options: [
      '$3
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Let $\\alpha = \\sqrt{2} + \\sqrt{3}$. Then $\\alpha^2 = 5 + 2\\sqrt{6}$, so $\\alpha^2 - 5 = 2\\sqrt{6}$ and $(\\alpha^2 - 5)^2 = 24$. Thus $\\alpha^4 - 10\\alpha^2 + 1 = 0$. The polynomial $x^4 - 10x^2 + 1$ is irreducible over $\\mathbb{Q}$, giving degree $4$.',
  },
      '$2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Let $\\alpha = \\sqrt{2} + \\sqrt{3}$. Then $\\alpha^2 = 5 + 2\\sqrt{6}$, so $\\alpha^2 - 5 = 2\\sqrt{6}$ and $(\\alpha^2 - 5)^2 = 24$. Thus $\\alpha^4 - 10\\alpha^2 + 1 = 0$. The polynomial $x^4 - 10x^2 + 1$ is irreducible over $\\mathbb{Q}$, giving degree $4$.',
  },
      '$6
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Let $\\alpha = \\sqrt{2} + \\sqrt{3}$. Then $\\alpha^2 = 5 + 2\\sqrt{6}$, so $\\alpha^2 - 5 = 2\\sqrt{6}$ and $(\\alpha^2 - 5)^2 = 24$. Thus $\\alpha^4 - 10\\alpha^2 + 1 = 0$. The polynomial $x^4 - 10x^2 + 1$ is irreducible over $\\mathbb{Q}$, giving degree $4$.',
  },
      '$4
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Let $\\alpha = \\sqrt{2} + \\sqrt{3}$. Then $\\alpha^2 = 5 + 2\\sqrt{6}$, so $\\alpha^2 - 5 = 2\\sqrt{6}$ and $(\\alpha^2 - 5)^2 = 24$. Thus $\\alpha^4 - 10\\alpha^2 + 1 = 0$. The polynomial $x^4 - 10x^2 + 1$ is irreducible over $\\mathbb{Q}$, giving degree $4$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Let $\\alpha = \\sqrt{2} + \\sqrt{3}$. Then $\\alpha^2 = 5 + 2\\sqrt{6}$, so $\\alpha^2 - 5 = 2\\sqrt{6}$ and $(\\alpha^2 - 5)^2 = 24$. Thus $\\alpha^4 - 10\\alpha^2 + 1 = 0$. The polynomial $x^4 - 10x^2 + 1$ is irreducible over $\\mathbb{Q}$, giving degree $4$.',
  },
];
