import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'text',
    question: 'What is the prefix for a BOLT #12 offer?',
    correctAnswer: 'lno',
    difficulty: 'easy',
    explanation: 'BOLT #12 offers use "lno" prefix, invoice requests use "lnr", and invoices use "lni".',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a key difference between BOLT #11 and BOLT #12?',
    options: [
      'BOLT #12 offers are reusable; BOLT #11 invoices are single-use',
      'BOLT #12 requires more data',
      'BOLT #11 offers are reusable',
      'BOLT #11 supports blinded paths',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'BOLT #12 offers can be reused indefinitely, while BOLT #11 invoices should be single-use (unique payment hash).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How are invoice requests communicated in BOLT #12?',
    options: [
      'Via the gossip network',
      'Via HTTP',
      'Via onion messages',
      'Via DNS',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'BOLT #12 uses onion messages (BOLT #4 extension) to send invoice requests without requiring channels.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What enables the "merchant-pays-user" flow in BOLT #12?',
    options: [
      'Special invoice type',
      'Reverse routing',
      'Channel rebalancing',
      'The user creates an offer for receiving funds',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For refunds or withdrawals, the user creates an offer to receive funds, the merchant sends an invoice_request, and pays the resulting invoice.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why does BOLT #12 encoding omit checksums?',
    options: [
      'For backward compatibility',
      'To reduce size since QR codes have built-in error correction',
      'Checksums are deprecated',
      'They were never implemented',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'BOLT #12 is optimized for QR codes which already provide error correction, so the checksum overhead is unnecessary.',
  },
];
