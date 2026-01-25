import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 's02-q1',
    type: 'multiple-choice',
    question: 'What percentage of all bitcoin that will ever exist has already been issued?',
    options: [
      '95%',
      '80%',
      '50%',
      '99%',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Of the 21 million bitcoin that will ever exist, 95% has already been issued.'
  },
  {
    id: 's02-q2',
    type: 'multiple-choice',
    question: 'Bitcoin\'s current annual supply inflation is approximately:',
    options: [
      '0%',
      '3%',
      '1.5%',
      '0.8%'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Bitcoin\'s supply is currently inflating at approximately 0.8% annually, which is half the rate of gold\'s approximately 1.5%.'
  },
  {
    id: 's02-q3',
    type: 'multiple-choice',
    question: 'What valuation approach does the book recommend institutions shift toward?',
    options: [
      'Net Asset Value',
      'Future Value',
      'Present Value',
      'Book Value',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The book argues that institutions must shift from Present Value to Future Value thinking to properly understand bitcoin\'s role in protecting purchasing power.'
  },
  {
    id: 's02-q4',
    type: 'numeric',
    question: 'How many whole bitcoin units will ever exist (in millions)?',
    correctAnswer: 21,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Bitcoin is capped at 21 million whole units by its immutable protocol.'
  },
  {
    id: 's02-q5',
    type: 'multiple-choice',
    question: 'After what year will there be no new bitcoin issued?',
    options: [
      '2100',
      '2050',
      '2140',
      '2030',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Bitcoin\'s issuance will continue to halve every four years until 2140, after which there will be no new bitcoin issued.'
  }
];
