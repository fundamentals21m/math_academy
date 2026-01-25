import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's42-e01',
    type: 'multiple-choice',
    question: 'What does it mean for $a$ to be a quadratic residue modulo $p$?',
    options: [
      '$a$ is prime',
      '$a$ is divisible by $p$',
      'The equation $x^2 \\equiv a \\pmod{p}$ has a solution',
      '$a^2 \\equiv 0 \\pmod{p}$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'An integer $a$ is a quadratic residue modulo $p$ if there exists some integer $x$ such that $x^2 \\equiv a \\pmod{p}$. In other words, $a$ is a "perfect square" in the world of arithmetic modulo $p$.',
  },
  {
    id: 's42-e02',
    type: 'multiple-choice',
    question: 'The Legendre symbol $\\left(\\frac{a}{p}\\right)$ equals:',
    options: [
      '0 if $a$ is prime',
      '$a$ divided by $p$',
      'The remainder when $a$ is divided by $p$',
      '1 if $a$ is a quadratic residue mod $p$, and -1 if not'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The Legendre symbol is a compact notation: it equals 1 when $a$ is a quadratic residue mod $p$, and -1 when $a$ is a quadratic non-residue. It equals 0 when $p$ divides $a$.',
  },
  // Medium questions
  {
    id: 's42-m01',
    type: 'multiple-choice',
    question: 'For which primes $p$ is $-1$ a quadratic residue?',
    options: [
      'Primes $p \\equiv 1 \\pmod{4}$',
      'Primes $p \\equiv 3 \\pmod{4}$',
      'All odd primes',
      'Only $p = 2$',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The first supplement to quadratic reciprocity states that $-1$ is a quadratic residue mod $p$ if and only if $p \\equiv 1 \\pmod{4}$. For primes like 5, 13, 17, 29, etc., the equation $x^2 \\equiv -1 \\pmod{p}$ has solutions.',
  },
  {
    id: 's42-m02',
    type: 'multiple-choice',
    question: 'According to Euler\'s criterion, $\\left(\\frac{a}{p}\\right)$ can be computed as:',
    options: [
      '$a^{p-1} \\pmod{p}$',
      '$a^{(p-1)/2} \\pmod{p}$',
      '$a^p \\pmod{p}$',
      '$a^2 \\pmod{p}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Euler\'s criterion states that $\\left(\\frac{a}{p}\\right) \\equiv a^{(p-1)/2} \\pmod{p}$. This gives a computational method: the result is either 1 (residue) or $p-1 \\equiv -1$ (non-residue).',
  },
  // Hard questions
  {
    id: 's42-h01',
    type: 'multiple-choice',
    question: 'Quadratic reciprocity states that for distinct odd primes $p$ and $q$:',
    options: [
      '$\\left(\\frac{pq}{2}\\right) = 1$',
      '$\\left(\\frac{p}{q}\\right) = \\left(\\frac{q}{p}\\right)$ always',
      '$\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2} \\cdot \\frac{q-1}{2}}$',
      '$p^q \\equiv q^p \\pmod{pq}$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The law of quadratic reciprocity gives a precise relationship between whether $p$ is a square mod $q$ and whether $q$ is a square mod $p$. The signs agree unless both $p \\equiv 3 \\pmod{4}$ and $q \\equiv 3 \\pmod{4}$, in which case they are opposite.',
  },
  {
    id: 's42-h02',
    type: 'multiple-choice',
    question: 'Gauss introduced Gaussian integers $\\mathbb{Z}[i]$ in connection with:',
    options: [
      'The Prime Number Theorem',
      'Quadratic reciprocity',
      'Fermat\'s Little Theorem',
      'Biquadratic (fourth power) reciprocity'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Gauss discovered that biquadratic reciprocity (when is $a$ a fourth power mod $p$?) is most naturally stated using Gaussian integers $a + bi$. This was an early example of extending number theory beyond ordinary integers to gain deeper understanding.',
  },
];
