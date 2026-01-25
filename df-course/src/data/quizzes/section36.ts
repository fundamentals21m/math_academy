import type { QuizQuestion } from './types';

export const section36Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A ring homomorphism $\\phi: R \\to S$ must satisfy:',
    options: [
      '$\\phi(a + b) = \\phi(a) + \\phi(b)$ only',
      'Both $\\phi(a + b) = \\phi(a) + \\phi(b)$ and $\\phi(ab) = \\phi(a)\\phi(b)$',
      '$\\phi(ab) = \\phi(a)\\phi(b)$ only',
      '$\\phi(1_R) = 1_S$ only'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A ring homomorphism must preserve both operations: addition and multiplication. So $\\phi(a + b) = \\phi(a) + \\phi(b)$ and $\\phi(ab) = \\phi(a)\\phi(b)$ for all $a, b \\in R$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The kernel of a ring homomorphism $\\phi: R \\to S$ is:',
    options: [
      'A subring of $R
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The kernel $\\ker(\\phi) = \\{r \\in R : \\phi(r) = 0\\}$ is always an ideal of $R$. It is closed under addition and absorbs multiplication from $R$.',
  },
      'A subring of $S
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The kernel $\\ker(\\phi) = \\{r \\in R : \\phi(r) = 0\\}$ is always an ideal of $R$. It is closed under addition and absorbs multiplication from $R$.',
  },
      'An ideal of $S
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The kernel $\\ker(\\phi) = \\{r \\in R : \\phi(r) = 0\\}$ is always an ideal of $R$. It is closed under addition and absorbs multiplication from $R$.',
  },
      'An ideal of $R
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The kernel $\\ker(\\phi) = \\{r \\in R : \\phi(r) = 0\\}$ is always an ideal of $R$. It is closed under addition and absorbs multiplication from $R$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The kernel $\\ker(\\phi) = \\{r \\in R : \\phi(r) = 0\\}$ is always an ideal of $R$. It is closed under addition and absorbs multiplication from $R$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $I$ is an ideal of $R$, then $R/I$ is:',
    options: [
      'Always a field',
      'Always an integral domain',
      'A ring with operations induced from $R
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The quotient $R/I$ inherits a natural ring structure from $R$. It is a field if and only if $I$ is maximal, and an integral domain if and only if $I$ is prime.',
  },
      'Always isomorphic to $R
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The quotient $R/I$ inherits a natural ring structure from $R$. It is a field if and only if $I$ is maximal, and an integral domain if and only if $I$ is prime.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The quotient $R/I$ inherits a natural ring structure from $R$. It is a field if and only if $I$ is maximal, and an integral domain if and only if $I$ is prime.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The First Isomorphism Theorem for rings states that if $\\phi: R \\to S$ is a ring homomorphism, then:',
    options: [
      '$R \\cong S
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The First Isomorphism Theorem states that $R/\\ker(\\phi) \\cong \\text{im}(\\phi)$. The quotient of $R$ by the kernel is isomorphic to the image of $\\phi$.',
  },
      '$\\ker(\\phi) \\cong \\text{im}(\\phi)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The First Isomorphism Theorem states that $R/\\ker(\\phi) \\cong \\text{im}(\\phi)$. The quotient of $R$ by the kernel is isomorphic to the image of $\\phi$.',
  },
      '$R \\cong R/\\ker(\\phi)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The First Isomorphism Theorem states that $R/\\ker(\\phi) \\cong \\text{im}(\\phi)$. The quotient of $R$ by the kernel is isomorphic to the image of $\\phi$.',
  },
      '$R/\\ker(\\phi) \\cong \\text{im}(\\phi)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The First Isomorphism Theorem states that $R/\\ker(\\phi) \\cong \\text{im}(\\phi)$. The quotient of $R$ by the kernel is isomorphic to the image of $\\phi$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The First Isomorphism Theorem states that $R/\\ker(\\phi) \\cong \\text{im}(\\phi)$. The quotient of $R$ by the kernel is isomorphic to the image of $\\phi$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Consider the evaluation map $\\phi: \\mathbb{R}[x] \\to \\mathbb{R}$ given by $\\phi(f) = f(2)$. What is $\\ker(\\phi)$?',
    options: [
      '$(x - 2)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The kernel consists of polynomials $f$ with $f(2) = 0$, i.e., polynomials having $2$ as a root. These are exactly the polynomials divisible by $(x - 2)$, so $\\ker(\\phi) = (x - 2)$.',
  },
      '$\\{0\\}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The kernel consists of polynomials $f$ with $f(2) = 0$, i.e., polynomials having $2$ as a root. These are exactly the polynomials divisible by $(x - 2)$, so $\\ker(\\phi) = (x - 2)$.',
  },
      '$(x)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The kernel consists of polynomials $f$ with $f(2) = 0$, i.e., polynomials having $2$ as a root. These are exactly the polynomials divisible by $(x - 2)$, so $\\ker(\\phi) = (x - 2)$.',
  },
      '$(x + 2)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The kernel consists of polynomials $f$ with $f(2) = 0$, i.e., polynomials having $2$ as a root. These are exactly the polynomials divisible by $(x - 2)$, so $\\ker(\\phi) = (x - 2)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The kernel consists of polynomials $f$ with $f(2) = 0$, i.e., polynomials having $2$ as a root. These are exactly the polynomials divisible by $(x - 2)$, so $\\ker(\\phi) = (x - 2)$.',
  },
];
