import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Delta bleed (charm) describes:',
    options: [
      'How delta changes with spot price',
      'How delta changes with time, holding spot constant',
      'How gamma changes with spot price',
      'How vega changes with volatility'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Charm (delta bleed) measures how delta evolves over time without any spot movement.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For an OTM option, delta bleed causes delta to:',
    options: [
      'Become negative',
      'Decrease toward 0',
      'Stay constant',
      'Increase toward 1'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'OTM options have delta bleeding toward 0 as time passes (less likely to finish ITM).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'ATM gamma bleed (color) near expiration causes gamma to:',
    options: [
      'Decrease slowly',
      'Increase dramatically (explode)',
      'Stay constant',
      'Become negative'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'ATM gamma explodes as expiration approaches, creating pin risk.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the name for the natural evolution of Greeks over time?',
    correctAnswer: 'bleed',
    difficulty: 'easy',
    explanation: 'Bleed describes how Greeks change purely due to time passage.',
  },
];
