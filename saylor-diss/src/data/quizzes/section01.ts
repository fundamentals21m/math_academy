import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'During which century did Machiavelli live and work?',
    options: [
      '14th century',
      '17th century',
      '18th century',
      '15th-16th century',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Machiavelli lived from 1469 to 1527, spanning the late 15th and early 16th centuries.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What position did Machiavelli hold in the Florentine government?',
    options: [
      'Secretary and diplomat',
      'Duke',
      'Pope',
      'Military general',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Machiavelli served as a diplomat and Secretary of the Second Chancery in Florence.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which family\'s return to power ended Machiavelli\'s political career?',
    options: [
      'The Borgias',
      'The Medicis',
      'The Sforzas',
      'The Viscontis',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The return of the Medici family in 1512 ended Machiavelli\'s political career.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What are Machiavelli\'s two most famous political works?',
    options: [
      'The Republic and The Laws',
      'Leviathan and Two Treatises',
      'The Prince and The Discourses',
      'Politics and Ethics',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Prince and The Discourses on Livy are Machiavelli\'s principal political works.',
  },
];
