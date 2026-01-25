import type { QuizQuestion } from './types';

export const section59Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-14 standardize?',
    options: [
      'Signature algorithm',
      'Block format',
      'Protocol version and user agent strings',
      'Address encoding',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-14 standardizes how nodes identify themselves with version and user agent.',
  },
  {
    id: 2,
    type: 'text',
    question: 'The user agent for Bitcoin Core follows the format /Satoshi:X.Y.Z/, where the name is _____.',
    correctAnswer: 'Satoshi',
    difficulty: 'easy',
    explanation: 'Bitcoin Core uses "Satoshi" in its user agent string.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The protocol version number helps nodes:',
    options: [
      'Calculate fees',
      'Validate blocks',
      'Generate addresses',
      'Determine feature compatibility',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Protocol version indicates which features and messages a node supports.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'User agent strings are sent in which message?',
    options: [
      'version',
      'verack',
      'ping',
      'getaddr',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Nodes exchange version messages containing their user agent when connecting.',
  },
];
