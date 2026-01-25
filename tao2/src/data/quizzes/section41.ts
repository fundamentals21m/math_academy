import type { QuizQuestion } from './types';

export const section41Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A set $E$ is Lebesgue measurable (Carathéodory criterion) if for all sets $A$:',
    options: [
      '$m^*(A) = m^*(E)$',
      '$m^*(E) = 0$',
      '$m^*(A) = m^*(A \\cap E) + m^*(A \\cap E^c)$',
      '$E$ is an interval'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Carathéodory: $E$ is measurable if it "splits" every set additively.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The collection of Lebesgue measurable sets forms a:',
    options: [
      'Vector space',
      '$\\sigma$-algebra',
      'Ring (but not $\\sigma$-algebra)',
      'Group',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Measurable sets form a $\\sigma$-algebra: closed under complements and countable unions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'All open sets in $\\mathbf{R}^n$ are:',
    options: [
      'Not measurable',
      'Measure zero',
      'Measure infinity',
      'Lebesgue measurable',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Open sets, closed sets, and all Borel sets are Lebesgue measurable.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $m^*(E) = 0$, then $E$ is:',
    options: [
      'Lebesgue measurable with $m(E) = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Sets of outer measure zero are automatically measurable (null sets).',
  },
      'Not measurable',
      'An open set',
      'Uncountable',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Sets of outer measure zero are automatically measurable (null sets).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Lebesgue $\\sigma$-algebra is:',
    options: [
      'Larger than the Borel $\\sigma$-algebra (it\\'s the completion)',
      'Smaller than the Borel $\\sigma$-algebra',
      'Equal to the Borel $\\sigma$-algebra',
      'Unrelated to the Borel $\\sigma$-algebra',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Lebesgue $\\sigma$-algebra contains all Borel sets plus all subsets of null sets.',
  },
];
