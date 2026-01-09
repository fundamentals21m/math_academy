import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An equivalence relation must be:',
    options: [
      'Reflexive, symmetric, and transitive',
      'Reflexive and symmetric only',
      'Symmetric and transitive only',
      'Antisymmetric and transitive'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The three defining properties of an equivalence relation are reflexivity, symmetry, and transitivity.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A relation is reflexive if:',
    options: [
      '$a \\sim a$ for all $a$',
      '$a \\sim b$ implies $b \\sim a$',
      '$a \\sim b$ and $b \\sim c$ implies $a \\sim c$',
      '$a \\sim b$ and $b \\sim a$ implies $a = b$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Reflexivity: every element is related to itself.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'An equivalence relation partitions a set into:',
    options: [
      'Disjoint equivalence classes',
      'Overlapping subsets',
      'A single subset',
      'The power set'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Equivalence classes are disjoint and their union is the whole set.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A partial order is:',
    options: [
      'Reflexive, antisymmetric, and transitive',
      'Reflexive, symmetric, and transitive',
      'Only reflexive and transitive',
      'Only antisymmetric'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A partial order satisfies reflexivity, antisymmetry, and transitivity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of the following is an example of an equivalence relation on integers?',
    options: [
      'Congruence modulo $n$',
      'Less than ($<$)',
      'Divisibility ($\\mid$)',
      'Greater than or equal ($\\geq$)'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Congruence mod $n$ is reflexive, symmetric, and transitive.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $[a]$ and $[b]$ are equivalence classes with $[a] \\cap [b] \\neq \\emptyset$, then:',
    options: [
      '$[a] = [b]$',
      '$[a] \\subset [b]$',
      '$[b] \\subset [a]$',
      '$[a]$ and $[b]$ are disjoint'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Equivalence classes are either equal or disjoint.',
  },
];
