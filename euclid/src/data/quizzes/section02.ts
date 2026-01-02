import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.2 accomplish?',
    options: [
      'Bisects a given angle',
      'Places a straight line equal to a given line at a given point',
      'Constructs a perpendicular',
      'Divides a line into equal parts'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.2 shows how to construct at a given point a line segment equal in length to a given line segment.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which earlier proposition does I.2 rely on?',
    options: [
      'None - it uses only postulates',
      'Proposition I.1',
      'Both I.1 and Common Notion 1',
      'Proposition I.1 and Common Notion 3'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The proof uses I.1 (to construct an equilateral triangle) and Common Notion 3 (subtracting equals from equals).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is I.2 necessary given that we have compasses?',
    options: [
      'Euclid\'s compass "collapses" - it cannot transfer distances directly',
      'To prove that circles exist',
      'To show that points can be constructed',
      'It is not actually necessary'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Euclid\'s postulates describe a "collapsing compass" that cannot hold a radius when lifted. I.2 shows how to transfer distances using only circles centered at given points.',
  },
];
