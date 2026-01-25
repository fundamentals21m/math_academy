import type { QuizQuestion } from './types';

export const section38Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Lebesgue measure assigns to each "nice" subset $E$ of $\\mathbf{R}^n$:',
    options: [
      'A vector in $\\mathbf{R}^n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Measure assigns a "size" (non-negative, possibly infinite) to sets.',
  },
      'A non-negative extended real number $m(E) \\in [0, \\infty]
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Measure assigns a "size" (non-negative, possibly infinite) to sets.',
  },
      'A function',
      'An integer',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Measure assigns a "size" (non-negative, possibly infinite) to sets.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The measure of an interval $[a, b]$ in $\\mathbf{R}$ should be:',
    options: [
      '$a + b
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The measure of an interval is its length.',
  },
      '$ab
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The measure of an interval is its length.',
  },
      '$|a| + |b|
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The measure of an interval is its length.',
  },
      '$b - a
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The measure of an interval is its length.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The measure of an interval is its length.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Lebesgue measure should satisfy countable additivity: if $E_1, E_2, \\ldots$ are disjoint, then:',
    options: [
      '$m(\\bigcup E_n) = \\max m(E_n)$',
      '$m(\\bigcup E_n) = \\sum m(E_n)$',
      '$m(\\bigcup E_n) = m(E_1)$',
      '$m(\\bigcup E_n) = 0$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Countable additivity: the measure of a disjoint union is the sum of the measures.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A key property of Lebesgue measure is translation invariance, meaning:',
    options: [
      '$m(E + x) = m(E)$ for all $x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Shifting a set doesn\'t change its measure.',
  },
      '$m(E + x) = m(E) + x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Shifting a set doesn\'t change its measure.',
  },
      '$m(E + x) = x \\cdot m(E)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Shifting a set doesn\'t change its measure.',
  },
      '$m(E + x) = m(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Shifting a set doesn\'t change its measure.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Shifting a set doesn\'t change its measure.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Lebesgue measure of any countable set (like $\\mathbf{Q}$) is:',
    options: [
      'Infinite',
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Countable sets have Lebesgue measure zero: they can be covered by intervals of arbitrarily small total length.',
  },
      '$0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Countable sets have Lebesgue measure zero: they can be covered by intervals of arbitrarily small total length.',
  },
      'Undefined',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Countable sets have Lebesgue measure zero: they can be covered by intervals of arbitrarily small total length.',
  },
];
