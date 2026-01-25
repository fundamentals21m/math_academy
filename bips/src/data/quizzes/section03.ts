import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the main difference between the early and updated BIP process?',
    options: [
      'BIPs are now written in JSON',
      'More structured review and clearer status definitions',
      'Only miners can propose BIPs',
      'BIPs are no longer public'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The updated BIP process introduced more structured review procedures and clearer definitions of BIP statuses.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Who can submit a BIP?',
    options: [
      'Only miners',
      'Only Bitcoin Core developers',
      'Only exchanges',
      'Anyone in the community',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The BIP process is open to anyone in the community who wants to propose improvements to Bitcoin.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What must a BIP author do before their proposal can be considered for implementation?',
    correctAnswer: 'reference implementation',
    difficulty: 'hard',
    explanation: 'BIP authors must provide or coordinate a reference implementation to demonstrate the proposal works.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Where are BIPs primarily discussed before formal submission?',
    options: [
      'Private channels',
      'Twitter',
      'Bitcoin-dev mailing list',
      'Reddit only',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The bitcoin-dev mailing list is the primary venue for discussing BIPs before and during the formal process.',
  },
];
