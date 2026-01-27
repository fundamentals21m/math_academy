import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What fills Winston with guilt in his dreams about his mother?',
    options: ['He believes he somehow contributed to her disappearance', 'He forgot her birthday', 'He never told her he loved her', 'He reported her to the Party'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Winston\'s fragmented memories contain a profound sense that he somehow betrayed his mother and sister, though he cannot remember how.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What has the Party destroyed that Winston\'s mother represents?',
    options: ['Physical beauty', 'Private, unquestioning family loyalty', 'Economic prosperity', 'Religious faith'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Winston\'s mother died loving him—that kind of private, unquestioning loyalty is exactly what the Party has destroyed.'
  },
  {
    id: 3,
    type: 'text',
    question: 'To whom does Winston address his diary message about the future?',
    correctAnswer: 'future',
    difficulty: 'easy',
    explanation: '"To the future or to the past, to a time when thought is free... greetings!" Winston writes to those who will live after the Party falls.'
  }
];
