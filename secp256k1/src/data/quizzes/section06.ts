import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How does Schnorr\'s signing formula differ from ECDSA?',
    options: [
      'They are identical',
      'Schnorr: $s = k + ed$; ECDSA: $s = k^{-1}(z + rd)$',
      'Schnorr requires no nonce',
      'ECDSA is simpler'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Schnorr uses $s = k + ed$ (no inverse needed), while ECDSA uses $s = k^{-1}(z + rd)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the main advantage of Schnorr signature aggregation (MuSig)?',
    options: [
      'Signatures become smaller',
      'Private keys are no longer needed',
      'Multiple signatures combine into one indistinguishable from a single signature',
      'Verification becomes slower'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'MuSig allows multiple parties to produce a single aggregated signature that looks identical to a regular single-signer signature.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Schnorr verification checks that:',
    options: [
      '$sG = R + eQ
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Schnorr verification checks $sG = R + eQ$, which follows from $s = k + ed$ and $R = kG$, $Q = dG$.',
  },
      '$sG = R - eQ
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Schnorr verification checks $sG = R + eQ$, which follows from $s = k + ed$ and $R = kG$, $Q = dG$.',
  },
      '$eG = R + sQ
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Schnorr verification checks $sG = R + eQ$, which follows from $s = k + ed$ and $R = kG$, $Q = dG$.',
  },
      '$sR = G + eQ
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Schnorr verification checks $sG = R + eQ$, which follows from $s = k + ed$ and $R = kG$, $Q = dG$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Schnorr verification checks $sG = R + eQ$, which follows from $s = k + ed$ and $R = kG$, $Q = dG$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why was Schnorr not used in Bitcoin originally?',
    options: [
      'It wasn\\'t invented yet',
      'It\\'s less secure than ECDSA',
      'It requires larger keys',
      'It was patented until 2008',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Claus Schnorr\'s patent expired in 2008, just before Bitcoin\'s release. ECDSA was already established and patent-free.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Bitcoin\'s Taproot upgrade (BIP 340/341/342) uses:',
    options: [
      'Only ECDSA',
      'Schnorr signatures with x-only public keys',
      'RSA signatures',
      'No signatures at all'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Taproot uses Schnorr with 32-byte x-only public keys, enabling both key-path and script-path spending.',
  },
];
