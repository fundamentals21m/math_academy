import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the Legendre symbol $\\left(\\frac{2}{7}\\right)$?',
    options: [
      '$-1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$2^3 = 8 \\equiv 1 \\pmod{7}$. Since $2^{(7-1)/2} = 2^3 \\equiv 1$, we have $\\left(\\frac{2}{7}\\right) = 1$.',
  },
      '$0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$2^3 = 8 \\equiv 1 \\pmod{7}$. Since $2^{(7-1)/2} = 2^3 \\equiv 1$, we have $\\left(\\frac{2}{7}\\right) = 1$.',
  },
      'undefined',
      '$1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$2^3 = 8 \\equiv 1 \\pmod{7}$. Since $2^{(7-1)/2} = 2^3 \\equiv 1$, we have $\\left(\\frac{2}{7}\\right) = 1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$2^3 = 8 \\equiv 1 \\pmod{7}$. Since $2^{(7-1)/2} = 2^3 \\equiv 1$, we have $\\left(\\frac{2}{7}\\right) = 1$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to quadratic reciprocity, if $p$ and $q$ are distinct odd primes:',
    options: [
      '$\\left(\\frac{p}{q}\\right) = \\left(\\frac{q}{p}\\right)$ always',
      '$\\left(\\frac{p}{q}\\right) = -\\left(\\frac{q}{p}\\right)$ always',
      '$\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{(p-1)(q-1)/4}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Quadratic reciprocity: $\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}$.',
  },
      '$\\left(\\frac{p}{q}\\right) = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Quadratic reciprocity: $\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Quadratic reciprocity: $\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'How many quadratic residues are there modulo a prime $p = 11$?',
    correctAnswer: 5,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'For an odd prime $p$, there are exactly $(p-1)/2$ quadratic residues mod $p$. For $p=11$: $(11-1)/2 = 5$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Is $-1$ a quadratic residue modulo $p$ when $p \\equiv 3 \\pmod{4}$?',
    options: [
      'No, never',
      'Yes, always',
      'Only when $p$ is a Mersenne prime',
      'Depends on the specific value of $p
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$-1$ is a QR mod $p$ iff $p \\equiv 1 \\pmod{4}$. When $p \\equiv 3 \\pmod{4}$, $-1$ is a non-residue.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$-1$ is a QR mod $p$ iff $p \\equiv 1 \\pmod{4}$. When $p \\equiv 3 \\pmod{4}$, $-1$ is a non-residue.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What symbol, named after a French mathematician, denotes whether $a$ is a quadratic residue mod $p$?',
    correctAnswer: 'Legendre',
    difficulty: 'easy',
    explanation: 'The Legendre symbol $\\left(\\frac{a}{p}\\right)$ equals $1$ if $a$ is a QR, $-1$ if not, and $0$ if $p|a$.',
  },
];
