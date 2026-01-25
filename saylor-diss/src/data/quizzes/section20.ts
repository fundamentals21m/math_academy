import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a key limitation of the model acknowledged in the dissertation?',
    options: [
      'It\\'s too accurate',
      'It runs too fast',
      'It uses too few equations',
      'No international relations or external factors',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The model treats the city-state in isolation without international factors.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What potential extension does the dissertation suggest?',
    options: [
      'Modeling multiple interacting city-states',
      'Making it less mathematical',
      'Adding more colors to graphs',
      'Removing all factions',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'One suggested extension is modeling interactions between multiple polities.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What methodology could be applied to other political thinkers?',
    options: [
      'Reading their works',
      'Ignoring their ideas',
      'System dynamics modeling of their theories',
      'Translating to Latin',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The dissertation suggests the same methodology could model Hobbes, Locke, Marx, etc.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the core enduring insight from Machiavelli according to the dissertation?',
    options: [
      'Be as cruel as possible',
      'Political dynamics arise from competing interests within structural constraints',
      'Ignore the people',
      'Trust everyone'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The core insight is that political dynamics emerge from competing interests within structures.',
  },
];
