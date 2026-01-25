import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the "soundness" property of Schnorr signatures guarantee?',
    options: [
      'Signatures are always exactly 64 bytes',
      'Verification always completes in constant time',
      'The same message always produces the same signature',
      'No one can create a valid signature without knowing the secret key',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Soundness means no one can forge a valid signature without knowing the secret key $s$. Without $s$, an attacker cannot compute $z = k + s \\cdot c$ for any chosen $k$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the "zero-knowledge" property mean for Schnorr signatures?',
    options: [
      'The signature reveals no information about the secret key beyond what the public key already reveals',
      'The signature contains zero bytes of data',
      'Verification requires zero computational resources',
      'The signer learns nothing about the message they are signing',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Zero-knowledge means signatures reveal nothing about $s$ beyond what could be computed from $Y = [s]G$ alone. Both $z$ and $R$ appear random, and multiple signatures do not leak cumulative information.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the simulation argument for zero-knowledge, how is a valid-looking signature created without knowing $s$?',
    options: [
      'By solving the discrete logarithm problem',
      'By choosing random $z$ and $c$, then computing $R = [z]G - [c]Y
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A simulator chooses random $z$ and $c$, then computes $R = [z]G - [c]Y$. This $(R, z)$ passes verification but was created without knowing $s$, proving real signatures reveal nothing.',
  },
      'By guessing the nonce $k$ correctly',
      'By reusing a previous valid signature',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'A simulator chooses random $z$ and $c$, then computes $R = [z]G - [c]Y$. This $(R, z)$ passes verification but was created without knowing $s$, proving real signatures reveal nothing.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is the hash function modeled as a "random oracle" in Schnorr security proofs?',
    options: [
      'To ensure signatures are always the same length',
      'To make verification faster',
      'To prevent attackers from predicting $H(R \\| Y \\| m)$ before committing to $R
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The random oracle model ensures attackers cannot predict $H(R \\| Y \\| m)$ without first choosing $R$. This prevents "working backwards" from a desired challenge to forge a signature.',
  },
      'To allow deterministic signature generation',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The random oracle model ensures attackers cannot predict $H(R \\| Y \\| m)$ without first choosing $R$. This prevents "working backwards" from a desired challenge to forge a signature.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What security properties must FROST preserve from standard Schnorr signatures?',
    options: [
      'Only soundness',
      'Only zero-knowledge',
      'Soundness, zero-knowledge, and no secret reconstruction',
      'Determinism and reproducibility',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'FROST must preserve: soundness (cannot forge without $t$ participants), zero-knowledge (signatures reveal nothing about shares), and add the property that $s$ is never reconstructed.',
  },
];
