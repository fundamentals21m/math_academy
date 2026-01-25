import type { QuizQuestion } from './types';

export const section156Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a "third proportional" to two given lines A and B?',
    options: [
      'A line C such that A + B = C',
      'A line C that bisects A and B',
      'A line C equal to (A + B)/2',
      'A line C such that A:B = B:C',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The third proportional C to lines A and B satisfies the proportion A:B = B:C, making B the geometric mean of A and C.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If A = 4 and B = 6, VI.11 constructs the third proportional C. What is C?',
    options: [
      '8',
      '10',
      '9',
      '12',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'From A:B = B:C, we have 4:6 = 6:C. Cross-multiplying: 4C = 36, so C = 9.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The construction of the third proportional in VI.11 is essential for:',
    options: [
      'Proving the Pythagorean theorem only',
      'Finding geometric means and solving problems involving continued proportion',
      'Bisecting angles',
      'Drawing regular hexagons',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VI.11 is fundamental for problems involving geometric sequences and continued proportions, where each term is the geometric mean of its neighbors.',
  },
];
