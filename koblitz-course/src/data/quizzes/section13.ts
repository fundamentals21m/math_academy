import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A Fermat pseudoprime to base $a$ is a composite $n$ satisfying:',
    options: [
      '$a^n \\equiv a \\pmod{n}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Fermat pseudoprime: composite $n$ with $a^{n-1} \\equiv 1 \\pmod{n}$ (passes Fermat test).',
  },
      '$a^{n-1} \\equiv 1 \\pmod{n}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat pseudoprime: composite $n$ with $a^{n-1} \\equiv 1 \\pmod{n}$ (passes Fermat test).',
  },
      '$n^a \\equiv 1 \\pmod{a}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat pseudoprime: composite $n$ with $a^{n-1} \\equiv 1 \\pmod{n}$ (passes Fermat test).',
  },
      '$a^{n+1} \\equiv 1 \\pmod{n}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat pseudoprime: composite $n$ with $a^{n-1} \\equiv 1 \\pmod{n}$ (passes Fermat test).',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat pseudoprime: composite $n$ with $a^{n-1} \\equiv 1 \\pmod{n}$ (passes Fermat test).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A Carmichael number is:',
    options: [
      'A prime that looks composite',
      'A prime power',
      'A Mersenne prime',
      'A composite that passes Fermat test for all bases coprime to it',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Carmichael numbers are absolute Fermat pseudoprimes—they fool the Fermat test for all valid bases.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Miller-Rabin test improves on Fermat by also checking:',
    options: [
      'Square roots of 1 (witnesses)',
      'More bases',
      'Larger exponents',
      'Prime factorization',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Miller-Rabin checks if $a^d \\equiv 1$ or $a^{2^r d} \\equiv -1$ for proper witnesses.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'The smallest Carmichael number is:',
    correctAnswer: 561,
    numericRange: { min: 100, max: 1000, precision: 0 },
    difficulty: 'hard',
    explanation: '$561 = 3 \\times 11 \\times 17$ is the smallest Carmichael number.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What type of primality test gives a definite answer (not probabilistic)?',
    correctAnswer: 'deterministic',
    difficulty: 'easy',
    explanation: 'Deterministic tests (like AKS) always correctly identify primes, unlike probabilistic tests.',
  },
];
