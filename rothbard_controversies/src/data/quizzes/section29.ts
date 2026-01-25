import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a "sin tax"?',
    options: [
      'A tax on religious institutions',
      'A tax on luxury items',
      'A tax on entertainment',
      'A tax on goods deemed harmful, like alcohol, tobacco, or gambling',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Sin taxes are levied on goods deemed harmful to health or morals—alcohol, tobacco, gambling. They are justified both as revenue sources and as discouragement of consumption.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the paternalistic argument for sin taxes?',
    options: [
      'They are easy to collect',
      'Government should discourage harmful behaviors for people\\'s own good',
      'They are traditional',
      'They affect few people',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The paternalistic argument is that government should discourage behaviors that harm the consumer. By raising prices, sin taxes reduce consumption of harmful goods, supposedly benefiting the consumers themselves.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the libertarian critique of sin taxes?',
    options: [
      'Adults should be free to make their own choices about personal consumption',
      'They don\\'t raise enough money',
      'They affect too many people',
      'They are too popular',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Libertarians argue that adults should be free to make their own choices about personal consumption. If there are no violations of others\' rights, government has no legitimate basis for interference.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What unintended consequence do high sin taxes often produce?',
    options: [
      'Increased government revenue',
      'Black markets and smuggling',
      'Improved public health',
      'Better product quality',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'High sin taxes create incentives for black markets and smuggling. When legal products are expensive due to taxes, illegal alternatives become profitable, bringing all the harms of prohibition.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How do sin taxes tend to affect different income groups?',
    options: [
      'They are regressive—poor people spend a higher proportion of income on taxed goods',
      'They affect all equally',
      'They only affect the wealthy',
      'They favor the middle class',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Sin taxes are regressive. Lower-income people spend a higher proportion of their income on alcohol and tobacco, so these taxes take a larger share of poor people\'s income.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What type of taxes are levied on alcohol, tobacco, and gambling to discourage consumption?',
    options: [
      'Progressive taxes',
      'Flat taxes',
      'Sin taxes',
      'Property taxes'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Sin taxes target goods considered harmful or immoral. They serve both as revenue sources and as policy tools to reduce consumption of disfavored products.',
  },
];
