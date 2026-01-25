import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many regular polyhedra exist?',
    options: [
      'Infinitely many',
      'Five',
      'Four',
      'Six',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'There are exactly five: tetrahedron, cube, octahedron, dodecahedron, and icosahedron.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The climax of Euclid\'s Elements is the theory of:',
    options: [
      'Circle properties',
      'Parallel lines',
      'Regular polyhedra',
      'Number theory',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Book XIII constructs all five regular polyhedra, which many believe was Euclid\'s ultimate goal.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A Fermat prime has the form:',
    options: [
      '$2^{2^m} + 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Fermat primes are $F_m = 2^{2^m} + 1$. Known examples: 3, 5, 17, 257, 65537.',
  },
      '$2^n + 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat primes are $F_m = 2^{2^m} + 1$. Known examples: 3, 5, 17, 257, 65537.',
  },
      '$2^n - 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat primes are $F_m = 2^{2^m} + 1$. Known examples: 3, 5, 17, 257, 65537.',
  },
      '$n^2 + 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat primes are $F_m = 2^{2^m} + 1$. Known examples: 3, 5, 17, 257, 65537.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat primes are $F_m = 2^{2^m} + 1$. Known examples: 3, 5, 17, 257, 65537.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Euler showed that $F_5 = 2^{32} + 1 = 4{,}294{,}967{,}297$ is:',
    options: [
      'Composite (divisible by 641)',
      'A perfect square',
      'Prime',
      'Irrational',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Euler proved F₅ = 641 × 6,700,417, disproving Fermat\'s conjecture that all Fₘ are prime.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A regular n-gon is constructible iff n has the form:',
    options: [
      '$n = 2^k
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Gauss-Wantzel: n-gon is constructible iff n = 2ᵏ times a product of distinct Fermat primes.',
  },
      '$n$ is any power of 2',
      '$n$ is any prime',
      '$n = 2^k \\cdot p_1 \\cdots p_r$ with distinct Fermat primes $p_i
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Gauss-Wantzel: n-gon is constructible iff n = 2ᵏ times a product of distinct Fermat primes.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Gauss-Wantzel: n-gon is constructible iff n = 2ᵏ times a product of distinct Fermat primes.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which regular polygon was NOT known to be constructible until Gauss?',
    options: [
      'Pentagon (5-gon)',
      'Triangle (3-gon)',
      'Hexagon (6-gon)',
      'Heptadecagon (17-gon)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Gauss showed in 1796 that the regular 17-gon is constructible, a major breakthrough.',
  },
];
