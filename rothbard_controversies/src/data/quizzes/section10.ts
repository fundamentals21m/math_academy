import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'When was the Ludwig von Mises Institute founded?',
    options: [
      '1962',
      '1982',
      '1974',
      '1991',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Ludwig von Mises Institute, founded in 1982, has become a center for Austrian scholarship, publishing books and journals, sponsoring conferences, and training young economists.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Who developed the influential theory of entrepreneurial alertness?',
    options: [
      'Murray Rothbard',
      'F.A. Hayek',
      'Israel Kirzner',
      'Carl Menger',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Israel Kirzner\'s work on entrepreneurship emphasized the role of entrepreneurial alertness in discovering profit opportunities and moving the market toward coordination.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What event provided dramatic confirmation of Austrian business cycle insights?',
    options: [
      'The 2008 financial crisis',
      'The Great Depression',
      'World War II',
      'The dot-com bubble',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The financial crisis of 2008 confirmed Austrian insights. Austrians had warned that the Federal Reserve\'s easy-money policies were creating a bubble that would eventually burst.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What distinguishes the Rothbardian strand from the Hayekian strand of Austrian economics?',
    options: [
      'Strict apriorism and opposition to fractional-reserve banking',
      'Mathematical approach',
      'Focus on macroeconomics',
      'Support for central banking'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Rothbardian strand emphasizes strict adherence to the Misesian tradition, including strong apriorism, opposition to fractional-reserve banking, and advocacy of anarcho-capitalism.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In what year did F.A. Hayek win the Nobel Prize, contributing to the Austrian revival?',
    options: [
      '1964',
      '1984',
      '1994',
      '1974',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Hayek won the Nobel Prize in 1974, which helped attract new adherents to Austrian economics and contributed to its revival after decades of eclipse.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What decade\'s economic phenomenon (combining inflation and unemployment) discredited Keynesianism and helped spur the Austrian revival?',
    options: [
      'The 1950s',
      'The 1990s',
      'The 2000s',
      'The 1970s',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The stagflation of the 1970s—simultaneous inflation and unemployment—discredited Keynesianism, as Keynesian theory said these could not occur together.',
  },
];
