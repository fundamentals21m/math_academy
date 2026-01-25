import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 'sec26-q1',
    type: 'multiple-choice',
    question: 'A rearrangement of a series $\\sum a_n$ is:',
    options: [
      'Multiplying each term by a constant',
      'Taking every other term',
      'A series $\\sum a_{\\sigma(n)}$ where $\\sigma: \\mathbb{Z}^+ \\to \\mathbb{Z}^+$ is a bijection',
      'Reversing the order of the first $N$ terms'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A rearrangement uses a bijection $\\sigma$ to reorder the terms. Every term appears exactly once, just in a different order.',
  },
  {
    id: 'sec26-q2',
    type: 'multiple-choice',
    question: 'If $\\sum a_n$ converges absolutely, then any rearrangement:',
    options: [
      'Diverges',
      'May converge to a different sum',
      'Converges conditionally',
      'Converges to the same sum'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Absolutely convergent series are unconditionally convergent: any rearrangement converges to the same sum. This is a key property distinguishing absolute from conditional convergence.',
  },
  {
    id: 'sec26-q3',
    type: 'multiple-choice',
    question: 'The Riemann rearrangement theorem states that if $\\sum a_n$ converges conditionally, then:',
    options: [
      'Rearrangements can converge to any real number, or diverge',
      'All rearrangements converge to the same sum',
      'No rearrangement exists',
      'The series converges absolutely'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Riemann\'s theorem: a conditionally convergent series can be rearranged to converge to any given real number $L$, or to diverge to $+\\infty$, $-\\infty$, or oscillate.',
  },
  {
    id: 'sec26-q4',
    type: 'multiple-choice',
    question: 'The alternating harmonic series can be rearranged to converge to:',
    options: [
      'Only $\\ln 2$',
      'Any real number',
      'Any positive number',
      'Only integers'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The alternating harmonic series converges conditionally. By Riemann\'s theorem, it can be rearranged to sum to any real number. For example, certain rearrangements give $3\\ln 2/2$ instead of $\\ln 2$.',
  },
  {
    id: 'sec26-q5',
    type: 'multiple-choice',
    question: 'Why can rearrangements change the sum of a conditionally convergent series?',
    options: [
      'Because the limit is irrational',
      'Because the terms are not decreasing',
      'Because $\\sum a_n^+ = \\infty$ and $\\sum a_n^- = \\infty$ (both positive and negative parts diverge)',
      'Because the series has infinitely many terms'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Conditional convergence means $\\sum |a_n| = \\infty$. Split: $a_n^+ = \\max(a_n, 0)$ and $a_n^- = \\max(-a_n, 0)$. Both $\\sum a_n^+$ and $\\sum a_n^-$ diverge, allowing arbitrary rearrangement sums.',
  },
];
