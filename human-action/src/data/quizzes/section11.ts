import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the "gradation of means," value flows:',
    options: [
      'From means to ends',
      'Equally in both directions',
      'Backward from ends to means',
      'From government decrees to markets'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Value originates with ultimate ends (satisfaction of wants) and flows backward. A hammer is valued because of the house it can build, money because of what it can buy.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The "equal value fallacy" is the mistaken belief that:',
    options: [
      'All workers deserve equal pay',
      'Inflation affects everyone equally',
      'Goods exchanged must be of equal value',
      'All preferences are equally valid',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'From Aristotle to Marx, economists assumed traded goods must have equal value. But people trade precisely because they value things differently - both gain!',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The diamond-water paradox is solved by the concept of:',
    options: [
      'Labor theory of value',
      'Government price setting',
      'Historical materialism',
      'Marginal utility',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'We value specific units, not goods "in general." Water is abundant so the marginal unit serves low-priority uses. Diamonds are scarce so each serves high-priority uses.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The "barter-fiction" is useful for understanding exchange but misleads if it suggests that:',
    options: [
      'Money is "neutral" and doesn\\'t affect exchange',
      'People prefer barter to money',
      'Barter economies never existed',
      'All trade is exploitative',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Imagining barter helps see that goods ultimately exchange for goods. But economists wrongly concluded money is just a "veil" - when money actually transforms calculation entirely.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The subjective theory of value holds that:',
    options: [
      'Value is determined by labor inputs',
      'Value exists only in the mind of the individual evaluating',
      'Government sets all values',
      'Values are objective and measurable',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Value does not reside objectively in things themselves. It exists only in the mind of each individual. This is why voluntary exchange is always win-win.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Without money prices, comparing production methods that use different inputs is:',
    options: [
      'Easy with proper planning',
      'Possible using labor-hour calculations',
      'Only slightly more difficult',
      'Impossible - there is no common denominator'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'How do you compare 100 tons of steel vs. 800 cubic meters of concrete vs. 150 prefab panels? Without money prices reducing these to a common unit, comparison is impossible.',
  },
];
