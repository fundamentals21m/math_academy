import type { QuizQuestion } from './types';

export const section57Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many communication rounds does the FROST signing protocol require?',
    options: [
      'Two rounds (commitment broadcast, then signing)',
      'One round',
      'The number varies with the threshold',
      'Three rounds',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'FROST uses two rounds: (1) each signer broadcasts nonce commitments, (2) each signer computes and shares their signature share after seeing all commitments.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What role does a coordinator play in FROST, and what can they NOT do?',
    options: [
      'Coordinators aggregate messages but cannot forge signatures alone',
      'Coordinators sign on behalf of absent participants',
      'Coordinators hold the master secret key',
      'Coordinators are not needed in FROST',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The coordinator collects commitments and shares, then aggregates the signature. They have no secret material and cannot sign without $t$ honest participants.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why might FROST use authenticated channels between participants?',
    options: [
      'To make communication faster',
      'Authentication is not needed',
      'To encrypt the final signature',
      'To prevent man-in-the-middle attacks that could substitute commitments',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Authenticated channels ensure commitments genuinely come from claimed participants, preventing attackers from substituting malicious values.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In a peer-to-peer FROST setup without a coordinator, how do participants agree on the signing set?',
    options: [
      'The first participant decides',
      'It does not matter who participates',
      'All participants must use a consensus protocol or predefined rules',
      'Participants are randomly selected',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Without a coordinator, participants need consensus on who is signing to ensure everyone computes the same Lagrange coefficients and binding factors.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What happens if a participant goes offline between the commitment and signing rounds?',
    options: [
      'Their commitment is automatically used',
      'The signing session fails and must restart with a new signing set',
      'The protocol continues without them',
      'Another participant can sign on their behalf',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If a committed participant fails to provide their share, the session must abort (nonces are burned) and restart with participants who are available.',
  },
];
