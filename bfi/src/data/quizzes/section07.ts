import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 's07-q1',
    type: 'multiple-choice',
    question: 'Michael Saylor described bitcoin as "Thermodynamically Sound Digital ______."',
    options: [
      'Currency',
      'Gold',
      'Money',
      'Real Estate',
    ],
    correctIndex: 3,
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
      '$250 million',
      '$1 billion',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In August 2020, Saylor converted $250 million into approximately 21,000 bitcoin.'
  },
  {
    id: 's07-q3',
    type: 'multiple-choice',
    question: 'According to Saylor, cash is like:',
    options: [
      'A melting ice cube',
      'A safe haven',
      'A stable foundation',
      'A growing tree',
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
      'Convertible debt',
      'Stock buybacks',
      'Preferred shares',
      'Dividends',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Strategy pioneered the use of convertible debt to acquire more bitcoin, borrowing at low interest rates and using proceeds to buy bitcoin.'
  },
  {
    id: 's07-q5',
    type: 'multiple-choice',
    question: 'What made Strategy succeed where Tesla failed?',
    options: [
      'Better technology',
      'A dominant individual with conviction (Saylor)',
      'More capital',
      'Government support'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Strategy\'s success is due to it being effectively an extension of one individual (Michael Saylor) who believes in bitcoin and can resist institutional pressure.'
  }
];
