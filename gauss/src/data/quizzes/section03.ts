import type { QuizQuestion } from './types';

/**
 * Section 3: Quadratic Residues and Reciprocity
 * Topics: Quadratic residues, Legendre symbol, Euler's criterion, Law of Quadratic Reciprocity
 */
export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A quadratic residue modulo $p$ is an integer $a$ such that:',
    options: [
      '$a$ is divisible by $p$',
      '$x^2 \\equiv a \\pmod{p}$ has a solution',
      '$a^2$ is divisible by $p$',
      '$a$ is a perfect square'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An integer $a$ (with $p \\nmid a$) is a quadratic residue mod $p$ if $x^2 \\equiv a \\pmod{p}$ has a solution.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'Is $2$ a quadratic residue modulo $7$? (Enter 1 for yes, 0 for no)',
    correctAnswer: 1,
    numericRange: { min: 0, max: 1, precision: 0 },
    difficulty: 'easy',
    explanation: '$3^2 = 9 \\equiv 2 \\pmod{7}$, so $2$ is a quadratic residue mod $7$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For an odd prime $p$, how many quadratic residues are there among $1, 2, \\ldots, p-1$?',
    options: [
      '$p - 1$',
      '$(p - 1)/2$',
      '$p/2$',
      '$(p + 1)/2$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Exactly half of the non-zero residues modulo an odd prime are quadratic residues: $(p-1)/2$ of them.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: "Euler's criterion states that $\\left(\\frac{a}{p}\\right) \\equiv$:",
    options: [
      '$a^p \\pmod{p}$',
      '$a^{(p-1)/2} \\pmod{p}$',
      '$a^{(p+1)/2} \\pmod{p}$',
      '$a^2 \\pmod{p}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: "Euler's criterion: $\\left(\\frac{a}{p}\\right) \\equiv a^{(p-1)/2} \\pmod{p}$.",
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Compute $3^{(11-1)/2} \\pmod{11}$ to determine if $3$ is a QR mod $11$. What is the result?',
    correctAnswer: 1,
    numericRange: { min: -1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: '$3^5 = 243 = 22 \\cdot 11 + 1 \\equiv 1 \\pmod{11}$. Since the result is $1$, $3$ is a quadratic residue mod $11$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'When is $-1$ a quadratic residue modulo an odd prime $p$?',
    options: [
      'Always',
      'Never',
      'When $p \\equiv 1 \\pmod{4}$',
      'When $p \\equiv 3 \\pmod{4}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$-1$ is a QR mod $p$ if and only if $p \\equiv 1 \\pmod{4}$.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'The Law of Quadratic Reciprocity relates $\\left(\\frac{p}{q}\\right)$ and $\\left(\\frac{q}{p}\\right)$ for distinct odd primes. They are equal unless:',
    options: [
      'Both $p$ and $q$ are $\\equiv 1 \\pmod{4}$',
      'Both $p$ and $q$ are $\\equiv 3 \\pmod{4}$',
      'One is $\\equiv 1$ and the other $\\equiv 3 \\pmod{4}$',
      '$p + q$ is even'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The symbols are equal unless both $p \\equiv q \\equiv 3 \\pmod{4}$, in which case they are opposite.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'When is $2$ a quadratic residue modulo an odd prime $p$?',
    options: [
      'When $p \\equiv 1 \\pmod{4}$',
      'When $p \\equiv \\pm 1 \\pmod{8}$',
      'When $p \\equiv \\pm 3 \\pmod{8}$',
      'Always'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$2$ is a QR mod $p$ if and only if $p \\equiv \\pm 1 \\pmod{8}$, i.e., $p \\equiv 1$ or $7 \\pmod{8}$.',
  },
  {
    id: 9,
    type: 'numeric',
    question: 'The Legendre symbol $\\left(\\frac{a}{p}\\right)$ equals $1$, $-1$, or $0$. What value indicates $a$ is a non-residue?',
    correctAnswer: -1,
    numericRange: { min: -1, max: 1, precision: 0 },
    difficulty: 'easy',
    explanation: 'The Legendre symbol is $1$ if $a$ is a QR, $-1$ if $a$ is a non-residue, and $0$ if $p \\mid a$.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'Gauss called the Law of Quadratic Reciprocity the:',
    options: [
      'Fundamental Theorem',
      'Golden Theorem (Theorema Aureum)',
      'Prime Theorem',
      'Reciprocal Law'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Gauss called it the "theorema aureum" (golden theorem) and gave eight different proofs over his lifetime.',
  },
];
