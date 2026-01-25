import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In Schnorr signing, what is computed as $z = k + s \\cdot c$?',
    options: [
      'The challenge',
      'The commitment',
      'The public key',
      'The response',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The response $z$ is computed as $z = k + s \\cdot c$ where $k$ is the nonce, $s$ is the secret key, and $c$ is the challenge. This is the key computation in Schnorr signing.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the Schnorr verification equation check?',
    options: [
      '$[z]G = R + [c]Y
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Schnorr verification checks that $[z]G = R + [c]Y$ where $R$ is the commitment, $Y$ is the public key, and $c$ is the challenge hash $c = H(R \\| Y \\| m)$.',
  },
      '$[z]G = R - [c]Y
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Schnorr verification checks that $[z]G = R + [c]Y$ where $R$ is the commitment, $Y$ is the public key, and $c$ is the challenge hash $c = H(R \\| Y \\| m)$.',
  },
      '$[z]G = R \\cdot [c]Y
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Schnorr verification checks that $[z]G = R + [c]Y$ where $R$ is the commitment, $Y$ is the public key, and $c$ is the challenge hash $c = H(R \\| Y \\| m)$.',
  },
      '$[z]G = [c]R + Y
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Schnorr verification checks that $[z]G = R + [c]Y$ where $R$ is the commitment, $Y$ is the public key, and $c$ is the challenge hash $c = H(R \\| Y \\| m)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Schnorr verification checks that $[z]G = R + [c]Y$ where $R$ is the commitment, $Y$ is the public key, and $c$ is the challenge hash $c = H(R \\| Y \\| m)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In a Schnorr signature $\\sigma = (R, z)$, what is $R$?',
    options: [
      'A random scalar chosen by the signer',
      'The hash of the message being signed',
      'The commitment point $R = [k]G$ where $k$ is the nonce',
      'The public key of the signer'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$R = [k]G$ is the commitment - a curve point computed by scalar multiplying the generator $G$ by the random nonce $k$. It commits the signer to their nonce choice.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Given $s = 7$, $k = 13$, and $c = 5$, what is the Schnorr response $z = k + s \\cdot c$?',
    correctAnswer: 48,
    numericRange: { min: 0, max: 1000, precision: 0 },
    difficulty: 'easy',
    explanation: '$z = k + s \\cdot c = 13 + 7 \\cdot 5 = 13 + 35 = 48$',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How is the challenge $c$ computed in Schnorr signatures?',
    options: [
      '$c = R + Y + m
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The challenge $c$ is computed as $c = H(R \\| Y \\| m)$, hashing the commitment $R$, public key $Y$, and message $m$ together. This binds the signature to the specific message and public key.',
  },
      '$c = H(R \\| Y \\| m)$ where $H$ is a hash function',
      '$c$ is a random value chosen by the verifier',
      '$c = k \\cdot s \\mod q
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The challenge $c$ is computed as $c = H(R \\| Y \\| m)$, hashing the commitment $R$, public key $Y$, and message $m$ together. This binds the signature to the specific message and public key.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The challenge $c$ is computed as $c = H(R \\| Y \\| m)$, hashing the commitment $R$, public key $Y$, and message $m$ together. This binds the signature to the specific message and public key.',
  },
];
