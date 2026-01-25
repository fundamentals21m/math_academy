import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'How many bytes is the message type field in a Lightning message?',
    correctAnswer: 2,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'Every Lightning message has a 2-byte type field encoded as a big-endian unsigned 16-bit integer.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to the "It\'s OK to be Odd" rule, what happens with unknown odd-type messages?',
    options: [
      'Connection is closed',
      'An error is returned',
      'Message can be safely ignored',
      'Message is forwarded to peers'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Odd-type messages are optional and can be safely ignored if not understood, while even-type messages are mandatory.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is the type number of the init message?',
    correctAnswer: 16,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'The init message has type 16 and is the first message sent after the handshake.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What encoding format is used for variable-length fields in Lightning messages?',
    options: [
      'Protobuf',
      'JSON',
      'XML',
      'TLV (Type-Length-Value)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Lightning uses TLV (Type-Length-Value) encoding for extensible fields, allowing backward-compatible protocol evolution.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the message type range for Commitment messages?',
    options: [
      '128-255',
      '0-31',
      '32-127',
      '256-511',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Commitment messages use types 128-255. Setup & Control are 0-31, Channel are 32-127, and Routing are 256-511.',
  },
];
