import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the three main phases of the FROST protocol?',
    options: [
      'Setup, Sign, Verify',
      'Key Generation (DKG), Preprocessing, Signing',
      'Commit, Challenge, Response',
      'Share, Reconstruct, Aggregate',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'FROST operates in three phases: (1) Key Generation (DKG) - done once to create shares, (2) Preprocessing - done in batches to prepare commitments, (3) Signing - fast, single-round per signature.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many communication rounds does FROST signing require (with preprocessing done in advance)?',
    options: [
      'Three rounds',
      'Two rounds',
      'One round (single-round signing)',
      'Zero rounds (non-interactive)',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'FROST\'s headline feature is single-round signing: coordinator sends $(m, B)$, each signer responds with $z_i$. This is possible because preprocessing prepares commitments in advance.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the preprocessing phase produce?',
    options: [
      'The group public key $Y
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Preprocessing generates $\\pi$ commitment pairs $(D_i, E_i)$ (public) along with their corresponding secret nonces $(d_i, e_i)$. Each pair is used exactly once for signing.',
  },
      'The final signature',
      'Commitment pairs $(D_i, E_i)$ and private nonces $(d_i, e_i)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Preprocessing generates $\\pi$ commitment pairs $(D_i, E_i)$ (public) along with their corresponding secret nonces $(d_i, e_i)$. Each pair is used exactly once for signing.',
  },
      'The challenge hash $c
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Preprocessing generates $\\pi$ commitment pairs $(D_i, E_i)$ (public) along with their corresponding secret nonces $(d_i, e_i)$. Each pair is used exactly once for signing.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Preprocessing generates $\\pi$ commitment pairs $(D_i, E_i)$ (public) along with their corresponding secret nonces $(d_i, e_i)$. Each pair is used exactly once for signing.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'After DKG completes, what does each participant $P_i$ have?',
    options: [
      'Secret share $s_i$, verification share $Y_i$, and group public key $Y
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Each participant has: their secret share $s_i$ (private), their verification share $Y_i = [s_i]G$ (public), and the group public key $Y = [s]G$ (public). No one knows the full secret $s$.',
  },
      'Only the group public key $Y
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each participant has: their secret share $s_i$ (private), their verification share $Y_i = [s_i]G$ (public), and the group public key $Y = [s]G$ (public). No one knows the full secret $s$.',
  },
      'The complete secret $s
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each participant has: their secret share $s_i$ (private), their verification share $Y_i = [s_i]G$ (public), and the group public key $Y = [s]G$ (public). No one knows the full secret $s$.',
  },
      'All other participants\\' shares',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each participant has: their secret share $s_i$ (private), their verification share $Y_i = [s_i]G$ (public), and the group public key $Y = [s]G$ (public). No one knows the full secret $s$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the parameter $\\pi$ in FROST preprocessing?',
    options: [
      'The mathematical constant 3.14159...',
      'The number of participants',
      'The threshold value',
      'The preprocessing batch size (number of commitment pairs per batch)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\pi$ is the preprocessing batch size - the number of commitment pairs $(D_i, E_i)$ generated in each preprocessing phase. Larger $\\pi$ means more signatures before needing to re-preprocess.',
  },
];
