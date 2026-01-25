import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a consumption tax?',
    options: [
      'A tax on savings',
      'A tax on production',
      'A tax levied on spending rather than income',
      'A tax on imports only',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A consumption tax is levied on spending rather than income. Examples include sales taxes and value-added taxes. The idea is to tax what people take out of the economy rather than what they put in.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the claimed advantage of consumption taxes over income taxes?',
    options: [
      'They are easier to evade',
      'They are always progressive',
      'They do not penalize saving and investment',
      'They require no collection system'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Consumption taxes do not penalize saving and investment. Income that is saved and invested is not taxed until it is spent, encouraging capital formation and economic growth.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the main critique of consumption taxes from a distributional perspective?',
    options: [
      'They are too complex',
      'They are regressive—poor people spend a higher proportion of their income',
      'They reduce government revenue',
      'They favor the wealthy too much',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Consumption taxes tend to be regressive because poor people spend a higher proportion of their income. The wealthy save more, so a smaller proportion of their income is subject to consumption taxes.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a Value-Added Tax (VAT)?',
    options: [
      'A tax on luxury items only',
      'A consumption tax collected at each stage of production on the value added',
      'A tax on imported goods',
      'A flat income tax',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A VAT is collected at each stage of production on the value added at that stage. It is ultimately borne by the final consumer but is collected incrementally throughout the production chain.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the Austrian concern about any form of taxation, including consumption taxes?',
    options: [
      'All taxation involves coercion—taking property without consent',
      'They are too simple',
      'They don\\'t raise enough revenue',
      'They favor producers over consumers',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'From an Austrian/libertarian perspective, all taxation involves coercion. Whether income, consumption, or any other form, taxation takes property without the owner\'s consent.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What type of consumption tax is collected at each stage of production on the value added?',
    options: [
      'Sales tax',
      'Excise tax',
      'Tariff',
      'Value-Added Tax (VAT)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A Value-Added Tax (VAT) is collected at each production stage on the value added at that stage. It is widely used in Europe and other countries.',
  },
];
