import type { QuizQuestion } from './types';

export const section122Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.3 prove about proportions and equimultiples?',
    options: [
      'If A:B = C:D, then mA:nB = mC:nD for any positive integers m, n',
      'Equimultiples destroy proportions',
      'Only certain multiples preserve proportions',
      'Proportions only work with whole numbers',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'V.3 shows that proportions are "scale-invariant"—multiplying corresponding terms by the same factors preserves the proportion.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is V.3 fundamental to the theory of proportions?',
    options: [
      'It defines what a proportion is',
      'It eliminates irrational ratios',
      'It proves all ratios are equal',
      'It shows proportions can be checked at any scale without changing the result',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'V.3 establishes that proportions are preserved under scaling, which is essential for working with proportions at different magnitudes.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If 2:3 = 4:6, what does V.3 tell us about 6:9 and 12:18?',
    options: [
      'They are not related',
      'One is larger than the other',
      'They are equal (both are 2:3 scaled)',
      'We cannot compare them',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '6:9 = 3×(2:3) and 12:18 = 3×(4:6). Since 2:3 = 4:6, by V.3, 6:9 = 12:18.',
  },
];
