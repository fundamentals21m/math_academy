import type { QuizQuestion } from './types';

export const section189Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How does Proposition VII.10 extend VII.9?',
    options: [
      'It applies to negative numbers',
      'It extends alternation from "a part" to "parts" (multiple equal parts)',
      'It proves the converse of VII.9',
      'It restricts VII.9 to prime numbers'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VII.10 extends the alternation principle from single parts (1/n) to multiple parts (m/n), completing the generalization.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 6 is two-thirds of 9, and 10 is two-thirds of 15, what ratio does VII.10 establish?',
    options: [
      '6:10 = 9:15',
      '6:9 = 10:15',
      '6:15 = 9:10',
      '9:6 = 15:10'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By VII.10: since 6 = (2/3)(9) and 10 = (2/3)(15), alternation gives 6:10 = 9:15. Both ratios simplify to 3:5.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the logical relationship between VII.9 and VII.10?',
    options: [
      'VII.10 is the converse of VII.9',
      'VII.9 is a special case of VII.10 where m=1',
      'They are logically independent',
      'VII.10 disproves VII.9 for composite numbers'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VII.9 handles the case where A is 1/n of B (a single part). VII.10 handles m/n (multiple parts). When m=1, VII.10 reduces to VII.9.',
  },
];
