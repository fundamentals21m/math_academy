import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the Algebraic Group Model (AGM), adversaries must:',
    options: [
      'Run in polynomial time',
      'Use only standard cryptographic operations',
      'Have access to a random oracle',
      'Provide representations of all output group elements',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'AGM adversaries are "algebraic" - they must provide coefficients showing how each output element relates to previously seen elements.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The notation $[Z]$ represents:',
    options: [
      'The integer part of $Z
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$[Z] = (Z, \\alpha_1, \\ldots, \\alpha_n)$ where $Z = \\sum \\alpha_i Y_i$ in terms of previously seen elements.',
  },
      'The inverse of $Z
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$[Z] = (Z, \\alpha_1, \\ldots, \\alpha_n)$ where $Z = \\sum \\alpha_i Y_i$ in terms of previously seen elements.',
  },
      'A group element $Z$ augmented with its representation',
      'The hash of $Z
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$[Z] = (Z, \\alpha_1, \\ldots, \\alpha_n)$ where $Z = \\sum \\alpha_i Y_i$ in terms of previously seen elements.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$[Z] = (Z, \\alpha_1, \\ldots, \\alpha_n)$ where $Z = \\sum \\alpha_i Y_i$ in terms of previously seen elements.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The SeqMuSig security proof reduces MSUNF security to:',
    options: [
      'SUNF (blind signature security)',
      'The discrete log problem',
      'Collision resistance',
      'Random oracle security',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Lemma 2 shows that if BlSch is SUNF-secure, then SeqMuSig is MSUNF-secure.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the reduction, $\\mathcal{B}$ simulates which game to $\\mathcal{A}$?',
    options: [
      'SUNF directly',
      'A random oracle game',
      'Game$_1$, which is indistinguishable from MSUNF',
      'The discrete log game',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\mathcal{B}$ simulates Game$_1$, which is indistinguishable from the real MSUNF game.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The proof has an issue because the representation of $[X]$ includes:',
    options: [
      'Only $G
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The representation includes all $R$ values from signing sessions, complicating the reduction.',
  },
      'Only $G$ and $X^*
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The representation includes all $R$ values from signing sessions, complicating the reduction.',
  },
      'Unknown values',
      'Bases $G$, $X^*$, and all $R$\\'s',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The representation includes all $R$ values from signing sessions, complicating the reduction.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Schnorr verification equation is:',
    options: [
      '$sG = R + cX
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Schnorr verification checks $sG = R + cX$ where $c = H_{\\text{sig}}(X, R, m)$.',
  },
      '$R = sG - cX
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Schnorr verification checks $sG = R + cX$ where $c = H_{\\text{sig}}(X, R, m)$.',
  },
      '$sG = R \\cdot X
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Schnorr verification checks $sG = R + cX$ where $c = H_{\\text{sig}}(X, R, m)$.',
  },
      '$s = r + cx
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Schnorr verification checks $sG = R + cX$ where $c = H_{\\text{sig}}(X, R, m)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Schnorr verification checks $sG = R + cX$ where $c = H_{\\text{sig}}(X, R, m)$.',
  },
];
