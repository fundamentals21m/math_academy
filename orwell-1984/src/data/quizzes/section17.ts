import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'text',
    question: 'What words does the iron voice from behind the picture say?',
    correctAnswer: 'You are the dead',
    difficulty: 'easy',
    explanation: '"You are the dead" announces the Thought Police, revealing that they have been watching through a hidden telescreen all along.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What was hidden behind the picture of St. Clement\'s church?',
    options: ['A telescreen', 'A safe', 'A microphone', 'Documents about the Brotherhood'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A telescreen was hidden behind the picture—the Thought Police had been watching Winston and Julia\'s entire relationship.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is revealed about Mr. Charrington?',
    options: ['He is Goldstein', 'He is a member of the Thought Police', 'He is Winston\'s father', 'He is O\'Brien\'s brother'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Mr. Charrington is revealed to be a member of the Thought Police, not an old man at all but perhaps only thirty-five.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What happens to the glass paperweight?',
    options: ['Julia takes it', 'Winston hides it', 'A guard smashes it', 'It vanishes mysteriously'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A guard smashes the paperweight on the hearthstone. The tiny coral fragment rolling across the floor symbolizes the destruction of their private world.'
  }
];
