import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who is Elinor Ostrom and why is she referenced?',
    options: [
      'A Nobel laureate who studied governance of common pool resources',
      'A cryptocurrency developer',
      'A Bitcoin miner',
      'A financial regulator',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Elinor Ostrom won the Nobel Prize for her work on how communities successfully govern shared resources without top-down control—relevant to understanding decentralized systems.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a "common pool resource"?',
    options: [
      'A cryptocurrency liquidity pool',
      'A shared wallet',
      'A mining pool',
      'A shared resource where one person\'s use affects availability for others'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Common pool resources (like fisheries or forests) are shared resources that can be depleted—Ostrom studied how communities govern these without either privatization or central control.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How does Ostrom\'s framework apply to blockchain governance?',
    options: [
      'It doesn\\'t apply to digital systems',
      'It proves centralization is necessary',
      'It provides principles for how decentralized communities can govern shared infrastructure',
      'It only applies to physical resources',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Ostrom\'s principles for successful common pool resource governance (clear boundaries, appropriate rules, collective choice) inform how blockchain communities might sustain decentralization.',
  },
];
