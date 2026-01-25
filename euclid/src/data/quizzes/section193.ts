import type { QuizQuestion } from './types';

export const section193Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.14 (ex aequali for numbers) state?',
    options: [
      'Proportional numbers are always commensurable',
      'If a:b = b:c, then a:c = a squared to b squared',
      'If a:b = c:d and b:e = d:f, then a:e = c:f',
      'Equal numbers have equal ratios to any number',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VII.14 establishes ex aequali: chaining proportions through a common middle term. If a:b = c:d and b:e = d:f, then we can conclude a:e = c:f.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Given 6:3 = 10:5 and 3:2 = 5:x, what value of x makes the chain valid for applying ex aequali?',
    options: [
      'x = 3',
      'x = 15/2',
      'x = 5/3',
      'x = 10/3',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For the proportion 3:2 = 5:x, we need 3x = 10, so x = 10/3. This maintains the proportion chain needed for ex aequali.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The ex aequali principle for numbers is analogous to which algebraic operation?',
    options: [
      'Multiplying fractions (canceling middle terms)',
      'Adding fractions with common denominators',
      'Finding greatest common divisors',
      'Reducing fractions to lowest terms',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Ex aequali corresponds to multiplying fractions: (a/b) times (b/e) = a/e. The middle term b cancels, just as the ex aequali principle chains ratios through common terms.',
  },
];
