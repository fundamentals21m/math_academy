import type { QuizQuestion } from './types';

export const section38Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the gold standard?',
    options: [
      'Using gold jewelry',
      'A quality certification',
      'Gold mining regulations',
      'A monetary system where currency is redeemable for a fixed amount of gold'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The gold standard is a monetary system where currency is redeemable for a fixed amount of gold. This ties the money supply to gold reserves and limits government ability to inflate.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why do Austrian economists generally favor the gold standard?',
    options: [
      'Gold is pretty',
      'It makes trade easier',
      'It constrains government\\'s ability to inflate the money supply',
      'It is more modern',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The gold standard constrains government\'s ability to inflate. New gold must be mined, which is costly. This prevents governments from simply printing money to fund spending, protecting citizens from inflation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How does a gold standard affect international trade?',
    options: [
      'It stops trade',
      'It requires trade agreements',
      'Gold flows automatically balance trade through the price-specie flow mechanism',
      'It has no effect on trade',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Under the gold standard, trade imbalances are self-correcting. Countries with trade deficits lose gold, contracting their money supply and prices, making their goods more competitive. This is the price-specie flow mechanism.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why was the classical gold standard abandoned?',
    options: [
      'Governments wanted the ability to inflate to finance wars and welfare states',
      'Gold became worthless',
      'Technology made gold obsolete',
      'International agreement required it',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The gold standard was abandoned because it constrained government spending. Financing World War I required money creation beyond gold reserves. Later, welfare states also wanted to spend without the discipline of gold.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What happened at Bretton Woods in 1944?',
    options: [
      'Gold was abolished entirely',
      'Cryptocurrencies were invented',
      'Free banking was established',
      'A system was created where dollars were redeemable in gold and other currencies pegged to dollars'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Bretton Woods created a system where the U.S. dollar was redeemable in gold at $35/oz, and other currencies were pegged to dollars. This lasted until Nixon closed the gold window in 1971.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In what year did Nixon end the dollar\'s convertibility to gold?',
    options: [
      '1944',
      '1971',
      '1980',
      '1991',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In 1971, President Nixon closed the gold window, ending the Bretton Woods system and the last link between the dollar and gold.',
  },
];
