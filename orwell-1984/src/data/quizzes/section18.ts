import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'text',
    question: 'What is the name of the Ministry where Winston is imprisoned?',
    correctAnswer: 'Ministry of Love',
    difficulty: 'easy',
    explanation: 'The Ministry of Love (Miniluv) is the Party\'s center for torture and "rehabilitation"—a windowless fortress bathed in constant artificial light.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is Tom Parsons in the Ministry of Love?',
    options: ['His daughter denounced him for saying "Down with Big Brother" in his sleep', 'He was caught stealing food', 'He tried to escape Oceania', 'He refused to attend the Two Minutes Hate'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Parsons was denounced by his own daughter for saying "Down with Big Brother" in his sleep—and he is proud of her loyalty.'
  },
  {
    id: 3,
    type: 'text',
    question: 'What is the number of the room that all prisoners fear most?',
    correctAnswer: '101',
    difficulty: 'easy',
    explanation: 'Room 101 contains "the worst thing in the world"—different for each person—and prisoners beg to be taken anywhere else.'
  }
];
