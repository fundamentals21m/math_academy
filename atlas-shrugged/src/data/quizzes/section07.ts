import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the John Galt Line?',
    options: [
      'A telephone company',
      'An oil pipeline',
      'A railroad line built by Dagny using Rearden Metal',
      'A shipping company'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The John Galt Line is the railroad branch Dagny builds to serve Ellis Wyatt\'s Colorado oil fields, constructed with Rearden Metal rails.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why does Dagny name the line after "John Galt"?',
    options: [
      'To honor a famous railroad builder',
      'John Galt invested in the project',
      'It was required by law',
      'As a defiant gesture against those who say nothing is possible'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Dagny names it the John Galt Line as a defiant gesture, taking the phrase of despair and turning it into a symbol of achievement.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who accompanies Dagny on the first run of the John Galt Line?',
    options: [
      'Hank Rearden',
      'Francisco d\'Anconia',
      'James Taggart',
      'Eddie Willers'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Hank Rearden rides with Dagny on the triumphant first run, sharing in the success of their joint achievement.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What do Dagny and Hank demonstrate by building the John Galt Line?',
    options: [
      'That government support is essential for progress',
      'That individuals can achieve greatness through rational effort',
      'That public opinion should guide business decisions',
      'That compromise is the key to success'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The John Galt Line proves that determined individuals using reason and ability can achieve great things despite opposition.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does the public initially react to the John Galt Line?',
    options: [
      'Overwhelming support from the beginning',
      'Complete indifference',
      'Fear and skepticism that turns to celebration after success',
      'Violent opposition'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Initial public reaction is fear and skepticism about Rearden Metal, but successful operation leads to celebration and crowds lining the route.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does the John Galt Line symbolize in the novel\'s broader themes?',
    options: [
      'The power of collective action',
      'The need for public ownership of railroads',
      'The importance of government infrastructure',
      'The triumph of the creative mind over mediocrity'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The John Galt Line symbolizes the triumph of individual creative achievement over the forces of mediocrity, fear, and destruction.',
  },
];
