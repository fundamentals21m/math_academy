import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a 3-of-5 FROST scheme where an adversary controls participants 1 and 2, can they forge a signature without honest cooperation?',
    options: [
      'Yes, they have enough shares',
      'Yes, if they work fast enough',
      'It depends on the message',
      'No, they control fewer than $t=3$ shares needed',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With threshold $t=3$, the adversary needs 3 shares to sign. Controlling only 2 participants (below threshold), they cannot forge without cooperation from at least one honest party.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why can\'t an adversary extract the secret $s$ from having 2 shares of a degree-2 polynomial?',
    options: [
      'The shares are encrypted',
      'The shares are too large',
      '2 equations with 3 unknowns - every possible secret is consistent with the known points',
      'The polynomial is hidden'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'A degree-2 polynomial has 3 coefficients ($a_0, a_1, a_2$). With only 2 points, we have 2 equations but 3 unknowns. Information-theoretically, the secret $s = a_0$ could be any value.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why can\'t an adversary extract honest participant $i$\'s secret share $s_i$ from their signature share $z_i$?',
    options: [
      'The random nonce contribution $k_i = d_i + e_i \\cdot \\rho_i$ masks the key share',
      'The hash function hides it',
      'The signature share is encrypted',
      'The Lagrange coefficient is secret',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In $z_i = d_i + e_i \\cdot \\rho_i + \\lambda_i \\cdot s_i \\cdot c$, the random nonce contribution acts as a one-time pad. Without knowing $d_i$ and $e_i$, the adversary cannot extract $s_i$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If an adversary submits an invalid signature share, what happens?',
    options: [
      'The signature still works',
      'All participants must restart',
      'The adversary gains information',
      'The share is detected via verification equation $[z_i]G = R_i + [\\lambda_i \\cdot c]Y_i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Invalid shares are detected using the verification equation $[z_i]G \\stackrel{?}{=} R_i + [\\lambda_i \\cdot c]Y_i$. The adversary is identified and their share rejected.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Invalid shares are detected using the verification equation $[z_i]G \\stackrel{?}{=} R_i + [\\lambda_i \\cdot c]Y_i$. The adversary is identified and their share rejected.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In a 3-of-5 scheme, if the adversary controls 2 participants, what CAN they do?',
    options: [
      'Forge signatures',
      'Refuse to participate (denial of service), but honest parties 3,4,5 can still sign',
      'Extract the group secret',
      'Decrypt all messages'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The adversary can refuse to participate or submit invalid shares (detected). However, honest parties 3, 4, 5 form a valid signing set of size 3 and can sign without the adversary.',
  },
];
