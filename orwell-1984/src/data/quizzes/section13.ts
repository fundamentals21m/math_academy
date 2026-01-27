import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does O\'Brien claim to offer Winston?',
    options: ['A copy of the Newspeak dictionary', 'A position in the Inner Party', 'An escape route from Oceania', 'Money and luxury goods'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'O\'Brien offers to lend Winston an advance copy of the Newspeak dictionary—a pretext to give Winston his home address and draw him in.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What makes O\'Brien\'s invitation to his apartment extraordinary?',
    options: ['The apartment is in a dangerous area', 'Inner Party members never invite Outer Party members to their homes', 'O\'Brien has no telescreen', 'Winston doesn\'t know where O\'Brien lives'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Inner Party members live in special areas that ordinary Party members never visit. The invitation itself signals unusual interest.'
  },
  {
    id: 3,
    type: 'text',
    question: 'What is the name of the legendary underground resistance organization?',
    correctAnswer: 'Brotherhood',
    difficulty: 'easy',
    explanation: 'The Brotherhood is the rumored underground resistance led by Emmanuel Goldstein that Winston hopes to join.'
  }
];
