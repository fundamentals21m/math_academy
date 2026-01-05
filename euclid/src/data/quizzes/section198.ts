import type { QuizQuestion } from './types';

export const section198Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.19 state about proportional numbers and products?',
    options: [
      'Proportional numbers have equal products of extremes and means',
      'If a:b = c:d, then a times d = b times c',
      'Products of proportional numbers form new proportions',
      'Both A and B are correct'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'VII.19 proves: If a:b = c:d, then a times d = b times c. This is the cross-multiplication principle, showing that products of extremes equal products of means.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 3:6 = 5:10, what does VII.19 tell us about the products?',
    options: [
      '3 times 10 = 6 times 5 = 30',
      '3 times 5 = 6 times 10',
      '3 plus 10 = 6 plus 5',
      'The products are in the same ratio'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By VII.19 (cross-multiplication), since 3:6 = 5:10, we have 3 times 10 = 30 = 6 times 5. The products of extremes equal the products of means.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.19 provides the foundation for which algebraic technique?',
    options: [
      'Completing the square',
      'Cross-multiplication to solve proportions',
      'Polynomial long division',
      'The quadratic formula'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VII.19 is the ancient justification for cross-multiplication. When solving a/b = c/x, we use ad = bc (from VII.19) to find x. This fundamental technique derives from Euclid\'s proposition.',
  },
];
