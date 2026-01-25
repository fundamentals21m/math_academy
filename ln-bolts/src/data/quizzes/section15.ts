import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What enables the honest party to claim all funds from a revoked commitment?',
    options: [
      'The payment hash',
      'The funding key',
      'The revocation key',
      'The channel ID'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The revocation key, derived from the revealed per_commitment_secret, allows claiming all revocable outputs.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is responding to a revoked commitment time-critical?',
    options: [
      'Must beat the cheater\\'s CSV delay expiration',
      'Network congestion',
      'Memory constraints',
      'Protocol timeout',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The penalty transaction must confirm before the cheater\'s to_self_delay expires, or they can spend their to_local output.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What outputs can be claimed with the revocation key?',
    options: [
      'Only HTLCs',
      'Only to_local',
      'Only the funding output',
      'to_local, offered HTLCs, received HTLCs, and HTLC tx outputs',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The revocation key can claim to_local, all HTLC outputs via their revocation paths, and outputs from any second-stage HTLC transactions.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is another name for a penalty transaction?',
    correctAnswer: 'justice',
    difficulty: 'easy',
    explanation: 'Penalty transactions are also called "justice transactions" as they punish cheating behavior.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why do watchtowers help with revoked transaction detection?',
    options: [
      'They have faster internet',
      'They can monitor while the node owner is offline',
      'They have more storage',
      'They are required by the protocol',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Watchtowers monitor the blockchain for breaches when the channel owner is offline, and can submit penalty transactions on their behalf.',
  },
];
