import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a unique factorization domain (UFD), every nonzero non-unit element:',
    options: [
      'Is prime',
      'Is irreducible',
      'Can be written as a product of irreducibles, unique up to order and units',
      'Has infinitely many factorizations'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A UFD is characterized by the property that every nonzero non-unit can be factored into irreducibles, and this factorization is unique up to reordering and multiplication by units.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In a UFD, an element $p$ is prime if and only if:',
    options: [
      '$p$ is a unit',
      '$p$ is irreducible',
      '$p$ has exactly two divisors',
      '$p$ generates a maximal ideal'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In a UFD, prime and irreducible elements coincide. In general integral domains, prime implies irreducible, but the converse holds only in UFDs.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a UFD?',
    options: [
      '$\\mathbb{Z}$',
      '$\\mathbb{Z}[\\sqrt{-5}]$',
      '$\\mathbb{Q}[x]$',
      '$\\mathbb{Z}[i]$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}[\\sqrt{-5}]$ is not a UFD. For example, $6 = 2 \\cdot 3 = (1+\\sqrt{-5})(1-\\sqrt{-5})$ gives two essentially different factorizations into irreducibles.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The relationship between PIDs and UFDs is:',
    options: [
      'Every UFD is a PID',
      'Every PID is a UFD',
      'They are the same class of rings',
      'Neither implies the other'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Every PID is a UFD, but not conversely. For example, $\\mathbb{Z}[x]$ is a UFD but not a PID (the ideal $(2, x)$ is not principal).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In $\\mathbb{Z}$, which element is irreducible but the definition of "prime" adds what extra condition?',
    options: [
      'Irreducible means $p = ab$ implies $a$ or $b$ is a unit; prime adds $p | ab$ implies $p | a$ or $p | b$',
      'There is no difference in $\\mathbb{Z}$',
      'Prime elements must be positive',
      'Irreducible elements can be composite'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Irreducible means: if $p = ab$, then $a$ or $b$ is a unit. Prime means: if $p | ab$, then $p | a$ or $p | b$. In $\\mathbb{Z}$ (a UFD), these conditions are equivalent for non-unit elements.',
  },
];
