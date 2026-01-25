import type { QuizQuestion } from './types';

export const section71Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-324 provide?',
    options: [
      'New address format',
      'Block encryption',
      'Encrypted P2P transport (v2)',
      'Transaction encryption',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-324 defines encrypted and authenticated P2P communication.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'BIP-324 encryption helps prevent:',
    options: [
      'Double spending',
      'Block reorgs',
      'Mining attacks',
      'Eavesdropping and connection manipulation',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Encryption prevents ISPs and network observers from monitoring Bitcoin traffic.',
  },
  {
    id: 3,
    type: 'text',
    question: 'BIP-324 uses the _____ stream cipher for encryption.',
    correctAnswer: 'ChaCha20',
    difficulty: 'hard',
    explanation: 'BIP-324 uses ChaCha20-Poly1305 AEAD for authenticated encryption.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'V2 transport connections can be distinguished from v1 by:',
    options: [
      'Initial bytes don\\\\'t look like the v1 magic',
      'User agent',
      'Port number',
      'Block height',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'V2 uses random-looking initial bytes to avoid the v1 magic number pattern.',
  },
];
