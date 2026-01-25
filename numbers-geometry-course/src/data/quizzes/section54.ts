import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 54: Quadratic Reciprocity (Advanced)
 */
export const section54Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the quadratic reciprocity law?',
    options: [
      '(p/q) = (q/p) always',
      '(p/q)(q/p) = (-1)^((p-1)/2 · (q-1)/2)',
      '(pq) is always a square',
      '(p/q) + (q/p) = 0',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The quadratic reciprocity law states that (p/q)(q/p) = (-1)^((p-1)/2 · (q-1)/2) for distinct odd primes p, q.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When are (p/q) and (q/p) opposite in sign?',
    options: [
      'When both p and q are ≡ 1 (mod 4)',
      'When p + q is even',
      'When both p and q are ≡ 3 (mod 4)',
      'Never',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The product (p/q)(q/p) = -1 exactly when (p-1)/2 and (q-1)/2 are both odd, i.e., both p, q ≡ 3 (mod 4).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who first proved quadratic reciprocity?',
    options: [
      'Euler',
      'Fermat',
      'Legendre',
      'Gauss',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Gauss gave the first complete proof in 1796 at age 18. Euler and Legendre had conjectured it earlier.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Using reciprocity, if p = 5 and q = 11, what is (p/q)(q/p)?',
    options: [
      '-1',
      '1',
      '0',
      '5',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'p = 5 ≡ 1 (mod 4), so (p-1)/2 = 2 is even. Thus (5/11)(11/5) = (-1)^(2·5) = (-1)^10 = 1.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What name did Gauss give to the quadratic reciprocity theorem?',
    options: [
      'Theorema primum',
      'Theorema magnum',
      'Theorema aureum (golden theorem)',
      'Theorema fundamentale',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Gauss called it the "theorema aureum" (golden theorem), reflecting its central importance.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For p = 3, q = 7 (both ≡ 3 mod 4), if (3/7) = -1, what is (7/3)?',
    options: [
      '1',
      '-1',
      '0',
      '7',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Since both are ≡ 3 (mod 4), (3/7)(7/3) = -1. Given (3/7) = -1, we have (-1)(7/3) = -1, so (7/3) = 1.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What mathematical objects are used in Gauss\'s elegant proof of reciprocity?',
    options: [
      'Gauss sums',
      'Matrices',
      'Differential equations',
      'Continued fractions',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Gauss sums are exponential sums involving the Legendre symbol. Their properties lead to quadratic reciprocity.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'Which major area of modern mathematics grew from attempts to generalize quadratic reciprocity?',
    options: [
      'Calculus',
      'Probability theory',
      'Topology',
      'Class field theory and the Langlands program',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The quest to generalize QR to higher powers and number fields led to class field theory and eventually the Langlands program.',
  },
];
