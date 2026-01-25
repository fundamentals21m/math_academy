import type { QuizQuestion } from './types';

export const section78Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Lebesgue measure $m$ on $\\mathbb{R}$ is characterized by:',
    options: [
      '$m(A) = 1$ for all non-empty sets',
      '$m(A) = $ number of elements in $A
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Lebesgue measure extends length: intervals have measure equal to their length, and the measure is countably additive on measurable sets.',
  },
      '$m([a,b]) = |b - a|^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Lebesgue measure extends length: intervals have measure equal to their length, and the measure is countably additive on measurable sets.',
  },
      '$m([a,b]) = b - a$ and countable additivity',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Lebesgue measure extends length: intervals have measure equal to their length, and the measure is countably additive on measurable sets.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A set $E \\subset \\mathbb{R}$ has Lebesgue measure zero if:',
    options: [
      'For every $\\varepsilon > 0$, $E$ can be covered by intervals with total length $< \\varepsilon
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Measure zero means $E$ can be covered by countably many intervals of arbitrarily small total length. Countable sets have measure zero, but some uncountable sets do too (like the Cantor set).',
  },
      '$E$ is bounded',
      '$E$ is finite',
      '$E$ is countable',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Measure zero means $E$ can be covered by countably many intervals of arbitrarily small total length. Countable sets have measure zero, but some uncountable sets do too (like the Cantor set).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Cantor set $C$ is an example of a set that is:',
    options: [
      'Countable with positive measure',
      'Uncountable with positive measure',
      'Uncountable with Lebesgue measure zero',
      'Finite with measure zero',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Cantor set is constructed by removing middle thirds. It is uncountable (has cardinality $2^{\\aleph_0}$) but has measure zero (the removed intervals have total length 1).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A set $E \\subset \\mathbb{R}^n$ is Lebesgue measurable if:',
    options: [
      'For every $A$, $m^*(A) = m^*(A \\cap E) + m^*(A \\cap E^c)$ (Carathéodory criterion)',
      '$E$ is open or closed',
      '$E$ is bounded',
      '$m^*(E) < \\infty
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Carathéodory criterion defines measurability: $E$ is measurable if it splits every set $A$ additively with respect to outer measure.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Carathéodory criterion defines measurability: $E$ is measurable if it splits every set $A$ additively with respect to outer measure.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Lebesgue measure is translation invariant, meaning:',
    options: [
      '$m(E \\cup F) = m(E) + m(F)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Translation invariance: shifting a set does not change its measure. Combined with countable additivity and normalization on intervals, this characterizes Lebesgue measure.',
  },
      '$m(E + x) = m(E)$ for all $E$ and $x \\in \\mathbb{R}^n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Translation invariance: shifting a set does not change its measure. Combined with countable additivity and normalization on intervals, this characterizes Lebesgue measure.',
  },
      '$m(E) = m(-E)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Translation invariance: shifting a set does not change its measure. Combined with countable additivity and normalization on intervals, this characterizes Lebesgue measure.',
  },
      '$m(cE) = c \\cdot m(E)$ for $c > 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Translation invariance: shifting a set does not change its measure. Combined with countable additivity and normalization on intervals, this characterizes Lebesgue measure.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Translation invariance: shifting a set does not change its measure. Combined with countable additivity and normalization on intervals, this characterizes Lebesgue measure.',
  },
];
