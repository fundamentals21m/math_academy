import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In Machiavelli\'s framework, corruption is primarily:',
    options: [
      'Individual moral failing',
      'A structural condition of the political system',
      'Bribery only',
      'Foreign influence',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Corruption is a structural condition where normal feedback mechanisms have broken down.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the "J-curve" in political dynamics?',
    options: [
      'Revolutions occur when improving conditions suddenly reverse',
      'A type of economic graph',
      'A population growth pattern',
      'A military formation',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The J-curve shows revolutions often occur when rising expectations are suddenly disappointed.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why can reform trigger instability?',
    options: [
      'Reform is always bad',
      'People prefer suffering',
      'Reforms are illegal',
      'It raises expectations that may not be sustainable',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Reform raises expectations; if improvements can\'t be sustained, the gap triggers instability.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the "reformer\'s dilemma"?',
    options: [
      'Choosing between good and evil',
      'Reformers are always assassinated',
      'Reform can trigger the instability it aims to prevent',
      'Reforms are too expensive',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The reformer\'s dilemma is that well-intentioned reform can trigger destabilizing backlash.',
  },
];
