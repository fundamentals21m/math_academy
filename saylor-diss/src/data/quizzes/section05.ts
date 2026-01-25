import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many main factions does Machiavelli identify in a city-state?',
    options: [
      'Two',
      'Four',
      'Three',
      'Five',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Machiavelli identifies three main actors: the populace, the aristocracy, and the executive.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to Machiavelli, what is the primary desire of the populace?',
    options: [
      'Not to be oppressed',
      'To dominate others',
      'To accumulate wealth',
      'To gain political power',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Machiavelli states the people primarily desire not to be oppressed, rather than to dominate.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the primary desire of the aristocracy according to Machiavelli?',
    options: [
      'Religious devotion',
      'To dominate and command',
      'Democratic equality',
      'Military glory',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The aristocracy (grandi) desire to dominate and command—to maintain their privileged position.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the executive\'s primary challenge?',
    options: [
      'Accumulating personal wealth',
      'Winning wars',
      'Building monuments',
      'Balancing competing factions',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The executive must balance the competing interests of the populace and aristocracy.',
  },
];
