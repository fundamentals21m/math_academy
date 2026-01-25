import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What feature enables dual-funded channels?',
    options: [
      'option_static_remotekey',
      'option_anchor_outputs',
      'option_zeroconf',
      'option_dual_fund',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The option_dual_fund feature enables v2 channels where both peers can contribute to the funding transaction.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In interactive transaction construction, what serial ID parity does the initiator use?',
    options: [
      'Only odd numbers',
      'Only even numbers',
      'Prime numbers',
      'Any numbers',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The initiator uses even serial IDs (0, 2, 4, ...) while the non-initiator uses odd serial IDs (1, 3, 5, ...).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How is construction completion signaled?',
    options: [
      'A tx_done message',
      'A single tx_complete message',
      'Consecutive tx_complete messages from both peers',
      'Timeout after 60 seconds',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Construction is only complete when both peers send consecutive tx_complete messages. If either sends a modification after tx_complete, both must signal again.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who sends tx_signatures first?',
    options: [
      'The non-initiator',
      'The initiator',
      'Either party',
      'Neither - signatures are in tx_complete',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The non-initiator sends tx_signatures first to protect the initiator from creating a valid transaction that the non-initiator refuses to sign.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What message proposes an RBF of the funding transaction? (type name)',
    correctAnswer: 'tx_init_rbf',
    difficulty: 'medium',
    explanation: 'The tx_init_rbf message proposes a Replace-By-Fee update with a higher fee rate.',
  },
];
