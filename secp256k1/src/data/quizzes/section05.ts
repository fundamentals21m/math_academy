import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In ECDSA signing, what is the formula for $s$?',
    options: [
      '$s = k + z
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'ECDSA computes $s = k^{-1}(z + rd) \\mod n$, where $k$ is the nonce, $z$ is the message hash, $r$ is the x-coordinate of $kG$, and $d$ is the private key.',
  },
      '$s = k^{-1}(z + rd) \\mod n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'ECDSA computes $s = k^{-1}(z + rd) \\mod n$, where $k$ is the nonce, $z$ is the message hash, $r$ is the x-coordinate of $kG$, and $d$ is the private key.',
  },
      '$s = z \\cdot d
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'ECDSA computes $s = k^{-1}(z + rd) \\mod n$, where $k$ is the nonce, $z$ is the message hash, $r$ is the x-coordinate of $kG$, and $d$ is the private key.',
  },
      '$s = r / k
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'ECDSA computes $s = k^{-1}(z + rd) \\mod n$, where $k$ is the nonce, $z$ is the message hash, $r$ is the x-coordinate of $kG$, and $d$ is the private key.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'ECDSA computes $s = k^{-1}(z + rd) \\mod n$, where $k$ is the nonce, $z$ is the message hash, $r$ is the x-coordinate of $kG$, and $d$ is the private key.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What catastrophic vulnerability occurs if the same nonce $k$ is used twice?',
    options: [
      'The signature becomes invalid',
      'The message is revealed',
      'The private key can be computed by anyone',
      'Nothing happens',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'With two signatures using the same $k$, an attacker can solve for $k$ and then compute the private key $d$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'RFC 6979 solves the nonce problem by:',
    options: [
      'Deriving $k$ deterministically from the private key and message',
      'Using a hardware random number generator',
      'Requiring a trusted third party',
      'Eliminating the nonce entirely',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'RFC 6979 computes $k = \\text{HMAC-SHA256}(d, z)$, making it deterministic and unique per message.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Signature malleability means:',
    options: [
      'Signatures can be forged',
      'Signatures don\'t verify correctly',
      'Signatures are too large',
      'Both $(r, s)$ and $(r, n-s)$ are valid signatures'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Given valid $(r, s)$, the pair $(r, -s \\mod n)$ also verifies because negating $s$ negates the verification point, but it has the same x-coordinate.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'BIP 62\'s low-s requirement says:',
    options: [
      '$s \\leq n/2$',
      '$s$ must be 0',
      '$s$ must be prime',
      '$s > n$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Bitcoin requires $s \\leq n/2$ to eliminate signature malleability, ensuring only one valid signature exists per message.',
  },
];
