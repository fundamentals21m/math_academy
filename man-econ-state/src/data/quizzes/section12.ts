import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Rothbard, can defense services be provided by the free market?',
    options: [
      'No, only government can provide defense',
      'Only partially—military must be government',
      'Yes, defense is an economic service like any other',
      'Only during peacetime',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Rothbard argues defense is an economic service that could be provided by competing private agencies.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does Rothbard define the State?',
    options: [
      'Any organization that provides public goods',
      'An elected government',
      'The collection of public employees',
      'The organization claiming a territorial monopoly on the use of force',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The State is defined by its claim to exclusive use of force over a territory and its power to tax without consent.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is anarcho-capitalism?',
    options: [
      'A society with private property and free markets but no State',
      'Chaos and disorder',
      'Capitalism controlled by anarchist groups',
      'A mixed economy',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Anarcho-capitalism envisions a society based on voluntary exchange and private property, with all services—including defense—provided privately.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to Rothbard, why would private defense agencies cooperate rather than fight?',
    options: [
      'Government would force them to',
      'There would be no weapons',
      'War is expensive; arbitration is cheaper',
      'Customers would not allow fighting',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Conflict destroys value. Defense agencies would find arbitration more profitable than warfare.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What historical examples does Rothbard cite for private law?',
    options: [
      'Medieval Iceland, the American West, and merchant law',
      'Ancient Rome and Greece',
      'Modern corporations',
      'The United Nations'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Rothbard points to medieval Iceland, frontier America, and lex mercatoria as examples of order without state monopoly.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'On what foundation does Rothbard base property rights?',
    options: [
      'Social contract',
      'Self-ownership and original appropriation (homesteading)',
      'Government grants',
      'Majority vote'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Property rights derive from self-ownership (owning your body) and homesteading (mixing labor with unowned resources).',
  },
];
