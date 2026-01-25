import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the two types of second-stage HTLC transactions?',
    options: [
      'HTLC-success and HTLC-timeout',
      'HTLC-add and HTLC-remove',
      'HTLC-offer and HTLC-receive',
      'HTLC-lock and HTLC-unlock',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'HTLC-success transactions claim received HTLCs with the preimage, while HTLC-timeout transactions reclaim offered HTLCs after expiry.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many spending paths does an offered HTLC script have?',
    options: [
      '1',
      '2',
      '3',
      '4',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Offered HTLCs have three paths: revocation (penalty), HTLC-success (preimage), and HTLC-timeout (after CLTV expiry).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why do HTLC transactions add a delay before the local party can spend?',
    options: [
      'To reduce blockchain congestion',
      'To allow time for revocation if the commitment was revoked',
      'To batch multiple HTLCs together',
      'For privacy reasons',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The delay gives the counterparty time to use the revocation key if the commitment transaction was revoked.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Where are the remote party\'s HTLC signatures provided?',
    options: [
      'update_add_htlc message',
      'revoke_and_ack message',
      'channel_ready message',
      'commitment_signed message',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The commitment_signed message includes signatures for both the commitment transaction and all HTLC transactions.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What feature enables zero-fee HTLC transactions? (with underscores)',
    correctAnswer: 'option_anchors_zero_fee_htlc_tx',
    difficulty: 'hard',
    explanation: 'With option_anchors_zero_fee_htlc_tx, HTLC transactions use zero fees and SIGHASH_SINGLE|SIGHASH_ANYONECANPAY, allowing fee addition via additional inputs.',
  },
];
