import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Hoppe, what is conservatism?',
    options: [
      'The opposite of socialism',
      'A form of socialism that aims to preserve the existing order',
      'Pure free market capitalism',
      'A rejection of all government intervention'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Hoppe argues that conservatism is a form of socialism because it also denies property rights to natural owners in order to preserve existing arrangements against market competition.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What was fascism and Nazism\'s most abhorred enemy according to Hoppe?',
    options: [
      'Marxist socialism',
      'Communism',
      'Liberalism (free markets and individual rights)',
      'Democracy'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Fascism\'s and Nazism\'s most fervently abhorred enemy was not socialism as such, but liberalism—the doctrine of free markets and individual rights.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What characterized Nazi economic policy?',
    options: [
      'Complete free market capitalism',
      'Total nationalization like the Soviet Union',
      'Private ownership in name but government control over all economic decisions',
      'Abolition of all private property'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Nazis established highly controlled economies where private ownership existed in name but was meaningless in fact, as owners could not decide what to produce, prices to charge, or who to trade with.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which is NOT a tool of conservative socialism?',
    options: [
      'Tariffs and import quotas',
      'Abolishing all property rights',
      'Licensing requirements',
      'Agricultural subsidies'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Conservative socialism uses tariffs, licensing, subsidies, and regulations to preserve existing arrangements. It does not abolish property rights entirely—it restricts how they can be used.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What illusion does conservative socialism create according to Hoppe?',
    options: [
      'The illusion of freedom',
      'The illusion of equality',
      'The illusion of security and prosperity',
      'The illusion of democracy'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Conservative socialism creates a feeling of security by assigning fixed positions and guaranteed incomes, but this feeling of prosperity proves illusory as the real standard of living falls.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why did the Nazis despise Marxism according to Hoppe?',
    options: [
      'Because Marxism was socialist',
      'Because Marxism was internationalist and threatened to turn the social order upside-down',
      'Because Marxism supported free markets',
      'Because Marxism was democratic'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Nazis despised Marxism because it was internationalist (vs. nationalist) and implied the haves would be expropriated by have-nots, turning the social order upside-down, while Nazism promised to preserve the existing order.',
  },
  {
    id: 7,
    type: 'text',
    question: 'What type of economic plans did the Nazis implement, similar to Soviet five-year plans?',
    correctAnswer: 'four-year',
    difficulty: 'medium',
    explanation: 'The Nazis devised four-year plans, similar to the Soviet Union\'s five-year plans, along with economic planning boards that had to approve all significant changes in the production structure.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What determines whether a policy is socialist according to Hoppe?',
    options: [
      'Whether it is called "left" or "right"',
      'Whether it is supported by workers or business owners',
      'Whether it respects natural property rights or transfers control to nonproducers',
      'Whether it increases government revenue'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'What matters is whether a policy respects the rights of natural property owners or transfers control to those who did not produce or contract for the resources. By this standard, conservatism is just as socialist as Marxism.',
  },
];
