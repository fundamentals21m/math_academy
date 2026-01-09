import type { QuizQuestion } from './types';

export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a ring axiom?',
    options: [
      'Addition is commutative',
      'Multiplication is commutative',
      'Multiplication distributes over addition',
      'There exists an additive identity $0$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By definition, a ring requires additive commutativity, distributivity, and an additive identity, but multiplication need not be commutative. Rings with commutative multiplication are called commutative rings.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the ring $\\mathbb{Z}_6$, which element is a zero divisor?',
    options: [
      '$1$',
      '$5$',
      '$2$',
      'None of the above'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In $\\mathbb{Z}_6$, we have $2 \\cdot 3 = 6 \\equiv 0$, so $2$ is a zero divisor. Note that $1$ and $5$ are units (invertible), so they cannot be zero divisors.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'An element $u$ in a ring $R$ is a unit if and only if:',
    options: [
      '$u \\neq 0$',
      'There exists $v \\in R$ such that $uv = vu = 1$',
      '$u$ is not a zero divisor',
      '$u^2 = u$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By definition, a unit is an element with a multiplicative inverse. The element $u$ is a unit if there exists $v$ such that $uv = vu = 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In an integral domain, if $ab = 0$, then:',
    options: [
      '$a = b$',
      '$a = 0$ or $b = 0$',
      '$a$ and $b$ are both units',
      '$a + b = 0$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An integral domain is a commutative ring with $1 \\neq 0$ and no zero divisors. The condition "no zero divisors" means precisely that $ab = 0$ implies $a = 0$ or $b = 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of the following is an integral domain?',
    options: [
      '$\\mathbb{Z}_6$',
      '$\\mathbb{Z}_4$',
      '$\\mathbb{Z}_7$',
      '$M_2(\\mathbb{R})$ (2x2 matrices over $\\mathbb{R}$)'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}_7$ is an integral domain because $7$ is prime, so $\\mathbb{Z}_7$ is actually a field (hence an integral domain). $\\mathbb{Z}_6$ and $\\mathbb{Z}_4$ have zero divisors, and $M_2(\\mathbb{R})$ is non-commutative with zero divisors.',
  },
];
