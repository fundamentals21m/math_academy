import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why does a concept of property arise according to Hoppe?',
    options: [
      'Because governments create laws',
      'Because of the scarcity of goods',
      'Because people are inherently greedy',
      'Because of social contracts'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Property arises because of scarcity. If all goods were "free goods" whose use by one person did not exclude use by another, there would be no need for property.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the prototype of a scarce good according to Hoppe?',
    options: [
      'Gold',
      'Land',
      'One\'s own body',
      'Food'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'One\'s body is the prototype of a scarce good for which property rights must be established, even in a Garden of Eden where everything else is abundant.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the natural theory of property state about self-ownership?',
    options: [
      'The state owns everyone\'s body',
      'Society collectively owns all bodies',
      'Every person has exclusive ownership of their own body',
      'Bodies cannot be owned'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'According to the natural position, every person has the exclusive right of ownership of their body within the boundaries of its surface.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is aggression defined as in Hoppe\'s framework?',
    options: [
      'Any competitive action in the market',
      'Uninvited invasion of another person\'s body or property',
      'Verbal criticism',
      'Refusing to share resources'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Aggression is an action that uninvitedly invades or changes the physical integrity of another person\'s body or property and puts it to a use not to the owner\'s liking.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What must property claims be backed by under the natural theory of property?',
    options: [
      'Government registration',
      'Majority vote',
      'An objective fact of original appropriation, previous ownership, or contract',
      'Social consensus'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'To be nonaggressive, property claims must be backed by the objective fact of an act of original appropriation, of previous ownership, or by a mutually beneficial contractual relationship.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'How does Hoppe define socialism?',
    options: [
      'Government ownership of all property',
      'Democratic control of the economy',
      'Institutionalized interference with or aggression against private property',
      'Equal distribution of wealth'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Socialism is an institutionalized interference with or aggression against private property and private property claims.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is original appropriation?',
    options: [
      'Government seizure of resources',
      'Theft of someone else\'s property',
      'The act of acquiring previously unowned resources by putting them to use',
      'Inheriting property from family'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Original appropriation is when previously unowned resources become someone\'s property once they are occupied within objective borders and put to some specific use.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What are the two fundamental effects of socialism according to Hoppe?',
    options: [
      'Increased equality and improved efficiency',
      'Reduced investment and favoring of aggressive personality types',
      'More democracy and better representation',
      'Lower prices and higher wages'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Socialism produces an economic effect (reduction in investment) and a social effect (change in character structure favoring invaders of property at the expense of productive users).',
  },
];
