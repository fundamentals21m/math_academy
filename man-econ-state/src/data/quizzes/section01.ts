import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is direct exchange (barter)?',
    options: [
      'Exchange using money as a medium',
      'Exchange of goods directly for other goods',
      'Exchange through a middleman',
      'Exchange of labor for wages',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Direct exchange or barter involves trading goods directly for other goods without using money as an intermediary.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is voluntary exchange mutually beneficial?',
    options: [
      'Because the government regulates it',
      'Because both parties expect to gain from the trade',
      'Because one party always wins and one loses',
      'Because prices are always fair',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Both parties to a voluntary exchange expect to be better off—otherwise, they would not agree to trade. This is demonstrated by their action.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the "double coincidence of wants" problem in barter?',
    options: [
      'Both parties must want the exact same thing',
      'Trades must happen at the same time',
      'Both parties must agree on the price',
      'Each party must want exactly what the other has to offer',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For barter to occur, each trader must want exactly what the other is offering. This coincidence is rare, limiting barter\'s usefulness.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to Austrian economics, where do property rights originate?',
    options: [
      'Government legislation',
      'Social contract',
      'Self-ownership and homesteading',
      'Democratic vote',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Property rights derive from self-ownership (you own your body) and original appropriation (mixing labor with unowned resources).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why do people engage in exchange rather than producing everything themselves?',
    options: [
      'Division of labor increases total output through specialization',
      'It is required by law',
      'Self-sufficiency is impossible',
      'Exchange is always cheaper',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Specialization and division of labor allow people to focus on what they do best, increasing total productivity and enabling exchange.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What limits the extent of barter in an economy?',
    options: [
      'Government regulations',
      'People\'s unwillingness to trade',
      'Lack of transportation',
      'The double coincidence of wants and indivisibility of goods'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Barter is limited by the need for coinciding wants and the difficulty of dividing certain goods. These problems led to the emergence of money.',
  },
];
