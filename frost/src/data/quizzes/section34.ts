import type { QuizQuestion } from './types';

export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does EUF-CMA stand for in the context of digital signature security?',
    options: [
      'Extended Unified Framework for Cryptographic Message Authentication',
      'Efficient Universal Forgery under Computational Message Analysis',
      'Existential Unforgeability under Chosen Message Attack',
      'Encrypted User Functions with Chosen Message Access',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'EUF-CMA stands for Existential Unforgeability under Chosen Message Attack. This is the standard security model for digital signatures where an adversary cannot forge a signature on any new message even after seeing signatures on messages of their choice.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the FROST security model, what is the maximum number of corrupted participants the adversary can control in a $(t, n)$ threshold scheme?',
    options: [
      'Up to $t - 1$ participants',
      'Up to $n - 1$ participants',
      'Up to $t$ participants',
      'Up to $n - t$ participants',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The adversary can corrupt up to $t - 1$ participants. With $t$ or more corrupted parties, they could reconstruct the secret key and trivially forge signatures. The security guarantee only holds when strictly fewer than $t$ parties are compromised.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which oracle does the adversary NOT have access to in the FROST security model?',
    options: [
      'Signing oracle (to request signatures on chosen messages)',
      'Random oracle (modeling hash functions)',
      'Corruption oracle (to obtain shares of corrupted parties)',
      'Key extraction oracle (to directly obtain the group secret key)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The adversary has access to signing, random, and corruption oracles, but never has direct access to the group secret key $s$. The entire point of threshold signatures is that no single entity ever holds the complete secret key.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the primary security assumption underlying FROST\'s unforgeability?',
    options: [
      'RSA assumption',
      'Collision resistance of SHA-256',
      'Discrete Logarithm Problem (DLP) hardness',
      'Learning With Errors (LWE) assumption',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'FROST\'s security relies on the hardness of the Discrete Logarithm Problem in the underlying elliptic curve group. If an adversary could compute discrete logs, they could extract the secret key from the public key $Y = [s]G$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In the Random Oracle Model (ROM) used for FROST security proofs, what assumption is made about hash functions?',
    options: [
      'Hash outputs are deterministic given the same input',
      'Hash functions behave as truly random functions',
      'Hash collisions are computationally easy to find',
      'Hash outputs can be inverted with polynomial effort',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Random Oracle Model assumes hash functions behave as ideal random functions: for each new input, the output is uniformly random and independent of all other outputs, but consistent (same input always gives same output). This is a theoretical idealization used in security proofs.',
  },
];
