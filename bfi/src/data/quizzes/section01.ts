import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 's01-q1',
    type: 'multiple-choice',
    question: 'According to the book, what makes HODL\'ing bitcoin an irrational act?',
    options: [
      'Bitcoin has no intrinsic value',
      'It requires willful ability to resist selling pressure',
      'The technology is too complex',
      'Government regulations prohibit it'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'HODL\'ing requires a willful ability to be irrational or unreasonable - resisting the constant pressure to sell that institutions are structurally incapable of.'
  },
  {
    id: 's01-q2',
    type: 'multiple-choice',
    question: 'What is the "water/diamond paradox" mentioned in the context of human action?',
    options: [
      'Diamonds are always more valuable than water',
      'Water is more valuable than diamonds in all situations',
      'A person would forgo all diamonds for their first glass of water',
      'Diamonds and water have equal value'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The water/diamond paradox illustrates that human action is based on removing the largest source of dissatisfaction at the lowest cost - a thirsty person values water over diamonds.'
  },
  {
    id: 's01-q3',
    type: 'multiple-choice',
    question: 'Which company successfully held bitcoin long-term on their balance sheet?',
    options: [
      'BlackRock',
      'Tesla',
      'Apple',
      'Strategy (MicroStrategy)'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Strategy (formerly MicroStrategy), led by Michael Saylor, is the one success story of institutional bitcoin holding, while Tesla exited their position after S&P 500 inclusion.'
  },
  {
    id: 's01-q4',
    type: 'multiple-choice',
    question: 'Why did Tesla exit their bitcoin position according to the book?',
    options: [
      'Institutional pressure after S&P 500 inclusion',
      'Bitcoin\'s price crashed',
      'Elon Musk lost interest',
      'Regulatory requirements'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Tesla exited their bitcoin position shortly after S&P 500 inclusion, demonstrating that institutional pressure will eventually force selling without a dominant individual to resist.'
  },
  {
    id: 's01-q5',
    type: 'multiple-choice',
    question: 'What does the book say about the hope for mega-companies like Apple to put bitcoin on their balance sheets?',
    options: [
      'It\'s likely to happen soon',
      'They are all misguided',
      'Apple has already started accumulating',
      'Only Apple, not Facebook, would do it'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The author states that those waiting for mega-companies, governments, or pensions to hold bitcoin long-term "are all misguided" due to structural institutional incentives.'
  }
];
