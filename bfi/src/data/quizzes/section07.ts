import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 's07-q1',
    type: 'multiple-choice',
    question: 'Michael Saylor described bitcoin as "Thermodynamically Sound Digital ______."',
    options: [
      'Currency',
      'Gold',
      'Real Estate',
      'Money'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'As an engineer, Saylor elevated bitcoin from "Magic Internet Money" to "Thermodynamically Sound Digital Real Estate."'
  },
  {
    id: 's07-q2',
    type: 'multiple-choice',
    question: 'How much cash did Strategy convert to bitcoin in August 2020?',
    options: [
      '$100 million',
      '$500 million',
      '$1 billion',
      '$250 million'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'In August 2020, Saylor converted $250 million into approximately 21,000 bitcoin.'
  },
  {
    id: 's07-q3',
    type: 'multiple-choice',
    question: 'According to Saylor, cash is like:',
    options: [
      'A melting ice cube',
      'A stable foundation',
      'A growing tree',
      'A safe haven'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Saylor\'s view is that cash is a "melting ice cube" - every day you hold it, you lose purchasing power to monetary debasement.'
  },
  {
    id: 's07-q4',
    type: 'multiple-choice',
    question: 'What financial instrument did Strategy pioneer for bitcoin accumulation?',
    options: [
      'Stock buybacks',
      'Convertible debt',
      'Preferred shares',
      'Dividends'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Strategy pioneered the use of convertible debt to acquire more bitcoin, borrowing at low interest rates and using proceeds to buy bitcoin.'
  },
  {
    id: 's07-q5',
    type: 'multiple-choice',
    question: 'What made Strategy succeed where Tesla failed?',
    options: [
      'Better technology',
      'More capital',
      'A dominant individual with conviction (Saylor)',
      'Government support'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Strategy\'s success is due to it being effectively an extension of one individual (Michael Saylor) who believes in bitcoin and can resist institutional pressure.'
  }
];
