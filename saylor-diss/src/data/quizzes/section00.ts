import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What methodology does Saylor use to analyze Machiavelli\'s political philosophy?',
    options: ['Game theory', 'System dynamics', 'Statistical analysis', 'Historical comparison'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Saylor applies system dynamics methodology to model Machiavelli\'s political insights mathematically.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the main goal of the dissertation?',
    options: [
      'To test if Machiavelli\'s insights are mathematically consistent',
      'To translate The Prince into modern English',
      'To prove Machiavelli was wrong',
      'To compare Machiavelli to modern politicians'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The dissertation aims to model Machiavelli\'s political theory mathematically to test its internal consistency.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which institution did Saylor attend when writing this dissertation?',
    options: ['Harvard', 'Stanford', 'MIT', 'Princeton'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'This was Saylor\'s 1987 MIT thesis.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What Renaissance Italian city-state serves as the historical context for Machiavelli\'s writings?',
    correctAnswer: 'florence',
    difficulty: 'easy',
    explanation: 'Machiavelli served as a diplomat and official in the Florentine Republic.',
  },
];
