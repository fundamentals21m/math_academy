import type { QuizQuestion } from './types';

export const section68Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is an open research question regarding FROST key refresh?',
    options: [
      'Key refresh is fully solved',
      'Efficient proactive security: refreshing shares without changing the public key',
      'Making keys longer',
      'Removing the need for keys',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Proactive security refreshes shares periodically so that an attacker must compromise $t$ parties simultaneously, not just over time. Efficient protocols remain an active research area.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the challenge of "dynamic groups" in threshold signatures?',
    options: [
      'Groups cannot change',
      'Adding or removing participants while maintaining security properties',
      'Making groups larger',
      'Dynamic groups are not useful',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Changing the participant set ($n$) or threshold ($t$) requires protocols to redistribute shares securely, ideally without revealing the secret or requiring trusted parties.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What makes FROST resistant to "adaptive" adversaries an open problem?',
    options: [
      'Adaptive adversaries do not exist',
      'Proving security when adversary can corrupt parties based on protocol messages',
      'The protocol is already proven secure',
      'Adaptive security is not important',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Adaptive security considers adversaries who choose whom to corrupt based on observed protocol execution. Proving FROST secure in this model is more challenging.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What research direction aims to reduce FROST communication complexity?',
    options: [
      'Using slower networks',
      'Aggregatable signatures and more efficient broadcast protocols',
      'Removing participants',
      'Using longer messages',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Research explores reducing the $O(n^2)$ communication in some settings through more efficient aggregation, gossip protocols, or structured communication patterns.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is formal verification of FROST implementations an important research area?',
    options: [
      'To make FROST slower',
      'To mathematically prove implementations match security specifications',
      'Formal verification is outdated',
      'To reduce code size',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Formal verification uses mathematical proofs to ensure implementations correctly follow specifications, catching subtle bugs that testing might miss in security-critical code.',
  },
];
