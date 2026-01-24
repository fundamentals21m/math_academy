import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a parent platform in Branta\'s context?',
    options: [
      'The main Branta company',
      'A business that provides Bitcoin payment infrastructure to other businesses',
      'A corporate customer account',
      'A platform that hosts Branta servers',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Parent platforms are businesses like payment processors or marketplaces that facilitate Bitcoin payments for their merchants.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What additional authentication do parent platforms require?',
    options: [
      'Two-factor authentication',
      'Client certificates',
      'HMAC-SHA256 signature of requests',
      'IP whitelisting',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Parent platforms must include an HMAC-SHA256 signature to authenticate requests, providing an extra layer of security.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What components are included in the HMAC message?',
    options: [
      'Only the API key',
      'The payment address only',
      'User credentials',
      'HTTP method, URL, body, and timestamp',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The HMAC message is constructed from the HTTP method, full URL, request body, and a Unix timestamp.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What header contains the HMAC signature? (Answer: X-Branta-...)',
    correctAnswer: 'X-Branta-Signature',
    difficulty: 'medium',
    explanation: 'The HMAC signature is passed in the X-Branta-Signature header.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why must the timestamp be close to the server\'s current time?',
    options: [
      'To prevent replay attacks using old valid signatures',
      'To sync time zones',
      'For accurate logging',
      'Timestamps have no security purpose',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Timestamp validation prevents replay attacks where attackers capture and reuse valid signed requests later.',
  },
];
