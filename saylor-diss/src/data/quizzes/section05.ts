import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many main factions does Machiavelli identify in a city-state?',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Machiavelli identifies three main actors: the populace, the aristocracy, and the executive.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to Machiavelli, what is the primary desire of the populace?',
    options: [
      'To dominate others',
      'To accumulate wealth',
      'To gain political power',
      'Not to be oppressed'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Machiavelli states the people primarily desire not to be oppressed, rather than to dominate.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the primary desire of the aristocracy according to Machiavelli?',
    options: [
      'To dominate and command',
      'Religious devotion',
      'Democratic equality',
      'Military glory'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The aristocracy (grandi) desire to dominate and command—to maintain their privileged position.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the executive\'s primary challenge?',
    options: [
      'Accumulating personal wealth',
      'Balancing competing factions',
      'Winning wars',
      'Building monuments'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The executive must balance the competing interests of the populace and aristocracy.',
  },
];
