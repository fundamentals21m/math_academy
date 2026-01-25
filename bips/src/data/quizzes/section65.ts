import type { QuizQuestion } from './types';

export const section65Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the BIP-130 sendheaders message enable?',
    options: [
      'Mining optimization',
      'Faster block validation',
      'Header compression',
      'Announcing new blocks with headers instead of inv'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'sendheaders signals that a peer prefers receiving headers directly.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The advantage of sendheaders is:',
    options: [
      'Reduces round-trips for block announcements',
      'Smaller messages',
      'Better encryption',
      'Lower fees'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Headers-first avoids the inv→getheaders round-trip.',
  },
  {
    id: 3,
    type: 'text',
    question: 'After sending sendheaders, the peer announces blocks with the _____ message.',
    correctAnswer: 'headers',
    difficulty: 'medium',
    explanation: 'The peer sends headers messages directly instead of inv messages.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'sendheaders is a:',
    options: [
      'Regular block announcement',
      'Transaction message',
      'One-time preference message',
      'Fee message',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'sendheaders is sent once to set the preference for the connection.',
  },
];
