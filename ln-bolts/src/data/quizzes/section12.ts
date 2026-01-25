import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which basepoint is used for constructing revocation keys?',
    options: [
      'payment_basepoint',
      'delayed_payment_basepoint',
      'revocation_basepoint',
      'htlc_basepoint',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The revocation_basepoint is used specifically for constructing revocation keys.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why do revocation keys require information from BOTH parties?',
    options: [
      'So neither party can construct the revocation private key alone',
      'To reduce computation time',
      'For load balancing',
      'For redundancy',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Revocation keys combine both parties\' secrets, ensuring the private key can only be computed when the per_commitment_secret is revealed.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What is the name of the hash chain structure for generating per-commitment secrets?',
    correctAnswer: 'shachain',
    difficulty: 'hard',
    explanation: 'Shachain is a compact structure where each secret can derive all previous secrets, but not future ones, requiring only log(N) storage.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'With option_static_remotekey, how is the to_remote key derived?',
    options: [
      'It varies per commitment',
      'It\\\\'s derived from the funding key',
      'It changes every 1000 commitments',
      'It\\\\'s a fixed payment_basepoint',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'With static_remotekey, the remote payment key doesn\'t vary - it\'s just the fixed payment_basepoint, simplifying backup and recovery.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What does a watchtower need to submit a penalty transaction?',
    options: [
      'Only the revocation secret',
      'The commitment transaction and pre-signed penalty data',
      'Access to the node\\\\\'s private keys',
      'The full channel state history',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Watchtowers need the commitment transaction to watch for and penalty transaction info to submit. They don\'t need the per_commitment_secret until a breach occurs.',
  },
];
