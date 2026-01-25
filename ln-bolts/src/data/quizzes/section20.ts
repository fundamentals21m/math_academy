import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What problem does DNS bootstrap solve?',
    options: [
      'Domain name resolution',
      'Channel capacity lookup',
      'Fee estimation',
      'Initial peer discovery for new nodes',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'DNS bootstrap helps new nodes find initial peers to connect to when they have no prior knowledge of the network.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the "r" condition parameter specify?',
    options: [
      'Number of results',
      'Address types',
      'The blockchain network (realm)',
      'A specific node ID',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The "r" parameter specifies the realm (network), with r0 being Bitcoin (the default).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What DNS record type returns IP addresses on the standard port?',
    options: [
      'SRV',
      'A or AAAA',
      'TXT',
      'MX',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A records return IPv4 addresses and AAAA return IPv6, both assuming the standard port 9735.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is the default number of results for a DNS seed query?',
    correctAnswer: 25,
    numericRange: { min: 10, max: 50, precision: 0 },
    difficulty: 'medium',
    explanation: 'The default is 25 results, though this can be overridden with the "n" parameter.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is a security concern with DNS seeds?',
    options: [
      'They can see DNS queries, affecting privacy',
      'They control routing',
      'They can modify payments',
      'They can see channel balances',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'DNS seeds can see who\'s bootstrapping (privacy concern), and malicious seeds could return attacker-controlled nodes.',
  },
];
