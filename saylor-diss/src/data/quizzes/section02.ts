import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In Machiavelli\'s framework, what does "virtù" primarily refer to?',
    options: [
      'Political skill and effectiveness',
      'Moral virtue and righteousness',
      'Religious devotion',
      'Physical strength',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Virtù refers to political skill, effectiveness, and the ability to adapt to circumstances—not moral virtue.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does "fortuna" represent in Machiavelli\'s political theory?',
    options: [
      'Personal wealth',
      'Military fortune',
      'Good luck charms',
      'Chance and circumstance beyond human control'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Fortuna represents chance, circumstance, and external factors that affect political outcomes.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to Machiavelli, what is the fundamental driver of political dynamics?',
    options: [
      'Religious differences',
      'Geographic factors',
      'Class conflict between competing interests',
      'Cultural traditions',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Machiavelli sees class conflict—the tension between those who wish to dominate and those who resist domination—as the engine of political life.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of government did Machiavelli favor as most stable?',
    correctAnswer: 'mixed',
    difficulty: 'medium',
    explanation: 'Machiavelli advocated for mixed government that balances monarchical, aristocratic, and popular elements.',
  },
];
