import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 52: Squares mod p
 */
export const section52Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a quadratic residue mod p?',
    options: [
      'An element divisible by p',
      'Any odd element mod p',
      'An element that is a perfect square in (Z/pZ)*',
      'An element equal to (p-1)/2',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'A quadratic residue mod p is a non-zero element a such that x² ≡ a (mod p) for some x.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many quadratic residues are there mod 11?',
    options: [
      '4',
      '6',
      '10',
      '5',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'For an odd prime p, there are exactly (p-1)/2 quadratic residues. For p = 11: (11-1)/2 = 5.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the Legendre symbol (3/7)?',
    options: [
      '1',
      '0',
      '-1',
      '3',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Using Euler\'s criterion: 3^((7-1)/2) = 3³ = 27 = 3×7 + 6 ≡ 6 ≡ -1 (mod 7). Wait, let me recompute: 3³ = 27 = 28 - 1 ≡ -1. So (3/7) = -1. Actually checking: 1²=1, 2²=4, 3²=2, 4²=2, 5²=4, 6²=1. So QRs are {1,2,4} and 3 is NOT a QR. (3/7) = -1.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does Euler\'s criterion state?',
    options: [
      '(a/p) = a^(p-1)',
      '(a/p) = a/p',
      '(a/p) = p^a',
      '(a/p) ≡ a^((p-1)/2) (mod p)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Euler\'s criterion states that (a/p) ≡ a^((p-1)/2) (mod p), giving a computational method.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Is 2 a quadratic residue mod 7?',
    options: [
      'Yes, because 2 < 7',
      'Yes, because 3² ≡ 2 (mod 7)',
      'No, because 2 is even',
      'No, because 2^3 ≡ 1 (mod 7)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      '3² = 9 = 7 + 2 ≡ 2 (mod 7), so 2 is a quadratic residue with square root 3 (and also 4).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the product of two quadratic non-residues mod p?',
    options: [
      'A non-residue',
      '0',
      'A residue',
      'Undefined',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Since the Legendre symbol is multiplicative: (-1)(-1) = 1. The product of two non-residues is a residue.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Which property does the Legendre symbol satisfy?',
    options: [
      'Multiplicative: (ab/p) = (a/p)(b/p)',
      'Additive: (a+b/p) = (a/p) + (b/p)',
      'None of the above',
      'Exponential: (a^b/p) = (a/p)^b',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The Legendre symbol is multiplicative: (ab/p) = (a/p)(b/p). This follows from Euler\'s criterion.',
  },
  {
    id: 8,
    type: 'numeric',
    question: 'Using Euler\'s criterion, compute 2^5 mod 11. (Hint: this gives the Legendre symbol (2/11).)',
    correctAnswer: 10,
    numericRange: { min: 10, max: 10, precision: 0 },
    difficulty: 'hard',
    explanation:
      '2^5 = 32 = 33 - 1 = 3×11 - 1 ≡ -1 ≡ 10 (mod 11). So (2/11) = -1, meaning 2 is not a square mod 11.',
  },
];
