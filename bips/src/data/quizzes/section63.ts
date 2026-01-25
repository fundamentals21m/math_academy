import type { QuizQuestion } from './types';

export const section63Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What did the BIP-61 reject message do?',
    options: [
      'Inform peers why a message was rejected',
      'Reject blocks',
      'Reject connections',
      'Reject mining',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The reject message explained why a transaction or block was rejected.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why was BIP-61 deprecated?',
    options: [
      'Required too much bandwidth',
      'Too verbose',
      'Provided attack vector and leaked information',
      'Incompatible with SegWit',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Reject messages could fingerprint nodes and provide attack information.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Modern nodes handle invalid messages by simply _____ them.',
    correctAnswer: 'ignoring',
    difficulty: 'easy',
    explanation: 'Without reject messages, nodes simply ignore invalid data.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'BIP-61 reject messages were removed from Bitcoin Core in:',
    options: [
      'Version 0.10.0',
      'Version 0.20.0',
      'Version 0.16.0',
      'Version 1.0.0',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Bitcoin Core 0.20.0 removed support for sending reject messages.',
  },
];
