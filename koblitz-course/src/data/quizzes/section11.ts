import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The knapsack problem asks to find a subset of weights that:',
    options: [
      'Minimizes total weight',
      'Maximizes value given a capacity',
      'Sums to a target value',
      'Has exactly $k$ elements',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The subset sum variant: given weights $w_i$ and target $S$, find subset summing to $S$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A superincreasing sequence has the property that:',
    options: [
      'Each term is prime',
      'Terms alternate between even and odd',
      'Each term is a power of 2',
      'Each term is greater than the sum of all previous terms',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In a superincreasing sequence, $a_i > \\sum_{j<i} a_j$ for all $i$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Merkle-Hellman knapsack cryptosystem was broken by:',
    options: [
      'Lattice reduction (LLL algorithm)',
      'Quantum computers',
      'Differential cryptanalysis',
      'Brute force',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Shamir and later LLL-based attacks broke Merkle-Hellman in polynomial time.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'For a superincreasing sequence $(1, 2, 5, 11)$, what target sum is represented by the binary $(1,0,1,1)$?',
    correctAnswer: 17,
    numericRange: { min: 0, max: 30, precision: 0 },
    difficulty: 'easy',
    explanation: 'Binary $(1,0,1,1)$ selects $1 + 5 + 11 = 17$.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What complexity class contains the general knapsack problem (hint: abbreviation)?',
    correctAnswer: 'NP',
    difficulty: 'medium',
    explanation: 'The subset sum / knapsack problem is NP-complete.',
  },
];
