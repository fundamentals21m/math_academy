import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If you sign two messages $m_1$ and $m_2$ with the same nonce $k$, what can an attacker extract?',
    options: [
      'Only the message hashes',
      'The private key $s
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'With two signatures using the same nonce: $z_1 = k + s \\cdot c_1$ and $z_2 = k + s \\cdot c_2$. Subtracting gives $z_1 - z_2 = s(c_1 - c_2)$, so $s = (z_1 - z_2)/(c_1 - c_2)$.',
  },
      'The nonce $k$ but not the private key',
      'Nothing useful without the public key',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'With two signatures using the same nonce: $z_1 = k + s \\cdot c_1$ and $z_2 = k + s \\cdot c_2$. Subtracting gives $z_1 - z_2 = s(c_1 - c_2)$, so $s = (z_1 - z_2)/(c_1 - c_2)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Given $z_1 - z_2 = s \\cdot (c_1 - c_2)$, what formula extracts the private key $s$?',
    options: [
      '$s = (z_1 - z_2) \\cdot (c_1 - c_2)$',
      '$s = (z_1 + z_2) / (c_1 + c_2)$',
      '$s = (c_1 - c_2) / (z_1 - z_2)$',
      '$s = (z_1 - z_2) / (c_1 - c_2)$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'From $z_1 - z_2 = s \\cdot (c_1 - c_2)$, we solve for $s$ by dividing: $s = (z_1 - z_2) / (c_1 - c_2)$. This simple algebra completely breaks the signature scheme.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Given $s = 7$, $k = 13$, $c_1 = 5$, $c_2 = 3$: if $z_1 = 48$ and $z_2 = 34$, verify that $(z_1 - z_2)/(c_1 - c_2)$ equals $s$.',
    correctAnswer: 7,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$(z_1 - z_2)/(c_1 - c_2) = (48 - 34)/(5 - 3) = 14/2 = 7 = s$. The attacker recovers the private key with simple arithmetic.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which real-world incident was caused by nonce reuse in ECDSA signatures?',
    options: [
      'The PlayStation 3 private key extraction',
      'The DAO hack in Ethereum',
      'The Mt. Gox exchange collapse',
      'The Bitcoin block size debate'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In 2010, Sony used a constant nonce for all PS3 ECDSA signatures. Hackers extracted Sony\'s private key and could then sign any code to run on the PS3.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In FROST, how is nonce reuse prevented?',
    options: [
      'Nonces are derived deterministically from the message',
      'A central coordinator assigns unique nonces to each participant',
      'Each participant generates $(d_i, e_i)$ pairs used exactly once, then deleted',
      'Nonces are stored on the blockchain to prevent reuse',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'FROST participants generate nonce pairs $(d_i, e_i)$ during preprocessing. Each pair is used exactly once for signing and then securely deleted. State management ensures no reuse across sessions.',
  },
];
