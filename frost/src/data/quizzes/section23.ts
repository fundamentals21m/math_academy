import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the FROST modified nonce formula for participant $i$?',
    options: [
      '$k_i = d_i
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'FROST uses $k_i = d_i + e_i \\cdot \\rho_i$, where $d_i$ and $e_i$ are pre-committed random values, and $\\rho_i$ is the session-specific binding value.',
  },
      '$k_i = d_i + e_i
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'FROST uses $k_i = d_i + e_i \\cdot \\rho_i$, where $d_i$ and $e_i$ are pre-committed random values, and $\\rho_i$ is the session-specific binding value.',
  },
      '$k_i = d_i \\cdot e_i \\cdot \\rho_i
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'FROST uses $k_i = d_i + e_i \\cdot \\rho_i$, where $d_i$ and $e_i$ are pre-committed random values, and $\\rho_i$ is the session-specific binding value.',
  },
      '$k_i = d_i + e_i \\cdot \\rho_i
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'FROST uses $k_i = d_i + e_i \\cdot \\rho_i$, where $d_i$ and $e_i$ are pre-committed random values, and $\\rho_i$ is the session-specific binding value.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'FROST uses $k_i = d_i + e_i \\cdot \\rho_i$, where $d_i$ and $e_i$ are pre-committed random values, and $\\rho_i$ is the session-specific binding value.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the formula $k_i = d_i + e_i \\cdot \\rho_i$, which values are secret (never published)?',
    options: [
      '$d_i$ and $e_i$ (the random scalars)',
      'Only $\\rho_i
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The scalars $d_i$ and $e_i$ are secret, stored securely after preprocessing and deleted after use. Only their commitments $D_i = [d_i]G$ and $E_i = [e_i]G$ are public.',
  },
      'Only $d_i
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The scalars $d_i$ and $e_i$ are secret, stored securely after preprocessing and deleted after use. Only their commitments $D_i = [d_i]G$ and $E_i = [e_i]G$ are public.',
  },
      'All three values',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The scalars $d_i$ and $e_i$ are secret, stored securely after preprocessing and deleted after use. Only their commitments $D_i = [d_i]G$ and $E_i = [e_i]G$ are public.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the role of $d_i$ in the modified nonce formula?',
    options: [
      'It verifies the commitment',
      'It binds the nonce to the message',
      'It provides base randomness independent of the session',
      'It encrypts the signature share',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$d_i$ provides base randomness that ensures unpredictability even if $\\rho_i$ becomes known. It\'s independent of any session-specific information.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How is the public commitment $R_i$ verified from the secret nonce $k_i$?',
    options: [
      '$R_i = [k_i]G$, which equals $D_i + [\\rho_i]E_i$',
      '$R_i = D_i - E_i$',
      '$R_i = [k_i]Y$',
      '$R_i = H(k_i)$',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$R_i = [k_i]G = [d_i + e_i \\cdot \\rho_i]G = [d_i]G + [e_i \\cdot \\rho_i]G = D_i + [\\rho_i]E_i$. The commitment can be computed publicly from $(D_i, E_i, \\rho_i)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why does the formula $k_i = d_i + e_i \\cdot \\rho_i$ prevent cross-session attacks?',
    options: [
      'Because $d_i$ changes every session',
      'Because $\\rho_i$ depends on ALL commitments, so changing any commitment changes all binding values',
      'Because $e_i$ is always 1',
      'Because the formula uses multiplication',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Since $\\rho_i = H_1(i, m, B)$ depends on all commitments in $B$, the adversary cannot know $\\rho_i$ until after committing to $(D_i, E_i)$. Changing commitments changes all $\\rho_i$ values unpredictably.',
  },
];
