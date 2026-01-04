import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Rothbard, can defense services be provided by the free market?',
    options: [
      'No, only government can provide defense',
      'Yes, defense is an economic service like any other',
      'Only partially—military must be government',
      'Only during peacetime'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Rothbard argues defense is an economic service that could be provided by competing private agencies.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does Rothbard define the State?',
    options: [
      'Any organization that provides public goods',
      'The organization claiming a territorial monopoly on the use of force',
      'An elected government',
      'The collection of public employees'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The State is defined by its claim to exclusive use of force over a territory and its power to tax without consent.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is anarcho-capitalism?',
    options: [
      'Chaos and disorder',
      'A society with private property and free markets but no State',
      'Capitalism controlled by anarchist groups',
      'A mixed economy'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Anarcho-capitalism envisions a society based on voluntary exchange and private property, with all services—including defense—provided privately.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to Rothbard, why would private defense agencies cooperate rather than fight?',
    options: [
      'Government would force them to',
      'War is expensive; arbitration is cheaper',
      'Customers would not allow fighting',
      'There would be no weapons'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Conflict destroys value. Defense agencies would find arbitration more profitable than warfare.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What historical examples does Rothbard cite for private law?',
    options: [
      'Ancient Rome and Greece',
      'Medieval Iceland, the American West, and merchant law',
      'Modern corporations',
      'The United Nations'
    ],
    correctIndex: 1,
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
