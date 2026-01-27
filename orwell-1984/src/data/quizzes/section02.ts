import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Winston call the pastoral landscape in his dreams?',
    options: ['The Golden Country', 'The Free Land', 'The Green Fields', 'The Peaceful Valley'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Golden Country is Winston\'s recurring dream of an idyllic pastoral landscape representing freedom and the past.'
  },
  {
    id: 2,
    type: 'text',
    question: 'Who controls the past controls the future; who controls the present controls the _____.',
    correctAnswer: 'past',
    difficulty: 'medium',
    explanation: 'This Party slogan encapsulates the power of controlling historical records to shape both present beliefs and future possibilities.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What happened to Winston\'s mother and sister?',
    options: ['They fled to another country', 'They vanished and he cannot remember how', 'They were publicly executed', 'They are still alive in the prole quarters'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Winston\'s mother and baby sister vanished when he was young, and his fragmentary memories contain a profound sense of guilt about their disappearance.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What compulsory activity must all Party members perform each morning?',
    options: ['Salute Big Brother', 'Recite the Party slogans', 'Physical Jerks (exercises)', 'Write in their work journals'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Physical Jerks are compulsory calisthenics that Party members must perform while the telescreen watches for insufficient enthusiasm.'
  }
];
