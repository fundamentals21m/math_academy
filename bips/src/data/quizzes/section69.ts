import type { QuizQuestion } from './types';

export const section69Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-157 define?',
    options: [
      'Bloom filters',
      'Server-side filtering',
      'Block compression',
      'Client-side block filtering protocol',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'BIP-157 defines how clients request and receive compact block filters.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How do compact block filters differ from Bloom filters?',
    options: [
      'Filters are created by full nodes, downloaded by light clients',
      'They are smaller',
      'Filters are created by light clients',
      'They use the same approach',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Full nodes create filters; clients download and check them locally (better privacy).',
  },
  {
    id: 3,
    type: 'text',
    question: 'BIP-157 messages include getcfilters and _____.',
    correctAnswer: 'cfilter',
    difficulty: 'hard',
    explanation: 'Clients send getcfilters, servers respond with cfilter messages.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'With BIP-157, the client\'s addresses are:',
    options: [
      'Sent to the server',
      'Never revealed to the server',
      'Broadcast to the network',
      'Encrypted in the filter',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Clients download filters and check locally, preserving privacy.',
  },
];
