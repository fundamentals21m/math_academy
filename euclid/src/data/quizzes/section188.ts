import type { QuizQuestion } from './types';

export const section188Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.9 state about equal parts?',
    options: [
      'Equal numbers have equal parts',
      'If A is the same part of B as C is of D, then alternately A is the same part of C as B is of D',
      'Parts of equal numbers are always equal',
      'Equal parts always sum to the whole'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VII.9 establishes the alternation property: if A/B = C/D (as parts), then A/C = B/D. This is a form of cross-multiplication reasoning.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 3 is one-fourth of 12, and 5 is one-fourth of 20, what does VII.9 tell us about the relationship between 3, 5, 12, and 20?',
    options: [
      '3 is to 5 as 12 is to 20',
      '3 is to 12 as 5 is to 20',
      '3 plus 5 equals one-fourth of 32',
      '12 is to 3 as 20 is to 5'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By VII.9: since 3 = (1/4)(12) and 5 = (1/4)(20), we can alternate to get 3:5 = 12:20 (both ratios equal 3:5). This is 3/5 = 12/20.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.9 is an early form of which property of proportions?',
    options: [
      'Transitivity of equality',
      'Alternando (alternation of proportions)',
      'Componendo (composition of proportions)',
      'Invertendo (inversion of proportions)'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'This is the alternando property: from a:b = c:d, we derive a:c = b:d. Euclid proves it here for numbers, having established it geometrically in Book V.',
  },
];
