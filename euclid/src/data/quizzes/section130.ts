import type { QuizQuestion } from './types';

export const section130Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What fundamental property does V.11 establish for ratio equality?',
    options: [
      'Reflexivity',
      'Symmetry',
      'Transitivity: if A:B = C:D and C:D = E:F, then A:B = E:F',
      'Anti-symmetry'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'V.11 proves transitivity: ratios equal to the same ratio are equal to each other.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is transitivity important for the theory of proportions?',
    options: [
      'It is not important',
      'It allows us to chain equalities and conclude relationships between first and last',
      'It proves all ratios are equal',
      'It only works for numbers'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Transitivity lets us build chains of reasoning: if we prove A:B = C:D and C:D = E:F separately, we can conclude A:B = E:F.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Together with reflexivity and symmetry, transitivity (V.11) shows that "having the same ratio" is a(n):',
    options: [
      'Function',
      'Order relation',
      'Equivalence relation',
      'Partial order'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Reflexive (A:B = A:B), symmetric (if A:B = C:D then C:D = A:B), and transitive (V.11) together make ratio equality an equivalence relation.',
  },
];
