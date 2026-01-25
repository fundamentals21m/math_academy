import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the model, what does the populace primarily seek?',
    options: [
      'Security and freedom from oppression',
      'Political offices',
      'Noble titles',
      'Military command',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The populace seeks security, adequate consumption, and freedom from aristocratic oppression.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What do the aristocracy seek to maintain?',
    options: [
      'Religious authority',
      'Foreign alliances',
      'Popular approval',
      'Disproportionate share of economic output',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The aristocracy seeks to maintain their privileged share of economic output and political power.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What tension does the executive face regarding the populace and aristocracy?',
    options: [
      'They have identical interests',
      'Both always support the executive',
      'Satisfying one tends to dissatisfy the other',
      'Neither cares about the executive',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The executive faces a fundamental tension: policies that please one faction often displease the other.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to Machiavelli, which faction should the executive generally favor?',
    options: [
      'The aristocracy, always',
      'The populace, as they are more numerous',
      'Neither—perfect neutrality is required',
      'Whichever is currently stronger',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Machiavelli advises that the people are the safer foundation since they are more numerous and their goals are more just.',
  },
];
