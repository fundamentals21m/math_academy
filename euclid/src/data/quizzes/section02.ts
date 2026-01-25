import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.2 accomplish?',
    options: [
      'Places a straight line equal to a given line at a given point',
      'Bisects a given angle',
      'Constructs a perpendicular',
      'Divides a line into equal parts',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'I.2 shows how to construct at a given point a line segment equal in length to a given line segment.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which earlier proposition does I.2 rely on?',
    options: [
      'None - it uses only postulates',
      'Proposition I.1 and Common Notion 3',
      'Proposition I.1',
      'Both I.1 and Common Notion 1',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The proof uses I.1 (to construct an equilateral triangle) and Common Notion 3 (subtracting equals from equals).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is I.2 necessary given that we have compasses?',
    options: [
      'It is not actually necessary',
      'To prove that circles exist',
      'To show that points can be constructed',
      'Euclid\\\'s compass "collapses" - it cannot transfer distances directly',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Euclid\'s postulates describe a "collapsing compass" that cannot hold a radius when lifted. I.2 shows how to transfer distances using only circles centered at given points.',
  },
];
