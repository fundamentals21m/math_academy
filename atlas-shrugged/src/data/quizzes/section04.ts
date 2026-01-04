import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Where does Francisco d\'Anconia deliver his famous "money speech"?',
    options: [
      'At a board meeting',
      'At James Taggart\'s wedding party',
      'In a courtroom',
      'On a radio broadcast'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Francisco delivers his eloquent defense of money at James Taggart\'s wedding party, shocking the guests with his philosophical clarity.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to Francisco, what is money?',
    options: [
      'The root of all evil',
      'A tool of exchange representing productive work',
      'A necessary evil of capitalism',
      'A symbol of greed'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Francisco argues that money is a tool of exchange that represents productive work and creative achievement, not evil.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does Francisco say is truly "the root of all evil"?',
    options: [
      'Money itself',
      'Capitalism',
      'The love of money without earning it',
      'Material possessions'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Francisco inverts the common saying, arguing that the desire for money without the willingness to earn it through productive work is the real evil.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does the chapter title "The Climax of the d\'Anconias" suggest about Francisco?',
    options: [
      'He represents the peak of his family\'s legacy',
      'His family is about to gain more power',
      'He is the last of his noble line',
      'He is betraying his family\'s traditions'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The title suggests Francisco represents the culmination of the d\'Anconia legacy, though in a way the party guests cannot understand.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How do the party guests react to Francisco\'s money speech?',
    options: [
      'With enthusiastic agreement',
      'With thoughtful consideration',
      'With discomfort, hostility, or incomprehension',
      'With immediate conversion to his views'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Most guests react with discomfort or hostility, unable to accept a moral defense of money that challenges their guilt-based worldview.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What deeper meaning does Francisco\'s speech reveal about his apparent playboy behavior?',
    options: [
      'He truly is irresponsible and decadent',
      'He is acting a role as part of a larger plan',
      'He has given up on his principles',
      'He is mentally unstable'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The brilliance of the money speech hints that Francisco\'s playboy persona is a deliberate act, concealing a purposeful mission.',
  },
];
