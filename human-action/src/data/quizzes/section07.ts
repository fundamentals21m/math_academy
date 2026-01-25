import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Society, according to Mises, arises from:',
    options: [
      'Government decrees',
      'Purposeful cooperation among individuals seeking mutual benefit',
      'Divine command',
      'Random historical accidents',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Society emerges from individuals discovering that cooperation allows them to achieve ends unattainable in isolation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The division of labor increases productivity because:',
    options: [
      'Government enforces it',
      'Workers become interchangeable',
      'It allows specialization and exploits differences in abilities and circumstances',
      'It reduces the need for trade',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Division of labor enables specialization, which exploits different abilities and circumstances to produce more than each could produce in isolation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Law of Association (Ricardo\'s Law of Comparative Advantage) shows that:',
    options: [
      'Trade only benefits the stronger party',
      'Even if one party is better at everything, both benefit from trade and specialization',
      'Autarky is always preferable',
      'Government must coordinate trade',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Even if A is better than B at producing everything, both benefit if each specializes in what they\'re comparatively better at.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Mises views the market economy as:',
    options: [
      'A creation of government planning',
      'Chaotic and irrational',
      'Inevitably exploitative',
      'A system of social cooperation through voluntary exchange',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The market economy is a spontaneous system of social cooperation where individuals exchange voluntarily for mutual benefit.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What does Mises mean by "catallactics"?',
    options: [
      'The study of government policy',
      'The study of catastrophes',
      'The science of exchanges - the theory of the market economy',
      'Mathematical economics'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Catallactics is the branch of praxeology dealing specifically with market exchanges - the core of economic theory.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'According to Mises, economic harmony among nations is achieved through:',
    options: [
      'Free trade and the international division of labor',
      'International government',
      'Trade barriers to protect domestic industries',
      'Military conquest',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Free trade extends the benefits of the division of labor globally, creating economic harmony as nations specialize in their comparative advantages.',
  },
];
