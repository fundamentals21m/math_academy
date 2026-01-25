import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Gene Epstein, what book by Rothbard changed his life as a PhD candidate?',
    options: [
      'The Ethics of Liberty',
      'America\\'s Great Depression',
      'For a New Liberty',
      'Man, Economy, and State',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Epstein describes discovering Man, Economy, and State in the New School library and experiencing "one eureka moment after another."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What insight about capital goods did Rothbard explain that impressed Epstein?',
    options: [
      'Capital goods are the source of all profit',
      'There are no financial returns to owners of capital goods as such',
      'Capital goods have no intrinsic value',
      'Capital goods determine interest rates directly'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Rothbard explained that capital goods, being products of labor and land, do not generate returns as such. Returns come from interest (for advancing resources) and profits (for entrepreneurial foresight).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What theory did Rothbard devastatingly refute regarding barbershops having empty chairs?',
    options: [
      'Perfect competition theory',
      'Game theory',
      'Monopolistic competition theory',
      'Labor theory of value'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Rothbard showed that the conclusion that monopolistic competitors necessarily operate with excess capacity was a prisoner of how the demand curve was made tangent to the cost curve—demonstrating two ways to draw the graph where the firm operates at full capacity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does the Regression Theorem, developed by Mises, demonstrate about money?',
    options: [
      'All money must have originated in some commodity',
      'Money supply determines interest rates',
      'Central banks are necessary for monetary stability',
      'Paper money is superior to commodity money',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Regression Theorem shows that the demand for money today depends on its purchasing power yesterday, regressing back to when the money commodity had only non-monetary use value (like gold for jewelry).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'According to Epstein, what are the two main handicaps of mainstream economics?',
    options: [
      'Too much math and too little history',
      'Excessive regulation and insufficient data',
      'The desire to sound like physics and to sit at the tables of power',
      'Over-reliance on statistics and under-appreciation of theory',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Epstein identifies two handicaps: (a) the desire to sound like a branch of physics (feeding elitist fantasies), and (b) the desire to sit at the tables of power like Keynes and Greenspan (spawning "macroeconomics").',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Who was Rothbard\'s great teacher, described as someone without whom there could be no Rothbard the great writer and thinker?',
    options: [
      'Friedrich Hayek',
      'Carl Menger',
      'Murray Rothbard Sr.',
      'Ludwig von Mises',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Ludwig von Mises was Rothbard\'s mentor. Epstein notes that reading Mises\'s Human Action cemented his understanding of why wages rise in a free market with rising productivity.',
  },
];
