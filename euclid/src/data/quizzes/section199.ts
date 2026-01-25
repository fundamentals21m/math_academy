import type { QuizQuestion } from './types';

export const section199Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.20 prove about least numbers in a ratio?',
    options: [
      'Every ratio can be expressed in infinitely many ways',
      'The least numbers in a given ratio measure any other numbers in the same ratio',
      'Least numbers in a ratio are always prime',
      'There is exactly one pair of least numbers for any ratio',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VII.20: The least numbers in a ratio measure any other pair of numbers having the same ratio. For example, 2:3 (in lowest terms) measures 4:6, 6:9, etc.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 2:3 is in lowest terms, and 8:12 is in the same ratio, how does 2 measure 8 and 3 measure 12?',
    options: [
      '2 measures 8 four times, 3 measures 12 four times',
      '2 measures 8 two times, 3 measures 12 two times',
      '2 measures 8 three times, 3 measures 12 four times',
      '2 measures 8 once, 3 measures 12 once',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since 8 = 2 times 4 and 12 = 3 times 4, both the antecedent and consequent of the least ratio measure the corresponding terms of 8:12 the same number of times (4).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the modern interpretation of VII.20?',
    options: [
      'Every fraction equals a unique decimal',
      'Fractions can always be reduced',
      'GCD of numerator and denominator equals 1 for reduced fractions',
      'A fraction in lowest terms divides any equivalent fraction by the same factor',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'VII.20 says that if a/b is in lowest terms and a/b = c/d, then a|c and b|d with the same quotient. This means c = ka and d = kb for some k, i.e., c/d is a multiple of a/b.',
  },
];
