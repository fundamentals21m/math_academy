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
      'All terms being equal',
      'Terms being matched across sequences via middle terms B and E',
      'No pattern at all'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The perturbed pattern links sequences via middle terms: A:B = D:E and B:C = E:F connect through B and E.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'V.20 is preparation for which important theorem?',
    options: [
      'The ex aequali theorems (V.22-23)',
      'The Pythagorean theorem',
      'The angle sum theorem',
      'The parallel postulate',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'V.20 prepares for the ex aequali results, which allow "multiplying" ratios by eliminating middle terms.',
  },
];
