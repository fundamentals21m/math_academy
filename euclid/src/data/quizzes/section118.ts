import type { QuizQuestion } from './types';

export const section118Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How does IV.16 construct a regular 15-gon from existing constructions?',
    options: [
      'By bisecting angles of a pentagon',
      'By combining the triangle (1/3 of circle) and pentagon (1/5 of circle)',
      'By tripling a pentagon',
      'By using the golden ratio five times'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The key insight is 1/3 - 1/5 = 2/15. By marking both triangle and pentagon vertices, the arc between them is 2/15 of the circle, which can be bisected to get 1/15.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What arithmetic makes the 15-gon construction possible?',
    options: [
      '3 + 5 = 8',
      '3 × 5 = 15, where 3 and 5 share no common factors',
      '15 ÷ 3 = 5',
      '15 - 3 - 5 = 7'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Since gcd(3,5) = 1 (coprime), we can construct a 15-gon. The calculation 1/3 - 1/5 = 5/15 - 3/15 = 2/15 gives us a constructible arc.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which regular polygon CANNOT be constructed with compass and straightedge?',
    options: [
      'Pentagon (5 sides)',
      'Hexagon (6 sides)',
      'Heptagon (7 sides)',
      '15-gon'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The regular heptagon (7 sides) is not constructible with compass and straightedge. Gauss proved which polygons are constructible in 1796.',
  },
];
