import type { QuizQuestion } from './types';

export const section67Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The $n$-th cyclotomic polynomial $\\Phi_n(x)$ is defined as:',
    options: [
      'The product of $(x - \\zeta)$ over all $n$-th roots of unity',
      '$x^n - 1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\Phi_n(x) = \\prod_{\\gcd(k,n)=1, 1 \\leq k \\leq n} (x - e^{2\\pi i k/n})$ is the product over all primitive $n$-th roots of unity.',
  },
      'The product of $(x - \\zeta)$ over all primitive $n$-th roots of unity',
      '$(x^n - 1)/(x - 1)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\Phi_n(x) = \\prod_{\\gcd(k,n)=1, 1 \\leq k \\leq n} (x - e^{2\\pi i k/n})$ is the product over all primitive $n$-th roots of unity.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\Phi_n(x) = \\prod_{\\gcd(k,n)=1, 1 \\leq k \\leq n} (x - e^{2\\pi i k/n})$ is the product over all primitive $n$-th roots of unity.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The degree of $\\Phi_n(x)$ equals:',
    options: [
      '$n$',
      '$\\phi(n)$ (Euler\'s totient function)',
      '$n - 1$',
      '$\\lfloor n/2 \\rfloor$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The degree of $\\Phi_n(x)$ is $\\phi(n)$, the number of integers from $1$ to $n$ that are relatively prime to $n$, since this counts the primitive $n$-th roots of unity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The factorization $x^n - 1 = \\prod_{d | n} \\Phi_d(x)$ holds:',
    options: [
      'Only for prime $n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'This identity holds over $\\mathbb{Z}[x]$ and hence over any ring. Each $n$-th root of unity is a primitive $d$-th root of unity for exactly one divisor $d$ of $n$.',
  },
      'Only over $\\mathbb{C}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This identity holds over $\\mathbb{Z}[x]$ and hence over any ring. Each $n$-th root of unity is a primitive $d$-th root of unity for exactly one divisor $d$ of $n$.',
  },
      'Only when $n$ is a prime power',
      'Over any field',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This identity holds over $\\mathbb{Z}[x]$ and hence over any ring. Each $n$-th root of unity is a primitive $d$-th root of unity for exactly one divisor $d$ of $n$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: '$\\Phi_6(x)$ equals:',
    options: [
      '$x^6 - 1$',
      '$x^2 + 1$',
      '$x^2 + x + 1$',
      '$x^2 - x + 1$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We have $x^6 - 1 = \\Phi_1 \\Phi_2 \\Phi_3 \\Phi_6 = (x-1)(x+1)(x^2+x+1)\\Phi_6(x)$. Dividing: $\\Phi_6(x) = (x^6-1)/[(x-1)(x+1)(x^2+x+1)] = (x^6-1)/(x^4+x^3-x-1) = x^2 - x + 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The cyclotomic polynomial $\\Phi_n(x)$ is:',
    options: [
      'Irreducible over $\\mathbb{Q}$ for all $n$',
      'Irreducible over $\\mathbb{Q}$ only for prime $n$',
      'Reducible over $\\mathbb{Q}$ for all $n > 2$',
      'Irreducible over $\\mathbb{F}_p$ for all $n$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A fundamental theorem states that $\\Phi_n(x)$ is irreducible over $\\mathbb{Q}$ for all $n \\geq 1$. This is why $[\\mathbb{Q}(\\zeta_n):\\mathbb{Q}] = \\phi(n)$.',
  },
];
