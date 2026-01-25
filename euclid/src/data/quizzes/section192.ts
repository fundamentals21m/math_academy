import type { QuizQuestion } from './types';

export const section192Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What property does Proposition VII.13 establish for proportional numbers?',
    options: [
      'Proportional numbers are always prime',
      'If A:B = C:D, then alternately A:C = B:D',
      'Proportional numbers have the same number of digits',
      'All proportional numbers share a common factor',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VII.13 proves the alternation property for proportional numbers: from A:B = C:D, we can derive A:C = B:D.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 6:9 = 10:15, what does VII.13 tell us?',
    options: [
      '6:15 = 9:10',
      '9:6 = 15:10',
      '6:10 = 9:15',
      '6+9 = 10+15',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By VII.13 (alternando): from 6:9 = 10:15, we get 6:10 = 9:15. Both the original and alternated ratios equal 2:3.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How do VII.9-10 and VII.13 relate to each other?',
    options: [
      'VII.9-10 prove alternation from part relationships; VII.13 proves it from proportionality',
      'They are completely different propositions',
      'VII.13 contradicts VII.9-10',
      'VII.9-10 are special cases used only when VII.13 fails',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'VII.9-10 establish alternation by analyzing the "part" relationship directly. VII.13 proves the same alternation result but starts from the proportion A:B = C:D, using different methods.',
  },
];
