import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a price ceiling?',
    options: [
      'A minimum price set by government',
      'The highest price anyone is willing to pay',
      'A maximum price set by government below market equilibrium',
      'An average market price',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A price ceiling is a legally mandated maximum price, typically set below the market equilibrium price.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the result of a price ceiling below market equilibrium?',
    options: [
      'Surplus',
      'Shortage',
      'No effect',
      'Increased production'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Price ceilings cause shortages because quantity demanded exceeds quantity supplied at the artificially low price.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the result of a price floor above market equilibrium?',
    options: [
      'Shortage',
      'No effect',
      'Surplus',
      'Price reduction'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Price floors cause surpluses because quantity supplied exceeds quantity demanded at the artificially high price.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a grant of monopolistic privilege?',
    options: [
      'Government-enforced barriers that exclude competitors',
      'Earning monopoly profits through efficiency',
      'Having a patent on an innovation',
      'Being the only seller in a market',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Monopolistic privilege refers to legal barriers (licensing, franchises, etc.) that prevent competition.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'According to Rothbard, what creates true monopoly?',
    options: [
      'Superior efficiency',
      'Large company size',
      'Consumer preference',
      'Government enforcement excluding competitors',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'True monopoly requires government enforcement. On a free market, monopoly positions are always subject to competition.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why do harmful policies persist despite their effects?',
    options: [
      'Because voters are irrational',
      'Because beneficiaries are concentrated and organized while victims are dispersed',
      'Because economists don\'t understand them',
      'Because they are actually beneficial'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Concentrated benefits and dispersed costs create political asymmetry—beneficiaries lobby hard while victims barely notice.',
  },
];
