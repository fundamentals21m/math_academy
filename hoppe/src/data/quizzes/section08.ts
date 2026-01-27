import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the two defining characteristics of a public good?',
    options: [
      'High cost and government provision',
      'Non-excludability and non-rivalry',
      'Universal demand and limited supply',
      'Free access and high quality'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A public good is defined by non-excludability (cannot exclude non-payers) and non-rivalry (one person\'s consumption doesn\'t reduce availability for others).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the "free rider problem"?',
    options: [
      'People using public transportation without paying',
      'Rational individuals enjoying benefits without paying because they cannot be excluded',
      'Government officials taking bribes',
      'Companies avoiding taxes'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The free rider problem claims that because non-payers cannot be excluded from public goods, rational individuals will enjoy benefits without paying, leading to underproduction.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is the distinction between public and private goods problematic according to Hoppe?',
    options: [
      'It is too simple',
      'It depends on technology and institutions that can change',
      'It was invented by socialists',
      'It only applies to physical goods'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The distinction is not objective but depends on technological and institutional arrangements that are subject to change. Many "non-excludable" goods can be made excludable with appropriate technology or institutional innovation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why can\'t we determine the "correct" level of public goods production?',
    options: [
      'Economists disagree',
      'Politicians are corrupt',
      'Value is subjective and without market prices we cannot know what people actually want',
      'Technology changes too fast'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Value is subjective—different people value goods differently. The claim that the market "underproduces" assumes there is a correct level, but this cannot be known without market prices demonstrating actual preferences.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How do people demonstrate preferences on the market versus under government provision?',
    options: [
      'Through voting versus purchasing',
      'Through actual purchases versus assertions by politicians and experts',
      'Through surveys versus referendums',
      'Through consumption versus production'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'On the market, people demonstrate preferences through actual purchases with their own money. Under government provision, preferences are merely asserted by politicians and experts who claim to know what people want.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which of these "public goods" was historically provided privately?',
    options: [
      'National defense only',
      'None of them',
      'Lighthouses, roads, and private arbitration',
      'Only scientific research'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Lighthouses were privately owned in Britain for centuries, private turnpikes were common, and private arbitration and merchant law developed independently of government.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Even if public goods arguments were economically valid, why would they still not justify taxation?',
    options: [
      'Because taxes are inefficient',
      'Because taxation is aggression against property rights',
      'Because governments are corrupt',
      'Because voters might disagree'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Taxation is compulsory extraction of resources—it is aggression against property rights. Demonstrating that a good would be underproduced does not establish a right to force people to pay for it.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Why does government provision of public goods suffer from inefficiency?',
    options: [
      'Government workers are lazy',
      'There is too much competition',
      'Without market prices, there is no way to determine if resources are used efficiently',
      'Voters make bad decisions'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Like all socialist production, government provision lacks market prices to guide resource allocation. Governments systematically over- or under-produce because they lack the knowledge that only market prices can provide.',
  },
];
