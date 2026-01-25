import type { QuizQuestion } from './types';

export const section191Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.12 generalize from VII.11?',
    options: [
      'It applies VII.11 to any number of proportional numbers, not just four',
      'It proves VII.11 for negative numbers',
      'It restricts VII.11 to prime numbers',
      'It proves the converse of VII.11',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VII.12 extends the proportional remainder property to any number of terms: if A:B = C:D = E:F = ..., then corresponding differences maintain the same ratio.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 8:12 = 10:15 = 14:21, what is (8+10+14):(12+15+21)?',
    options: [
      '24:36, which equals 2:3',
      '32:48, which equals 8:12',
      'The sums are not proportional',
      '32:48, which equals 2:3',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By VII.12: when numbers are in the same ratio (all equal to 2:3), their sums maintain that ratio. 8+10+14=32 and 12+15+21=48, so 32:48 = 2:3.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the key insight that allows VII.12 to extend from four terms to any number?',
    options: [
      'Mathematical induction',
      'The Euclidean algorithm',
      'The associativity of addition combined with repeated application',
      'Prime factorization',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'VII.12 works by repeatedly applying VII.11. Once we know the property holds for four terms, we can add more pairs and apply the same reasoning, building up to any number of terms.',
  },
];
