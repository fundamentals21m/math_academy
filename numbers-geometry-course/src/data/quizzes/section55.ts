import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 55: Discussion (Finite Arithmetic chapter summary)
 */
export const section55Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What foundational work established modern number theory?',
    options: [
      'Newton\\'s Principia',
      'Euclid\\'s Elements',
      'Gauss\\'s Disquisitiones Arithmeticae',
      'Euler\\'s Introductio',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Gauss\'s Disquisitiones Arithmeticae (1801) founded modern number theory with its treatment of congruences and quadratic reciprocity.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which modern technology relies heavily on modular arithmetic?',
    options: [
      'Weather forecasting',
      'Medical imaging',
      'GPS navigation',
      'RSA cryptography',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'RSA cryptography relies on modular arithmetic, specifically the difficulty of factoring large numbers and computing discrete logarithms.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What makes Z/pZ special compared to Z/nZ for composite n?',
    options: [
      'It is a field (every non-zero element has an inverse)',
      'It has more elements',
      'It has more zero divisors',
      'It has no additive identity',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'When p is prime, Z/pZ is a field: every non-zero element has a multiplicative inverse. For composite n, Z/nZ has zero divisors.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Chinese Remainder Theorem shows that Z/mnZ is isomorphic to what (when gcd(m,n)=1)?',
    options: [
      'Z/mZ + Z/nZ',
      'Z/gcd(m,n)Z',
      'Z/mZ × Z/nZ',
      'Z/(m+n)Z',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'CRT establishes a ring isomorphism Z/mnZ ≅ Z/mZ × Z/nZ when gcd(m,n) = 1.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which theorem characterizes primes exactly?',
    options: [
      'Fermat\\'s Little Theorem',
      'Chinese Remainder Theorem',
      'Euler\\'s Theorem',
      'Wilson\\'s Theorem',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Wilson\'s Theorem is an "if and only if": p > 1 is prime iff (p-1)! ≡ -1 (mod p). Fermat\'s theorem has pseudoprimes.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What major area of mathematics grew from generalizing quadratic reciprocity?',
    options: [
      'Real analysis',
      'Class field theory',
      'Topology',
      'Differential geometry'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Class field theory (and later the Langlands program) grew from attempts to generalize quadratic reciprocity to higher powers and number fields.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What topic follows Finite Arithmetic in this course?',
    options: [
      'Complex Numbers',
      'Trigonometry',
      'Calculus',
      'Probability',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The next chapter explores Complex Numbers—another extension of our number systems.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Which statement best captures the theme of this chapter?',
    options: [
      'Remainders are just for division',
      'Finite structures reveal deep patterns in integers',
      'Modular arithmetic is only useful for clocks',
      'Primes are random',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The chapter shows how studying finite structures (Z/nZ) reveals profound patterns: Fermat\'s theorem, Wilson\'s theorem, and quadratic reciprocity.',
  },
];
