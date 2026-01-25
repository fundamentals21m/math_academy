import type { QuizQuestion } from './types';

export const section40Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The SEC\'s Howey test determines whether something is a:',
    options: [
      'Real estate investment',
      'Insurance product',
      'Bank account',
      'Security'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Howey test asks if there is an investment of money in a common enterprise with expectation of profits from others\' efforts—determining if something is a security.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If a tontine is classified as insurance, it requires:',
    options: [
      'State insurance commissioner approval in each jurisdiction',
      'Federal registration only',
      'No regulatory approval',
      'International certification'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Insurance classification requires state license in each jurisdiction plus capital reserves (typically $10M+ surplus).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Insurance regulators may reject tontines because they:',
    options: [
      'Have too many members',
      'Are too profitable',
      'Don\\'t guarantee payments (unlike insurance)',
      'Are too simple',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Insurance regulators may reject tontines precisely because they don\'t guarantee payments—the opposite of what insurance is supposed to do.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Canada\'s VPLA successfully navigated regulation by being classified under:',
    options: [
      'Insurance law',
      'Pension law',
      'Securities law',
      'Banking law',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Canada\'s VPLA is regulated under pension law (not insurance law), with no minimum capital requirements beyond plan assets.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'SEC registration for a security typically costs:',
    options: [
      '$5,000+',
      '$10,000+',
      '$500,000+',
      '$50,000+',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'SEC registration costs $500,000+ for initial registration plus ongoing compliance costs.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which is NOT a potential US regulatory pathway for tontines?',
    options: [
      'Legislative reform creating a new category',
      'Automatic federal approval',
      'DOL guidance on 401(k) plans',
      'State sandbox programs',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Potential pathways include legislation, DOL guidance, state innovation, and SEC no-action letters—but there is no automatic federal approval process.',
  },
];
