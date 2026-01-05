import type { QuizQuestion } from './types';

export const section139Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.20 establish about chained proportions?',
    options: [
      'Chained proportions cannot be compared',
      'If A:B = D:E and B:C = E:F, then comparing A vs C determines D vs F',
      'All chained magnitudes are equal',
      'Chains destroy proportions'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V.20 shows that when we chain proportions, the comparison of first to last in one sequence matches the same comparison in the other.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In V.20, the "perturbed" pattern refers to:',
    options: [
      'Random arrangement',
      'Terms being matched across sequences via middle terms B and E',
      'All terms being equal',
      'No pattern at all'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The perturbed pattern links sequences via middle terms: A:B = D:E and B:C = E:F connect through B and E.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'V.20 is preparation for which important theorem?',
    options: [
      'The Pythagorean theorem',
      'The ex aequali theorems (V.22-23)',
      'The parallel postulate',
      'The angle sum theorem'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V.20 prepares for the ex aequali results, which allow "multiplying" ratios by eliminating middle terms.',
  },
];
