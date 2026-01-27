import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'text',
    question: 'Complete Winston\'s statement: "If there is hope, it lies in the _____."',
    correctAnswer: 'proles',
    difficulty: 'easy',
    explanation: 'Winston believes the proles, comprising 85% of the population, are the only force numerous enough to overthrow the Party.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What percentage of Oceania\'s population are proles?',
    options: ['85%', '50%', '65%', '95%'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The proles make up 85% of the population but are kept docile through poverty, ignorance, and carefully managed entertainment.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why are the proles largely ignored by the Thought Police?',
    options: ['They are too dangerous to confront', 'The Party considers them beneath suspicion', 'There are no proles in Airstrip One', 'The proles have their own police force'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Party considers the proles too insignificant to monitor closely. As the slogan says: "Proles and animals are free."'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the paradox Winston identifies about the proles?',
    options: ['They are poor but happy', 'They are free but unaware of their freedom', 'They must become conscious to rebel, but cannot become conscious until after rebelling', 'They love Big Brother despite being ignored'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '"Until they become conscious they will never rebel, and until after they have rebelled they cannot become conscious."'
  }
];
