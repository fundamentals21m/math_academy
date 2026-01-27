import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why is the room above Mr. Charrington\'s shop special to Winston and Julia?',
    options: ['It has no telescreen', 'It has comfortable furniture', 'It is free of charge', 'It is in a wealthy neighborhood'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The room appears to have no telescreen, making it a sanctuary where Winston and Julia can talk freely and be together without surveillance.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the glass paperweight come to symbolize?',
    options: ['Winston\'s wealth', 'Their fragile private world', 'The Party\'s power', 'Julia\'s beauty'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The paperweight represents their private world—beautiful, precious, and utterly vulnerable, "fixed in a sort of eternity at the heart of the crystal."'
  },
  {
    id: 3,
    type: 'text',
    question: 'What kind of woman sings in the yard below the room, representing the endurance of ordinary humanity?',
    correctAnswer: 'prole',
    difficulty: 'easy',
    explanation: 'A prole woman hangs laundry and sings endlessly below the window, symbolizing the indestructible vitality of ordinary humanity despite oppression.'
  }
];
