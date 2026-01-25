import type { QuizQuestion } from './types';

export const section56Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why must nonces be securely deleted immediately after use in FROST?',
    options: [
      'To prevent nonce reuse which would expose the secret key',
      'To free up memory',
      'To make signing faster',
      'Nonces can be safely stored for later use',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Reusing a nonce across two signatures allows an attacker to solve for the secret key. Immediate deletion ensures a nonce is never accidentally reused.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What state must a FROST participant maintain between the commitment and signing rounds?',
    options: [
      'No state is needed',
      'The nonces $(d_i, e_i)$ corresponding to their published commitments',
      'The final signature',
      'All other participants\\' private keys',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Participants must store their secret nonces between rounds to compute their signature share. These nonces must match the commitments they broadcast.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a nonce commitment in FROST and why is it published before signing?',
    options: [
      'The encrypted nonce, to hide it from other signers',
      'A hash of the message',
      'The curve points $(D_i, E_i) = (d_i \\cdot G, e_i \\cdot G)$, to bind signers to their nonces',
      'The signer\\'s public key share',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Publishing $D_i = d_i \\cdot G$ and $E_i = e_i \\cdot G$ commits signers to their nonces before seeing others\' values, preventing adaptive attacks.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What security technique helps ensure nonces are deleted from memory?',
    options: [
      'Secure memory wiping (zeroing) before deallocation',
      'Using global variables',
      'Writing nonces to disk',
      'Using longer nonces',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Cryptographic libraries provide secure memory functions that explicitly overwrite sensitive data with zeros before freeing memory, preventing recovery from RAM.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If a signing session is aborted, what must happen to the unused nonces?',
    options: [
      'They can be saved for the next session',
      'They are automatically reused',
      'Nothing special is required',
      'They must be securely deleted and fresh nonces generated for retry',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Once commitments are broadcast, those nonces are "burned" and must never be reused, even if signing fails. Fresh nonces must be generated for any retry.',
  },
];
