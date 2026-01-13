import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the Algebraic Group Model (AGM), adversaries must:',
    options: [
      'Run in polynomial time',
      'Provide representations of all output group elements',
      'Use only standard cryptographic operations',
      'Have access to a random oracle'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'AGM adversaries are "algebraic" - they must provide coefficients showing how each output element relates to previously seen elements.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The notation $[Z]$ represents:',
    options: [
      'The integer part of $Z$',
      'A group element $Z$ augmented with its representation',
      'The hash of $Z$',
      'The inverse of $Z$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$[Z] = (Z, \\alpha_1, \\ldots, \\alpha_n)$ where $Z = \\sum \\alpha_i Y_i$ in terms of previously seen elements.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The SeqMuSig security proof reduces MSUNF security to:',
    options: [
      'The discrete log problem',
      'SUNF (blind signature security)',
      'Collision resistance',
      'Random oracle security'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Lemma 2 shows that if BlSch is SUNF-secure, then SeqMuSig is MSUNF-secure.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the reduction, $\\mathcal{B}$ simulates which game to $\\mathcal{A}$?',
    options: [
      'SUNF directly',
      'Game$_1$, which is indistinguishable from MSUNF',
      'A random oracle game',
      'The discrete log game'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\mathcal{B}$ simulates Game$_1$, which is indistinguishable from the real MSUNF game.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The proof has an issue because the representation of $[X]$ includes:',
    options: [
      'Only $G$',
      'Only $G$ and $X^*$',
      'Bases $G$, $X^*$, and all $R$\'s',
      'Unknown values'
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
      '$sG = R + cX$',
      '$sG = R \\cdot X$',
      '$s = r + cx$',
      '$R = sG - cX$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Schnorr verification checks $sG = R + cX$ where $c = H_{\\text{sig}}(X, R, m)$.',
  },
];
