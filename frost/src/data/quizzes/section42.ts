import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is "rerandomization" in the context of FROST signatures?',
    options: [
      'Generating new random nonces for each signature',
      'Adding random padding to signatures',
      'Randomizing the order of participants',
      'Transforming the public key and shares so signatures are unlinkable across sessions',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Rerandomization adds a public random value to shift the group public key from $Y$ to $Y\' = Y + [r]G$. Signatures under $Y\'$ cannot be linked back to the original key $Y$, enhancing privacy.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If the original group key is $Y = [s]G$ and rerandomization factor is $r$, what is the effective secret key for the rerandomized key $Y\'$?',
    options: [
      '$s\' = s \\cdot r$',
      '$s\' = s + r$',
      '$s\' = s - r$',
      '$s\' = s / r$',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'With $Y\' = Y + [r]G = [s]G + [r]G = [s + r]G$, the effective secret is $s\' = s + r$. Each participant adds $r \\cdot \\lambda_i$ to their share to sign under the new key.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is rerandomization useful for Bitcoin privacy?',
    options: [
      'It makes transactions faster',
      'It reduces transaction fees',
      'It makes multiple signatures from the same group unlinkable on the blockchain',
      'It enables offline signing'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Each rerandomized key $Y\'$ appears as a completely new public key on-chain. Observers cannot link multiple transactions to the same FROST group, significantly enhancing financial privacy.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What property must the rerandomization factor $r$ satisfy?',
    options: [
      'It must be known to all participants but unpredictable to outsiders',
      'It must be a prime number',
      'It must equal the sum of all share values',
      'It must be kept secret from all participants',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The factor $r$ must be known to signing participants (so they can adjust their shares) but should be unpredictable to chain analysts. It can be derived from a shared random beacon or agreed upon in the signing session.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does rerandomization affect the verification of FROST signatures?',
    options: [
      'Verification becomes more complex, requiring knowledge of $r
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Signatures under the rerandomized key $Y\'$ are standard Schnorr signatures. Anyone can verify using $[z]G = R + [c]Y\'$ without knowing the rerandomization factor $r$ or that rerandomization was used.',
  },
      'Verification is unchanged - standard Schnorr verification works with the rerandomized public key',
      'Verification requires multiple rounds',
      'Verification can only be done by participants',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Signatures under the rerandomized key $Y\'$ are standard Schnorr signatures. Anyone can verify using $[z]G = R + [c]Y\'$ without knowing the rerandomization factor $r$ or that rerandomization was used.',
  },
];
