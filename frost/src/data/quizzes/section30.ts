import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does each participant generate during FROST preprocessing?',
    options: [
      'A new secret share',
      'The final signature',
      '$\\pi$ commitment pairs $(D_{i,j}, E_{i,j})$ with corresponding secret nonces $(d_{i,j}, e_{i,j})
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'During preprocessing, each participant generates $\\pi$ pairs of random scalars $(d_{i,j}, e_{i,j})$ and their curve point commitments $(D_{i,j} = [d_{i,j}]G, E_{i,j} = [e_{i,j}]G)$.',
  },
      'New Lagrange coefficients',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'During preprocessing, each participant generates $\\pi$ pairs of random scalars $(d_{i,j}, e_{i,j})$ and their curve point commitments $(D_{i,j} = [d_{i,j}]G, E_{i,j} = [e_{i,j}]G)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is preprocessing called "non-interactive"?',
    options: [
      'Each participant generates their commitments independently without coordination',
      'It happens automatically',
      'No computation is required',
      'It uses a trusted setup',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Preprocessing is non-interactive because each participant independently generates and publishes their commitments. No communication or coordination between participants is required.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What happens if a commitment pair $(d_i, e_i)$ is reused for multiple signatures?',
    options: [
      'The signatures are more efficient',
      'Nothing - reuse is safe',
      'The signatures are slightly larger',
      'Catastrophic key extraction attack becomes possible (similar to nonce reuse)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Reusing nonces enables key extraction. If the same $(d_i, e_i)$ is used with different messages/sessions, an attacker can solve for the secret share $s_i$, similar to the classic Schnorr nonce reuse attack.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What must happen to the secret nonces $(d_i, e_i)$ immediately after they are used for signing?',
    options: [
      'They should be backed up',
      'They should be shared with other participants',
      'They should be stored for auditing',
      'They must be securely deleted and never reused'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'After use, the secret nonces $(d_i, e_i)$ must be immediately and securely deleted to prevent accidental reuse. This is a critical security requirement.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a batch size $\\pi = 1000$, how much storage is approximately needed per participant for the private nonces?',
    options: [
      '~1 KB',
      '~64 KB (1000 pairs of 32-byte scalars)',
      '~1 MB',
      '~1 GB',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '1000 pairs of 256-bit (32-byte) scalars requires $1000 \\times 2 \\times 32 = 64,000$ bytes $\\approx$ 64 KB. This enables 1000 signatures before needing new preprocessing.',
  },
];
