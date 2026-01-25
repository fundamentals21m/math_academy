import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is "tax competition" between jurisdictions?',
    options: [
      'A game between tax collectors',
      'Competition to raise tax rates first',
      'Jurisdictions competing for taxpayers and businesses by offering lower tax rates',
      'Tax filing contests',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Tax competition occurs when jurisdictions compete for taxpayers and businesses by offering lower rates, better services, or more favorable environments. This puts pressure on all governments to keep taxes reasonable.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why do some governments view tax competition negatively?',
    options: [
      'It is too expensive to administer',
      'It causes inflation',
      'It limits their ability to raise taxes without losing taxpayers',
      'It reduces trade'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'High-tax governments dislike tax competition because it limits their ability to raise taxes. If rates are too high, mobile individuals and businesses move to lower-tax jurisdictions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is "tax harmonization"?',
    options: [
      'Making tax forms easier to read',
      'Agreements between governments to set minimum tax rates and prevent competition',
      'Sharing tax revenues equally',
      'Coordinating tax filing deadlines',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Tax harmonization is when governments agree to set minimum tax rates and prevent competition. It\'s essentially a cartel agreement among governments to prevent them from competing for taxpayers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'From a libertarian perspective, why is tax competition beneficial?',
    options: [
      'It acts as a constraint on government power and gives citizens exit options',
      'It increases government revenue',
      'It simplifies tax codes',
      'It promotes international cooperation'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Tax competition is beneficial because it constrains government power. When citizens and businesses can move, governments must provide value for taxes collected. Exit options discipline governments.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the "race to the bottom" argument against tax competition?',
    options: [
      'Tax rates will fall to zero',
      'All businesses will leave',
      'Competition causes recession',
      'Competition will force rates so low that governments cannot provide essential services',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Critics claim tax competition leads to a "race to the bottom" where rates fall so low governments cannot provide services. Libertarians respond that this fear is exaggerated and competition reveals what services are truly valued.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What term describes agreements between governments to set minimum tax rates and prevent tax competition?',
    options: [
      'Tax competition',
      'Tax harmonization',
      'Tax arbitrage',
      'Tax reform',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Tax harmonization involves governments agreeing to minimum rates. Critics see this as a cartel that eliminates the beneficial discipline of competition.',
  },
];
