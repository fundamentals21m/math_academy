import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the name of the youth organization that encourages children to spy on their parents?',
    options: [
      'The Spies',
      'The Youth League',
      'The Junior Party',
      'The Watchers'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Spies is the youth organization for children that indoctrinates them into Party ideology and encourages them to report unorthodoxy in adults.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is Winston\'s neighbor Tom Parsons considered an ideal Party member?',
    options: [
      'He is extremely intelligent',
      'He is utterly orthodox and unquestioningly obedient',
      'He questions the Party\'s decisions wisely',
      'He has risen to the Inner Party'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Parsons represents the ideal Party member: completely orthodox, unquestioningly obedient, and intellectually incapable of thoughtcrime.'
  },
  {
    id: 3,
    type: 'text',
    question: 'What crime does Winston commit by writing in his diary?',
    correctAnswer: 'thoughtcrime',
    difficulty: 'easy',
    explanation: 'Keeping a diary is an act of thoughtcrime—the criminal act of holding unspoken beliefs or doubts that oppose the Party.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How does the Party use children against their parents?',
    options: [
      'Children are taken away at birth',
      'Children must report for duty in the army at age 10',
      'Children are trained to spy on and denounce their parents',
      'Parents are forbidden from having children'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Party turns children into instruments of surveillance, encouraging them to report any signs of unorthodoxy in their parents.'
  }
];
