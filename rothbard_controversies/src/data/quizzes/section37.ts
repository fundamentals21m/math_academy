import type { QuizQuestion } from './types';

export const section37Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How did money originate according to the Austrian view?',
    options: [
      'Government decree',
      'International agreement',
      'Spontaneously from barter as the most marketable commodity became a medium of exchange',
      'Banking innovation',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Money emerged spontaneously from barter. The most marketable commodity (gold, silver) became accepted as a medium of exchange. No government created money; it evolved through market processes.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the "regression theorem"?',
    options: [
      'Money\\'s purchasing power today traces back to its commodity value before becoming money',
      'A mathematical formula for prices',
      'Money loses value over time',
      'Interest rates decline',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Mises\' regression theorem explains how money can have exchange value. Today\'s purchasing power traces back through yesterday\'s, eventually to when the commodity was valued for direct use, not as money.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What are the three functions of money?',
    options: [
      'Credit, debit, transfer',
      'Tax, spend, save',
      'Coin, paper, electronic',
      'Medium of exchange, store of value, unit of account'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Money serves as a medium of exchange (facilitating trade), a store of value (preserving wealth), and a unit of account (measuring prices). These emerge naturally from its use as a commonly accepted commodity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why did gold and silver become money rather than other commodities?',
    options: [
      'Government preference',
      'They possessed qualities like durability, divisibility, portability, and scarcity',
      'Religious significance',
      'Random chance',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Gold and silver emerged as money because of their physical properties: durable, divisible, portable, recognizable, and scarce. These qualities made them ideal as a medium of exchange across cultures.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the relationship between money and prices?',
    options: [
      'Money determines all prices directly',
      'Money provides a common denominator for expressing exchange ratios as prices',
      'Prices exist independently of money',
      'Money has no connection to prices',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Money provides a common denominator for expressing exchange ratios. Instead of countless barter ratios, all goods are priced in money, enabling economic calculation and comparison.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What precious metal most commonly served as money throughout history?',
    options: [
      'Silver',
      'Copper',
      'Platinum',
      'Gold',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Gold emerged as the predominant money due to its durability, divisibility, portability, recognizability, and relative scarcity. Silver also served this role, often for smaller transactions.',
  },
];
