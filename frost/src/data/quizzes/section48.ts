import type { QuizQuestion } from './types';

export const section48Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a "scriptless script" in Bitcoin?',
    options: [
      'A transaction without any script at all',
      'A cryptographic protocol that achieves smart contract functionality using only signatures',
      'A script that is too small to see',
      'A compressed version of Bitcoin Script',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Scriptless scripts use cryptographic techniques (especially adaptor signatures) to encode conditions in signatures rather than on-chain scripts. The blockchain sees only a regular signature, hiding the underlying logic.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is an adaptor signature?',
    options: [
      'A signature that adapts to different message formats',
      'An incomplete signature that becomes valid when a secret value is revealed',
      'A signature that works on multiple blockchains',
      'A compressed signature format',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An adaptor signature $\\tilde{\\sigma}$ is offset by a secret $t$: $\\tilde{z} = z - t$. It\'s invalid as-is, but when $t$ is revealed, anyone can compute the valid signature $z = \\tilde{z} + t$. Revealing the signature reveals $t$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How do adaptor signatures enable atomic swaps?',
    options: [
      'By requiring both parties to sign simultaneously',
      'By linking two transactions so completing one reveals the secret needed for the other',
      'By using a trusted third party',
      'By broadcasting both transactions in the same block',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Alice gives Bob an adaptor signature on her payment, offset by secret $t$. Bob gives Alice an adaptor on his payment, offset by the same $t$. When Alice claims Bob\'s payment (revealing $t$), Bob learns $t$ and can claim Alice\'s payment. Atomic!',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How does FROST produce adaptor signatures?',
    options: [
      'FROST cannot produce adaptor signatures',
      'Participants add the adaptor point $T = [t]G$ to their nonce commitment: $R\' = R + T$',
      'The coordinator adds the adaptor after aggregating',
      'Each participant creates their own adaptor',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'To create a FROST adaptor signature for secret $t$ with point $T = [t]G$, participants compute the signature with nonce commitment $R\' = R + T$. The resulting signature is offset by $t$: revealing the valid signature reveals $t$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What privacy advantage do scriptless scripts provide over on-chain conditionals?',
    options: [
      'Scriptless scripts are faster to verify',
      'Contract conditions are invisible on-chain - only standard signatures appear',
      'Scriptless scripts use less memory',
      'They enable higher transaction throughput',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'With scriptless scripts, complex conditions (atomic swaps, payment routing, etc.) are enforced cryptographically. The blockchain only sees ordinary Schnorr signatures, revealing nothing about the underlying protocol or conditions.',
  },
];
